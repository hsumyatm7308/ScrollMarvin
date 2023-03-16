

    const moonid = document.getElementById('moonid')

  document.addEventListener('scroll',function(e){
    const windowscroll = document.documentElement.scrollTop;
//   const element = document.querySelector('#my-element');
const rect = moonid.getBoundingClientRect();

if (rect.top < window.innerHeight && rect.bottom >= 0) {
  // The element is currently visible on the screen.
  moonid.style.top = "800px"
} else {
  // The element is not currently visible on the screen.
  moonid.style.top = "0px"
}
  })


  