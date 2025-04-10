import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
  // console.log(handleBookmark)
    // console.log(blog)
    return (
        <div >
            <div class="card bg-base-100 w-100 shadow-sm mx-auto">
  <figure>
    <img className='w-[400px] h-[250px]'
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img className='w-16' src={blog.author_img} alt="" />
        <button onClick={()=>handleBookmark(blog)}><IoBookmarkSharp size={25}/></button>
    </div>
    <h2 class="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

        <div className='flex'>
        {
            blog.hashtags.map(hash=><p key={hash}>{hash}</p>)
        }
        </div>

    <div class="card-actions justify-end">
      <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} class="btn btn-primary hover:bg-sky-500/100">Mark As Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;