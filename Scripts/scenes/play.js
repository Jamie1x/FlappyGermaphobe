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
            console.log("Play Scene Started");
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            score = 0;
            this._scoreLbl = new createjs.Text("" + score, "50px 'Press Start 2P'", "#000000");
            this._scoreLbl.x = config.Screen.CENTER_X - 10;
            this._scoreLbl.y = config.Screen.CENTER_Y / 2;
            this.addChild(this._scoreLbl);
            this._player = new objects.Player("Player", 50, config.Screen.CENTER_Y);
            this.addChild(this._player);
            newEnemy = true;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            if (newEnemy == true) {
                newEnemy = false;
                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);
                this._enemy = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy);
                this._enemyTop = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemyTop.rotation = 180;
                this.addChild(this._enemyTop);
            }
            if (this._enemy.x == config.Screen.CENTER_X) {
                newEnemy2 = true;
            }
            if (newEnemy2 == true) {
                newEnemy2 = false;
                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);
                this._enemy2 = new objects.Enemy2("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy2);
                this._enemy2Top = new objects.Enemy2("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemy2Top.rotation = 180;
                this.addChild(this._enemy2Top);
            }
            this._scoreLbl.text = "" + score;
            if (this._player.x == this._enemy.x) {
                score++;
            }
            collision.check(this._player, this._enemy);
            collision.check(this._player, this._enemyTop);
            this._player.update();
            this._enemy.update();
            this._enemyTop.update();
            if (this._enemy2) {
                collision.check(this._player, this._enemy2);
                collision.check(this._player, this._enemy2Top);
                this._enemy2.update();
                this._enemy2Top.update();
                if (this._player.x == this._enemy2.x) {
                    score++;
                }
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map