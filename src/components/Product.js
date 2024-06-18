import { useState, useEffect } from 'react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux'
import { add } from '../store/cartSlice';


export default function Product() {

    const dispatch = useDispatch()

    const [products, getProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(result => getProducts(result));
    }, []);

    const addToCart = (product) => {
        dispatch(add(product))
    }

    const cards = products.map(product => (
        <div className="col-md-3" style={{marginBottom: '10px'}}>
            <Card key={product.id} className= 'h-100' style={{paddingTop:'10px'}}>
                <div className="text-center">
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                       INR: {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='text-center' style={{backgroundColor: 'white'}}>
                    <Button variant="primary"onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>

    ));

    return (
        <>
            <h1 className='text-center'>Product Dashboard</h1>
            <div className='row'>
              {cards}
            </div>
        </>
    );
}

