import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BackGround from '../../assets/abstract-blue-geometric-shapes-background_1035-17545.webp'


const Member = () => {
    return ( 
        <div className="member pt-5 mt-5 text-center pb-5 mb-5">
            
            

            <div className="section over-hide">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section text-center py-5 py-md-0">
                                <input className="pricing" type="checkbox" id="pricing" name="pricing"/>
                                <label for="pricing"><span className="block-diff">Free Plan<span className=" ms-5 float-right">Premuim</span></span></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="pricing-wrap">
                                                <h4 className="mb-5">lorem impsum</h4>
                                                <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">lorem ipsum</p>
                                                <a href="#0" className="link">Choose Free</a>
                                                <div className="img-wrap img-2">
                                                    <img src={BackGround} alt="" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-back">
                                        <div className="pricing-wrap">
                                                <h4 className="mb-5">lorem impsum</h4>
                                                <h2 className="mb-2"><sup>$</sup>39 / 4<sup>hrs</sup></h2>
                                                <p className="mb-4">per person</p>
                                                <p className="mb-1"><i className="uil uil-location-pin-alt size-22"></i></p>
                                                <p className="mb-4">lorem ipsum</p>
                                                <a href="#0" className="link">Upgrade Now</a>
                                                <div className="img-wrap img-2">
                                                    <img src={BackGround} alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Member;