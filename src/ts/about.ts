///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class About{

    static scope:any;

    private TLabout:any;

    private $backBtn:JQuery                        =              $(".container-btn-back > a");
    private $txtBack:JQuery                        =              $(".container-btn-back > a > p");
    private $circleBack:JQuery                     =              $(".container-btn-back > a > svg > circle");
    private $arrowBack:JQuery                      =              $(".container-btn-back > a > svg > polyline");

    private $socialBtn:JQuery                      =              $(".social .over-social > span");
    private $socialSvg:JQuery                      =              $(".social > svg > path");

    private $loaderRef:JQuery                      =              $("#loader");

    private $logo:JQuery                           =              $(".logo");
    private $logoSvg:JQuery                        =              $(".logo svg path");
    private $logoJ:JQuery                          =              $(".logo .logo-txt span:nth-child(1)");
    private $logoD:JQuery                          =              $(".logo .logo-txt span:nth-child(2)");
    private $logoM:JQuery                          =              $(".logo .logo-txt span:nth-child(3)");

    private $txtRef:JQuery                         =              $("#txt-about");
    private $imgRef:JQuery                         =              $("#img-about > img");
    private $strokeRef:JQuery                      =              $("#stroke-svg-about");
    private $fillRef:JQuery                        =              $("#fill-svg-about");
    private $submenuLocalRef:JQuery                =              $("#submenu");
    private $submenuLiLocalRef:JQuery              =              $("#submenu li");


    constructor(){

        About.scope = this;

        TweenMax.set([About.scope.$txtBack,About.scope.$circleBack,About.scope.$arrowBack], {opacity:.4});
        TweenMax.set(About.scope.$logo, {cursor:"pointer"});

        About.scope.$logo.on("click", function(){ About.scope.leaveSection()});
        About.scope.$logo.on("mouseenter", function(){ About.scope.overLogo()});
        About.scope.$logo.on("mouseleave", function(){ About.scope.outLogo()});
        About.scope.$backBtn.on("click", function(){ About.scope.leaveSection()});
        About.scope.$backBtn.on("mouseenter", function(){ About.scope.overBtnBack()});
        About.scope.$backBtn.on("mouseleave", function(){ About.scope.outBtnBack()});

        About.scope.activeSocialMenu();

        this.TLabout = new TimelineMax({paused:false});

        About.scope.TLabout.set(About.scope.$strokeRef, {drawSVG:"0", stroke:"#FFFFFF"})
        .set(About.scope.$fillRef, {fill:"#FFFFFF",opacity:0})
        .set([About.scope.$txtRef,About.scope.$imgRef], {opacity:0})
        .to(About.scope.$strokeRef, 1.5, {drawSVG:"100%", stroke:"#1bdcde", ease:Cubic.easeOut}, .5)
        .to(About.scope.$fillRef, .8, {fill:"#1bdcde", opacity:.15, ease:Cubic.easeOut}, 1.5)
        .to(About.scope.$imgRef, 1.5, {opacity:1}, 1.5)
        .to(About.scope.$txtRef, 1.5, {opacity:1}, 1.8)
    }

    private leaveSection():void{
        TweenMax.set(About.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(About.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
                //About.scope.goHome("http://localhost:81/jdmiguel/bin/", 0);
                 About.scope.goHome("http://www.jdmiguel.com", 0);
            }
        });
    }

    private goHome(currentSection:any, counterHome:any) {
        currentSection +="?";
        currentSection += counterHome+"&";
        currentSection = currentSection.substring(0,currentSection.length-1);
        location.href = currentSection;
    }

    private overLogo():void{
        TweenMax.to(About.scope.$logoSvg, .5, {fill:"#1bdcde", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoJ, .5, {color:"#1bdcde", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(About.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(About.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(About.scope.$circleBack, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(About.scope.$arrowBack, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(About.scope.$txtBack, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(About.scope.$circleBack, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(About.scope.$arrowBack, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(About.scope.$txtBack, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private activeSocialMenu():void{

        var socialId:any;

        About.scope.$socialBtn.each(function(i){
            About.scope.$socialBtn.eq(i).data("id",i);
        });

        About.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(About.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        About.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(About.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        About.scope.$socialBtn.on("click",function(event){

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
}