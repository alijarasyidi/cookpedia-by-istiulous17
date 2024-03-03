import * as PIXI from "pixi.js";
import { App } from "../app";

export class Scene {
    constructor() {
        this.instance = {};
    }

    setup() {
        this.instance = new PIXI.Container();
    }

    load() {
        App.instance.stage.addChild(this.instance);
    }

    unload() {
        App.instance.stage.removeChild(this.instance);
    }
}