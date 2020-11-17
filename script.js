const canvas = document.querySelector('.top-class');
const picture = document.querySelectorAll('.lowerbox');

var imageList = ['death.gif', 'goodbye.gif', 'haha.gif', 'lemon.gif', 'moon.gif', 'ripped.gif'];

for (let i = 0; i < imageList.length; i++) {
    picture[i].style.background = "url(media/" + imageList[i] + ")";
    picture[i].style.backgroundSize = "cover";
};

var time = 1;
var autoBck = setInterval(function() {
    canvas.style.background = "url(media/" + imageList[time] + ")";
    canvas.style.backgroundSize = "cover";
    time += 1;
    console.log('ok');
    time == 6 ? time = 0 : "";
}, 1000 * 5);

picture.forEach(function(el) {
    el.addEventListener('click', function() {
        clearInterval(autoBck);
        canvas.style.background = el.style.background;
    });
})