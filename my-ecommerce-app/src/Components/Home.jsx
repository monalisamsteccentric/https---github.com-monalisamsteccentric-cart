
import {useSelector,useDispatch} from 'react-redux'
import { addToCart } from '../Features/CartSlice'



const Home = () =>{
    
    const dispatch = useDispatch()
    const cartItem = useSelector((state)=>state.cart.cartItems)
    

    const handleClick = (item) =>{
        dispatch(addToCart(item))
        window.alert('Item has been added to your cart')
    }
    return(
        <>
       <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
          {
            cartItem.map((item)=>{
                return(
                    <div key={item.id} style={{height:'10rem', width: '60rem'
                    ,display:'flex', flexWrap: 'wrap', margin:'2rem'}}>
                      <img src={item.image} alt={item.title} style={{height: '10rem', width: '10rem'}}/>
                       <div style={{display:'flex', flexDirection:'column', justifyContent:'start',
                        alignItems:'flex-start',
                        marginLeft : '5rem',
                        width: '60%'}}>
                        <h4 style={{textAlign:'left'}}>{item.title}</h4>
                        <h4>${item.price}</h4>
                        <button style={{
                            border: '1px solid pink',
                            backgroundColor: 'white'
                        }}
                        onClick={()=>handleClick(item)}>Add to Cart</button>
                        
                            
                        
                       </div>
                    </div> 
                )
            })
            
            

          }
      
       </div>
      
       </>
    )
}

export default Home