/*
 * @Author: zhangbei zhangbei@myhexin.com
 * @Date: 2023-10-09 19:03:15
 * @LastEditors: zhangbei zhangbei@myhexin.com
 * @LastEditTime: 2023-10-23 21:19:42
 * @FilePath: /discoverthreejs/src/World/World.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { loadBirds } from "./components/birds/birds.js";
import { createCamera } from "./components/camera.js";

import { createAxesHelper, createGridHelper } from "./components/helpers.js";

import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
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
let controls;
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

    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);

    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);

    // scene.add(createAxesHelper(), createGridHelper());
  }

  // asynchronous setup here load bird models
  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);

    loop.updatables.push(parrot, flamingo, stork);

    scene.add(parrot, flamingo, stork);
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
