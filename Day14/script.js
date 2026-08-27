// 02. 버튼의 Click Event 처리하기
const button = document.querySelector("#recommend-button");
const result = document.querySelector("#recommend-result");

button.addEventListener ("click", ()=>
    {result.textContent = "오늘의 추천 영화는 인셉션입니다.";});

// button.addEventListener( ("click"),()=>
// { result.textContent = `오늘의 추천 영화는 ${title}입니다.`;
// });
// const title ="인셉션";

// 03. Form 제출 처리하기
const form = document.querySelector("#search-form");
const searchInput= document.querySelector("#search-input");
const searchResult= document.querySelector("#search-result");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const keyword = searchInput.value.trim();
    if (keyword==="") {
        return;
    };
    searchResult.textContent =`검색한 영화: ${keyword}`;

searchInput.value="";
});


// 06. forEach()로 영화 목록 출력하기
const movies = [
    {
      title: "인셉션",
      voteAverage: 8.4,
    },
    {
      title: "인터스텔라",
      voteAverage: 8.7,
    },
    {
      title: "다크 나이트",
      voteAverage: 9.0,
    },
  ];

movies.forEach((movie) =>{
 console.log(`${movie.title}의 평점은 ${movie.voteAverage}점입니다.`);
});

// 07. 영화 목록을 화면에 출력하기

const movieList = document.querySelector("#movie-list");

movies.forEach((movie) =>{
    const movieItem= document.createElement ("li");
    movieItem.textContent=movie.title;
    movieList.append(movieItem);
});

// 요소를 만들어주고, 적절한 textContent가 들어가야함. 그 후 append를 해야함.
// createElement는 함수라서 =을 작성시 구현이 안된다.