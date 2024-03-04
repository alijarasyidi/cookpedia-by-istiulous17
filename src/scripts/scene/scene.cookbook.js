import * as PIXI from "pixi.js";
import * as PIXIUI from "@pixi/ui";
import { Scene } from "./scene";
import { App } from "../app";
import { TextFormat } from "../system/text.formatter";
import { SSceneManager } from "./scene.manager";
import { SSceneKeys } from "./scene.keys";

class CookBookScene extends Scene {
    setup() {
        const container = new PIXI.Container();

        const text = new PIXI.Text("this is second scene", TextFormat.header);
        text.position.set(App.widthView / 2, App.heightView / 10);
        text.anchor.set(0.5, 0.5);
        container.addChild(text);

        const buttonView = new PIXI.Graphics()
            .beginFill(0xFFFFFF)
            .drawRoundedRect(0, 0, 300, 100, 30)
        const button = new PIXIUI.Button(buttonView);
        button.view.position.set(App.widthView / 2 - buttonView.width / 2, App.heightView / 2);
        button.onPress.connect(() => {
            SSceneManager.load(SSceneKeys.main);
        });
        const buttonText = new PIXI.Text("Go to main scene", TextFormat.normal);
        buttonText.style.fontSize = 24;
        buttonText.style.letterSpacing = 0;
        buttonText.position.set(buttonView.width / 2, buttonView.height / 2);
        buttonText.anchor.set(0.5, 0.5);
        button.view.addChild(buttonText);
        container.addChild(button.view);

        this.instance = container;
    }
}

export const SCookBookScene = new CookBookScene();