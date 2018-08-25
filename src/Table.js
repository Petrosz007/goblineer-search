import React, { Component } from 'react';

class Table extends Component {
    componentDidUpdate() {
        window.$WowheadPower.refreshLinks()
    }

    render() {
        const TableHead = (props) => {
            if(props.filtered.length != 0) {
                return (
                    <thead>
                        <th><b>Name</b></th>
                        <th><b>Min</b></th>
                        <th><b>Marketvalue</b></th>
                        <th><b>Quantity</b></th>
                    </thead>
                );
            } else {
                return(<thead></thead>);
            }
        }
        const TableBody = (props) => {
            const rows = props.filtered.map((item, index) => {
                return <tr key={index}>
                            <td className="tdAlignLeft"><a href={'https://www.goblineer.tk/item/' + item.item} target="_blank" className='q3 iconmedium1 links' rel={'item=' + item.item} Name="text-center"></a></td>
                            <td className="tdAlignRight">{this.numberFormat(item.MIN)}<span class='gold-g'>g </span></td>
                            <td className="tdAlignRight">{this.numberFormat(item.marketvalue)}<span class='gold-g'>g </span></td>
                            <td className="tdAlignRight">{this.thousandPlaceFormat(item.quantity)}</td>
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
                <TableHead filtered={this.props.filtered}/>
                <TableBody filtered={this.props.filtered} />
            </table>
        );
    }

    numberFormat = num => {return this.thousandPlaceFormat(parseFloat(Math.round(num * 100) / 100).toFixed(2))}
    thousandPlaceFormat = num => {return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
}

export default Table;