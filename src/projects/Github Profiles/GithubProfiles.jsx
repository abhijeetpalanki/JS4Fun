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
        APIURL + username + "/repos?sort=updated&direction=desc"
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
    <div className="github-profiles-body font-['Poppins'] text-white bg-[#2a2a72] flex flex-col items-center justify-center h-screen overflow-hidden m-0 p-0">
      <form
        className="w-full max-w-[400px] sm:max-w-[800px]"
        id="form"
        onSubmit={submitUser}
      >
        <input
          type="text"
          className="w-full block bg-[#4c2885] border-none rounded-[10px] text-white p-[1rem] mb-[2rem] text-[1rem] placeholder:text-[#bbb] focus:outline-none [box-shadow:0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(0,0,0,0.1)]"
          id="search"
          placeholder="Search a Github User"
        />
      </form>

      <main>
        {!isError ? (
          <div className="max-w-[800px] bg-[#4c2885] rounded-[20px] flex flex-col md:flex-row items-center justify-center p-[3rem] my-0 mx-[1.5rem] [box-shadow:0_5px_10px_rgba(154,160,185,0.05),0_15px_40px_rgba(0,0,0,0.1)]">
            <div>
              <img
                src={userInfo.avatar_url}
                alt={userInfo.name}
                className="rounded-1/2 border-[10px] border-[#2a2a72]"
              />
            </div>
            <div className="user-info text-[#eee] ml-[2rem]">
              <h2 className="text-[32px] font-bold mt-0">{userInfo.name}</h2>
              <p className="my-[16px] mx-0">{userInfo.company}</p>
              <a href={userInfo.html_url} target="_blank" rel="noreferrer">
                Go To Portfolio
              </a>
              <ul className="list-none flex justify-between p-0 max-w-[400px] my-[16px] mx-0">
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

              <div id="repos">
                {repos.slice(0, 5).map((repo, index) => (
                  <a
                    key={index}
                    href={repo.svn_url}
                    target="_blank"
                    rel="noreferrer"
                    className="repo no-underline text-white bg-[#2a2a72] text-[0.7rem] py-[0.25rem] px-[0.5rem] mr-[0.5rem] mb-[0.5rem] inline-block"
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
