import React, { Component } from 'react';

class Table extends Component {
    render() {
        const TableHead = () => {
            return (
                <thead>
                    <td>id</td>
                    <td>name</td>
                    <td>marketvalue</td>
                    <td>quantity</td>
                    <td>min</td>
                </thead>
            );
        }
        const TableBody = (props) => {
            const rows = props.filtered.map((item, index) => {
                return <tr key={index}>
                            <td>{item.item}</td>
                            <td>{item.name}</td>
                            <td>{item.marketvalue}</td>
                            <td>{item.quantity}</td>
                            <td>{item.MIN}</td>
                        </tr>;
            });

            return (
                <tbody>
                    {rows}
                </tbody>
            );
        }
        
        return (
            <table>
                <TableHead />
                <TableBody filtered={this.props.filtered} />
            </table>
        );
    }
}

export default Table;