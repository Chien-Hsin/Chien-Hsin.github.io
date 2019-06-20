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

// 監聽登入情況
function Listen_Authentication(){
  firebase.auth().onAuthStateChanged(user => {
    if(user) {
      alert("已登入。");
    }else{
      alert("未登入。");
    }
  });
}
Listen_Authentication();


// Email註冊
function SignUp(){
  var form = document.getElementById("main_form");
  var email = form.signup_email.value;
  var pwd = form.signup_pwd.value;

  firebase.auth().createUserWithEmailAndPassword(email, pwd)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert("註冊失敗。");
  });
}


// Email登入
function SignIn(){
  var form = document.getElementById("main_form");
  var email = form.signin_email.value;
  var pwd = form.signin_pwd.value;

  firebase.auth().signInWithEmailAndPassword(email, pwd)
  .then(() => {
    var user = firebase.auth().currentUser;
    if (user) {
      console.log(user);  // User has signed in
      window.location = "../reservation_data/reservation_data.html";  // 導向其他頁面
    }
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    alert(errorMessage);
  });
}


// 登出
function SignOut(){
  firebase.auth().signOut().then(function() {
    alert("Sign-out successful.");
  })
}
