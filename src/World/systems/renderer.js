/*
 * @Author: zhangbei zhangbei@myhexin.com
 * @Date: 2023-10-09 19:12:41
 * @LastEditors: zhangbei zhangbei@myhexin.com
 * @LastEditTime: 2023-10-23 20:42:11
 * @FilePath: /discoverthreejs/src/World/systems/renderer.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Systems: Renderer 模块
 */
import { WebGLRenderer } from "https://cdn.skypack.dev/three@0.132.2";

function createRenderer() {
  // antialias: 是否打开抗锯齿
  const renderer = new WebGLRenderer({ antialias: true });

  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
