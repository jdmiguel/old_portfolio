///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Projects{

    static scope:any;

    private TLprojects:any;

    private $backBtn:JQuery                        =              $(".container-btn-back > a");
    private $txtBack:JQuery                        =              $(".container-btn-back > a > p");
    private $circleBack:JQuery                     =              $(".container-btn-back > a > svg > circle");
    private $arrowBack:JQuery                      =              $(".container-btn-back > a > svg > polyline");

    private $loaderRef:JQuery                      =              $("#loader");

    private $logo:JQuery                           =              $(".logo");
    private $logoSvg:JQuery                        =              $(".logo svg path");
    private $logoJ:JQuery                          =              $(".logo .logo-txt span:nth-child(1)");
    private $logoD:JQuery                          =              $(".logo .logo-txt span:nth-child(2)");
    private $logoM:JQuery                          =              $(".logo .logo-txt span:nth-child(3)");

    private $submenuLiLocalRef:JQuery              =              $("#submenu li");

    private $socialBtn:JQuery                      =              $(".social .over-social > span");
    private $socialSvg:JQuery                      =              $(".social > svg > path");

    constructor(){

        Projects.scope = this;

        TweenMax.set([Projects.scope.$txtBack,Projects.scope.$circleBack,Projects.scope.$arrowBack], {opacity:.4});
        TweenMax.set(Projects.scope.$logo, {cursor:"pointer"});

        Projects.scope.$logo.on("click", function(){ Projects.scope.leaveSection()});
        Projects.scope.$logo.on("mouseenter", function(){ Projects.scope.overLogo()});
        Projects.scope.$logo.on("mouseleave", function(){ Projects.scope.outLogo()});
        Projects.scope.$backBtn.on("click", function(){ Projects.scope.leaveSection()});
        Projects.scope.$backBtn.on("mouseenter", function(){ Projects.scope.overBtnBack()});
        Projects.scope.$backBtn.on("mouseleave", function(){ Projects.scope.outBtnBack()});

        Projects.scope.activeSocialMenu();
    }

    private leaveSection():void{
        TweenMax.set(Projects.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(Projects.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
                Projects.scope.goHome("http://localhost/jdmiguel_bg/bin/", 1);
                //Projects.scope.goHome("http://www.jdmiguel.com", 1);
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
        TweenMax.to(Projects.scope.$logoSvg, .5, {fill:"#9430e0", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoJ, .5, {color:"#9430e0", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(Projects.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(Projects.scope.$circleBack, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$arrowBack, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$txtBack, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(Projects.scope.$circleBack, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$arrowBack, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Projects.scope.$txtBack, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private activeSocialMenu():void{

        var socialId:any;

        Projects.scope.$socialBtn.each(function(i){
            Projects.scope.$socialBtn.eq(i).data("id",i);
        });

        Projects.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Projects.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Projects.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Projects.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Projects.scope.$socialBtn.on("click",function(event){

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