import { data } from './data.js';

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/



const nav = $('.nav');

nav.on('click', 'li', function(e){
    e.preventDefault();
    
    // console.log(this);

    const index = parseInt($(this).attr('data-index'),10);
    // console.log(index);
    const item = data[index - 1];
    console.log(item);

    $('.nav li').removeClass('is-active'); 
    // active를 제거 먼저 작성한다. 
    // '.nav li' 가 아니고 'nav > li'로하면 이상하게 작동됨

    $(this).addClass('is-active'); // active Class 추가
    // console.log(e)
    
    if (item) {
      console.log(data[e.src])
      // GPT의 도움을 받고있어요..
      
      $('.visual img').attr({
        'src': `./assets/${data.name}.jpeg`,
        'color': `linear-gradient(to bottom, 'colorA','colorB')`,
        'alt': data.alt,
      });
    }
    
    
  })














