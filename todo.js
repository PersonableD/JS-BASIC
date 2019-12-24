const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify 는 object를 string으로 바꿔줌
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  li.id = newId;
  //list id 지정 (강의에 있었는데 못봄)
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}
//자바 스크립트 내에서 html의 리스트, span, button 생성

function deleteToDo(event) {
  // console.log(event.target.parentNode);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });

  toDos = cleanToDos;
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //string을 object로 다시 바꿔줌
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
    //forEach:array를 위한 function
  }
  //할일을 입력하고 새로고침해도 할일이 사라지지 않고 저장되어있음
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
