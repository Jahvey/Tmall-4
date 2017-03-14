/* 搜索框*/
			var oLabel = document.getElementById('lb');
			var oInput = document.getElementById('mq');

			function inputSrc() {
				oLabel.style.visibility = "hidden";
			}

			function backSrc() {
				oInput.value = "";
				oLabel.style.visibility = "visible";
			}

			function checkSrc() {
				if(oInput.value == "") {
					oInput.value = oLabel.innerText;
				}
			}
			/*******遮罩层效果*********/

			var oMask = document.getElementById('zhe');
			var img = document.getElementById("myimg");
			var bigImg = document.getElementById("bigImg");
			var showBig = document.getElementsByClassName('showBig')[0];
			/*鼠标在图片上移动,鼠标为遮罩层的中心*/

			img.addEventListener('mouseover', function(event) {
				event = event || window.event;
				oMask.style.display = "block";
				showBig.style.display = 'block';

				var mouseX = event.offsetX;
				var mouseY = event.offsetY;
				var oTop;
				var oLeft;
				if(event.target.nodeName == "IMG") {
					if(mouseX < 100) {
						oLeft = 0;
					} else if(mouseX >= 100 && mouseX <= 320) {
						oLeft = mouseX - 100;
					} else {
						oLeft = 220;
					}

					if(mouseY < 100) {
						oTop = 0;
					} else if(mouseY >= 100 && mouseY <= 320) {
						oTop = mouseY - 100;
					} else {
						oTop = 220;
					}
					oMask.style.left = oLeft + 'px';
					oMask.style.top = oTop + 'px';

				} else if(event.target.nodeName == 'SPAN') {
					console.log('SPAN');
				}
			}, false);
			oMask.addEventListener('mouseout', function() {
				oMask.style.display = 'none';
				showBig.style.display = 'none';
			}, false);
			/*鼠标在遮罩层内移动，动态改变遮罩层的中心坐标*/
			oMask.addEventListener('mousemove', function(event) {
				event = event || window.event;
				if(event.target.nodeName == 'SPAN') {
					oMask.style.display = 'inline-block';
					var mouseX;
					var mouseY;
					var oTop;
					var oLeft;
					mouseX = event.offsetX;
					mouseY = event.offsetY;
					oLeft = mouseX - 100;
					oTop = mouseY - 100;
					var newx = parseInt(oMask.style.left) + oLeft;
					var newy = parseInt(oMask.style.top) + oTop;
					if(newx < 0) {
						newx = 0;
					} else if(newx > 220) {
						newx = 220;
					}
					oMask.style.left = newx + 'px';
					if(newy < 0) {
						newy = 0;
					} else if(newy > 220) {
						newy = 220;
					}
					oMask.style.top = newy + 'px';
					bigImg.style.left = (-2.1 * newx).toString() + 'px';
					bigImg.style.top = (-2.1 * newy).toString() + 'px';
				}
			}, true);
			/**********切换图片**********/
			var srcs = ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg', 'img/e.jpg'];
			var preImgindex = 2;
			var newImgindex = null;
			var ul = document.getElementsByClassName('img_list')[0];
			var smallimgs = document.getElementsByClassName('smallimg');
			ul.addEventListener('mouseover', function(event) {
				event = event || window.event;
				if(event.target.nodeName == 'IMG') {

					var index = event.target.getAttribute("num");
					newImgindex = parseInt(index);
					img.src = srcs[newImgindex];
					bigImg.src = srcs[newImgindex];
					smallimgs[preImgindex].setAttribute('border', 'none');
					event.target.setAttribute('border', '2px solid black');
					preImgindex = newImgindex;

				}
			}, false);
			
		/*右侧购物车*/
		
var shopBtn = document.getElementsByClassName('shop')[0];//点击的购物车
var content = document.getElementById("content");
var shopCar = document.getElementById("shopcar");  //大模块
var close = document.getElementsByClassName('close')[0];
var clickN = 0;
var oRight = 0;


close.addEventListener('click', function(event) {
	event=event||window.event;
	clickN = clickN + 1;
		if(clickN % 2 == 1) {	
		close.innerHTML = 'x';
		starMove(shopCar,0,10);	//-280-->0
	} else {
		close.innerHTML = '<';
		starMove(shopCar,-280,-10); //0--->-280
	}
	event.stopPropagation();
}, false);

