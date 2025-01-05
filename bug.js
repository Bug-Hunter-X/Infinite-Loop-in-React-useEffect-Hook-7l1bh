```javascript
//In a functional component
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Incorrect logic that leads to an infinite loop
    setCount(count + 1); 
  }, [count]);

  return (
    <div>Count: {count}</div>
  );
};
```