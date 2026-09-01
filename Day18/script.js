const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmU4OGZhOGVlYzhkZjlmM2FhYTc5ZDJlOGM1NWUxMiIsIm5iZiI6MTc4ODIyNzE4MS42MTUsInN1YiI6IjZhOTYyZTZkZmMzMDkzNDI0Y2M4NTgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0F6eLlrcRmfm-GmxW9NbSrLnIt46uyP1Qv8f0EMLqw0";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const result = fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
  options,
);

console.log(result); // Promise { <pending> }

async function getResponse() {
   const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    options,
   );
   
   console.log(response);
}
getResponse();

async function getData(){
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
    options,
  );
  const data = await response.json();
  console.log(data);
}

// async function getData() {
//   const response = await fetch(
//     "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
//     options,
//   );

//   const data = await response.json(); // 이 변환도 시간이 걸리므로 await

//   console.log(data); // { page: 1, results: Array(20), ... }
// }
getData();


// 깃허브
// git clone[repository url] // 저장소 복사
// Branch 후 branch-merge 실행(PR전에)