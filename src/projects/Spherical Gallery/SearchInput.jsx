import axios from "axios";
import { useRef } from "react";

const SearchInput = (props) => {
  const timeout = useRef(0);
  const changeHandler = (e) => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(async () => {
      const el = e.target;
      if (el.value.length > 0) {
        const res = await axios.get("https://pixabay.com/api", {
          params: {
            key: process.env.REACT_APP_PIXABAY_API_KEY,
            q: encodeURIComponent(el.value),
            image_type: "photo",
            per_page: 44,
            orientation: "horizontal",
          },
        });

        props.setImageData(res.data.hits.map((it) => it.webformatURL));
      }
    }, 600);
  };

  return (
    <input
      type="text"
      className="rounded-lg block my-2 py-1 bg-white w-64 text-lg text-center text-black"
      onChange={changeHandler}
    />
  );
};

export default SearchInput;
