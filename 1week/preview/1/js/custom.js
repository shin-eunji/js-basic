$(document).ready(function () {
  // 실제 스크립트 코드를 입력할 공간입니다.
  $(".box1").on("click", function () {
    $("p").text("파란 박스를 클릭했습니다.");
  });

  $(".box1").on("mouseleave", function () {
    $("p").text("마우스를 올렸습니다.");
  });
  $(".box1").on("mousemove", function () {
    $("p").text("마우스를 움직입니다.");
  });
  $(window).on("scroll", function () {
    $("p").text("화면을 스크롤합니다.");
  });
  $(window).on("resize", function () {
    $("p").text("화면을 리사이즈합니다.");
  });
});
