import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Table(props) {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		
			axios.all([
				axios.get(`https://reqres.in/api/users/1`),
				axios.get(`https://reqres.in/api/users/3`),
				axios.get(`https://reqres.in/api/users/10`)
			])
			
	 		.then(res => {
				console.log(res)
         setPosts(res)
	 		})
	 		.catch(err => {
			console.log(err)
		})
	 }, []);
	//useEffect(() => {
		//fetch(`https://reqres.in/api/users/10`)
		//.then((res) => res.json())
		//.then((data) => setPosts(data));
		
	// }, [])

	
	return (
		<div>
			 <ul>
				{posts.map((post) =><li key={post.data.data.id}>{post.data.data.email}</li>)}
							 
				
         {/* {posts.map((user)=><li email={user.email}/>)} */}
      </ul>
			{/* {JSON.stringify(posts)} */}
		 {/* <ul>
				 {posts.map(post => (
        <li key={post.id}>{post.email}</li>
				))}
			</ul>  */}
		</div>
			)
}

export default Table;