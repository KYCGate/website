$(document).ready(    function() {        ArticleVisualization.init();    });var ArticleVisualization = {    init: function() {        var _this = this;        this.grapf = $('#wrapper');        var tab = this.grapf.find('.tabset li a');        var swiot = this.grapf.find('.switchers li');        var galleryTop = new Swiper(this.grapf.find('.tab-holder .swiper-container'), {            autoplay: 0,            pager: false,            slidesPerView: 1,            threshold: 30,            preventClicks: true,            preventClicksPropagation: false,            centeredSlides: true,            slideToClickedSlide: false,            touchStartForcePreventDefault: true,            loopedSlides: 10,            allowClick: false,            followFinger: false,            onClick: function(sw, event) {                event.preventDefault();                sw.allowClick = false;                return false;            },            onTap: function(sw, event) {                event.stopPropagation();                sw.allowClick = false;                return false;            },            slidePrev: function(sw, event) {},            onSlideChangeStart: setActiveThumbs        });        swiot.eq(galleryTop.activeIndex).addClass('active');        function setActiveThumbs() {            tab.removeClass('active');            tab.eq(galleryTop.activeIndex).addClass('active');            swiot.removeClass('active');            swiot.eq(galleryTop.activeIndex).addClass('active');        }        tab.click(function() {            tab.removeClass('active');            $(this).addClass('active');            console.log(tab.index($(this)));            galleryTop.slideTo(tab.index($(this)), 300, true);            return false;        });        function setEqualHeight(container) {            var currentTallest = 0,                currentRowStart = 0,                rowDivs = new Array(),                $el, topPosition = 0;            $(container).each(function() {                $el = $(this);                $($el).height('auto');                topPostion = $el.position().top;                if (currentRowStart != topPostion) {                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {                        rowDivs[currentDiv].height(currentTallest);                    }                    rowDivs.length = 0;                    currentRowStart = topPostion;                    currentTallest = $el.height();                    rowDivs.push($el);                } else {                    rowDivs.push($el);                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);                }                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {                    rowDivs[currentDiv].height(currentTallest);                }            });        }    }}