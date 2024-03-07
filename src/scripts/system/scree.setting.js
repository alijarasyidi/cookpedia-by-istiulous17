class ScreenSetting {
    constructor() {
        let h = 1920;
        let w = 1080 + 50;
        this.ratio = Math.min(window.innerWidth / w, window.innerHeight / h);
        this.appHeight = Math.ceil(h * this.ratio);
        this.appWidth = Math.ceil(w * this.ratio);
        this.height = this.appHeight / this.ratio;
        this.width = this.appWidth / this.ratio;
    }
}

export const SScreenSetting = new ScreenSetting();