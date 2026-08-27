// console.log("JavaScript 시작!");
// console.log("JavaScript 시작!");
// console.log("JavaScript 시작!");

// // const servicename(선언)="할당" ;
// const serviceName = "my service";
// // servicename="다른 이름";

// console.log(serviceName);


// let count = 1;
// console.log(count);

// const serviceName="AI Store";
// const productPrice=39000;
// console.log(serviceName);
// console.log(productPrice);

// const isLoggedIn="true"
// console.log(isLoggedIn);

// let number= 3;
// console.log(number);
// number=2;
// console.log(number);

// const customerName="민진";
// const productName="딸기";

// console.log("안녕하세요, " + customerName + "님");

// const voteAverage =8.4;
// const ratingTest = voteAverage>=8 ? "추천 영화" : "일반 영화";
// console.log(ratingTest);

// const isMember =false;
// if(isMember) {
//     console.log("예매 페이지로 이동합니다.")
// }
// else {console.log("로그인하세요.")}


// const isMember =true;
// const totalPrice=36000;

// if(isMember && totalPrice>=30000) {
//     consol.log("회원혜택 적용")
// } ;
// else if(isMember){
//     consol.log("기본 회원 혜택 적용")

// }

// else{
//     consol.log("일반 예매")
// }

// // const 변수 수정 불가능, 배열안에 요소를 수정할 수 있다.
// 맨마지막 요소를 제언한다. pop push

// const movieTitles = ["인셉션", "코난","오만과 편견"];
// const movies=[
//     {
//     id: 1,
//     title:"인셉션",
//     voteAverage:8.4,
//     releaseDate:"2026-01-01"
//    },
//     {
//     id: 2,
//     title:"코난",
//     voteAverage:10,
//     releaseDate:"2025-01-01"
//    },
//     {
//     id: 3,
//     title:"오만과 편견",
//     voteAverage:7.4,
//     releaseDate:"2024-01-01"
//    }

// ];


// consol.log(movies[2].title);
// 01. 영화 데이터 변수 만들기
const title="인터스텔라";
const voteAverage=8.7;
const voteCount= 32000;
const popularity=150.5;
const releaseDate="2014-11-05";
const originalLanguage="en"

// 02. 영화 데이터 Console에 출력하기
console.log(title);
console.log(voteAverage);
console.log(voteCount);
console.log(popularity);
console.log(releaseDate);
console.log(originalLanguage);

// 03. Number 데이터 연산
const additionalVoteCount=100;
console.log(voteCount + additionalVoteCount);

// 04. String 데이터 연산
const genre="SF";
const category="영화"
console.log(genre + " " + category);

// 05. 영화 정보를 문자열로 조합하기
// console.log("영화 제목: " + title);
// console.log("평점: "+ voteAverage);
// console.log("개봉일: " + releaseDate);


// 06. Template Literal 사용하기
console.log(`영화 제목: ${title}`);
console.log(`평점: ${voteAverage}`);
console.log(`개봉일: ${releaseDate}`);

// 07. 영화 소개 문장 만들기
// 인터스텔라는 2014-11-05에 개봉한 영화이며, 현재 평점은 8.7점이고 32000명이 평가했습니다.
console.log(`${title}는 ${releaseDate}에 개봉한 영화이며, 현재 평점은 ${voteAverage}점이고 ${voteCount}명이 평가했습니다.`)

// const showMovie = function(title) {
//     return title;
// };

// showMovie("인셉션");

// function showMessage(){
//     console.log("주문이 완료되었습니다!");
// }

// function orderCoffee(menu, callback){
//     console.log(`${menu} 주문을 접수 합니다.`)

//     callback();
// };


// orderCoffee("아메리카노", showMessage);

// // showMessage();

// function calculateTicketPrice(price, count) {
//     return price * count;
//    }
//    const totalPrice = calculateTicketPrice(12000, 3);
//    console.log(`총 예매 금액: ${totalPrice}원`);




// function receiveTicketPrice(price, count){
//     return price*count;
// }

// const totalPPrice= receiveTicketPrice(10000, 3);
// console.log(`총 금액: ${totalPPrice}`);

// console.log(document);

// const title= document.querySelector(".title");