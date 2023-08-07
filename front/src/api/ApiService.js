import { API_BASE_URL } from "./api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  // 로컬 스토리지에서 ACCESS TOKEN 가져오기
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken != null) {
    headers.append("authorization", accessToken);
  }

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
      if (response.status == 200) {
        return response.json();
      } else if (response.status == 403) {
        window.location.href = "/login";
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
