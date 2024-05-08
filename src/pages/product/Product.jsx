import './product.css'
import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function Product() {

    const [priceType, setPriceType] = useState('monthly');

    const prices = {
        monthly: {
            starter: 250,
            pro: 1550,
            mid: 750
        },
        yearly: {
            starter: 2500,
            pro: 15500,
            mid: 7500
        }
    }

    const handlePriceTypeChange = (event) => {
        setPriceType(event.target.value);
    };
    return (

        <section id='product' className='section-pricing'>
            <h3 className='pricing-Heading'>Choose your best plan</h3>
            <div className='pricing-radios'>
                <label className='price-label'>
                    <input
                        type='radio'
                        value='monthly'
                        checked={priceType === 'monthly'}
                        onChange={handlePriceTypeChange}
                    />
                    <span>Monthly</span>
                </label>
                <label className='price-label'>
                    <input
                        type='radio'
                        value='yearly'
                        checked={priceType === 'yearly'}
                        onChange={handlePriceTypeChange}
                    />
                    <span>Yearly</span>
                </label>
            </div>
            <div className='pricing-cards'>
                <Card className='pricing-card'>
                    <CardContent>
                        <Typography variant='h3' className='card-title'>Starter</Typography>
                        <hr className='first' />
                        <Typography variant='h5' className='card-price'>
                            <span>R</span>
                            {prices[priceType].starter}
                        </Typography>
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
                        <Typography variant='h5' className='card-price'>
                            <span>R</span>
                            {prices[priceType].pro}
                        </Typography>
                        <ul className='features'>
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
                        <Typography variant='h5' className='card-price'>
                            <span>R</span>
                            {prices[priceType].mid}
                        </Typography>
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