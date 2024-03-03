import * as PIXI from "pixi.js";
import { SAssetImporter } from "./asset.importer";

class AssetLoader {
    constructor() {
        this.isLoaded = false;
    }

    async loadAll() {
        SAssetImporter.execute();

        this.#addAll();

        await PIXI.Assets.load(SAssetImporter.keys);

        this.isLoaded = true;
    }

    #addAll() {
        SAssetImporter.keys.forEach(key => {
            PIXI.Assets.add({ alias: key, src: SAssetImporter.urls[key].default })
        })
    }
}

export const SAssetLoader = new AssetLoader();