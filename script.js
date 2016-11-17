function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


$(document).ready(function() {

    var hover = false;

    $("#slogan").fitText(1.2, {
        minFontSize: '25px',
        maxFontSize: '65px'
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
            //isFitWidth: true
    });

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: false,
        sectionsColor: ['black', 'black'],
        paddingTop: '0px',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction) {},
        afterLoad: function(anchorLink, index) {},
        afterRender: function() {},
        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
    });

    $('.logo, #slogan, #personalLogo').fadeIn(2000);

    $('#portMenu').on('click', function() {
        closeNav();
        $.fn.fullpage.moveSectionDown();
    })

    $('.backToIntro').on('click', function() {
        $.fn.fullpage.moveSlideLeft();
    })

    $('.backToPortMenu').on('click', function() {
        $.fn.fullpage.moveTo(2, 0);
    })

    $('#aboutMenu').on('click', function() {
        closeNav();
        $.fn.fullpage.moveSlideRight();
    })

    $('#backUp').on('click', function() {
        $.fn.fullpage.moveSectionUp();
    })

    $(document).on('click', '#projectNintendo', function() {
        $.fn.fullpage.moveTo(2, 1);
    })

    $(document).on('click', '#projectSkyrim', function() {
        $.fn.fullpage.moveTo(2, 2);
    })

    $(document).on('click', '#projectFriends', function() {
        $.fn.fullpage.moveTo(2, 3);
    })

    $(document).on('click', '#projectLife', function() {
        $.fn.fullpage.moveTo(2, 4);
    })

    $(document).on('click', '#projectSolver', function() {
        $.fn.fullpage.moveTo(2, 5);
    })

    $(document).on('click', '#projectMovie', function() {
        $.fn.fullpage.moveTo(2, 6);
    })

    $(document).on({
        mouseenter: function() {
            $('.captionLinkA', this).fadeIn('fast', function() {
                hover = true;
                activate();
            })

            $('.captionLinkB', this).fadeIn('fast');
        },
        mouseleave: function() {
            $('.captionLinkA', this).hide(function() {
                hover = false;
                deactivate();
            })

            $('.captionLinkB', this).hide();
        }
    }, '.captionHover');


    function activate() {

        $('#nintendoApp').on('click', function() {
            window.open(
                'https://arcane-mountain-40771.herokuapp.com/',
                '_blank'
            );
        })

        $('#nintendoGit').on('click', function() {
            window.open(
                'https://github.com/rso136/Hangman_Game',
                '_blank'
            );
        })

        $('#skyrimApp').on('click', function() {
            window.open(
                'https://safe-basin-10956.herokuapp.com/',
                '_blank'
            );
        })

        $('#skyrimGit').on('click', function() {
            window.open(
                'https://github.com/rso136/Skyrim_Game',
                '_blank'
            );
        })

        $('#friendApp').on('click', function() {
            window.open(
                'https://quiet-ocean-92769.herokuapp.com/',
                '_blank'
            );
        })

        $('#friendGit').on('click', function() {
            window.open(
                'https://github.com/rso136/Week13-FriendFinder',
                '_blank'
            );
        })

        $('#lifeApp').on('click', function() {
            window.open(
                'https://rcblifequest.herokuapp.com/',
                '_blank'
            );
        })

        $('#lifeGit').on('click', function() {
            window.open(
                'https://github.com/salszu/goalKeeper',
                '_blank'
            );
        })

        $('#solverApp').on('click', function() {
            window.open(
                'https://rcbsolver.herokuapp.com/',
                '_blank'
            );
        })

        $('#solverGit').on('click', function() {
            window.open(
                'https://github.com/rso136/Solver',
                '_blank'
            );
        })

        $('#movieApp').on('click', function() {
            window.open(
                'http://boiling-shelf-50152.herokuapp.com',
                '_blank'
            );
        })

        $('#movieGit').on('click', function() {
            window.open(
                'https://github.com/rso136/React_Movies',
                '_blank'
            );
        })
    }

    function deactivate() {

        $('#nintendoApp').off();

        $('#nintendoGit').off();

        $('#skyrimApp').off();

        $('#skyrimGit').off();

        $('#friendApp').off();

        $('#friendGit').off();

        $('#lifeApp').off();

        $('#lifeGit').off();

        $('#solverApp').off();

        $('#solverGit').off();

        $('#movieApp').off();

        $('#movieGit').off();
    }
});