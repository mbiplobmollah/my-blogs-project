import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark,handleMarkAsRead}) => {

    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    // console.log(blogs)



    return (
        <div>
        <h1 className='text-3xl'>Available Blogs: {blogs.length}</h1>
        <div className="all-blogs grid grid-cols-2 gap-10">
            {
                blogs.map(blog=>
            <Blog key={blog.id} 
            handleMarkAsRead={handleMarkAsRead} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;