var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (coll, objColliding) {
            // Check distance between LASER and enemy
            if ((coll.x + coll.getBounds().width * 0.5) > (objColliding.x - objColliding.getBounds().width * 0.5) &&
                (coll.y - coll.getBounds().height * 0.5) < (objColliding.y + objColliding.getBounds().height * 0.5) &&
                (coll.y + coll.getBounds().height * 0.5) > (objColliding.y - objColliding.getBounds().height * 0.5) &&
                (coll.x - coll.getBounds().width * 0.5) < (objColliding.x + objColliding.getBounds().width * 0.5)) {
                this.destroy(objColliding);
            }
            if ((coll.x + coll.getBounds().width * 0.5) > (objColliding.x - objColliding.getBounds().width * 0.5)) {
            }
            if ((coll.y - coll.getBounds().height * 0.5) < (objColliding.y + objColliding.getBounds().height * 0.5)) {
            }
            if ((coll.y + coll.getBounds().height * 0.5) > (objColliding.y - objColliding.getBounds().height * 0.5)) {
            }
            if ((coll.x - coll.getBounds().width * 0.5) < (objColliding.x + objColliding.getBounds().width * 0.5)) {
            }
            /*
            let tempDist = objects.Vector2.distance(obj1.position, obj2.position);

            if(tempDist < (obj1.width * 0.5 + obj2.width)) {
                if(obj1.name == "enemy") {
                    this.destroy(obj1)
                }
                if(obj2.name == "enemy") {
                    this.destroy(obj2);
                }
            }
            */
        };
        Collision.prototype.destroy = function (objToDestroy) {
            scene = config.Scene.GAMEOVER;
            changeScene();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map