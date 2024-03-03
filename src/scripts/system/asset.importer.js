class AssetImporter {
    constructor() {
        this.urls = {};
        this.keys = [];
    }

    execute() {
        let r = require['context']('../../images', false, /\.(mp3|png|jpe?g)$/);
        r.keys().forEach(key => {
            this.urls[key] = r(key);
            this.keys.push(key);
        })
    }
}

export const SAssetImporter = new AssetImporter();