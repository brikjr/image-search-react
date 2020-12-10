import React from "react";

class Search extends React.Component {
  state = { item: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTotalSubmit(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui fluid action input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => this.setState({ item: e.target.value })}
          value={this.state.item}
        />
        <div className="ui button" onClick={this.onFormSubmit}>Search</div>
      </form>
    );
  }
}

export default Search;
