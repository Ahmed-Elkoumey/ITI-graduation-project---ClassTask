const Footer = (props) => {
    return ( 
        <div id={props.id} className="footer pt-5 container-fluid">
            <div className="row text-center align-items-center">
                <div className="col-4">
                    <div className="footer-about-ash text-start ms-5">
                        <h3>About</h3>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates optio asperiores ipsa voluptatem, mollitia dolores! Quod adipisci tempora odit dolor, nostrum porro dolorum officiis iste dicta voluptatum quia necessitatibus culpa?</p>
                    </div>

                </div>

                <div className="col-4">
                    <label className="text-black fs-2 ps-3">Quick Links</label>
                    <ul className=" list-unstyled">
                        <li className="mb-3"><a href={`#${props.hero}`} className="text-black text-decoration-none ps-">About us</a></li>
                        <li className="mb-3"><a href={`#${props.services}`} className="text-black text-decoration-none ps-">Services</a></li>
                        <li className="mb-3"><a href={`#${props.vision}`} className="text-black text-decoration-none ps-">Vision</a></li>
                        <li className="mb-3"><a href={`#${props.member}`} className="text-black text-decoration-none ps-">Plans</a></li>
                        <li className="mb-3"><a href={`#${props.footer}`} className="text-black text-decoration-none ps-">Footer</a></li>
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