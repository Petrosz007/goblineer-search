import React, { Component } from 'react';
import Search from './Search';
import Table from './Table';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

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
        const { filtered, search } = this.state;

        return (
            <div className="container">
                <Search handleChange={this.handleChange} handleSearch={this.handleSearch} />
                <Table filtered={filtered} />
            </div>
        );
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({
            search: value
        });

        const { data } = this.state;

        if(value.length >= 4) {
            let filteredList = data.filter(item => {
                if(item.name) {
                    return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
                }
            });

            filteredList.sort((a, b) => {
                return b.marketvalue - a.marketvalue;
            });

            this.setState({
                filtered: filteredList,
            });
    
        }
    }
}
export default App;