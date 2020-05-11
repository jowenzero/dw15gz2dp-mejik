import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../_actions/transaction";

import Header from '../components/header'

import HistoryItem from '../components/history_item'

const History = () => {
    const location = "History"

    const transaction = useSelector(state => state.transaction.data);
    const loading = useSelector(state => state.transaction.loading);
    const error = useSelector(state => state.transaction.error);

    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(getTransactions());
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);

    let data;

    if (!loading && !error && transaction) {
        data = transaction.transactions.map((item, index) => (
            <HistoryItem item={item} key={index}/>
        ))
    }

    return (
        <div>
            <Header location={location}/>
            { (!loading && !error) && data }
        </div>
    );
}

export default History;