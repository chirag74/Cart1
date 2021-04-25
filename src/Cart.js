import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component {
    constructor () {
        super();
        this.state={
            // price:'999',
            // title:'phone',
            // qty:1,
            // img:''
products:[
    {
        price:'99',
         title:'Watch',
        qty:1,
         img:'', 
         id:1
    },
    {
        price:'999',
        title:'phone',
        qty:1,
         img:'',
         id:2
    },
    {
        price:'99999',
         title:'Laptop',
        qty:4,
         img:'', 
         id:3
    }
]


        }
        
    }
  render (){
    //   const arr=[1,2,3,4,5];
    const  {products}=this.state;
return(
    <div className="cart">
   
    {/* <CartItem qty={1} price={99} title={"watch"} img={""}/> */}
 {products.map((product)=>{
     return (
     <CartItem 
     product={product}
      key={product.id}
       
      />
     )  
    })};
    
    </div>
)
  }
}
export default Cart;