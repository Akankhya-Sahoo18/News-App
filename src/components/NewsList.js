//This component is responsible for fetching news articles from the API and displaying a list of NewsItem components.
import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import { Container, Spinner, Alert } from 'react-bootstrap';

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <Container className="d-flex justify-content-center mt-5"><Spinner animation="border" /></Container>;
  if (error) return <Container className="mt-5"><Alert variant="danger">Error: {error.message}</Alert></Container>;

  return (
    <Container className="mt-4">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </Container>
  );
};

export default NewsList;
