import { getCoolStoryBro } from "./apiService";

export function setMessage(message) {
  return { type: "SET_MESSAGE", message };
}

export function setLoading(isLoading) {
  return { type: "SET_LOADING", isLoading };
}

export function fetchMessage(firstName) {
  return (dispatch) => {
    dispatch(setMessage(""));
    dispatch(setLoading(true));

    getCoolStoryBro(firstName)
      .then((res) => {
        const message = `${res.message} ${res.subtitle}`;
        dispatch(setMessage(message));
      })
      .finally(() => dispatch(setLoading(false)));
  };
}
