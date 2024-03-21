import * as PIXI from "pixi.js";
import { Scene } from "./scene";
import { App } from "../app";
import { AssetKeys } from "../system/asset.keys";
import { TextFormat } from "../system/text.formatter";
import { SScreenSetting } from "../system/screen.setting";
import { SceneKeys } from "./scene.keys";
import { SSceneManager } from "./scene.manager";

class TitleScene extends Scene {
    #logo = {};
    #isShrinkingLogoAnim = true;

    setup() {
        const container = this.createContainer();

        const hitBox = this.#createHitBox(() => {
            SSceneManager.load(SceneKeys.dining);
        });
        container.addChild(hitBox);

        const logo = this.#createLogo();
        this.#logo = logo;
        container.addChild(logo);

        const text = this.#createText();
        container.addChild(text);

        this.instance = container;

        App.instance.ticker.add(this.#animateLogo);
    }

    #createHitBox(callback) {
        const hitBox = new PIXI.Graphics()
            .beginFill('000000')
            .drawRect(-SScreenSetting.width / 2, -SScreenSetting.height / 2, SScreenSetting.width, SScreenSetting.height)
            .endFill();
        hitBox.alpha = 0;
        hitBox.eventMode = 'static';
        hitBox.on('pointerdown', () => {
            callback();
        });
        return hitBox;
    }

    #createLogo() {
        const logo = PIXI.Sprite.from(AssetKeys.istiulousLogo);
        logo.anchor.set(0.5, 0.5);
        logo.position.set(0, -300);
        return logo;
    }

    #createText() {
        const text = new PIXI.Text("[SITE UNDER CONSTRUCTION]", TextFormat.temp);
        text.anchor.set(0.5, 0.5);
        text.position.y = (SScreenSetting.height / 2) - 200;
        return text;
    }

    #animateLogo = (time) => {
        if (!this.isLoaded) {
            return;
        }

        if (this.#isShrinkingLogoAnim) {
            this.#logo.scale.x -= 0.005 * time;
            this.#logo.scale.y -= 0.005 * time;

            if (this.#logo.scale.x <= 0.8) {
                this.#isShrinkingLogoAnim = false;
            }
        } else {
            this.#logo.scale.x += 0.005 * time;
            this.#logo.scale.y += 0.005 * time;

            if (this.#logo.scale.x >= 1) {
                this.#isShrinkingLogoAnim = true;
            }
        }
    }
}

export const STitleScene = new TitleScene();