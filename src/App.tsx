import { useState } from 'react'
import {useQuery, useMutation} from '@tanstack/react-query';

function wait(duration:number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function App() {
const postQuery = useQuery({
  queryKey: ["posts"],
  queryFn: () => wait(1000).then(()=>[...POSTS]),
});

 if(postQuery.isLoading) return (<p>Loading</p>)

  return (
    <>
      <h1 className="">
        Hi Tanstack Query
      </h1>
    </>
  );
}

export default App
