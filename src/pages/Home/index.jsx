
import './home.css'
function Home(){
  return(  <div className=' d-flex align-baseline container1 '>
    <div>
     {/* <button className='mb-4    addclass'>Add new Class + </button> */}
    <button class="button-56" role="button">Add new Class +</button>
    </div>
  
     <div className="mb-2 d-flex   home">
     <div className='total me-5'>
      <p> Total students are<br/><p className='value'>50 Students</p></p>

     </div>
     <div className='total '>
         <p> Total classes are<br/> <p className='value'>5 classes</p></p>
         </div>
     </div>
     </div>)
}
export default Home