var body = document.getElementsByTagName('body')[0];
body.addEventListener('click',function(event){
	event =event||window.event;
	if(event.target.nodeName=='BODY'){
		if( parseInt(shopCar.style.right)==0){
		close.innerHTML = '<';
		starMove(shopCar,-280,-10); //0--->-280
	}
	}
	
	event.stopPropagation();
});


var timer1 = null;
function starMove(obj,iTarget,iSpeed){ 
	clearInterval(timer1);	
	timer1 = setInterval(function(){
		if( parseInt(obj.style.right)==iTarget ){
			clearInterval(timer1);
		}else{			
			obj.style.right =(parseInt(window.getComputedStyle(obj,null).right)+iSpeed).toString()+'px';
			console.log(getComputedStyle(obj,null).right );
		}
	},10);
}

/*右侧模块切换动作*/
var shopBtn = document.getElementsByClassName('shop')[0];
var moneyBtn = document.getElementsByClassName('money')[0];
var likeBtn = document.getElementsByClassName('like')[0];
var starBtn = document.getElementsByClassName('star')[0];
var clockBtn = document.getElementsByClassName('clock')[0];
var timer = null;
var preObj = null;
var thisObjId = '';
var thisObj = null;
var cha = 0;

shopBtn.addEventListener('click',function(){
	thisObjId = 'my-'+this.className;	
	thisObj = document.getElementById(thisObjId);	
	if(thisObj==preObj){
		return;
	}
	console.log(thisObj.id);
	thisObj.style.zIndex = 2;
	thisObj.style.top = '100vh';
//	console.log(preObj.id);
	startMove(thisObj,thisObjId);		
});	

moneyBtn.addEventListener('click',function(){
	thisObjId = 'my-'+this.className;
	thisObj = document.getElementById(thisObjId);	
	if(thisObj==preObj){
		return;
	}	
	thisObj.style.zIndex = 2;
	thisObj.style.top = '100vh';		
	startMove(thisObj,thisObjId);	
});

likeBtn.addEventListener('click',function(){
	thisObjId = 'my-'+this.className;
	thisObj = document.getElementById(thisObjId);	
	if(thisObj==preObj){
		return;
	}
	thisObj.style.zIndex = 2;
	thisObj.style.top = '100vh';
//	console.log(preObj.id);
	startMove(thisObj,thisObjId);	
});

starBtn.addEventListener('click',function(){
	thisObjId = 'my-'+this.className;
	thisObj = document.getElementById(thisObjId);
	if(thisObj==preObj){
		return;
}
	
	thisObj.style.zIndex = 2;
	thisObj.style.top = '100vh';
//	console.log(preObj.id);
	startMove(thisObj,thisObjId);	
});
clockBtn.addEventListener('click',function(){	
	thisObjId = 'my-'+this.className;
	thisObj = document.getElementById(thisObjId);	
	if(thisObj==preObj){
		return;
	}
	thisObj.style.zIndex = 2;
	thisObj.style.top = '100vh';
		startMove(thisObj,thisObjId);
});
	
function startMove(obj,nowid) {
//	console.log(obj+preObj);
	clearInterval(timer);
	timer = setInterval(function() {
//		obj.style.top = obj.offsetTop - 5 + 'px';
		cha =  Math.ceil(0.2*obj.offsetTop)		 //缓冲效果
			obj.style.top = obj.offsetTop -cha+'px';
			console.log(obj.offsetTop);
				
		if(obj.offsetTop <= 0) {
			if(preObj){
				preObj.style.zIndex  = 0;				
			}
			obj.style.zIndex  =1;				
			preObj = document.getElementById(nowid);
//			console.log(preObj.id);
			clearInterval(timer);
		}
	}, 30);
}

/***********加入购物车的动画************/

var btnlf = document.getElementById("purchaseBtn");
var btnrt = document.getElementById("addBtn");
btnrt.addEventListener('click',function(e){
	e = e||window.event;
	console.log(e.target.nodeName);
	console.log();
});


