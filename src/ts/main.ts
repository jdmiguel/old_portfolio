///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Main{

    private is_firefox:any;

    private $windowLocalRef:JQuery                 =              $(window);
    private $wrapLocalRef:any                      =              document.getElementById("page-wrap");

    private $loaderRef:JQuery                      =              $("#loader");
    private $logoRef:JQuery                        =              $("#logo");
    private $bgRef:JQuery                          =              $("#bg-home");

    private $textHelpUser:JQuery                   =              $("#text-help");
    private $wheelUser:JQuery                      =              $("#wheel-user");
    private $dragDrop:JQuery                       =              $("#drag-drop-user");
    private $clickLink:JQuery                      =              $("#click-link-user");
    private $clickMenu:JQuery                      =              $("#click-menu-user");
    private $mouseIcon:JQuery                      =              $("#icon-mouse");
    private $clickIcon:JQuery                      =              $("#icon-click");
    private $dragIcon:JQuery                       =              $("#icon-drag");
    private $dropIcon:JQuery                       =              $("#icon-drop");

    private mouseX:number;
    private mouseY:number;

    private TLuser:any;

    private $menu:JQuery                           =              $("#menu");
    private $menuLi:JQuery                         =              $("#menu > li");
    private $menuP:JQuery                          =              $("#menu > li > p");
    private $menuI:JQuery                          =              $("#menu > li > i");

    private $iCurrentRef:JQuery;
    private $numLi:JQuery;
    private $prevLi:JQuery                         =              $(".prev-menu");
    private $currentLi:JQuery                      =              $(".current-menu");
    private $nextLi:JQuery                         =              $(".next-menu");

    private $links:JQuery                          =              $("#links");
    private $linksLi:JQuery                        =              $("#links li");
    private $linksA:JQuery                         =              $("#links li > a");
    private $linksP:JQuery                         =              $("#links li > a > p");
    private $linksCircle:JQuery                    =              $("#links li > a > svg > circle");
    private $linksArrow:JQuery                     =              $("#links li > a > svg > polyline");

    private counterLi:number;
    private counterBg:number                       =              0;
    private classBg:JQuery                         =              $(".bg");
    private totalLi:number                         =              6;
    private valuesMenu = {
                callBack: <any> null,
                param_1: <string> null,
                param_2: <string> null,
                position: <number> null,
                percent_1: <number> null,
                percent_2: <number> null
    };

    private widthWindow:number;
    private heightWindow:number;
    private posXCarrusel:number;
    private posXinitMouse:number;
    private posXfinMouse:number;
    private posXinitMenu:number                    =              0;
    private posXcurrentMouse:number;
    private posXcurrentBg:number;
    private moveXmenu:number;
    private valueDragMouse:number;

    private deltaMenuActive:boolean                =              true;
    private isOnDrag:boolean                       =              false;
    private isOnMove:boolean                       =              false;
    private isOnWindow:boolean                     =              true;
    private isOnSubmenu:boolean                    =              false;
    private isOnInit:boolean;
    private inSite:boolean;

    private $submenu:JQuery                        =              $("#submenu");
    private $submenuLi:JQuery                      =              $("#submenu > li");
    private currentSubMenu:number;

    private $socialBtn:JQuery                      =              $(".social > .over-social > span");
    private $socialSvg:JQuery                      =              $(".social > svg > path");

    private myTicker:any;

    static scope:any;

    constructor(counterHome){
        Main.scope = this;

        Main.scope.counterLi = counterHome;
        Main.scope.$iCurrentRef = Main.scope.$menuLi.eq(Main.scope.counterLi).children("p").children("i");
        Main.scope.isOnInit = true;
        Main.scope.inSite = true;

        Main.scope.$linksA.attr( "href", "#" );

        //Main.scope.$wrapLocalRef.addEventListener("mouseleave",Main.scope.outWindow);

        TweenMax.set([Main.scope.$linksCircle,Main.scope.$linksArrow,Main.scope.$linksP], {opacity:.4});

        Main.scope.onResizeAll();
        Main.scope.$windowLocalRef.resize(function():void{Main.scope.onResetAll();});
    }

    private goHome():void{
        TweenMax.set(Main.scope.$iCurrentRef,{left:"-100%"});
        TweenMax.set(Main.scope.$linksLi, {scaleX:.8, scaleY:.8, opacity:0});

        var menu:any = document.getElementById("menu");

        Main.scope.classBg.each(function(i){
            if(i != Main.scope.counterLi) TweenMax.set($("#bg-" + i), {opacity:0});
        });

        //var currentSpan:any = menu.getElementsByClassName("current-menu").childNodes[0].childNodes[0];
       // console.log(menu.getElementsByClassName("current-menu").childNodes);

        /*var splitSpan:any = new SplitText(currentSpan,{type:"chars"});
        var chars:any = splitSpan.chars;
         /*
        TweenMax.set(chars,{opacity:0});

        TweenMax.staggerTo(chars, .3, {delay:1, opacity:1, ease:Back.easeOut},.05);*/
        TweenMax.to(Main.scope.$iCurrentRef, .5, {delay:.8, left:0, ease:Cubic.easeOut});
        TweenMax.to(Main.scope.$linksLi, .5, {delay:1.2, scaleX:1, scaleY:1, opacity:1, ease:Back.easeOut, onComplete:Main.scope.goHelpUser});
        //TweenMax.delayedCall(.5,Main.scope.activeTicker);
        Main.scope.activeTicker();
    }

    private inWindow(event):void{
       // Main.scope.mouseX = event.pageX;
       // Main.scope.mouseY = event.pageY;
       // console.log('mouseX: ' +  Main.scope.mouseX + '___' + ' Main.scope.mouseY: ' + Main.scope.mouseY);
        if(!Main.scope.inSite){
            Main.scope.activeTicker();
            Main.scope.inSite = true;
        }
    }

    private outWindow(event):void{

        if(Main.scope.isOnWindow == true) return;

        Main.scope.inSite = false;

        Main.scope.desactiveTicker();
        Main.scope.$wrapLocalRef.removeEventListener("mousemove",Main.scope.getMouse);

        Main.scope.posXfinMouse = event.pageX;

        Main.scope.onDrop();
    }

    private activeTicker():void{
        //console.log('activeTicker');
        Main.scope.myTicker = setInterval(Main.scope.onTick,100);
        //TweenMax.ticker.addEventListener("tick", Main.scope.onTick);
    }

    private desactiveTicker():void{
        //console.log('desactiveTicker');
        clearInterval(Main.scope.myTicker);
        //TweenMax.ticker.removeEventListener("tick", Main.scope.onTick);
    }

    private setPositionsMenu():void{

        Main.scope.setElementsMenu("prev","next");
        Main.scope.setElementsFromSubMenu();

        TweenMax.set(Main.scope.$menu, {left:-Main.scope.moveXmenu * Main.scope.counterLi});
        TweenMax.set(Main.scope.$links, {left:(-Main.scope.moveXmenu*2) * Main.scope.counterLi,ease:Cubic.easeInOut});
        TweenMax.set(Main.scope.$bgRef, {left:Main.scope.counterLi/1.7 + "%"});
    }

    // HELP USER

    private goHelpUser():void{

        Main.scope.TLuser = new TimelineMax({delay: .5, paused:false, repeat:-1, repeatDelay:.5});

        Main.scope.TLuser.to(Main.scope.$textHelpUser, .8, {opacity:1})
                         .set([Main.scope.$mouseIcon,Main.scope.$clickIcon,Main.scope.$dragIcon,Main.scope.$dropIcon], {scaleX:.5,scaleY:.5})
                         .set(Main.scope.$clickMenu, {top:"45"})
                         .to(Main.scope.$wheelUser, 1, {opacity:1}, .5)
                         .to(Main.scope.$mouseIcon, .5, {opacity:1,scaleX:1,scaleY:1,ease:Back.easeOut}, 1.1)
                         .to(Main.scope.$clickIcon, .5, {opacity:1,scaleX:1,scaleY:1,ease:Back.easeOut}, 1.4)
                         .to(Main.scope.$mouseIcon, .8, {opacity:.5}, 2.4)
                         .to(Main.scope.$clickIcon, .8, {right:"12",ease:Cubic.easeOut}, 2.4)
                         .to(Main.scope.$clickIcon, .4, {top:"30",ease:Cubic.easeIn}, 2.9)
                         .to(Main.scope.$clickIcon, .4, {top:"27",ease:Cubic.easeIn}, 3.4)
                         .to(Main.scope.$clickIcon, .4, {top:"30",ease:Cubic.easeIn}, 3.9)
                         .to(Main.scope.$clickIcon, .4, {top:"27",ease:Cubic.easeIn}, 4.4)
                         .to([Main.scope.$wheelUser,Main.scope.$mouseIcon,Main.scope.$clickIcon], .8, {opacity:0}, 4.9)
                         .to(Main.scope.$clickLink, .8, {opacity:1}, 5.9)
                         .to(Main.scope.$clickMenu, .8, {opacity:1}, 6.5)
                         .set(Main.scope.$clickIcon, {scaleX:.5,scaleY:.5,opacity:0, top:"36"}, 6.9)
                         .to(Main.scope.$clickIcon, .5, {scaleX:1,scaleY:1,opacity:1,ease:Back.easeOut}, 7.2)
                         .to(Main.scope.$clickIcon, .3, {scaleX:.84,scaleY:.84,ease:Cubic.easeIn}, 8.6)
                         .to(Main.scope.$clickIcon, .3, {scaleX:1,scaleY:1,ease:Cubic.easeOut}, 9)
                         .to([Main.scope.$clickLink,Main.scope.$clickMenu,Main.scope.$clickIcon], .8, {opacity:0}, 9.8)
                         .to(Main.scope.$dragDrop, .8, {opacity:1}, 10.8)
                         .to(Main.scope.$dropIcon, .5, {scaleX:1,scaleY:1,opacity:1,ease:Back.easeOut}, 11.7)
                         .set(Main.scope.$dropIcon, {opacity:0}, 12.5)
                         .set(Main.scope.$dragIcon, {scaleX:1,scaleY:1,opacity:1, top:"28", right:"15"}, 12.5)
                         .to(Main.scope.$dragIcon, .8, {right:"-5",ease:Cubic.easeOut}, 12.8)
                         .set(Main.scope.$dragIcon, {right:"-5", opacity:0}, 13.8)
                         .set(Main.scope.$dropIcon, {right:"-5", opacity:1}, 13.8)
                         .set(Main.scope.$dragIcon, {right:"-5", opacity:1}, 14.2)
                         .set(Main.scope.$dropIcon, {right:"-5", opacity:0}, 14.2)
                         .to(Main.scope.$dragIcon, .8, {right:"15",ease:Cubic.easeOut}, 14.3)
                         .set(Main.scope.$dragIcon, {right:"15", opacity:0}, 15.2)
                         .set(Main.scope.$dropIcon, {right:"15", opacity:1}, 15.2)
                         .to([Main.scope.$dropIcon,Main.scope.$dragDrop], .8, {opacity:0}, 15.7)
                         .to(Main.scope.$textHelpUser, .8, {opacity:0},16.2);
    }

    // EVENTOS DEL MENU

    private addListenersMenu():void{

        //console.log("addListener");
        //TweenMax.ticker.fps(30);
        Main.scope.$wrapLocalRef.addEventListener("mouseenter",Main.scope.inWindow);
        Main.scope.$wrapLocalRef.addEventListener("mouseleave",Main.scope.outWindow);
        Main.scope.$wrapLocalRef.addEventListener("mousedown",Main.scope.onDrag);
        Main.scope.$wrapLocalRef.addEventListener("mouseup",Main.scope.onDrop);
        Main.scope.$wrapLocalRef.addEventListener("touchstart",Main.scope.onDrag);
        Main.scope.$wrapLocalRef.addEventListener("touchend",Main.scope.onDrop);
        Main.scope.$wrapLocalRef.addEventListener("mousewheel", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.addEventListener("DOMMouseScroll", Main.scope.mouseWheelHandler);
    }

    private removeListenersMenu():void{

        //console.log("removeListener");

        Main.scope.$wrapLocalRef.removeEventListener("mousedown",Main.scope.onDrag);
        Main.scope.$wrapLocalRef.removeEventListener("mouseup",Main.scope.onDrop);
        Main.scope.$wrapLocalRef.removeEventListener("touchstart",Main.scope.onDrag);
        Main.scope.$wrapLocalRef.removeEventListener("touchend",Main.scope.onDrop);
        Main.scope.$wrapLocalRef.removeEventListener("mousewheel", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.removeEventListener("DOMMouseScroll", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.removeEventListener("touchmove",Main.scope.onMouseMove);
    }

    private onTick(event):void{

        Main.scope.$wrapLocalRef.addEventListener("mousemove",Main.scope.getMouse);
        Main.scope.$wrapLocalRef.addEventListener("touchmove",Main.scope.getMouse);

        var moveX:number = (Main.scope.mouseX/(Main.scope.widthWindow)) * 45;

        if(Main.scope.isOnMove == false) TweenMax.to($("#bg-" + Main.scope.counterLi),1,{css:{left:-moveX + "px"},ease:Cubic.easeOut});
    }

    private getMouse(event):void{
        Main.scope.mouseX = event.pageX;
        Main.scope.mouseY = event.pageY;
    }

    private activeClickMenu():void{

        //console.log("activeClickMenu");

        Main.scope.$menuP.on("click",function(e){
           if($(e.currentTarget).parent().hasClass("next-menu")) Main.scope.goMenu("next");
           if($(e.currentTarget).parent().hasClass("prev-menu")) Main.scope.goMenu("prev");
        });

        Main.scope.$menuP.on("mouseenter",function(e){
            Main.scope.$wrapLocalRef.removeEventListener("mousedown",Main.scope.onDrag);
            Main.scope.$wrapLocalRef.removeEventListener("touchstart",Main.scope.onDrag);
        });

        Main.scope.$menuP.on("mouseleave",function(e){
            Main.scope.$wrapLocalRef.addEventListener("mousedown",Main.scope.onDrag);
            Main.scope.$wrapLocalRef.addEventListener("touchstart",Main.scope.onDrag);
        });

        Main.scope.$linksA.on("click",function(e){
            TweenMax.set(Main.scope.$loaderRef, {css:{display:"block"}});
            TweenMax.to(Main.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:function(){
                if(Main.scope.counterLi == 0) $(location).attr("href", "http://www.jdmiguel.com/about/");
                else if(Main.scope.counterLi == 1) $(location).attr("href", "http://www.jdmiguel.com/projects/");
                else if(Main.scope.counterLi == 2) $(location).attr("href", "http://www.jdmiguel.com/skills/");
                else if(Main.scope.counterLi == 3) $(location).attr("href", "http://www.jdmiguel.com/timeline/");
                else if(Main.scope.counterLi == 4) $(location).attr("href", "http://www.jdmiguel.com/working/");
                else if(Main.scope.counterLi == 5) $(location).attr("href", "http://www.jdmiguel.com/contact/");
                /*if(Main.scope.counterLi == 0) $(location).attr("href", "http://localhost:81/jdmiguel/bin/about/");
                else if(Main.scope.counterLi == 1) $(location).attr("href", "http://localhost:81/jdmiguel/bin/skills/");
                else if(Main.scope.counterLi == 2) $(location).attr("href", "http://localhost:81/jdmiguel/bin/timeline/");
                else if(Main.scope.counterLi == 3) $(location).attr("href", "http://localhost:81/jdmiguel/bin/working/");
                else if(Main.scope.counterLi == 4) $(location).attr("href", "http://localhost:81/jdmiguel/bin/contact/");*/
            }});
        });
    }

    private overBtnSection(e):void{
        TweenMax.to(Main.scope.$linksCircle, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Main.scope.$linksArrow, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Main.scope.$linksP, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnSection(e):void{
        TweenMax.to(Main.scope.$linksCircle, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Main.scope.$linksArrow, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Main.scope.$linksP, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private mouseWheelHandler(e) {
        Main.scope.isOnMove = true;

        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

        delta == 1 ? Main.scope.goMenu("prev") : Main.scope.goMenu("next");
    }

    private onDrag(event):void{

        //console.log("onDrag: " + event);

        if(event.type = 'touchevent') console.log('is touch event')

        Main.scope.isOnDrag = true;

        Main.scope.posXinitMouse = event.pageX;

        $("body").removeClass("drag-cursor").addClass("drop-cursor");

        Main.scope.$wrapLocalRef.addEventListener("mousemove",Main.scope.onMouseMove);
        Main.scope.$wrapLocalRef.addEventListener("touchmove",Main.scope.onMouseMove);
    }


    private onDrop(event):void{

        //console.log("onDrop");

        if(Main.scope.isOnDrag == false) return;

        //console.log("onDrop throw isOnDrag");

        if(event != undefined) Main.scope.posXfinMouse = event.pageX;

        $("body").removeClass("drop-cursor").addClass("drag-cursor");

        Main.scope.$wrapLocalRef.removeEventListener("mousemove",Main.scope.onMouseMove);
        Main.scope.$wrapLocalRef.removeEventListener("touchmove",Main.scope.onMouseMove);

        Main.scope.valueDragMouse = Main.scope.posXinitMouse - Main.scope.posXfinMouse;

        if (Main.scope.valueDragMouse > Main.scope.widthWindow/6) {
            Main.scope.deltaMenuActive = true;
            Main.scope.goMenu("next");
        }
        else if (Main.scope.valueDragMouse < -Main.scope.widthWindow/6){
            Main.scope.deltaMenuActive = true;
            Main.scope.goMenu("prev");
        }
        else {
            TweenMax.to(Main.scope.$menu, .6, {css:{left:-Main.scope.moveXmenu * Main.scope.counterLi},ease:Cubic.easeInOut});
            TweenMax.to(Main.scope.$links, .8, {css:{left:(-Main.scope.moveXmenu*2) * Main.scope.counterLi},ease:Cubic.easeInOut, onComplete:function(){
                Main.scope.isOnWindow = false;
                Main.scope.isOnDrag = false;
            }});
        }
    }

    private onMouseMove(event):void{

        //console.log("onMouseMove");

        Main.scope.isOnDrag = true;

        Main.scope.posXcurrentMouse = ((event.pageX - Main.scope.posXinitMouse)/2 -  Main.scope.moveXmenu * Main.scope.counterLi);
        TweenMax.to(Main.scope.$menu, .6, {css:{left:Main.scope.posXcurrentMouse + "px"}});
        TweenMax.to(Main.scope.$links, .6, {css:{left:(Main.scope.posXcurrentMouse*2) + "px"}});
    }

    // DESPLAZAMIENTO DEL MENU
    
    private goMenu(position:string):void {

        if(Main.scope.deltaMenuActive){
            Main.scope.deltaMenuActive = false;
        } else return;

        //Main.scope.desactiveTicker();

        Main.scope.isOnMove = true;
        Main.scope.isOnWindow = true;

        Main.scope.removeListenersMenu();

        switch(position){
            case "next":
                Main.scope.counterLi < Main.scope.totalLi - 1 ? Main.scope.counterLi++ : Main.scope.counterLi = Main.scope.totalLi - 1;
                Main.scope.valuesMenu.position = -1;
                Main.scope.valuesMenu.percent_1 = 100;
                Main.scope.valuesMenu.percent_2 = 112;
                Main.scope.valuesMenu.callBack = Main.scope.setElementsMenu;
                Main.scope.valuesMenu.param_1 = "next";
                Main.scope.valuesMenu.param_2 = "prev";
                Main.scope.isOnSubmenu = false;
                Main.scope.moveMenu("menu");
            break;
            case "prev":
                Main.scope.counterLi > 0 ? Main.scope.counterLi-- : Main.scope.counterLi = 0;
                Main.scope.valuesMenu.position = 1;
                Main.scope.valuesMenu.percent_1 = -100;
                Main.scope.valuesMenu.percent_2 = -112;
                Main.scope.valuesMenu.callBack = Main.scope.setElementsMenu;
                Main.scope.valuesMenu.param_1 = "prev";
                Main.scope.valuesMenu.param_2 = "next";
                Main.scope.isOnSubmenu = false;
                Main.scope.moveMenu("menu");
            break;
            case "random":
                Main.scope.counterLi = Main.scope.currentSubMenu;
                Main.scope.valuesMenu.callBack = Main.scope.setElementsFromSubMenu;
                Main.scope.isOnSubmenu = true;
                Main.scope.moveMenu("submenu");
            break;
        }
    }

    private moveMenu(moveFrom:string):void{

        //console.log("moveMenu" + "currentLi: " + Main.scope.counterLi);

        if(moveFrom == "menu"){
            //console.log("moveMenu from menu");
            TweenMax.to(Main.scope.$menuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).children("p").children("i"), .7, {css:{left: Main.scope.valuesMenu.percent_1 + "%"},ease:Cubic.easeInOut});
            TweenMax.to(Main.scope.$submenuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).children("span").children("i"), .7, {css:{left: Main.scope.valuesMenu.percent_2 + "%"},ease:Cubic.easeInOut});
        }

        if(moveFrom == "submenu"){
            //console.log("moveMenu from submenu");
            for(var i:number = 0; i < Main.scope.totalLi; i++){
                if(Main.scope.counterLi > i){
                    Main.scope.valuesMenu.percent_1 = 100;
                    Main.scope.valuesMenu.percent_2 = 100;
                }
                if(Main.scope.counterLi < i){
                    Main.scope.valuesMenu.percent_1 = -100;
                    Main.scope.valuesMenu.percent_2 = -100;
                }

                if(Main.scope.$menuLi.eq(i).hasClass("current-menu")) TweenMax.to(Main.scope.$menuLi.eq(i).children("p").children("i"), .7, {css:{left: Main.scope.valuesMenu.percent_1 + "%"},ease:Cubic.easeInOut});
                if(Main.scope.$submenuLi.eq(i).hasClass("current-menu")) TweenMax.to(Main.scope.$submenuLi.eq(i).children("span").children("i"), .7, {css:{left: Main.scope.valuesMenu.percent_2 + "%"},ease:Cubic.easeInOut});
            }
        }

        TweenMax.to(Main.scope.$menu, .8, {left:-Main.scope.moveXmenu * Main.scope.counterLi,ease:Cubic.easeInOut, onComplete:Main.scope.valuesMenu.callBack, onCompleteParams:[Main.scope.valuesMenu.param_1,Main.scope.valuesMenu.param_2]});
        TweenMax.to(Main.scope.$links, 1, {left:(-Main.scope.moveXmenu*2) * Main.scope.counterLi,ease:Cubic.easeInOut});
        TweenMax.to(Main.scope.$menuLi.eq(Main.scope.counterLi).children("p").children("i"), .7, {left:0,ease:Cubic.easeInOut});
        TweenMax.to(Main.scope.$submenuLi.eq(Main.scope.counterLi).children("span").children("i"), .7, {left:0, ease:Cubic.easeInOut});

        Main.scope.moveBg(1.5);
    }

    private moveBg(d_:number):void{

        var duration_:number = d_;

        var localCounter:JQuery = $("#bg-" + Main.scope.counterLi);
        Main.scope.counterBg++;
        localCounter.attr("zIndex",Main.scope.counterBg);
        /*Main.scope.classBg.each(function(i){
            if(i == Main.scope.counterLi){
                TweenMax.to($("#bg-" + i), duration_, {left:0,opacity:1, ease:Power2.easeOut});
            } else{
                TweenMax.to($("#bg-" + i), duration_, {left:0,opacity:0, ease:Power2.easeOut});
            }
        });*/

        Main.scope.classBg.each(function(i){
            if(i == Main.scope.counterLi){
                TweenMax.to($("#bg-" + i), duration_, {opacity:1, left:Main.scope.counterLi/1.7 + "%", ease:Power2.easeOut});
            } else{
                TweenMax.to($("#bg-" + i), duration_, {opacity:0, left:Main.scope.counterLi/1.7 + "%", ease:Power2.easeOut});
            }
        })
    }

    private setElementsMenu(posElement_1:string,posElement_2:string):void{

        //console.log("setElementsMenu");

        Main.scope.$menuLi.eq(Main.scope.counterLi).removeClass(posElement_1+"-menu").addClass("current-menu");
        Main.scope.$menuLi.eq(Main.scope.counterLi+Main.scope.valuesMenu.position).removeClass("current-menu").addClass(posElement_2+"-menu");
        Main.scope.$linksLi.eq(Main.scope.counterLi).removeClass(posElement_1+"-link").addClass("current-link");
        Main.scope.$linksLi.eq(Main.scope.counterLi+Main.scope.valuesMenu.position).removeClass("current-link").addClass(posElement_2+"-link");
        Main.scope.$submenuLi.eq(Main.scope.counterLi).removeClass(posElement_1+"-menu").addClass("current-menu");
        Main.scope.$submenuLi.eq(Main.scope.counterLi+Main.scope.valuesMenu.position).removeClass("current-menu").addClass(posElement_2+"-menu");

        Main.scope.completeSetElements();
    }

    private setElementsFromSubMenu():void{

        //console.log("setElementsFromSubMenu");

        Main.scope.$menuLi.eq(Main.scope.counterLi).removeClass("prev-menu").removeClass("next-menu").addClass("current-menu");
        Main.scope.$linksLi.eq(Main.scope.counterLi).removeClass("prev-link").removeClass("next-link").addClass("current-link");
        Main.scope.$submenuLi.eq(Main.scope.counterLi).removeClass("prev-menu").removeClass("next-menu").addClass("current-menu");

        for(var i:number = 0; i < Main.scope.totalLi; i++){
            if(Main.scope.counterLi > i){
                Main.scope.$menuLi.eq(i).removeClass("current-menu").removeClass("next-menu").addClass("prev-menu");
                Main.scope.$linksLi.eq(i).removeClass("current-link").removeClass("next-link").addClass("prev-link");
                Main.scope.$submenuLi.eq(i).removeClass("current-menu").removeClass("next-menu").addClass("prev-menu");
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), {css:{left:"100%"}});
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), {css:{left:"100%"}});
            }
            if(Main.scope.counterLi < i){
                Main.scope.$menuLi.eq(i).removeClass("current-menu").removeClass("prev-menu").addClass("next-menu");
                Main.scope.$linksLi.eq(i).removeClass("current-link").removeClass("prev-link").addClass("next-link");
                Main.scope.$submenuLi.eq(i).removeClass("current-menu").removeClass("prev-menu").addClass("next-menu");
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), {css:{left:"-100%"}});
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), {css:{left:"-100%"}});
            }
        }

        Main.scope.completeSetElements();
    }

    private completeSetElements():void{

        Main.scope.isOnDrag = false;
        Main.scope.deltaMenuActive = true;
        Main.scope.isOnMove = false;
        Main.scope.isOnWindow = false;

        //Main.scope.activeTicker();

        Main.scope.addListenersMenu();
    }

    // FUNCIONALIDAD SUBMENU

    private activeSubMenu():void{

        Main.scope.$submenuLi.each(function(i) {
           $(this).data("numSubMenu",i).on("click",(e)=>{
               Main.scope.currentSubMenu = $(this).data("numSubMenu");
               Main.scope.goMenu("random");
           });
        });
    }

    // FUNCIONALIDAD SOCIAL MENU

    private activeSocialMenu():void{

        var socialId:any;

        Main.scope.$socialBtn.each(function(i){
            Main.scope.$socialBtn.eq(i).data("id",i);
        });

        Main.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Main.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Main.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Main.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Main.scope.$socialBtn.on("click",function(event){

            var url:string;

            switch(socialId){
                case 0:
                    url = "https://www.facebook.com/jdemiguelfrontend/";
                break;
                case 1:
                    url = "https://twitter.com/jaimedemiguel";
                break;
                case 2:
                    url = "https://www.linkedin.com/?trk=nav_logo";
                break;
            }

            window.open(url,"_blank");
        });
    }

    // FUNCIONALIDAD RESIZE

    private onResetAll():void{

        Main.scope.counterLi = 0;

        TweenMax.set([Main.scope.$menu,Main.scope.$links], {css:{left:0}});

        Main.scope.$linksA.off("mouseenter", Main.scope.overBtnSection);
        Main.scope.$linksA.off("mouseleave", Main.scope.outBtnSection);

        for(var i:number = 0; i < Main.scope.totalLi; i++){
            if (i == 0) {
                if(Main.scope.$menuLi.eq(i).hasClass("prev-menu")) {
                    Main.scope.$menuLi.eq(i).removeClass("prev-menu");
                    TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), {css:{left:0}});
                }
                if(Main.scope.$submenuLi.eq(i).removeClass("prev-menu")){
                    Main.scope.$submenuLi.eq(i).removeClass("prev-menu");
                    TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), {css:{left:0}});
                }

                Main.scope.$menuLi.eq(i).addClass("current-menu");
                Main.scope.$linksLi.eq(i).addClass("current-link");
                Main.scope.$submenuLi.eq(i).addClass("current-menu");
            }
            else{
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), {css:{left:"-100%"}});
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), {css:{left:"-100%"}});
                Main.scope.$menuLi.eq(i).removeClass("prev-menu").removeClass("current-menu").addClass("next-menu");
                Main.scope.$linksLi.eq(i).removeClass("prev-link").removeClass("current-link").addClass("next-link");
                Main.scope.$submenuLi.eq(i).removeClass("prev-menu").removeClass("current-menu").addClass("next-menu");
            }
        }
        Main.scope.onResizeAll();
    }

    private onResizeAll():void{

        Main.scope.widthWindow = Main.scope.$wrapLocalRef.clientWidth;
        Main.scope.heightWindow = Main.scope.$wrapLocalRef.clientHeight;

        Main.scope.moveXmenu = Main.scope.widthWindow/2;

        Main.scope.$menu.css({
            width:function():number{
                return Main.scope.widthWindow * 5;
            },
            height:function():number{
                return Main.scope.heightWindow;
            }
        });

        Main.scope.$menuLi.css({
            width:function():number{
                return Main.scope.widthWindow/2;
            },
            height:function():number{
                return Main.scope.heightWindow;
            }
        });

        Main.scope.$links.css({
            width:function():number{
                return Main.scope.widthWindow * 7;
            }
        });

        Main.scope.$linksLi.css({
            width:function():number{
                return Main.scope.widthWindow;
            }
        });

        Main.scope.$linksA.on("mouseenter", Main.scope.overBtnSection);
        Main.scope.$linksA.on("mouseleave", Main.scope.outBtnSection);

        //Main.scope.addMovementBg();
        Main.scope.setPositionsMenu();
        Main.scope.addListenersMenu();
        Main.scope.activeClickMenu();
        Main.scope.activeSubMenu();
        Main.scope.activeSocialMenu();
        Main.scope.moveBg(0);
        if(Main.scope.isOnInit){
            Main.scope.goHome();
            Main.scope.isOnInit = false;
        }
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}



