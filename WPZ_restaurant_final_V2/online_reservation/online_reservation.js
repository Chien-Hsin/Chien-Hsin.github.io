// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_aHRkS7tc2wEUCSkBnmrzH6bttR8oVZM",
    authDomain: "ntut-webdesign-final.firebaseapp.com",
    databaseURL: "https://ntut-webdesign-final.firebaseio.com",
    projectId: "ntut-webdesign-final",
    storageBucket: "ntut-webdesign-final.appspot.com",
    messagingSenderId: "675700484303",
    appId: "1:675700484303:web:f34ecec154afd5b4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// 訂位鈕按下
function reserve(){
    var form = document.getElementById("main_form");
    var dineArea = form.dine_area.value;
    var dineStorefront = form.dine_storefront.value;
    var dineDate = form.dine_date.value;
    var dineTime = form.dine_time.value;
    var dineNumber = form.number_of_people.value;
    var dinePhone = form.contact_phone.value;
    if (dineDate == ""){
        alert("請選擇用餐日期。");
        return; }

    if (dinePhone == ""){
        alert("請輸入連絡電話。");
        return; }

    if (confirm("確定送出訂位資訊?")){
        db.collection("Reservation").doc().set({
            區域: dineArea,
            用餐據點: dineStorefront,
            日期: dineDate,
            時間: dineTime,
            人數: dineNumber,
            連絡電話: dinePhone
        });
        alert("訂位成功!");
        // window.location.reload();
    }else{
        return;
    }
}


// jQuery
$(document).ready(function(){
    
    // 改變區域, 改變據點
    $("#dine_area").change(function(){
        $("#dine_storefront").empty();  //清空內容
        if ($("#dine_area").val() == "北部"){
            $("#dine_storefront").append("<option value='台北重慶南店'>台北重慶南店</option>");
            $("#dine_storefront").append("<option value='台北羅斯福店'>台北羅斯福店</option>");
            $("#dine_storefront").append("<option value='台北南京東店'>台北南京東店</option>");
            $("#dine_storefront").append("<option value='台北復興南店'>台北復興南店</option>");
            $("#dine_storefront").append("<option value='台北南港店'>台北南港店</option>");
        } else if ($("#dine_area").val() == "中部"){
            $("#dine_storefront").append("<option value='台中金典綠園道店'>台中金典綠園道店</option>");
            $("#dine_storefront").append("<option value='北屯文心店'>北屯文心店</option>");
            $("#dine_storefront").append("<option value='台中中科店'>台中中科店</option>");
            $("#dine_storefront").append("<option value='台中家樂福文心店'>台中家樂福文心店</option>");
            $("#dine_storefront").append("<option value='彰化四維店'>彰化四維店</option>");
            $("#dine_storefront").append("<option value='員林大潤發店'>員林大潤發店</option>");
        } else if ($("#dine_area").val() == "南部"){
            $("#dine_storefront").append("<option value='嘉義文化店'>嘉義文化店</option>");
            $("#dine_storefront").append("<option value='斗六家樂福店'>斗六家樂福店</option>");
            $("#dine_storefront").append("<option value='安平家樂福店'>安平家樂福店</option>");
            $("#dine_storefront").append("<option value='台南民族店'>台南民族店</option>");
            $("#dine_storefront").append("<option value='仁德中山店'>仁德中山店</option>");
            $("#dine_storefront").append("<option value='新營家樂福店'>新營家樂福店</option>");
        } else if ($("#dine_area").val() == "東部"){
            $("#dine_storefront").append("<option value='宜蘭新月店'>宜蘭新月店</option>");
            $("#dine_storefront").append("<option value='花蓮國聯店'>花蓮國聯店</option>");
        }
    });

});