import * as PIXI from "pixi.js";
import { Scene } from "./scene";
import { App } from "../app";
import { AssetKeys } from "../system/asset.keys";
import { TextFormat } from "../system/text.formatter";
import { SScreenSetting } from "../system/screen.setting";

class TitleScene extends Scene {

    setup() {
        const container = this.createContainer();

        const logo = PIXI.Sprite.from(AssetKeys.istiulousLogo);
        logo.anchor.set(0.5, 0.5);
        logo.position.set(0, -300);
        container.addChild(logo);

        const text = new PIXI.Text("[SITE UNDER CONSTRUCTION]", TextFormat.temp);
        text.anchor.set(0.5, 0.5);
        text.position.y = (SScreenSetting.height / 2) - 200;
        container.addChild(text);

        this.instance = container;

        let isShrink = true;
        App.instance.ticker.add((time) => {
            if (!this.isLoaded) {
                return;
            }

            if (isShrink) {
                logo.scale.x -= 0.005 * time;
                logo.scale.y -= 0.005 * time;

                if (logo.scale.x <= 0.8) {
                    isShrink = false;
                }
            } else {
                logo.scale.x += 0.005 * time;
                logo.scale.y += 0.005 * time;

                if (logo.scale.x >= 1) {
                    isShrink = true;
                }
            }
        })
    }
}

export const STitleScene = new TitleScene();