

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
    menusOpen = false;
    $('.orbit1').animate({
      opacity: 0.3,
      left: '50%',
      top: '50%'
    });
    $('.orbit2').animate({
      opacity: 0.3,
      left: '50%',
      top: '50%'
    });
    $('.orbit3').animate({
      opacity: 0.3,
      top: '50%'
    });
    $('.orbit4').animate({
      opacity: 0.3,
      top: '50%'
    })
  }
  else if (menusOpen === false){
    menusOpen = true;
    $('.orbit1').animate({
      opacity: 1,
      left: getPos1(),
      top: '45%'
    });
    $('.orbit2').animate({
      opacity: 1,
      left: getPos2(),
      top: '45%'
    });
    $('.orbit3').animate({
      opacity: 1,
      top: getPos3()
    });
    $('.orbit4').animate({
      opacity: 1,
      top: getPos4()
    });
      
    $('.click-me').fadeToggle('slow', 'linear', function(){
      $('.click-me').remove();
    });
  }
};

var getPos1 = function() {
  var rtn = ((($(document).width() / 2) - 140) / ($(document).width())) * 100;
  return rtn + '%';
};

var getPos2 = function() {
  var rtn = ((($(document).width() / 2) + 140) / ($(document).width())) * 100;
  return rtn + '%';
};

var getPos3 = function() {
  var rtn = ((($(document).height() / 2) + 140) / ($(document).height())) * 100;
  return rtn + '%';
};

var getPos4 = function() {
  var rtn = ((($(document).height() / 2) - 140) / ($(document).height())) * 100;
  return rtn + '%';
};

var getVertPos = function() {
  var rtn = (($(document).height()) * Math.random() / ($(document).height())) * 100;
  return rtn + '%';
};

var master = new TimelineMax({delay:0}),
bg = $("#featureBackground"),
centerY = $(".body").height() / 2,
centerX = $(".body").width() / 2,
radius = Math.max(centerX, centerY),
_isOldIE = (document.all && !document.addEventListener);
