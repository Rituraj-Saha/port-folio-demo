let dinamic_text_count =$(".dynamic_text").children().length;
let line_anim_dur = $(".text_anim_container").css('--line-anim-dur');
line_anim_dur = line_anim_dur.slice(0, -1);

let total_anim_dur = (dinamic_text_count * line_anim_dur) + "s";

$(".text_anim_container").css('--total-dynamic-text', dinamic_text_count);
$(".text_anim_container").css('--total-anim-dur',total_anim_dur );
const b = document.getElementById('slide-b');

// button.onclick = function () {
//  // document.getElementById('cards-wrapper').scrollLeft += 20;
 
// };
// b.addEventListener("click", myFunction);  
// function myFunction() {
//     window.alert("Hello world!");
// }
const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');

rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  var clientWidth = document.getElementById('content').clientWidth;
  conent.scrollLeft += clientWidth;
  event.preventDefault();
});

leftBtn.addEventListener("click", function(event) {
    const conent = document.querySelector('#content');
    var clientWidth = document.getElementById('content').clientWidth;
    conent.scrollLeft += clientWidth;
    conent.scrollLeft -= clientWidth;
    event.preventDefault();
});
function mscrollRight(){
    const conent = document.querySelector('#content');
    var clientWidth = document.getElementById('content').clientWidth;
    conent.scrollLeft += clientWidth;
    event.preventDefault();
}
function mscrollLeft(){
    const conent = document.querySelector('#content');
    var clientWidth = document.getElementById('content').clientWidth;
    conent.scrollLeft += clientWidth;
    conent.scrollLeft -= clientWidth;
    event.preventDefault();
}

