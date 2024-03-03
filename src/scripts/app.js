import * as PIXI from "pixi.js";
import { SSceneManager } from "./scene/scene.manager";
import { SSceneKeys } from "./scene/scene.keys";
import { SAssetLoader } from "./system/asset.loader";

class Application {
    constructor() {
        this.instance = {};
        this.widthView = 0;
        this.heightView = 0;
    }

    async run() {
        const app = new PIXI.Application({
            background: 'F5DD61',
            resizeTo: window
        });

        this.widthView = app.view.width;
        this.heightView = app.view.height;
        this.instance = app;

        document.body.appendChild(this.instance.view);

        if (!SAssetLoader.isLoaded)
            await SAssetLoader.loadAll();

        SSceneManager.setupAll();
        SSceneManager.load(SSceneKeys.main);
    }
}

export const App = new Application();