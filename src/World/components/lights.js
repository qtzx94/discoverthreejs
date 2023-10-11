import { DirectionalLight } from "https://cdn.skypack.dev/three@0.132.2";

function createLights() {
  // create a directional light
  // DirectionalLight 构造函数有两个参数，颜色 color 和强度 intensity
  // 这里创建一个强度为8的纯白光
  const ligth = new DirectionalLight("white", 8);

  // move the light right, up, and towards us
  ligth.position.set(10, 10, 10);

  return ligth;
}

export { createLights };
