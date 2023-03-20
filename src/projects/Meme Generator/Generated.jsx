import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

const Generated = () => {
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const navigate = useNavigate();
  const location = useLocation();
  const { projectId } = useParams();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div>
      <button
        onClick={() => navigate(`/projects/${projectId}`)}
        className="bg-[#f0ad4e]"
      >
        Make More Memes
      </button>
      {url && <img alt="meme" src={url} />}
      <button onClick={copyLink} className="bg-[#0275d8] mt-5">
        {copied ? "Link copied!" : "Copy link"}
      </button>
    </div>
  );
};

export default Generated;
