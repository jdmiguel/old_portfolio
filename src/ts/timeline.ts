///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Timeline{

    static scope:any;

    private TLtimeline:any;

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
    
    private $submenuLocalRef:JQuery                =              $("#submenu");
    private $submenuLiLocalRef:JQuery              =              $("#submenu li");

    private $bgStroke:JQuery                       =              $("#bg-stroke");
    private $bgFill:JQuery                         =              $("#bg-fill");
    private $linesDotted:JQuery                    =              $("#lines-dotted");
    private $years:JQuery                          =              $("#years");

    private $circleBegin:JQuery                    =              $(".circle-begin");
    private $circleEndFill:JQuery                  =              $(".circle-end-fill");
    private $circleEndStroke:JQuery                =              $(".circle-end-stroke");
    private $lineBlocks:JQuery                     =              $(".line-blocks");
    private $add:JQuery                            =              $(".add");
    private $com:JQuery                            =              $("#blocks img");
    private $job:JQuery                            =              $("#blocks p");
    private $areaRollover:JQuery                   =              $("#blocks span");

    constructor(){

        Timeline.scope = this;

        TweenMax.set([Timeline.scope.$txtBack,Timeline.scope.$circleBack,Timeline.scope.$arrowBack], {opacity:.4});
        TweenMax.set(Timeline.scope.$logo, {cursor:"pointer"});

        Timeline.scope.$logo.on("click", function(){ Timeline.scope.leaveSection()});
        Timeline.scope.$logo.on("mouseenter", function(){ Timeline.scope.overLogo()});
        Timeline.scope.$logo.on("mouseleave", function(){ Timeline.scope.outLogo()});
        Timeline.scope.$backBtn.on("click", function(){ Timeline.scope.leaveSection()});
        Timeline.scope.$backBtn.on("mouseenter", function(){ Timeline.scope.overBtnBack()});
        Timeline.scope.$backBtn.on("mouseleave", function(){ Timeline.scope.outBtnBack()});

        Timeline.scope.activeSocialMenu();

        Timeline.scope.$areaRollover.each(function(i){
            Timeline.scope.$areaRollover.eq(i).data("num",i);
        });

        Timeline.scope.TLtimeline = new TimelineMax({paused:false});

        Timeline.scope.TLtimeline.set([Timeline.scope.$bgStroke,Timeline.scope.$lineBlocks], {drawSVG:"0"})
            .set([Timeline.scope.$bgFill,Timeline.scope.$linesDotted,Timeline.scope.$years, Timeline.scope.$circleBegin, Timeline.scope.$circleEndFill,Timeline.scope.$com, Timeline.scope.$job], {opacity:0})
            .set(Timeline.scope.$circleEndStroke, {opacity:0,scale:.5})
            .set(Timeline.scope.$add, {opacity:0,rotation:'-=120'})
            .to(Timeline.scope.$bgStroke, 2.5, {drawSVG:"100%", ease:Cubic.easeOut}, 1)
            .to(Timeline.scope.$bgFill, 1, {opacity:1}, '-=1.2')
            .to(Timeline.scope.$years, .4, {opacity:.5}, '-=.4')
            .to(Timeline.scope.$linesDotted, .4, {opacity:.3}, '-=.3')
            .to(Timeline.scope.$circleBegin.eq(0), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + 0/1.5)
            .to(Timeline.scope.$lineBlocks.eq(0), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + 0/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(0), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 0/1.5)
            .to(Timeline.scope.$circleEndFill.eq(0), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 0/1.5)
            .to(Timeline.scope.$add.eq(0), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 0/1.5)
            .to(Timeline.scope.$com.eq(0), .3, {opacity:.5}, 5 + 0/1.5)
            .to(Timeline.scope.$job.eq(0), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(0)}}, 5.15 + 0/1.5)
            .to(Timeline.scope.$circleBegin.eq(1), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + 1/1.5)
            .to(Timeline.scope.$lineBlocks.eq(1), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + 1/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(1), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 1/1.5)
            .to(Timeline.scope.$circleEndFill.eq(1), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 1/1.5)
            .to(Timeline.scope.$add.eq(1), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 1/1.5)
            .to(Timeline.scope.$com.eq(1), .3, {opacity:.5}, 5 + 1/1.5)
            .to(Timeline.scope.$job.eq(1), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(1)}}, 5.15 + 1/1.5)
            .to(Timeline.scope.$circleBegin.eq(2), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + 2/1.5)
            .to(Timeline.scope.$lineBlocks.eq(2), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + 2/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(2), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 2/1.5)
            .to(Timeline.scope.$circleEndFill.eq(2), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 2/1.5)
            .to(Timeline.scope.$add.eq(2), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 2/1.5)
            .to(Timeline.scope.$com.eq(2), .3, {opacity:.5}, 5 + 2/1.5)
            .to(Timeline.scope.$job.eq(2), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(2)}}, 5.15 + 2/1.5)
            .to(Timeline.scope.$circleBegin.eq(3), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + 3/1.5)
            .to(Timeline.scope.$lineBlocks.eq(3), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + 3/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(3), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 3/1.5)
            .to(Timeline.scope.$circleEndFill.eq(3), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 3/1.5)
            .to(Timeline.scope.$add.eq(3), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 3/1.5)
            .to(Timeline.scope.$com.eq(3), .3, {opacity:.5}, 5 + 3/1.5)
            .to(Timeline.scope.$job.eq(3), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(3)}}, 5.15 + 3/1.5)
            .to(Timeline.scope.$circleBegin.eq(4), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + 4/1.5)
            .to(Timeline.scope.$lineBlocks.eq(4), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + 4/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(4), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 4/1.5)
            .to(Timeline.scope.$circleEndFill.eq(4), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 4/1.5)
            .to(Timeline.scope.$add.eq(4), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 4/1.5)
            .to(Timeline.scope.$com.eq(4), .3, {opacity:.5}, 5 + 4/1.5)
            .to(Timeline.scope.$job.eq(4), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(4)}}, 5.15 + 4/1.5)
            .to(Timeline.scope.$add.eq(5), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + 5/1.5)
            .to(Timeline.scope.$com.eq(5), .3, {opacity:.5}, 5 + 5/1.5)
            .to(Timeline.scope.$job.eq(5), .3, {opacity:.5, onComplete:function(){Timeline.scope.addListener(5)}}, 5.15 + 5/1.5)
            .to(Timeline.scope.$circleEndStroke.eq(5), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + 5/1.5)
            .to(Timeline.scope.$circleEndFill.eq(5), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + 5/1.5)

        /*for (var i:number = 0;i<6;i++){
            Timeline.scope.TLtimeline.to(Timeline.scope.$circleBegin.eq(i), .4, {opacity:1, ease:Sine.easeOut}, 3.7 + i/1.5)
                .to(Timeline.scope.$lineBlocks.eq(i), .5, {drawSVG:"100%", ease:Sine.easeInOut}, 4 + i/1.5)
                .to(Timeline.scope.$circleEndStroke.eq(i), .5, {opacity:1, scale:1, transformOrigin:"50% 50%", ease:Sine.easeOut}, 4.4 + i/1.5)
                .to(Timeline.scope.$circleEndFill.eq(i), .3, {opacity:.2, ease:Back.easeOut}, 4.6 + i/1.5)
                .to(Timeline.scope.$add.eq(i), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "+=120", ease:Back.easeOut}, 4.9 + i/1.5)
                .to(Timeline.scope.$com.eq(i), .3, {opacity:.5}, 5 + i/1.5)
                .to(Timeline.scope.$job.eq(i), .3, {opacity:.5, onComplete:Timeline.scope.addListener(i)}, 5.15 + i/1.5)
        }*/
    }

    private leaveSection():void{
        TweenMax.set(Timeline.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(Timeline.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
               // Timeline.scope.goHome("http://localhost:81/jdmiguel/bin/", 3);
                Timeline.scope.goHome("http://www.jdmiguel.com", 3);
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
        TweenMax.to(Timeline.scope.$logoSvg, .5, {fill:"#456ae3", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoJ, .5, {color:"#456ae3", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(Timeline.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(Timeline.scope.$circleBack, .4, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$arrowBack, .4, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$txtBack, .4, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(Timeline.scope.$circleBack, .4, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$arrowBack, .4, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Timeline.scope.$txtBack, .4, {opacity:.4, ease:Cubic.easeOut});
    }

    private activeSocialMenu():void{

        var socialId:any;

        Timeline.scope.$socialBtn.each(function(i){
            Timeline.scope.$socialBtn.eq(i).data("id",i);
        });

        Timeline.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Timeline.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Timeline.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Timeline.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Timeline.scope.$socialBtn.on("click",function(event){

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

    private addListener(num:number):void{
        console.log("addListener: " + num);
        Timeline.scope.$areaRollover.eq(num).css("cursor","pointer");

        Timeline.scope.$areaRollover.eq(num)
            .on("mouseenter", function(e):void{
                TweenMax.to([Timeline.scope.$com.eq(num),Timeline.scope.$job.eq(num)], .3, {opacity:1});
                TweenMax.to(Timeline.scope.$add.eq(num), .3, {opacity:.4, transformOrigin:"50% 50%", rotation: "90"});
            })
            .on("mouseleave", function(e):void{
                TweenMax.to([Timeline.scope.$com.eq(num),Timeline.scope.$job.eq(num)], .3, {opacity:.5});
                TweenMax.to(Timeline.scope.$add.eq(num), .3, {opacity:1, transformOrigin:"50% 50%", rotation: "0"});
            })
            .on("click",function(e):void{
                switch(num){
                    case 0:
                        window.open("http://www.itt.com","_blank");
                    break;
                    case 1:
                        window.open("http://retis-spain.es/","_blank");
                    break;
                    case 2:
                        window.open("http://www.rumbo.es/","_blank");
                    break;
                    case 3:
                        window.open("http://www.publicis.es","_blank");
                    break;
                    case 4:
                        window.open("http://www.proximitymadrid.es","_blank");
                    break;
                    case 5:
                        window.open("http://www.scpf.com","_blank");
                    break;
                }
            });
    }
}