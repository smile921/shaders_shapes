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
    vec2 point = vec2(st.x + 0.25,st.y);
	vec3 color = vec3(circle(point,0.2));

    vec2 point1 = vec2(st.x - 0.25,st.y);
	vec3 color1 = vec3(circle(point1,0.2));
	gl_FragColor = vec4( color+color1, 1.0 );
}