import { useEffect, useState } from "react";
import axios from "axios";

const GithubProfiles = () => {
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);
  const [searchInput] = useState("abhijeetpalanki");
  const [isError, setIsError] = useState(false);
  const [isRepoError, setIsRepoError] = useState(false);

  const APIURL = "https://api.github.com/users/";

  const getUser = async (username) => {
    try {
      await axios(APIURL + username).then((res) => setUserInfo(res.data));
    } catch (err) {
      console.log(err.message);
      if (err.response.status === 404) {
        setIsError(true);
      }
    }
  };

  const getRepos = async (username) => {
    try {
      await axios(
        APIURL + username + "/repos?sort=updated&direction=desc",
      ).then((res) => setRepos(res.data));
    } catch (err) {
      console.log(err.message);
      setIsError(true);
      setIsRepoError(true);
    }
  };

  const submitUser = (e) => {
    e.preventDefault();
    const user = e.target[0].value;

    if (user) {
      getUser(user);
      getRepos(user);
    }
  };

  useEffect(() => {
    getUser(searchInput);
    getRepos(searchInput);
  }, [searchInput]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <form
        className="w-full max-w-100 sm:max-w-3xl"
        id="form"
        onSubmit={submitUser}
      >
        <input
          type="text"
          className="w-full block bg-[#4c2885] border-none rounded-[10px] text-white p-4 mb-8 text-base placeholder:text-[#bbb] focus:outline-none shadow-[0_5px_10px_#9aa0b9c,0_15px_40px_#00000019]"
          id="search"
          placeholder="Search a Github User"
        />
      </form>

      <main>
        {!isError ? (
          <div className="max-w-3xl bg-[#4c2885] rounded-[20px] flex flex-col md:flex-row items-center justify-center p-2 md:p-12 m-0 md:mx-6 shadow-[0_5px_10px_#9aa0b9c,0_15px_40px_#00000019]">
            <div>
              <img
                src={userInfo.avatar_url}
                alt={userInfo.name}
                className="rounded-full border-10 border-[#2a2a72]"
                loading="lazy"
              />
            </div>
            <div className="text-[#eee] ml-8 text-center">
              <h2 className="mt-0 text-3xl font-bold">{userInfo.name}</h2>
              <p className="mx-0 my-4">{userInfo.company}</p>
              <a
                className="no-underline text-white bg-[#2a2a72] text-xl rounded-lg py-1.5 px-2.5 mr-2.5 mb-2.5"
                href={userInfo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Go To Portfolio
              </a>
              <ul className="list-none flex justify-between p-0 max-w-100 my-4 mx-0">
                <li className="flex items-center mr-4">
                  {userInfo.followers}{" "}
                  <strong className="text-[0.9rem] ml-2">Followers</strong>
                </li>
                <li className="flex items-center mr-4">
                  {userInfo.following}{" "}
                  <strong className="text-[0.9rem] ml-2">Following</strong>
                </li>
                <li className="flex items-center mr-4">
                  {userInfo.public_repos}{" "}
                  <strong className="text-[0.9rem] ml-2">Repositories</strong>
                </li>
              </ul>

              <div>
                {repos.slice(0, 5).map((repo, index) => (
                  <a
                    key={index}
                    href={repo.svn_url}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline text-white bg-[#2a2a72] text-[0.7rem] py-1.5 px-2.5 mr-2.5 mb-2.5 inline-block"
                  >
                    {repo.full_name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          isRepoError && (
            <div className="flex-col sm:flex-row">
              <h1>No profile with this username</h1>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default GithubProfiles;
