import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }
//<h4>Add more repos!</h4>
  render() {
    return (<div> 
      <h4>Enter a facebook username tag: </h4>
      <input value={this.state.term || 'm.joza'} onChange={this.onChange}/>       
      <h4><button onClick={this.search}> Get the data now </button></h4>
    </div>) 
  }
}

export default Search;