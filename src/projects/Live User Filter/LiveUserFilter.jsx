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
        }
      )
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="live-user-filter-body bg-black font-['Roboto'] flex items-center justify-center h-screen m-0">
      <div className="container flex justify-center flex-col rounded-[5px] overflow-hidden w-[300px] [box-shadow:3px_3px_10px_rgba(0,0,0,0.2)]">
        <header className="header bg-[#3e57db] text-white py-[30px] px-[20px]">
          <h4 className="title m-0 text-[1rem] font-bold">Live User Filter</h4>
          <small className="subtitle inline-block opacity-[0.8] mb-[20px] mt-[5px] mx-0">
            Search by name and/or location
          </small>
          <input
            type="text"
            className="bg-black/30 border-0 rounded-[50px] text-white text-sm py-[10px] px-[15px] w-full focus:outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </header>

        <ul className="user-list bg-white list-none m-0 p-0 max-h-[400px] overflow-y-auto">
          {searchInput
            ? users
                .filter((user) =>
                  user.name.first
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
                .map((user, index) => (
                  <li
                    className="flex p-[20px] gap-3 border border-[#eee]"
                    key={index}
                  >
                    <img
                      className="rounded-1/2 object-cover h-[50px] w-[50px]"
                      src={user.picture.large}
                      alt={user.name.first}
                    />
                    <div className="user-info ml-[10px] text-black">
                      <h4 className="mb-[10px] mx-0 mt-0 font-bold">
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
                <li
                  className="flex p-[20px] gap-3 border border-[#eee]"
                  key={index}
                >
                  <img
                    className="rounded-full object-cover h-[50px] w-[50px]"
                    src={user.picture.large}
                    alt={user.name.first}
                  />
                  <div className="text-black user-info">
                    <h4 className="mb-[10px] mx-0 mt-0 font-bold">
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
