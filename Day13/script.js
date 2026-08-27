console.log("javascript start!")


const title="인셉션"
const voteAverage="8.4"

console.log(`${title}의 평점은 ${voteAverage}점입니다.`)


// // ① 함수 선언식
// function 함수이름(매개변수) {
// }

// // ② 함수 표현식
// const 함수이름 = function(매개변수) {
// };


// // 02. 영화 정보 함수 만들기

// #1
// const getMovieMessage= function(title,voteAverage){
//     return `${title}의 평점은 ${voteAverage}점입니다.`;
// }
// const message = getMovieMessage("인셉션", 8.4);
// console.log(message);

// #2
const getMovieMessage= (title, voteAverage) => {
    return `${title}의 평점은 ${voteAverage}점입니다.`;

}

// 03. 함수의 반환값 사용하기
const message= getMovieMessage("인셉션", 8.4);
console.log(message);



// 04. 제목 변경하기
const title2 = document.querySelector(".title") ;
console.log(title2.textContent);
title2.textContent = "오늘의 추천 영화"
console.log(title2.textContent);

// 05. 설명 영역 강조하기
const description = document.querySelector(".description");

description.classList.add("text-primary", "fw-bold");

console.log(description.classList.contains("text-primary"));
console.log(description.classList.contains("fw-bold"));


// 06. 함수의 반환값을 화면에 표시하기
const movieList = document.querySelector("#movie-list");

const movieCard =document.createElement("div");
movieCard.textContent = message;
movieCard.classList.add("border","rounded","p-3","mb-2")
movieList.append(movieCard);




// 07. 영화 하나 더 추가하기

// const secMessage=getMovieMessage("인터스텔라", 8.7);
const secMessage = getMovieMessage("인터스텔라", 8.7);
console.log(secMessage);

const secondMovieCard=document.createElement("div");
secondMovieCard.textContent= secMessage;

secondMovieCard.classList.add("border","rounded","p-3","mb-2")
movieList.append(secondMovieCard);

// 08. 요소 삭제해보기
// secondMovieCard.remove(secMessage);



// function showMessage(){
// 실행시키고 싶은 것을 이 중괄호안에 넣는다.
// }
// const showMessage = function showMessage(){
// console.log("hello")
// };
// 함수도 선언이 가능하다.

// showMessage() 쇼메세지이라는 함수를 호출하겠다.

