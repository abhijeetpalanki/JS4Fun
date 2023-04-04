const Antonyms = ({ response }) => {
  return (
    <div className="columns-2 md:columns-3">
      {response.map((val) =>
        val.meanings.map((means) => {
          return means.antonyms?.map((ant, ant_index) => (
            <li key={ant_index}>{ant}</li>
          ));
        })
      )}
    </div>
  );
};

export default Antonyms;
