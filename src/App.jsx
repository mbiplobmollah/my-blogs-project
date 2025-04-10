import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'

function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <div className="main-container flex text-center">
      <div className="let-container w-[70%]">

      <Blogs></Blogs>
      </div>
      <div className="right-container w-[30%]">  
       <h1>Reading Time: 0</h1>
       <h1>Bookmarked Count: 0</h1>
      </div>
     </div>
    </>
  )
}

export default App
