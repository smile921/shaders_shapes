<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + rsw + Rust + WebAssembly + WebGL + Shader + GLSL" :width=CANVAS_WIDTH :height=CANVAS_HEIGHT />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      CANVAS_WIDTH: CANVAS_WIDTH,
      CANVAS_HEIGHT: CANVAS_HEIGHT, 
    }
  },
  mounted(){
    //
    
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
