'use strict';

/**
  * @name studyPeriod()
  * @description // 일간, 주간, 월간 토글 기능
  */
 
var studyPeriod = function() {
    $('.btnPeriod').on('click', function(){
        $(this).addClass('isActive').siblings().removeClass('isActive');
    });
};

/**
  * @name buildSwiper()
  * @description // 기간 영역 slider 기능
  */
 
var buildSwiper = function() {
    const dateSwiper = new Swiper('.dateArea', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

/**
  * @name autoProfile()
  * @description // lorem picsum API를 활용하여 profile에 랜덤 이미지를 불러옴
  */

var autoProfile = function() {
    var $thumbUrl = 'https://picsum.photos/v2/list?limit=50';
    
    $.ajax({
        url : $thumbUrl,
        type : "GET" , 
        data : {},
        success: function (response) {
            var result = response;
            var resultLen = result.length;
            var resultIdx = Math.floor(Math.random() * resultLen) + 1;
            var resultUrl = response[resultIdx].download_url;
            $('.userPicture').attr("src", resultUrl);
        }
    });
};

/**
  * @name studyDataGraph()
  * @description // 학습시간의 경우 800, 수강 강의의 경우 50을 100% 기준으로 그래프 표현
  */

var studyDataGraph = function() {
    $(".studyDataItem").each(function(){
        var isTimeData = $(this).closest(".weeklyStudy").hasClass("timeData");
        var fullData = isTimeData ? 800 : 50;
        var currentData = parseInt($(this).find(".dataNum").text());
        var graphValue = currentData / (fullData/100);

        if ( graphValue > 100 ) {
            graphValue = 100;
        }

        if( isTimeData ) {
            $(this).find(".graphValue").css("width", graphValue+"%");
        } else {
            $(this).css("height", graphValue+"%");
        }
    });
    
};

$(function(){
    autoProfile();
    studyPeriod();
    buildSwiper();
    studyDataGraph();
});