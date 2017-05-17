
console.log("s");
var aboutus_enviroment = document.getElementById("aboutus_enviroment");
 var data_new=[],all_data=new Array();

function fn(data_all) {
	
   
	data_new = data_all.data.list;	
	all_data = data_all.data.list;
	console.log(data_new);
    console.log(all_data);
}
window.onload=function(){
   var aboutus_enviroment=document.getElementById("aboutus_enviroment");
   console.log(data_new);
   console.log(data_new.length);
  for(var i=0;i<data_new.length;i++){
    console.log(data_new.length);
    if(i%2!==0){
     var li=document.createElement("li"); 
       li.className="li_current";
       aboutus_enviroment.appendChild(li);


     var aboutus_title=document.createElement("p");
    aboutus_title.innerHTML=data_new[i].aboutus_title;
    li.appendChild(aboutus_title);
    aboutus_title.style.textAlign="center";
        aboutus_title.className="aboutus_title_style";
             aboutus_title.style.fontSize=20+"px";
    

    var aboutus_border_bottom=document.createElement("div");
     aboutus_border_bottom.className="aboutus_style_bottom";
        li.appendChild(aboutus_border_bottom);

    var aboutus_text=document.createElement("p");
    aboutus_text.innerHTML=data_new[i].aboutus_text;
    li.appendChild(aboutus_text);
    aboutus_text.style.display="bloak";
    aboutus_text.style.width=270+"px";
     aboutus_text.style.fontSize=12+"px";
     aboutus_text.className="aboutus_text_style"
     var aboutus_img=document.createElement("img");

    aboutus_img.src=data_new[i].aboutus_img_url;
     li.appendChild(aboutus_img);
      aboutus_img.className="aboutus_img_style";
     }
  	 else if(i%2===0){
    var li=document.createElement("li");
    li.className="li_current";
    aboutus_enviroment.appendChild(li);
    var aboutus_img=document.createElement("img");
    aboutus_img.src=data_new[i].aboutus_img_url;
     li.appendChild(aboutus_img);
         aboutus_img.className="aboutus_img_style";

    var aboutus_title=document.createElement("p");
    aboutus_title.innerHTML=data_new[i].aboutus_title;
    li.appendChild(aboutus_title);
    aboutus_title.style.textAlign="center";
    aboutus_title.className="aboutus_title_style";
      aboutus_title.style.fontSize=20+"px";

     var aboutus_border_bottom=document.createElement("div");
     aboutus_border_bottom.className="aboutus_style_bottom";
        li.appendChild(aboutus_border_bottom);

    var aboutus_text=document.createElement("p");
    aboutus_text.innerHTML=data_new[i].aboutus_text;
    li.appendChild(aboutus_text);
    aboutus_text.style.display="bloak";
    aboutus_text.style.width=270+"px";
    aboutus_text.style.fontSize=12+"px";
};

   
  }
  }
