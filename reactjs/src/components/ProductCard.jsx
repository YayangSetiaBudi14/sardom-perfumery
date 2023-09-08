import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function ProductCard(){
    return (
        <div className="container">
            <div className="card-product card">
                <div className="card-product-container">
                    <img className="card-img-top" src="./assets/product001.png" alt="Davidoff"/>
                    <div className="card-body">
                        <div className="row">
                            <div className="card-rating col">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                            </div>
                            <div className="card-reviews col">
                                0 reviews
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">Davidoff Cool Water Man Eau de Toilette</h5>
                        <p className="card-text">Rp. 926.500</p>
                    </div>
                </div>
                
                <div class="border-top"></div>
                <div className="card-product-footer">
                    <button type="button" class="btn btn-dark"><i className="fa fa-shopping-cart"/> Add to cart</button>
                </div>
                    
            </div>            
        </div>
    )
}

export default ProductCard;