import React, { useEffect } from 'react';
import axios from 'axios';

function TestBackend() {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => console.log('Backend says:', res.data))
      .catch(err => console.log('Error:', err));
  }, []);

  return <h2>Check console for backend response</h2>;
}

export default TestBackend;
