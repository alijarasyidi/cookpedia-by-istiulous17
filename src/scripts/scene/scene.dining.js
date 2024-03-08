import * as PIXI from "pixi.js";
import * as PIXI_UI from "@pixi/ui";
import { Scene } from "./scene";
import { App } from "../app";
import { AssetKeys } from "../system/asset.keys";
import { TextFormat } from "../system/text.formatter";
import { SScreenSetting } from "../system/screen.setting";

class DiningScene extends Scene {
    setup() {
        const container = this.createContainer();

        const invisibleBg = PIXI.Sprite.from(PIXI.Texture.WHITE);
        invisibleBg.anchor.set(0.5, 0.5);
        invisibleBg.width = SScreenSetting.width;
        invisibleBg.height = SScreenSetting.height;
        invisibleBg.alpha = 0;
        invisibleBg.eventMode = 'static';
        invisibleBg.on('click', () => {
            container.removeChild(invisibleBg);
            container.removeChild(popup);
        });

        const popup = PIXI.Sprite.from(AssetKeys.popup);
        popup.anchor.set(0.5, 0.5);
        popup.scale.set(1.2, 1.2);

        const bg = PIXI.Sprite.from(AssetKeys.diningBg);
        bg.anchor.set(0.5, 0.5);
        bg.height = SScreenSetting.height;
        bg.width = SScreenSetting.width;
        container.addChild(bg);

        const ramen = PIXI.Sprite.from(AssetKeys.ramen);
        ramen.anchor.set(0.5, 0, 5);
        ramen.scale.set(0.8, 0.5);
        ramen.position.set(200, 400);
        ramen.eventMode = 'static';
        ramen.on('click', () => {
            container.addChild(invisibleBg);
            container.addChild(popup);
        });
        container.addChild(ramen);

        this.instance = container;
    }
}

export const SDiningScene = new DiningScene();