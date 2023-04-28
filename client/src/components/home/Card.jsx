import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { downloadImage } from "../../utils";

const Card = ({ _id, name, prompt, image, deletePost }) => {
  return (
    <div className="relative group rounded-lg card shadow-lg">
      <img
        className="w-full h-auto object-cover rounded-lg"
        src={image}
        alt={prompt}
      />
      <div className="group-hover:block absolute top-3 right-3 hidden">
        <button
          type="button"
          onClick={() => deletePost(_id)}
          className="bg-transparent border-transparent"
        >
          <div className="flex justify-center items-center w-10 h-10 rounded-full text-white bg-transparent hover:bg-black hover:opacity-40 text-2xl">
            <IoMdClose />
          </div>
        </button>
      </div>
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-slate-900 m-2 p-4 rounded-md opacity-80">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>

        <div className="flex justify-between items-center gap-2 mt-5">
          <div className="flex items-center gap-2">
            <div className="flex justify-center items-center w-7 h-7 rounded-full object-cover bg-green-800 text-sm text-white font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, image)}
            className="bg-transparent border-transparent"
          >
            <div className="flex justify-center items-center w-7 h-7 rounded-full text-white bg-transparent text-2xl">
              <MdOutlineDownloadForOffline />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
