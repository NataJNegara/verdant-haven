import { useSearchParams } from "react-router-dom";

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0);

  const handleClick = function (value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };

  return (
    <>
      {options.map((option) => (
        <button
          key={option.value}
          className={`text-start p-2 rounded-sm ${
            currentFilter === option.value ? "bg-slate-100" : ""
          }`}
          onClick={() => handleClick(option.value)}>
          {option.label}
        </button>
      ))}
    </>
  );
}
