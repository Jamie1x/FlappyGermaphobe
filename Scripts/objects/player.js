var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            window.onkeydown = this._onKeyDown;
            //window.onkeyup = this._onKeyUp;
        }
        Player.prototype.update = function () {
            //keep falling unless SPACE is pressed, then jump
            if (controls.SPACE) {
                this.jump();
                controls.SPACE = false;
            }
            else {
                this.setTransform(this.x, this.y += 2, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            }
            //die when player leaves the area
            if ((this.y + (this.getBounds().height / 2)) > config.Screen.HEIGHT) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
            if ((this.y + (this.getBounds().height / 2)) < -50) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
        };
        Player.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.SPACE:
                    //console.log("SPACE pressed");
                    controls.SPACE = true;
                    break;
            }
        };
        /*private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.SPACE:
                    controls.SPACE = false;
                    break;
            }
        }*/
        Player.prototype.jump = function () {
            // this.y -= 5;
            this.setTransform(this.x, this.y -= 40, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map