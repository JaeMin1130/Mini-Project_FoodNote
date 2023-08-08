import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  // console.log("토큰", accessToken);
  // if (accessToken && accessToken != null) {
  //   headers.append("Authorization", accessToken);
  // }
  let headers = new Headers({
    "Content-Type": "application/json",
    Authorization: accessToken,
  });

  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    // POST method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) => {
      console.log(options.url);
      if (response.status == 200) {
        return response.json();
      } else if (response.status == 403) {
        window.location.href = "/login";
      } else {
        console.log("other errors");
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}

export function signout() {
  localStorage.removeItem("ACCESS_TOKEN");
  window.location.href = "/login";
}
