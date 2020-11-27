import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "./actions";

export default function Form() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.loading);

  function onSubmit(e) {
    e.preventDefault();
    const firstName = e.target.elements.first_name.value;
    dispatch(fetchMessage(firstName));
  }

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      <form onSubmit={onSubmit}>
        <h2>What's your name?</h2>
        <input type="text" name="first_name" />
        <button>Submit</button>
      </form>
    </>
  );
}
