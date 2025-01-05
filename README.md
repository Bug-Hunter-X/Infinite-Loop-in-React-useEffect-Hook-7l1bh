# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs within the `useEffect` hook. The error arises from the incorrect use of the dependency array, causing the effect to run continuously, leading to performance issues and potential crashes.

## Bug Description
The bug lies in the `MyComponent` functional component.  The `useEffect` hook attempts to update the `count` state in each render, leading to an endless cycle. This infinite loop is triggered because the `count` state is included in the dependency array, creating a circular dependency.

## Solution
The solution involves correcting the dependency array. By removing `count` from the dependency array, the effect will only run once after the initial render. Alternatively, you could conditionally update the count, if needed,  introducing a condition to break the infinite loop.