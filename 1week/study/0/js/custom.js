$(document).ready(function () {
  var speed = 1000 / 2;
  var $btn1 = $(".btn1");
  var $btn2 = $(".btn2");
  var $wrap2 = $("#wrap2");
  var $close2 = $(".close2");
  var $top = $(".top");
  var $right = $(".right");
  var $bottom = $(".bottom");
  var $left = $(".left");
  var $con = $(".con");
  var $close1 = $(".close1");
  var ease = "easeOutBack"; //easeOutBounce, easeOutBack, easeOutElastic, easeOutExpo , swing

  /*
	1. 변수에 자주 쓰는 DOM요소를 캐싱 
	2. 특정 요소를 제이쿼리로 선택해서 이벤트 연결
	3.animation메서드에서 콜백함수이 모션을 동기화
*/
  // 여러개 이벤트 연결
  // $con.on('click mouseenter mouseleave' function() {
  // 	console.log('event occured!!!')
  // })

  // 여려개 이벤트 마다 각기 다른 핸들러함수 연결
  $con.on({
    click: function () {
      console.log("You Click!");
    },
    mouseenter: function () {
      console.log("You Mouseenter");
    },
    mouseleave: function () {
      console.log("You Mouseleave");
    },
  });

  //open1
  $btn1.on("click", function () {
    $top.animate({ width: "100%" }, speed, ease, function () {
      $right.animate({ height: "100%" }, speed, ease, function () {
        $bottom.animate({ width: "100%" }, speed, ease, function () {
          $left.animate({ height: "100%" }, speed, ease, function () {
            $con.fadeIn(speed);
          });
        });
      });
    });
  });

  $btn2.on("click", function () {
    $wrap2.animate({ height: 400, marginTop: -200 }, speed);
  });

  //close2
  $close2.on("click", function () {
    $wrap2.animate({ height: 0, marginTop: 0 }, speed);
  });

  //close1
  $close1.on("click", function () {
    $con.fadeOut(speed, function () {
      $top.animate({ width: "0%" }, speed);
      $bottom.animate({ width: "0%" }, speed);
      $left.animate({ height: "0%" }, speed);
      $right.animate({ height: "0%" }, speed);
    });
  });
});

/*
	선택자 : 자바스크립트로 제어할(선택한) 대상요소

	메서드 : 특정 기능을 동작시키위한 명령어(함수)

	개발에서 속도단위 : 밀리세컨드 (1000 = 1초)

	이벤트 : 사용자가 웹상에서 하는 모든 행동들 (click, mouseenter, mouseleave, scroll, resize, mousemove)

	비동기 --> 동기화 : 이전 구문이 끝나는 순간까지 대기하다가 이어서 다음 구문을 실행
	es5 : 콜백함수 (콜백헬 발생-가독성이 떨어짐)
	es6 : promise
	콜백함수 : 함수에 인수로 넣는 함수

	요소 보이기 숨기기
	.hide() / .fadeOut()  / .slideUp();
	.show() / .fadeIn()  / .slideDown();

	변수 - variable : 특정값을 임시로 임의의 공간(heap)에 담아놓는 공간
	var 변수명 = 값; (let, const -es6)

	변수를 쓰는 이유
	1. 반복되는 값들을 한번에 관리하기 위함 (코드관리의 용이함)
	2. 반복되는 값들을 재사용 하기 위함 (성능의 향상)

	캐싱 - 자주쓰는 DOM을 미리 전역변수에 할당해놓음

	프로그래밍 구현 방식
	1.절차지향 - 코드의 작업순서에 따라서 프로그래밍 하는 방식
	2.함수지향 - 자주쓰는 기능들을 함수로 분리해서 필요할때마다 재사용하는 방식
	3.객체지향 - 특정기능에 필요한 모든 변수(멤버변수), 함수(메서드)들을 클래스로 묶어서 재사용하는 방식

	제이쿼리 메소드
	.on()

	.animate(css속성, 속도, 가속도함수, 콜백함수)
	var cssOpt = {width:100, height:50}
	var speed = 500;
	var callback = function(){
		alert('callback');
	}
	.animate(cssOpt,speed,callback);
*/
