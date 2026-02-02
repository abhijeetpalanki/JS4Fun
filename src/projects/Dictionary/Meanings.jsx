const Meanings = ({ response }) => {
  return (
    <div>
      {response.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def, def_index) => (
            <div key={def_index}>
              <li>{def.definition}</li>
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Meanings;
