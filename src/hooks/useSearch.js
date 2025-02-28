import { useEffect, useRef, useState } from "react";
import useFormIcon from "./useFormIcon";

const useSearch = (initialQuery) => {
  const { searchIcon } = useFormIcon();
  const [query, setQuery] = useState(initialQuery[0]);
  const [sugest, setSugest] = useState([]);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (query === initialQuery[0]) {
      setSugest([]);
      initialQuery.forEach((query, index) => {
        if (index !== 0 && index <= 5) {
          setSugest((prev) => [...prev, query]);
        }
      });
    }
  }, [query, initialQuery]);

  const handleOnClickSugest = (e) => {
    inputRef.current.value = e.target.innerText;
    setQuery(e.target.innerText);
  };

  const handleOnChangeInput = (e) => {
    if (e.target.value === "") {
      setQuery(initialQuery[0]);
    } else {
      setQuery(e.target.value);
    }

    setSugest([]);
    if (e.target.value !== "") {
      const newSugest = initialQuery.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSugest(newSugest);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSugest([]);
    }
  };
  return {
    searchIcon,
    query,
    sugest,
    focus,
    setFocus,
    inputRef,
    handleOnClickSugest,
    handleOnChangeInput,
    handleKeyDown,
  };
};

export default useSearch;
