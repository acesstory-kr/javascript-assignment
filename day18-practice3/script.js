// 실습 3) 진짜 응답의 구조 탐색하기
const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const URL = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

async function getNowPlaying() {}

getNowPlaying();


// 03. fetch()로 서버에 Request 보내기

// const result = fetch(
//   "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
//   options,
// );

// console.log(result); // Promise { <pending> }

// async function getResponse() {
//    const response = await fetch(
//     "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
//     options,
//    );
   
//    console.log(response);
// }
// getResponse();

const result= fetch(URL, options,);
console.log(result);

async function getPopularMovies(){
  const response = await fetch(URL, options);
  const data =await response.json();
  console.log(data);

  const firstMovie = data.results[0];
  console.log(firstMovie);


// 05. 첫 번째 영화 가져오기
// 06. 영화 제목과 평점 가져오기
const { title, vote_average} = firstMovie;
console.log(`제목: ${title}`);
console.log(`평점: ${vote_average}`);


}

getPopularMovies();

