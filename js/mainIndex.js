var mainIndex = function() {
  var test = "teeest";


  var textStrings = {
    langSwab: '<span id="langSwab"><span class="active" id="langSwabNL">NL</span> / <span id="langSwabENG">EN</span></span>',
    navTop: {
      about: {
        en: '<b>About</b> + <b>Instructions</b>',
        nl: '<b>Over</b> + <b>Instructies</b>'
      }
    },
    introArchive:{
      en: 'ARCHIVE',
      nl: 'ARCHIEF'
    },
    introOneliner: {
      en: 'is collaborative writing in real time.',
      nl: 'is collaboratief schrijven in real time.'
    },
    introBlurb: {
      en: '<b>edit this post</b> is collaborative writing in real time. Visitors of a concert or exhibition, a festival or performance are able to reflect together and on the spot on their experiences. Everyone works inside the same text file. Everything is possible. The text is automatically formatted and can be printed directly. Others can follow the writing process in real time.',
      nl: '<b>edit this post</b> is collaboratief schrijven in real time. Bezoekers van een concert of expositie, een festival of voorstelling reflecteren samen en on the spot op wat zij beleefden. Iedereen werkt aan hetzelfde tekstbestand. Alles mag. De tekst wordt automatisch vormgegeven en kan meteen geprint worden. Het schrijfproces is in real time door anderen te volgen.'
    },
    instructions: {
      en: '<ol><li><b>Choose</b> the text you want to contribute to</li><li><b>Click</b> on Write</li><li><b>Type</b></li><li><b>React</b> as much as possible on the text and questions already posed in the document, unless you really miss something. Goal is to write one text. To shuffle the text of someone else is allowed, to erase it is not allowed. Rather add a nuance or new argument.</li></ol>',
      nl: '<ol><li><b>Kies</b> aan welke tekst je wilt bijdragen (zoek het event en datum naar keuze)</li><li><b>Klik</b> op Write</li><li><b>Type</b></li> <li><b>Reageer</b> zoveel mogelijk op de tekst of vragen die er al staan, tenzij je echt iets mist. Doel is het schrijven van één tekst. Schuiven met andermans tekst mag. Andermans tekst verwijderen mag niet. Voeg liever een tegenargument of nuancering toe.</li></ol>'
    },
    infoText: {
      en: ' The traveling dance festival <a target="_blank" href="http://movingfutures.nl/">Moving Futures</a> presents the new generation dance makers. Evening long performances, work in progress, glances behind the scenes, installations and movies. The audience speaks and writes about it together on <b>edit this post</b>. <br><br> <b>edit this post</b> can be used during events and workshops to report in real time. All contributors work in the same text file, as writer, as questioner and as editor. Everything is possible. Afterwards the text is automatically formatted and can be printed as a publication.',
      nl: 'Het reizende dansfestival <a target="_blank" href="http://movingfutures.nl/">Moving Futures</a> presenteert de nieuwe generatie dansmakers. Avondvullende voorstellingen, work in progress, kijkjes in de keuken, installaties en films. Het publiek spreekt en schrijft erover met elkaar via <b>edit this post</b>.<br><br>Tijdens events en workshops kan <b>edit this post</b> worden gebruikt om in real time verslag te doen. Iedereen werkt aan hetzelfde tekstbestand, als schrijver, vragensteller of redacteur. Alles mag. De tekst wordt daarna automatisch vormgegeven en kan meteen geprint worden als publicatie.              '
    },
    infoCredits: {
      colA: {
        en: '<b>edit this post</b> is an idea by <b><a href="https://www.template-studio.nl" target="_blank">Template Studio</a></b> in collaboration with <b><a href="http://domeinvoorkunstkritiek.nl/" target="_blank">Domein voor Kunstkritiek</a></b> and <b><a href="http://networkcultures.org/" target="_blank">Institute of Network Cultures</a></b> and was made possible by <b><a href="http://movingfutures.nl/" target="_blank">Moving Futures</a></b>, <b><a href="https://www.mondriaanfonds.nl/" target="_blank">Mondriaan Fonds</a></b> and <b><a href="https://fondspodiumkunsten.nl/" target="_blank">Fonds Podiumkunsten</a></b>. For more information please <b><a href="mailto:info@domeinvoorkunstkritiek.nl?Subject=Hoi" target="_top">write an email</a></b> to Domein voor Kunstkritiek.',
        nl: '<b>edit this post</b> is een idee van <b><a href="https://www.template-studio.nl" target="_blank">Template Studio</a></b> in samenwerking met <b><a href="http://domeinvoorkunstkritiek.nl/" target="_blank">Domein voor Kunstkritiek</a></b> en <b><a href="http://networkcultures.org/" target="_blank">Institute of Network Cultures</a></b> en werd mede mogelijk gemaakt door <b><a href="http://movingfutures.nl/" target="_blank">Moving Futures</a></b>, <b><a href="https://www.mondriaanfonds.nl/" target="_blank">Mondriaan Fonds</a></b> en <b><a href="https://fondspodiumkunsten.nl/" target="_blank">Fonds Podiumkunsten</a></b>. Voor meer informatie, <b><a href="mailto:info@domeinvoorkunstkritiek.nl?Subject=Hoi" target="_top">stuur een e-mail</a></b> naar Domein voor Kunstkritiek.'
      },
      colB: {
        en: '<b>edit this post</b> uses the open source application <a href="http://etherpad.org/">Etherpad</a>.',
        nl: '<b>edit this post</b> maakt gebruik van de open source applicatie <a href="http://etherpad.org/">Etherpad</a>.'
      }

    }
  }


  var indexTemplate = `
  <div id="indexPage">
  <div id="instructionsOverlay">
  <div class="colFull">
      <div id="indexInfo" class="colHalf padded">
          <p>

          <span class="langNL">OVER</span>
          <span class="langENG">ABOUT</span>
          </br>
          </br>
          <span class="langNL">` + textStrings.introBlurb.nl + `</span>
              <span class="langENG">` + textStrings.introBlurb.en + `</span>
          </p>
      </div>
      <div id="indexCredits" class="colHalf padded">
          <p>
          <span class="langNL">INSTRUCTIES</span>
          <span class="langENG">INSTRUCTIONS</span>
          <span class="close-icon readLessInstructions"></span>
          <div class="langNL">` + textStrings.instructions.nl + `</div>
          <div class="langENG">` + textStrings.instructions.en + `</div>

      </div>
  </div>
  </div>
      <div class="colFull">
          <div id="indexBlurb" class="colFull padded paddedNotBottom extraPaddingTop">
              <p>
                <span id="indexLogoWrap">
                  <span class="animatedBorderBlack">edit this post</span>
                  <span class="langNL">` + textStrings.introOneliner.nl + `</span>
                  <span class="langENG">` + textStrings.introOneliner.en + `</span>
                </span>
                <span id="indexNavTop">
                  <span class="langNL"><span class="readMoreInstructions">` + textStrings.navTop.about.nl + `</span></span>
                  <span class="langENG"><span class="readMoreInstructions">` + textStrings.navTop.about.en + `</span></span>
                  &nbsp;` + textStrings.langSwab + `
                </span>
              </p>
          </div>
      </div>
      <div class="colFull">
          <div id="indexPadList">
              <p>EVENTS</p>
          </div>
          <div id="indexPadArchive">
              <p id="archiveToggler">
                <span class="langNL">` + textStrings.introArchive.nl + `</span>
                <span class="langENG">` + textStrings.introArchive.en + `</span>
                <span class="chevron bottom"></span>
              </p>
              <div id="indexPadArchiveInner"></div>
          </div>
      </div>
      <div class="colFull">
          <div id="indexInfo" class="colHalf padded">
              <p><span class="langNL">` + textStrings.infoCredits.colA.nl + `</span>
                  <span class="langENG">` + textStrings.infoCredits.colA.en + `</span>
              </p>
          </div>
          <div id="indexCredits" class="colHalf padded">
              <p><span class="langNL">` + textStrings.infoCredits.colB.nl + `</span>
                  <span class="langENG">` + textStrings.infoCredits.colB.en + `</span></p>
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

  var readMoreInstructions = function readMoreInstructions() {
    $(document).on('click', '.readMoreInstructions,.readLessInstructions', function() {
      $("#instructionsOverlay").toggle()
    })
  }

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


  var toggleArchive = function toggleArchive() {

    var clicked = false
    $(document).on('click', '#archiveToggler', function() {
      if (clicked) {
        $('#indexPadArchiveInner').hide()
        $(this).removeClass('opened')
        $(this).find('.chevron').removeClass('top').addClass('bottom')
        clicked = false
      } else {
        $('#indexPadArchiveInner').show()
        $(this).addClass('opened')
        $(this).find('.chevron').removeClass('bottom').addClass('top')
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
    var archive = false


    var Tutorial = {};

    try {
      // [1, 2, 3].forEach(function(el) {
      //   console.log(el);
      //   if (el === 2) throw BreakException;
      // });


      arrayParam.forEach(function(entry) {
        var textInfo = entry.split('|');
        var notempty = entry.length > 0 ? true : false

        if (textInfo[0] === '===TUTORIAL===') throw Tutorial;

        if (notempty) {

          if (!archive) {

            if (textInfo[0] === '===EVENTS===') {
              return
            } else if (textInfo[0] === '===ARCHIVE===') {
              archive = true
            } else {
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
            }


          } else {

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


            $('#indexPadArchiveInner').append(listItem);
          }
        }
      });

    } catch (e) {
      if (e !== Tutorial) throw e;

    }





  };

  var padAction = function padAction() {


    $(document).on('click', '#indexPadArchiveInner li', function() {
      target = $(this).find('span').first().attr('data-link');
      mainRoute.router.navigate('/events/' + target + '/read');
    });


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
    toggleArchive: toggleArchive,
    langSwab: langSwab,
    readMoreInstructions: readMoreInstructions,
    readMoreIndex: readMoreIndex,
    playSplash: playSplash
  };
}();
