import { getCoolStoryBro } from "./apiService";

export function setMessage(message) {
  return { type: "SET_MESSAGE", message };
}

export function fetchMessage(firstName) {
  return (dispatch) => {
    getCoolStoryBro(firstName).then((res) => {
      const message = `${res.message} ${res.subtitle}`;
      dispatch(setMessage(message));
    });
  };
}
