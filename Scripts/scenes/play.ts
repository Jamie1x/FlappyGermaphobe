module scenes {
    export class Play extends objects.Scene {

        private _bg: createjs.Bitmap;
        private _player: objects.Player;
        private _enemy: objects.Enemy;
        private _enemyTop: objects.Enemy;
        private _enemy2: objects.Enemy2;
        private _enemy2Top: objects.Enemy2;
        private _tempPos: number;
        private _scoreLbl: createjs.Text;

        constructor() {
            super();
        }

        public start(): void {
            //add background
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            //reset score at game start
            score = 0;
            //add score to center of screen
            this._scoreLbl = new createjs.Text("" + score, "50px 'Press Start 2P'", "#000000");
            this._scoreLbl.x = config.Screen.CENTER_X - 20;
            this._scoreLbl.y = config.Screen.CENTER_Y / 2;
            this.addChild(this._scoreLbl);

            //add player
            this._player = new objects.Player("Player", 50, config.Screen.CENTER_Y);
            this.addChild(this._player);

            //add enemy to scene on start
            newEnemy = true;

            stage.addChild(this);
        }

        public update(): void {
            //spawn enemy when old enemy dies
            if (newEnemy == true) {
                newEnemy = false;

                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);

                this._enemy = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy);
                this._enemyTop = new objects.Enemy("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemyTop.rotation = 180;
                this.addChild(this._enemyTop);
            }

            //spawn the second enemy when first enemy gets to center screen
            if (this._enemy.x == config.Screen.CENTER_X) {
                newEnemy2 = true;
            }
            //coudn't add 2 enemies with the same object so I made 2 enemy.ts files :p
            if (newEnemy2 == true) {
                newEnemy2 = false;

                this._tempPos = Math.random() * (config.Screen.HEIGHT - config.Screen.CENTER_Y + 75) + (config.Screen.CENTER_Y + 75);
                this._enemy2 = new objects.Enemy2("Fist", config.Screen.WIDTH + 50, this._tempPos);
                this.addChild(this._enemy2);
                this._enemy2Top = new objects.Enemy2("Fist", config.Screen.WIDTH + 50, this._tempPos - config.Screen.HEIGHT);
                this._enemy2Top.rotation = 180;
                this.addChild(this._enemy2Top);
            }
            //update score
            this._scoreLbl.text = "" + score;
            if (this._player.x == this._enemy.x) {
                score++;
            }

            this._player.update();
            collision.check(this._player, this._enemy);
            collision.check(this._player, this._enemyTop);
            this._enemy.update();
            this._enemyTop.update();
            //update and collision check second enemy only when it exists
            if (this._enemy2) {
                collision.check(this._player, this._enemy2);
                collision.check(this._player, this._enemy2Top);
                this._enemy2.update();
                this._enemy2Top.update();

                if (this._player.x == this._enemy2.x) {
                    score++;
                }
            }

        }
    }
}