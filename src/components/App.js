import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  //state初期化
  state = { images: [] };

  onSearchSubmint = async (term) => {
    //API取るよ！
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    //setStateでstateをアップデート
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmint} />
        Found:{this.state.images.length} images
      </div>
    );
  }
}

export default App;
