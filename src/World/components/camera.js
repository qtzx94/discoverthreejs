/*
 * @Author: zhangbei zhangbei@myhexin.com
 * @Date: 2023-10-09 19:12:18
 * @LastEditors: zhangbei zhangbei@myhexin.com
 * @LastEditTime: 2023-10-23 20:48:10
 * @FilePath: /discoverthreejs/src/World/components/camera.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PerspectiveCamera } from "https://cdn.skypack.dev/three@0.132.2";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = field of view
    1, // aspect ratio (dummy value) 虚拟值
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera so we can view the scene
  camera.position.set(-1.5, 1.5, 6.5);

  // camera.tick = () => {
  //   camera.position.z += 0.01;
  // };

  return camera;
}

export { createCamera };
