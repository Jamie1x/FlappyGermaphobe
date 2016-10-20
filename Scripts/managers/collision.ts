module managers {
    export class Collision {
        constructor() {
            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(coll: createjs.Bitmap, objColliding: createjs.Bitmap) {
            // Check distance between LASER and enemy

            if ((coll.x + coll.getBounds().width * 0.5) > (objColliding.x - objColliding.getBounds().width * 0.5) &&
                (coll.y - coll.getBounds().height * 0.5) < (objColliding.y + objColliding.getBounds().height * 0.5) &&
                (coll.y + coll.getBounds().height * 0.5) > (objColliding.y - objColliding.getBounds().height * 0.5) &&
                (coll.x - coll.getBounds().width * 0.5) < (objColliding.x + objColliding.getBounds().width * 0.5)) {
                this.destroy(objColliding);
            }

            if ((coll.x + coll.getBounds().width * 0.5) > (objColliding.x - objColliding.getBounds().width * 0.5)) {
                //console.log("passed left");
            }
            if ((coll.y - coll.getBounds().height * 0.5) < (objColliding.y + objColliding.getBounds().height * 0.5)) {
                //console.log("passed bottom");
            }
            if ((coll.y + coll.getBounds().height * 0.5) > (objColliding.y - objColliding.getBounds().height * 0.5)) {
                //console.log("passed top");
            }
            if((coll.x - coll.getBounds().width * 0.5) < (objColliding.x + objColliding.getBounds().width * 0.5)){
                //console.log("passed back");
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
        }

        private destroy(objToDestroy: createjs.Bitmap): void {
            scene = config.Scene.GAMEOVER;
            changeScene();
        }
    }
}