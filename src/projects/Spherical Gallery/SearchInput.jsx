import axios from "axios";
import { useRef } from "react";

const SearchInput = (props) => {
  const timeout = useRef(0);
  const changeHandler = (e) => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(async () => {
      const el = e.target;
      if (el.value.length > 0) {
        try {
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
        } catch (error) {
          console.log(error.message);
        }
      }
    }, 600);
  };

  return (
    <input
      type="text"
      className="block w-64 py-1 my-2 text-lg text-center text-black bg-white rounded-lg"
      onChange={changeHandler}
    />
  );
};

export default SearchInput;
