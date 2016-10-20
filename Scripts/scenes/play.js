var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
        }
        Play.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            score = 0;
            this._scoreLbl = new createjs.Text("Score: " + score, "20px 'Press Start 2P'", "#000000");
            this._scoreLbl.x = config.Screen.WIDTH - 200;
            this.addChild(this._scoreLbl);
            this._player = new objects.Player("Player", 50, config.Screen.CENTER_Y);
            this.addChild(this._player);
            /*this._tempEnemy = new objects.Enemy("Fist", (config.Screen.WIDTH * 1.5) + 50, config.Screen.HEIGHT);
            this.addChild(this._tempEnemy);
            this._tempEnemy2 = new objects.Enemy("Fist", (config.Screen.WIDTH * 1.5) + 50, config.Screen.HEIGHT - config.Screen.HEIGHT);
            this._tempEnemy2.rotation = 180;
            this.addChild(this._tempEnemy2);*/
            newEnemy = true;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            if (newEnemy == true) {
                newEnemy = false;
                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);
                this._enemy = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy);
                this._enemy2 = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemy2.rotation = 180;
                this.addChild(this._enemy2);
            }
            this._scoreLbl.text = "Score: " + score;
            if (this._player.x == this._enemy.x) {
                score++;
            }
            collision.check(this._player, this._enemy);
            this._player.update();
            this._enemy.update();
            this._enemy2.update();
            //this._tempEnemy.update();
            //this._tempEnemy2.update();            
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map