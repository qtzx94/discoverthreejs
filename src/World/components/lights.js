import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
} from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  // const ambientLight = new AmbientLight("white", 2); // 环境光

  const ambientLight = new HemisphereLight("white", "darkslategrey", 5); // 半球光
  // create a directional light
  // DirectionalLight 构造函数有两个参数，颜色 color 和强度 intensity
  // 这里创建一个强度为8的纯白光
  const mainLight = new DirectionalLight("white", 6);

  // mainLight.visible = false;

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
