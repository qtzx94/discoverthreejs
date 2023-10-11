const setSize = (container, camera, renderer) => {
  // set the camera's aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum 平截头体
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize(container.clientWidth, container.clientHeight);

  // set the pixel ratio (for mobile device)
  renderer.setPixelRatio(window.devicePixelRatio);
};
class Resizer {
  constructor(container, camera, renderer) {
    // set initial size on load
    setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      // set the size again if a resize occurs(发生)
      setSize(container, camera, renderer);
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
