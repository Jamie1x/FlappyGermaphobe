module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;
        private _player: objects.Player;
        private _enemy: objects.Enemy;
        private _enemy2: objects.Enemy;
        //private _tempEnemy: objects.Enemy;
        //private _tempEnemy2: objects.Enemy;
        private _tempPos: number;
        private _scoreLbl: createjs.Text;

        constructor() {
            super();
        }

        public start(): void {
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

            /*this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);
            this._tempEnemy = new objects.Enemy("Fist", (config.Screen.WIDTH * 1.5) + 50, this._tempPos);
            this.addChild(this._tempEnemy);
            this._tempEnemy2 = new objects.Enemy("Fist", (config.Screen.WIDTH * 1.5) + 50, this._tempPos - config.Screen.HEIGHT);
            this._tempEnemy2.rotation = 180;
            this.addChild(this._tempEnemy2);*/

            newEnemy = true;

            stage.addChild(this);
        }

        public update(): void {
            if (newEnemy == true) {
                newEnemy = false;

                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);

                this._enemy = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy);
                this._enemy2 = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemy2.rotation = 180;
                this.addChild(this._enemy2);
            }

            this._scoreLbl.text = "" + score;
            if (this._player.x == this._enemy.x) {
                score++;
            }

            collision.check(this._player, this._enemy);
            collision.check(this._player, this._enemy2);
            this._player.update();
            this._enemy.update();
            this._enemy2.update();
            //this._tempEnemy.update();
            //this._tempEnemy2.update();
        }
    }
}