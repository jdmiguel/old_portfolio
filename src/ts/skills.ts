///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Skills{

    static scope:any;

    private TLskills:any;

    private $backBtn:JQuery                        =              $(".container-btn-back > a");
    private $txtBack:JQuery                        =              $(".container-btn-back > a > p");
    private $circleBack:JQuery                     =              $(".container-btn-back > a > svg > circle");
    private $arrowBack:JQuery                      =              $(".container-btn-back > a > svg > polyline");

    private $loaderRef:JQuery                      =              $("#loader");

    private $bgRef:JQuery                          =              $("#bg-skills");

    private $liRef:JQuery                          =              $("#menu-skills > li");

    private $logo:JQuery                           =              $(".logo");
    private $logoSvg:JQuery                        =              $(".logo svg path");
    private $logoJ:JQuery                          =              $(".logo .logo-txt span:nth-child(1)");
    private $logoD:JQuery                          =              $(".logo .logo-txt span:nth-child(2)");
    private $logoM:JQuery                          =              $(".logo .logo-txt span:nth-child(3)");

    private $socialBtn:JQuery                      =              $(".social > .over-social > span");
    private $socialSvg:JQuery                      =              $(".social > svg > path");

    private $svgRefTecno:JQuery                    =              $(".circle-tecno");
    private $svgRefFrame:JQuery                    =              $(".circle-frame");
    private $svgRefPre:JQuery                      =              $(".circle-pre");
    private $svgRefFront:JQuery                    =              $(".circle-front");
    private $svgRefDes:JQuery                      =              $(".circle-des");
    private $svgRefOther:JQuery                    =              $(".circle-other");

    private $svgSelected:JQuery;

    private $strokeRefTecno:JQuery                 =              $("#stroke-svg-tecno");
    private $strokeRefFrame:JQuery                 =              $("#stroke-svg-frame");
    private $strokeRefPre:JQuery                   =              $("#stroke-svg-pre");
    private $strokeRefFront:JQuery                 =              $("#stroke-svg-front");
    private $strokeRefDes:JQuery                   =              $("#stroke-svg-des");
    private $strokeRefOther:JQuery                 =              $("#stroke-svg-other");

    private $fillRefTecno:JQuery                   =              $("#fill-svg-tecno");
    private $fillRefFrame:JQuery                   =              $("#fill-svg-frame");
    private $fillRefPre:JQuery                     =              $("#fill-svg-pre");
    private $fillRefFront:JQuery                   =              $("#fill-svg-front");
    private $fillRefDes:JQuery                     =              $("#fill-svg-des");
    private $fillRefOther:JQuery                   =              $("#fill-svg-other");

    private $titTecnoRef:JQuery                    =              $("#menu-skills > li:nth-child(1) > h2");
    private $titFrameRef:JQuery                    =              $("#menu-skills > li:nth-child(2) > h2");
    private $titPreRef:JQuery                      =              $("#menu-skills > li:nth-child(3) > h2");
    private $titFrontRef:JQuery                    =              $("#menu-skills > li:nth-child(4) > h2");
    private $titDesRef:JQuery                      =              $("#menu-skills > li:nth-child(5) > h2");
    private $titOtherRef:JQuery                    =              $("#menu-skills > li:nth-child(6) > h2");

    private $submenuLocalRef:JQuery                =              $("#submenu");
    private $submenuLiLocalRef:JQuery              =              $("#submenu > li");

    private $subSectionRef:JQuery                  =              $("#sub-section");
    private $currentSubSectionRef:JQuery;
    private $subSectionContentRef:JQuery           =              $("#content-sub-section");
    private $subSectionBgRef:JQuery                =              $("#bg-sub-section");
    private $subSectionSvgRef:JQuery               =              $("#stroke-svg-sub-section");
    private $subSectionCloseRef:JQuery             =              $("#content-sub-section > section > span");
    private $subSectionTitRef:JQuery               =              $("#content-sub-section > section > h1");
    private $subSectionParagraphRef:JQuery         =              $("#content-sub-section > section > p");
    private $subSectionImgRef:JQuery               =              $("#content-sub-section > section > figure > img");
    private arrayImgSubSection:any                 =              [];
    private objImgSubSection = {
        techno: <any> [],
        frame: <any> [],
        pre: <any> [],
        front: <any> [],
        des: <any> [],
        others: <any> []
    };

    private technoRef:JQuery                       =              $("#techno");
    private frameRef:JQuery                        =              $("#frame");
    private preRef:JQuery                          =              $("#pre");
    private frontRef:JQuery                        =              $("#front");
    private desRef:JQuery                          =              $("#des");
    private othersRef:JQuery                       =              $("#others");

    constructor(){
       Skills.scope = this;

       TweenMax.set([Skills.scope.$txtBack,Skills.scope.$circleBack,Skills.scope.$arrowBack], {opacity:.4});
       TweenMax.set(Skills.scope.$logo, {cursor:"pointer"});
       TweenMax.set(Skills.scope.$subSectionCloseRef, {opacity:0});

       Skills.scope.$logo.on("click", function(){ Skills.scope.leaveSection()});
       Skills.scope.$logo.on("mouseenter", function(){ Skills.scope.overLogo()});
       Skills.scope.$logo.on("mouseleave", function(){ Skills.scope.outLogo()});
       Skills.scope.$backBtn.on("click", function(){ Skills.scope.leaveSection()});
       Skills.scope.$backBtn.on("mouseenter", function(){ Skills.scope.overBtnBack()});
       Skills.scope.$backBtn.on("mouseleave", function(){ Skills.scope.outBtnBack()});

       Skills.scope.activeSocialMenu();

       Skills.scope.$liRef.each(function(i){
           Skills.scope.$liRef.eq(i).data("num",i);
       });

       Skills.scope.$subSectionImgRef.each(function(i){
            switch(i){
                case 0:
                case 1:
                case 2:
                case 3:
                    Skills.scope.objImgSubSection.techno.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
                case 4:
                case 5:
                case 6:
                    Skills.scope.objImgSubSection.frame.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
                case 7:
                case 8:
                case 9:
                    Skills.scope.objImgSubSection.pre.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
                case 10:
                case 11:
                case 12:
                    Skills.scope.objImgSubSection.front.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
                case 13:
                case 14:
                case 15:
                case 16:
                    Skills.scope.objImgSubSection.des.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
                case 17:
                case 18:
                case 19:
                    Skills.scope.objImgSubSection.others.push(Skills.scope.$subSectionImgRef.eq(i));
                break;
            }
            Skills.scope.arrayImgSubSection.push(Skills.scope.$subSectionImgRef.eq(i));
       });

       Skills.scope.addSubSectionListeners();

       Skills.scope.TLskills = new TimelineMax({paused:false});

       Skills.scope.TLskills.set([this.$strokeRefTecno,this.$strokeRefFrame,this.$strokeRefPre,this.$strokeRefFront,this.$strokeRefDes,this.$strokeRefOther], {drawSVG:"0", stroke:"#FFFFFF"})
           .set([this.$fillRefTecno,this.$fillRefFrame,this.$fillRefPre,this.$fillRefFront,this.$fillRefDes,this.$fillRefOther], {opacity:0, fill:"#FFFFFF"})
           .set([this.$titTecnoRef,this.$titFrameRef,this.$titPreRef,this.$titFrontRef,this.$titDesRef,this.$titOtherRef], {opacity:0, color:"#de641b"})
           .to(this.$strokeRefTecno, 1.1, {drawSVG:"100%", stroke:"#de641b",ease:Expo.easeOut}, .5)
           .to(this.$fillRefTecno, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, .8)
           .to(this.$titTecnoRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefTecno]}, 1)
           .to(this.$strokeRefFrame, 1.1, {drawSVG:"100%", stroke:"#de641b", ease:Expo.easeOut}, 1.4)
           .to(this.$fillRefFrame, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, 1.7)
           .to(this.$titFrameRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefFrame]}, 1.9)
           .to(this.$strokeRefPre, 1.1, {drawSVG:"100%", stroke:"#de641b", ease:Expo.easeOut}, 2.2)
           .to(this.$fillRefPre, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, 2.5)
           .to(this.$titPreRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefPre]}, 2.7)
           .to(this.$strokeRefFront, 1.1, {drawSVG:"100%", stroke:"#de641b", ease:Expo.easeOut}, 3.1)
           .to(this.$fillRefFront, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, 3.4)
           .to(this.$titFrontRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefFront]}, 3.6)
           .to(this.$strokeRefDes, 1.1, {drawSVG:"100%", stroke:"#de641b", ease:Expo.easeOut}, 4)
           .to(this.$fillRefDes, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, 4.3)
           .to(this.$titDesRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefDes]}, 4.5)
           .to(this.$strokeRefOther, 1.1, {drawSVG:"100%", stroke:"#de641b", ease:Expo.easeOut}, 4.9)
           .to(this.$fillRefOther, .8, {opacity:.15, fill:"#de641b", ease:Cubic.easeOut}, 5.2)
           .to(this.$titOtherRef, .6, {opacity:1, color:"#FFFFFF", ease:Cubic.easeOut, onComplete:Skills.scope.addListeners, onCompleteParams:[Skills.scope.$svgRefOther]}, 5.4);
    }

    private leaveSection():void{
        TweenMax.set(Skills.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(Skills.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
                Skills.scope.goHome("http://localhost/jdmiguel_bg/bin/", 2);
                // Skills.scope.goHome("http://www.jdmiguel.com", 2);
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
        TweenMax.to(Skills.scope.$logoSvg, .5, {fill:"#de641b", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoJ, .5, {color:"#de641b", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(Skills.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(Skills.scope.$circleBack, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$arrowBack, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$txtBack, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(Skills.scope.$circleBack, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$arrowBack, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$txtBack, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private activeSocialMenu():void{
        var socialId:any;

        Skills.scope.$socialBtn.each(function(i){
            Skills.scope.$socialBtn.eq(i).data("id",i);
        });

        Skills.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Skills.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Skills.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Skills.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Skills.scope.$socialBtn.on("click",function(event){
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

    private addListeners(svgSelected_:JQuery):void{
        Skills.scope.svgSelected = svgSelected_;

        Skills.scope.svgSelected.attr("cursor","pointer");
        Skills.scope.svgSelected.on("click", Skills.scope.selectSection);
        Skills.scope.svgSelected.on("mouseenter", Skills.scope.overCircle);
        //Skills.scope.svgSelected.on("mousemove", Skills.scope.overCircle);
        Skills.scope.svgSelected.on("mouseleave", Skills.scope.outCircle);
    }

    private selectSection(e):void{
        var parent_:JQuery = $(e.currentTarget.parentNode.parentNode);
        var num_:any = parent_.data("num");
        var currentSection:any = num_ + 1;

        TweenMax.to(parent_.children("svg"), .5, {transformOrigin:"50% 50%", scale:1, ease:Back.easeInOut});
        TweenMax.to(parent_.children("h2"), .5, {color:"#FFFFFF", ease:Power1.easeInOut});
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, {stroke:"#de641b", strokeWidth:"3", fill:"rgba(222,100,27,.15)"});

        TweenMax.set(Skills.scope.$subSectionRef, {visibility:"visible", display:"block", opacity:1});
        TweenMax.set(Skills.scope.$subSectionSvgRef, {drawSVG:"0"});
        TweenMax.set([Skills.scope.$subSectionTitRef,Skills.scope.$subSectionParagraphRef], {opacity:0, left:"+=20"});
        TweenMax.set(Skills.scope.$subSectionCloseRef, {opacity:0});

        for(var i:number = 0;i<20; i++) TweenMax.set(Skills.scope.arrayImgSubSection[i], {scale:.5, opacity:0});

        TweenMax.to(Skills.scope.$subSectionBgRef, .5, {opacity:.9});
        TweenMax.to(Skills.scope.$subSectionSvgRef, 1.2, {delay:.4, drawSVG:"100%", fill:"rgba(0,0,0,0.4)", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$subSectionTitRef, .6, {delay:1.3, opacity:.9, left:"-=20", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$subSectionParagraphRef, .6, {delay:1.4, opacity:.9, left:"-=20", ease:Cubic.easeOut});
        TweenMax.to(Skills.scope.$subSectionCloseRef, .4, {delay:1.7, opacity:1, ease:Cubic.easeOut});

        switch (currentSection){
            case 1:
                Skills.scope.$currentSubSectionRef = Skills.scope.technoRef;
                for(var ii:number = 0; ii<4; ii++) TweenMax.to(Skills.scope.objImgSubSection.techno[ii], .5, {delay:.5 + ii/4, scale:1, opacity:1, ease:Back.easeOut});
                break;
            case 2:
                Skills.scope.$currentSubSectionRef = Skills.scope.frameRef;
                for(var j:number = 0; j<3; j++) TweenMax.to(Skills.scope.objImgSubSection.frame[j], .5, {delay:.5 + j/3, scale:1, opacity:1, ease:Back.easeOut});
                break;
            case 3:
                Skills.scope.$currentSubSectionRef = Skills.scope.preRef;
                for(var k:number = 0; k<3; k++) TweenMax.to(Skills.scope.objImgSubSection.pre[k], .5, {delay:.5 + k/3, scale:1, opacity:1, ease:Back.easeOut});
                break;
            case 4:
                Skills.scope.$currentSubSectionRef = Skills.scope.frontRef;
                for(var l:number = 0; l<3; l++) TweenMax.to(Skills.scope.objImgSubSection.front[l], .5, {delay:.5 + l/3, scale:1, opacity:1, ease:Back.easeOut});
                break;
            case 5:
                Skills.scope.$currentSubSectionRef = Skills.scope.desRef;
                for(var m:number = 0; m<4; m++) TweenMax.to(Skills.scope.objImgSubSection.des[m], .5, {delay:.5 + m/4, scale:1, opacity:1, ease:Back.easeOut});
                break;
            case 6:
                Skills.scope.$currentSubSectionRef = Skills.scope.othersRef;
                for(var n:number = 0; n<3; n++) TweenMax.to(Skills.scope.objImgSubSection.others[n], .5, {delay:.5 + n/3, scale:1, opacity:1, ease:Back.easeOut});
                break;
        }

        TweenMax.set(Skills.scope.$currentSubSectionRef, {visibility:"visible"});
    }

    private addSubSectionListeners():void{
        Skills.scope.$subSectionCloseRef.on("click", function(){
            TweenMax.to(Skills.scope.$subSectionRef, .5, {opacity:0, onComplete:function(){
                TweenMax.set(Skills.scope.$subSectionRef, {visibility:"hidden", display:"none"});
                TweenMax.set(Skills.scope.$currentSubSectionRef, {visibility:"hidden"});
            }});
        });

        Skills.scope.$subSectionCloseRef.on("mouseenter", function(e){
            TweenMax.to(e.currentTarget, .5, {color:"#de641b", ease:Cubic.easeOut});
        });

        Skills.scope.$subSectionCloseRef.on("mouseleave", function(e){
            TweenMax.to(e.currentTarget, .5, {color:"#ffffff", ease:Cubic.easeOut});
        });
    }

    private overCircle(e):void{
        var parent_:JQuery = $(e.currentTarget.parentNode.parentNode);

        console.log("overCircle");

        //Skills.scope.svgSelected.off("mousemove", Skills.scope.overCircle);
        //Skills.scope.svgSelected.off("mouseenter", Skills.scope.overCircle);

        TweenMax.to(parent_.children("svg"), .5, {transformOrigin:"50% 50%", scale:1.05, ease:Back.easeInOut});
        TweenMax.to(parent_.children("h2"), .5, {color:"#de641b", ease:Power2.easeInOut});
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, {stroke:"#FFFFFF", strokeWidth:"4", fill:"rgba(255,255,255,.15)"});
    }

    private outCircle(e):void{
        var parent_:JQuery = $(e.currentTarget.parentNode.parentNode);

        console.log("outCircle");

        //Skills.scope.svgSelected.on("mouseenter", Skills.scope.overCircle);

        TweenMax.to(parent_.children("svg"), .5, {transformOrigin:"50% 50%", scale:1, ease:Back.easeInOut});
        TweenMax.to(parent_.children("h2"), .5, {color:"#FFFFFF", ease:Power1.easeInOut});
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, {stroke:"#de641b", strokeWidth:"3", fill:"rgba(222,100,27,.15)"});
    }
}