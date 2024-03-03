import { SMainScene } from "./scene.main";
import { SCookBookScene } from "./scene.cookbook";
import { SSceneKeys } from "./scene.keys";

class SceneManager {
    constructor() {
        this.currentScene = "";
    }

    setupAll() {
        SMainScene.setup();
        SCookBookScene.setup();
    }

    load(scene) {
        if (this.currentScene.length != 0) {
            this.#unload(this.currentScene);
        }

        console.log(`scene.manager | load ${scene} scene`);

        if (scene === SSceneKeys.main) {
            SMainScene.load();
        } else if (scene === SSceneKeys.cookBook) {
            SCookBookScene.load();
        }
        this.currentScene = scene;
    }

    #unload(scene) {
        console.log(`scene.manager | unload ${scene} scene`);

        if (scene === SSceneKeys.main) {
            SMainScene.unload();
        } else if (scene === SSceneKeys.cookBook) {
            SCookBookScene.unload();
        }
    }
}

export const SSceneManager = new SceneManager();