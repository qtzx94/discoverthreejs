import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = field of view
    1, // aspect ratio (dummy value) 虚拟值
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera so we can view the scene
  camera.position.set(0, 0, 10);

  camera.tick = () => {
    camera.position.z += 0.01;
  };

  return camera;
}

export { createCamera };
