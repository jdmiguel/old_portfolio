///<reference path="typings/jquery.d.ts"/>
/// <reference path="typings/snapsvg.d.ts"/>
/// <reference path="typings/greensock.d.ts"/>

class SvgInput{

    static scope:any;

    private numSelected:number;
    private parent:any;
    private containerSelected:any;
    private snapObj:any;
    private pathSelected:any;
    private accessClassContainer:any;

    private paths = {
        reset: <any> null,
        active: <any> null
    };

    public inputAvailable = {
        name: <boolean> true,
        email: <boolean> true,
        message: <boolean> true
    };

    private onError:boolean;

    constructor(n:number){
        SvgInput.scope = this;
        SvgInput.scope.numSelected = n;

        var isButton:boolean = false;

        SvgInput.scope.parent =  document.querySelectorAll('.elastic')[SvgInput.scope.numSelected];
        if(SvgInput.scope.parent.getAttribute('id') == 'send-wrap') isButton = true;
        if(!isButton) SvgInput.scope.parent.addEventListener('click',SvgInput.scope.goElastic);
    }

    private goElastic(e):void{
        console.log('goElastic');
        var pathSelected:any;
        pathSelected = SvgInput.scope.getPath(e.currentTarget);

        pathSelected.stop().animate({'path':SvgInput.scope.paths.active}, 200, mina.easein, function() {
            pathSelected.stop().animate({'path':SvgInput.scope.paths.reset}, 600, mina.elastic);
        });
    }

    private getPath(target:any):any{
        var id = target.getAttribute('id');
        var pathSelected:any;

        if(id == 'send-wrap') return;
        SvgInput.scope.accessClassContainer = target.childNodes[1];
        SvgInput.scope.snapObj = Snap(SvgInput.scope.accessClassContainer.childNodes[0]);
        pathSelected = SvgInput.scope.snapObj.select('path');

        SvgInput.scope.paths.reset = pathSelected.attr('d');
        SvgInput.scope.paths.active = SvgInput.scope.accessClassContainer.getAttribute('data-morph-active');

        return pathSelected;
    }

    public testInput(field:string,test:string):void{
        console.log('field: ' + field);
        var pathSelected:any;
        switch(field){
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
        test == 'ok' ? pathSelected.animate({'fill':'#f0d916'}, 500, mina.easeinout) : pathSelected.animate({'fill':'#fd022b'}, 500, mina.easeinout);
    }
}

