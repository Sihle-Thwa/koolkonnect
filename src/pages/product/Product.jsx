import './product.css'
import { Card, CardContent, Typography, Button } from '@mui/material';

function Product() {
    return (

        <section>
            <div className='pricing-cards'>
                <Card className='pricing-card'>
                    <CardContent>
                        <Typography variant='h3' className='card-title'>Starter</Typography>
                        <hr className='first' />
                        <Typography variant='h5' className='card-price'><span>R</span>250</Typography>
                        <ul className='features'>
                            <li>Feature One</li>
                            <li>Feature One</li>
                            <li>Feature One</li>
                            <li>Feature One</li>
                        </ul>
                        <hr className='second' />
                        <Button variant='contained' color='primary' className='card-btn'>Purchase</Button>
                    </CardContent>
                </Card>
                <Card className='pricing-card'>
                    <CardContent>
                        <Typography variant='h3' className='card-title'>Pro</Typography>
                        <hr className='first' />
                        <Typography variant='h5' className='card-price'><span>R</span>1550</Typography>
                        <ul className='features'>
                            <li>Feature Two</li>
                            <li>Feature Two</li>
                            <li>Feature Two</li>
                            <li>Feature Two</li>
                            <li>Feature Two</li>
                        </ul>
                        <hr className='second' />
                        <Button variant='contained' color='primary' className='card-btn'>Purchase</Button>
                    </CardContent>
                </Card>
                <Card className='pricing-card'>
                    <CardContent>
                        <Typography variant='h3' className='card-title'>Mid</Typography>
                        <hr className='first' />
                        <Typography variant='h5' className='card-price'><span>R</span>750</Typography>
                        <ul className='features'>
                            <li>Feature Three</li>
                            <li>Feature Three</li>
                            <li>Feature Three</li>
                            <li>Feature Three</li>
                        </ul>
                        <hr className='second' />
                        <Button variant='contained' color='primary' className='card-btn'>Purchase</Button>
                    </CardContent>
                </Card>

            </div>
        </section>

    )
}

export default Product;