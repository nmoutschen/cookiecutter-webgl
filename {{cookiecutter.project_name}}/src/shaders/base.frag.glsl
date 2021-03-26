#version 300 es

out highp vec4 pc_fragColor;

precision highp float;
precision highp int;

vec4 getColor(vec2 pos) {
  return mod(vec4(
    pos.x / 100.,
    pos.y / 100.,
    pos.x / 100.,
    1.
  ), 1.);
}

void main() {
  pc_fragColor = getColor(gl_FragCoord.xy);
}