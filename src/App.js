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
        const url = "https://goblineer.net/json/mv_names.json";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { filtered } = this.state;

        return (
            <div className="container">
                {/* <div id="navbar" className="navbar">
                    <ul className="nav-items">
                        <li className="nav-item">Categories</li>
                        <li className="nav-item">Addon</li>
                        <li className="nav-item">Undercut Checker</li>
                        <li className="nav-item">Seller Search</li>
                        <li className="nav-item">Custom Tables</li>
                    </ul>
                </div> */}
                <div id="searchBox" className="searchBox">
                    <h1 className="title">Goblineer</h1>
                    <Search handleChange={this.handleChange} handleSearch={this.handleSearch} />
                    <Table filtered={filtered} />
                </div>
            </div>
        );
    }

    handleChange = event => {
        const { value } = event.target;

        this.setState({
            search: value
        });

        if(value.length <= 3) {
            this.setState({
                filtered: []
            });

            document.getElementsByClassName('title')[0].style.margin = '0 0 0 0';
            document.getElementById('searchField').style.width = '800px';
            document.getElementById('searchField').style.borderRadius = '10px 10px 10px 10px';
            document.getElementById('searchBox').style.top = '50%';
            document.getElementById('searchBox').style.margin = '-167px 0 0 0';
        } else if(value.length >= 4) {
            // document.getElementsByClassName('title')[0].style.margin = '-131px 0 0 0';
            document.getElementsByClassName('title')[0].style.margin = '-115px 0 0 0';
            document.getElementById('searchField').style.width = '100%';
            document.getElementById('searchField').style.borderRadius = '0';
            document.getElementById('searchBox').style.top = '0';
            document.getElementById('searchBox').style.margin = '0 0 0 0';

            let filteredList = this.state.data.filter(item => {
                if(item.name) {
                    return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
                }
            });

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