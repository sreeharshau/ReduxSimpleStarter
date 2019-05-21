// React import needed even though not explicitly used since implicit calls to react are made by SearchBar() below
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { term: ''};
	}
	render(){
		return(
		 	<div className="search-bar">
		 	<input 
		 		value={this.state.term}
		 		onChange={event => this.onInputChange(event.target.value)} />
		 	</div>
		 );
	}
	onInputChange(searchTerm){
		this.props.onSearchTermChange(searchTerm);
		this.setState({term: searchTerm});
	}
}

export default SearchBar;