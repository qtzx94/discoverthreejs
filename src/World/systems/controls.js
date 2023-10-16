import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  //   controls.enablePan = false; // 禁用平移

  controls.enableDamping = true; // 启用阻尼(添加惯性)

  //   controls.enabled = false; // 完全启用或禁用控件

  //   controls.listenToKeyEvents(window); // 监听按键事件并使用箭头键平移相机

  controls.autoRotate = true; // 将使相机自动围绕.target旋转
  controls.autoRotateSpeed = 1;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
