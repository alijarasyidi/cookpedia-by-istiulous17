import * as PIXI from "pixi.js";
import * as PIXI_UI from "@pixi/ui";
import { Scene } from "./scene";
import { TextFormat } from "../system/text.formatter";
import { SSceneManager } from "./scene.manager";
import { SceneKeys } from "./scene.keys";

class MainScene extends Scene {
    setup() {
        const container = this.createContainer();

        const text = new PIXI.Text("this is main scene", TextFormat.header);
        text.position.set(0, -600);
        text.anchor.set(0.5, 0.5);
        container.addChild(text);

        const buttonView = new PIXI.Graphics()
            .beginFill(0xFFFFFF)
            .drawRoundedRect(0, 0, 300, 100, 30)
        const button = new PIXI_UI.Button(buttonView);
        button.onPress.connect(() => {
            SSceneManager.load(SceneKeys.cookBook);
        });
        const buttonText = new PIXI.Text("Go to second scene", TextFormat.normal);
        buttonText.position.set(buttonView.width / 2, buttonView.height / 2);
        buttonText.anchor.set(0.5, 0.5);
        button.view.addChild(buttonText);
        container.addChild(button.view);

        this.instance = container;
    }
}

export const SMainScene = new MainScene();