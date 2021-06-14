import React from 'react';

const NewsItem = ({ item }) => {
  return (
    <div>
      <div className='card'>
        <div className='card-img-box'>
          <img
            className='card-img-top'
            src={item.urlToImage}
            alt={item.title}
          />
        </div>
        <div className='card-body'>
          <h6 className='card-title'>{item.title}</h6>
          <p className='card-text'>{item.source.name}</p>
          <a
            href={item.url}
            className='btn btn-danger'
            title={item.title}
            target='_blank'
            rel='noopener noreferrer'
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
