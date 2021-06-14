import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NewsItem from './NewsItem.js';

const ComNewsCollection = () => {
  let [news, setNews] = useState([]);
  const { handle } = useParams();
  const fetchNews = () => {
    const api_key = 'b6dc55bdc09e4b2bb1d611c88d06df94';
    const api_endpoint = `https://newsapi.org/v2/everything?q=${handle}&sortBy=publishedAt&language=en&apiKey=${api_key}`;

    axios
      .get(api_endpoint)
      .then(function (response) {
        const data = response.data;
        const news = data.articles;
        setNews(news);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [handle]);

  useEffect(() => {
    fetchNews();
  }, [handle]);

  const renderNewsItems = () => {
    return news.map((item, i) => <NewsItem key={i} item={item} />);
  };
  return <div className='row no-gutter'>{renderNewsItems()}</div>;
};

export default ComNewsCollection;
