///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var About = (function () {
    function About() {
        this.$backBtn = $(".container-btn-back > a");
        this.$txtBack = $(".container-btn-back > a > p");
        this.$circleBack = $(".container-btn-back > a > svg > circle");
        this.$arrowBack = $(".container-btn-back > a > svg > polyline");
        this.$socialBtn = $(".social .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        this.$loaderRef = $("#loader");
        this.$logo = $(".logo");
        this.$logoSvg = $(".logo svg path");
        this.$logoJ = $(".logo .logo-txt span:nth-child(1)");
        this.$logoD = $(".logo .logo-txt span:nth-child(2)");
        this.$logoM = $(".logo .logo-txt span:nth-child(3)");
        this.$txtRef = $("#txt-about");
        this.$imgRef = $("#img-about > img");
        this.$strokeRef = $("#stroke-svg-about");
        this.$fillRef = $("#fill-svg-about");
        this.$submenuLocalRef = $("#submenu");
        this.$submenuLiLocalRef = $("#submenu li");
        About.scope = this;
        if(this.detectMobileOrTablet()) document.body.addEventListener('touchmove',function(e){e.preventDefault();});
        TweenMax.set([About.scope.$txtBack, About.scope.$circleBack, About.scope.$arrowBack], { opacity: .4 });
        TweenMax.set(About.scope.$logo, { cursor: "pointer" });
        About.scope.$logo.on("click", function () { About.scope.leaveSection(); });
        About.scope.$logo.on("mouseenter", function () { About.scope.overLogo(); });
        About.scope.$logo.on("mouseleave", function () { About.scope.outLogo(); });
        About.scope.$backBtn.on("click", function () { About.scope.leaveSection(); });
        About.scope.$backBtn.on("mouseenter", function () { About.scope.overBtnBack(); });
        About.scope.$backBtn.on("mouseleave", function () { About.scope.outBtnBack(); });
        About.scope.activeSocialMenu();
        this.TLabout = new TimelineMax({ paused: false });
        About.scope.TLabout.set(About.scope.$strokeRef, { drawSVG: "0", stroke: "#FFFFFF" })
            .set(About.scope.$fillRef, { fill: "#FFFFFF", opacity: 0 })
            .set([About.scope.$txtRef, About.scope.$imgRef], { opacity: 0 })
            .to(About.scope.$strokeRef, 1.5, { drawSVG: "100%", stroke: "#1bdcde", ease: Cubic.easeOut }, .5)
            .to(About.scope.$fillRef, .8, { fill: "#1bdcde", opacity: .15, ease: Cubic.easeOut }, 1.5)
            .to(About.scope.$imgRef, 1.5, { opacity: 1 }, 1.5)
            .to(About.scope.$txtRef, 1.5, { opacity: 1 }, 1.8);
    }
    About.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    About.prototype.leaveSection = function () {
        TweenMax.set(About.scope.$loaderRef, { css: { display: "block" } });
        TweenMax.to(About.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                //About.scope.goHome("http://localhost:81/jdmiguel/bin/", 0);
                About.scope.goHome("http://www.jdmiguel.com/old", 0);
            }
        });
    };
    About.prototype.goHome = function (currentSection, counterHome) {
        currentSection += "?";
        currentSection += counterHome + "&";
        currentSection = currentSection.substring(0, currentSection.length - 1);
        location.href = currentSection;
    };
    About.prototype.overLogo = function () {
        TweenMax.to(About.scope.$logoSvg, .5, { fill: "#1bdcde", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoJ, .5, { color: "#1bdcde", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoD, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoM, .5, { color: "#c11e99", ease: Cubic.easeOut });
    };
    About.prototype.outLogo = function () {
        TweenMax.to(About.scope.$logoSvg, .5, { fill: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoJ, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoD, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(About.scope.$logoM, .5, { color: "#ffffff", ease: Cubic.easeOut });
    };
    About.prototype.overBtnBack = function () {
        TweenMax.to(About.scope.$circleBack, .5, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(About.scope.$arrowBack, .5, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(About.scope.$txtBack, .5, { opacity: 1, ease: Cubic.easeOut });
    };
    About.prototype.outBtnBack = function () {
        TweenMax.to(About.scope.$circleBack, .5, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(About.scope.$arrowBack, .5, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(About.scope.$txtBack, .5, { opacity: .4, ease: Cubic.easeOut });
    };
    About.prototype.activeSocialMenu = function () {
        var socialId;
        About.scope.$socialBtn.each(function (i) {
            About.scope.$socialBtn.eq(i).data("id", i);
        });
        About.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(About.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        About.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(About.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        About.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    return About;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var Contact = (function () {
    function Contact() {
        this.$backBtn = $(".container-btn-back > a");
        this.$txtBack = $(".container-btn-back > a > p");
        this.$circleBack = $(".container-btn-back > a > svg > circle");
        this.$arrowBack = $(".container-btn-back > a > svg > polyline");
        this.$socialMediaBtn = $("#block-media .over-social-media > span");
        this.$socialMediaSvg = $("#block-media > svg > path");
        this.$socialBtn = $(".social .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        this.$loaderRef = $("#loader");
        this.$logo = $(".logo");
        this.$logoSvg = $(".logo svg path");
        this.$logoJ = $(".logo .logo-txt span:nth-child(1)");
        this.$logoD = $(".logo .logo-txt span:nth-child(2)");
        this.$logoM = $(".logo .logo-txt span:nth-child(3)");
        this.$elasticContainer = $(".elastic");
        this.$button = $("#send-wrap > button");
        this.$buttonStroke = $("#send-wrap > button > span:nth-child(1) > svg > path");
        this.$buttonTxt = $("#send-wrap > button > span:nth-child(2)");
        this.$bgStroke = $("#bg-stroke");
        this.$bgFill = $("#bg-fill");
        this.$intro = $("#block-txt");
        this.$tlf = $("#block-data p:nth-child(1)");
        this.$email = $("#block-data p:nth-child(2)");
        this.$rolloverMedia = $("#block-media .over-social-media span");
        this.$facebook = $("#block-media svg path:nth-child(1)");
        this.$twitter = $("#block-media svg path:nth-child(2)");
        this.$linkedin = $("#block-media svg path:nth-child(3)");
        this.$googlePlus = $("#block-media svg path:nth-child(4)");
        this.$skype = $("#block-media svg path:nth-child(5)");
        this.$form = $("#form-contact");
        this.$sentMessage = $("#sent-message");
        this.$sentMessageP = $("#sent-message > p");
        this.$sentMessageCircle = $("#sent-message > #check-ok > svg > circle");
        this.$sentMessageCheck = $("#sent-message > #check-ok > svg > path");
        this.$sentMessageButton = $("#sent-message > #button-new");
        this.$sentMessageButtonStroke = $("#sent-message > #button-new > button > .button-new-bg > svg > path");
        this.$sentMessageButtonTxt = $("#sent-message > #button-new > button > .button-new-txt");
        this.$nameWrap = $("#name-wrap");
        this.$emailWrap = $("#email-wrap");
        this.$messageWrap = $("#message-wrap");
        this.$nameInput = $("#name");
        this.$emailInput = $("#email");
        this.$messageInput = $("#message");
        this.$buttonClick = $(".send");
        this.$bufferForm = $("#buffer-form");
        this.counterOk = 0;
        Contact.scope = this;
        if(this.detectMobileOrTablet()) document.body.addEventListener('touchmove',function(e){e.preventDefault();});
        TweenMax.set([Contact.scope.$txtBack, Contact.scope.$circleBack, Contact.scope.$arrowBack], { opacity: .4 });
        TweenMax.set([Contact.scope.$nameWrap, Contact.scope.$emailWrap, Contact.scope.$messageWrap], { opacity: .7 });
        TweenMax.set(Contact.scope.$logo, { cursor: "pointer" });
        TweenMax.set(Contact.scope.$buttonClick, { opacity: .7 });
        Contact.scope.$bufferForm.hide();
        Contact.scope.$logo.on("click", function () { Contact.scope.leaveSection(); });
        Contact.scope.$logo.on("mouseenter", function () { Contact.scope.overLogo(); });
        Contact.scope.$logo.on("mouseleave", function () { Contact.scope.outLogo(); });
        Contact.scope.$backBtn.on("click", function () { Contact.scope.leaveSection(); });
        Contact.scope.$backBtn.on("mouseenter", function () { Contact.scope.overBtnBack(); });
        Contact.scope.$backBtn.on("mouseleave", function () { Contact.scope.outBtnBack(); });
        Contact.scope.$button.on("mouseenter", function () { Contact.scope.overBtnButton(); });
        Contact.scope.$button.on("mouseleave", function () { Contact.scope.outBtnButton(); });
        Contact.scope.TLcontact = new TimelineMax({ paused: false, onComplete: Contact.scope.addInteractive });
        Contact.scope.TLcontact.set(Contact.scope.$bgStroke, { drawSVG: "0" })
            .set([Contact.scope.$bgFill, Contact.scope.$intro, Contact.scope.$tlf, Contact.scope.$email,
            Contact.scope.$facebook, Contact.scope.$twitter, Contact.scope.$linkedin,
            Contact.scope.$googlePlus, Contact.scope.$skype, Contact.scope.$form], { opacity: 0 })
            .to(Contact.scope.$bgStroke, 2.5, { drawSVG: "100%", ease: Cubic.easeOut }, 1)
            .to(Contact.scope.$bgFill, 1, { opacity: 1 }, '-=1.2')
            .to(Contact.scope.$intro, .7, { opacity: 1 }, '-=.2')
            .to(Contact.scope.$tlf, .5, { opacity: 1 }, '-=.2')
            .to(Contact.scope.$email, .5, { opacity: 1 }, '-=.2')
            .to(Contact.scope.$facebook, .3, { opacity: 1 }, '+=.2')
            .to(Contact.scope.$twitter, .3, { opacity: 1 }, '-=.15')
            .to(Contact.scope.$linkedin, .3, { opacity: 1 }, '-=.15')
            .to(Contact.scope.$googlePlus, .3, { opacity: 1 }, '-=.15')
            .to(Contact.scope.$skype, .3, { opacity: 1 }, '-=.15')
            .to(Contact.scope.$form, 1, { visibility: 'visible', opacity: 1 }, 5.7);
        Contact.scope.TLsent = new TimelineMax({ paused: true, onComplete: Contact.scope.activeButtonNew });
        Contact.scope.resetSentMessage();
        Contact.scope.TLsent.to(Contact.scope.$sentMessageP, .4, { opacity: 1 }, 0)
            .to(Contact.scope.$sentMessageCircle, .6, { drawSVG: "100%", ease: Cubic.easeOut }, '-=.3')
            .to(Contact.scope.$sentMessageCheck, .4, { opacity: 1 }, '-=.3')
            .to(Contact.scope.$sentMessageButton, .4, { opacity: 1 }, '-=.3');
        Contact.scope.activeSocialMenu();
    }
    Contact.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    Contact.prototype.leaveSection = function () {
        TweenMax.set(Contact.scope.$loaderRef, { css: { display: "block" } });
        TweenMax.to(Contact.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                // Contact.scope.goHome("http://localhost:81/jdmiguel/bin/", 4);
                Contact.scope.goHome("http://www.jdmiguel.com/old", 4);
            }
        });
    };
    Contact.prototype.goHome = function (currentSection, counterHome) {
        currentSection += "?";
        currentSection += counterHome + "&";
        currentSection = currentSection.substring(0, currentSection.length - 1);
        location.href = currentSection;
    };
    Contact.prototype.overLogo = function () {
        TweenMax.to(Contact.scope.$logoSvg, .5, { fill: "#f0d916", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoJ, .5, { color: "#f0d916", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoD, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoM, .5, { color: "#c11e99", ease: Cubic.easeOut });
    };
    Contact.prototype.outLogo = function () {
        TweenMax.to(Contact.scope.$logoSvg, .5, { fill: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoJ, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoD, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$logoM, .5, { color: "#ffffff", ease: Cubic.easeOut });
    };
    Contact.prototype.overBtnBack = function () {
        TweenMax.to(Contact.scope.$circleBack, .5, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$arrowBack, .5, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$txtBack, .5, { opacity: 1, ease: Cubic.easeOut });
    };
    Contact.prototype.outBtnBack = function () {
        TweenMax.to(Contact.scope.$circleBack, .5, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$arrowBack, .5, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$txtBack, .5, { opacity: .4, ease: Cubic.easeOut });
    };
    Contact.prototype.overBtnButton = function () {
        TweenMax.to(Contact.scope.$buttonTxt, .5, { color: "#f0d916", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$buttonStroke, .5, { stroke: "#ffffff", ease: Cubic.easeOut });
    };
    Contact.prototype.outBtnButton = function () {
        TweenMax.to(Contact.scope.$buttonTxt, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(Contact.scope.$buttonStroke, .5, { stroke: "#f0d916", ease: Cubic.easeOut });
    };
    Contact.prototype.addInteractive = function () {
        TweenMax.set(Contact.scope.$rolloverMedia, { cursor: "pointer" });
        Contact.scope.activeSocialMedia();
        Contact.scope.activeElasticForm();
        /*Contact.scope.$nameInput.on('focusin',{name:'name'},Contact.scope.onInput);
        Contact.scope.$emailInput.on('focusin',{name:'email'},Contact.scope.onInput);
        Contact.scope.$messageInput.on('focusin',{name:'message'},Contact.scope.onInput);*/
        Contact.scope.$nameInput.on('focusin', Contact.scope.onInput);
        Contact.scope.$emailInput.on('focusin', Contact.scope.onInput);
        Contact.scope.$messageInput.on('focusin', Contact.scope.onInput);
        Contact.scope.$nameInput.on('focusout', Contact.scope.outInput);
        Contact.scope.$emailInput.on('focusout', Contact.scope.outInput);
        Contact.scope.$messageInput.on('focusout', Contact.scope.outInput);
        Contact.scope.$buttonClick.on('click', function () {
            if (Contact.scope.validate()) {
                Contact.scope.$bufferForm.show();
                var datos = 'nombre=' + Contact.scope.$nameInput.val() +
                    '&email=' + Contact.scope.$emailInput.val() +
                    '&message=' + Contact.scope.$messageInput.val();
                $.ajax({
                    type: "POST",
                    data: datos,
                    url: "send.php",
                    success: function () {
                        console.log('success to send form');
                        Contact.scope.goSentMessage();
                    },
                    error: function () {
                        console.log('error to send form');
                    }
                });
            }
        });
    };
    Contact.prototype.activeSocialMedia = function () {
        var socialId;
        Contact.scope.$socialMediaBtn.each(function (i) {
            Contact.scope.$socialMediaBtn.eq(i).data("id", i);
        });
        Contact.scope.$socialMediaBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Contact.scope.$socialMediaSvg.eq(socialId), .4, { fill: "#f0d916", ease: Cubic.easeOut });
        });
        Contact.scope.$socialMediaBtn.on("mouseleave", function (event) {
            TweenMax.to(Contact.scope.$socialMediaSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Contact.scope.$socialMediaBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    Contact.prototype.activeElasticForm = function () {
        Contact.scope.$elasticContainer.each(function (i) {
            Contact.scope.svgInput = new SvgInput(i);
        });
    };
    Contact.prototype.onInput = function (e) {
        //var name_:string = e.data.name;
        //Contact.scope.svgInput.testInput(name_,'ok');
        TweenMax.to($(e.currentTarget).parent(), .5, { opacity: 1, ease: Cubic.easeOut });
    };
    Contact.prototype.outInput = function (e) {
        TweenMax.to($(e.currentTarget).parent(), .5, { opacity: .7, ease: Cubic.easeOut });
    };
    Contact.prototype.goSentMessage = function () {
        Contact.scope.$bufferForm.hide();
        TweenMax.to(Contact.scope.$form, .5, { opacity: 0, onComplete: function () {
                TweenMax.set(Contact.scope.$form, { display: 'none' });
                TweenMax.set(Contact.scope.$sentMessage, { display: 'block' });
                Contact.scope.resetForm();
                Contact.scope.TLsent.gotoAndPlay(0);
            } });
    };
    Contact.prototype.resetForm = function () {
        Contact.scope.$nameInput.val('');
        Contact.scope.$emailInput.val('');
        Contact.scope.$messageInput.val('');
    };
    Contact.prototype.resetSentMessage = function () {
        TweenMax.set([Contact.scope.$sentMessageP, Contact.scope.$sentMessageCheck, Contact.scope.$sentMessageButton], { opacity: 0 });
        TweenMax.set(Contact.scope.$sentMessageCircle, { drawSVG: "0" });
    };
    Contact.prototype.activeButtonNew = function () {
        Contact.scope.$sentMessageButton.on('click', function () {
            TweenMax.to(Contact.scope.$sentMessage, .5, { opacity: 0, onComplete: function () {
                    TweenMax.set(Contact.scope.$sentMessage, { display: 'none' });
                    TweenMax.set(Contact.scope.$form, { display: 'block' });
                    TweenMax.to(Contact.scope.$form, .5, { opacity: 1, onComplete: function () {
                            TweenMax.set(Contact.scope.$sentMessage, { opacity: 1 });
                        } });
                    Contact.scope.resetSentMessage();
                } });
        });
        Contact.scope.$sentMessageButton.on('mouseenter', function () {
            TweenMax.to(Contact.scope.$sentMessageButtonTxt, .5, { color: "#f0d916", ease: Cubic.easeOut });
            TweenMax.to(Contact.scope.$sentMessageButtonStroke, .5, { stroke: "#ffffff", ease: Cubic.easeOut });
        });
        Contact.scope.$sentMessageButton.on('mouseleave', function () {
            TweenMax.to(Contact.scope.$sentMessageButtonTxt, .5, { color: "#ffffff", ease: Cubic.easeOut });
            TweenMax.to(Contact.scope.$sentMessageButtonStroke, .5, { stroke: "#f0d916", ease: Cubic.easeOut });
        });
    };
    Contact.prototype.validate = function () {
        var emailExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        var valueEmail = Contact.scope.$emailInput.val();
        var validateEmail = emailExp.test(valueEmail);
        if (Contact.scope.$nameInput.val() == '') {
            Contact.scope.svgInput.testInput('email', 'ok');
            Contact.scope.svgInput.testInput('message', 'ok');
            if (Contact.scope.svgInput.inputAvailable.name) {
                Contact.scope.svgInput.testInput('name', 'error');
            }
            return false;
        }
        else if (validateEmail == false) {
            Contact.scope.svgInput.testInput('name', 'ok');
            Contact.scope.svgInput.testInput('message', 'ok');
            if (Contact.scope.svgInput.inputAvailable.email) {
                Contact.scope.svgInput.testInput('email', 'error');
                Contact.scope.svgInput.inputAvailable.email = false;
            }
            return false;
        }
        else if (Contact.scope.$messageInput.val() == '') {
            Contact.scope.svgInput.testInput('name', 'ok');
            Contact.scope.svgInput.testInput('email', 'ok');
            Contact.scope.svgInput.inputAvailable.name = true;
            Contact.scope.svgInput.inputAvailable.email = true;
            if (Contact.scope.svgInput.inputAvailable.message) {
                Contact.scope.svgInput.testInput('message', 'error');
                Contact.scope.svgInput.inputAvailable.message = false;
            }
            return false;
        }
        Contact.scope.svgInput.testInput('name', 'ok');
        Contact.scope.svgInput.testInput('email', 'ok');
        Contact.scope.svgInput.testInput('message', 'ok');
        return true;
    };
    Contact.prototype.activeSocialMenu = function () {
        var socialId;
        Contact.scope.$socialBtn.each(function (i) {
            Contact.scope.$socialBtn.eq(i).data("id", i);
        });
        Contact.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Contact.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        Contact.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(Contact.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Contact.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    return Contact;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var Main = (function () {
    function Main(counterHome) {
        this.$windowLocalRef = $(window);
        this.$wrapLocalRef = document.getElementById("page-wrap");
        this.$loaderRef = $("#loader");
        this.$logoRef = $("#logo");
        this.$bgRef = $("#bg-home");
        this.$textHelpUser = $("#text-help");
        this.$wheelUser = $("#wheel-user");
        this.$dragDrop = $("#drag-drop-user");
        this.$clickLink = $("#click-link-user");
        this.$clickMenu = $("#click-menu-user");
        this.$mouseIcon = $("#icon-mouse");
        this.$clickIcon = $("#icon-click");
        this.$dragIcon = $("#icon-drag");
        this.$dropIcon = $("#icon-drop");
        this.$menu = $("#menu");
        this.$menuLi = $("#menu > li");
        this.$menuP = $("#menu > li > p");
        this.$menuI = $("#menu > li > i");
        this.$prevLi = $(".prev-menu");
        this.$currentLi = $(".current-menu");
        this.$nextLi = $(".next-menu");
        this.$links = $("#links");
        this.$linksLi = $("#links li");
        this.$linksA = $("#links li > a");
        this.$linksP = $("#links li > a > p");
        this.$linksCircle = $("#links li > a > svg > circle");
        this.$linksArrow = $("#links li > a > svg > polyline");
        this.counterBg = 0;
        this.classBg = $(".bg");
        this.totalLi = 5;
        this.valuesMenu = {
            callBack: null,
            param_1: null,
            param_2: null,
            position: null,
            percent_1: null,
            percent_2: null
        };
        this.posXinitMenu = 0;
        this.deltaMenuActive = true;
        this.isOnDrag = false;
        this.isOnMove = false;
        this.isOnWindow = true;
        this.isOnSubmenu = false;
        this.$submenu = $("#submenu");
        this.$submenuLi = $("#submenu > li");
        this.$socialBtn = $(".social > .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        Main.scope = this;
        if(this.detectMobileOrTablet()) {
            document.body.addEventListener('touchmove',function(e){e.preventDefault();});
            //window.addEventListener('resize',function(e) {e.preventDefault();});
        } else {
            //Main.scope.onResizeAll();
            //Main.scope.$windowLocalRef.resize(function () { Main.scope.onResetAll(); });
        }
        Main.scope.counterLi = counterHome;
        Main.scope.$iCurrentRef = Main.scope.$menuLi.eq(Main.scope.counterLi).children("p").children("i");
        Main.scope.isOnInit = true;
        Main.scope.inSite = true;
        Main.scope.$linksA.attr("href", "#");
        //Main.scope.$wrapLocalRef.addEventListener("mouseleave",Main.scope.outWindow);
        TweenMax.set([Main.scope.$linksCircle, Main.scope.$linksArrow, Main.scope.$linksP], { opacity: .4 });
        Main.scope.onResizeAll();
        Main.scope.$windowLocalRef.resize(function () { Main.scope.onResetAll(); });
    }
    Main.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    Main.prototype.goHome = function () {
        TweenMax.set(Main.scope.$iCurrentRef, { left: "-100%" });
        TweenMax.set(Main.scope.$linksLi, { scaleX: .8, scaleY: .8, opacity: 0 });
        var menu = document.getElementById("menu");
        Main.scope.classBg.each(function (i) {
            if (i != Main.scope.counterLi)
                TweenMax.set($("#bg-" + i), { opacity: 0 });
        });
        //var currentSpan:any = menu.getElementsByClassName("current-menu").childNodes[0].childNodes[0];
        // console.log(menu.getElementsByClassName("current-menu").childNodes);
        /*var splitSpan:any = new SplitText(currentSpan,{type:"chars"});
        var chars:any = splitSpan.chars;
         /*
        TweenMax.set(chars,{opacity:0});

        TweenMax.staggerTo(chars, .3, {delay:1, opacity:1, ease:Back.easeOut},.05);*/
        TweenMax.to(Main.scope.$iCurrentRef, .5, { delay: .8, left: 0, ease: Cubic.easeOut });
        TweenMax.to(Main.scope.$linksLi, .5, { delay: 1.2, scaleX: 1, scaleY: 1, opacity: 1, ease: Back.easeOut, onComplete: Main.scope.goHelpUser });
        //TweenMax.delayedCall(.5,Main.scope.activeTicker);
        if(!this.detectMobileOrTablet()) Main.scope.activeTicker();
    };
    Main.prototype.inWindow = function (event) {
        // Main.scope.mouseX = event.pageX;
        // Main.scope.mouseY = event.pageY;
        // console.log('mouseX: ' +  Main.scope.mouseX + '___' + ' Main.scope.mouseY: ' + Main.scope.mouseY);
        if (!Main.scope.inSite) {
            Main.scope.activeTicker();
            Main.scope.inSite = true;
        }
    };
    Main.prototype.outWindow = function (event) {
        if (Main.scope.isOnWindow == true)
            return;
        Main.scope.inSite = false;
        Main.scope.desactiveTicker();
        Main.scope.$wrapLocalRef.removeEventListener("mousemove", Main.scope.getMouse);
        Main.scope.posXfinMouse = event.pageX;
        Main.scope.onDrop();
    };
    Main.prototype.activeTicker = function () {
        console.log('activeTicker');
        Main.scope.myTicker = setInterval(Main.scope.onTick, 100);
        //TweenMax.ticker.addEventListener("tick", Main.scope.onTick);
    };
    Main.prototype.desactiveTicker = function () {
        console.log('desactiveTicker');
        clearInterval(Main.scope.myTicker);
        //TweenMax.ticker.removeEventListener("tick", Main.scope.onTick);
    };
    Main.prototype.setPositionsMenu = function () {
        Main.scope.setElementsMenu("prev", "next");
        Main.scope.setElementsFromSubMenu();
        TweenMax.set(Main.scope.$menu, { left: -Main.scope.moveXmenu * Main.scope.counterLi });
        TweenMax.set(Main.scope.$links, { left: (-Main.scope.moveXmenu * 2) * Main.scope.counterLi, ease: Cubic.easeInOut });
        TweenMax.set(Main.scope.$bgRef, { left: Main.scope.counterLi / 1.7 + "%" });
    };
    // HELP USER
    Main.prototype.goHelpUser = function () {
        Main.scope.TLuser = new TimelineMax({ delay: .5, paused: false, repeat: -1, repeatDelay: .5 });
        Main.scope.TLuser.to(Main.scope.$textHelpUser, .8, { opacity: 1 })
            .set([Main.scope.$mouseIcon, Main.scope.$clickIcon, Main.scope.$dragIcon, Main.scope.$dropIcon], { scaleX: .5, scaleY: .5 })
            .set(Main.scope.$clickMenu, { top: "45" })
            .to(Main.scope.$wheelUser, 1, { opacity: 1 }, .5)
            .to(Main.scope.$mouseIcon, .5, { opacity: 1, scaleX: 1, scaleY: 1, ease: Back.easeOut }, 1.1)
            .to(Main.scope.$clickIcon, .5, { opacity: 1, scaleX: 1, scaleY: 1, ease: Back.easeOut }, 1.4)
            .to(Main.scope.$mouseIcon, .8, { opacity: .5 }, 2.4)
            .to(Main.scope.$clickIcon, .8, { right: "12", ease: Cubic.easeOut }, 2.4)
            .to(Main.scope.$clickIcon, .4, { top: "30", ease: Cubic.easeIn }, 2.9)
            .to(Main.scope.$clickIcon, .4, { top: "27", ease: Cubic.easeIn }, 3.4)
            .to(Main.scope.$clickIcon, .4, { top: "30", ease: Cubic.easeIn }, 3.9)
            .to(Main.scope.$clickIcon, .4, { top: "27", ease: Cubic.easeIn }, 4.4)
            .to([Main.scope.$wheelUser, Main.scope.$mouseIcon, Main.scope.$clickIcon], .8, { opacity: 0 }, 4.9)
            .to(Main.scope.$clickLink, .8, { opacity: 1 }, 5.9)
            .to(Main.scope.$clickMenu, .8, { opacity: 1 }, 6.5)
            .set(Main.scope.$clickIcon, { scaleX: .5, scaleY: .5, opacity: 0, top: "36" }, 6.9)
            .to(Main.scope.$clickIcon, .5, { scaleX: 1, scaleY: 1, opacity: 1, ease: Back.easeOut }, 7.2)
            .to(Main.scope.$clickIcon, .3, { scaleX: .84, scaleY: .84, ease: Cubic.easeIn }, 8.6)
            .to(Main.scope.$clickIcon, .3, { scaleX: 1, scaleY: 1, ease: Cubic.easeOut }, 9)
            .to([Main.scope.$clickLink, Main.scope.$clickMenu, Main.scope.$clickIcon], .8, { opacity: 0 }, 9.8)
            .to(Main.scope.$dragDrop, .8, { opacity: 1 }, 10.8)
            .to(Main.scope.$dropIcon, .5, { scaleX: 1, scaleY: 1, opacity: 1, ease: Back.easeOut }, 11.7)
            .set(Main.scope.$dropIcon, { opacity: 0 }, 12.5)
            .set(Main.scope.$dragIcon, { scaleX: 1, scaleY: 1, opacity: 1, top: "28", right: "15" }, 12.5)
            .to(Main.scope.$dragIcon, .8, { right: "-5", ease: Cubic.easeOut }, 12.8)
            .set(Main.scope.$dragIcon, { right: "-5", opacity: 0 }, 13.8)
            .set(Main.scope.$dropIcon, { right: "-5", opacity: 1 }, 13.8)
            .set(Main.scope.$dragIcon, { right: "-5", opacity: 1 }, 14.2)
            .set(Main.scope.$dropIcon, { right: "-5", opacity: 0 }, 14.2)
            .to(Main.scope.$dragIcon, .8, { right: "15", ease: Cubic.easeOut }, 14.3)
            .set(Main.scope.$dragIcon, { right: "15", opacity: 0 }, 15.2)
            .set(Main.scope.$dropIcon, { right: "15", opacity: 1 }, 15.2)
            .to([Main.scope.$dropIcon, Main.scope.$dragDrop], .8, { opacity: 0 }, 15.7)
            .to(Main.scope.$textHelpUser, .8, { opacity: 0 }, 16.2);
    };
    // EVENTOS DEL MENU
    Main.prototype.addListenersMenu = function () {
        console.log("addListener");
        //TweenMax.ticker.fps(30);
        Main.scope.$wrapLocalRef.addEventListener("mouseenter", Main.scope.inWindow);
        Main.scope.$wrapLocalRef.addEventListener("mouseleave", Main.scope.outWindow);
        Main.scope.$wrapLocalRef.addEventListener("mousedown", Main.scope.onDrag);
        Main.scope.$wrapLocalRef.addEventListener("mouseup", Main.scope.onDrop);
        Main.scope.$wrapLocalRef.addEventListener("touchstart", Main.scope.onDrag);
        Main.scope.$wrapLocalRef.addEventListener("touchend", Main.scope.onDrop);
        Main.scope.$wrapLocalRef.addEventListener("mousewheel", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.addEventListener("DOMMouseScroll", Main.scope.mouseWheelHandler);
    };
    Main.prototype.removeListenersMenu = function () {
        console.log("removeListener");
        Main.scope.$wrapLocalRef.removeEventListener("mousedown", Main.scope.onDrag);
        Main.scope.$wrapLocalRef.removeEventListener("mouseup", Main.scope.onDrop);
        Main.scope.$wrapLocalRef.removeEventListener("touchstart", Main.scope.onDrag);
        Main.scope.$wrapLocalRef.removeEventListener("touchend", Main.scope.onDrop);
        Main.scope.$wrapLocalRef.removeEventListener("mousewheel", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.removeEventListener("DOMMouseScroll", Main.scope.mouseWheelHandler);
        Main.scope.$wrapLocalRef.removeEventListener("touchmove", Main.scope.onMouseMove);
    };
    Main.prototype.onTick = function (event) {
        Main.scope.$wrapLocalRef.addEventListener("mousemove", Main.scope.getMouse);
        Main.scope.$wrapLocalRef.addEventListener("touchmove", Main.scope.getMouse);
        var moveX = (Main.scope.mouseX / (Main.scope.widthWindow)) * 45;
        if (Main.scope.isOnMove == false)
            TweenMax.to($("#bg-" + Main.scope.counterLi), 1, { css: { left: -moveX + "px" }, ease: Cubic.easeOut });
    };
    Main.prototype.getMouse = function (event) {
        Main.scope.mouseX = event.pageX;
        Main.scope.mouseY = event.pageY;
    };
    Main.prototype.activeClickMenu = function () {
        console.log("activeClickMenu");
        Main.scope.$menuP.on("click", function (e) {
            if ($(e.currentTarget).parent().hasClass("next-menu"))
                Main.scope.goMenu("next");
            if ($(e.currentTarget).parent().hasClass("prev-menu"))
                Main.scope.goMenu("prev");
        });
        Main.scope.$menuP.on("mouseenter", function (e) {
            Main.scope.$wrapLocalRef.removeEventListener("mousedown", Main.scope.onDrag);
            Main.scope.$wrapLocalRef.removeEventListener("touchstart", Main.scope.onDrag);
        });
        Main.scope.$menuP.on("mouseleave", function (e) {
            Main.scope.$wrapLocalRef.addEventListener("mousedown", Main.scope.onDrag);
            Main.scope.$wrapLocalRef.addEventListener("touchstart", Main.scope.onDrag);
        });
        Main.scope.$linksA.on("click", function (e) {
            TweenMax.set(Main.scope.$loaderRef, { css: { display: "block" } });
            TweenMax.to(Main.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                    if (Main.scope.counterLi == 0)
                        $(location).attr("href", "http://www.jdmiguel.com/old/about/");
                    else if (Main.scope.counterLi == 1)
                        $(location).attr("href", "http://www.jdmiguel.com/old/skills/");
                    else if (Main.scope.counterLi == 2)
                        $(location).attr("href", "http://www.jdmiguel.com/old/timeline/");
                    else if (Main.scope.counterLi == 3)
                        $(location).attr("href", "http://www.jdmiguel.com/old/working/");
                    else if (Main.scope.counterLi == 4)
                        $(location).attr("href", "http://www.jdmiguel.com/old/contact/");
                    /*if(Main.scope.counterLi == 0) $(location).attr("href", "http://localhost:81/jdmiguel/bin/about/");
                    else if(Main.scope.counterLi == 1) $(location).attr("href", "http://localhost:81/jdmiguel/bin/skills/");
                    else if(Main.scope.counterLi == 2) $(location).attr("href", "http://localhost:81/jdmiguel/bin/timeline/");
                    else if(Main.scope.counterLi == 3) $(location).attr("href", "http://localhost:81/jdmiguel/bin/working/");
                    else if(Main.scope.counterLi == 4) $(location).attr("href", "http://localhost:81/jdmiguel/bin/contact/");*/
                } });
        });
    };
    Main.prototype.overBtnSection = function (e) {
        TweenMax.to(Main.scope.$linksCircle, .5, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(Main.scope.$linksArrow, .5, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(Main.scope.$linksP, .5, { opacity: 1, ease: Cubic.easeOut });
    };
    Main.prototype.outBtnSection = function (e) {
        TweenMax.to(Main.scope.$linksCircle, .5, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Main.scope.$linksArrow, .5, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Main.scope.$linksP, .5, { opacity: .4, ease: Cubic.easeOut });
    };
    Main.prototype.mouseWheelHandler = function (e) {
        Main.scope.isOnMove = true;
        var e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        delta == 1 ? Main.scope.goMenu("prev") : Main.scope.goMenu("next");
    };
    Main.prototype.onDrag = function (event) {
        console.log("onDrag: " + event);
        if (event.type = 'touchevent')
            console.log('is touch event');
        Main.scope.isOnDrag = true;
        Main.scope.posXinitMouse = event.pageX;
        $("body").removeClass("drag-cursor").addClass("drop-cursor");
        Main.scope.$wrapLocalRef.addEventListener("mousemove", Main.scope.onMouseMove);
        Main.scope.$wrapLocalRef.addEventListener("touchmove", Main.scope.onMouseMove);
    };
    Main.prototype.onDrop = function (event) {
        console.log("onDrop");
        if (Main.scope.isOnDrag == false)
            return;
        console.log("onDrop throw isOnDrag");
        if (event != undefined)
            Main.scope.posXfinMouse = event.pageX;
        $("body").removeClass("drop-cursor").addClass("drag-cursor");
        Main.scope.$wrapLocalRef.removeEventListener("mousemove", Main.scope.onMouseMove);
        Main.scope.$wrapLocalRef.removeEventListener("touchmove", Main.scope.onMouseMove);
        Main.scope.valueDragMouse = Main.scope.posXinitMouse - Main.scope.posXfinMouse;
        if (Main.scope.valueDragMouse > Main.scope.widthWindow / 6) {
            Main.scope.deltaMenuActive = true;
            Main.scope.goMenu("next");
        }
        else if (Main.scope.valueDragMouse < -Main.scope.widthWindow / 6) {
            Main.scope.deltaMenuActive = true;
            Main.scope.goMenu("prev");
        }
        else {
            TweenMax.to(Main.scope.$menu, .6, { css: { left: -Main.scope.moveXmenu * Main.scope.counterLi }, ease: Cubic.easeInOut });
            TweenMax.to(Main.scope.$links, .8, { css: { left: (-Main.scope.moveXmenu * 2) * Main.scope.counterLi }, ease: Cubic.easeInOut, onComplete: function () {
                    Main.scope.isOnWindow = false;
                    Main.scope.isOnDrag = false;
                } });
        }
    };
    Main.prototype.onMouseMove = function (event) {
        console.log("onMouseMove");
        Main.scope.isOnDrag = true;
        Main.scope.posXcurrentMouse = ((event.pageX - Main.scope.posXinitMouse) / 2 - Main.scope.moveXmenu * Main.scope.counterLi);
        TweenMax.to(Main.scope.$menu, .6, { css: { left: Main.scope.posXcurrentMouse + "px" } });
        TweenMax.to(Main.scope.$links, .6, { css: { left: (Main.scope.posXcurrentMouse * 2) + "px" } });
    };
    // DESPLAZAMIENTO DEL MENU
    Main.prototype.goMenu = function (position) {
        if (Main.scope.deltaMenuActive) {
            Main.scope.deltaMenuActive = false;
        }
        else
            return;
        //Main.scope.desactiveTicker();
        Main.scope.isOnMove = true;
        Main.scope.isOnWindow = true;
        Main.scope.removeListenersMenu();
        switch (position) {
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
    };
    Main.prototype.moveMenu = function (moveFrom) {
        console.log("moveMenu" + "currentLi: " + Main.scope.counterLi);
        if (moveFrom == "menu") {
            console.log("moveMenu from menu");
            TweenMax.to(Main.scope.$menuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).children("p").children("i"), .7, { css: { left: Main.scope.valuesMenu.percent_1 + "%" }, ease: Cubic.easeInOut });
            TweenMax.to(Main.scope.$submenuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).children("span").children("i"), .7, { css: { left: Main.scope.valuesMenu.percent_2 + "%" }, ease: Cubic.easeInOut });
        }
        if (moveFrom == "submenu") {
            console.log("moveMenu from submenu");
            for (var i = 0; i < Main.scope.totalLi; i++) {
                if (Main.scope.counterLi > i) {
                    Main.scope.valuesMenu.percent_1 = 100;
                    Main.scope.valuesMenu.percent_2 = 100;
                }
                if (Main.scope.counterLi < i) {
                    Main.scope.valuesMenu.percent_1 = -100;
                    Main.scope.valuesMenu.percent_2 = -100;
                }
                if (Main.scope.$menuLi.eq(i).hasClass("current-menu"))
                    TweenMax.to(Main.scope.$menuLi.eq(i).children("p").children("i"), .7, { css: { left: Main.scope.valuesMenu.percent_1 + "%" }, ease: Cubic.easeInOut });
                if (Main.scope.$submenuLi.eq(i).hasClass("current-menu"))
                    TweenMax.to(Main.scope.$submenuLi.eq(i).children("span").children("i"), .7, { css: { left: Main.scope.valuesMenu.percent_2 + "%" }, ease: Cubic.easeInOut });
            }
        }
        TweenMax.to(Main.scope.$menu, .8, { left: -Main.scope.moveXmenu * Main.scope.counterLi, ease: Cubic.easeInOut, onComplete: Main.scope.valuesMenu.callBack, onCompleteParams: [Main.scope.valuesMenu.param_1, Main.scope.valuesMenu.param_2] });
        TweenMax.to(Main.scope.$links, 1, { left: (-Main.scope.moveXmenu * 2) * Main.scope.counterLi, ease: Cubic.easeInOut });
        TweenMax.to(Main.scope.$menuLi.eq(Main.scope.counterLi).children("p").children("i"), .7, { left: 0, ease: Cubic.easeInOut });
        TweenMax.to(Main.scope.$submenuLi.eq(Main.scope.counterLi).children("span").children("i"), .7, { left: 0, ease: Cubic.easeInOut });
        Main.scope.moveBg(1.5);
    };
    Main.prototype.moveBg = function (d_) {
        var duration_ = d_;
        var localCounter = $("#bg-" + Main.scope.counterLi);
        Main.scope.counterBg++;
        localCounter.attr("zIndex", Main.scope.counterBg);
        /*Main.scope.classBg.each(function(i){
            if(i == Main.scope.counterLi){
                TweenMax.to($("#bg-" + i), duration_, {left:0,opacity:1, ease:Power2.easeOut});
            } else{
                TweenMax.to($("#bg-" + i), duration_, {left:0,opacity:0, ease:Power2.easeOut});
            }
        });*/
        Main.scope.classBg.each(function (i) {
            if (i == Main.scope.counterLi) {
                TweenMax.to($("#bg-" + i), duration_, { opacity: 1, left: Main.scope.counterLi / 1.7 + "%", ease: Power2.easeOut });
            }
            else {
                TweenMax.to($("#bg-" + i), duration_, { opacity: 0, left: Main.scope.counterLi / 1.7 + "%", ease: Power2.easeOut });
            }
        });
    };
    Main.prototype.setElementsMenu = function (posElement_1, posElement_2) {
        console.log("setElementsMenu");
        Main.scope.$menuLi.eq(Main.scope.counterLi).removeClass(posElement_1 + "-menu").addClass("current-menu");
        Main.scope.$menuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).removeClass("current-menu").addClass(posElement_2 + "-menu");
        Main.scope.$linksLi.eq(Main.scope.counterLi).removeClass(posElement_1 + "-link").addClass("current-link");
        Main.scope.$linksLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).removeClass("current-link").addClass(posElement_2 + "-link");
        Main.scope.$submenuLi.eq(Main.scope.counterLi).removeClass(posElement_1 + "-menu").addClass("current-menu");
        Main.scope.$submenuLi.eq(Main.scope.counterLi + Main.scope.valuesMenu.position).removeClass("current-menu").addClass(posElement_2 + "-menu");
        Main.scope.completeSetElements();
    };
    Main.prototype.setElementsFromSubMenu = function () {
        console.log("setElementsFromSubMenu");
        Main.scope.$menuLi.eq(Main.scope.counterLi).removeClass("prev-menu").removeClass("next-menu").addClass("current-menu");
        Main.scope.$linksLi.eq(Main.scope.counterLi).removeClass("prev-link").removeClass("next-link").addClass("current-link");
        Main.scope.$submenuLi.eq(Main.scope.counterLi).removeClass("prev-menu").removeClass("next-menu").addClass("current-menu");
        for (var i = 0; i < Main.scope.totalLi; i++) {
            if (Main.scope.counterLi > i) {
                Main.scope.$menuLi.eq(i).removeClass("current-menu").removeClass("next-menu").addClass("prev-menu");
                Main.scope.$linksLi.eq(i).removeClass("current-link").removeClass("next-link").addClass("prev-link");
                Main.scope.$submenuLi.eq(i).removeClass("current-menu").removeClass("next-menu").addClass("prev-menu");
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), { css: { left: "100%" } });
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), { css: { left: "100%" } });
            }
            if (Main.scope.counterLi < i) {
                Main.scope.$menuLi.eq(i).removeClass("current-menu").removeClass("prev-menu").addClass("next-menu");
                Main.scope.$linksLi.eq(i).removeClass("current-link").removeClass("prev-link").addClass("next-link");
                Main.scope.$submenuLi.eq(i).removeClass("current-menu").removeClass("prev-menu").addClass("next-menu");
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), { css: { left: "-100%" } });
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), { css: { left: "-100%" } });
            }
        }
        Main.scope.completeSetElements();
    };
    Main.prototype.completeSetElements = function () {
        Main.scope.isOnDrag = false;
        Main.scope.deltaMenuActive = true;
        Main.scope.isOnMove = false;
        Main.scope.isOnWindow = false;
        //Main.scope.activeTicker();
        Main.scope.addListenersMenu();
    };
    // FUNCIONALIDAD SUBMENU
    Main.prototype.activeSubMenu = function () {
        Main.scope.$submenuLi.each(function (i) {
            var _this = this;
            $(this).data("numSubMenu", i).on("click", function (e) {
                Main.scope.currentSubMenu = $(_this).data("numSubMenu");
                Main.scope.goMenu("random");
            });
        });
    };
    // FUNCIONALIDAD SOCIAL MENU
    Main.prototype.activeSocialMenu = function () {
        var socialId;
        Main.scope.$socialBtn.each(function (i) {
            Main.scope.$socialBtn.eq(i).data("id", i);
        });
        Main.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Main.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        Main.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(Main.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Main.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    // FUNCIONALIDAD RESIZE
    Main.prototype.onResetAll = function () {
        Main.scope.counterLi = 0;
        TweenMax.set([Main.scope.$menu, Main.scope.$links], { css: { left: 0 } });
        Main.scope.$linksA.off("mouseenter", Main.scope.overBtnSection);
        Main.scope.$linksA.off("mouseleave", Main.scope.outBtnSection);
        for (var i = 0; i < Main.scope.totalLi; i++) {
            if (i == 0) {
                if (Main.scope.$menuLi.eq(i).hasClass("prev-menu")) {
                    Main.scope.$menuLi.eq(i).removeClass("prev-menu");
                    TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), { css: { left: 0 } });
                }
                if (Main.scope.$submenuLi.eq(i).removeClass("prev-menu")) {
                    Main.scope.$submenuLi.eq(i).removeClass("prev-menu");
                    TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), { css: { left: 0 } });
                }
                Main.scope.$menuLi.eq(i).addClass("current-menu");
                Main.scope.$linksLi.eq(i).addClass("current-link");
                Main.scope.$submenuLi.eq(i).addClass("current-menu");
            }
            else {
                TweenMax.set(Main.scope.$menuLi.eq(i).children("p").children("i"), { css: { left: "-100%" } });
                TweenMax.set(Main.scope.$submenuLi.eq(i).children("span").children("i"), { css: { left: "-100%" } });
                Main.scope.$menuLi.eq(i).removeClass("prev-menu").removeClass("current-menu").addClass("next-menu");
                Main.scope.$linksLi.eq(i).removeClass("prev-link").removeClass("current-link").addClass("next-link");
                Main.scope.$submenuLi.eq(i).removeClass("prev-menu").removeClass("current-menu").addClass("next-menu");
            }
        }
        //if(!Main.scope.detectMobileOrTablet) Main.scope.onResizeAll();
        Main.scope.onResizeAll();
    };
    Main.prototype.onResizeAll = function () {
        Main.scope.widthWindow = Main.scope.$wrapLocalRef.clientWidth;
        Main.scope.heightWindow = Main.scope.$wrapLocalRef.clientHeight;
        Main.scope.moveXmenu = Main.scope.widthWindow / 2;
        Main.scope.$menu.css({
            width: function () {
                return Main.scope.widthWindow * 5;
            },
            height: function () {
                return Main.scope.heightWindow;
            }
        });
        Main.scope.$menuLi.css({
            width: function () {
                return Main.scope.widthWindow / 2;
            },
            height: function () {
                return Main.scope.heightWindow;
            }
        });
        Main.scope.$links.css({
            width: function () {
                return Main.scope.widthWindow * 7;
            }
        });
        Main.scope.$linksLi.css({
            width: function () {
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
        if (Main.scope.isOnInit) {
            Main.scope.goHome();
            Main.scope.isOnInit = false;
        }
    };
    Main.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Main;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var Skills = (function () {
    function Skills() {
        this.$backBtn = $(".container-btn-back > a");
        this.$txtBack = $(".container-btn-back > a > p");
        this.$circleBack = $(".container-btn-back > a > svg > circle");
        this.$arrowBack = $(".container-btn-back > a > svg > polyline");
        this.$loaderRef = $("#loader");
        this.$bgRef = $("#bg-skills");
        this.$liRef = $("#menu-skills > li");
        this.$logo = $(".logo");
        this.$logoSvg = $(".logo svg path");
        this.$logoJ = $(".logo .logo-txt span:nth-child(1)");
        this.$logoD = $(".logo .logo-txt span:nth-child(2)");
        this.$logoM = $(".logo .logo-txt span:nth-child(3)");
        this.$socialBtn = $(".social > .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        this.$svgRefTecno = $(".circle-tecno");
        this.$svgRefFrame = $(".circle-frame");
        this.$svgRefPre = $(".circle-pre");
        this.$svgRefFront = $(".circle-front");
        this.$svgRefDes = $(".circle-des");
        this.$svgRefOther = $(".circle-other");
        this.$strokeRefTecno = $("#stroke-svg-tecno");
        this.$strokeRefFrame = $("#stroke-svg-frame");
        this.$strokeRefPre = $("#stroke-svg-pre");
        this.$strokeRefFront = $("#stroke-svg-front");
        this.$strokeRefDes = $("#stroke-svg-des");
        this.$strokeRefOther = $("#stroke-svg-other");
        this.$fillRefTecno = $("#fill-svg-tecno");
        this.$fillRefFrame = $("#fill-svg-frame");
        this.$fillRefPre = $("#fill-svg-pre");
        this.$fillRefFront = $("#fill-svg-front");
        this.$fillRefDes = $("#fill-svg-des");
        this.$fillRefOther = $("#fill-svg-other");
        this.$titTecnoRef = $("#menu-skills > li:nth-child(1) > h2");
        this.$titFrameRef = $("#menu-skills > li:nth-child(2) > h2");
        this.$titPreRef = $("#menu-skills > li:nth-child(3) > h2");
        this.$titFrontRef = $("#menu-skills > li:nth-child(4) > h2");
        this.$titDesRef = $("#menu-skills > li:nth-child(5) > h2");
        this.$titOtherRef = $("#menu-skills > li:nth-child(6) > h2");
        this.$submenuLocalRef = $("#submenu");
        this.$submenuLiLocalRef = $("#submenu > li");
        this.$subSectionRef = $("#sub-section");
        this.$subSectionContentRef = $("#content-sub-section");
        this.$subSectionBgRef = $("#bg-sub-section");
        this.$subSectionSvgRef = $("#stroke-svg-sub-section");
        this.$subSectionCloseRef = $("#content-sub-section > section > span");
        this.$subSectionTitRef = $("#content-sub-section > section > h1");
        this.$subSectionParagraphRef = $("#content-sub-section > section > p");
        this.$subSectionImgRef = $("#content-sub-section > section > figure > img");
        this.arrayImgSubSection = [];
        this.objImgSubSection = {
            techno: [],
            frame: [],
            pre: [],
            front: [],
            des: [],
            others: []
        };
        this.technoRef = $("#techno");
        this.frameRef = $("#frame");
        this.preRef = $("#pre");
        this.frontRef = $("#front");
        this.desRef = $("#des");
        this.othersRef = $("#others");
        Skills.scope = this;
        if(this.detectMobileOrTablet()) document.body.addEventListener('touchmove',function(e){e.preventDefault();});
        TweenMax.set([Skills.scope.$txtBack, Skills.scope.$circleBack, Skills.scope.$arrowBack], { opacity: .4 });
        TweenMax.set(Skills.scope.$logo, { cursor: "pointer" });
        TweenMax.set(Skills.scope.$subSectionCloseRef, { opacity: 0 });
        Skills.scope.$logo.on("click", function () { Skills.scope.leaveSection(); });
        Skills.scope.$logo.on("mouseenter", function () { Skills.scope.overLogo(); });
        Skills.scope.$logo.on("mouseleave", function () { Skills.scope.outLogo(); });
        Skills.scope.$backBtn.on("click", function () { Skills.scope.leaveSection(); });
        Skills.scope.$backBtn.on("mouseenter", function () { Skills.scope.overBtnBack(); });
        Skills.scope.$backBtn.on("mouseleave", function () { Skills.scope.outBtnBack(); });
        Skills.scope.activeSocialMenu();
        Skills.scope.$liRef.each(function (i) {
            Skills.scope.$liRef.eq(i).data("num", i);
        });
        Skills.scope.$subSectionImgRef.each(function (i) {
            switch (i) {
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
        Skills.scope.TLskills = new TimelineMax({ paused: false });
        Skills.scope.TLskills.set([this.$strokeRefTecno, this.$strokeRefFrame, this.$strokeRefPre, this.$strokeRefFront, this.$strokeRefDes, this.$strokeRefOther], { drawSVG: "0", stroke: "#FFFFFF" })
            .set([this.$fillRefTecno, this.$fillRefFrame, this.$fillRefPre, this.$fillRefFront, this.$fillRefDes, this.$fillRefOther], { opacity: 0, fill: "#FFFFFF" })
            .set([this.$titTecnoRef, this.$titFrameRef, this.$titPreRef, this.$titFrontRef, this.$titDesRef, this.$titOtherRef], { opacity: 0, color: "#de641b" })
            .to(this.$strokeRefTecno, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, .5)
            .to(this.$fillRefTecno, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, .8)
            .to(this.$titTecnoRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefTecno] }, 1)
            .to(this.$strokeRefFrame, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, 1.4)
            .to(this.$fillRefFrame, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, 1.7)
            .to(this.$titFrameRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefFrame] }, 1.9)
            .to(this.$strokeRefPre, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, 2.2)
            .to(this.$fillRefPre, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, 2.5)
            .to(this.$titPreRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefPre] }, 2.7)
            .to(this.$strokeRefFront, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, 3.1)
            .to(this.$fillRefFront, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, 3.4)
            .to(this.$titFrontRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefFront] }, 3.6)
            .to(this.$strokeRefDes, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, 4)
            .to(this.$fillRefDes, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, 4.3)
            .to(this.$titDesRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefDes] }, 4.5)
            .to(this.$strokeRefOther, 1.1, { drawSVG: "100%", stroke: "#de641b", ease: Expo.easeOut }, 4.9)
            .to(this.$fillRefOther, .8, { opacity: .15, fill: "#de641b", ease: Cubic.easeOut }, 5.2)
            .to(this.$titOtherRef, .6, { opacity: 1, color: "#FFFFFF", ease: Cubic.easeOut, onComplete: Skills.scope.addListeners, onCompleteParams: [Skills.scope.$svgRefOther] }, 5.4);
    }
    Skills.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    Skills.prototype.leaveSection = function () {
        TweenMax.set(Skills.scope.$loaderRef, { css: { display: "block" } });
        TweenMax.to(Skills.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                //Skills.scope.goHome("http://localhost/jdmiguel/bin/", 1);
                 Skills.scope.goHome("http://www.jdmiguel.com/old", 1);
            }
        });
    };
    Skills.prototype.goHome = function (currentSection, counterHome) {
        currentSection += "?";
        currentSection += counterHome + "&";
        currentSection = currentSection.substring(0, currentSection.length - 1);
        location.href = currentSection;
    };
    Skills.prototype.overLogo = function () {
        TweenMax.to(Skills.scope.$logoSvg, .5, { fill: "#de641b", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoJ, .5, { color: "#de641b", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoD, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoM, .5, { color: "#c11e99", ease: Cubic.easeOut });
    };
    Skills.prototype.outLogo = function () {
        TweenMax.to(Skills.scope.$logoSvg, .5, { fill: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoJ, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoD, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$logoM, .5, { color: "#ffffff", ease: Cubic.easeOut });
    };
    Skills.prototype.overBtnBack = function () {
        TweenMax.to(Skills.scope.$circleBack, .5, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$arrowBack, .5, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$txtBack, .5, { opacity: 1, ease: Cubic.easeOut });
    };
    Skills.prototype.outBtnBack = function () {
        TweenMax.to(Skills.scope.$circleBack, .5, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$arrowBack, .5, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$txtBack, .5, { opacity: .4, ease: Cubic.easeOut });
    };
    Skills.prototype.activeSocialMenu = function () {
        var socialId;
        Skills.scope.$socialBtn.each(function (i) {
            Skills.scope.$socialBtn.eq(i).data("id", i);
        });
        Skills.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Skills.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        Skills.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(Skills.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Skills.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    Skills.prototype.addListeners = function (svgSelected_) {
        Skills.scope.svgSelected = svgSelected_;
        Skills.scope.svgSelected.attr("cursor", "pointer");
        Skills.scope.svgSelected.on("click", Skills.scope.selectSection);
        Skills.scope.svgSelected.on("mouseenter", Skills.scope.overCircle);
        //Skills.scope.svgSelected.on("mousemove", Skills.scope.overCircle);
        Skills.scope.svgSelected.on("mouseleave", Skills.scope.outCircle);
    };
    Skills.prototype.selectSection = function (e) {
        var parent_ = $(e.currentTarget.parentNode.parentNode);
        var num_ = parent_.data("num");
        var currentSection = num_ + 1;
        TweenMax.to(parent_.children("svg"), .5, { transformOrigin: "50% 50%", scale: 1, ease: Back.easeInOut });
        TweenMax.to(parent_.children("h2"), .5, { color: "#FFFFFF", ease: Power1.easeInOut });
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, { stroke: "#de641b", strokeWidth: "3", fill: "rgba(222,100,27,.15)" });
        TweenMax.set(Skills.scope.$subSectionRef, { visibility: "visible", display: "block", opacity: 1 });
        TweenMax.set(Skills.scope.$subSectionSvgRef, { drawSVG: "0" });
        TweenMax.set([Skills.scope.$subSectionTitRef, Skills.scope.$subSectionParagraphRef], { opacity: 0, left: "+=20" });
        TweenMax.set(Skills.scope.$subSectionCloseRef, { opacity: 0 });
        for (var i = 0; i < 20; i++)
            TweenMax.set(Skills.scope.arrayImgSubSection[i], { scale: .5, opacity: 0 });
        TweenMax.to(Skills.scope.$subSectionBgRef, .5, { opacity: .9 });
        TweenMax.to(Skills.scope.$subSectionSvgRef, 1.2, { delay: .4, drawSVG: "100%", fill: "rgba(0,0,0,0.4)", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$subSectionTitRef, .6, { delay: 1.3, opacity: .9, left: "-=20", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$subSectionParagraphRef, .6, { delay: 1.4, opacity: .9, left: "-=20", ease: Cubic.easeOut });
        TweenMax.to(Skills.scope.$subSectionCloseRef, .4, { delay: 1.7, opacity: 1, ease: Cubic.easeOut });
        switch (currentSection) {
            case 1:
                Skills.scope.$currentSubSectionRef = Skills.scope.technoRef;
                for (var ii = 0; ii < 4; ii++)
                    TweenMax.to(Skills.scope.objImgSubSection.techno[ii], .5, { delay: .5 + ii / 4, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
            case 2:
                Skills.scope.$currentSubSectionRef = Skills.scope.frameRef;
                for (var j = 0; j < 3; j++)
                    TweenMax.to(Skills.scope.objImgSubSection.frame[j], .5, { delay: .5 + j / 3, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
            case 3:
                Skills.scope.$currentSubSectionRef = Skills.scope.preRef;
                for (var k = 0; k < 3; k++)
                    TweenMax.to(Skills.scope.objImgSubSection.pre[k], .5, { delay: .5 + k / 3, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
            case 4:
                Skills.scope.$currentSubSectionRef = Skills.scope.frontRef;
                for (var l = 0; l < 3; l++)
                    TweenMax.to(Skills.scope.objImgSubSection.front[l], .5, { delay: .5 + l / 3, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
            case 5:
                Skills.scope.$currentSubSectionRef = Skills.scope.desRef;
                for (var m = 0; m < 4; m++)
                    TweenMax.to(Skills.scope.objImgSubSection.des[m], .5, { delay: .5 + m / 4, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
            case 6:
                Skills.scope.$currentSubSectionRef = Skills.scope.othersRef;
                for (var n = 0; n < 3; n++)
                    TweenMax.to(Skills.scope.objImgSubSection.others[n], .5, { delay: .5 + n / 3, scale: 1, opacity: 1, ease: Back.easeOut });
                break;
        }
        TweenMax.set(Skills.scope.$currentSubSectionRef, { visibility: "visible" });
    };
    Skills.prototype.addSubSectionListeners = function () {
        Skills.scope.$subSectionCloseRef.on("click", function () {
            TweenMax.to(Skills.scope.$subSectionRef, .5, { opacity: 0, onComplete: function () {
                    TweenMax.set(Skills.scope.$subSectionRef, { visibility: "hidden", display: "none" });
                    TweenMax.set(Skills.scope.$currentSubSectionRef, { visibility: "hidden" });
                } });
        });
        Skills.scope.$subSectionCloseRef.on("mouseenter", function (e) {
            TweenMax.to(e.currentTarget, .5, { color: "#de641b", ease: Cubic.easeOut });
        });
        Skills.scope.$subSectionCloseRef.on("mouseleave", function (e) {
            TweenMax.to(e.currentTarget, .5, { color: "#ffffff", ease: Cubic.easeOut });
        });
    };
    Skills.prototype.overCircle = function (e) {
        var parent_ = $(e.currentTarget.parentNode.parentNode);
        console.log("overCircle");
        //Skills.scope.svgSelected.off("mousemove", Skills.scope.overCircle);
        //Skills.scope.svgSelected.off("mouseenter", Skills.scope.overCircle);
        TweenMax.to(parent_.children("svg"), .5, { transformOrigin: "50% 50%", scale: 1.05, ease: Back.easeInOut });
        TweenMax.to(parent_.children("h2"), .5, { color: "#de641b", ease: Power2.easeInOut });
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, { stroke: "#FFFFFF", strokeWidth: "4", fill: "rgba(255,255,255,.15)" });
    };
    Skills.prototype.outCircle = function (e) {
        var parent_ = $(e.currentTarget.parentNode.parentNode);
        console.log("outCircle");
        //Skills.scope.svgSelected.on("mouseenter", Skills.scope.overCircle);
        TweenMax.to(parent_.children("svg"), .5, { transformOrigin: "50% 50%", scale: 1, ease: Back.easeInOut });
        TweenMax.to(parent_.children("h2"), .5, { color: "#FFFFFF", ease: Power1.easeInOut });
        TweenMax.to(parent_.children(".content-svg-skills").children(), .4, { stroke: "#de641b", strokeWidth: "3", fill: "rgba(222,100,27,.15)" });
    };
    return Skills;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/snapsvg.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var SvgInput = (function () {
    function SvgInput(n) {
        this.paths = {
            reset: null,
            active: null
        };
        this.inputAvailable = {
            name: true,
            email: true,
            message: true
        };
        SvgInput.scope = this;
        SvgInput.scope.numSelected = n;
        var isButton = false;
        SvgInput.scope.parent = document.querySelectorAll('.elastic')[SvgInput.scope.numSelected];
        if (SvgInput.scope.parent.getAttribute('id') == 'send-wrap')
            isButton = true;
        if (!isButton)
            SvgInput.scope.parent.addEventListener('click', SvgInput.scope.goElastic);
    }
    SvgInput.prototype.goElastic = function (e) {
        console.log('goElastic');
        var pathSelected;
        pathSelected = SvgInput.scope.getPath(e.currentTarget);
        pathSelected.stop().animate({ 'path': SvgInput.scope.paths.active }, 200, mina.easein, function () {
            pathSelected.stop().animate({ 'path': SvgInput.scope.paths.reset }, 600, mina.elastic);
        });
    };
    SvgInput.prototype.getPath = function (target) {
        var id = target.getAttribute('id');
        var pathSelected;
        if (id == 'send-wrap')
            return;
        SvgInput.scope.accessClassContainer = target.childNodes[1];
        SvgInput.scope.snapObj = Snap(SvgInput.scope.accessClassContainer.childNodes[0]);
        pathSelected = SvgInput.scope.snapObj.select('path');
        SvgInput.scope.paths.reset = pathSelected.attr('d');
        SvgInput.scope.paths.active = SvgInput.scope.accessClassContainer.getAttribute('data-morph-active');
        return pathSelected;
    };
    SvgInput.prototype.testInput = function (field, test) {
        console.log('field: ' + field);
        var pathSelected;
        switch (field) {
            case 'name':
                pathSelected = SvgInput.scope.getPath(document.querySelectorAll('.elastic')[0]);
                break;
            case 'email':
                pathSelected = SvgInput.scope.getPath(document.querySelectorAll('.elastic')[1]);
                break;
            case 'message':
                pathSelected = SvgInput.scope.getPath(document.querySelectorAll('.elastic')[2]);
                break;
        }
        test == 'ok' ? pathSelected.animate({ 'fill': '#f0d916' }, 500, mina.easeinout) : pathSelected.animate({ 'fill': '#fd022b' }, 500, mina.easeinout);
    };
    return SvgInput;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var Timeline = (function () {
    function Timeline() {
        this.$backBtn = $(".container-btn-back > a");
        this.$txtBack = $(".container-btn-back > a > p");
        this.$circleBack = $(".container-btn-back > a > svg > circle");
        this.$arrowBack = $(".container-btn-back > a > svg > polyline");
        this.$socialBtn = $(".social .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        this.$loaderRef = $("#loader");
        this.$logo = $(".logo");
        this.$logoSvg = $(".logo svg path");
        this.$logoJ = $(".logo .logo-txt span:nth-child(1)");
        this.$logoD = $(".logo .logo-txt span:nth-child(2)");
        this.$logoM = $(".logo .logo-txt span:nth-child(3)");
        this.$submenuLocalRef = $("#submenu");
        this.$submenuLiLocalRef = $("#submenu li");
        this.$bgStroke = $("#bg-stroke");
        this.$bgFill = $("#bg-fill");
        this.$linesDotted = $("#lines-dotted");
        this.$years = $("#years");
        this.$circleBegin = $(".circle-begin");
        this.$circleEndFill = $(".circle-end-fill");
        this.$circleEndStroke = $(".circle-end-stroke");
        this.$lineBlocks = $(".line-blocks");
        this.$add = $(".add");
        this.$com = $("#blocks img");
        this.$job = $("#blocks p");
        this.$areaRollover = $("#blocks span");
        this.opacityJobs;
        Timeline.scope = this;
        if(Timeline.scope.detectMobileOrTablet()) {
            document.body.addEventListener('touchmove',function(e){e.preventDefault();});
            Timeline.scope.opacityJobs = 1;
        }
        else this.opacityJobs = .5;
        TweenMax.set([Timeline.scope.$txtBack, Timeline.scope.$circleBack, Timeline.scope.$arrowBack], { opacity: .4 });
        TweenMax.set(Timeline.scope.$logo, { cursor: "pointer" });
        Timeline.scope.$logo.on("click", function () { Timeline.scope.leaveSection(); });
        Timeline.scope.$logo.on("mouseenter", function () { Timeline.scope.overLogo(); });
        Timeline.scope.$logo.on("mouseleave", function () { Timeline.scope.outLogo(); });
        Timeline.scope.$backBtn.on("click", function () { Timeline.scope.leaveSection(); });
        Timeline.scope.$backBtn.on("mouseenter", function () { Timeline.scope.overBtnBack(); });
        Timeline.scope.$backBtn.on("mouseleave", function () { Timeline.scope.outBtnBack(); });
        Timeline.scope.activeSocialMenu();
        Timeline.scope.$areaRollover.each(function (i) {
            Timeline.scope.$areaRollover.eq(i).data("num", i);
        });
        Timeline.scope.TLtimeline = new TimelineMax({ paused: false });

        Timeline.scope.TLtimeline.set([Timeline.scope.$bgStroke, Timeline.scope.$lineBlocks], { drawSVG: "0" })
            .set([Timeline.scope.$bgFill, Timeline.scope.$linesDotted, Timeline.scope.$years, Timeline.scope.$circleBegin, Timeline.scope.$circleEndFill, Timeline.scope.$com, Timeline.scope.$job], { opacity: 0 })
            .set(Timeline.scope.$circleEndStroke, { opacity: 0, scale: .5 })
            .set(Timeline.scope.$add, { opacity: 0, rotation: '-=120' })
            .to(Timeline.scope.$bgStroke, 2.5, { drawSVG: "100%", ease: Cubic.easeOut }, 1)
            .to(Timeline.scope.$bgFill, 1, { opacity: 1 }, '-=1.2')
            .to(Timeline.scope.$years, .4, { opacity: Timeline.scope.opacityJobs }, '-=.4')
            .to(Timeline.scope.$linesDotted, .4, { opacity: .3 }, '-=.3')
            .to(Timeline.scope.$circleBegin.eq(0), .4, { opacity: 1, ease: Sine.easeOut }, 3.7 + 0 / 1.5)
            .to(Timeline.scope.$lineBlocks.eq(0), .5, { drawSVG: "100%", ease: Sine.easeInOut }, 4 + 0 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(0), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 0 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(0), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 0 / 1.5)
            .to(Timeline.scope.$add.eq(0), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 0 / 1.5)
            .to(Timeline.scope.$com.eq(0), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 0 / 1.5)
            .to(Timeline.scope.$job.eq(0), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(0); } }, 5.15 + 0 / 1.5)
            .to(Timeline.scope.$circleBegin.eq(1), .4, { opacity: 1, ease: Sine.easeOut }, 3.7 + 1 / 1.5)
            .to(Timeline.scope.$lineBlocks.eq(1), .5, { drawSVG: "100%", ease: Sine.easeInOut }, 4 + 1 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(1), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 1 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(1), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 1 / 1.5)
            .to(Timeline.scope.$add.eq(1), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 1 / 1.5)
            .to(Timeline.scope.$com.eq(1), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 1 / 1.5)
            .to(Timeline.scope.$job.eq(1), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(1); } }, 5.15 + 1 / 1.5)
            .to(Timeline.scope.$circleBegin.eq(2), .4, { opacity: 1, ease: Sine.easeOut }, 3.7 + 2 / 1.5)
            .to(Timeline.scope.$lineBlocks.eq(2), .5, { drawSVG: "100%", ease: Sine.easeInOut }, 4 + 2 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(2), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 2 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(2), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 2 / 1.5)
            .to(Timeline.scope.$add.eq(2), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 2 / 1.5)
            .to(Timeline.scope.$com.eq(2), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 2 / 1.5)
            .to(Timeline.scope.$job.eq(2), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(2); } }, 5.15 + 2 / 1.5)
            .to(Timeline.scope.$circleBegin.eq(3), .4, { opacity: 1, ease: Sine.easeOut }, 3.7 + 3 / 1.5)
            .to(Timeline.scope.$lineBlocks.eq(3), .5, { drawSVG: "100%", ease: Sine.easeInOut }, 4 + 3 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(3), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 3 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(3), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 3 / 1.5)
            .to(Timeline.scope.$add.eq(3), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 3 / 1.5)
            .to(Timeline.scope.$com.eq(3), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 3 / 1.5)
            .to(Timeline.scope.$job.eq(3), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(3); } }, 5.15 + 3 / 1.5)
            .to(Timeline.scope.$circleBegin.eq(4), .4, { opacity: 1, ease: Sine.easeOut }, 3.7 + 4 / 1.5)
            .to(Timeline.scope.$lineBlocks.eq(4), .5, { drawSVG: "100%", ease: Sine.easeInOut }, 4 + 4 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(4), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 4 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(4), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 4 / 1.5)
            .to(Timeline.scope.$add.eq(4), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 4 / 1.5)
            .to(Timeline.scope.$com.eq(4), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 4 / 1.5)
            .to(Timeline.scope.$job.eq(4), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(4); } }, 5.15 + 4 / 1.5)
            .to(Timeline.scope.$add.eq(5), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "+=120", ease: Back.easeOut }, 4.9 + 5 / 1.5)
            .to(Timeline.scope.$com.eq(5), .3, { opacity: Timeline.scope.opacityJobs }, 5 + 5 / 1.5)
            .to(Timeline.scope.$job.eq(5), .3, { opacity: Timeline.scope.opacityJobs, onComplete: function () { Timeline.scope.addListener(5); } }, 5.15 + 5 / 1.5)
            .to(Timeline.scope.$circleEndStroke.eq(5), .5, { opacity: 1, scale: 1, transformOrigin: "50% 50%", ease: Sine.easeOut }, 4.4 + 5 / 1.5)
            .to(Timeline.scope.$circleEndFill.eq(5), .3, { opacity: .2, ease: Back.easeOut }, 4.6 + 5 / 1.5);
    }
    Timeline.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    Timeline.prototype.leaveSection = function () {
        TweenMax.set(Timeline.scope.$loaderRef, { css: { display: "block" } });
        TweenMax.to(Timeline.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                // Timeline.scope.goHome("http://localhost:81/jdmiguel/bin/", 2);
                Timeline.scope.goHome("http://www.jdmiguel.com/old", 2);
            }
        });
    };
    Timeline.prototype.goHome = function (currentSection, counterHome) {
        currentSection += "?";
        currentSection += counterHome + "&";
        currentSection = currentSection.substring(0, currentSection.length - 1);
        location.href = currentSection;
    };
    Timeline.prototype.overLogo = function () {
        TweenMax.to(Timeline.scope.$logoSvg, .5, { fill: "#456ae3", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoJ, .5, { color: "#456ae3", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoD, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoM, .5, { color: "#c11e99", ease: Cubic.easeOut });
    };
    Timeline.prototype.outLogo = function () {
        TweenMax.to(Timeline.scope.$logoSvg, .5, { fill: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoJ, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoD, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$logoM, .5, { color: "#ffffff", ease: Cubic.easeOut });
    };
    Timeline.prototype.overBtnBack = function () {
        TweenMax.to(Timeline.scope.$circleBack, .4, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$arrowBack, .4, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$txtBack, .4, { opacity: 1, ease: Cubic.easeOut });
    };
    Timeline.prototype.outBtnBack = function () {
        TweenMax.to(Timeline.scope.$circleBack, .4, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$arrowBack, .4, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Timeline.scope.$txtBack, .4, { opacity: .4, ease: Cubic.easeOut });
    };
    Timeline.prototype.activeSocialMenu = function () {
        var socialId;
        Timeline.scope.$socialBtn.each(function (i) {
            Timeline.scope.$socialBtn.eq(i).data("id", i);
        });
        Timeline.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Timeline.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        Timeline.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(Timeline.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Timeline.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    Timeline.prototype.addListener = function (num) {
        console.log("addListener: " + num);
        Timeline.scope.$areaRollover.eq(num).css("cursor", "pointer");
        Timeline.scope.$areaRollover.eq(num)
            .on("mouseenter", function (e) {
            TweenMax.to([Timeline.scope.$com.eq(num), Timeline.scope.$job.eq(num)], .3, { opacity: 1 });
            TweenMax.to(Timeline.scope.$add.eq(num), .3, { opacity: .4, transformOrigin: "50% 50%", rotation: "90" });
        })
            .on("mouseleave", function (e) {
            TweenMax.to([Timeline.scope.$com.eq(num), Timeline.scope.$job.eq(num)], .3, { opacity: .5 });
            TweenMax.to(Timeline.scope.$add.eq(num), .3, { opacity: 1, transformOrigin: "50% 50%", rotation: "0" });
        })
            .on("click", function (e) {
            switch (num) {
                case 0:
                    window.open("http://www.itt.com", "_blank");
                    break;
                case 1:
                    window.open("http://retis-spain.es/", "_blank");
                    break;
                case 2:
                    window.open("http://www.rumbo.es/", "_blank");
                    break;
                case 3:
                    window.open("http://www.publicis.es", "_blank");
                    break;
                case 4:
                    window.open("http://www.proximitymadrid.es", "_blank");
                    break;
                case 5:
                    window.open("http://www.scpf.com", "_blank");
                    break;
            }
        });
    };
    return Timeline;
})();
///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/easeljs.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>
var Working = (function () {
    function Working() {
        this.$backBtn = $(".container-btn-back > a");
        this.$txtBack = $(".container-btn-back > a > p");
        this.$circleBack = $(".container-btn-back > a > svg > circle");
        this.$arrowBack = $(".container-btn-back > a > svg > polyline");
        this.$socialBtn = $(".social .over-social > span");
        this.$socialSvg = $(".social > svg > path");
        this.$loaderRef = $("#loader");
        this.$logo = $(".logo");
        this.$logoSvg = $(".logo svg path");
        this.$logoJ = $(".logo .logo-txt span:nth-child(1)");
        this.$logoD = $(".logo .logo-txt span:nth-child(2)");
        this.$logoM = $(".logo .logo-txt span:nth-child(3)");
        this.$imgRef_1 = $("#working-img-1");
        this.$imgRef_2 = $("#working-img-2");
        this.$imgRef_3 = $("#working-img-3");
        this.$quote_1 = $("#testimonial-1 .quote");
        this.$quote_2 = $("#testimonial-2 .quote");
        this.$quote_3 = $("#testimonial-3 .quote");
        this.$reference_1 = $("#testimonial-1 .reference");
        this.$reference_2 = $("#testimonial-2 .reference");
        this.$reference_3 = $("#testimonial-3 .reference");
        this.$strokeRef_1 = $("#stroke-svg-working-1");
        this.$strokeRef_2 = $("#stroke-svg-working-2");
        this.$strokeRef_3 = $("#stroke-svg-working-3");
        this.$fillRef_1 = $("#fill-svg-working-1");
        this.$fillRef_2 = $("#fill-svg-working-2");
        this.$fillRef_3 = $("#fill-svg-working-3");
        this.$submenuLocalRef = $("#submenu");
        this.$submenuLiLocalRef = $("#submenu li");
        Working.scope = this;
        if(this.detectMobileOrTablet()) document.body.addEventListener('touchmove',function(e){e.preventDefault();});
        TweenMax.set([Working.scope.$txtBack, Working.scope.$circleBack, Working.scope.$arrowBack], { opacity: .4 });
        TweenMax.set(Working.scope.$logo, { cursor: "pointer" });
        Working.scope.$logo.on("click", function () { Working.scope.leaveSection(); });
        Working.scope.$logo.on("mouseenter", function () { Working.scope.overLogo(); });
        Working.scope.$logo.on("mouseleave", function () { Working.scope.outLogo(); });
        Working.scope.$backBtn.on("click", function () { Working.scope.leaveSection(); });
        Working.scope.$backBtn.on("mouseenter", function () { Working.scope.overBtnBack(); });
        Working.scope.$backBtn.on("mouseleave", function () { Working.scope.outBtnBack(); });
        Working.scope.activeSocialMenu();
        this.TLworking = new TimelineMax({ paused: false });
        this.TLworking.set([this.$strokeRef_1, this.$strokeRef_2, this.$strokeRef_3], { drawSVG: "0" })
            .set([this.$imgRef_1, this.$imgRef_2, this.$imgRef_3, this.$fillRef_1, this.$fillRef_2, this.$fillRef_3], { opacity: 0 })
            .set([this.$quote_1, this.$quote_3], { marginLeft: "+=15", opacity: 0 })
            .set(this.$quote_2, { marginLeft: "-=15", opacity: 0 })
            .set([this.$reference_1, this.$reference_2, this.$reference_3], { opacity: 0 })
            .to(this.$strokeRef_1, .8, { drawSVG: "100%", ease: Cubic.easeOut }, .5)
            .to(this.$fillRef_1, .8, { opacity: .3 }, .9)
            .to(this.$imgRef_1, .8, { opacity: 1 }, .9)
            .to(this.$quote_1, .6, { opacity: 1, marginLeft: "-=15", ease: Cubic.easeOut }, 1.2)
            .to(this.$reference_1, .6, { opacity: 1, ease: Cubic.easeOut }, 1.6)
            .to(this.$strokeRef_2, .8, { drawSVG: "100%", ease: Cubic.easeOut }, 1.9)
            .to(this.$fillRef_2, .8, { opacity: .3 }, 2.3)
            .to(this.$imgRef_2, .8, { opacity: 1 }, 2.3)
            .to(this.$quote_2, .6, { opacity: 1, marginLeft: "+=15", ease: Cubic.easeOut }, 2.7)
            .to(this.$reference_2, .6, { opacity: 1, ease: Cubic.easeOut }, 3.1)
            .to(this.$strokeRef_3, .8, { drawSVG: "100%", ease: Cubic.easeOut }, 3.3)
            .to(this.$fillRef_3, .8, { opacity: .3 }, 3.7)
            .to(this.$imgRef_3, .8, { opacity: 1 }, 3.7)
            .to(this.$quote_3, .6, { opacity: 1, marginLeft: "-=15", ease: Cubic.easeOut }, 4.1)
            .to(this.$reference_3, .6, { opacity: 1, ease: Cubic.easeOut }, 4.5);
    }
    Working.prototype.detectMobileOrTablet = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
    Working.prototype.leaveSection = function () {
        TweenMax.set(Working.scope.$loaderRef, { css: { display: "block" } });
        TweenMax.to(Working.scope.$loaderRef, .8, { css: { opacity: 1 }, onComplete: function () {
                //Working.scope.goHome("http://localhost:81/jdmiguel/bin/", 3);
                Working.scope.goHome("http://www.jdmiguel.com/old", 3);
            }
        });
    };
    Working.prototype.goHome = function (currentSection, counterHome) {
        currentSection += "?";
        currentSection += counterHome + "&";
        currentSection = currentSection.substring(0, currentSection.length - 1);
        location.href = currentSection;
    };
    Working.prototype.overLogo = function () {
        TweenMax.to(Working.scope.$logoSvg, .5, { fill: "#1faa1f", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoJ, .5, { color: "#1faa1f", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoD, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoM, .5, { color: "#c11e99", ease: Cubic.easeOut });
    };
    Working.prototype.outLogo = function () {
        TweenMax.to(Working.scope.$logoSvg, .5, { fill: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoJ, .5, { color: "#c11e99", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoD, .5, { color: "#ffffff", ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$logoM, .5, { color: "#ffffff", ease: Cubic.easeOut });
    };
    Working.prototype.overBtnBack = function () {
        TweenMax.to(Working.scope.$circleBack, .5, { scale: 1.5, transformOrigin: "50% 50%", opacity: 0, ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$arrowBack, .5, { strokeWidth: 3, opacity: 1, ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$txtBack, .5, { opacity: 1, ease: Cubic.easeOut });
    };
    Working.prototype.outBtnBack = function () {
        TweenMax.to(Working.scope.$circleBack, .5, { scale: 1, transformOrigin: "50% 50%", opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$arrowBack, .5, { strokeWidth: 3, opacity: .4, ease: Cubic.easeOut });
        TweenMax.to(Working.scope.$txtBack, .5, { opacity: .4, ease: Cubic.easeOut });
    };
    Working.prototype.activeSocialMenu = function () {
        var socialId;
        Working.scope.$socialBtn.each(function (i) {
            Working.scope.$socialBtn.eq(i).data("id", i);
        });
        Working.scope.$socialBtn.on("mouseenter", function (event) {
            socialId = $(event.currentTarget).data("id");
            TweenMax.to(Working.scope.$socialSvg.eq(socialId), .4, { fill: "#c11e99", ease: Cubic.easeOut });
        });
        Working.scope.$socialBtn.on("mouseleave", function (event) {
            TweenMax.to(Working.scope.$socialSvg.eq(socialId), .4, { fill: "#ffffff", ease: Cubic.easeOut });
        });
        Working.scope.$socialBtn.on("click", function (event) {
            var url;
            switch (socialId) {
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
            window.open(url, "_blank");
        });
    };
    return Working;
})();
//# sourceMappingURL=main.min.js.map