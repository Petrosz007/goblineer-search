import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            data: [],
            search: '',
            filtered: []
        }
    }

    componentDidMount() {
        const url = "https://goblineer.tk/json/mv_names.json";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data, search, filtered } = this.state;

        

        return (
            <div>
                <Search handleChange={this.handleChange} handleSearch={this.handleSearch} />
                <Table filtered={filtered} />
            </div>
        );
    }

    handleChange = event => {
        const { data } = this.state;
        const { value } = event.target;

        if(value.length >= 4) {
            let filteredList = data.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);

            filteredList.sort((a, b) => {
                return b.marketvalue - a.marketvalue;
            });

            this.setState({
                filtered: filteredList,
                search: value
            });
        } else {
            this.setState({
                search: value
            });
        }

    }

    handleSearch = () => {
        const { data, search } = this.state;
        
        if(search.length >= 4) {
            let filteredList = data.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);

            filteredList.sort((a, b) => {
                return b.marketvalue - a.marketvalue;
            });

            this.setState({
                filtered: filteredList
            });
        }
    }
}

export default App;