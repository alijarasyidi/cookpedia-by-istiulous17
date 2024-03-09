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

        const bg = PIXI.Sprite.from(AssetKeys.diningBg);
        bg.anchor.set(0.5, 0.5);
        bg.height = SScreenSetting.height;
        bg.width = SScreenSetting.width;
        container.addChild(bg);

        const overlay = this.#createOverlay(() => {
            container.removeChild(overlay);
            container.removeChild(popup);
        });

        const popup = this.#createPopup();

        const ramen = this.#createRamen(() => {
            container.addChild(overlay);
            container.addChild(popup);
        });
        container.addChild(ramen);

        this.instance = container;
    }

    #createOverlay(callback) {
        const overlay = new PIXI.Graphics()
            .beginFill('000000')
            .drawRect(-SScreenSetting.width / 2, -SScreenSetting.height / 2, SScreenSetting.width, SScreenSetting.height)
            .endFill();
        overlay.alpha = 0.5;
        overlay.eventMode = 'static';
        overlay.on('pointerdown', () => {
            callback();
        });
        return overlay;
    }

    #createPopup() {
        const popup = PIXI.Sprite.from(AssetKeys.popup);
        popup.anchor.set(0.5, 0.5);
        popup.scale.set(1.2, 1.2);

        let h = 1250;
        let w = 700;
        const hitBox = new PIXI.Graphics()
            .beginFill('000000')
            .drawRect(-w / 2, -h / 2, w, h)
            .endFill();
        hitBox.alpha = 0;
        hitBox.eventMode = 'static';
        popup.addChild(hitBox);

        return popup;
    }

    #createRamen(callback) {
        const ramen = PIXI.Sprite.from(AssetKeys.ramen);
        ramen.anchor.set(0.5, 0.5);
        ramen.scale.set(0.8, 0.5);
        ramen.position.set(200, 400);

        const hitBox = new PIXI.Graphics()
            .beginFill('000000')
            .drawCircle(0, 0, 220)
            .endFill();
        hitBox.alpha = 0;
        hitBox.eventMode = 'static';
        hitBox.on('pointerdown', () => {
            callback();
        });
        ramen.addChild(hitBox);

        return ramen;
    }
}

export const SDiningScene = new DiningScene();