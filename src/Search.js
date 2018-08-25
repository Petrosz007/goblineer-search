import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { search } = this.props; 
        return (
            <div>
                <input type="text" name="search" value={search} onChange={this.props.handleChange}/>
                <button onClick={this.props.search}>Search</button>
            </div>
        );
    }
}

export default Search;