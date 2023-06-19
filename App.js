import React, { useEffect, useState } from 'react';

const UrlResponseCollector = ({ urls }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const validUrls = urls.filter(url => isValidUrl(url));
      const collectedResponses = await Promise.all(validUrls.map(url => fetch(url).then(response => response.json())));
      const uniqueIntegers = [...new Set(collectedResponses.flat())].sort((a, b) => a - b);
      setResponses(uniqueIntegers);
    };

    fetchResponses();
  }, [urls]);

  const isValidUrl = (url) => {
    // Implement your URL validation logic here
    // For simplicity, assume all provided URLs are valid
    return true;
  };

  return (
    <div>
      <h2>Collected Responses</h2>
      <ul>
        {responses.map((response, index) => (
          <li key={index}>{response}</li>
        ))}
      </ul>
    </div>
  );
};

