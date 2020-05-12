import React, { useEffect, useCallback } from 'react';
import { Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetailArticle } from "../_actions/article";

import '../styles/article.css';

const Article = (props) => {
    const [homeOK, setHomeOK] = React.useState(false);

    const articles = useSelector(state => state.article.singleData);
    const loading = useSelector(state => state.article.loading);
    const error = useSelector(state => state.article.error);
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        const { match } = props;
        let {id} = match.params;
        dispatch(getDetailArticle(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    
    useEffect(() => {
        initFetch();
    }, [initFetch]);

    return (
        <Container fluid>
            { homeOK &&
                <Redirect to="/"/>
            }
            <br/>
            <IoIosArrowBack className="article-icons" onClick={() => setHomeOK(true)}/>    
            <br/><br/><br/>
            { (!loading && !error && articles.article) &&
                <div>
                    <h3 className="article-name">{articles.article.title}</h3>
                    <br/>
                    <img src={ process.env.PUBLIC_URL + "../images/Thumbnail4.png" } alt="" className="article-pic" ></img>
                    <br/><br/>
                    <p className="article-desc-text">{articles.article.description}</p>
                </div>
            }
        </Container>
    );
}

export default Article;