var self_url="http://baoguangguang.cn/qax580/qax580game/games/hzdj/index.htm";
if(window.location.href.indexOf(self_url)<0){	
	document.location.href = self_url;
	}
     function getsystem() {
		var b, a, c;
		c = "";
		var d = "Win",
			e = navigator.userAgent;
		c = navigator.platform;
		b = 0 === c.indexOf("Win");
		a = 0 === c.indexOf("Mac");
		c = "X11" === c || 0 === c.indexOf("Linux");
		if (b) {
			if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(e)) if ("NT" === RegExp.$1) switch (RegExp.$2) {
			case "5.0":
				d = "windows_2000";
				break;
			case "5.1":
				d = "windows_XP";
				break;
			case "6.0":
				d = "windows_Vista";
				break;
			case "6.1":
				d = "windows_7";
				break;
			case "6.2":
				d = "windows_8";
				break;
			default:
				d = "windows_NT"
			} else d = "9x" === RegExp.$1 ? "windows_ME" : e.match(/(Windows Phone)\s+([\d.]+)/) ? "WP_" + e.match(/(Windows Phone)\s+([\d.]+)/)[2] : "Ph" === RegExp.$1 ? "WP" : "windows_" + RegExp.$2;
			e.match(/(Android)\s+([\d.]+)/) && (d = "Android_" + e.match(/(Android)\s+([\d.]+)/)[2])
		} else a ? d = e.match(/(iPad).*OS\s([\d_]+)/) || e.match(/(iPhone\sOS)\s([\d_]+)/) ? "iOS" : "Mac" : c ? d = e.match(/(Android)\s+([\d.]+)/) ? "Android_" + e.match(/(Android)\s+([\d.]+)/)[2] : "Linux" : e.match(/Windows Phone/) ? d = "WP" : e.match(/(iPad).*OS\s([\d_]+)/) || e.match(/(iPhone\sOS)\s([\d_]+)/) ? d = "iOS_" + (e.match(/(iPad).*OS\s([\d_]+)/) ? e.match(/(iPad).*OS\s([\d_]+)/)[2] : e.match(/(iPhone\sOS)\s([\d_]+)/)[2]) : e.match(/(Android)\s+([\d.]+)/) && (d = "Android_" + e.match(/(Android)\s+([\d.]+)/)[2]);
		return d
	}	
    function getdevice() {
		var b = "PC",
			a = navigator.userAgent,
			c = a.match(/(iPad).*OS\s([\d_]+)/),
			d = a.match(/(iPhone\sOS)\s([\d_]+)/),
			e = a.match(/(Android)\s+([\d.]+)/),
			f = a.match(/(Windows Phone)\s+([\d.]+)/);
		c && (b = "iPad");
		d && (b = "iPhone");
		e && (a.toLowerCase().match(/mobile/) ? (a.match(/chrome\/([\d.]+)/) && a.toLowerCase().match(/mobile/) || a.toLowerCase().match(/firefox\/([\d.]+)/) && a.toLowerCase().match(/mobile/), b = "Phone") : b = "Pad");
		f && (b = "Phone");
		return b
	}
    function getbrowser() {
		var b = navigator.userAgent.toLowerCase(),
			a = "",
			a = b.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/)[1],
			c = /version.+safari/.test(b) || /safari[\/ ]+([\d.]+)/.test(b),
			d = /chrome\/([\d.]+)/.test(b) || /crios\/([\d.]+)/.test(b),
			e = /firefox/.test(b),
			f = /msie/.test(b),
			g = /opera/.test(b),
			h = /ucbrowser\/([\d.]+)/.test(b),
			k = /maxthon/.test(b),
			l = /lbbrowser/.test(b),
			n = /qqbrowser/.test(b),
			r = /se 2.+x/.test(b),
			a = a.split(".")[0];
		if (h) return a = b.match(/ucbrowser\/([\d.]+)/)[1] ? b.match(/ucbrowser\/([\d.]+)/)[1] : a, "UC_" + a;
		if (k) return a = b.match(/maxthon\/([\d.]+)/)[1] ? b.match(/maxthon\/([\d.]+)/)[1] : a, "AU_" + a;
		if (l) return "LB_" + a;
		if (n) return a = b.match(/qqbrowser\/([\d.]+)/)[1] ? b.match(/qqbrowser\/([\d.]+)/)[1] : a, "QQ_" + a;
		if (r) return "SG_" + a;
		if (e) return "FF_" + a;
		if (g) return "OP_" + a;
		if (d) return "CM_" + a;
		if (c) return b.match(/android/) ? "WK_" + b.match(/webkit\/([\d.]+)/)[1] : "SF_" + a;
		if (f) return "IE_" + a
	}
