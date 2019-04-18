    $(document).ready(function(){

    $('.color_red').mouseenter(function(){
        $(this).css('background-color','#F5B033');
    });
    
    $('.color_red').mouseleave(function(){
        $(this).css('background-color','');/*不管是打background-color',''或是background-color','#C0394C'結果一樣*/ 
    });

    $('.color_orange').mouseenter(function(){
        $(this).css('background-color','#F5B033');
    });
    
    $('.color_orange').mouseleave(function(){
        $(this).css('background-color','#D2793C');
    });

    $('.color_green').mouseenter(function(){
        $(this).css('background-color','#F5B033');
        /*$('#webs_button').attr("src","img/webs icon orange.png");-可以改變文字路徑*/
    });
    
    $('.color_green').mouseleave(function(){
        $(this).css('background-color','#287843');
    /*$('#webs_button').attr("src","img/webs icon end green.png");-可以改變文字路徑*/
    });

    /*$('.listcontnet').mouseleave(function(){
        if($(this).css('background-color')=="#F5B033")
            {$(this).css('background-color','#F4E3CE');
             $(this).css('color','#000000');}
        });*/
    $('.moreItems').click(function(){
        if($('.itemlist').css('visibility')=="hidden")
            {$('.itemlist').css('visibility','visible');}
       else{
            $('.itemlist').css('visibility','hidden');
         }
        });

    $('#bt1').click(function(){
        if($('#pc').attr('src')=="img/paella1.png")
            {$('#pc').attr('src','img/paella1.png');}
       else{
            $('#pc').attr('src','img/paella1.png');
         }
        });

    $('#bt2').click(function(){
            if($('#pc').attr('src')=="img/rumpsteak.png")
                {$('#pc').attr('src','img/rumpsteak.png');}
           else{
                $('#pc').attr('src','img/rumpsteak.png');
             }
         });
    
    $('#bt3').click(function(){
            if($('#pc').attr('src')=="img/mainsteak.png")
                {$('#pc').attr('src','img/mainsteak.png');}
           else{
                $('#pc').attr('src','img/mainsteak.png');
             }
         });
    
    $('#bt4').click(function(){
            if($('#pc').attr('src')=="img/fish.png")
                {$('#pc').attr('src','img/fish.png');}
           else{
                $('#pc').attr('src','img/fish.png');
             }
         });


    /*if($("#exPara").css("display")=="none"){
				$("#exPara").show();
			}else{
				$("#exPara").hide();
			}
*/ 

    
   /* $('.moreItems').click(function(){
        $('.itemlist').css('visibility','hidden');
    });*/


   /* $(document).bind('click', function(e) {
        var e = e || window.event; //浏览器兼容性 
        var elem = e.target || e.srcElement;
        while (elem) { //循环判断至跟节点，防止点击的是div子元素 
            if (elem.css && elem.css == 'test') {
                return;
            }
            elem = elem.parentNode;
        }
        $('.itemlis').removeClass("visibility"); //点击的不是div或其子元素 
    });*/

    });
