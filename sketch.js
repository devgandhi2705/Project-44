  
/* 
Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
Pinterest:
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/

//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine,world;
var canvas;

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

//gameState
var home_scr = 0;
var player_scr = 1;
var computer_scr = 2;
var play_scr = 2.1;
var settings_src = 3;
var aboutme_src = 4;
var gameState = home_scr;

//btns at home screen
var settings_btn,player_btn,computer_btn,back_btn,tittle,logo_img,aboutme_btn;
var link;

//btns at computer screen
var comp_play_btn,levelSelector,sound_play,maxScore;

//for settings screen
var settings_sprite,bgcolor_picker,sound_stg,player_inp;

//for play screen
var wall_left,wall_right,wall_bottom,wall_top,start_btn,playAgain_btn;

//for about me screen
var endlessRunning,trex,rainEffect,fatherDay,fruitCatcher,Plinko,VirtualPet;

//images
var cancel_img;

//game variables
var compScore = 0;
var playerScore = 0;
var ball,compPaddle,playerPaddle;
var start = 0;
var play = 1;
var end = 2;
var playState = start;

function preload(){
    //load Images here

    //cancel_img = loadImage("Images/cancelimage.png")
}

function setup(){
    canvas = createCanvas(650,500);
    //engine = Engine.create();
    //world = engine.world;

    settings_btn = createButton("Setting");
    settings_btn.position(650,400);

    player_btn = createButton('Play online');
    player_btn.position(640,350);

    computer_btn = createButton('Play Vs. Computer');
    computer_btn.position(615,300);

    aboutme_btn = createButton('About Me');
    aboutme_btn.position(645,450);

    back_btn = createButton('Back');
    back_btn.position(370,40);

    comp_play_btn = createButton('Play');
    comp_play_btn.position(920,480);

    start_btn = createButton('Start');
    start_btn.position(width,height/2-65);

    playAgain_btn = createButton('Play again');
    playAgain_btn.position(width,height/2+100);

    settings_sprite = createSprite(1000,10000,width,height);

    ball = createSprite(width/2,height/2,20,20);
    ball.visible = false;  
    compPaddle = createSprite(20,height/2,15,120);
    compPaddle.visible = false;
    playerPaddle = createSprite(width-20,height/2,15,120);
    playerPaddle.visible = false; 

    bgcolor_picker = createColorPicker("white");
    bgcolor_picker.position(580,170);
    bgcolor_picker.size(100,20);

    levelSelector = createSelect();
    levelSelector.position(width/2+80,height/2+110);
    levelSelector.option('Easy');
    levelSelector.selected('Easy');
    levelSelector.option('Medium');
    levelSelector.option('Hard');
    levelSelector.option('10');
    
    sound_play = createRadio();
    sound_play.position(width/2+250,height/2+110);
    sound_play.option('On');
    sound_play.option('Off');
    sound_play.selected('On');

    sound_stg = createRadio();
    sound_stg.position(445,120);
    sound_stg.option('On');
    sound_stg.option('Off');
    sound_stg.selected('On');

    maxScore = createSlider(1,20,5,1);
    maxScore.position(410,430);

    player_inp = createInput("Player").attribute("placeholder", "Name");
    player_inp.position(500,220);

    tittle = createElement('h2',"Ping Pong World");
    tittle.position(580,60);

    logo_img = createSprite(150,200,110,100);

    link = createA("https://console.firebase.google.com/u/0/project/ping-pong-world/database/ping-pong-world/data",'DataBase Link','_blank');
    link.position(900,490);

    trex = createA("https://devgandhi2705.github.io/project-37-38/",'Trex Game','_self');
    endlessRunning = createA("https://studio.code.org/projects/gamelab/xIB_6cMLaVlOTd9ImCJvsz6H8cJT1zyq54vPkdv_NiI",'Endless Running Game','_self');
    rainEffect = createA("https://devgandhi2705.github.io/project-41/",'Rainy Effect','_self');
    fatherDay = createA("https://studio.code.org/projects/applab/UhH79MMdpnxYG1ayqQ9SQVqO8zJCf-mpFpppQk_-MFk","Father's Card App ",'_self');
    fruitCatcher = createA("https://devgandhi2705.github.io/Project-39/",'Fruit Catcher Game','_self');
    Plinko = createA("https://devgandhi2705.github.io/project-33/",'Plinko Game','_self');
    VirtualPet = createA("https://devgandhi2705.github.io/Project-36/",'Virtual Pet','_self');

    trex.position(width-250,380);
    endlessRunning.position(width-250,405);
    rainEffect.position(width-250,430);
    fatherDay.position(width-250,455);
    fruitCatcher.position(width-250,480);
    Plinko.position(width-50,380);
    VirtualPet.position(width-50,405);

    wall_bottom = createSprite(width/2,height+10,width,10);
    wall_left  = createSprite(-10,height/2,10,height);
    wall_right = createSprite(width+10,height/2,10,height);
    wall_top = createSprite(width/2,-10,width,10);
    
}

function draw(){
    background("white");
   // Engine.update(engine);

    //rectMode(CENTER);
    //imageMode(CENTER);
    //ellipseMode(CENTER);

    var playerName = player_inp.value();
    var level = levelSelector.value();

    if(gameState===home_scr){
        background(bgcolor_picker.color());

        fill("black");
        text("-By Dev Gandhi",10,height-10);
        textSize(35);
        text("Welcome " + playerName + "!",200,250);
        textSize(13);
        text("Self Designed Game-1",20,20);

        back_btn.position(370,40);
        back_btn.html('Back');
 
        //hide buttons
        back_btn.hide();
        comp_play_btn.hide();
        bgcolor_picker.hide();
        start_btn.hide();
        playAgain_btn.hide();
        sound_stg.hide();
        trex.hide();
        endlessRunning.hide();
        fatherDay.hide();
        rainEffect.hide();
        fruitCatcher.hide();
        Plinko.hide();
        VirtualPet.hide();
        levelSelector.hide();
        sound_play.hide();
        maxScore.hide();
        player_inp.hide();
       

        //show buttons
        settings_btn.show();
        player_btn.show();
        computer_btn.show();
        aboutme_btn.show();
        link.show();
        tittle.show();

        logo_img.x = 150;
        logo_img.y = 80;
        tittle.position(580,60);

        player_btn.mousePressed(function(){
           gameState = player_scr;
        });

        computer_btn.mousePressed(function(){
           gameState = computer_scr;
        });

        settings_btn.mousePressed(function(){
           gameState = settings_src;
        });

        aboutme_btn.mousePressed(function(){
           gameState = aboutme_src;
        });

    }//home gamestate end

   if(gameState===player_scr){
    background(bgcolor_picker.color());

        //text("Game State is player online",200,200);

        //show buttons
        back_btn.show();

        //hide buttons
        player_btn.hide();
        computer_btn.hide();
        comp_play_btn.hide();
        settings_btn.hide();
        start_btn.hide();
        playAgain_btn.hide();
        link.hide();
        aboutme_btn.hide();
        tittle.hide();

        logo_img.x  = 1000000;

        back_btn.mousePressed(function(){
            gameState=home_scr;
        });

    }//player gameState end

    if(gameState===computer_scr){
      background(bgcolor_picker.color());
       // text("Game State is on computer",20,200);
       fill("black");
       textSize(30); 
       line(225,50,400,50);
       text("#Instructions :-",20,90);

       textSize(20);
       text("1. Click on START button to play Game.",40,125);
       text("2. You have to not ball go out from wall of your side,",40,150);
       text("    otherwise computer will score +1.",40,175);
       text("3. Set Maximum score to win by Yourself at down.",40,200);
       text("4. Choose Level as per your Choice.",40,225);
       text("5. You can select Images of player, computer, ball and of",40,250);
       text("    background, change your Name, set Sound Off/On in Settings.",40,275);

       text(level,200,500);

       var num = 10;

       if(level===num){
             gameState = play_scr; 
       }

       textSize(20);
       text("Sound",width/2-110,height/2+80);
       text("Select Level",width/2-290,height/2+80);
       text("Maximum Score =",width/2-290,height/2+150);

       var t = maxScore.value();
       text(t,200,400);

       //show buttons
        back_btn.show();
        comp_play_btn.show();
        levelSelector.show();
        sound_play.show();
        maxScore.show();
        tittle.show();
        tittle.position(580,15);

        //hide buttons
        player_btn.hide();
        computer_btn.hide();
        settings_btn.hide();
        playAgain_btn.hide();

        link.hide();
        logo_img.x  = 1000000;
        aboutme_btn.hide();
        start_btn.hide();

        comp_play_btn.mousePressed(function(){
           gameState = play_scr;
           playState = start;
           compPaddle.x = 20;
           compPaddle.y = width/2;
           playerPaddle.x = width-20;
           playerPaddle.y = width/2;
           ball.x = width/2;
           ball.y = height/2;
           ball.velocityX = 0;
           ball.velocityY = 0;
          });

        back_btn.mousePressed(function(){
           gameState=home_scr;
        });

    }//computer gameState ends

    if(gameState===play_scr){
      background(bgcolor_picker.color());

        textSize(20);
        text(compScore,width/2-30,20);
        text(playerScore,width/2+20,20);

        ball.collide(wall_top);
        ball.collide(wall_bottom);
        ball.collide(compPaddle);
        ball.collide(playerPaddle);

        text("Computer",175,20);
        text(playerName,380,20);

        levelSelector.hide();
        sound_play.hide();
        maxScore.hide();

        //hide buttons
        comp_play_btn.hide();
      
         if(playState===start){
         
          start_btn.show();

          playAgain_btn.hide();
          tittle.hide();

          ball.velocityY = 0;
          ball.velocityX = 0;
          ball.x = width/2;
          ball.y = height/2;
          compPaddle.y  = width/2;
          playerPaddle.y = width/2;
        
          compPaddle.visible = true;
          playerPaddle.visible = true;
          ball.visible = true;

          if(playerScore>0||compScore>0){
            back_btn.hide();
          }else{
            back_btn.show();
          }

          for (var i = 2; i < height; i=i+20) {
            line(width/2,i,width/2,i+10);
          }
  
           start_btn.mousePressed(function(){
                playState= play;
           });
        }   

        if(playState===play){

          ball.velocityY = 1.5;
          ball.velocityX = 3.5;
          compPaddle.y = ball.y;
          playerPaddle.y = mouseY;

          back_btn.hide();
          start_btn.hide();

        for (var i = 2; i < height; i=i+20) {
            line(width/2,i,width/2,i+10);
        }

        playAgain_btn.hide();

          if(ball.x >= width) {
              compScore +=1;
              playState = start;
              back_btn.hide();
           }else if(ball.x <= 0) {
               playerScore += 1;
               playState = start;
               back_btn.hide();
           }

          // text(setScore,200,200);
          //maxScore.changed(playStateOver);
          var setScore  = maxScore.value();

          if(compScore===setScore||playerScore===setScore){
            playState=end;
            console.log("Game Ended");
           }
        }    
      
         if(playState===end){
          textSize(30);
          fill("black");
          text("Game Ended",200,height/2+30);

          ball.velocityY = 0;
          ball.velocityX = 0;
          ball.x = width/2;
          ball.y = height/2;

          playAgain_btn.show();
          back_btn.show();
          
          ball.visible = false;
          playerPaddle.visible = false;
          compPaddle.visible = false;

          if(playerScore > compScore){
            text("Oops! Computer, You lose the game",20,200);
            text("Congratulations " + playerName + "! You win",20,230);
          }else{
           text("Oops! "+ playerName + ", You lose the game",20,200);
           text("Congratulations Computer! You win",20,230);
          }

          playAgain_btn.mousePressed(function(){
              playState=start;
              compScore=0;
              playerScore=0;
              playAgain_btn.hide();
          });
        }


         back_btn.mousePressed(function(){
             gameState = computer_scr;
             playState=null;
             ball.visible  = false;
             compPaddle.visible = false;
             playerPaddle.visible = false;
             compScore = 0;
             playerScore = 0;
         });
    }//play with computer screen ends
  
      if(gameState===settings_src){
        background("grey");

        fill("black");
        textSize(20);
        text("Sound -",10,110);
        text("Background Colour -",10,160);
        text("Player Name-",10,210);
        text("Images",width/2-50,260);

        textSize(40);
        text("Settings",width/2-100,40);
        //text("Set background color here, as per your choice");

        back_btn.html('Save');
        back_btn.position(930,495);

         //hide buttons
        settings_btn.hide();
        player_btn.hide();
        computer_btn.hide();
        link.hide();
        aboutme_btn.hide();
        tittle.hide();

        //show buttons
        player_inp.show();
        bgcolor_picker.show();
        back_btn.show();
        sound_stg.show();
      

        logo_img.x  = 1000000;

        back_btn.mousePressed(function(){
             gameState = home_scr;
        });
      }

      if(gameState===aboutme_src){
        background(bgcolor_picker.color());

        fill("black");
        textSize(30);
        text("#My other Projects:-",40,335);

        textSize(20);
        //text("#This is about me screen",100,height/2);
        text("Hello friends! I am Dev Gandhi, student of WhiteHat Jr.",20+100,70);
        text("This is my Self Designed Game-1.It's a Ping Pong World Game. It",50,95);
        text("has been Improved and Modified by me. It has features like:-",50,120);
        text("1. 3 level and A.I game.",70,160);
        text("2. You can play either With Computer A.I or Online with friend.",70,185);
        text("3. Control all design of App like design, color, etc.",70,210);
        text(" and have U.I experience.",85,235);
        text("4. Can share to your friends an family.",70,260);
        text("5. User Can also send Feedback directly to us.",70,285);

       
        trex.show();
        endlessRunning.show();
        fatherDay.show();
        rainEffect.show();
        fruitCatcher.show();
        Plinko.show();
        VirtualPet.show();

        back_btn.show();

        //hide buttons
        link.hide();
        settings_btn.hide();
        aboutme_btn.hide();
        player_btn.hide();
        tittle.hide();
        computer_btn.hide();

        logo_img.x = 1000000;
       
        back_btn.mousePressed(function(){
          gameState = home_scr;  
        })
      }

    //shareable social link
   init();
  

    
   drawSprites();
    }

function init() {
    const pinterestImg = document.querySelector(".pinterest-img");
  
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hello Friends! Play this Ping Pong World. It's such a wonderfull game");
  
    facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
  
    twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
  
    pinterestBtn.setAttribute(
      "href",
      `https://pinterest.com/pin/create/bookmarklet/?&url=${postUrl}&description=${postTitle}`
    );
  
    linkedinBtn.setAttribute(
      "href",
      `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
  
    whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${postUrl}`
    );
  }

  function bounceoff(movingrect,fixedRect){
       
  }