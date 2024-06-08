
import React from 'react';
import { Products } from '../components/product/product.js';
import contents from '../content.js';
import "./ProductPage.css"

export default function ProductPage() {
    return (
        <div className='ProductPage'>
            {contents.map(content => (
                <Products 
                    key={content.id}
                    image={content.image}
                    name={content.name}
                    price={content.price}
                    totalSales={content.totalSales}
                    timeLeft={content.timeLeft}
                    rating={content.rating}
                />
            ))}
        </div>
    );
}
