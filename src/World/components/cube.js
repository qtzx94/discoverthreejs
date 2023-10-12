/**
 * Components: Cube 模块
 * 立方体组件，包括创建几何体、材质和网格
 */
import {
  BoxBufferGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
} from "https://cdn.skypack.dev/three@0.132.2";

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = new MeshStandardMaterial({ color: "papayawhip" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
