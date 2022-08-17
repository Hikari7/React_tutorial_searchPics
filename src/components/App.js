import React from "react";
// import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  //state初期化
  state = { images: [] };

  onSearchSubmint = async (term) => {
    //API取るよ！第二引数はパラメーター取る的な
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
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
