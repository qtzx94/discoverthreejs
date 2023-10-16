import { World } from "./World/World.js";

// create the main function
function main() {
  // get a reference to the container element
  const container = document.querySelector("#scene-container");

  // create an instance of the World app
  const world = new World(container);

  // render the scene
  world.start();

  // world.render();
}

// call main to start the app
main();
