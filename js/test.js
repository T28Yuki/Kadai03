// 押したボタン以外を消す
if($(".btn1").click(function(){
    $(".btn2").hide();
    $(".btn3").hide();
}))

if($(".btn2").click(function(){
    $(".btn1").hide();
    $(".btn3").hide();
}))

if($(".btn3").click(function(){
    $(".btn1").hide();
    $(".btn2").hide();
}))

// じゃんけんのランダム設定

var random = Math.floor(Math.random() * 3 +1 );
console .log(random, "じゃんけんの箱")

if (random === 1) {
    console .log ("ぐー");
} else if (random === 2) {
    console .log ("ちょき");
} else if (random === 3) {
    console .log ("ぱー")
}

let mypoint=0;
let yourpoint=0;

// btn1を押したとき
$(".btn1") .on("click", function () {
if (random == 1) {
    console.log("ぐー");
    $(".random-result").attr("src","./img/グー２.jpg");
    $("h2").html("あいこでしょ！")
    mypoint +=0
    $(".mypoint").html(mypoint);
} else if (random == 2){
    console.log("ちょき");
    $(".random-result").attr("src","./img/チョキ２.jpg");
    $("h2").html("やったね！勝ったね！！")
    mypoint +=3
    $(".mypoint").html(mypoint);
    document.getElementById("car2").style.left = "50px";
} else if (random == 3){
    console.log("ぱー");
    $(".random-result").attr("src","./img/パー２.jpg");
    $("h2").html("残念・・・負けちゃったね。")
    yourpoint +=3
    $(".yourpoint").html(yourpoint);
    document.getElementById("car1").style.left = "50px";
}})

// bnt2を押したとき
$(".btn2") .on("click", function () {    
if (random == 1) {
    console.log("ぐー");
    $(".random-result").attr("src","./img/グー２.jpg");
    $("h2").html("残念・・・負けちゃったね。")
    yourpoint +=3
    $(".yourpoint").html(yourpoint);
    document.getElementById("car1").style.left = "50px";
} else if (random == 2){
    console.log("ちょき");
    $(".random-result").attr("src","./img/チョキ２.jpg");
    $("h2").html("あいこでしょ！")
    mypoint +=0
    $(".mypoint").html(mypoint);
} else if (random == 3){
    console.log("ぱー");
    $(".random-result").attr("src","./img/パー２.jpg");
    $("h2").html("やったね！勝ったね！！")
    mypoint +=3
    $(".mypoint").html(mypoint);
    document.getElementById("car2").style.left = "50px";
}})

// bnt3を押したとき
$(".btn3") .on("click", function () {  
    if (random == 1) {
    console.log("ぐー");
    $(".random-result").attr("src","./img/グー２.jpg");
    $("h2").html("やったね！勝ったね！！")
    mypoint +=3
    $(".mypoint").html(mypoint);
    document.getElementById("car2").style.left = "50px";
    } else if (random == 2){
    console.log("ちょき");
    $(".random-result").attr("src","./img/チョキ２.jpg");
    $("h2").html("残念・・・負けちゃったね。")
    yourpoint +=3
    $(".yourpoint").html(yourpoint);
    document.getElementById("car1").style.left = "50px";
    } else if (random == 3){
    console.log("ぱー");
    $(".random-result").attr("src","./img/パー２.jpg");
    $("h2").html("あいこでしょ！")
    mypoint +=0
    $(".mypoint").html(mypoint);
    }})

$(".btn-wra").click(function(){
    location.reload();
})


