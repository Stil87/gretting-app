import { useSelector } from "react-redux";

export default function () {
  const message = useSelector((state) => state.message);

  return <div>{message && <h1>{message}</h1>}</div>;
}
