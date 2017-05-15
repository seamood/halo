
var data_new = [];
	function orderFun(data_all)
	{
		data_new = data_all.data.information;
	}
window.onload = function()
{
	function $(name)
	{
		return document.getElementById(name);
	}
    creatAll(data_new);
	function creatAll(data_new)
	{
        var creatContent = $("creatContent");
        for (var i = 0; i < data_new.length; i++) 
        {
        	// 创建第一条订单盒子
        	var first_div = document.createElement("div");
        	first_div.className = "first_div";
        	creatContent.appendChild(first_div);
        	console.log(creatContent);

        	// 创建第一条订单图片
        	var first_img = document.createElement("img");
        	first_img.className = "first_img";
        	first_img.src = data_new[i].o_img_url;
        	first_div.appendChild(first_img);

        	// 创建第一条订单日期
        	var first_date = document.createElement("div");
        	first_date.className = "first_date";
        	first_date.innerHTML = data_new[i].o_data;
        	first_div.appendChild(first_date);

        	// 创建第一条订单名称
        	var first_name = document.createElement("div");
        	first_name.className = "first_name";
        	first_name.innerHTML = data_new[i].o_name;
        	first_div.appendChild(first_name);

        	// 创建第一条订单数量
        	var first_number = document.createElement("div");
        	first_number.className = "first_number";
        	first_number.innerHTML = data_new[i].o_number;
        	first_div.appendChild(first_number);

        	// 创建第一条订单状态
        	var first_state = document.createElement("div");
        	first_state.className = "first_state";
        	first_div.appendChild(first_state);

            var first_state_text = document.createElement("span");
            first_state_text.className = "first_state_text";
            first_state_text.innerHTML = data_new[i].o_state;
            first_state.appendChild(first_state_text);
            if (first_state_text.innerHTML=="已消费") 
                {
                    var evaluateDiv = document.createElement("div");
                    evaluateDiv.className = "evaluateDiv";
                   first_state.appendChild(evaluateDiv);
                   evaluateDiv.innerHTML = "<a href=''>评价</a>";
                }else if (first_state_text.innerHTML=="未消费") 
                {
                    var deliveDiv = document.createElement("div");
                    deliveDiv.className = "deliveDiv";
                    first_state.appendChild(deliveDiv);
                    deliveDiv.innerHTML = "<a href=''>查看配送时间</a>";
                };


        	// 创建第一条订单金额
        	var first_money = document.createElement("div");
        	first_money.className = "first_money";
        	first_money.innerHTML = data_new[i].o_money;
        	first_div.appendChild(first_money);
        };
	}
     var navigator_li_id=$('navigator_li_id');
        var lis=navigator_li_id.children[0].children;
        for(var i=0;i<lis.length;i++)
        {
            lis[i].onclick=function ()
            {
                for(var j=0;j<lis.length;j++){lis[j].style.color="#9e5130";}
                this.style.color="#fff";
            }
        }
        var navigator_pic_ids=$('navigator_pic_id');
        var imgs=navigator_pic_ids.children;
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].index=i;
            imgs[i].onmouseover=function () 
            {
                for(var j=0;j<imgs.length;j++){imgs[j].src="../img/header_icon"+(j+1)+".png";}
                this.src="../img/header_icon"+(this.index+1)+"jiaohu.png";
            }
        }
}