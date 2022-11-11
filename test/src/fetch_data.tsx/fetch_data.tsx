import React ,{useEffect,useState}from 'react';
import axios from 'axios';


interface titleUser {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
function DataFetch(){
    const [post,setPost]= useState<titleUser[]>([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res: any)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch((res: any)=>{
            console.log(res)
        })

    })
    return(
        <div>
         <ul>
            {
                post.map(post=><li key={post.id}>
                <p>id:{post.id}</p>
                <p>userId:{post.userId}</p>
                <p>title:{post.title}</p>
                <p>completed:{post.completed}</p>
                </li>)
            }
         </ul>
        </div>
    )
}

export default DataFetch;