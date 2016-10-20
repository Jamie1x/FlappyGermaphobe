/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // Menu Class Contructor
        function Instructions() {
            _super.call(this);
        }
        Instructions.prototype.start = function () {
            console.log("Menu Scene Started");
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._instructions = new createjs.Bitmap(assets.getResult("Instructions"));
            this._instructions.regX = this._instructions.getBounds().width / 2;
            this._instructions.regY = this._instructions.getBounds().height / 2;
            this._instructions.x = config.Screen.CENTER_X;
            this._instructions.y = config.Screen.CENTER_Y - 50;
            this.addChild(this._instructions);
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 200);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._startButtonClick, this);
            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 200);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Instructions.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Instructions.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.PLAY;
            changeScene();
        };
        Instructions.prototype._menuButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map