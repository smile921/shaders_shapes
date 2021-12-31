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
    float radius =0.2;
    float mv = 0.22444445;
    vec2 point = vec2(st.x + mv,st.y);
	vec3 color2 = vec3(circle(point,radius));

    vec2 point1 = vec2(st.x - mv,st.y);
	vec3 color1 = vec3(circle(point1,radius));
    vec3 color = color1 -color2;
    float hlf = step(0.5,1.-st.y);
    vec3 color3 = vec3(hlf);
    color = color +color3;
    color = step(0.5,color);

    float radius4 =0.0061;
    float mv4 = 0.22444445;
    vec2 point4 = vec2(st.x + mv4,st.y);
	vec3 color4 = vec3(circle(point4,radius4));
    
    vec2 point5 = vec2(st.x - mv4,st.y);
	vec3 color5 = vec3(circle(point5,radius4));
    color =color4 +color -color5;
    //color = vec3(0.0,0.0,0.0);
	gl_FragColor = vec4(color, 1.0 );
}