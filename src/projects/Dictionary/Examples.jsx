const Examples = ({ response }) => {
  return (
    <div>
      {response.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map(
            (def, def_index) =>
              def.example && (
                <div key={def_index}>
                  <li>{def.example}</li>
                </div>
              )
          )
        )
      )}
    </div>
  );
};

export default Examples;
