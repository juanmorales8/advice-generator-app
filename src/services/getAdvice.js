import { api } from "../api/advice_slip";

function getRandomAdvice() {
  const response = fetch(api.url)
    .then((res) => {
      console.log("Res: ", res);
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((jsonRes) => jsonRes)
    .catch((error) => {
      return {
        err: true,
        errorCode: error.status || "00",
        errorMessage: error.statusText || "An error ocurred",
      };
    });

  return response;
}

export { getRandomAdvice };
