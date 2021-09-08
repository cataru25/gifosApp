import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { request } from "../../utils/request";
import "./Search.css";

function Search({ onClick, value, setValue, btnDisabled }) {
  const [autocomplete, setAutocomplete] = useState([]);

  useEffect(() => {
    if (value !== "") {
      request("/search/tags", value, 5)
        .then((res) => res.json())
        .then((data) => setAutocomplete(data.data))
        .catch((err) => console.log(err));
    }
  }, [value]);

  return (
    <section>
      <form>
        <input
          list="browsers"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={onClick} className="btn-search" disabled={btnDisabled}>
          BUSCAR
        </Button>
        <datalist id="browsers">
          {(autocomplete || []).map((item) => {
            console.log(item);
            return <option value={item.name} key={item.name} />;
          })}
        </datalist>
      </form>
    </section>
  );
}

export default Search;
