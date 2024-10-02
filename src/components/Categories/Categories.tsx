import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../Redux/slices/filterSlice";

interface FilterState {
  categoryId: number;
  searchValue: string;
  pagination: number;
  sort: {
    name: string;
    sortProperty: string;
  };
  categories: string[];
}

interface RootState {
  filter: FilterState;
}

export default function Categories() {
  const { categoryId, categories } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch();

  const onChangeCategory = (i: number) => {
    dispatch(setCategoryId(i));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((e, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={categoryId === i ? "active" : ""}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  );
}
