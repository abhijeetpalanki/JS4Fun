import React, { useEffect, useState } from "react";
import "./GithubProfiles.css";
import axios from "axios";

const GithubProfiles = () => {
  const [userInfo, setUserInfo] = useState({});
  const [repos, setRepos] = useState([]);
  const [searchInput, setSearchInput] = useState("abhijeetpalanki");
  const [isError, setIsError] = useState(false);
  const [isRepoError, setIsRepoError] = useState(false);

  const APIURL = "https://api.github.com/users/";

  const getUser = async (username) => {
    try {
      await axios(APIURL + username).then((res) => setUserInfo(res.data));
    } catch (err) {
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
        className="user-form w-full max-w-[800px]"
        id="form"
        onSubmit={submitUser}
      >
        <input
          type="text"
          className="w-full block bg-[#4c2885] border-none rounded-[10px] text-white p-[1rem] mb-[2rem] text-[1rem] placeholder:text-[#bbb] focus:outline-none"
          id="search"
          placeholder="Search a Github User"
        />
      </form>

      <main id="main">
        {!isError ? (
          <div className="card max-w-[800px] bg-[#4c2885] rounded-[20px] flex items-center justify-center p-[3rem] my-0 mx-[1.5rem] md:flex-row">
            <div>
              <img
                src={userInfo.avatar_url}
                alt={userInfo.name}
                className="avatar rounded-[50%]"
              />
            </div>
            <div className="user-info text-[#eee] ml-[2rem]">
              <h2 className="text-[32px] font-bold mt-0">{userInfo.name}</h2>
              <p className="my-[16px] mx-0">{userInfo.company}</p>
              <a href={userInfo.html_url} target="_blank" rel="noreferrer">
                Go To Portfolio
              </a>
              <ul className="list-none flex justify-between p-0 max-w-[400px] my-[16px] mx-0">
                <li>
                  {userInfo.followers} <strong>Followers</strong>
                </li>
                <li>
                  {userInfo.following} <strong>Following</strong>
                </li>
                <li>
                  {userInfo.public_repos} <strong>Repositories</strong>
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
            <div className="card">
              <h1>No profile with this username</h1>
            </div>
          )
        )}
      </main>
    </div>
  );
};

export default GithubProfiles;
