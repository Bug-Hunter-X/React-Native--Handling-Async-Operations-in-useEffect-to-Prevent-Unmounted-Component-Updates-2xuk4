```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data', { signal });
        const json = await response.json();
        if (!signal.aborted) {
          setData(json);
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <View>
      {data ? <Text>{data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;
```