//could'nt add two objects to the scene without breaking the first object
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy2 = (function (_super) {
        __extends(Enemy2, _super);
        function Enemy2(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
        }
        Enemy2.prototype.update = function () {
            this.setTransform(this.x -= 2, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            if (this.x <= -50) {
                newEnemy2 = true;
                currentScene.removeChild(this);
            }
        };
        return Enemy2;
    })(createjs.Bitmap);
    objects.Enemy2 = Enemy2;
})(objects || (objects = {}));
//# sourceMappingURL=enemy2.js.map