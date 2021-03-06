import React,{Component} from 'react';

class SearchBar extends Component{

constructor(props){
  super(props);

  this.state={term:''};
}

  render(){
    return(
      <div>
        <h1>Search:</h1>
        <input onChange={(event)=>this.onInputChange(event.target.value)}/>
    
      </div> 
    );
  }

onInputChange(term){
  this.setState({term});
  this.props.onSearchTermChange(term);
}

}

export default SearchBar;



