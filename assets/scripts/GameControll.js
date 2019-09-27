
cc.Class({
    extends: cc.Component,

    properties: {
        
        uiHome: {
            default: null,
            type: cc.Node
        },
        uiResult: {
            default: null,
            type: cc.Node
        },
        txtScore:{
            default: null,
            type: cc.Label
        },
        touchAudio:{
            default: null,
            type: cc.AudioClip
        },
        successAudio:{
            default: null,
            type: cc.AudioClip
        },
        wrongAudio:{
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(window.location.href);
        var search = this.getUrlVars();
        console.log(search);
        window.localize.languge = search['lang'] == null? 'vi' : search['lang'];
        window.config.max_score = search['max_score'] == null? 5 : Number(search['max_score']);
        this.score = Math.round(Math.random() * (window.config.max_score - 1)) + 1;
    },

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    },

    start () {

    },

    // update (dt) {},

    onSoungClick(){
        cc.audioEngine.playEffect(this.touchAudio, false);
    },

    onBack(){
        confirmQuitGame();
    },
    onFinish(){
        gameComplete('action=finish&data=' + this.score);
    }
});
