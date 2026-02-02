import { useCallback, useState } from "react";
import bg from "./library-management-bg.png";
import loader from "./loader.svg";
import coverNotFound from "./cover_not_found.jpg";

const Loader = () => (
  <div className="flex justify-center px-0 py-16">
    <img src={loader} alt="loader" className="w-30" />
  </div>
);

const BookHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState("");
  const booksWithCovers = books.map((book) => {
    return {
      ...book,
      id: book.id.replace("/works", ""),
      cover_img: book.cover_id
        ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
        : coverNotFound,
    };
  });

  const fetchBooks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://openlibrary.org/search.json?title=${searchTerm}`,
      );
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((book) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
          } = book;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count,
            first_publish_year,
            title,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchBooks();
    }
  };

  return (
    <div>
      <header
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col justify-center items-center h-62.5"
      >
        <h1 className="mb-5 text-3xl text-white">Book Hub</h1>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="Ex: The Lost World..."
          className="h-10 w-100 outline-none p-2 text-white border border-white"
        />
      </header>

      <div>
        {loading ? (
          <Loader />
        ) : (
          <section
            className={booksWithCovers.length > 0 ? "px-8 py-12" : "p-0"}
          >
            <div>
              <div>
                <h2 className="text-2xl font-bold uppercase">{resultTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {booksWithCovers.slice(0, 30).map((item, index) => {
                  return (
                    <div
                      className="flex flex-col justify-between py-12 px-8 rounded-md bg-white shadow-[#000000c_0px_5px_15px_0px] transition hover:shadow-[#00000026_0px_5px_15px_0px]"
                      key={index}
                    >
                      <div>
                        <img
                          src={item.cover_img}
                          alt="cover"
                          className="max-w-45 lg:max-w-30 mx-auto"
                        />
                      </div>
                      <div className="mt-8 text-center text-black">
                        <div className="mb-3 text-lg font-bold leading-snug">
                          <span>{item.title}</span>
                        </div>

                        <div className="mb-1 text-base leading-snug">
                          <span className="font-bold uppercase">Author: </span>
                          <span>{item.author.join(", ")}</span>
                        </div>

                        <div className="text-base edition-count">
                          <span className="font-bold uppercase">
                            Total Editions:{" "}
                          </span>
                          <span className="opacity-80">
                            {item.edition_count}
                          </span>
                        </div>

                        <div className="text-sm italic opacity-60">
                          <span className="font-bold uppercase">
                            First Publish Year:{" "}
                          </span>
                          <span className="opacity-80">
                            {item.first_publish_year}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BookHub;
