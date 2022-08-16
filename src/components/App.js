import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmint(term) {
    console.log(term);
    //API取るよ！
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID CG-6TrHE3gcTpcpECn48aFwfcKv26qj7Epgm0fsqRUY",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmint} />
      </div>
    );
  }
}

export default App;
