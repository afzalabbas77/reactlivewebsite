import React from 'react';
import{NavLink} from "react-router-dom";



const Cart =(props) => {

    return(
        <>
 <div className="col-md-4 col-10 max-auto">
 <div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt={props.title} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text font-weight-bold">{props.para}</p>
    <NavLink to="/" className="btn btn-primary">{props.linktext}</NavLink>
  </div>
</div>
         </div>
        </>
    )
}

export default Cart;