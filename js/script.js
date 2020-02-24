$(document).ready(function() {
    $(".clickable1").click(function(){
        $(".img1").toggle();
        $(".text1").toggle();
    })

    $(".clickable2").click(function(){
        $(".img2").toggle();
        $(".text2").toggle();
    })

    $(".clickable3").click(function(){
        $(".img3").toggle();
        $(".text3").toggle();
    })


    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });




function myFuntion()
{
  var name=document.getElementById("nameDetails").value;
  alert(name+"we have received your message. Thank you for reaching out to us.");
};


$('.col-sm-2').on({
    mouseover: function() {
        $(this).find('span').fadeIn(200);
    },
    mouseout: function(){
        $(this).find('span').stop().fadeOut(200);
    },
})

});