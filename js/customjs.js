$(document).ready(function() {


    /////Using animated.modal.js plugin for modals//////////////    
    $("#demo01").animatedModal({
        modalTarget: 'animatedModal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#fff'
    });

    $("#demo02").animatedModal({
        modalTarget: 'lightSpeedIn',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#fff'
    });

    $("#demo03").animatedModal({
        modalTarget: 'thirdModal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#fff'
    });

    $("#finiancialModalButton").animatedModal({
        modalTarget: 'finiancialModal',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#fff'
    });
    
    $("#finiancialModalHowButton").animatedModal({
        modalTarget: 'finiancialModalHow',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut',
        color: '#fff'
    });


    //////////////////Parrallax effect////////////////////////////   
    var ypos, image; // variabales for the yposition and the image
    function parallax() {
        ypos = window.pageYOffset;
        image = document.getElementById('image');
        image.style.top = ypos * .5 + "px";
    }



    /////////////////////////Fade in Scrolling Effect//////////////
    $(window).on("load", function() {

        function fade() {
            $('.fade').each(function() {
                /*check the location of the desired element */
                var objectBotom = $(this).offset().top + $(this).outerHeight();
                var windowBottom = $(window).scrollTop() + $(window).innerHeight();


                /** if the object can be seen then fade it in */
                if (objectBotom < windowBottom) {
                    if ($(this).css('opacity') == 0) {
                        $(this).fadeTo(500, 1);
                    }
                    else {
                        if ($(this).css('opacity') == 1) {
                            $(this).fadeTo(500, 0);

                        }
                    }
                }
            });
        }
        fade(); // fade in completly visible elements on page load
        $(window).scroll(function() {
            fade();
        }); //Fade in elements during scroll
    });
    ///////////////////////////////////////////////////////////////////////////////

///////////////////////////Creating pulse effect for mitigation risk hoover and vice versa///////////////
$('#firstRisk').hover(function (){
    //alert("here");
    $('#firstMitigation').toggleClass("animated pulse");
});

$('#firstMitigation').hover(function (){
    //alert("here");
    $('#firstRisk').toggleClass("animated pulse");
});


$('#secondRisk').hover(function (){
    //alert("here");
    $('#secondMitigation').toggleClass("animated pulse");
});

$('#secondMitigation').hover(function (){
    //alert("here");
    $('#secondRisk').toggleClass("animated pulse");
});



    //////////////////////// Auto scroll effect/////////////////////////////

    $("#solutionsSectionButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#solutionsSection").offset().top
        }, 1000);
    });
    
    $("#problemSectionButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#introSection").offset().top
        }, 1000);
    });
    
    $("#competitionSectionButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#competitionSection").offset().top
        }, 1000);
    });
    
    $("#teamSectionButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#teamSection").offset().top
        }, 1000);
    });
    
     $("#investmentSectionButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#financeSection").offset().top
        }, 1000);
    });
    
    
    $("#riskNavButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#riskandMitigationSection").offset().top
        }, 1000);
    });
    
    
    $("#problemNavButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#introSection").offset().top
        }, 1000);
    });
    
        
    $("#competitonNavButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#competitionSection").offset().top
        }, 1000);
    });
    
    $("#financeNavButton").on('click', function() {
        //alert('working');
        $('html, body').animate({
            scrollTop: $("#financeSection").offset().top
        }, 1000);
    });
    
    
    /////////////////////////////////////////////////////////////////////////////    



    ///////////////////////CHANGE TEXT WHEN IMAGE IS CLICKED//////////////////////
    $("#icon5Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("<span style = 'color:#ef4545'>Let us reduce your paper based processes.</span> \n We aim to reduce cumbersome papers and folders you carry that contain vital information through our Augmented Solutions");
            $(this).fadeIn();
            $("#icon5Text").toggleClass("animated pulse");
        });
    });
    $("#icon6Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("Eliminate <span style = 'color:#ef4545'>difficulty when carrying maintenance checks</span> on equipment due to overly detailed logs which can be hard to track and monitor");
            $(this).fadeIn();
            $("#icon6Text").toggleClass("animated pulse")
        });
    });
    $("#icon7Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("Solve <span style = 'color:#ef4545'>time consuming staff training activities</span> on manufacturer’s factories through our Augmented Digital Manual Solution ");
            $(this).fadeIn();
            $("#icon7Text").toggleClass("animated pulse")
        });
    });
    $("#icon8Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("<span style = 'color:#ef4545'>Difficulty retrieving specific information on mechanical parts and equipment</span> on site within factories or shop floors are eliminated with our Augmented Solutions");
            $(this).fadeIn();
            $("#icon8Text").toggleClass("animated pulse")
        });
    });
    $("#icon9Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("Let us reduce your paper based processes. \n We aim to reduce <span style = 'color:#ef4545'>cumbersome papers and folders</span> you carry that contain vital information");
            $(this).fadeIn();
            $("#icon9Text").toggleClass("animated pulse")
        });
    });
    $("#icon10Text").mouseover(function() {
        $("#changingText").fadeOut(function() {
            $(this).html("Engineers and technicians often have to work with many different tools\ and perform tasks which they may not be completely familiar with, our Augmented Solutions empowers them with on hand informations related to your company's machines and processes.");
            $(this).fadeIn();
            $("#icon10Text").toggleClass("animated pulse")
        });
    });


    /////////////////////TIME LINE CIRCLE CLICK EVENTS (OR SHOULD WE MAKE IT ON MOUSE OVER???)/////////////////////////////////
    $("#circle1").click(function() {
        $("#timeLineText1").fadeOut(function() {
            $(this).html("Google glass 2013");
        });
        $("#timeLineText1").fadeIn();
    });

    $("#circle2").click(function() {
        $("#timeLineText1").fadeOut(function() {
            $(this).html("Google investment of $542 million into Magic Leap");
        });
        $("#timeLineText1").fadeIn();
    });

    $("#circle3").click(function() {
        $("#timeLineText1").fadeOut(function() {
            $(this).html("Microsoft makes investment into Hololens");
        });
        $("#timeLineText1").fadeIn();
    });

    $("#circle4").click(function() {
        $("#timeLineText1").fadeOut(function() {
            $(this).html("Samsung invest also, it is still ongoing");
        });
        $("#timeLineText1").fadeIn();
    });



    ////////////////////////Text on hoover effect/////////////////////////////////


    $("li").hover(function() {}, function() {
        $(this).find("span:last").remove();
    })

    $(".productName").hover(function() {
        $(".hiddenImage").css('display', 'block');
    }, function() {
        $(".hiddenImage").css('display', 'none');
    });

    //////////////////////////////CHART AND BAR GRAPH USING Chart.js///////////////////////////////////////////////////

    // Get the context of the canvas element we want to select

    var pieData = [{
        value: 20,
        color: "#878BB6"
    }, {
        value: 40,
        color: "#4ACAB4"
    }, {
        value: 10,
        color: "#FF8153"
    }, {
        value: 30,
        color: "#FFEA88"
    }];
    // Get the context of the canvas element we want to select
    var countries = document.getElementById("countries").getContext("2d");
    new Chart(countries).Pie(pieData, {
        animateScale: true
    });














});

/**(Test to see if Jquery is loaded and working) 
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/