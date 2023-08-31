$(document).ready(function () {
  var fixControls = function () {
    var top = ($(window).height() - 777) / 2;
    if ($(window).height() > 777) {
      $('#controls').css('top', 606 + top);
    } else {
      $('#controls').css('top', 'auto');
    }
  };
  fixControls();
  $(window).resize(function () {
    fixControls();
  });
  var init = function () {
    var sLeft = $(this).scrollLeft();
    //alert(sMax + " " + (sMax - $("img.first").width()) + " " + firstdiff + " " + ((sLeft)/sMax) + " " + sLeft + " " + $(window).width());
    $('.first').css({
      left: ((13777 - 9777) / (13777 - $(window).width())) * sLeft,
    });
    $('.second').css({
      left: ((13777 - 11777) / (13777 - $(window).width())) * sLeft,
    });
  };
  init();
  $(window).scroll(init);
  var pagenum = 1;
  $('#portfolio .left').click(function () {
    if (pagenum < 5) {
      $('#works').animate({
        'margin-left': '-=' + 567,
      });
      pagenum = pagenum + 1;
    }
    return false;
  });
  $('#portfolio .right').click(function () {
    if (pagenum > 1) {
      $('#works').animate({
        'margin-left': '+=' + 567,
      });
      pagenum = pagenum - 1;
    }
    return false;
  });
  $('#portfolio .work a').fancybox({
    transitionIn: 'elastic',
    transitionOut: 'elastic',
  });
  $('#play.fr').click(function () {
    if ($('body').find('object').size() == 0) {
      $('#pause.fr').show();
      $(this).hide();
      $('body').append(
        '<object height="81" width="100%"> <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F15678420&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F15678420&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object> '
      );
    }
  });
  $('#play.sc').click(function () {
    if ($('body').find('object').size() == 0) {
      $('#pause.sc').show();
      $(this).hide();
      $('body').append(
        '<object height="81" width="100%"> <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17678037&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17678037&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object> '
      );
    }
  });
  $('#play.th').click(function () {
    if ($('body').find('object').size() == 0) {
      $('#pause.th').show();
      $(this).hide();
      $('body').append(
        '<object height="81" width="100%"> <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13429989&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F13429989&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object> '
      );
    }
  });
  $('#play.fth').click(function () {
    if ($('body').find('object').size() == 0) {
      $('#pause.fth').show();
      $(this).hide();
      $('body').append(
        '<object height="81" width="100%"> <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17678037&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17678037&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object>'
      );
    }
  });
  $('#play.ff').click(function () {
    if ($('body').find('object').size() == 0) {
      $('#pause.ff').show();
      $(this).hide();
      $('body').append(
        '<object height="81" width="100%"> <param name="movie" value="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17675962&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700"></param> <param name="allowscriptaccess" value="always"></param> <embed allowscriptaccess="always" height="81" src="http://player.soundcloud.com/player.swf?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F17675962&amp;show_comments=true&amp;auto_play=true&amp;color=ff7700" type="application/x-shockwave-flash" width="100%"></embed> </object> '
      );
    }
  });
  $('#wrapper')
    .find('#pause')
    .each(function () {
      $(this).click(function () {
        if ($('body').find('object').size() > 0) {
          $('#wrapper')
            .find('#pause')
            .each(function () {
              $(this).hide();
            });
          $('#wrapper')
            .find('#play')
            .each(function () {
              $(this).show();
            });
          $('body object').remove();
        }
      });
    });
  var speedcoef = 2;
  $('#controls .tofinish').click(function () {
    speed = ($(window).scrollLeft() - 13777) * speedcoef;
    if (speed < 0) speed = speed * -1;
    $.scrollTo({ left: 13777, top: $(window).scrollTop() }, speed);
    return false;
  });
  $('#controls .tostart').click(function () {
    speed = ($(window).scrollLeft() - 0) * speedcoef;
    if (speed < 0) speed = speed * -1;
    $.scrollTo({ left: 0, top: $(window).scrollTop() }, speed);
    return false;
  });
  $('#controls .tomusic').click(function () {
    speed = ($(window).scrollLeft() - 4800) * speedcoef;
    if (speed < 0) speed = speed * -1;
    $.scrollTo({ left: 4800, top: $(window).scrollTop() }, speed);
    return false;
  });
  $('#controls .toworks').click(function () {
    speed = ($(window).scrollLeft() - 7000) * speedcoef;
    if (speed < 0) speed = speed * -1;
    $.scrollTo({ left: 7000, top: $(window).scrollTop() }, speed);
    return false;
  });
});