Zepto(function ($){		
	//随机排序
	function randomsort(a, b) {
		return Math.random()>.5 ? -1 : 1;
	}	
	var windowLoad = function(){
		$("#loading").css({display: "none"});
	};	
	var quesHandle = {
		isGo : true,
		//题目索引
		currentIndex : 0,
		//答题结果
		isRight : false,
		//答对题目总数
		totalRightNum : 0,
		gameOverList : function (n ,flag){
			var s = "";	
			var endtop_show=document.getElementById("endtopshow");			
			if(this.currentIndex >= this.ques.length-1){		
				if(0<=n && n<50){
					s = "通关了，可惜眼力差了点，答对"+ n +"个，你的实力绝对不止于此。";
					document.title = "世界上150个易错字被我纠出"+ n +"个，敢跟我比火眼金睛吗？";
					endtop_show.className = 'img2';
				}else if(50<=n && n<100){
					s = "通关啦，答对"+ n +"个，放到当年高考可能还是上不了清华北大。";
					document.title = "世界上150个易错字被我纠出"+ n +"个，敢跟我比火眼金睛吗？";
					endtop_show.className = 'img3';
				}else if(100<=n && n<150){
					s = "通关啦，答对"+ n +"个，文学素养棒棒哒，眼力和才华绝对爆表！";
					document.title = "世界上150个易错字被我纠出"+ n +"个，敢跟我比火眼金睛吗？";
					endtop_show.className = 'img4';
				}else if(n==150){
					s = "通关啦，150个全答对了，才华无与伦比，值得全世界人民学习！";
					document.title = "世界上150个易错字全被我纠出来了，眼力与才华爆表！";
					endtop_show.className = 'img5';
				}
			}else{
				s = "已答对"+ n +"个，不断学习就能不断进步，中国人就爱中国字儿！";
				document.title = "世界上150个易错字被我纠出"+ n +"个，敢跟我比火眼金睛吗？";
				endtop_show.className = 'img';
			}					
			return s;			
		},
		setQues : function (){
			var currentQ = this.ques[this.currentIndex]
			var randomA =  currentQ.a.sort(randomsort);			
			//初始化答题结果
			this.isRight = false;
			//缓存
			this.ques[this.currentIndex]["randomA"] = randomA;			
			/*$("#dl_word").html(currentQ.q);
			$(".ans_d").each(function(index){
				$(this).html(randomA[index]);
			});	*/
			$("#res_end").html(this.currentIndex+1);
			$("#fleft_show").html(currentQ.a[0]);
			$("#fright_show").html(currentQ.a[1]);
			//console.log(currentQ.a[0]);			
			//生成分享内容
			//if(quesHandle.currentIndex < quesHandle.ques.length){
			//document.title = "元宵猜灯谜："+ $("#dl_word").html() +"（打一字），你知道是什么吗？";					
			//}else{
			//	document.title = "元宵猜灯谜我对了"+ $("#res_tot").html() +"个，太有意思了，赶快来猜！";
			//}			
		},
		//获取正确答案的顺序
		getRightAnswer : function(currentRandomA , index){
			for(var i = 0; i<currentRandomA.length; i++){
				if(currentRandomA[i] == this.ques[index].r){
					return i;
				}
			}
			return 0;
		},
		judgeQues : function (index){
			if(!quesHandle.isGo) return;
			var currentRandomA = this.ques[this.currentIndex]["randomA"];
			var rightIndex = this.getRightAnswer(currentRandomA , this.currentIndex);			
			if(rightIndex == index){
				//正确
				this.isRight = true;
				this.totalRightNum ++;
				//$("#res_tot").html(this.totalRightNum);
				//$(".ans_d").eq(rightIndex).addClass("right");
				if(index==0){
					$("#fleft_btn").addClass("right");
				}else{
					$("#fright_btn").addClass("right");
				}
				var rurl='http://brand.ifeng.com/static/pinyin/collection315.php?num='+(this.currentIndex+1)+'&ri='+this.totalRightNum+'&device='+getsystem()+'&jsonCallback=?';
				if(this.currentIndex==0){
					$.getJSON(rurl,function(msg){});
				}
				if(this.currentIndex >= this.ques.length-1){
					//隔0.6s切换至结果页
					setTimeout(function (){
						$(".result").removeClass("non");
						quesHandle.isGo = true;
						quesHandle.showResultPage();
					},600);	
				}else{
				
					//隔0.6s切换至结果页
					setTimeout(function (){
						//$(".result").removeClass("non");
						quesHandle.isGo = true;
						quesHandle.goNext();
					},600);	
				}
			}else{
				//$(".ans_d").eq(index).addClass("err");
				//隔0.6s切换至结果页
				if(index==0){
					$("#fleft_btn").addClass("err");
				}else{
					$("#fright_btn").addClass("err");
				}
				var rurl='http://brand.ifeng.com/static/pinyin/collection315.php?num='+(this.currentIndex+1)+'&ri='+this.totalRightNum+'&device='+getsystem()+'&jsonCallback=?';
				if(this.currentIndex==0){
					$.getJSON(rurl,function(msg){});
				}
				setTimeout(function (){
					$(".result").removeClass("non");
					quesHandle.isGo = true;
					quesHandle.showResultPage();
				},600);		
			}							
		},
		showResultPage : function (){
			//展示进度
			$("#res_end").html(this.currentIndex+1);			
			if(this.isRight){
				//$(".err_img").hide();
				//$(".res_errWord").hide();
				//$(".err_share").hide();				
				//$(".suc_img").show();
				//$(".res_rightWord").show();
				//$(".suc_share").show();
				//$("#res_end_rightWord").addClass("non");	
				//$("#res_end_errWord").addClass("non");
			}else{
				//$(".suc_img").hide();
				//$(".res_rightWord").hide();
				//$(".suc_share").hide();
				
				//$(".err_img").show();
				//$(".res_errWord").show();
				//$(".err_share").show();			
				//$("#res_end_rightWord").addClass("non");	
				//$("#res_end_errWord").addClass("non");
			}
			//如果答完题
			var rightTolNum = this.totalRightNum;
			if(this.currentIndex >= this.ques.length-1){
				//$(".res_end").removeClass("non");
				$("#res_next").html("再来一遍");
				
				$("#again_next").removeClass("non");
				//$("#res_next").addClass("non");				
				//$(".res_rightWord").hide();	
				//$(".res_errWord").hide();
				if(this.isRight){
					$("#isright").html("已全部答完！");
					var getEndRightWorld = this.gameOverList(rightTolNum ,"right");
					$(".res_rightWord").html(getEndRightWorld).removeClass("non");		
				}else{
					$("#isright").html(this.ques[this.currentIndex].r+" 才是对的");
					var getEndErrWorld = this.gameOverList(rightTolNum ,"err");
					$(".res_rightWord").html(getEndErrWorld).removeClass("non");
					
					//$(".res_errWord").html(getEndErrWorld).removeClass("non");					
				}	
				//console.log($(".res_rightWord").html());
				//清空
				this.clearAll();
				//document.title = "元宵猜灯谜我对了"+ rightTolNum +"个，生动有趣长学问，都来猜吧！";
			}else{
				//$("#again_next").addClass("non");
				$("#res_next").html("继续打假");
				$("#isright").html(this.ques[this.currentIndex].r+" 才是对的");
				var getEndRightWorld = this.gameOverList(rightTolNum ,"right");
				$(".res_rightWord").html(getEndRightWorld).removeClass("non");	
				$("#res_next").removeClass("non");
			}						
		},
		//点击next按钮
		goNext : function (){			
			$("#fleft_btn").removeClass("right").removeClass("err");
			$("#fright_btn").removeClass("right").removeClass("err");
			
			this.currentIndex++;
			this.setQues();
		},
		//清零
		clearAll : function (){
			//$("#res_tot").html(0);			
			this.totalRightNum = 0;
			this.isRight = false;
			this.currentIndex = -1;
		},		
		init : function(o){
			this.ques = o.ques;
			$("#res_t").html(this.ques.length);
		}				
	};	
	/*var addMusic = function (){
		var audio01 = document.getElementById("audio01");
		var audioBtn = document.getElementById("audioBtn");
		document.getElementById('audioBtn').addEventListener('touchstart', function() {
			if (audio01.paused) {
				audio01.play();
				audioBtn.className = 'audioBtn on';
			}else {
				audio01.pause();
				audioBtn.className = 'audioBtn off';
			}
		}, false);
	};*/	
	function init(){
		window.onload = windowLoad;	
		//初始化
		quesHandle.init({
			ques : Ques
		});
		document.getElementById("gameStart").addEventListener('touchstart', function (e) {
		    //初始化第一道题
			quesHandle.setQues();
		    $(".cover").addClass("non");
			$(".content").removeClass("non");
		});
		document.getElementById("res_next").addEventListener('touchstart', function (e) {    
		    $(".result").addClass("non");
			quesHandle.goNext();
		});
		//从头挑战
		/*document.getElementById("again_next").addEventListener('touchstart', function (e) {    
		    $(".result").addClass("non");
		    $("#res_tot").html(0);
			quesHandle.goNext();
		});*/
		//music
		//addMusic();		
		/*$(".ans_d").each(function(index){
			this.addEventListener('touchstart', function (e) {
			    quesHandle.judgeQues(index);				
			});
		})	*/
		document.getElementById("fleft_btn").addEventListener('touchstart', function (e) {
				quesHandle.judgeQues(0);	
				quesHandle.isGo = false;					
			});
		document.getElementById("fright_btn").addEventListener('touchstart', function (e) {
			quesHandle.judgeQues(1);	
			quesHandle.isGo = false;				
		});
		$(".btn02").click(function (){
			$(".share").show();	
		});
		$(".share").click(function (){
			$(this).hide();
			return false;
		});			
	};
	init();
});