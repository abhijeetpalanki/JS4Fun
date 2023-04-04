const Synonyms = ({ response }) => {
  return (
    <div className="columns-2 md:columns-3">
      {response.map((val) =>
        val.meanings.map((means) => {
          return means.synonyms?.map((syn, syn_index) => (
            <li key={syn_index}>{syn}</li>
          ));
        })
      )}
    </div>
  );
};

export default Synonyms;
