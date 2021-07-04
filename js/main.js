// Open the menu
$(".menuberger").click(function(){
    if($(".leftnav").offset().top == 0){
        $(".leftnav,.rightnav").slideDown(500)
        $(".leftnav,.rightnav").css({"display":"flex","justify-content":"center"})
    } else{
        $(".leftnav,.rightnav").slideUp(500)
        $(".leftnav,.rightnav").css({"display":"flex","justify-content":"center"})
    }
})











