/*
/*slider header*/
/*
let currentIndex = 2;

let PrevArow = document.getElementById('l_arrow');

let NextArow = document.getElementById('r_arrow');

let NextArowBottom = document.getElementById('r_arrow_bottom');

let slideItem = document.getElementsByClassName('title_slide');

let dots = document.getElementsByClassName('dots');

let slideLinkItem = document.getElementsByClassName('slide_link_item'); 

let hdnSpan = document.getElementsByClassName('hdn_span');

PrevArow.addEventListener('click', onPrev);
NextArow.addEventListener('click', onNext);
NextArowBottom.addEventListener('click', onNext);

/*for (let i = 0; i < slideLinkItem.length; i++) {
    slideLinkItem[i].addEventListener('click', addClassActiveShore);
}*/
/*
slideItem[currentIndex].classList.add('active_title');
slideLinkItem[currentIndex].classList.add('active_shore');
dots[currentIndex].classList.add('activeOval');

/*function addClassActiveShore(i) {

    currentIndex = i;
    slideLinkItem[currentIndex].classList.add('active_shore');
}*/
/*
function onPrev() {
    slideItem[currentIndex].classList.remove('active_title');
    slideLinkItem[currentIndex].classList.remove('active_shore');
    dots[currentIndex].classList.remove('activeOval');
    hdnSpan[currentIndex].classList.remove('active_span_shore');

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slideItem.length-1;
    }

    slideItem[currentIndex].classList.add('active_title');
    slideLinkItem[currentIndex].classList.add('active_shore');
    dots[currentIndex].classList.add('activeOval');
    hdnSpan[currentIndex].classList.add('active_span_shore');
}

function onNext() {
    slideItem[currentIndex].classList.remove('active_title');
    slideLinkItem[currentIndex].classList.remove('active_shore');
    dots[currentIndex].classList.remove('activeOval');
    hdnSpan[currentIndex].classList.remove('active_span_shore');

    currentIndex++;
    if (currentIndex > slideItem.length-1) {
        currentIndex = 0;
    }

    slideItem[currentIndex].classList.add('active_title');
    slideLinkItem[currentIndex].classList.add('active_shore');
    dots[currentIndex].classList.add('activeOval');
    hdnSpan[currentIndex].classList.add('active_span_shore');
}
*/

//добавление даты в меню Head

let date = document.querySelector('.date');

let d = new Date;
date.firstElementChild.innerHTML = d.getDate();
date.lastElementChild.innerHTML = (d.getMonth() + 1) + ' | ' + d.getFullYear();

// анимация пути svg

(function(){ 

    document.onreadystatechange = () => {

      if (document.readyState === 'complete') {
                
        /**
         * Setup your Lazy Line element.
         * see README file for more settings
         */

        let el = document.querySelector('#puty');
        let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":4,"strokeOpacity":1,"strokeColor":"#ffffff","strokeCap":"square"}); 
        myAnimation.paint(); 
      }
    }

  })();
