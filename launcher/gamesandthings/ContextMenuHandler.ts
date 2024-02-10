import Launcher from "../Launcher";
import UniFont from "./UniFont";
import { Font } from "./UniFont";
import IPositionable from "./interfaces/IPositionable";
type ContextOption = {
    text: string,
    onselect?: () => void,
    title?: boolean,
    hasSecondary?: boolean,
    font?: Font;
}
export default class ContextMenuHandler implements IPositionable {
    x: number = 0;
    y: number = 0;
    contextMenuInput!: HTMLInputElement;
    ctxMenuItems!: HTMLDataListElement;
    ctxItemMap: Map<string, () => void> = new Map<string, () => void>();
    constructor() {
        // Context Menu
        this.contextMenuInput = (document.createElement("input") as HTMLInputElement);
        this.contextMenuInput.setAttribute("type", 'list');
        /* 
        Dead ass, this stupid shit fixed chrome saying "Would you like to use strong password?" even though IT IS A LIST ELEMENT
        WTF IT TOOK ME 1 HOUR
        */
        this.contextMenuInput.setAttribute("name", 'ContextMenu');

        this.contextMenuInput.style.width = "50px";
        this.contextMenuInput.style.height = "50px";
        this.contextMenuInput.style.position = "absolute";
        this.contextMenuInput.style.zIndex = "10";
        this.contextMenuInput.style.backgroundColor = "black";
        document.body.appendChild(this.contextMenuInput);
        this.clear();
        this.contextMenuInput.style.top = "-999px";
        this.contextMenuInput.style.left = "-999px";
        // On input  
        this.contextMenuInput.addEventListener("input", (ev) => {
            if (this.contextMenuInput.value != null) {
                let val: string = this.contextMenuInput.value;
                this.contextMenuInput.value = "";
                console.log(val);
                this.ctxItemMap.get(val)?.call(null);
            }
        });

    }
    add(opt: ContextOption) {
        let text: string = opt.text;
        if (opt.hasSecondary != null) {
            if (opt.hasSecondary) {
                text = text + "\u2003\u2003\u2003\u2003\u200F\u2630"
            }
        }
        if (opt.onselect == null) {
            opt.onselect = () => { };
        }
        if (opt.title != null) {
            if (opt.title) {
                opt.onselect = () => { this.show(this.contextOptions) };
            }
        }
        if (opt.font != null) {
            text = UniFont.make(text, opt.font);
        }
        
        this.ctxItemMap.set(text, opt.onselect);
        let optElem: HTMLOptionElement = (document.createElement("option") as HTMLOptionElement);
        optElem.value = text;
        this.ctxMenuItems.appendChild(optElem);
    }
    create(): void { }

    update(delta: number): void { }

    clear(): void {
        try {
            document.body.removeChild(this.ctxMenuItems);
        }
        catch { }
        this.ctxMenuItems = (document.createElement("datalist") as HTMLDataListElement);
        this.ctxMenuItems.id = Math.random().toString(36).substring(0, 5);
        this.contextMenuInput.setAttribute("list", this.ctxMenuItems.id);

        document.body.appendChild(this.ctxMenuItems);
        this.ctxItemMap.clear();
    }
    contextOptions: Array<ContextOption> = [];
    show(options: Array<ContextOption>) {
        if (!Launcher.mouse.hasClickedAtLeastOnce) return;
        this.contextOptions = options;

        this.clear();
        options.forEach((opt) => {
            this.add(opt);
        });
        this.add({ text: "Close", font: UniFont.BOLD });
        this.x = Launcher.mouse.x;
        this.y = Launcher.mouse.y;
        this.contextMenuInput.style.left = this.x - 20 + "px";
        this.contextMenuInput.style.top = this.y - 50 + "px";
        this.contextMenuInput.showPicker();
        // go away so it doesnt interfere with user input
        this.contextMenuInput.style.top = "-999px";
        this.contextMenuInput.style.left = "-999px";
    }
    destroy(): void {

    }

}