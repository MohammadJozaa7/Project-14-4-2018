import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`YOU SEARCH FOR: ${term}`);
    // TODO
    $.ajax({
      type: "POST",
      url: '/repos',
      data: {username : term},
      success: function () { 
            alert(`POST DONE FOR ${term}`)
          },
          error:function(){
            alert("error in post")
          }          
     });
  }

  render () {
    return (<div>
      <h1>Information For GitHub User:</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));