/**
 * 创建每个 three.js 应用程序都需要所有的六个步骤，更复杂的程序需要更多
 * 1、初始设置
 * 2、创建场景
 * 3、创建相机
 * 4、创建可见对象
 * 5、创建渲染器
 * 6、渲染场景
 */
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three@0.132.2";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Get a reference to the container element that will hold our scene
// 1、初始设置
const container = document.querySelector("#scene-container");

// Create a scene
// 2、创建场景
const scene = new Scene();
scene.background = new Color("skyblue");

// Create a camera
// 3、创建相机
/**
 * PerspectiveCamera 有四个参数
 * fov，视野：相机的视野有多宽，以度为单位
 * aspect，纵横比：场景的宽度与高度的比率
 * near，近剪裁平面：任何比这更靠近相机的东西都是不可见的
 * far，远剪裁平面：任何比这个更远离相机的东西都是不可见的
 */
const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initally created at (0, 0, 0)
// move the camera back so we can view the scene
// 将相机移回 Z 轴
camera.position.set(0, 0, 10);

// Create a geometry
// 创建几何体
const geometry = new BoxBufferGeometry(2, 2, 2); // 三个参数定义了盒子的宽度、高度、深度

// Create a default (white) Basic material
// 创建材质
const material = new MeshBasicMaterial();

// Create a Mesh containing the geometry and material
// 4、创建可见对象
const cube = new Mesh(geometry, material);

// Add the mesh to scene
scene.add(cube);

// Create the renderer
// 5、创建渲染器
const renderer = new WebGLRenderer();

// Next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// Finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// Add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// 6、渲染场景
renderer.render(scene, camera);
