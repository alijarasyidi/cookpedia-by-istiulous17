import * as PIXI from "pixi.js";
import { App } from "../app";
import { SScreenSetting } from "../system/screen.setting";

export class Scene {
    constructor() {
        this.instance = {};
        this.isLoaded = false;
    }

    setup() {
        this.instance = new PIXI.Container();
    }

    load() {
        App.instance.stage.addChild(this.instance);
        this.isLoaded = true;
    }

    unload() {
        App.instance.stage.removeChild(this.instance);
        this.isLoaded = false;
    }

    createContainer() {
        const container = new PIXI.Container();

        container.scale.x = SScreenSetting.ratio;
        container.scale.y = SScreenSetting.ratio;
        container.x = SScreenSetting.appWidth / 2;
        container.y = SScreenSetting.appHeight / 2;

        return container;
    }
}