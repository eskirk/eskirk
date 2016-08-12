

/**
* Variables
*/
var starOverride = false;
var stickOverride = false;
var menusOpen = false;


/**
* Blackstar Stuff
*/

var blackstarClicked = function() {
  if (menusOpen === true) {
    console.log('fuck');
    console.log($(document).width() + ' WIDTH!!');
    menusOpen = false;
    $('.orbit1').animate({
      opacity: 0.3,
      left: '50%'
    });
    $('.orbit2').animate({
      opacity: 0.3,
      left: '50%'
    });
    $('.orbit3').animate({
      opacity: 0.3,
      top: '50%'
    });
  }
  else if (menusOpen === false){
    console.log('who?');
    menusOpen = true;
    $('.orbit1').animate({
      opacity: 1,
      left: '40%'
    });
    $('.orbit2').animate({
      opacity: 1,
      left: '60%'
    });
    $('.orbit3').animate({
      opacity: 1,
      top: '60%'
    });
  }
  var timeoutHandle;
  var stickTimeoutHandle;
  if (Math.random() <= 0.2) {
    if (stickOverride === false) {
      createStick();
      spawnStick($('.man1'), 5000);
      spawnStick($('.man2'), 5000);
      spawnStick($('.man3'), 5000);
      spawnStick($('.man4'), 5000);
      stickOverride = true;
      stickTimeoutHandle = window.setTimeout(stickmanOverride, 10000);
    }
  }

  starfield();
  if (starOverride === false) {
    starOverride = true;
    timeoutHandle = window.setTimeout(manualOverride, 10000);
  }
  else {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(manualOverride, 10000);
  }
};

function openMenus() {

}

var master = new TimelineMax({delay:0}),
bg = $("#featureBackground"),
centerY = $(".body").height() / 2,
centerX = $(".body").width() / 2,
radius = Math.max(centerX, centerY),
_isOldIE = (document.all && !document.addEventListener);


/**
* Stickman Stuff
*/

function stickmanOverride() {
  if (stickOverride === true) {
    stickOverride = false;
    $('.man1').remove();
    $('.man2').remove();
    $('.man3').remove();
    $('.man4').remove();
  }
}

var createStick = function() {
  var man;
  var choice = Math.random();

  if (choice >= 0.75) {
    man = $("<img src='stick_man.png' class='man1 hidden' id='man'/>");
  }
  else if (choice >= 0.5) {
    man = $("<img src='stick_man.png' class='man2 hidden' id='man'/>");
  }
  else if (choice >= 0.25) {
    man = $("<img src='stick_man.png' class='man3 hidden' id='man'/>");
  }
  else {
    man = $("<img src='stick_man.png' class='man4 hidden' id='man'/>");
  }

  man.appendTo('.feature');
  $('.man1').toggleClass('hidden');
  $('.man2').toggleClass('hidden');
  $('.man3').toggleClass('hidden');
  $('.man4').toggleClass('hidden');
};

var spawnStick = function($man, speed) {

  $man.animate({
    "left": "100%"
  }, speed);
};

/**
* Comet Stuff
*/

master.eventCallback("onComplete", function()  {
  if (!starOverride) {
    master.kill();
    $('.star').remove();
  }
  master.add(starfield());
});

master.add( starfield() );

function manualOverride() {
  if (starOverride === true) {
    starOverride = false;
  }
}

function starfield() {
  console.log('stars!');
  var tl = new TimelineLite(),
  duration = 3.6,
  minDur = 0.5,
  maxDur = 5,
  minSize = 1,
  maxSize = 3,
  i = 2,
  repeats = 1,
  stars = [],
  star, angle, delay;
  while (--i > -1) {
    var sz = gaRand(minSize, maxSize);
    duration = gaRand(minDur, maxDur);
    star = $("<span class='star'></span>").appendTo($('#featureBackground'));
    stars.push(star);
    angle = Math.random() * Math.PI * 2;
    delay = gaRand(0.2, 3);
    tl.set(star, {display:"block"}, delay);

    TweenLite.set(star, {
      scale:gaRand(0.5, 0.8),
      top:-150,
      left:gaRand(0, $('#featureAnimation').width() / 3),
      motionBlur: true,
      z:0.1});

      tl.add( new TweenMax(star, duration, {
        bezier: {
          curviness:1.25,
          values:[{x:gaRand(0, $('#featureAnimation').width()), y:1800}],
          autoRotate: true
        },
        scale:gaRand(1.5, 2),
        ease:Cubic.easeIn
      }),delay)}

      tl.set(stars, {display:"none"});
      return tl;
    }

    function transforms() {
      var tl = new TimelineLite(),
      split = new SplitText("#transform", {split:"words", absolute:true}),
      box = document.getElementById("transformBox"),
      transformSub = document.getElementById("transformSub"),
      scale = split.words[0],
      rotate = split.words[1],
      move = [split.words[2], split.words[3]],
      independently = split.words[4];
      TweenLite.set(split.words, {autoAlpha:0, rotationX:-90});
      TweenLite.set(box, {scale:0.1, rotation:0.1, autoAlpha:0});
      tl.to(box, 0.3, {autoAlpha:1});
      tl.to(box, 7, {scale:1, ease:Linear.easeNone, autoRound:false}, 0);
      tl.to(scale, 0.5, {autoAlpha:1, rotationX:0, transformOrigin:"50% 50% -35px"}, 0);
      tl.to(box, 6, {rotation:360.2}, 1);
      tl.to(rotate, 0.5, {autoAlpha:1, rotationX:0, transformOrigin:"50% 50% -35px"}, 1);
      tl.to(box, 0.3, {x:60, ease:Power1.easeInOut}, 2.2);
      tl.to(box, 1.8, {x:0, ease:Elastic.easeOut}, 2.5);
      tl.to(move, 0.5, {autoAlpha:1, rotationX:0, transformOrigin:"50% 50% -35px"}, 2);
      tl.to(independently, 0.5, {autoAlpha:1, rotationX:0, transformOrigin:"50% 50% -35px"}, 2.5);
      tl.to(box, 3, {rotationX:360, ease:Elastic.easeOut}, 3.5);
      tl.from(transformSub, 0.5, {top:"-=16", autoAlpha:0}, 4.5);
      tl.to([transformSub, box], 0.5, {autoAlpha:0}, 7.4);
      tl.staggerTo(split.words.slice(0, 4), 0.5, {rotationX:90, autoAlpha:0}, 0.2, 7);
      tl.to(independently, 0.5, {rotationX:-90, autoAlpha:0}, 7.3);
      return tl;
    }

    function gaRand(min, max) {
      return Math.random() * (max - min) + min;
    }
