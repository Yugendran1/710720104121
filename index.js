 import React from 'react';
 import UrlResponseCollector from '/.UrlResponseCollector';
 

const App = () => {
  const urls = ['http://104.211.219.98/numbers/primes', 'http://104.211.219.98/numbers/fibo', 'http://104.211.219.98/numbers/odd'];

  return (
    <div>
      <h1>URL Response Collector</h1>
      <UrlResponseCollector urls={urls} />
    </div>
  );
};

