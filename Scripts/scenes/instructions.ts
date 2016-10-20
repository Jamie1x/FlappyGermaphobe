/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Instructions extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _menuBtn: objects.Button;
        private _bg: createjs.Bitmap;
        private _instructions: createjs.Bitmap;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Instructions Scene Started");

            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            this._instructions = new createjs.Bitmap(assets.getResult("Instructions"));
            this._instructions.regX = this._instructions.getBounds().width / 2;
            this._instructions.regY = this._instructions.getBounds().height / 2;
            this._instructions.x = config.Screen.CENTER_X;
            this._instructions.y = config.Screen.CENTER_Y - 35;
            this.addChild(this._instructions);

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 200);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._startButtonClick, this);

            this._menuBtn = new objects.Button("MenuBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 200);
            this.addChild(this._menuBtn);
            this._menuBtn.on("click", this._menuButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.PLAY;
            changeScene();
        }

        private _menuButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}