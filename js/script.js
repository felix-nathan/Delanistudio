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


});