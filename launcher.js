(()=>{"use strict";var __webpack_modules__={864:function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const LauncherState_1=__importDefault(__webpack_require__(504)),MouseHandler_1=__importDefault(__webpack_require__(496)),KeyboardHandler_1=__importDefault(__webpack_require__(979)),DrawerHandler_1=__importDefault(__webpack_require__(84)),ContextMenuHandler_1=__importDefault(__webpack_require__(172));class Launcher{static init(e){window.addEventListener("error",(e=>{alert("Error!\n"+e.message+"\nPlease report this bug in the games and things discord!\nAttempting to continue..."),Launcher.update(0)})),Launcher.iframeDiv=document.createElement("div"),document.body.appendChild(Launcher.iframeDiv),Launcher.iframeDiv.id="iframeDiv",Launcher.initIframe(),Launcher.contextMenu=new ContextMenuHandler_1.default,document.body.style.margin="0px",Launcher.mouse=new MouseHandler_1.default,Launcher.mouse.init(),Launcher.keyboard=new KeyboardHandler_1.default,Launcher.keyboard.init(),Launcher.drawer=new DrawerHandler_1.default(document.getElementById("slidymenu")),Launcher.drawer.elem.style.left="-150px",Launcher.cnv=document.createElement("canvas"),Launcher.cnv.id="cnv",document.body.appendChild(Launcher.cnv),Launcher.ctx=Launcher.cnv.getContext("2d",{desynchronized:!0,preserveDrawingBuffer:!0,willReadFrequently:!1}),Launcher.ctx.imageSmoothingEnabled=!1,Launcher.state=e,Launcher.state.create(),Launcher.update(0)}static initIframe(){Launcher.iframe=document.createElement("iframe"),Launcher.iframeDiv.appendChild(Launcher.iframe),Launcher.iframe.id="gamewin",Launcher.iframe.setAttribute("frameborder","0"),Launcher.iframe.setAttribute("allowfullscreen","true"),Launcher.iframe.style.width="100%",Launcher.iframe.style.height="100%"}static refreshGame(){Launcher.iframe.src=Launcher.lastURL+""}static openGame(e,t=null){if(null==e)return;Launcher.game=e,document.title=e.title,null!=e.screenmode?Launcher.drawer.screenmode=e.screenmode:Launcher.drawer.screenmode="window",Launcher.drawer.updateScreenMode();let s=e.prefix;null==t&&null==e.versions?s+="/":null==t&&null!=e.versions?(document.title+=" - "+e.versions[0].title,s+=e.versions[0].url):null!=t&&(document.title+=" - "+t.title,s+=t.url),Launcher.openURL(s)}static openURL(e){Launcher.lastURL=e,""!=this.lastURL&&(Launcher.openIframeWindow(),Launcher.iframe.src=e)}static openIframeWindow(){Launcher.keyboard.resetPressed(),Launcher.iframeMode=!0}static closeIframe(){Launcher.iframeMode=!1}static toggleFullscreen(){let elem=document.body;elem.requestFullscreen&&(document.fullscreenElement?(Launcher.fullscreen=!1,"keyboard"in window.navigator&&eval("window.navigator.keyboard.unlock()"),document.exitFullscreen()):(Launcher.fullscreen=!0,elem.requestFullscreen().catch((e=>{Launcher.fullscreen=!1})),"keyboard"in window.navigator&&eval("window.navigator.keyboard.lock()"))),Launcher.drawer.updateScreenMode()}static update(e){var t;document.body.offsetWidth>=window.screen.availWidth&&document.body.offsetHeight>=window.screen.availHeight?(Launcher.fullscreen=!0,null==document.fullscreenElement?Launcher.fullscreenByOS=!0:Launcher.fullscreenByOS=!1):(Launcher.fullscreenByOS=!1,Launcher.fullscreen=!1),Launcher.cnv.style.zIndex="2",Launcher.iframe.style.zIndex="1",Launcher.cnv.style.position="relative",Launcher.iframe.style.position="relative",Launcher.iframeMode?(null===(t=Launcher.iframe.contentWindow)||void 0===t||t.focus(),Launcher.cnv.style.display="none",Launcher.cnv.style.top="0px",Launcher.iframe.style.opacity="1",Launcher.iframe.style.top=String(-Launcher.cnv.offsetHeight+(document.body.offsetHeight-Launcher.iframe.offsetHeight)/2)+"px",Launcher.iframe.style.left=String((document.body.offsetWidth-Launcher.iframe.offsetWidth)/2)+"px"):(Launcher.cnv.style.display="flex",Launcher.cnv.style.top="-"+String(Launcher.iframe.offsetHeight)+"px",Launcher.iframe.style.display="flex",Launcher.iframe.style.opacity="0",Launcher.iframe.style.top="0px"),Launcher.iframe.setAttribute("width",Launcher.cnv.offsetWidth+""),Launcher.iframe.setAttribute("height",Launcher.cnv.offsetHeight+""),Launcher.cnv.style.width="100%",Launcher.cnv.style.height="100%",Launcher.cnv.setAttribute("width",Launcher.cnv.offsetWidth+""),Launcher.cnv.setAttribute("height",Launcher.cnv.offsetHeight+""),Launcher.delta=(e-Launcher.lastTimestep)/1e3,Launcher.drawer.update(Launcher.delta),Launcher.contextMenu.update(Launcher.delta),Launcher.iframeMode?Launcher.performanceMode?setTimeout(Launcher.update,200):requestAnimationFrame(Launcher.update):(document.title="Games And Things",Launcher.ctx.fillStyle="black",Launcher.ctx.fillRect(0,0,Launcher.cnv.width,Launcher.cnv.height),Launcher.state.draw(),Launcher.ctx.fillStyle="white",Launcher.ctx.font="15px sans-serif",Launcher.ctx.textBaseline="hanging",Launcher.ctx.fillText("This is the new games and stuff, ",0,35),Launcher.ctx.fillText("currently in very early development.",0,55),Launcher.ctx.fillText("Mobile devices will be supported soon.",0,75),Launcher.state.update(Launcher.delta),null!=Launcher.iframe.contentDocument&&Launcher.iframe.contentDocument.querySelectorAll("*").forEach((e=>{let t=e;t.style.cursor="normal",t.style.fontKerning="none",t.style.imageRendering="pixelated"})),Launcher.lastTimestep=e,Launcher.mouse.resetDeltas(),requestAnimationFrame(Launcher.update))}static screenshot(){if(null!=Launcher.iframe.contentWindow&&Launcher.iframeMode){let e=Launcher.iframe.contentWindow.document.getElementsByTagName("canvas");if(0==e.length)return;let t=document.createElement("a");t.download="Games and Things - "+document.title+" "+new Date(Date.now()).toLocaleString()+".png",t.href=e[e.length-1].toDataURL("image/png").replace("image/png","image/octet-stream"),t.click(),t.remove()}}}Launcher.iframeMode=!1,Launcher.fullscreen=!1,Launcher.fullscreenByOS=!1,Launcher.performanceMode=!1,Launcher.lastTimestep=0,Launcher.lastShiftTabTimeStep=0,Launcher.delta=0,Launcher.lastURL="",exports.default=Launcher,Launcher.init(new LauncherState_1.default)},836:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(864)),a=i(s(544)),r=i(s(796)),o=i(s(396)),u=s(916),l=s(648);class h extends r.default{constructor(){super()}draw(){super.draw()}create(){this.loadGraphic("/assets/images/arrow.png")}onGraphicLoad(){this.setGraphicSize(0,.1*n.default.cnv.offsetHeight)}update(e){if(super.update(e),this.flipX?(this.x=n.default.cnv.offsetWidth,this.x-=n.default.cnv.offsetWidth/32+this.width):(this.x=0,this.x+=n.default.cnv.offsetWidth/32),this.overlapsPoint(n.default.mouse.x,n.default.mouse.y)){if(this.setGraphicSize(0,.12*n.default.cnv.offsetHeight),n.default.mouse.justPressed(l.MouseButtons.PRIMARY)){let e=[];a.default.games.forEach((t=>{e.push({text:t.title,desc:t.creator,descFont:o.default.ITALIC,onselect:()=>{n.default.openGame(t)}})})),e.push({text:"Custom",onselect:()=>{let e=prompt("Enter URL to open:\n");null!=e&&(e.startsWith("http://")||e.startsWith("https://")||(e="http://"+e),n.default.game=null,n.default.openURL(e))}}),n.default.contextMenu.show(e)}}else this.setGraphicSize(0,.1*n.default.cnv.offsetHeight);this.screenCenter(u.Axes.Y)}}t.default=h},172:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(864)),a=i(s(396));t.default=class{constructor(){this.x=0,this.y=0,this.ctxItemMap=new Map,this.contextOptions=[],this.contextMenuInput=document.createElement("input"),this.contextMenuInput.setAttribute("type","list"),this.contextMenuInput.setAttribute("name","ContextMenu"),this.contextMenuInput.style.width="0px",this.contextMenuInput.style.height="0px",this.contextMenuInput.style.position="absolute",this.contextMenuInput.style.zIndex="10",this.contextMenuInput.style.backgroundColor="black",document.body.appendChild(this.contextMenuInput),this.clear(),this.contextMenuInput.style.top="-999px",this.contextMenuInput.style.left="-999px",this.contextMenuInput.addEventListener("input",(e=>{var t;if(null!=this.contextMenuInput.value){let e=this.contextMenuInput.value;this.contextMenuInput.value="",console.log(e),null===(t=this.ctxItemMap.get(e))||void 0===t||t.call(null)}}))}add(e){let t=e.text;null!=e.hasSecondary&&e.hasSecondary&&(t="☰ "+t),null==e.onselect&&(e.onselect=()=>{}),null!=e.title&&e.title&&(e.onselect=()=>{this.show(this.contextOptions)}),null!=e.font&&(t=a.default.make(t,e.font)),this.ctxItemMap.set(t,e.onselect);let s=document.createElement("option");s.value=t,null!=e.desc&&""!=e.desc&&(null!=e.descFont&&(e.desc=a.default.make(e.desc,e.descFont)),s.innerHTML=e.desc),this.ctxMenuItems.appendChild(s)}create(){}update(e){}clear(){try{document.body.removeChild(this.ctxMenuItems)}catch(e){}this.ctxMenuItems=document.createElement("datalist"),this.ctxMenuItems.id=Math.random().toString(36).substring(2,5),this.contextMenuInput.setAttribute("list",this.ctxMenuItems.id),document.body.appendChild(this.ctxMenuItems),this.ctxItemMap.clear()}show(e,t,s){if(n.default.mouse.hasClickedAtLeastOnce){this.contextOptions=e,this.clear(),e.forEach((e=>{this.add(e)})),this.add({text:"Close",font:a.default.BOLD,onselect:()=>{this.clear()}}),null==t&&(t=n.default.mouse.x),null==s&&(s=n.default.mouse.y),this.contextMenuInput.style.width="50px",this.contextMenuInput.style.height="50px",this.contextMenuInput.style.left=t-20+"px",this.contextMenuInput.style.top=s-50+"px";try{this.contextMenuInput.showPicker()}catch(e){}this.contextMenuInput.style.top="-999px",this.contextMenuInput.style.left="-999px",this.contextMenuInput.style.width="0px",this.contextMenuInput.style.height="0px"}}destroy(){}}},84:function(e,t,s){var i=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(n,a){function r(e){try{u(i.next(e))}catch(e){a(e)}}function o(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,o)}u((i=i.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(s(864)),r=n(s(396)),o=n(s(236));t.default=class{constructor(e){this.buttonsPressed=new Map,this.buttonsContextMenu=new Map,this.buttonsMouseOver=new Map,this.buttons=[],this.mouseOver=!0,this.x=-150,this.y=5,this.alpha=1,this.isOut=!1,this.clickX=0,this.clickY=0,this.screenmode="window",this.elem=e,this.addMouseListeners(e),e.querySelectorAll("*").forEach((e=>{let t=e;this.addMouseListeners(t)})),window.addEventListener("resize",(e=>i(this,void 0,void 0,(function*(){this.updateScreenMode()}))))}addMouseListeners(e){this.buttonsPressed.set(e.id,!1),this.buttons.push(e),e.addEventListener("click",(t=>{this.clickX=t.clientX,this.clickY=t.clientY,(this.isOut||"peekarrow"==e.id)&&this.buttonsPressed.set(e.id,!0)})),e.addEventListener("mouseover",(t=>{this.buttonsMouseOver.set(e.id,!0)})),e.addEventListener("mouseout",(t=>{this.buttonsMouseOver.set(e.id,!1)})),e.addEventListener("contextmenu",(t=>{this.clickX=t.clientX,this.clickY=t.clientY,this.buttonsContextMenu.set(e.id,!0),t.preventDefault()})),e.addEventListener("blur",(e=>{this.isOut=!1}))}create(){}mouseOverCheck(){a.default.iframeMode?(this.mouseOver=!1,this.buttonsMouseOver.forEach(((e,t)=>{e&&(this.mouseOver=!0)})),this.mouseOver?this.alpha=1:this.alpha=.5):(this.alpha=1,this.isOut=!0)}aspectRatioFit(e,t,s,i){var n=Math.min(s/e,i/t);let a=new o.default;return a.x=e*n,a.y=t*n,a}fixedResolutionContext(){a.default.contextMenu.show([{text:"1080p",onselect:()=>{this.screenmode="1920x1080",this.updateScreenMode()}},{text:"720p",onselect:()=>{this.screenmode="1280x720",this.updateScreenMode()}},{text:"480p",onselect:()=>{this.screenmode="854x480",this.updateScreenMode()}},{text:"360p",onselect:()=>{this.screenmode="640x360",this.updateScreenMode()}},{text:"240p",onselect:()=>{this.screenmode="426x240",this.updateScreenMode()}},{text:"144p",onselect:()=>{this.screenmode="256x144",this.updateScreenMode()}},{text:"Custom",onselect:()=>{let e=window.prompt("Enter Resolution:\n(example 1920x1080)");null!=e&&(this.screenmode=e,this.updateScreenMode())},hasSecondary:!0}],this.clickX,this.clickY)}updateScreenMode(){return i(this,void 0,void 0,(function*(){if(null!=this)if(this.screenmode.includes("/")||this.screenmode.includes(":")){this.screenmode.replace(":","/");let e=window.outerHeight;a.default.iframe.style.aspectRatio=this.screenmode,window.innerWidth>=e?(a.default.iframe.style.width="auto",a.default.iframe.style.height=window.innerHeight+""):(a.default.iframe.style.height="auto",a.default.iframe.style.width=window.innerWidth+""),(a.default.iframe.offsetWidth>window.innerWidth||a.default.iframe.offsetHeight>window.innerHeight)&&(a.default.iframe.style.width="100%")}else this.screenmode.includes("x")?(a.default.iframe.style.width=this.screenmode.split("x")[0]+"",a.default.iframe.style.height=this.screenmode.split("x")[1]+"",a.default.iframe.style.aspectRatio=""):(a.default.iframe.style.width="100%",a.default.iframe.style.height="100%",a.default.iframe.style.aspectRatio="")}))}update(e){window.devicePixelRatio=4,this.mouseOverCheck(),a.default.fullscreen&&this.updateScreenMode(),this.buttonsPressed.forEach(((e,t)=>{if(e){this.buttonsPressed.set(t,!1);let e=document.getElementById(t);if("peekarrow"==t&&a.default.iframeMode&&(this.isOut=!this.isOut,this.isOut?e.innerText="close":e.innerText="chevron_right"),!this.isOut)return;if("fullscreen"==t)a.default.fullscreenByOS||a.default.toggleFullscreen();else if("refresh"==t)""!=a.default.iframe.src&&(a.default.iframe.src+="");else if("pause"==t)""!=a.default.iframe.src&&(a.default.iframeMode?a.default.closeIframe():a.default.openIframeWindow());else if("settings"==t){if(a.default.iframeMode){let e=[{text:"Screen Size",onselect:()=>{a.default.contextMenu.show([{text:"4:3",onselect:()=>{this.screenmode="4/3"}},{text:"16:9",onselect:()=>{this.screenmode="16/9"}},{text:"16:10",onselect:()=>{this.screenmode="16/10"}},{text:"Fit to window",onselect:()=>{this.screenmode="window"}},{text:"Fixed Resolution",onselect:()=>{this.fixedResolutionContext()},hasSecondary:!0}])},hasSecondary:!0}];null!=a.default.game&&null!=a.default.game.versions&&a.default.game.versions.length>1&&e.push({text:"Set Version",desc:"⚠ If you change versions, unsaved data will be lost.",descFont:r.default.ITALIC,hasSecondary:!0,onselect:()=>{var e;let t=[];null!=a.default.game&&null!=(null===(e=a.default.game)||void 0===e?void 0:e.versions)&&(a.default.game.versions.forEach((e=>{t.push({text:e.title,onselect:()=>{a.default.iframeDiv.removeChild(a.default.iframe),a.default.initIframe(),a.default.openGame(a.default.game,e)}})})),a.default.contextMenu.show(t))}});let t="Enable Performance Mode";a.default.performanceMode&&(t="Disable Performance Mode"),e.push({text:t,desc:"Runs launcher menu at a low fps.",descFont:r.default.ITALIC,onselect:()=>{a.default.performanceMode=!a.default.performanceMode}}),e.push({text:"Screenshot",onselect:()=>{a.default.screenshot()}}),a.default.contextMenu.show(e,this.clickX,this.clickY)}}else"forum"==e.id&&window.open("https://discord.com/invite/up7VmmCPhn")}})),this.buttons.forEach((e=>{if("peekarrow"==e.id&&(e.setAttribute("disabled",String(!a.default.iframeMode)),a.default.iframeMode||(e.innerText="close"),this.isOut||"close"!=e.innerText||(e.innerText="chevron_right")),this.isOut)if(e.style.opacity="1","true"==e.getAttribute("disabled")?e.style.color="rgba(255,255,255,0.25)":e.style.color="white","fullscreen"==e.id){e.setAttribute("title","Makes games and things fullscreen."),a.default.fullscreenByOS&&e.setAttribute("title","Cannot exit fullscreen as fullscreen was toggled\nby your os or browser."),e.setAttribute("disabled",String(a.default.fullscreenByOS));let t="fullscreen";(a.default.fullscreen||a.default.fullscreenByOS)&&(t="fullscreen_exit"),e.innerText!=t&&(e.innerText=t)}else"pause"==e.id?(e.setAttribute("disabled",String(""==a.default.iframe.src)),a.default.iframeMode?(e.setAttribute("title","Return to games and st."),e.innerText="pause"):(e.setAttribute("title","Return to game."),e.innerText="play_arrow")):"settings"==e.id&&e.setAttribute("disabled",String(!a.default.iframeMode));else"peekarrow"!=e.id&&(e.style.opacity="0")})),this.isOut?this.x=5:this.x=25-this.elem.offsetWidth,this.buttonsContextMenu.forEach(((e,t)=>{if(e){if(this.buttonsContextMenu.set(t,!1),"peekarrow"==t&&a.default.iframeMode&&a.default.contextMenu.show([{text:"Force Quit Game",desc:"⚠ Unsaved data will be lost.",descFont:r.default.ITALIC,onselect:()=>{a.default.iframeDiv.removeChild(a.default.iframe),a.default.initIframe(),a.default.closeIframe()}}],this.clickX,this.clickY),!this.isOut)return;"refresh"==t&&a.default.contextMenu.show([{text:"Force Refresh Game",desc:"⚠ Unsaved data will be lost.",descFont:r.default.ITALIC,onselect:()=>{a.default.iframeDiv.removeChild(a.default.iframe),a.default.initIframe(),a.default.openURL(a.default.lastURL)}},{text:"Force Refresh All",desc:"⚠ Unsaved data will be lost.",descFont:r.default.ITALIC,onselect:()=>{a.default.iframeDiv.removeChild(a.default.iframe),window.location.reload()}}],this.clickX,this.clickY)}})),this.elem.style.opacity=String(this.alpha),this.elem.style.left=String(this.x)+"px",this.elem.style.top=String(this.y)+"px"}destroy(){}}},544:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class s{}s.games=[{title:"Minecraft",creator:"Mojang Studios",prefix:"mc/",screenmode:"16/9",versions:[{url:"1.8.8",title:"1.8.8"},{url:"1.5.2",title:"1.5.2"},{url:"b1.3_01",title:"b1.3_01"},{url:"a1.2.6",title:"a1.2.6"},{url:"indev-20100223",title:"Indev-20100223"},{url:"c0.30",title:"c0.30"},{url:"c0.0.23a_01",title:"c0.0.23a_01"}]},{title:"Super Mario 64",creator:"Nintendo",prefix:"app-sm64/",screenmode:"4/3"}],t.default=s},484:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e="",t){this.img=new Image,this.loaded=!1,this.img.src=e,this.img.addEventListener("error",(e=>{this.img.src+=""})),this.img.addEventListener("load",(e=>{this.loaded=!0,t(this.img,e)}))}destroy(){this.img.src="",this.img.remove()}}},979:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(864));t.default=class{constructor(){this.pressedMap=new Map}init(){window.addEventListener("keydown",(e=>(this.onKeyDown(e),!1))),window.addEventListener("keyup",(e=>(this.onKeyUp(e),!1)))}onKeyDown(e,t=!0){null!=e.key&&("F11"==e.key&&n.default.toggleFullscreen(),this.pressedMap.set(e.key.toLowerCase(),!0),t&&e.preventDefault())}onKeyUp(e,t=!0){null!=e.key&&(this.pressedMap.set(e.key.toLowerCase(),!1),t&&e.preventDefault())}isDown(e){return!!this.pressedMap.has(e.toLowerCase())&&this.pressedMap.get(e.toLowerCase())}resetPressed(){this.pressedMap.clear()}}},504:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(864)),a=i(s(836)),r=i(s(796)),o=i(s(248)),u=s(916),l=s(648);class h extends o.default{constructor(){super(...arguments),this.logo=new r.default,this.lArrow=new a.default,this.rArrow=new a.default}create(){this.logo.loadGraphic("/assets/images/logo.png"),this.add(this.lArrow),this.add(this.rArrow),this.rArrow.flipX=!0,this.add(this.logo)}update(e){super.update(e),this.logo.overlapsPoint(n.default.mouse.x,n.default.mouse.y)&&n.default.mouse.isMBDown(l.MouseButtons.PRIMARY)?this.logo.angle+=60*e*5:this.logo.angle=0,this.logo.y=.15*n.default.cnv.offsetHeight,this.logo.screenCenter(u.Axes.X),n.default.cnv.offsetWidth>n.default.cnv.offsetHeight?this.logo.setGraphicSize(.5*n.default.cnv.width):this.logo.setGraphicSize(0,.05*n.default.cnv.height)}}t.default=h},496:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.x=0,this.y=0,this.deltaX=0,this.deltaY=0,this.mouseMap=new Map,this.justPressedMap=new Map,this.hasClickedAtLeastOnce=!1}init(){window.addEventListener("mousedown",(e=>{this.onMouseDown(e)})),window.addEventListener("mouseenter",(e=>{this.onMouseEnter(e)})),window.addEventListener("mouseleave",(e=>{this.onMouseLeave(e)})),window.addEventListener("mousemove",(e=>{this.onMouseMove(e)})),window.addEventListener("mouseout",(e=>{this.onMouseOut(e)})),window.addEventListener("mouseover",(e=>{this.onMouseOver(e)})),window.addEventListener("mouseup",(e=>{this.onMouseUp(e)})),window.addEventListener("contextmenu",(e=>(this.onContextMenu(e),!1)))}onMouseDown(e){this.hasClickedAtLeastOnce=!0,this.mouseMap.set(e.button,!0),this.getPosFromEvent(e)}onMouseEnter(e){this.getPosFromEvent(e)}onMouseLeave(e){this.getPosFromEvent(e)}onMouseMove(e){this.getPosFromEvent(e)}onMouseOut(e){this.getPosFromEvent(e)}onMouseOver(e){this.getPosFromEvent(e)}onMouseUp(e){this.mouseMap.set(e.button,!1),this.justPressedMap.set(e.button,!0),this.getPosFromEvent(e)}onContextMenu(e){this.getPosFromEvent(e)}isMBDown(e){return!!this.mouseMap.has(e)&&this.mouseMap.get(e)}justPressed(e){return!!this.justPressedMap.has(e)&&this.justPressedMap.get(e)}getPosFromEvent(e){this.x=e.x,this.y=e.y,this.deltaX=e.movementX,this.deltaY=e.movementY}resetDeltas(){this.deltaX=0,this.deltaY=0,this.justPressedMap.clear()}}},796:function(e,t,s){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(s(864)),a=s(916),r=i(s(236)),o=i(s(668)),u=i(s(484));class l extends o.default{constructor(e=0,t=0){super(),this.x=0,this.y=0,this.width=0,this.height=0,this.angle=0,this.alpha=1,this.scale=new r.default(1,1),this.flipX=!1,this.x=e,this.y=t}draw(){if(null!=this.graphic&&this.graphic.loaded){let e=this.graphic.img;n.default.ctx.globalAlpha=this.alpha,n.default.ctx.save(),this.flipX&&(n.default.ctx.translate(Math.floor(this.x+this.width/2),Math.floor(this.y+this.width/2)),n.default.ctx.scale(-1,1),n.default.ctx.translate(Math.floor(-(this.x+this.width/2)),Math.floor(-(this.y+this.width/2)))),n.default.ctx.translate(Math.floor(this.x+this.width/2),Math.floor(this.y+this.height/2)),this.flipX?n.default.ctx.rotate(-this.angle*Math.PI/180):n.default.ctx.rotate(this.angle*Math.PI/180),n.default.ctx.drawImage(e,-this.width/2,-this.height/2,this.width,this.height),n.default.ctx.restore(),n.default.ctx.globalAlpha=1}}loadGraphic(e){this.graphic=new u.default(e,((e,t)=>{this.graphic.img=e,this.width=e.width,this.height=e.height,this.onGraphicLoad()}))}onGraphicLoad(){}screenCenter(e){e==a.Axes.X?this.x=(n.default.cnv.offsetWidth-this.width)/2:(e==a.Axes.Y||(this.x=(n.default.cnv.offsetWidth-this.width)/2),this.y=(n.default.cnv.offsetHeight-this.height)/2)}setGraphicSize(e=0,t=0){if(!(e<=0&&t<=0)){var s=e/this.graphic.img.width,i=t/this.graphic.img.height;this.scale.set(s,i),e<=0?this.scale.x=i:t<=0&&(this.scale.y=s)}}create(){}update(e){if(null!=this.graphic){let e=this.graphic.img;this.width=e.width*this.scale.x,this.height=e.height*this.scale.y}}destroy(){this.graphic.destroy()}}t.default=l},248:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.members=[]}create(){}draw(){this.members.forEach((e=>{e.draw()}))}update(e){this.members.forEach((t=>{t.update(e)}))}destroy(){}add(e){this.members.push(e),e.create()}}},396:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class s{static make(e,t){let i=e;return e.split("").forEach(((e,n)=>{if(s.NORMAL.includes(e)){let n=s.NORMAL.indexOf(e);t.length>n&&(i=i.replace(e,t[n]))}})),i}}s.NORMAL=Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"),s.BOLD=Array.from("𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"),s.SMALL_CAPS=Array.from("ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀsᴛᴜᴠᴡxʏᴢ0123456789﹗@#﹩﹪^﹠﹡⁽⁾⁻+"),s.ITALIC=Array.from("𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"),s.ITALIC_BOLD=Array.from("𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯"),s.SUPERSCRIPT=Array.from("ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹﹗@#﹩﹪^﹠﹡⁽⁾⁻+"),t.default=s},916:(e,t)=>{var s;Object.defineProperty(t,"__esModule",{value:!0}),t.Axes=void 0,function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.XY=2]="XY"}(s||(t.Axes=s={}))},648:(e,t)=>{var s;Object.defineProperty(t,"__esModule",{value:!0}),t.MouseButtons=void 0,function(e){e[e.PRIMARY=0]="PRIMARY",e[e.TERTIARY=1]="TERTIARY",e[e.SECONDARY=2]="SECONDARY",e[e.BACK=3]="BACK",e[e.FORWARD=4]="FORWARD"}(s||(t.MouseButtons=s={}))},668:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.x=0,this.y=0,this.width=0,this.height=0}overlaps(e){return this.x<e.x+e.width&&this.x+this.width>e.x&&this.y<e.y+e.height&&this.y+this.height>e.y}overlapsPoint(e,t){return this.x<=e&&e<=this.x+this.width&&this.y<=t&&t<=this.y+this.height}}},236:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}set(e,t){this.x=e,this.y=t}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(s.exports,s,s.exports,__webpack_require__),s.exports}var __webpack_exports__=__webpack_require__(864)})();