<template>
  <h1>{{ msg }}</h1>
  <!-- {{ height }} -- {{ width }} -->
  <p>
    FPS is {{ FPS_THROTTLE }} 
    <p></p>
    <canvas
      id="canv-id"
      ref="tagCanvas"
      :height=height
      :width=width
    />
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import  * as Taiji from 'wasm_taiji'
import { Torus } from 'wasm_taiji';

const FPS_THROTTLE = 1000.0 / 60;
interface Props {
  wasmModule: Record<string, any>;
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log(this.height);
  },
  data(){
    return {
      current: false,
      FPS_THROTTLE,
    }
  },
  async mounted(){
    // if (this.current) {
    //   return;
    // }
    // this.current = false;
    // debugger
    let ref: any = this.$refs;
    const gl = ref.tagCanvas.getContext("webgl", { antialias: true });

    if (!gl) {
      console.log( "Failed to intialize WebGL context" );
      return;
    } else {
      console.log("Successfully established WebGL context.");
    }
    let that = this;
    // console.debug('Taiji ', Taiji);
    Taiji.default().then(async (df) => {
      console.log('loaded wasm module ', df)
      // here df is object Torus
      await Torus;
      const torus = new Torus("canv-id");
      // debugger
      // torus.render(that.width,that.height, 500.0);
      const initTime = Date.now();
      let lastDrawTime = -1;

      const animate = () => {
        const animationID = setInterval(() => {
          window.requestAnimationFrame(() => {
            const currTime = Date.now();
            console.log(' runing animate '+ currTime)
            if (currTime - lastDrawTime < FPS_THROTTLE)
              return;
            lastDrawTime = currTime;
            const elapsedTime = (currTime - initTime) / 1000;
            torus.render(that.width, that.height, elapsedTime);
          });
          console.log('set interval runing .')
        }, FPS_THROTTLE);

        // animationID();
        //dispatch({ kind: ActionType.SetAnimationID, payload: animationID });
      };
      animate();
    });    

  },
  setup: (props) => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

canvas#canv-id {
  background-color: rgb(248, 206, 206);
}
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
