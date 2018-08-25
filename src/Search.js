import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search } = this.props; 
        return (
            <input 
                type="text" 
                name="search" 
                placeholder="Type the item you want to search for"
                className="searchField" 
                value={search} 
                onChange={this.props.handleChange}/>
        );
    }
}

export default Search;