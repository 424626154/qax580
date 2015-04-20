﻿function play68_init() {
	updateShare(0);
}

function updateShare(bestScore) {
	imgUrl = 'http://baoguangguang.cn/qax580/qax580game/games/feidegenggao/icon.png';
	lineLink = 'http://baoguangguang.cn/qax580/qax580game/games/feidegenggao/';
	descContent = "我要飞的更高，快来一起飞起来吧！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我可以飞到" + bestScore + "米，你能飞多高呢？";
	}
	else{
		shareTitle = "我要飞的更高，快来一起飞起来吧！";
	}
}