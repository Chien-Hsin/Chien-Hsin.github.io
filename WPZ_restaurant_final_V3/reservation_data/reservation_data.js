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

// 監聽登入情況
function Listen_Authentication(){
  firebase.auth().onAuthStateChanged();
}
Listen_Authentication();
  

var reserve_data;
// 讀取"Reservation"集合裡的所有文件
function getdata() {
    db.collection("Reservation").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            reserve_data = doc.data();
            // alert(typeof reserve_data);
            // alert(reserve_data['人數']);
            createRow();  //每讀取一個文件, 建立一row, 將資料放進去
        });
    });
}


function createRow() {
    var tbody = document.getElementById('tbMain');
    var trow = getDataRow(reserve_data);  //定義一個方法, 返回tr數據
    tbody.appendChild(trow);
}


function getDataRow(h){
    var row = document.createElement('tr'); //建立row
    
    var resvPhone = document.createElement('td'); //建立第一column
    resvPhone.innerHTML = h['連絡電話']; //填充數據
    row.appendChild(resvPhone); //加入row, 之後類推

    var resvArea = document.createElement('td'); //建立第二column
    resvArea.innerHTML = h['區域']; //填充數據
    row.appendChild(resvArea); //加入row, 之後類推
    
    var resvStorefront = document.createElement('td'); //建立第三column
    resvStorefront.innerHTML = h['用餐據點'];
    row.appendChild(resvStorefront);
    
    var resvDate = document.createElement('td'); //建立第四列column
    resvDate.innerHTML = h['日期'];
    row.appendChild(resvDate);

    var resvTime = document.createElement('td'); //建立第五列column
    resvTime.innerHTML = h['時間'];
    row.appendChild(resvTime);

    var resvNumber = document.createElement('td'); //建立第六列column
    resvNumber.innerHTML = h['人數'];
    row.appendChild(resvNumber);

    // var resvRequire = document.createElement('td');
    // resvRequire.innerHTML = h['特別需求'];
    // row.appendChild(resvRequire);

    return row;
}


// 登出
function SignOut(){
    firebase.auth().signOut().then(function() {
      alert("登出成功。");
      window.location = "../firebase_auth/firebase_auth.html";
    })
  }
  