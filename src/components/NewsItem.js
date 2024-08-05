//This component displays individual news articles.

import React from 'react';
import { Card } from 'react-bootstrap';

const NewsItem = ({ article }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={article.urlToImage} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
