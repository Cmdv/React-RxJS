import React from 'react';
import Intent from '../intent/json-intent';

export default class extends React.Component {
    handlePostJSON(data) {
        //function for sending JSON call just need to grab input.value and make a Math.random for the keys of each object

        console.log('getJSON' + data.event);
        //Intent.getJSON('bets', {bet_id: data.bet_id, odds: data.odds, stake: data.stake});
    }

    render() {
        var jsonData = this.props.results;

        var loopResults = () =>
            jsonData.map(data =>
                    (
                        <li className="list-group-item">
                            <h4 className="list-group-item-heading" key={data.id}>{data.title}</h4>

                            <p className="list-group-item-text" key={data.title}>{data.body}</p>
                        </li>
                    )
            );

        return (
            <div>
                <h1>Results: </h1>
                <ul className="list-group">
                    {loopResults()}
                </ul>
            </div>
        )
    }
}