import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter) ?? ""; // ← boş string fallback

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search…"
      />
    </label>
  );
}