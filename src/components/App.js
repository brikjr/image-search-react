import "./styles.css";
import React from "react";
import Api from "./UnSplash";
import Search from "./Search";
import Images from "./Images";

class App extends React.Component {
  state = { images: [] };
  //comunicating child with parent
  onSearchSubmit = async (item) => {
    const response = await Api.get("/search/photos", {
      params: {
        query: item,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="wrapper">
        <h1> Search 4 Images </h1>
        <Search onTotalSubmit={this.onSearchSubmit} />
        <Images images={this.state.images} />
      </div>
    );
  }
}
export default App;
