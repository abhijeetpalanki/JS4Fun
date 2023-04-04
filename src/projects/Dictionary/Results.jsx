import Meanings from "./Meanings";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

const Results = ({ loading, wordError, response }) => {
  if (loading) {
    return (
      <div className="container flex flex-col max-w-2xl p-4 mx-auto space-y-3 animate-pulse">
        <div className="h-6 mt-5 bg-gray-300 rounded-md"></div>
        <div className="h-40 mt-5 bg-gray-300 rounded-md"></div>
        <div className="h-8 mt-5 bg-gray-300 rounded-md"></div>
        <div className="h-40 mt-5 bg-gray-300 rounded-md"></div>
      </div>
    );
  }

  if (wordError) {
    return (
      <h3 className="mt-10 font-semibold text-center text-gray-500">
        No Definitions Found 😔
      </h3>
    );
  }

  return (
    <div className="container max-w-2xl p-4 mx-auto">
      {response && (
        <div>
          <h3 className="mt-4 text-2xl font-bold">Meaning & Definitions:</h3>
          <Meanings response={response} />
          <h3 className="mt-4 text-2xl font-bold">Example:</h3>
          <Examples response={response} />
          <h3 className="mt-4 text-2xl font-bold">Synonym:</h3>
          <Synonyms response={response} />
          <h3 className="mt-4 text-2xl font-bold">Antonym:</h3>
          <Antonyms response={response} />
        </div>
      )}
    </div>
  );
};

export default Results;
