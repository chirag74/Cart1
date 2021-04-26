import React from 'react';
import CartItem from './CartItem'
// class Cart extends React.Component {
//     constructor () {
//         super();
//         this.state={
//             // price:'999',
//             // title:'phone',
//             // qty:1,
//             // img:''
// products:[
//     {
//         price:'99',
//          title:'Watch',
//         qty:1,
//          img:'', 
//          id:1
//     },
//     {
//         price:'999',
//         title:'phone',
//         qty:1,
//          img:'',
//          id:2
//     },
//     {
//         price:'99999',
//          title:'Laptop',
//         qty:4,
//          img:'', 
//          id:3
//     }
// ]


//         }
        
//     }
//     handleIncreaseQuantity=(product)=>{
//         console.log('heyy please inc the qty of',product);
//         const {products}=this.state;
//         const index=products.indexOf(product);

//         products[index].qty +=1;
         
//         this.setState({
//             products
//         });

//     }
//     handleDecreaseQuantity=(product)=>{
// console.log('heyy plz dec the qty of',product);
// const {products}=this.state;
// const index=products.indexOf(product);
// if(products[index].qty===0){
//     return; 
// }
// products[index].qty -=1;

// this.setState({
//     products
// });
//     }
//     handleDeleteProduct=(id)=>{
//         const  {products}=this.state;
//         const items=products.filter((item)=>item.id!==id);

//         this.setState({
//             products:items
//         });
//     }
const Cart= (props) => {

 
    //   const arr=[1,2,3,4,5]; 
    const  {products}=props;
return(
    <div className="cart">
   
    {/* <CartItem qty={1} price={99} title={"watch"} img={""}/> */}
 {products.map((product)=>{
     return (
     <CartItem 
     product={product}
      key={product.id}
       onIncreaseQuantity={props.onIncreaseQuantity}
       onDecreaseQuantity={props.onDecreaseQuantity}
       onDeleteProduct={props.onDeleteProduct}
      
    />
     )  
    })}
    
    </div>
);
  }

export default Cart;