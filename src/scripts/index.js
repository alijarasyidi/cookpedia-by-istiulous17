import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    background: `F5DD61`,
    resizeTo: window
})

document.body.appendChild(app.view);

const style = new PIXI.TextStyle({
    fill: "#ffffff",
    fontFamily: "Verdana",
    fontWeight: "bolder",
    letterSpacing: 2,
    strokeThickness: 4
});
const text = new PIXI.Text('istiulous17', style);

text.position.set(app.view.width / 2, app.view.height / 4);
text.anchor.set(0.5, 0.5);

app.stage.addChild(text);