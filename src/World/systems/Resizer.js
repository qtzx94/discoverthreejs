class Resizer {
  constructor(container, camera, renderer) {
    // set the camera's aspect ratio
    camera.aspect = container.clientWidth / container.clientHeight;

    // update the camera's frustum 平截头体
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile device)
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };
