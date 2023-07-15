import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Page = () => {
  const loader = new GLTFLoader();
  loader.load("/models/Lantern.gltf", function (gltf) {
    const model = gltf.scene;
    // Lakukan manipulasi atau tambahkan model ke dalam scene di sini
    scene.add(model);
  });
  return <div>Page</div>;
};

export default Page;
