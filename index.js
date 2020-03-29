var i=0;
var checkWho =0;


var audio1Wind = new Audio('./sounds/Wind Sound effects Samia.mp3');
var audio2Wave = new Audio('./sounds/2 minutes relaxing wave sound.mp3');
var audio3Storm = new Audio('./sounds/Thunderstorm SOUND EFFECT.mp3');
var audio4Cricket = new Audio('./sounds/cricket animal sound.mp3');
var audio5Bird = new Audio("./sounds/Amazing Natural Bird Sounds.mp3");
var audio6Rain = new Audio('./sounds/RAINYMOOD - Sleeping sound for 10 minutes ! Rain and Thunder sound!.mp3');
var audio7Tibet = new Audio('./sounds/Watching Tibetan bowls sing.mp3');
var audio8Jungle = new Audio('./sounds/Jungle and Rainforest Sound Effects - Tropical Forest Ambiences from Costa Rica.mp3');
var audio9Coffeshop = new Audio('./sounds/Coffee Shop Sound Effect.mp3');
var audio10fire = new Audio('./sounds/Fire Sound Effect.mp3');

$(".playMusic #two").hide();
$(".playMusic #one ").click(()=>{
    $(".playMusic #two").hide();

  if(i==0)
  {
    $(".playMusic #one")
    .css({
        "transform":"rotate(360deg)",
       
    });
    i=1;
    
    $(".playMusic #one").hide(1000);
    $(".playMusic #two").show(2000);
    $(".playMusic #two").css({
        "transform":"rotate(-360deg)"
    })
    $(".straightLine .line3").css("background-color","red");
    $(".straightLine .line2").css("background-color","purple");
    $(".straightLine .line1").css("background-color","yellow");
    audio1Wind.play();
    audio2Wave.play();
    audio3Storm.play();
    audio4Cricket.play();
    audio5Bird.play();
    audio6Rain.play();
    audio7Tibet.play();
    audio8Jungle.play();
    audio9Coffeshop.play();
    audio10fire.play();
    

  }



  else if(i==1)
  {
    $(".playMusic #two")
    .css({
        "transform":"rotate(-360deg)"
    });
    $(".playMusic #two").hide(1000);
    $(".straightLine .line3").css("background-color","grey");
    $(".straightLine .line2").css("background-color","grey");
    $(".straightLine .line1").css("background-color","grey");
    i=0;
    audio1Wind.pause();
    audio2Wave.pause();
    audio3Storm.pause();
    audio4Cricket.pause();
    audio5Bird.pause();
    audio6Rain.pause();
    audio7Tibet.pause();
    audio8Jungle.pause();
    audio9Coffeshop.pause();
    audio10fire.pause();
  }
})




// for seconde key that is the playmusic two



$(".playMusic #two ").click(()=>{
    

  if(i==0)
  {
    $(".playMusic #two")
    .css({

        "transform":"rotate(360deg)",
       
    });
    $(".straightLine .line3").css("background-color","grey");
    $(".straightLine .line2").css("background-color","grey");
    $(".straightLine .line1").css("background-color","grey");
    i=1;
    
    $(".playMusic #two").hide(1000);
    $(".playMusic #one").show(2000);
    $(".playMusic #one").css({
        "transform":"rotate(-360deg)"
    })
    audio1Wind.pause();
    audio2Wave.pause();
    audio3Storm.pause();
    audio4Cricket.pause();
    audio5Bird.pause();
    audio6Rain.pause();
    audio7Tibet.pause();
    audio8Jungle.pause();
    audio9Coffeshop.pause();
    audio10fire.pause();
  
  }



  else if(i==1)
  {
    $(".playMusic #one")
    .css({
        "transform":"rotate(-360deg)"
    });
    $(".playMusic #one").hide(1000);
    $(".straightLine .line3").css("background-color","red");
    $(".straightLine .line2").css("background-color","purple");
    $(".straightLine .line1").css("background-color","yellow");
    i=0;
  }
})





  


window.addEventListener("scroll",function (event) {
  var scroll = this.scrollY;
  // this.console.log(scroll);
  if(scroll>=225)
  {
    $(".playMusic").css("display","none");
    $(".straightLine").css("display","none");
  }else if(scroll<=224)
  {
    $(".playMusic").css("display","block");
    $(".straightLine").css("display","block");
  }
  });

var one=0, two=0, three=0, four=0, five=0, six=0, seven=0, eight=0, nine=0, ten=0;


$("#wind").click(()=>{
  
 if(one==0)
 {
  audio1Wind.play();
  one=1;
  console.log(one);
 }
 else if(one==1)
 {
   
  audio1Wind.pause();
  one =0;
  console.log(one)
 }
})

$("#wave").click(()=>{
  if(two==0)
 {
  audio2Wave.play();
  two=1;
  console.log(two);
 }
 else if(two==1)
 {
   
  audio2Wave.pause();
  two=0;
  console.log(two);
 }

  
})

$("#storm").click(()=>{
  
  if(three==0)
  {
   audio3Storm.play();
   three=1;
   console.log(three);
  }
  else if(three==1)
  {
    
   audio3Storm.pause();
   three=0;
   console.log(three)
  }
})
$("#grass").click(()=>{
  
  if(four==0)
  {
   audio4Cricket.play();
   four=1;
   console.log(four);
  }
  else if(four==1)
  {
    
   audio4Cricket.pause();
    four =0;
   console.log(four)
  }
})

$("#birdd").click(()=>{

  if(five==0)
 {
  audio5Bird.play();
  five=1;
  console.log(five);
 }
 else if(five==1)
 {
   
  audio5Bird.pause();
  five =0;
  console.log(five)
 }
})


$("#cofeeshop").click(()=>{

  if(six==0)
 {
  audio6Rain.play();
  six=1;
  console.log(six);
 }
 else if(six==1)
 {
   
  audio6Rain.pause();
  six =0;
  console.log(six)
 }
})



$("#Fire").click(()=>{

  if(seven==0)
 {
  audio10fire.play();
  seven=1;
  console.log(seven);
 }
 else if(seven==1)
 {
   
  audio10fire.pause();
  seven =0;
  console.log(seven)
 }
})

$("#cofeeshop").click(()=>{

  if(eight==0)
 {
  audio9Coffeshop.play();
  eight=1;
  console.log(eight);
 }
 else if(eight==1)
 {
   
  audio9Coffeshop.pause();
  eight =0;
  console.log(eight)
 }
})


$("#jungle").click(()=>{

  if(nine==0)
 {
  audio8Jungle.play();
  nine=1;
  console.log(nine);
 }
 else if(nine==1)
 {
   
  audio8Jungle.pause();
  nine =0;
  console.log(nine)
 }
})

$("#tibet").click(()=>{

  if(ten==0)
 {
  audio7Tibet.play();
  ten=1;
  console.log(ten);
 }
 else if(ten==1)
 {
   
  audio7Tibet.pause();
  ten =0;
  console.log(ten)
 }
})