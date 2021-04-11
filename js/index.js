var timeD = new Vue({
    el: ".container",
    data: {
        hours: 0,
        minutes: 0,
        seconds: 0,
        hostr: "00",
        mistr: "00",
        sestr: "00",
        setTime: "00:00:00",
        seId: 0
    },
    mounted: function () {
        this.disableInfo();
        this.inttim();
        var that = this;
        this.seId = setInterval(function(){
            var time = new Date();
            that.hours = parseInt(time.getHours());
            that.minutes = parseInt(time.getMinutes());
            that.seconds = parseInt(time.getSeconds());
            that.hostr = that.hours < 10 ? '0' + that.hours : '' + that.hours;
            that.sestr = that.seconds < 10 ? '0' + that.seconds : '' + that.seconds;
            that.mistr = that.minutes < 10 ? '0' + that.minutes : '' + that.minutes;
        },1000);
    },
    methods: {
        gettime: function () {
            this.timing()
        },
        refresh: function () {
            clearInterval(this.seId);
            this.setTimer();
        },
        setT: function () {
            clearInterval(this.seId);
            this.setTimer();
        },
        ddT:function(){
            clearInterval(this.seId);
            var that = this;
            this.seId = setInterval(function(){
                var time = new Date();
                that.hours = parseInt(time.getHours());
                that.minutes = parseInt(time.getMinutes());
                that.seconds = parseInt(time.getSeconds());
                that.hostr = that.hours < 10 ? '0' + that.hours : '' + that.hours;
                that.sestr = that.seconds < 10 ? '0' + that.seconds : '' + that.seconds;
                that.mistr = that.minutes < 10 ? '0' + that.minutes : '' + that.minutes;
            },1000);
        },
        timing() {
            var that = this;
            this.seId = setInterval(function () {
                if (that.hours !== 0 && that.minutes === 0 && that.seconds === 0) {
                    that.minutes = 59;
                    that.seconds = 59;
                    that.hours -= 1;
                } else if (that.minutes !== 0 && that.seconds === 0) {
                    that.minutes -= 1;
                    that.seconds = 59;
                } else if (that.hours === 0 && that.minutes === 0 && that.seconds === 0) {
                    that.minutes = 0;
                    that.seconds = 0;
                    clearInterval(that.seId);
                    that.play();
                } else {
                    that.seconds -= 1;
                }
                var ho = that.hours;
                var se = that.seconds;
                var mi = that.minutes;
                that.hostr = ho < 10 ? '0' + ho : '' + ho;
                that.sestr = se < 10 ? '0' + se : '' + se;
                that.mistr = mi < 10 ? '0' + mi : '' + mi;
            }, 1000);
        },
        setTimer() {
            var time = this.setTime.split(":");
            this.hours = Number(time[0]);
            this.minutes = Number(time[1]);
            this.seconds = Number(time[2]);
            this.hostr = this.hours < 10 ? '0' + this.hours : '' + this.hours;
            this.sestr = this.seconds < 10 ? '0' + this.seconds : '' + this.seconds;
            this.mistr = this.minutes < 10 ? '0' + this.minutes : '' + this.minutes;
        },
        inttim() {
            this.setTime = "00:00:00"
        },
        play(){
            const audio = document.getElementById("au");
            audio.play();
        },
        pause(){
            const audio = document.getElementById("au");
            audio.pause();
        },
        disableInfo() {  

                document.onkeydown = function() {  
            
                    var e = window.event || arguments[0];  
            
                    //屏蔽F12  
            
                    if(e.keyCode == 123) {  
            
                        return false;  
            
                        //屏蔽Ctrl+Shift+I  
            
                    } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {  
            
                        return false;  
            
                        //屏蔽Shift+F10  
            
                    } else if((e.shiftKey) && (e.keyCode == 121)){  
            
                        return false;  
            
                    }  
            
                };  
            
                //屏蔽右键单击  
            
                document.oncontextmenu = function() {  
            
                    return false;  
            
                }  
            
            }
    }
})


