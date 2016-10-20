/// <reference path = "_reference.ts" />

//COMP397 Assignment 2
//Jamie Kennedy - 300753196
//October 21, 2016

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;

var currentScene: objects.Scene;
var scene: number;

// Game scenes
var menuScene: scenes.Menu;
var gameScene: scenes.Play;
var gameoverScene: scenes.Gameover;
var instructionsScene: scenes.Instructions;

var collision: managers.Collision;
var newEnemy: boolean;
var newEnemy2: boolean;
var score: number;

// Preload Assets required
var assetData: objects.Asset[] = [
    { id: "BG", src: "../../Assets/images/bg.png" },
    { id: "Player", src: "../../Assets/images/player.png" },
    { id: "Fist", src: "../../Assets/images/fist.png" },
    { id: "Title", src: "../../Assets/images/title.png" },
    { id: "Instructions", src: "../../Assets/images/instructions.png" },
    { id: "GameOver", src: "../../Assets/images/gameover.png" },
    { id: "PlayBtn", src: "../../Assets/images/playBtn.png" },
    { id: "MenuBtn", src: "../../Assets/images/menuBtn.png" },
    { id: "InstructionsBtn", src: "../../Assets/images/instructionsBtn.png" }
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);

    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");

    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);

    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);

    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);

    collision = new managers.Collision();

    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene(): void {

    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.PLAY:
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting PLAY scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.Gameover();
            console.log("Starting GAMEOVER scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
    }

}