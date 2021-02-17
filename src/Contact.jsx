import React from 'react';
import {useState} from "react"

const Contact = () => {
const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message:"",
});

const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preVal) => {
        return{
            ...preVal,
            [name] : value,
        }
    })
}

const formSubmit = (e) => {
    e.preventDefault();
    alert(
        `${data.fullname}. ${data.phone}. ${data.email}. ${data.message}`)
};
    return(
        <>
    <div className="my-5"><h1 className="text-center">Contact Us</h1></div>
    <div className="container contact_div">
        <div className="row">
            <div ClassName="col-md-6 col-sm-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div ClassName="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
             <input type="text" reqire className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="enter your name" />
                </div>
                <div ClassName="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Phone</label>
             <input type="phone" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile number" />
                </div>

                <div ClassName="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" name="message" value={data.message} onChange={inputEvent}>Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>


                </form>
            </div>
            
        </div>
    </div>
        </>
    )
}

export default Contact;