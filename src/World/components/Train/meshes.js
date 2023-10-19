import { Mesh } from "https://cdn.skypack.dev/three@0.132.2";

import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";

function createMeshes() {
  const geometries = createGeometries();
  const materials = createMaterials();

  // 货舱和烟囱网格
  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 1.4, 0);

  const chimney = new Mesh(geometries.chimney, materials.details);
  chimney.position.set(-2, 1.9, 0);

  // 鼻子网格
  const nose = new Mesh(geometries.nose, materials.body);
  nose.position.set(-1, 1, 0);
  nose.rotation.z = Math.PI / 2;

  // 车轮原型
  const smallWheelRear = new Mesh(geometries.wheel, materials.details);
  smallWheelRear.position.y = 0.5;
  smallWheelRear.rotation.x = Math.PI / 2;

  // 克隆其他两个轮子
  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  // 创建大后轮
  const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2); // 缩放独立于旋转发生，因此即使我们旋转了网格，我们也必须根据原始的、未旋转的几何体来决定如何缩放。

  return {
    nose,
    cabin,
    chimney,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel,
  };
}

export { createMeshes };
