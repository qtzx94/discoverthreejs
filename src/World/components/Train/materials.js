import { MeshStandardMaterial } from "https://cdn.skypack.dev/three@0.132.2";

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: "firebrick",
    flatShading: true, // 不再混合相邻面。您可以使用它为对象赋予雕刻或多面的外观
  });

  const details = new MeshStandardMaterial({
    color: "darkslategray",
    flatShading: true,
  });

  return { body, details };
}

export { createMaterials };
