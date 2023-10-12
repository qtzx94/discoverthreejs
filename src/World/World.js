import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

/**
 * 设置相机、场景和渲染器，它们都需要在构造函数中创建，然后在 World.render 方法中访问。
 * 通常，这意味着我们会将它们保存成类成员变量：this.camera、this.scene、this.renderer
 * 注意：使用this.camera的写法，成员变量可以在实例中访问到，这不是我们希望的，
 * 所以，改成以下形式(通过在模块作用域内声明变量来创建类似于私有变量的东西)
 * let camera;
 * camera = createCamera();
 * 这种情况下，当我们创建多个类的实例时，会有问题，
 * 因为模块作用域变量将在两个实例之间共享，所以第二个实例将覆盖第一个实例的变量
 */

let camera;
let scene;
let renderer;
let loop;

class World {
  // 1、create an instance of the World app
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    // 将画布添加到容器中
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();

    loop.updatables.push(cube);
    loop.updatables.push(camera);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
  }

  // 2、render the scene
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
