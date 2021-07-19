import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bas';
import VedioList from './components/vedio_list';
import VedioDetail from './components/vedio_detail';
const API_KEY=************************
//'AIzaSyCD1h7wEna23hyq1mjISydo0gIb7JSfpmo';

class App extends Component{

constructor(props){
  super(props);

  this.state={
    vedios:[],
    selectedVideo:null
  };

  this.videoSearch('Kassor Prateek Kuhad');
}

  //for searching purpose of specific vedio
videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
  this.setState({
  vedios:videos,
  selectedVideo:videos[0]

});
  })
  }

  render(){

    const videoSearch= _.debounce((term)=>{this.videoSearch(term)},300)
    return(
      <div className="search-bar">
        <SearchBar  onSearchTermChange={videoSearch}/>
        <VedioDetail video={this.state.selectedVideo}/>
        <VedioList vedios={this.state.vedios}
           onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
        />
      </div>
    );
    }
}
  

ReactDOM.render(<App/>,document.querySelector('.container'));
