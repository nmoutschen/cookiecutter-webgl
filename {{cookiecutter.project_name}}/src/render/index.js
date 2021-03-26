import {
  WebGLRenderer,
} from 'three';

import ShaderScene from './shader';

export default class Render {
  constructor({
    domElement = document.body,
    width = window.innerWidth,
    height = window.innerHeight,
  } = {}) {
    // Create the renderer
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(width, height);
    domElement.appendChild(this.renderer.domElement);

    this.shader = new ShaderScene();
  }

  render() {
    this.shader.render(this.renderer);
  }

  onResize(width, height) {
    this.renderer.setSize(width, height);
  }
}
