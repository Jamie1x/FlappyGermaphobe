//could'nt add two objects to the scene without breaking the first object

module objects {
    export class Enemy2 extends createjs.Bitmap {

        constructor(pathString: string, x:number, y:number) {
            super(assets.getResult(pathString));

            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
        }

        public update() : void {
            this.setTransform(this.x -= 2, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            if (this.x <= -50){
                newEnemy2 = true;
                currentScene.removeChild(this);
            }
        }
    }
}