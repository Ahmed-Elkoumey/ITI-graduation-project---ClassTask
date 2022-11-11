import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gold from './assest/golden-removebg-preview.png'
import Silver from './assest/silver-removebg-preview.png'
import Bronze from './assest/pronze-removebg-preview.png'


const Member = (props) => {
    return ( 
        <div id={props.id} className="member pt-5 mt-5 text-center pb-5 mb-5">
            
            <h2 className='mb-5 section-title'>Member Plans</h2>
               
     <div className='container'>
     <div className='row '>
            <div className="card-wrapper-ash d-flex justify-content-around flex-wrap  ">

                    <Card className="card-container-ash "  style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={gold} className="p-5"/>
                         <Card.Body className='cardbody-member '>
                            {/* <Card.Title className=' title-member'>Golden Menmbership</Card.Title> */}
                            <Card.Text className=''>
                          
                            <p className=' details'>Unlimited classes</p>
                                <p className=' details'>Up to 100 GB</p>
                            <h4> 700 EGP/Month</h4>
                            </Card.Text>
                           
                        </Card.Body>
                        <Button className="pricing-button-ash" variant="">Join Now!</Button>
                    </Card>

                    <Card className="card-container-ash pb-3"  style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={Silver}  className="p-5"/>
                         <Card.Body className='cardbody-member '>
                            {/* <Card.Title className=' title-member'>Golden Menmbership</Card.Title> */}
                            <Card.Text className=''>
                            
                                <p className=' details'>120 Students</p>
                                <p className=' details'>Up to 50 GB</p>
                            
                            <h4> 350 EGP/Month</h4>
                            </Card.Text>
                           
                        </Card.Body>
                        <Button className="pricing-button-ash" variant="">Join Now!</Button>
                    </Card>

                    <Card className="card-container-ash pb-3"  style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={Bronze}  className="p-5"/>
                         <Card.Body className='cardbody-member '>
                            {/* <Card.Title className=' title-member'>Golden Menmbership</Card.Title> */}
                            <Card.Text className=''>
                            
                            <p className=' details'>60 Students</p>
                                <p className=' details'>Up to 25 GB</p>
                            <h4> 200 EGP/Month</h4>
                            </Card.Text>
                           
                        </Card.Body>
                        <Button className="pricing-button-ash" variant="">Join Now!</Button>
                    </Card>
            </div> 
            </div>
            </div>

        </div>
    );
}

export default Member;