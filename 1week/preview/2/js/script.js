// 1. input에 Todo를 작성하고 Add버튼 클릭 시, list에 추가됨.
// 2. input에 적지 않을 때 오류 메시지('Todo가 없습니다')가 출력됨
// 3. 체크 박스를 체크하고 '선택 삭제'버튼 클릭 시, 체크한 항목이 삭제됨
// 4. '마지막 항목 삭제' 버튼 클릭 시, list 마지막 항목이 삭제됨
// 5. '전체 삭제' 버튼 클릭 시, 모든 항목이 삭제됨.

// DOM
// 1. 추가
document.querySelector("#btnAdd").addEventListener("click", addList);

function addList() {
  let contents = document.querySelector("#textBasic");
  if (!contents.value) {
    console.log("실패");
    contents.focus();
    return false;
  }

  let list = document.querySelectorAll("li");
  let input = document.querySelector("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "btn");

  document.getElementById("listWrap").appendChild(li);
  contents.value = "";
  contents.focus();

  let li1 = document.createElement("li");
  li1.innerHTML = contents.value;
  list.appendChild(li1);
}

// document.querySelector("#DeleteSel").addEventListener(
//   "click",
//   (addList = () => {
//     fdsffs;
//   })
// );

// document.querySelector("#DeleteLast").addEventListener(
//   "click",
//   (addList = () => {
//     fdsffs;
//   })
// );

// document.querySelector("#DeleteAll").addEventListener(
//   "click",
//   (addList = () => {
//     fdsffs;
//   })
// );
