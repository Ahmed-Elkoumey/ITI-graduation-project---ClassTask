const Footer = () => {
    return ( 
        <div className="footer pt-5 container-fluid">
            <div className="row text-center">
                <div className="col-4">
                    <label className="fs-2 ps-3 text-black">Logo</label>
                    <ul className=" list-unstyled">
                        <li><a href="#" className="text-black text-decoration-none ps-4">Services</a></li>
                        <li><a href="#" className="text-black text-decoration-none ps-4">About us</a></li>
                        <li><a href="#" className="text-black text-decoration-none ps-4">Plans</a></li>
                        <li><a href="#" className="text-black text-decoration-none ps-4">Footer</a></li>
                    </ul>
                </div>

                <div className="col-4">
                    <label className="text-black fs-2 ps-3">Legal</label>
                    <ul className=" list-unstyled mt-3 ">
                        <li className="mb-4"><a href="#" className="text-black text-decoration-none ps-4">Privacy Policy</a></li>
                        <li><a href="#" className="text-black text-decoration-none ps-4">Terms Of Service</a></li>
                    </ul>
                </div>


                <div className="col-4 ">
                    <label className="text-black fs-2 ps-3">Legal</label>
                    <ul className=" list-unstyled mt-3 ">
                        <li className="mb-4"><a href="#" className="text-black text-decoration-none ps-4">Privacy Policy</a></li>
                        <li><a href="#" className="text-black text-decoration-none ps-4">Terms Of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;