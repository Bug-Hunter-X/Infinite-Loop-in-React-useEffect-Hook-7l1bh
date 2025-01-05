```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic with conditional update or by removing count from the dependency array
    // Example 1: Removing count from dependency array to run only once.
    // The count will be set to 1 only once after the component mounts
    // The effect is no longer dependent on count, eliminating the loop
   console.log("Effect runs only once");
  }, []); 

  //Example 2: Implementing conditional update to break the infinite loop
  const updateCount = ()=>{ 
    setCount(prevCount => prevCount + 1); 
  }

  return (
    <div>
      Count: {count}
      <button onClick={updateCount}>Update Count</button>
    </div>
  );
};
```