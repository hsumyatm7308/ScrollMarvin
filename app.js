 
const moonid = document.getElementById('moonid')
const demosection = $('.demosection').get(0)



$(document).ready(function(){

  $(window).scroll(function(){

   scrolltop = $(this).scrollTop();
    // console.log(scrolltop + " scrolltop")


    const clientheight = $(moonid).height();
    // console.log(clientheight + ' client')

    const scrollheight = $(demosection).height();
    // console.log(scrollheight + ' scroll')

    const curheight = scrollheight - clientheight;
    // console.log(curheight + ' curheight')



    const finalheight = (scrolltop  / 10) % curheight 
    console.log(finalheight + ' final')

      moonid.style.top = `${finalheight}px`
      moonid.style.transform = "scale(.4) rotate(50deg)"



      if(finalheight <= 140){
      moonid.style.transform = "scale(.7) rotate(10deg)"
         
      }
  


 

  })


})


 


























  // get a reference to the animated element

// listen for the scroll event on the window
// window.addEventListener('scroll', function() {
//   // get the current scroll position
//   const scrollPosition = window.scrollY;

//   // get the position of the animated element
//   const animatedElementPosition = moonid.offsetTop;

//   // calculate the distance between the scroll position and the animated element
//   const distance = animatedElementPosition - scrollPosition;

//   // check if the distance is less than or equal to the height of the viewport
//   if (distance <= window.innerHeight) {
//     // stop the animation
//     moonid.style.animationPlayState = 'paused';
//   } else {
//     // resume the animation
//     moonid.style.animationPlayState = 'running';
//   }
// });








  