import React from 'react';
import Sdata from './Sdata';
import Cart from "./Cart"


const Services = () => {
    return(
        <>
        <div className="my-5">
            <div className="text-center"><h1>Our Services</h1></div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        
                    {
                    Sdata.map((val, ind) => {
                     return <Cart Id={val.Id}  imgsrc={val.imgsrc} title={val.title} para={val.para} linktext={val.linktext}  />
                            })
                     }

                        </div>
                    </div>
                </div>
            </div>

            
        </div>

        </>
    )
}

export default Services;