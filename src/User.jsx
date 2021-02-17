import React from 'react';
import {useParams, useLocation, useHistory} from "react-router-dom";

const User = () => {
    const {name} = useParams();
    const location = useLocation();
    const history = useHistory();
    return(
    <>
        <h2>Welcome {name} to our page</h2>
        <p> my cuurent current location is {location.pathname}</p>
        {location.pathname === `/user/abzal` ? (<button onClick={() => history.goBack()}>found me</button>) : null}
        </>)
   
}

export default User;