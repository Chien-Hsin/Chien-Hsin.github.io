$(document).ready(function(){

// 漢堡選單動畫
$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
});

var pic_num = 2;
setInterval(change_img, 5000);

function change_img(){
    if (pic_num == 1){
        $('#pc').fadeTo(1000,0.05,function(){
            $('#pc').attr('src','img/foodpicture_1.png');
            $('#pc').fadeTo(1000,1);
            $('#bt1').attr('src','img/circle button_solid.png');
            $('#bt2').attr('src','img/circle button.png');
            $('#bt3').attr('src','img/circle button.png');
            $('#bt4').attr('src','img/circle button.png');
            });
    }else if (pic_num == 2){
        $('#pc').fadeTo(1000,0.05,function(){
            $('#pc').attr('src','img/foodpicture_2.png');
            $('#pc').fadeTo(1000,1);
            $('#bt1').attr('src','img/circle button.png');
            $('#bt2').attr('src','img/circle button_solid.png');
            $('#bt3').attr('src','img/circle button.png');
            $('#bt4').attr('src','img/circle button.png');
            });
    }else if (pic_num == 3){
        $('#pc').fadeTo(1000,0.05,function(){
            $('#pc').attr('src','img/foodpicture_3.png');
            $('#pc').fadeTo(1000,1);
            $('#bt1').attr('src','img/circle button.png');
            $('#bt2').attr('src','img/circle button.png');
            $('#bt3').attr('src','img/circle button_solid.png');
            $('#bt4').attr('src','img/circle button.png');
            });
    }else if (pic_num == 4){
        $('#pc').fadeTo(1000,0.05,function(){
            $('#pc').attr('src','img/foodpicture_4.png');
            $('#pc').fadeTo(1000,1);
            $('#bt1').attr('src','img/circle button.png');
            $('#bt2').attr('src','img/circle button.png');
            $('#bt3').attr('src','img/circle button.png');
            $('#bt4').attr('src','img/circle button_solid.png');
            });
    };
    pic_num = pic_num % 4 + 1;
};




$('.color_red').mouseenter(function(){
    $(this).css('background-color','#F5B033');
});

$('.color_red').mouseleave(function(){
    $(this).css('background-color',''); /*不管是打background-color',''或是background-color','#C0394C'結果一樣*/ 
});

$('.color_orange').mouseenter(function(){
    $(this).css('background-color','#F5B033');
});

$('.color_orange').mouseleave(function(){
    $(this).css('background-color','#D2793C');
});

$('.color_green').mouseenter(function(){
    $(this).css('background-color','#F5B033');
});

$('.color_green').mouseleave(function(){
    $(this).css('background-color','#287843');
});

var slide_state = 1;
$('.itemlist').slideUp(0);
$('#nav-icon3').click(function(){
    $('.itemlist').slideToggle(450);
    slide_state = 1;
    // if($('.itemlist').css('visibility')=="hidden")
    //     {$('.itemlist').css('visibility','visible');}
    // else{
    //     $('.itemlist').css('visibility','hidden');
    //     }
    });

// 點空白處收回選單
$(document).click(function(){
    if(slide_state == 2){
        if ($('.itemlist').css('display') != 'none'){
            $('#nav-icon3').toggleClass('open');  
        }
        $('.itemlist').slideUp(450);
    }
    slide_state = slide_state % 2 + 1;
});

$('#bt1').click(function(){
    // alert($('.itemlist').css('display'));
    pic_num = 2;
    $('#pc').fadeTo(800,0.05,function(){
        $('#pc').attr('src','img/foodpicture_1.png');
        $('#pc').fadeTo(800,1);
        $('#bt1').attr('src','img/circle button_solid.png');
        $('#bt2').attr('src','img/circle button.png');
        $('#bt3').attr('src','img/circle button.png');
        $('#bt4').attr('src','img/circle button.png');
        });
    });

$('#bt2').click(function(){
    pic_num = 3;
    $('#pc').fadeTo(800,0.05,function(){
        $('#pc').attr('src','img/foodpicture_2.png');
        $('#pc').fadeTo(800,1);
        $('#bt1').attr('src','img/circle button.png');
        $('#bt2').attr('src','img/circle button_solid.png');
        $('#bt3').attr('src','img/circle button.png');
        $('#bt4').attr('src','img/circle button.png');
        });
    });
    
$('#bt3').click(function(){
    pic_num = 4;
    $('#pc').fadeTo(800,0.05,function(){
        $('#pc').attr('src','img/foodpicture_3.png');
        $('#pc').fadeTo(800,1);
        $('#bt1').attr('src','img/circle button.png');
        $('#bt2').attr('src','img/circle button.png');
        $('#bt3').attr('src','img/circle button_solid.png');
        $('#bt4').attr('src','img/circle button.png');
        });
    });
        
$('#bt4').click(function(){
    pic_num = 1;
    $('#pc').fadeTo(800,0.05,function(){
        $('#pc').attr('src','img/foodpicture_4.png');
        $('#pc').fadeTo(800,1);
        $('#bt1').attr('src','img/circle button.png');
        $('#bt2').attr('src','img/circle button.png');
        $('#bt3').attr('src','img/circle button.png');
        $('#bt4').attr('src','img/circle button_solid.png');
        });
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
