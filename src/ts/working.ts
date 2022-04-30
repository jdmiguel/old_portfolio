///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Working{

    static scope:any;

    private TLworking:any;

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
    
    private $imgRef_1:JQuery                       =              $("#working-img-1");
    private $imgRef_2:JQuery                       =              $("#working-img-2");
    private $imgRef_3:JQuery                       =              $("#working-img-3");
    private $quote_1:JQuery                        =              $("#testimonial-1 .quote");
    private $quote_2:JQuery                        =              $("#testimonial-2 .quote");
    private $quote_3:JQuery                        =              $("#testimonial-3 .quote");
    private $reference_1:JQuery                    =              $("#testimonial-1 .reference");
    private $reference_2:JQuery                    =              $("#testimonial-2 .reference");
    private $reference_3:JQuery                    =              $("#testimonial-3 .reference");
    private $strokeRef_1:JQuery                    =              $("#stroke-svg-working-1");
    private $strokeRef_2:JQuery                    =              $("#stroke-svg-working-2");
    private $strokeRef_3:JQuery                    =              $("#stroke-svg-working-3");
    private $fillRef_1:JQuery                      =              $("#fill-svg-working-1");
    private $fillRef_2:JQuery                      =              $("#fill-svg-working-2");
    private $fillRef_3:JQuery                      =              $("#fill-svg-working-3");
    private $submenuLocalRef:JQuery                =              $("#submenu");
    private $submenuLiLocalRef:JQuery              =              $("#submenu li");
    
    constructor(){

        Working.scope = this;

        TweenMax.set([Working.scope.$txtBack,Working.scope.$circleBack,Working.scope.$arrowBack], {opacity:.4});
        TweenMax.set(Working.scope.$logo, {cursor:"pointer"});

        Working.scope.$logo.on("click", function(){ Working.scope.leaveSection()});
        Working.scope.$logo.on("mouseenter", function(){ Working.scope.overLogo()});
        Working.scope.$logo.on("mouseleave", function(){ Working.scope.outLogo()});
        Working.scope.$backBtn.on("click", function(){ Working.scope.leaveSection()});
        Working.scope.$backBtn.on("mouseenter", function(){ Working.scope.overBtnBack()});
        Working.scope.$backBtn.on("mouseleave", function(){ Working.scope.outBtnBack()});

        Working.scope.activeSocialMenu();

        this.TLworking = new TimelineMax({paused:false});

        this.TLworking.set([this.$strokeRef_1,this.$strokeRef_2,this.$strokeRef_3], {drawSVG:"0"})
            .set([this.$imgRef_1,this.$imgRef_2,this.$imgRef_3,this.$fillRef_1,this.$fillRef_2,this.$fillRef_3], {opacity:0})
            .set([this.$quote_1,this.$quote_3], {marginLeft:"+=15",opacity:0})
            .set(this.$quote_2, {marginLeft:"-=15",opacity:0})
            .set([this.$reference_1,this.$reference_2,this.$reference_3], {opacity:0})
            .to(this.$strokeRef_1, .8, {drawSVG:"100%", ease:Cubic.easeOut}, .5)
            .to(this.$fillRef_1, .8, {opacity:.3}, .9)
            .to(this.$imgRef_1, .8, {opacity:1}, .9)
            .to(this.$quote_1, .6, {opacity:1, marginLeft:"-=15", ease:Cubic.easeOut}, 1.2)
            .to(this.$reference_1, .6, {opacity:1, ease:Cubic.easeOut}, 1.6)
            .to(this.$strokeRef_2, .8, {drawSVG:"100%", ease:Cubic.easeOut}, 1.9)
            .to(this.$fillRef_2, .8, {opacity:.3}, 2.3)
            .to(this.$imgRef_2, .8, {opacity:1}, 2.3)
            .to(this.$quote_2, .6, {opacity:1, marginLeft:"+=15", ease:Cubic.easeOut}, 2.7)
            .to(this.$reference_2, .6, {opacity:1, ease:Cubic.easeOut}, 3.1)
            .to(this.$strokeRef_3, .8, {drawSVG:"100%", ease:Cubic.easeOut}, 3.3)
            .to(this.$fillRef_3, .8, {opacity:.3}, 3.7)
            .to(this.$imgRef_3, .8, {opacity:1}, 3.7)
            .to(this.$quote_3, .6, {opacity:1, marginLeft:"-=15", ease:Cubic.easeOut}, 4.1)
            .to(this.$reference_3, .6, {opacity:1, ease:Cubic.easeOut}, 4.5)
    }

    private leaveSection():void{
        TweenMax.set(Working.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(Working.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
                //Working.scope.goHome("http://localhost:81/jdmiguel/bin/", 4);
                 Working.scope.goHome("http://www.jdmiguel.com", 4);
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
        TweenMax.to(Working.scope.$logoSvg, .5, {fill:"#1faa1f", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoJ, .5, {color:"#1faa1f", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(Working.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(Working.scope.$circleBack, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$arrowBack, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$txtBack, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(Working.scope.$circleBack, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$arrowBack, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Working.scope.$txtBack, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private activeSocialMenu():void{

        var socialId:any;

        Working.scope.$socialBtn.each(function(i){
            Working.scope.$socialBtn.eq(i).data("id",i);
        });

        Working.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Working.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Working.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Working.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Working.scope.$socialBtn.on("click",function(event){

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