/**
 * Systems: Renderer 模块
 */
import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.132.2";

function createRenderer() {
  // antialias: 是否打开抗锯齿
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  // start the loop
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });

  return renderer;
}

export { createRenderer };
