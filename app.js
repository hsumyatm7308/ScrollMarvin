 
const moonid = document.getElementById('moonid')
const demosection = $('.demosection').get(0);

const getdiamond = document.querySelector('.big-circle');
const demosection2 = $('.demosection2');



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
    // console.log(finalheight + ' final')

      moonid.style.top = `${finalheight}px`
      moonid.style.transform = "scale(.4) rotate(50deg)"



      if(finalheight <= 140){
      moonid.style.transform = "scale(.7) rotate(10deg)"
         
      }
  


      const demo2clientheight = $(getdiamond).height();
      // console.log(demo2clientheight)
      const demo2scrollheight = $(demosection2).height();
      // console.log(demo1scrollheight)
      const demo2curheight = demo2scrollheight - demo2clientheight;

      const demo2finalheight = (scrolltop * 32 ) / demo2curheight  ;

      getdiamond.style.height = `${demo2finalheight}px`;
      getdiamond.style.transition = 'all 2s';

      if(demo2finalheight < 122){
        getdiamond.style.transform = 'rotate(20deg)';

      }else if(demo2finalheight >= 122){

        getdiamond.style.transform = 'rotate(0deg)';
      }

      console.log(demo2finalheight)
      

      


 

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








  