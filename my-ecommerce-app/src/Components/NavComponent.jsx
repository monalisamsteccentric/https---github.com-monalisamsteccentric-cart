import Badge from 'react-bootstrap/Badge';
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
const NavComponent = () =>{
    const number = useSelector(state=> state.cart.numberOfItems)
    return (
        <div style={{margin: '0', padding: '0', height: '3rem', width:'100%', display:'flex'
        , justifyContent: 'space-between', alignItems:'center', backgroundColor: 'pink'}}>

            
                <NavLink  style={{textDecoration:'none', paddingLeft: '10rem' , color:'white', 'fontWeight' :'900', fontSize: '1rem', cursor:'pointer'}} to='/'>
                    Products
                </NavLink>
        
            
            <NavLink style={{textDecoration:'none', paddingRight: '10rem' , color:'white', 'fontWeight' :'900', fontSize: '1rem', cursor:'pointer'}} to='/cart'>
                    Cart
                    <Badge bg="secondary">{number}</Badge>
                </NavLink>
            
            
        </div>
    )
}

export default NavComponent