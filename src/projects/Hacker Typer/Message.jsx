const Message = ({ type }) => {
  return (
    <div
      className={`text-5xl text-center border-[2px] p-6 absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${type}`}
    >
      {type === "denied" ? "Access Denied" : "Access Granted"}
    </div>
  );
};

export default Message;
