#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
        _radius+(_radius*0.01),
        dot(dist,dist)*4.0);
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color =vec3(1.0,1.0,1.0);
    float hlf = step(0.5,1.-st.y);
    vec3 color3 = vec3(hlf);
    color = color +color3;
    color = step(0.5,color);
 
    float radius6 =0.8;
    float mv6 = 0.0;
    vec2 point6 = vec2(st.x + mv6,st.y);
	vec3 color6 = vec3(circle(point6,radius6));
    color = color6 - 0.2 + color;
    color = vec3(0.4941, 0.4824, 0.4824) - step(0.9,color);
    
    //color = step(0.05,color);
	gl_FragColor = vec4(color, 1.0 );
}