import React from 'react';
class CartItem extends React.Component {
    constructor () {
        super();
        this.state={
            price:'999',
            title:'phone',
            qty:1,
            img:''



        }
    }
    render(){
        const {price,title,qty}=this.state;
        return (
            <div className='cart-item'>
                <div className="left-block">
                 <img alt="" style={styles.image}/>

                </div>
                <div className="right-block">
<div style={{fontSize:25}}>{title}</div>
<div style={{color:'#777'}}>{price}</div>
<div style={{color:'#777'}}>{qty}</div>
<div className="cart-item-actions">
    <img alt="inc" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1619094877~hmac=cd3082df510fe9e16bbcd488548f781d"></img>
    <img alt="dec" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1828/1828906.svg?token=exp=1619094832~hmac=bd767986253e3a249c99418336339027"></img>
    <img alt="dlt" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3439/3439691.svg?token=exp=1619094908~hmac=0b179b38d2988d1d87c71dd69cc1f457"></img>
</div>
                </div>

            </div>
        );
    }
}
const styles={
    image: {
height: 110,
width: 110,
borderRadius: 5,
background: '#ccc'
    }
}
export default CartItem;