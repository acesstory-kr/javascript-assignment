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
    {
      title: "테넷",
      voteAverage: 7.3,
    },
  ];

//   02. find()로 영화 찾기
const foundMovie= movies.find((movie) =>{
    return movie.title ==="인터스텔라";
});

console.log(`${foundMovie.title}의 평점은 ${foundMovie.voteAverage}점입니다`);

// 03. filter()로 평점이 높은 영화 찾기

const filteredMovie=movies.filter((movie) =>{
    return movie.voteAverage>=8.5;

});
console.log(filteredMovie);

// 04. map()으로 영화 제목만 가져오기
const mappedMovie=movies.map((movie)=>{
 return movie.title;
} 
)
console.log(mappedMovie);

// 05. 검색어 가공하기

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchResult = document.querySelector("#search-result");


searchForm.addEventListener ("submit",(event) =>{
    event.preventDefault();
    
   const modifyInput= searchInput.value.toLowerCase().trim();
    searchResult.textContent= `검색어: ${modifyInput}`
// console.log(`검색어: ${modifyInput}`);

});


// 06. 어떤 배열 메서드를 사용할지 구분하기
// A:find
// B:filter
// C:map