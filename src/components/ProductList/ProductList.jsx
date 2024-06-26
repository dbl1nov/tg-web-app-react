import React, { useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: 1, title: 'Product jeans', price: 5000, description: 'Product jeans the best quality'},
    {id: 2, title: 'Product boots', price: 2000, description: 'Product boots, the best quality'},
    {id: 3, title: 'Product glasses', price: 3000, description: 'Product glasses with the best quality'},
    {id: 4, title: 'Product t-short', price: 4000, description: 'Product t-short, the best quality'},
]

const getTotalPrice = (items  = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram()


    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems =[];

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id === product.id);
        }else{
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }
    return (
        <div className={'list'}>
            {products.map(product =>(
                <ProductItem
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                    className={'item'}

                />
            ))}
        </div>
    );
};

export default ProductList;