module objects {
    export class Player extends createjs.Bitmap {

        private _moveX: boolean;
        private _moveY: boolean;

        private _keyPressed: number;

        constructor(pathString: string, x: number, y: number) {
            super(assets.getResult(pathString));

            this.x = x;
            this.y = y;
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;

            window.onkeydown = this._onKeyDown;
            //window.onkeyup = this._onKeyUp;
        }

        public update(): void {
            if (controls.SPACE) {
                this.jump();
                controls.SPACE = false;
            }
            else {
                this.setTransform(this.x, this.y += 2, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
            }

            if ((this.y + (this.getBounds().height / 2)) > config.Screen.HEIGHT) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
            if ((this.y + (this.getBounds().height / 2)) < -50) {
                scene = config.Scene.GAMEOVER;
                changeScene();
            }
        }

        private _onKeyDown(event: KeyboardEvent) {
            switch (event.keyCode) {
                case keys.SPACE:
                    //console.log("SPACE pressed");
                    controls.SPACE = true;
                    break;
            }
        }

        /*private _onKeyUp(event : KeyboardEvent) {
             switch(event.keyCode) {
                case keys.SPACE:
                    controls.SPACE = false;
                    break;
            }
        }*/

        public jump() {
            // this.y -= 5;
            this.setTransform(this.x, this.y -= 40, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY);
        }
    }
}