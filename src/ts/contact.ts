///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class Contact{

    static scope:any;

    private TLcontact:any;
    private TLsent:any;

    private $backBtn:JQuery                        =              $(".container-btn-back > a");
    private $txtBack:JQuery                        =              $(".container-btn-back > a > p");
    private $circleBack:JQuery                     =              $(".container-btn-back > a > svg > circle");
    private $arrowBack:JQuery                      =              $(".container-btn-back > a > svg > polyline");

    private $socialMediaBtn:JQuery                 =              $("#block-media .over-social-media > span");
    private $socialMediaSvg:JQuery                 =              $("#block-media > svg > path");

    private $socialBtn:JQuery                      =              $(".social .over-social > span");
    private $socialSvg:JQuery                      =              $(".social > svg > path");

    private $loaderRef:JQuery                      =              $("#loader");

    private $logo:JQuery                           =              $(".logo");
    private $logoSvg:JQuery                        =              $(".logo svg path");
    private $logoJ:JQuery                          =              $(".logo .logo-txt span:nth-child(1)");
    private $logoD:JQuery                          =              $(".logo .logo-txt span:nth-child(2)");
    private $logoM:JQuery                          =              $(".logo .logo-txt span:nth-child(3)");

    private $elasticContainer:JQuery               =              $(".elastic");

    private $button:JQuery                         =              $("#send-wrap > button");
    private $buttonStroke:JQuery                   =              $("#send-wrap > button > span:nth-child(1) > svg > path");
    private $buttonTxt:JQuery                      =              $("#send-wrap > button > span:nth-child(2)");

    private $bgStroke:JQuery                       =              $("#bg-stroke");
    private $bgFill:JQuery                         =              $("#bg-fill");

    private $intro:JQuery                          =              $("#block-txt");
    private $tlf:JQuery                            =              $("#block-data p:nth-child(1)");
    private $email:JQuery                          =              $("#block-data p:nth-child(2)");

    private $rolloverMedia:JQuery                  =              $("#block-media .over-social-media span");

    private $facebook:JQuery                       =              $("#block-media svg path:nth-child(1)");
    private $twitter:JQuery                        =              $("#block-media svg path:nth-child(2)");
    private $linkedin:JQuery                       =              $("#block-media svg path:nth-child(3)");
    private $googlePlus:JQuery                     =              $("#block-media svg path:nth-child(4)");
    private $skype:JQuery                          =              $("#block-media svg path:nth-child(5)");

    private $form:JQuery                           =              $("#form-contact");
    private $sentMessage:JQuery                    =              $("#sent-message");
    private $sentMessageP:JQuery                   =              $("#sent-message > p");
    private $sentMessageCircle:JQuery              =              $("#sent-message > #check-ok > svg > circle");
    private $sentMessageCheck:JQuery               =              $("#sent-message > #check-ok > svg > path");
    private $sentMessageButton:JQuery              =              $("#sent-message > #button-new");
    private $sentMessageButtonStroke:JQuery        =              $("#sent-message > #button-new > button > .button-new-bg > svg > path");
    private $sentMessageButtonTxt:JQuery           =              $("#sent-message > #button-new > button > .button-new-txt");

    private $nameWrap:JQuery                       =              $("#name-wrap");
    private $emailWrap:JQuery                      =              $("#email-wrap");
    private $messageWrap:JQuery                    =              $("#message-wrap");

    private $nameInput:JQuery                      =              $("#name");
    private $emailInput:JQuery                     =              $("#email");
    private $messageInput:JQuery                   =              $("#message");
    private $buttonClick:JQuery                    =              $(".send");

    private $bufferForm:JQuery                     =              $("#buffer-form");

    private svgInput:any;
    private counterOk:number                       =              0;

    constructor(){

        Contact.scope = this;

        TweenMax.set([Contact.scope.$txtBack,Contact.scope.$circleBack,Contact.scope.$arrowBack], {opacity:.4});
        TweenMax.set([Contact.scope.$nameWrap,Contact.scope.$emailWrap,Contact.scope.$messageWrap], {opacity:.7});
        TweenMax.set(Contact.scope.$logo, {cursor:"pointer"});
        TweenMax.set(Contact.scope.$buttonClick, {opacity:.7});

        Contact.scope.$bufferForm.hide();

        Contact.scope.$logo.on("click", function(){ Contact.scope.leaveSection()});
        Contact.scope.$logo.on("mouseenter", function(){ Contact.scope.overLogo()});
        Contact.scope.$logo.on("mouseleave", function(){ Contact.scope.outLogo()});
        Contact.scope.$backBtn.on("click", function(){ Contact.scope.leaveSection()});
        Contact.scope.$backBtn.on("mouseenter", function(){ Contact.scope.overBtnBack()});
        Contact.scope.$backBtn.on("mouseleave", function(){ Contact.scope.outBtnBack()});
        Contact.scope.$button.on("mouseenter", function(){ Contact.scope.overBtnButton()});
        Contact.scope.$button.on("mouseleave", function(){ Contact.scope.outBtnButton()});

        Contact.scope.TLcontact = new TimelineMax({paused:false,onComplete:Contact.scope.addInteractive});

        Contact.scope.TLcontact.set(Contact.scope.$bgStroke, {drawSVG:"0"})
            .set([Contact.scope.$bgFill,Contact.scope.$intro,Contact.scope.$tlf,Contact.scope.$email,
                  Contact.scope.$facebook,Contact.scope.$twitter,Contact.scope.$linkedin,
                  Contact.scope.$googlePlus, Contact.scope.$skype, Contact.scope.$form], {opacity:0})
            .to(Contact.scope.$bgStroke, 2.5, {drawSVG:"100%", ease:Cubic.easeOut}, 1)
            .to(Contact.scope.$bgFill, 1, {opacity:1}, '-=1.2')
            .to(Contact.scope.$intro, .7, {opacity:1}, '-=.2')
            .to(Contact.scope.$tlf, .5, {opacity:1}, '-=.2')
            .to(Contact.scope.$email, .5, {opacity:1}, '-=.2')
            .to(Contact.scope.$facebook, .3, {opacity:1}, '+=.2')
            .to(Contact.scope.$twitter, .3, {opacity:1}, '-=.15')
            .to(Contact.scope.$linkedin, .3, {opacity:1}, '-=.15')
            .to(Contact.scope.$googlePlus, .3, {opacity:1}, '-=.15')
            .to(Contact.scope.$skype, .3, {opacity:1}, '-=.15')
            .to(Contact.scope.$form, 1, {visibility:'visible',opacity:1}, 5.7);

        Contact.scope.TLsent = new TimelineMax({paused:true,onComplete:Contact.scope.activeButtonNew});

        Contact.scope.resetSentMessage();

        Contact.scope.TLsent.to(Contact.scope.$sentMessageP, .4, {opacity:1}, 0)
            .to(Contact.scope.$sentMessageCircle, .6, {drawSVG:"100%", ease:Cubic.easeOut}, '-=.3')
            .to(Contact.scope.$sentMessageCheck, .4, {opacity:1}, '-=.3')
            .to(Contact.scope.$sentMessageButton, .4, {opacity:1}, '-=.3');

        Contact.scope.activeSocialMenu();
    }

    private leaveSection():void{
        TweenMax.set(Contact.scope.$loaderRef, {css:{display:"block"}});
        TweenMax.to(Contact.scope.$loaderRef, .8, {css:{opacity:1}, onComplete:
            function(){
               // Contact.scope.goHome("http://localhost:81/jdmiguel/bin/", 5);
                Contact.scope.goHome("http://www.jdmiguel.com", 5);
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
        TweenMax.to(Contact.scope.$logoSvg, .5, {fill:"#f0d916", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoJ, .5, {color:"#f0d916", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoD, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoM, .5, {color:"#c11e99", ease:Cubic.easeOut});
    }

    private outLogo():void{
        TweenMax.to(Contact.scope.$logoSvg, .5, {fill:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoJ, .5, {color:"#c11e99", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoD, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$logoM, .5, {color:"#ffffff", ease:Cubic.easeOut});
    }

    private overBtnBack():void{
        TweenMax.to(Contact.scope.$circleBack, .5, {scale:1.5, transformOrigin:"50% 50%", opacity:0, ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$arrowBack, .5, {strokeWidth:3, opacity:1, ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$txtBack, .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outBtnBack():void{
        TweenMax.to(Contact.scope.$circleBack, .5, {scale:1, transformOrigin:"50% 50%", opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$arrowBack, .5, {strokeWidth:3, opacity:.4, ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$txtBack, .5, {opacity:.4, ease:Cubic.easeOut});
    }

    private overBtnButton():void{
        TweenMax.to(Contact.scope.$buttonTxt, .5, {color:"#f0d916", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$buttonStroke, .5, {stroke:"#ffffff", ease:Cubic.easeOut});
    }

    private outBtnButton():void{
        TweenMax.to(Contact.scope.$buttonTxt, .5, {color:"#ffffff", ease:Cubic.easeOut});
        TweenMax.to(Contact.scope.$buttonStroke, .5, {stroke:"#f0d916", ease:Cubic.easeOut});
    }

    private addInteractive():void{
        TweenMax.set(Contact.scope.$rolloverMedia, {cursor:"pointer"});

        Contact.scope.activeSocialMedia();
        Contact.scope.activeElasticForm();

        /*Contact.scope.$nameInput.on('focusin',{name:'name'},Contact.scope.onInput);
        Contact.scope.$emailInput.on('focusin',{name:'email'},Contact.scope.onInput);
        Contact.scope.$messageInput.on('focusin',{name:'message'},Contact.scope.onInput);*/

        Contact.scope.$nameInput.on('focusin',Contact.scope.onInput);
         Contact.scope.$emailInput.on('focusin',Contact.scope.onInput);
         Contact.scope.$messageInput.on('focusin',Contact.scope.onInput);

        Contact.scope.$nameInput.on('focusout',Contact.scope.outInput);
        Contact.scope.$emailInput.on('focusout',Contact.scope.outInput);
        Contact.scope.$messageInput.on('focusout',Contact.scope.outInput);

        Contact.scope.$buttonClick.on('click',function(){
            if(Contact.scope.validate()) {
                Contact.scope.$bufferForm.show();
                var datos:any = 'nombre=' + Contact.scope.$nameInput.val() +
                    '&email=' + Contact.scope.$emailInput.val() +
                    '&message=' + Contact.scope.$messageInput.val();
                $.ajax({
                    type:"POST",
                    data: datos,
                    url:"send.php",
                    success: function() {
                        console.log('success to send form');
                        Contact.scope.goSentMessage();
                    },
                    error: function() {
                        console.log('error to send form');
                    }
                });
            }
        });
    }

    private activeSocialMedia():void{
        var socialId:any;

        Contact.scope.$socialMediaBtn.each(function(i){
            Contact.scope.$socialMediaBtn.eq(i).data("id",i);
        });

        Contact.scope.$socialMediaBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Contact.scope.$socialMediaSvg.eq(socialId), .4, {fill:"#f0d916", ease:Cubic.easeOut});
        });

        Contact.scope.$socialMediaBtn.on("mouseleave",function(event){
            TweenMax.to(Contact.scope.$socialMediaSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Contact.scope.$socialMediaBtn.on("click",function(event){
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
                case 3:
                    url = "https://plus.google.com/about?hl=es";
                break;
                case 4:
                    url = "https://login.skype.com/login?client_id=578134&redirect_uri=https%3A%2F%2Fweb.skype.com";
                break;
            }

            window.open(url,"_blank");
        });
    }

    private activeElasticForm():void{
        Contact.scope.$elasticContainer.each(function(i){
            Contact.scope.svgInput = new SvgInput(i);
        });
    }

    private onInput(e):void{
        //var name_:string = e.data.name;
        //Contact.scope.svgInput.testInput(name_,'ok');
        TweenMax.to($(e.currentTarget).parent(), .5, {opacity:1, ease:Cubic.easeOut});
    }

    private outInput(e):void{
        TweenMax.to($(e.currentTarget).parent(), .5, {opacity:.7, ease:Cubic.easeOut});
    }

    private goSentMessage():void{
        Contact.scope.$bufferForm.hide();
        TweenMax.to(Contact.scope.$form, .5, {opacity:0,onComplete:function(){
            TweenMax.set(Contact.scope.$form,{display:'none'});
            TweenMax.set(Contact.scope.$sentMessage,{display:'block'});
            Contact.scope.resetForm();
            Contact.scope.TLsent.gotoAndPlay(0);
        }});
    }

    private resetForm():void{
        Contact.scope.$nameInput.val('');
        Contact.scope.$emailInput.val('');
        Contact.scope.$messageInput.val('');
    }

    private resetSentMessage():void{
        TweenMax.set([Contact.scope.$sentMessageP,Contact.scope.$sentMessageCheck,Contact.scope.$sentMessageButton], {opacity:0});
        TweenMax.set(Contact.scope.$sentMessageCircle, {drawSVG:"0"});
    }

    private activeButtonNew():void{
        Contact.scope.$sentMessageButton.on('click',function(){
            TweenMax.to(Contact.scope.$sentMessage, .5, {opacity:0,onComplete:function(){
                TweenMax.set(Contact.scope.$sentMessage,{display:'none'});
                TweenMax.set(Contact.scope.$form,{display:'block'});
                TweenMax.to(Contact.scope.$form, .5, {opacity:1, onComplete:function(){
                    TweenMax.set(Contact.scope.$sentMessage,{opacity:1});
                }});
                Contact.scope.resetSentMessage();
            }});
        });

        Contact.scope.$sentMessageButton.on('mouseenter',function(){
            TweenMax.to(Contact.scope.$sentMessageButtonTxt, .5, {color:"#f0d916", ease:Cubic.easeOut});
            TweenMax.to(Contact.scope.$sentMessageButtonStroke, .5, {stroke:"#ffffff", ease:Cubic.easeOut});
        });

        Contact.scope.$sentMessageButton.on('mouseleave',function(){
            TweenMax.to(Contact.scope.$sentMessageButtonTxt, .5, {color:"#ffffff", ease:Cubic.easeOut});
            TweenMax.to(Contact.scope.$sentMessageButtonStroke, .5, {stroke:"#f0d916", ease:Cubic.easeOut});
        });

    }

    private validate():boolean{
        var emailExp:any = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var valueEmail:any = Contact.scope.$emailInput.val();
        var validateEmail:any = emailExp.test(valueEmail);

        if (Contact.scope.$nameInput.val() == '') {
            Contact.scope.svgInput.testInput('email','ok');
            Contact.scope.svgInput.testInput('message','ok');
            if(Contact.scope.svgInput.inputAvailable.name) {
                Contact.scope.svgInput.testInput('name','error');
            }
            return false;
        }

        else if (validateEmail == false) {
            Contact.scope.svgInput.testInput('name','ok');
            Contact.scope.svgInput.testInput('message','ok');
            if(Contact.scope.svgInput.inputAvailable.email) {
                Contact.scope.svgInput.testInput('email','error');
                Contact.scope.svgInput.inputAvailable.email = false;
            }
            return false;
        }

        else if (Contact.scope.$messageInput.val() == '') {
            Contact.scope.svgInput.testInput('name','ok');
            Contact.scope.svgInput.testInput('email','ok');
            Contact.scope.svgInput.inputAvailable.name = true;
            Contact.scope.svgInput.inputAvailable.email = true;
            if(Contact.scope.svgInput.inputAvailable.message) {
                Contact.scope.svgInput.testInput('message','error');
                Contact.scope.svgInput.inputAvailable.message = false;
            }
            return false;
        }

        Contact.scope.svgInput.testInput('name','ok');
        Contact.scope.svgInput.testInput('email','ok');
        Contact.scope.svgInput.testInput('message','ok');

        return true;
    }

    private activeSocialMenu():void{
        var socialId:any;

        Contact.scope.$socialBtn.each(function(i){
            Contact.scope.$socialBtn.eq(i).data("id",i);
        });

        Contact.scope.$socialBtn.on("mouseenter",function(event){
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Contact.scope.$socialSvg.eq(socialId), .4, {fill:"#c11e99", ease:Cubic.easeOut});
        });

        Contact.scope.$socialBtn.on("mouseleave",function(event){
            TweenMax.to(Contact.scope.$socialSvg.eq(socialId), .4, {fill:"#ffffff", ease:Cubic.easeOut});
        });

        Contact.scope.$socialBtn.on("click",function(event){
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