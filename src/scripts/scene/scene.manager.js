import { SceneKeys } from "./scene.keys";
import { STitleScene } from "./scene.title";

class SceneManager {
    constructor() {
        this.currentScene = "";
    }

    setupAll() {
        STitleScene.setup();
    }

    load(scene) {
        if (this.currentScene.length != 0) {
            this.#unload(this.currentScene);
        }

        console.log(`scene.manager | load ${scene} scene`);

        switch (scene) {
            case SceneKeys.title:
                STitleScene.load();
                break;
            default:
                throw new Error(`invalid scene: ${scene}`);
        };

        this.currentScene = scene;
    }

    #unload(scene) {
        console.log(`scene.manager | unload ${scene} scene`);

        switch (scene) {
            case SceneKeys.title:
                STitleScene.unload();
                break;
            default:
                throw new Error(`invalid scene: ${scene}`);
        };
    }
}

export const SSceneManager = new SceneManager();