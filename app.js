$(document).ready(function() {

    const moonid = document.getElementById('moonid')

    $(window).scroll(function(){
        const windowscroll = $(this).scrollTop();
        // console.log(windowscroll)
        if(windowscroll >= 771){
            moonid.classList.add('moonani')
        }
    });
})
  