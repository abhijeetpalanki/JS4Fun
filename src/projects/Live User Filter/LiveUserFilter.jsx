import { useState, useEffect } from "react";

const LiveUserFilter = () => {
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = async () => {
    await fetch("https://randomuser.me/api?results=50")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      )
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container flex justify-center flex-col rounded-[5px] overflow-hidden w-75 shadow-[3px_3px_10px_#00000033]">
        <header className="bg-[#3e57db] text-white text-center py-7.5 px-5">
          <h4 className="m-0 text-[1rem] font-bold">Live User Filter</h4>
          <small className="inline-block opacity-80 mb-5 mt-1.25 mx-0">
            Search by name and/or location
          </small>
          <input
            type="text"
            className="bg-black/30 border-0 rounded-[50px] text-white text-sm py-2.5 px-3.75 w-full focus:outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </header>

        <ul className="bg-white list-none m-0 p-0 max-h-100 overflow-y-auto">
          {searchInput
            ? users
                .filter((user) =>
                  user.name.first
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()),
                )
                .map((user, index) => (
                  <li
                    className="flex p-5 gap-3 border border-[#eee]"
                    key={index}
                  >
                    <img
                      className="rounded-1/2 object-cover h-12.5 w-12.5"
                      src={user.picture.large}
                      alt={user.name.first}
                    />
                    <div className="ml-2.5 text-black">
                      <h4 className="mb-2.5 mx-0 mt-0 font-bold">
                        {user.name.first} {user.name.last}
                      </h4>
                      <p className="text-[12px]">
                        {user.location.city} ({user.location.state}),{" "}
                        {user.location.country}
                      </p>
                    </div>
                  </li>
                ))
            : users.map((user, index) => (
                <li className="flex p-5 gap-3 border border-[#eee]" key={index}>
                  <img
                    className="rounded-full object-cover h-12.5 w-12.5"
                    src={user.picture.large}
                    alt={user.name.first}
                  />
                  <div className="text-black user-info">
                    <h4 className="mb-2.5 mx-0 mt-0 font-bold">
                      {user.name.first} {user.name.last}
                    </h4>
                    <p className="text-[12px]">
                      {user.location.city} ({user.location.state}),{" "}
                      {user.location.country}
                    </p>
                  </div>
                </li>
              ))}
          {error && (
            <li>
              <h3>Error: {error.message}</h3>
            </li>
          )}

          {!isLoaded && (
            <li>
              <h3>Loading...</h3>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LiveUserFilter;
