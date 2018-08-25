import React, { Component } from 'react';

class Table extends Component {
    componentDidUpdate() {
        window.$WowheadPower.refreshLinks()
    }

    render() {
        const TableHead = () => {
            return (
                <thead>
                    <td><b>Name</b></td>
                    <td><b>Min</b></td>
                    <td><b>Marketvalue</b></td>
                    <td><b>Quantity</b></td>
                </thead>
            );
        }
        const TableBody = (props) => {
            const rows = props.filtered.map((item, index) => {
                return <tr key={index}>
                            <td className="tdAlignLeft"><a href={'https://www.goblineer.tk/item/' + item.item} target="_blank" className='q3 iconmedium1 links' rel={'item=' + item.item} Name="text-center"></a></td>
                            <td className="tdAlignRight">{this.numberFormat(item.MIN)}</td>
                            <td className="tdAlignRight">{item.marketvalue}</td>
                            <td className="tdAlignRight">{item.quantity}</td>
                        </tr>;
            });

            return (
                <tbody>
                    {rows}
                </tbody>
            );
        }
        
        return (
            <table className="mainTable">
                <TableHead />
                <TableBody filtered={this.props.filtered} />
            </table>
        );
    }

    numberFormat = num => {return parseFloat(Math.round(num * 100) / 100).toFixed(2);}
}

export default Table;