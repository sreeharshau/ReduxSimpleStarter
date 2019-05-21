// Create a component - Produces HTML
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Lodash from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import APIKey from './APIKey';



class App extends Component {
	constructor(props){
		super(props);

		this.state = {currentVideos: [], selectedVideo: null};

		this.VideoSearch('blahBlah');
		this.debouncedVideoSearch = Lodash.debounce((term) => {this.VideoSearch(term)}, 300)


	}

	VideoSearch(searchTerm){
		YTSearch({key: APIKey, term: searchTerm}, (data) => {
			this.setState({ currentVideos: data, selectedVideo: data[0] });
		});
	}

	render(){
		return(
			<div>
				<SearchBar onSearchTermChange={term => this.debouncedVideoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect={currVideo => this.setState({currentVideos: this.state.currentVideos, selectedVideo: currVideo})}
				videos={this.state.currentVideos} /> 
			</div>
		);
	}
}


// Take the HTML generated above and put it onto the page (DOM)

ReactDOM.render(<App />, document.querySelector('.container'));