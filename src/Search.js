import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search } = this.props; 
        return (
            <input 
                type="text" 
                name="search" 
                placeholder="Type the name of the item you want to search for"
                id="searchField" 
                className="searchField" 
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                value={search} 
                onChange={this.props.handleChange}/>
        );
    }
}

export default Search;