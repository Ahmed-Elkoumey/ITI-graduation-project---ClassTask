import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BackGround from '../../assets/abstract-blue-geometric-shapes-background_1035-17545.webp'


const Member = (props) => {
    return ( 
        <div id={props.id} className="member pt-5 mt-5 text-center pb-5 mb-5">
            
            <h2 className='mb-5'>Our Plans</h2>

            <div className="card-wrapper-ash d-flex justify-content-around">

                    <Card className="card-container-ash p-5" style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                            <Card.Title className='card-title-ash p-2'>Free Tier</Card.Title>
                            <Card.Text className='my-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quo?
                            </Card.Text>
                            <Button className="pricing-button-ash" variant="">Join Now!</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card-container-ash p-5" style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                            <Card.Title className='card-title-ash p-2'>Free Tier</Card.Title>
                            <Card.Text className='my-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quo?
                            </Card.Text>
                            <Button className="pricing-button-ash" variant="">Join Now!</Button>
                        </Card.Body>
                    </Card>

                    <Card className="card-container-ash p-5" style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                        <Card.Body>
                            <Card.Title className='card-title-ash p-2'>Free Tier</Card.Title>
                            <Card.Text className='my-5'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quo?
                            </Card.Text>
                            <Button className="pricing-button-ash" variant="">Join Now!</Button>
                        </Card.Body>
                    </Card>
            </div>

        </div>
    );
}

export default Member;