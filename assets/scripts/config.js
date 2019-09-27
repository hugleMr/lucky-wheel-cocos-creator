


window.localize = {
    data: {
        'vi':{
            'title':'Truy tìm mật mã để mở khoá kho báu!',
            'hint':'Hint:',
            'question':'Big C đã có mặt tại bao nhiêu tỉnh thành tại Việt Nam?',
            'guide_title':'Chạm vào ổ khóa cái rương để giải mật mã với 2 số.',
            'input_title':'Nhập mật mã để mở rương',
            'correct_title':'GIẢI MÃ THÀNH CÔNG!',
            'correct_des':'Chiếc rương đã được mở khóa thành công. Bạn đã có {0} vé thưởng!',
            'congrats':'CONGRATS!',
            'input_wrong_title':'Hãy suy nghĩ thật kỹ và thử lại',
            'unlock_button':'MỞ KHÓA',
            'claim_button':'NHẬN VÉ',
        },
        'en':{
            'title':'Find the secret number to unlock the chest!',
            'hint':'Câu hỏi:',
            'question':'How many provinces in Vietnam have Big C?',
            'guide_title':'Tap on the chest and enter the right combination of 2 digits',
            'input_title':'Enter passcode to unlock the Chest',
            'correct_title':'MISSION COMPLETED!',
            'correct_des':'The chest has been unlock. Got {0} reward tickets now!',
            'congrats':'CHÚC MỪNG BẠN!',
            'input_wrong_title':'Think carefully and try again',
            'unlock_button':'UNLOCK',
            'claim_button':'CLAIM TICKETS',
        },
    },

    languge : 'vi',

    text: function (key) {
        return this.data[this.languge][key];
    },

    textFormat: function(key, array){
        var _value = this.data[this.languge][key];
        for(var i = 0; i < array.length; i++){
            _value=_value.replace('{' + i + '}' ,array[i]);
        }
        return _value;
    }
}

window.config = {
    max_score: 5,
}