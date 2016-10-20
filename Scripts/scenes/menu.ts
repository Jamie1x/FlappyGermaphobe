/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;
        private _instructionsBtn: objects.Button;
        private _bg: createjs.Bitmap;
        private _title: createjs.Bitmap;
        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");

            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);

            this._title = new createjs.Bitmap(assets.getResult("Title"));
            this._title.regX = this._title.getBounds().width / 2;
            this._title.regY = this._title.getBounds().height / 2;
            this._title.x = config.Screen.CENTER_X;
            this._title.y = config.Screen.CENTER_Y - 100;
            this.addChild(this._title);

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._startButtonClick, this);

            this._instructionsBtn = new objects.Button("InstructionsBtn", config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 100);
            this.addChild(this._instructionsBtn);
            this._instructionsBtn.on("click", this._instructionsButtonClick, this);

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

        private _instructionsButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
    }
}