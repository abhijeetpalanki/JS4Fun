import { useState, useEffect } from "react";
import SkeletonUser from "./SkeletonUser";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.log(error.message);
      }
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2 className="text-2xl font-bold text-black pb-[10px] border-b border-b-[#eee]">
        User Details
      </h2>
      {profile ? (
        <div className="my-5 mx-auto py-[10px] px-[15px]">
          <h3 className="text-xl font-bold">{profile.username}</h3>
          <p className="">{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      ) : (
        <SkeletonUser theme="dark" />
      )}
    </div>
  );
};

export default User;
