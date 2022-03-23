import { api } from "../api/advice_slip";

function getRandomAdvice() {
  return fetch(api.url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.statusText);
      }
    })
    .then((json) => {
      return json;
    })
    .catch((err) => {
      return err;
    });
}

export { getRandomAdvice };
