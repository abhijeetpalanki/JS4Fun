import Modal from "react-modal";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="bg-[#f4f5f7] rounded-sm m-[45px_0_80px] min-h-112.5 w-200 outline-none p-5"
      overlayClassName="flex justify-center fixed top-0 left-0 right-0 bottom-0 bg-black/50"
    >
      <div className="flex">
        <h1 className="flex-[1_90%]">{item.title}</h1>
        <button
          className="h-10 w-8.75 text-xl text-[#031d2c] border-none rounded-[25px] hover:bg-[#dcdcdc] outline-none bg-transparent transition-all duration-800 ease-in-out"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div>
        <h2>Descripion</h2>
        <p>{item.content}</p>
        <h2>Status</h2>
        <p>
          {item.icon}{" "}
          {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
        </p>
      </div>
    </Modal>
  );
};

export default Window;
