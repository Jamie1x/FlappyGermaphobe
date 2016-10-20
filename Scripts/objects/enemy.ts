module objects {
    export class Enemy extends createjs.Bitmap {

        constructor(pathString: string, x:number, y:number) {
            super(assets.getResult(pathString));

            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
        }

        public update() : void {
            //make enemies move toward player
            this.setTransform(this.x -= 2, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            //destroy object when it leaves the screen and spawn new enemy
            if (this.x <= -50){
                newEnemy = true;
                currentScene.removeChild(this);
            }
        }
    }
}