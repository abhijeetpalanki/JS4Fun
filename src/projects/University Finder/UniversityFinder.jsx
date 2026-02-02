import { useState } from "react";

const UniversityFinder = () => {
  const [userValue, setUserValue] = useState("");
  const [universities] = useState([
    {
      id: 1,
      location: "Cambridge",
      name: "Massachusetts Institute of Technology",
    },
    { id: 2, location: "Cambridge", name: "Harvard University" },
    {
      id: 3,
      location: "Stanford",
      name: "Stanford University",
    },
    {
      id: 4,
      location: "Ithaca",
      name: "Cornell University",
    },
    {
      id: 5,
      location: "Berkeley",
      name: "University of California, Berkeley",
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-black">
      <input
        className="my-5 p-[10px] text-[20px] outline-none border-none rounded"
        placeholder="Search Name..."
        onChange={(e) => setUserValue(e.target.value.toLowerCase())}
      />

      <table className="w-[350px] md:w-[900px] my-[50px] mx-0 border-spacing-[15px] text-[#444]">
        <tbody>
          <tr className="mb-5">
            <th className="w-[250px] text-xl">Location</th>
            <th className="w-[250px] text-xl">Name</th>
          </tr>
          {universities.length > 0 &&
            universities
              .filter((uni) =>
                uni.name.toLowerCase().includes(userValue.toLowerCase())
              )
              .map((item) => (
                <tr className="mb-5" key={item.id}>
                  <td className="w-[250px] text-center text-xl">
                    {item.location}
                  </td>
                  <td className="w-[250px] text-center text-xl">{item.name}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniversityFinder;
