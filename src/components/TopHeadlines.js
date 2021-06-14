import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem.js';

const TopHeadlines = () => {
  let [news, setNews] = useState([]);
  const fetchNews = async () => {
    const api_key = 'b6dc55bdc09e4b2bb1d611c88d06df94';
    const api_endpoint = `https://newsapi.org/v2/top-headlines?country=gb&sortBy=publishedAt&language=en&apiKey=${api_key}`;
    await axios
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
  }, []);

  const showNewsData = () => {
    return news.map((item, i) => <NewsItem key={i} item={item} />);
  };
  return <div>{showNewsData()}</div>;
};

export default TopHeadlines;
