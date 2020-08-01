$(document).ready(function () {
  $(".btn1").on("click", function () {
    $(".top").animate({ width: "100%" }, 1000);
    $(".left").animate({ height: "100%" }, 1000);
    $(".bottom").animate({ width: "100%" }, 1000);
    $(".right").animate({ height: "100%" }, 1000);
  });
});

/* 
	선택자 : 자바스크립트로 제어할(선택한) 대상요소
	메서드 : 특정 기능을 동작시키기위한 명령어(함수)
	개발에서 속도단위: ms
	event : 사용자가 웹상에서 하는 모든 행동들 (Click, mouseEnnter, scroll, resize, mouseleave, mousemove)
	비동기 ==> 동기화 : 이전 구문이 끝나는 순간 실행하다 이어서 다음 구문을 실행.
	es5: 콜백함수
	es6: promise
*/
