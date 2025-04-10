import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {


  const [bookmarked,setBookmarked] = useState([])

  const handleBookmark = (blog) =>{
    setBookmarked([...bookmarked,blog])
  }

  console.log(bookmarked)

  const [readingTime,setTime] =useState(0)

  const handleMarkAsRead =(time,id)=>{
    setTime(readingTime+time)
    // console.log(id)
    handleRemoveFromBookmark(id)

  }

  const handleRemoveFromBookmark = (id) =>{
    const remainingBookmark = bookmarked.filter(mark=>mark.id !==id)
    setBookmarked(remainingBookmark)
  }
  
  console.log(readingTime)

  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">
      <div className="let-container w-[70%]">

      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark}></Blogs>
      </div>
      <div className="right-container w-[30%]">  
       <h1>Reading Time: {readingTime}</h1>
       <h1>Bookmarked Count: {bookmarked.length}</h1>

       {
        bookmarked.map(marked=><p  key={marked.id} className='bg-green-400 p-2 shadow-2xl m-2'>Bookmarked the {marked.title}</p>)
       }
      </div>
     </div>
    </>
  )
}

export default App
