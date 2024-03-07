import * as PIXI from "pixi.js";
import { SScreenSetting } from "./system/scree.setting";
import { SSceneManager } from "./scene/scene.manager";
import { SceneKeys } from "./scene/scene.keys";
import { SAssetLoader } from "./system/asset.loader";

class Application {
    constructor() {
        this.instance = {};
    }

    async run() {
        const app = new PIXI.Application({
            background: 'EADFB4',
            height: SScreenSetting.appHeight,
            width: SScreenSetting.appWidth
        });

        this.instance = app;

        document.body.appendChild(this.instance.view);

        if (!SAssetLoader.isLoaded)
            await SAssetLoader.loadAll();

        SSceneManager.setupAll();
        SSceneManager.load(SceneKeys.title);
    }
}

export const App = new Application();