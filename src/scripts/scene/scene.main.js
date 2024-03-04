import * as PIXI from "pixi.js";
import * as PIXI_UI from "@pixi/ui";
import { Scene } from "./scene";
import { App } from "../app";
import { TextFormat } from "../system/text.formatter";
import { SSceneManager } from "./scene.manager";
import { SceneKeys } from "./scene.keys";

class MainScene extends Scene {
    setup() {
        const container = new PIXI.Container();

        const text = new PIXI.Text("this is main scene", TextFormat.header);
        text.position.set(App.widthView / 2, App.heightView / 10);
        text.anchor.set(0.5, 0.5);
        container.addChild(text);

        const buttonView = new PIXI.Graphics()
            .beginFill(0xFFFFFF)
            .drawRoundedRect(0, 0, 300, 100, 30)
        const button = new PIXI_UI.Button(buttonView);
        button.view.position.set(App.widthView / 2 - buttonView.width / 2, App.heightView / 2);
        button.onPress.connect(() => {
            SSceneManager.load(SceneKeys.cookBook);
        });
        const buttonText = new PIXI.Text("Go to second scene", TextFormat.normal);
        buttonText.style.fontSize = 24;
        buttonText.style.letterSpacing = 0;
        buttonText.position.set(buttonView.width / 2, buttonView.height / 2);
        buttonText.anchor.set(0.5, 0.5);
        button.view.addChild(buttonText);
        container.addChild(button.view);

        this.instance = container;
    }
}

export const SMainScene = new MainScene();