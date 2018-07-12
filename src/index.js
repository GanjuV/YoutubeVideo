import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBtPuCW1ltp3itv2PKZ_zB3oUk1DvbXcIg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
      </div>
    );
  }
}
// const App = () => {
//   return (
//     <div>
//         <SearchBar />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector(".container"));