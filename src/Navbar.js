import React from 'react';
const Navbar = (props) =>{
return (
            <div style={styles.nav}>
                
<div style={styles.CartIconContainer}>
    <img  style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1619419177~hmac=a1b6557b8c68bce7e41dff5e518d9797" alt="cart-icon"/>
    <span style={styles.cartCount}>{props.count}</span>
</div>
            </div>
        );
    }

const styles={
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    CartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
};

export default Navbar;