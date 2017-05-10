
function shouye(){
	        var tuzhan=$('tuzha');
	        var srcu=date_new.tuzhan_img;
              for( var i=0;i<srcu.length;i++){
            	var div=document.createElement('div'); 
            	div.style.backgroundImage="url("+srcu[i]+")";  
            	console.log(div.style.backgroundImage)
            	    tuzhan.appendChild(div);
            }
          var cot_text=$('cot_text'); 
          var div1=document.createElement('div');
          var img1=document.createElement('img');
          img1.src=date_new.content_text[0];
          div1.appendChild(img1);
          cot_text.appendChild(div1);
          var div2=document.createElement('div');
          div2.className="div3";
          cot_text.appendChild(div2); 
          for(var i=1;i<date_new.content_text.length;i++){
             var p=document.createElement('p');

             if(i>0){p.innerHTML=date_new.content_text[i];}
             switch(i){
              case 1:p.className="p1";break;
              case 2:p.className="p2";break;
              case 3:p.className="p3";break;
              case 4:p.className="p4";break;
             }
             div2.appendChild(p); 
          }
          var tupbiao=document.createElement('p');
          tupbiao.className="tupbiao";
          div2.insertBefore(tupbiao,div2.children[2]);
          var text_id=document.getElementById('text_id');
          for(var i=0;i<date_new.love_cakes.length-1;i++){
            var p5=document.createElement('p');
            p5.innerHTML=date_new.love_cakes[i];
            switch(i){
              case 0:p5.className="text_p1";break;
              case 1:p5.className="text_p2";break;
              case 2:p5.className="text_p3";break;
              case 3:p5.className="text_p4";break;
            }
            text_id.appendChild(p5);
          }
          var bqli_id=$('bqli_id');
          var center_img=document.getElementById('center_img');
         var ctr_img=document.createElement('img');
         ctr_img.src=date_new.love_cakes[4];
         center_img.appendChild(ctr_img);
         for(var k=0;k<date_new.bingqilin.length;k++){
             var li=document.createElement('li');
             var li_img=document.createElement('img');
             li_img.src=date_new.bingqilin[k][0];
             li.appendChild(li_img);
             for(var j=1;j<date_new.bingqilin.length;j++){
              var li_p=document.createElement('p');
              li_p.innerHTML=date_new.bingqilin[k][j];
              li.appendChild(li_p);
             }
             bqli_id.appendChild(li);
         }
         var mianbao_id=$('mianbao_id');
         var miantext_id=$('miantext_id');
         var mianbao_img=document.createElement('img');
         mianbao_id.appendChild(mianbao_img);
         mianbao_img.src=date_new.mianbao[0];
         for(var i=1; i<date_new.mianbao.length;i++){
          var mianbao_p=document.createElement('p');
          mianbao_p.innerHTML=date_new.mianbao[i];
          switch(i){
              case 1:mianbao_p.className="text_p1";break;
              case 2:mianbao_p.className="text_p2";break;
              case 3:mianbao_p.className="text_p3";break;
              case 4:mianbao_p.className="text_p4";break;
            }
            miantext_id.appendChild(mianbao_p);
         }
         var pisa_id=$('pisa_id');
         var pisatext_id=$('pisatext_id');
         pisa_id.style.backgroundImage="url("+date_new.pisa[0]+")";
         pisa_id.children[0].style.backgroundImage="url("+date_new.pisa[1]+")";
         for(var i=2;i<date_new.pisa.length;i++){
                var pisa_p=document.createElement('p');
                    pisa_p.innerHTML=date_new.pisa[i];
                switch(i){
                    case 5:pisa_p.className="pisa_p4";break;
                    case 2:pisa_p.className="pisa_p1";break;
                    case 3:pisa_p.className="pisa_p2";break;
                    case 4:pisa_p.className="pisa_p3";break;
            }
            pisatext_id.appendChild(pisa_p);
         }

          console.log(date_new)

		}