import {
  BoxBufferGeometry,
  CylinderBufferGeometry,
} from "https://cdn.skypack.dev/three@0.132.2";

function createGeometries() {
  // 货舱几何体
  const cabin = new BoxBufferGeometry(2, 2.25, 1.5); // 长度，宽度，高度

  // 鼻子几何体
  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12); // 顶部半径，底部半径，高度，径向段

  // 车轮几何体
  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16); // 顶部半径，底部半径，高度，径向段

  // 烟囱几何体
  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

  return {
    cabin,
    nose,
    wheel,
    chimney,
  };
}

export { createGeometries };
