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

// Change navbar BG color
$(window).scroll(function(){
    let navbarTop = $("#Navbar").offset().top;
    
    if(navbarTop > 30){
        $("#Navbar").css("background-color","rgba(160, 160, 160, 0.2)")        
    }else{
        $("#Navbar").css("background-color","transparent")
    }
})

// Smoothly Scroll
$(".leftnav ul li a , .rightnav ul li a , #Contact .footerlinks ul li a").click(function(e){
    let currentLink = $(e.target).attr("href");
    let sectionOffset = $(`${currentLink}`).offset().top;
    
    $("HTML , body").animate({scrollTop:sectionOffset},1500)

})


