import React from 'react';

import Header from '../components/header'

import Data from '../datas/history.json'
import HistoryItem from '../components/history_item'

const History = () => {
    const location = "History"

    const data = Data.map((item, index) => (
        <HistoryItem item={item} key={index}/>
    ))

    return (
        <div>
            <Header location={location}/>
            { data }
        </div>
    );
}

export default History;