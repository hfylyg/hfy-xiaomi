/*
* @Author: Administrator
* @Date:   2017-11-07 16:49:00
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-28 18:59:26
*/

window.onload=function(){
	let itme=document.getElementsByClassName('itme');
	// let ul1=document.getElementsByClassName('bannerlist')[0];
	let lis=document.getElementsByClassName('bannerlist-li');

	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			itme[i].style.display="block";
		}
		lis[i].onmouseout=function(){
			itme[i].style.display="none";
		}
	} 
	/*for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			itme[this.index].style.display="block;"
		}
		lis[i].onmouseout=function(){
			itme[this.index].style.display="none";
		}
	}*/






/*		let navdown=document.getElementsByClassName("nav-down");
		
		let navli=document.getElementsByClassName('nav-li');
		
		for(let i=0;i<navli.length-2;i++){
				navli[i].onmouseover=function(){
				
						// navdown[i].style.height="230px";
						animate(navdown[i],{height:230});
					
			
				
			}
			navli[i].onmouseout=function(){
			
				// navdown[i].style.height=0;
				animate(navdown[i],{height:0});
				
			}			
			
		}*/

	let navcen=document.getElementsByClassName('nav-center')[0];
	let navle=navcen.getElementsByTagName('li');
	let nit=document.getElementsByClassName('nav-items')[0];
	let navs=document.querySelectorAll('.nav-item');
		console.log(nit);
	navcen.onmousemove=function(){
		
		
	}
	for(let i=0;i<navle.length-2;i++){
		navle[i].onmouseenter=function(){
			nit.style.height='290px';
			navs[i].style.display="block";
		}
	}


	
	navcen.onmouseout=function(){
		
		
	}
	for(let i=0;i<navle.length-2;i++){
		navle[i].onmouseleave=function(){
			nit.style.height='0';
			navs[i].style.display="none";
		}
	}
	





		let shopbox=document.getElementsByClassName("shop-box");
		let navbarshop=document.getElementsByClassName("navbar-right-shop");
		console.log(shopbox,navbarshop);
		navbarshop[0].onmouseover=function(){
			shopbox[0].style.height="80px";
		}
		navbarshop[0].onmouseout=function(){
			shopbox[0].style.height=0;
		}

		function jia(num){
		let content=document.getElementsByClassName("content")[num];
		let heardright=document.getElementsByClassName("head-right")[num];
		console.log(content,heardright);
		let contentright=content.getElementsByClassName("content-right");
		let headright1=heardright.getElementsByClassName("head-right1");
		//console.log(contentright.length,headright1.length);
		contentright[0].style.display="block";
		headright1[0].className="head-right1 hover";
		for(let i=0;i<headright1.length;i++){
			headright1[i].onmouseover=function(){
				for(let j=0;j<headright1.length;j++){
					contentright[j].style.display="none";
					headright1[j].className="head-right1";
				}
				contentright[i].style.display="block";
				headright1[i].className="head-right1 hover";
			}
		}
	}
	var jiadian=new jia(0);
	var zhineng=new jia(1);

		//banner轮播图
		let bannerpic=document.getElementsByClassName("banner-pic")[0];
		let bannerli=bannerpic.getElementsByTagName("li");

		let btn=document.getElementsByClassName("banner-btn")[0];
		let btns=btn.getElementsByTagName("li");

		let bannerleft=document.getElementsByClassName("banner-left")[0];
		let bannerright=document.getElementsByClassName("banner-right")[0];

		let banner=document.getElementsByClassName("banner")[0];


		let time1=setInterval(fn,2000);
		let num=0;
		function fn(){
			num++;
			if(num==bannerli.length){
				num=0;
			}
			bannerli[0].style.opactity=1;
			for(let i=0;i<bannerli.length;i++){

				// bannerli[i].style.display="none";
				bannerli[i].className="";
				//bannerli[i].style.zIndex=5;
				btns[i].style.background="#827073";
			}
			// bannerli[num].style.display="block";
			bannerli[num].className="opacity";
			// bannerli[num].style.opactity=1;
			//bannerli[num].style.zIndex=10;
			btns[num].style.background="#b59ca0";
		}
		bannerright.onclick=function(){
			fn();
		}
		bannerleft.onclick=function(){
			fn1();
		}
		function fn1(){
			num--;
			if(num==-1){
				num=bannerli.length-1;
			}
			for(let i=0;i<bannerli.length;i++){

				// bannerli[i].style.display="none";
				// bannerli[i].style.opactity=0;
				bannerli[i].className="";
				//bannerli[i].style.zIndex=5;
				btns[i].style.background="#827073";
			}
			// bannerli[num].style.display="block";
			// bannerli[num].style.opactity=1;
			bannerli[num].className="opacity";
			//bannerli[num].style.zIndex=10;
			btns[num].style.background="#b59ca0";
		}

		banner.onmouseover=function(){
			clearInterval(time1);
		}
		banner.onmouseout=function(){
			time1=setInterval(fn,2000);
		}

			for(let i=0;i<btns.length;i++){
				btns[i].onclick=function(){
					btns[num].style.background="#827073";
					btns[i].style.background="#b59ca0";
					// bannerli[num].style.display="none";
					// bannerli[num].style.opactity=0;
					bannerli[num].className="";
					//bannerli[num].style.zIndex=5;
					// bannerli[i].style.display="block";
					// bannerli[i].style.opactity=1;
					bannerli[i].className="opacity";
					//bannerli[i].style.zIndex=10;
					num=i;
			}
		}


		function neirong(num){
		let neironglb=document.getElementsByClassName("neirong-lb");
		let biaoyu=neironglb[num].getElementsByClassName("biaoyu");
		let widths=neironglb[num].offsetWidth;
		

		let back=document.getElementsByClassName("zuofh")[num];
		let forward=document.getElementsByClassName("youfh")[num];
		
		let neirongbtn=document.getElementsByClassName("neirong-btn");
		let btnlist1=neirongbtn[num].getElementsByTagName("li");

		let flag=true;
		let now=next=0;
		///let time2=setInterval(fn4,1000);
		function fn3(){
			next++;
			if(next==biaoyu.length){
				next=biaoyu.length-1;
				return;
			}
			biaoyu[next].style.left=`${widths}px`;
			animate(biaoyu[now],{left:-widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		function fn4(){
			next--;
			if(next==-1){
				next=0;
				return;
			}
			biaoyu[next].style.left=`-${widths}px`;
			animate(biaoyu[now],{left:widths});
			animate(biaoyu[next],{left:0},btnfn);
			now=next;

		}
		back.onclick=function(){
			flag=true;
			if(flag){
				fn4();
				flag=false;
			}
			
		}
		forward.onclick=function(){
			flag=true;
			if(flag){
				fn3();
				flag=false;
			}

		}

		function btnfn(){
			for(let i=0;i<btnlist1.length;i++){
				btnlist1[i].className="";
			}
			btnlist1[now].className="btnhot";

			flag=true;
		}


		for(let i=0;i<btnlist1.length;i++){
			btnlist1[i].onclick=function(){
				if(i==now){return}
				else if(i<now){
					animate(biaoyu[now],{left:widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="";
					}
					btnlist1[i].className="btnhot";
				}
				else if(i>now){
					animate(biaoyu[now],{left:-widths});
					animate(biaoyu[i],{left:0});
					for(let j=0;j<btnlist1.length;j++){
						btnlist1[j].className="";
					}
					btnlist1[i].className="btnhot";
				}
				now=next=i;
			}
		}
	}


	var nei1=new neirong(0);
	var nei2=new neirong(1);
	var nei3=new neirong(2);
	var nei4=new neirong(3);
	 


	//单品轮播图
	let danpin=document.getElementsByClassName("danpin")[0];
	let danbox=danpin.getElementsByClassName("danpin-box");
	let dpboxcount=parseInt(danpin.childElementCount);
	let dpboxwidth=danbox[0].offsetWidth;
	let dpboxmarginR=parseInt(getComputedStyle(danbox[0],null).marginRight);
	let dpwidth=(dpboxwidth+dpboxmarginR)*dpboxcount;
	danpin.style.width=`${dpwidth}px`;

	let btnL=document.getElementsByTagName("button")[0];
	let btnR=document.getElementsByTagName("button")[1];

	
	btnR.onclick=function(){
		btnR.className="hot";
		btnL.className="";
		danpin.style.transform=`translateX(${-1240}px)`;

	}
	btnL.onclick=function(){
		btnL.className="hot";
		btnR.className="";
		danpin.style.transform=`translateX(0)`;

	}

}