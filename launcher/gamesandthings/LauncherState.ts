import Launcher from "../Launcher";
import Graphic from "./Graphic";
import MouseHandler from "./MouseHandler";
import Sprite from "./Sprite";
import SText from "./SText";
import State from "./State";
import { Axes } from "./enums/Axes";
import { MouseButtons } from "./enums/MouseButtons";
import Games, { Game, GameAssets } from "./Games";
import { ContextOption } from "./contextmenu/ContextOption";
import UniFont from "./UniFont";
export default class LauncherState extends State {
    logo: Sprite = new Sprite();
    logoPos: 'center' | 'default' = 'default';
    bg: Sprite = new Sprite();
    notice: SText = new SText("This is the new games and stuff, currently in very early development.\n" +
        "Latest News (17 June 2024):\n\n - Updated Minecraft 1.8.8 to the latest Eaglercraft version.\n - NEW GAME: PIZZA TOWER: THE NOISE UPDATE!!\n       NOTE: Audio is currently broken.", 15);
    chooseGame: SText = new SText("CHOOSE FROM GAME LIST", 32);
    updateTicks: number = 0;
    currentPage: number = 0;
    amountPerPage: number = 5;
    create(): void {
        this.logo.loadGraphic("/assets/images/logo.png");
        this.bg.loadGraphic('/assets/images/logo.png');
        this.bg.alpha = 0;
        this.chooseGame.fontStyle = "bold";
        this.notice.font = "monospace";
        this.add(this.bg);
        this.add(this.logo);
        this.notice.y = 35;
        this.add(this.notice);
        this.add(this.chooseGame);
    }
    update(elapsed: number): void {
        let dt = elapsed * 60;
        this.updateTicks += 1 * dt;
        this.updateTicks = this.updateTicks % 65535;
        super.update(elapsed); // CALL BEFORE EVERYTHING

        //this.notice.y += Launcher.mouse.scrollY;
        if (this.logo.overlapsPoint(Launcher.mouse.x, Launcher.mouse.y)
            && Launcher.mouse.isMBDown(MouseButtons.PRIMARY)) {
            this.logo.angle += 5 * dt;
        }
        else {
            this.logo.angle = 0;
        }
        if (this.logoPos == 'default') {
            this.logo.y = Launcher.cnv.offsetHeight * 0.15;
            this.logo.screenCenter(Axes.X)
            this.logo.setGraphicSize(Launcher.cnv.width * 0.5);
        }
        else if (this.logoPos == 'center') {
            this.logo.setGraphicSize(0, window.innerHeight);
            this.logo.screenCenter();
        }

        let w: number = this.bg.imgWidth;
        let h: number = this.bg.imgHeight;

        this.bg.setGraphicSize(Math.ceil(w * Math.max(window.innerWidth / w, window.innerHeight / h)),
            Math.ceil(h * Math.max(window.innerWidth / w, window.innerHeight / h)));
        this.bg.screenCenter();
        this.chooseGame.size = 32;
        this.chooseGame.screenCenter();
        this.chooseGame.y -= 100;
        this.notice.screenCenter();
        this.notice.y = this.chooseGame.y + this.chooseGame.height;
        if (this.chooseGame.y >= window.innerHeight || this.notice.overlaps(this.chooseGame)) {
            this.chooseGame.y = this.notice.y + this.notice.height + 10;
        }
        if (this.chooseGame.overlapsPoint(Launcher.mouse.x, Launcher.mouse.y)) {
            this.chooseGame.color = "#A9A9A9";
            if (Launcher.mouse.justPressed(MouseButtons.PRIMARY)) {
               this.showGameSelect();
            }
        }
        else {
            this.chooseGame.color = "white";
        }
    }
    loadOriginalAssets() {
        this.logo.loadGraphic("/assets/images/logo.png");
        this.bg.loadGraphic('/assets/images/logo.png');
        this.bg.alpha = 0;
        this.logoPos = "default";
        this.logoPos = "default";
    }
    loadGameAssets(assets: GameAssets) {
        this.logo.loadGraphic("/assets/images/games/" + Launcher.game?.prefix.replace('/', '') + "/" + assets.logo);
        if (assets.bg != 'blank') {
            this.bg.loadGraphic("/assets/images/games/" + Launcher.game?.prefix.replace('/', '') + "/" + assets.bg);
            this.bg.alpha = 1;
        }
        else {
            this.bg.alpha = 0;
        }
        this.logoPos = assets.logoPos;
    }
    showGameSelect() {
        let gamesCtx: Array<ContextOption> = [];

        for (let i = this.currentPage * this.amountPerPage; i < (this.currentPage * this.amountPerPage) + this.amountPerPage; i++) {
            let game: Game = Games.games[i];
            if (game == undefined)
                break;
            gamesCtx.push({
                text: game.title,
                desc: game.creator,
                descFont: UniFont.ITALIC,
                onselect: () => {
                    Launcher.openGame(game);
                }
            });
        }

        if (gamesCtx.length == this.amountPerPage){
            gamesCtx.push({
                text: "Next Page",
                font: UniFont.BOLD,
                onselect: () => {
                    this.currentPage++;
                    this.showGameSelect();
                }
            });
        }
        if (this.currentPage != 0){
            gamesCtx.splice(0,0,{
                text: "Previous Page",
                font: UniFont.BOLD,
                onselect: () => {
                    this.currentPage--;
                    this.showGameSelect();
                }
            });
        }
        Launcher.contextMenu.show(gamesCtx);
    }
}