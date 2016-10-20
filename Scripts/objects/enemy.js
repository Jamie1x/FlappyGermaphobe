var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
        }
        Enemy.prototype.update = function () {
            //make enemies move toward player
            this.setTransform(this.x -= 2, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            //destroy object when it leaves the screen and spawn new enemy
            if (this.x <= -50) {
                newEnemy = true;
                currentScene.removeChild(this);
            }
        };
        return Enemy;
    })(createjs.Bitmap);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map