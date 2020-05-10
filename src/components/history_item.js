import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import '../styles/history_item.css';

const HistoryItem = ({item}) => {
    const formatNumber = (num) => {
        return Intl.NumberFormat('de-DE').format(num);
    }

    return (
        <Container fluid className="history-item">
            <Row>
                <Col xs={2}>
                    <img src={ process.env.PUBLIC_URL + "../images/Profile.png" } alt="" className="history-image"></img>
                </Col>
                <Col xs={5}>
                    <h3 className="history-title">{item.firstName} {item.lastName}</h3>
                    <p className="history-description">{item.status}</p>
                </Col>
                <Col xs={5}>
                    <p className="history-amount">Rp.{formatNumber(item.total)}</p>

                </Col>
            </Row>
            <div className="history-line"/>
        </Container>
    )
}

export default HistoryItem;