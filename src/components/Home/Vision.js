import Lightbulb from '../../assets/lightbulb.jpg'

const Vision = (props) =>
 {
    return ( 
        <div id={props.id} className="our-vision pt-5 mt-5 pb-5 text-center d-flex justify-content-center">
            <div className="row align-items-center justify-content-around">
                <div className="col-md-4">
                    <img src={Lightbulb} alt="lightbulb" className=' img-fluid' />
                </div>

                <div className="col-md-6">
                    <h3 className="py-4">Our Vision</h3>
                    <p className=" text-center text-md-start m-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et nulla ratione, quod placeat atque amet recusandae eaque vero doloribus vel distinctio numquam! Cupiditate hic excepturi debitis animi explicabo officiis a earum natus sunt consequuntur assumenda beatae, nam voluptas rem recusandae eius modi, aperiam ea cum similique quas, esse harum fuga.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Vision;