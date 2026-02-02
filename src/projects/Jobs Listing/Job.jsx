const Job = (props) => {
  const {
    company,
    contract,
    featured,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];

  return (
    <div
      className={`w-[80vw] md:w-[70vw] bg-white relative flex flex-col md:flex-row items-start md:items-center py-4 md:py-6 px-8 rounded-[5px] mb-8 md:mb-0 my-[1.3rem] shadow-[0_4px_6px_4px_#5ba4a433] ${
        featured ? "border-l-[5px] border-l-[#5ba4a4]" : ""
      }`}
    >
      <div className="absolute flex items-center pr-6 md:static -top-8 md:top-0">
        <img src={logo} alt="" className="w-16 h-auto md:w-full" />
      </div>
      <div className="flex flex-col flex-grow-0 py-[1.3rem] md:py-0 md:flex-grow">
        <div className="company">
          <span className="font-bold text-[#5ba4a4] mr-[0.8rem]">
            {company}
          </span>
          {props.data.new && (
            <span className="text-white bg-[#5ba4a4] rounded-2xl font-bold uppercase p-[0.4rem] text-[0.7rem] mr-[0.8rem]">
              new!
            </span>
          )}
          {props.data.featured && (
            <span className="text-white bg-[#2c3a3a] rounded-2xl font-bold uppercase p-[0.4rem] text-[0.7rem] mr-[0.8rem]">
              featured
            </span>
          )}
        </div>

        <div className="font-bold text-[1.1rem] inline-block py-[0.7rem] cursor-pointer hover:text-[#5ba4a4]">
          {position}
        </div>

        <div className="text-[#7b8e8e]">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-start md:justify-between border-t border-t-[#7b8e8e] md:border-t-0 pt-4 md:pt-0">
        {keywords.map((key, id) => (
          <span
            className="mr-4 last:mr-0 mb-4 md:mb-0 bg-[#effafa] text-[#5ba4a4] font-bold p-2 rounded-[5px] cursor-pointer hover:bg-[#5ba4a4] hover:text-white"
            onClick={() => props.setkeywords(key)}
            key={id}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Job;
