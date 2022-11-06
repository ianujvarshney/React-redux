import React from 'react';

export default function User() {
    return (
        <div>
            <div className='add-to-cart'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEv8eit9OLn44aS8P8s2S7gdKUEkWEmCuzTA&usqp=CAU" />
            </div>
            <h1> Home Components</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://images.macrumors.com/t/9r84bU_ZTOTrUixxwhjHUFsAvD4=/800x0/smart/article-new/2017/09/iphonexdesign.jpg?lossy" />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                </div>
                <span>
                    Price: $1000.00
                </span>
                <div className='btn-wrapper item'>
                    <button>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div >
    )
}