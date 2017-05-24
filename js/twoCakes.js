// 产品大小图展示部分开始 
var date_all=[];
	function fun(date_new)
	{
		date_all=date_new.data.produce;
	}
 function twoCakes()
{
	cakeProduce(date_all);
function cakeProduce(date_all)
{
	var mousse = $("mousse");
	var span01 = document.createElement("span");
	var span02 = document.createElement("span");
	span01.className = "span01";
	span02.className = "span02";
	span01.innerHTML = date_all[0].m_name01;
	span02.innerHTML = date_all[0].m_name02;
	mousse.appendChild(span01);
	mousse.appendChild(span02);

	// 创建慕斯蛋糕简介部分
	var introduce = $("introduce");
	var spanIn01 = document.createElement("span");
	var spanIn02 = document.createElement("span");
	var spanIn03 = document.createElement("span");
	var spanIn04 = document.createElement("span");
	spanIn01.className = "spanIn01";
	spanIn02.className = "spanIn02";
	spanIn03.className = "spanIn03";
	spanIn04.className = "spanIn04";
	spanIn01.innerHTML = date_all[0].m_produce[0].m_produce_name;
	spanIn02.innerHTML = date_all[0].m_produce[0].m_produce_english;
	spanIn03.innerHTML = date_all[0].m_produce[0].m_produce_detail;
	spanIn04.innerHTML = "<a href=''>"+date_all[0].m_produce[0].m_produce_more+"</a>";
	introduce.appendChild(spanIn01);
	introduce.appendChild(spanIn02);
	introduce.appendChild(spanIn03);
	introduce.appendChild(spanIn04);

	
 // 创建小图切换部分
	var ulBox = $("ulBox");
	var showBox = $("showBox");
	var first = $("first");
	var lisUlBox = ulBox.children;
	var smallImg = date_all[0].m_smallImgAll;
	var bigImg = date_all[0].m_bigImgAll;
	console.log(smallImg);
	for (var q = 0; q < lisUlBox.length; q++) 
	{
		lisUlBox[q].index = q;
		lisUlBox[q].style.backgroundImage = "url("+smallImg[q]+")";
		lisUlBox[q].onmouseover = function()
		{
			showBox.style.backgroundImage = "url("+bigImg[this.index]+")";
			lisUlBox[this.index].className = "transformBig";
            first.innerHTML = "0"+((this.index)+1);
		}
		lisUlBox[q].onmouseout = function()
		{
			lisUlBox[this.index].className = "";
		}

	};

	// 创建黄色背景慕斯蛋糕简介部分
	var introduce02 = $("introduce02");
	var spanIn09 = document.getElementsByClassName('spanIn09')[0];
	var spanIn05 = document.createElement("span");
	var spanIn06 = document.createElement("span");
	var spanIn07 = document.createElement("span");
	var spanIn08 = document.createElement("span");
	spanIn05.className = "spanIn05";
	spanIn06.className = "spanIn06";
	spanIn07.className = "spanIn07";
	spanIn08.className = "spanIn08";
	spanIn05.innerHTML = date_all[0].m_produce02[0].m_produce_name;
	spanIn06.innerHTML = date_all[0].m_produce02[0].m_produce_english;
	spanIn07.innerHTML = date_all[0].m_produce02[0].m_produce_detail;
	spanIn08.innerHTML = "<a href='#'>"+date_all[0].m_produce02[0].m_produce_more+"</a>";
	introduce02.insertBefore(spanIn05,spanIn09);
	introduce02.insertBefore(spanIn06,spanIn09);
	introduce02.insertBefore(spanIn07,spanIn09);
	introduce02.insertBefore(spanIn08,spanIn09);

	// 创建给你最甜的部分
	var chocolateImg = $("chocolateImg");
	var foreLis = chocolateImg.children[0].children;
	console.log(foreLis);
	var foreImg = date_all[0].m_foreImg;
	for (var p = 0; p < foreLis.length; p++) 
	{
		foreLis[p].style.backgroundImage = "url("+foreImg[p]+")";
	};

	// 创建给你最甜的简介部分
	var introduce03 = $("introduce03");
	var spanIn10 = document.createElement("span");
	var spanIn11 = document.createElement("span");
	var spanIn12 = document.createElement("span");
	var spanIn13 = document.createElement("span");
	var spanIn14 = document.createElement("span");
	spanIn10.className = "spanIn10";
	spanIn11.className = "spanIn11";
	spanIn12.className = "spanIn12";
	spanIn13.className = "spanIn13";
	spanIn14.className = "spanIn14";
	spanIn10.innerHTML = date_all[0].m_produce03[0].m_produce_name;
	spanIn11.innerHTML = date_all[0].m_produce03[0].m_produce_english;
	spanIn12.innerHTML = date_all[0].m_produce03[0].m_produce_detail;
	spanIn13.innerHTML = date_all[0].m_produce03[0].m_produce_detail02;
	spanIn14.innerHTML = "<a href=''>"+date_all[0].m_produce03[0].m_produce_more+"</a>";
	introduce03.appendChild(spanIn10);
	introduce03.appendChild(spanIn11);
	introduce03.appendChild(spanIn12);
	introduce03.appendChild(spanIn13);
	introduce03.appendChild(spanIn14);

	// 创建巧克力熔岩简介部分
	var introduce04 = $("introduce04");
	var spanIn17 = document.getElementsByClassName('spanIn17')[0];
	var spanIn15 = document.createElement("span");
	var spanIn16 = document.createElement("span");
	spanIn15.className = "spanIn15";
	spanIn16.className = "spanIn16";
	spanIn15.innerHTML = date_all[0].m_produce04[0].m_produce_name;
	spanIn16.innerHTML = date_all[0].m_produce04[0].m_produce_detail;
	introduce04.insertBefore(spanIn15,spanIn17);
	introduce04.insertBefore(spanIn16,spanIn17);
	
 }


}







