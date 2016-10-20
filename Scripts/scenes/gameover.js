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
    var Gameover = (function (_super) {
        __extends(Gameover, _super);
        // Menu Class Contructor
        function Gameover() {
            _super.call(this);
        }
        Gameover.prototype.start = function () {
            console.log("Gameover Scene Started");
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._gameOver = new createjs.Bitmap(assets.getResult("GameOver"));
            this._gameOver.regX = this._gameOver.getBounds().width / 2;
            this._gameOver.regY = this._gameOver.getBounds().height / 2;
            this._gameOver.x = config.Screen.CENTER_X;
            this._gameOver.y = config.Screen.CENTER_Y - 100;
            this.addChild(this._gameOver);
            this._scoreLbl = new createjs.Text("Score: " + score, "30px 'Press Start 2P'", "#000000");
            this._scoreLbl.x = config.Screen.CENTER_X - 125;
            this._scoreLbl.y = config.Screen.CENTER_Y - 50;
            this.addChild(this._scoreLbl);
            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._startButtonClick, this);
            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        Gameover.prototype.update = function () {
        };
        // Fucntion for when button is pressed
        Gameover.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.PLAY;
            changeScene();
        };
        Gameover.prototype._menuButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Gameover;
    })(objects.Scene);
    scenes.Gameover = Gameover;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map