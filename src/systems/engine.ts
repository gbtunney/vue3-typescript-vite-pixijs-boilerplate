import * as PIXI from 'pixi.js';
import { MainScene } from '../scenes/main';
import { Controller } from './controller';
let PixiApp: PIXI.Application;

export type IApplicationOptions = ConstructorParameters<typeof PIXI.Application>[0];
export const PixiEngine = {
    init(options: IApplicationOptions) {
        if (typeof PixiApp !== 'undefined') {
            PixiApp.destroy();
        }
        PixiApp = new PIXI.Application(options);
        // Controllers
        Controller.init();

        // Scenes
        MainScene.init();
    },
    get() {
        if (typeof PixiApp === 'undefined') {
            throw new Error('Run PixiEngine.init first');
        }

        return PixiApp;
    },
    getCanvas() {
        return PixiApp.view;
    },
};
