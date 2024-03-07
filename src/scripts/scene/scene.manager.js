import { SMainScene } from "./scene.main";
import { SCookBookScene } from "./scene.cookbook";
import { STitleScene } from "./scene.title";
import { SceneKeys } from "./scene.keys";

class SceneManager {
    constructor() {
        this.currentScene = "";
    }

    setupAll() {
        SMainScene.setup();
        SCookBookScene.setup();
        STitleScene.setup();
    }

    load(scene) {
        if (this.currentScene.length != 0) {
            this.#unload(this.currentScene);
        }

        console.log(`scene.manager | load ${scene} scene`);

        switch (scene) {
            case SceneKeys.main:
                SMainScene.load();
                break;
            case SceneKeys.cookBook:
                SCookBookScene.load();
                break;
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
            case SceneKeys.main:
                SMainScene.unload();
                break;
            case SceneKeys.cookBook:
                SCookBookScene.unload();
                break;
            case SceneKeys.title:
                STitleScene.unload();
                break;
            default:
                throw new Error(`invalid scene: ${scene}`);
        };
    }
}

export const SSceneManager = new SceneManager();