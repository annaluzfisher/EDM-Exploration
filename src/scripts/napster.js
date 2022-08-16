//g.71` is id for electronic
export const myFetch = function(){
const token = "MTAwYWE5YzktMjI2OS00ZWYxLTlhMjYtMWQ4OGZkZGU0YjA1";
const appId = "eec071c2-f5c6-44fe-86c9-29ccd4079b5c";
const getAllGenres = fetch(
  "https://api.napster.com/v2.2/genres/g.71?apikey=MTAwYWE5YzktMjI2OS00ZWYxLTlhMjYtMWQ4OGZkZGU0YjA1",
  {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Apikey ${token}`,
      client_id: `${appId}`,
      username: "annitafisher@gmail.com",
    },
  }
);
getAllGenres
  .then((response) => response.json())
  .then((response) => console.log(response));
}

  // if call async funtion with await will not retrun promsie