var mainIndex = function() {
  var test = "teeest";


  var textStrings = {
    introBlurb: {
      en: '<b>edit this post</b> is collaborative writing in real time. In this interactive after talk the audience jointly writes a reflection of the evening. Everyone can contribute! Afterwards, the end result can be read online and printed directly. Write it!<br><br><span class="readMoreIndex">Read more</span>',
      nl: '<b>edit this post</b> is collaboratief schrijven in real time. In dit interactieve nagesprek schrijft publiek samen een kritiek van de avond. Iedereen mag bijdragen! Na afloop is het eindresultaat online terug te lezen en direct uit te printen. Schrijf mee!<br><br><span class="readMoreIndex">Lees meer</span>'
    },
    instructions:{
      en:'<ol><li><b>Select</b> the text you want to contribute to (search for the performance and date)</li><li><b>Click</b> on Write</li><li><b>Enter your name and chose a colour</b> select the symbol with three puppets in the right up corner. Your chosen colour shows your contribution.</li><li><b>Write!</b> React as much as possible to the already written text unless you really miss something. We strive for one jointly written text. You are allowed to shuffle someone else’s text, you are editor and writer. You are not allowed to delete someone else’s text, rather add a counterargument or nuance</li></ol>',
      nl:'<ol><li><b>Kies</b> aan welke tekst je wilt bijdragen (zoek de voorstelling en datum naar keuze)</li><li><b>Klik</b> op Write</li><li><b>Voer je naam in en kies een kleur</b> rechtsboven bij het symbool met drie poppetjes. Aan deze kleur kun je zien wat jouw bijdrage is.</li> <li><b>Schrijf mee!</b> Reageer zoveel mogelijk op de tekst of vragen die er al staan, tenzij je echt iets mist. We streven naar het gezamenlijk schrijven van één tekst. Schuiven met andermans tekst mag, je bent tegelijkertijd editor en auteur. Andermans tekst verwijderen mag niet, voeg liever een tegen argument of nuancering toe.</li></ol>'
    },
    infoText:{
      en:' The traveling dance festival <a target="_blank" href="http://movingfutures.nl/">Moving Futures</a> presents the new generation dance makers. Evening long performances, work in progress, glances behind the scenes, installations and movies. The audience speaks and writes about it together on <b>edit this post</b>. <br><br> <b>edit this post</b> can be used during events and workshops to report in real time. All contributors work in the same text file, as writer, as questioner and as editor. Everything is possible. Afterwards the text is automatically formatted and can be printed as a publication.  ',
      nl:'Het reizende dansfestival <a target="_blank" href="http://movingfutures.nl/">Moving Futures</a> presenteert de nieuwe generatie dansmakers. Avondvullende voorstellingen, work in progress, kijkjes in de keuken, installaties en films. Het publiek spreekt en schrijft erover met elkaar via <b>edit this post</b>.<br><br>Tijdens events en workshops kan <b>edit this post</b> worden gebruikt om in real time verslag te doen. Iedereen werkt aan hetzelfde tekstbestand, als schrijver, vragensteller of redacteur. Alles mag. De tekst wordt daarna automatisch vormgegeven en kan meteen geprint worden als publicatie.              '
    },
    infoCredits:{
      en:'<b>edit this post</b> is a concept made by <b><a href="http://www.template01.info/" target="_blank">Template</a></b> in collaboration with <b><a href="http://domeinvoorkunstkritiek.nl/" target="_blank">Domein voor Kunstkritiek</a></b> and <b><a href="http://networkcultures.org/" target="_blank">Institute of Network Cultures</a></b>. For more information, <b><a href="mailto:contact@template01.info?Subject=Hoi%20Template" target="_top">write Template</a></b>.<br><br><b>edit this post</b> makes use of the open source application <a href="http://etherpad.org/">Etherpad</a>.',
      nl:'<b>edit this post</b> is een idee van <b><a href="http://www.template01.info/" target="_blank">Template</a></b> in samenwerking met <b><a href="http://domeinvoorkunstkritiek.nl/" target="_blank">Domein voor Kunstkritiek</a></b> en <b><a href="http://networkcultures.org/" target="_blank">Institute of Network Cultures</a></b>. Voor meer informatie, <b><a href="mailto:contact@template01.info?Subject=Hoi%20Template" target="_top">stuur een e-mail naar Template</a></b>.<br><br><b>edit this post</b> maakt gebruik van de open source applicatie <a href="http://etherpad.org/">Etherpad</a>.      '
    }
  }


  var indexTemplate = `
  <div id="indexPage">
      <div class="colFull">
          <div id="indexBlurb" class="colHalf padded paddedNotBottom">
              <p>EDIT THIS POST <span id="langSwab"><span class="active" id="langSwabNL">NL</span> / <span id="langSwabENG">EN</span></span>
                  <br>
                  <br><span class="langNL">
        `+textStrings.introBlurb.nl+`</span>
                  <span class="langENG">`+textStrings.introBlurb.en+`</span> </p>
          </div>
          <div id="indexHow" class="colHalf padded paddedNotBottom">
              <span class="langNL">`+textStrings.instructions.nl+`</span>
              <span class="langENG">
            `+textStrings.instructions.en+`
          </span>
              </p>
          </div>
      </div>
      <div class="colFull">
          <div id="indexPadList">
              <p>EVENTS</p>
          </div>
      </div>
      <div class="colFull">
          <div id="indexInfo" class="colHalf padded">
              <p>INFO
                  <br>
                  <br><span class="langNL">`+textStrings.infoText.nl+`</span>
                  <span class="langENG">`+textStrings.infoText.en+`</span>
              </p>
          </div>
          <div id="indexCredits" class="colHalf padded">
              <p>CREDITS
                  <br>
                  <br> <span class="langNL">`+textStrings.infoCredits.nl+`</span>
                  <span class="langENG">`+textStrings.infoCredits.en+`</span></p>
          </div>
      </div>
  </div>
`;

  var playSplash = function playSplash() {

    $(app).find('#indexPage').hide();

    $(app).append('<div id="indexSplash"><span id="indexSplashInner"><span></div>');

    $('#indexSplashInner').t('<del class="noneBack animatedBorderBlack normalTight">edit<ins>0.75</ins></del><del class="noneBack animatedBorderBlack normalTight">this<ins>0.75</ins></del><del class="redBack shiftCaret extraTight">post<ins>0.75</ins></del>', {
      // $('#indexSplashInner').t('<span class="redBack shiftCaret extraTight">post<ins>1.5</ins></span>', {
      // $('#indexSplashInner').t('<span class="noneBack animatedBorderBlack normalTight">post<ins>1.5</ins></span>', {

      speed: 100,
      mistype: 0,
      blink: true,

      typing: function typing(elem, chars_total, chars_left, char) {
        if (char.match('shiftCaret')) {
          $('#indexSplashInner').addClass('shiftCaretColor');
        }
      },

      fin: function fin() {
        $(app).find('#indexPage').show();
        $('#indexSplash').fadeOut(200);
        setTimeout(function() {
          $('#indexSplash').remove();
        }, 200);
      }

    });
  };

  var animateList = function animateList() {
    $("#indexPadList .targetPadWrapper").each(function(index) {

      var self = this;
      setTimeout(function() {
        $(self).addClass('animated expandHeight');
      }, index * 50);
    });
  };

  var initIndex = function initIndex() {

    $(app).append(this.indexTemplate);

    mainAjaxGetters.getParts(indexJsonSource).success(function(data) {
      console.log('success');
      indexItems = data.data.text.split('\n').slice(0, -1);
      mainIndex.formatIndexEvents(indexItems);
      mainIndex.attachReadWriteActionsList();
      mainIndex.padAction();
    }).error(function() {
      console.log('error');
    });
  };

  var langSwab = function langSwab() {
    var clicked = false
    $(document).on('click', '#langSwab', function() {
      // alert('hey')
      if (clicked) {
        $('#langSwabNL').addClass('active')
        $('#langSwabENG').removeClass('active')
        $('.langNL').show()
        $('.langENG').hide()
        clicked = false

      } else {
        $('#langSwabENG').addClass('active')
        $('#langSwabNL').removeClass('active')
        $('.langNL').hide()
        $('.langENG').show()
        clicked = true
      }
    })
  };

  var readMoreIndex = function readMoreIndex() {
    $(document).on('click', '.readMoreIndex', function() {
      document.querySelector('#indexInfo').scrollIntoView({
        behavior: 'smooth'
      });
    })
  };


  var toggleEventList = function toggleEventList() {

    var clicked = false
    $(document).on('click', '.toggleEventList', function() {
      if (clicked) {
        $("#toggleEventListText.langENG").text('List all events')
        $("#toggleEventListText.langNL").text('Lijst alle events')
        $('.targetPadWrapper:gt(8)').not('.toggleEventList').hide()
        clicked = false

      } else {
        $("#toggleEventListText.langENG").text('List latest events')
        $("#toggleEventListText.langNL").text('Lijst laatste events')
        $('.targetPadWrapper').show()
        clicked = true
      }
    })

  };



  var goshow = function goshow() {
    $('#indexPage').show();
  };

  var gohide = function gohide() {
    $('#indexPage').hide();
  };

  var attachReadWriteActionsList = function attachReadWriteActionsList() {
    $('#indexPadList li').each(function() {

      if ($(this).find('span').length > 1) {

        $(this).addClass('targetPad').parent().append('<div class="padActions"><span class="padActionRead hvr-float"></span><span class="padActionWrite hvr-float"></span></div>');

        if ($(this).attr('data-status') === 'locked') {
          $(this).parents('.targetPadWrapper').find('.padActionWrite').addClass('locked');
        }
      } else {
        $(this).addClass('targetPad').parent().append('<div class="padActions hiddenElem"><span class="padActionRead hvr-float "></span><span class="padActionWrite hvr-float"></span></div>');
      }
    });
  };

  var formatIndexEvents = function formatIndexEvents(arrayParam) {
    arrayParam.forEach(function(entry) {
      var textInfo = entry.split('|');
      console.log(textInfo.length);
      // $('#indexPadList').append('<li></li>')
      listItem = $('<div class="targetPadWrapper"><li></li></div>');

      textInfo.forEach(function(entrySingle) {
        if (entrySingle.trim() === 'unlocked') {
          // savedThis
          listItem.find('li').attr('data-status', 'unlocked');
        } else if (entrySingle.trim() === 'locked') {
          // savedThis.attr('data-status', 'locked')
          listItem.find('li').attr('data-status', 'locked');
        } else {

          if (!new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(entrySingle.trim())) {
            listItem.find('li').append('<span data-link="' + encodeURI(entrySingle.trim().replace(/ /g, "_")) + '">' + entrySingle.replace(/_/g, " ").trim() + '</span>');

          }
        }
      });

      if (textInfo.length <= 1) {
        listItem.addClass('capitalizeText');
      }

      $('#indexPadList').append(listItem);
    });

    $('#indexPadList').append('<div class="targetPadWrapper toggleEventList"><li><div class="langENG" id="toggleEventListText">List all events</div><div class="langNL" id="toggleEventListText">Lijst alle events</div></li></div>');
    $('.targetPadWrapper:gt(8)').not('.toggleEventList').hide()

    // })
  };

  // var formatIndexEvents = function() {
  //     $('#indexPadList li').each(function() {
  //
  //         var textInfo = $(this).text().split('|')
  //
  //         $(this).empty()
  //
  //         savedThis = $(this)
  //
  //         textInfo.forEach(function(entry) {
  //             if (entry.trim() === 'unlocked') {
  //                 savedThis.attr('data-status', 'unlocked')
  //
  //             } else if (entry.trim() === 'locked') {
  //                 savedThis.attr('data-status', 'locked')
  //             } else {
  //                 savedThis.append('<span data-link="' + entry.trim() + '">' + entry.replace(/_/g, " ").trim() + '</span>')
  //
  //             }
  //
  //         });
  //     })
  // }


  var padAction = function padAction() {

    $(document).on('click', '#indexPadList .targetPad span', function() {
      target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link');
      mainRoute.router.navigate('/events/' + target + '/read');
    });

    $(document).on('click', '#indexPadList .padActionRead', function() {
      target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link');
      mainRoute.router.navigate('/events/' + target + '/read');
    });

    $(document).on('click', '#indexPadList .padActionWrite', function() {
      if (!$(this).hasClass('locked')) {
        target = $(this).parents('.targetPadWrapper').find('.targetPad span').first().attr('data-link');
        mainRoute.router.navigate('/events/' + target + '/write');
      }
    });
  };

  return {
    test: test,
    indexTemplate: indexTemplate,
    animateList: animateList,
    attachReadWriteActionsList: attachReadWriteActionsList,
    formatIndexEvents: formatIndexEvents,
    initIndex: initIndex,
    padAction: padAction,
    goshow: goshow,
    gohide: gohide,
    toggleEventList: toggleEventList,
    langSwab: langSwab,
    readMoreIndex: readMoreIndex,
    playSplash: playSplash
  };
}();
