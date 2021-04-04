import './Shipment.css';
import React, { useContext } from 'react';
import { UserContext } from "../../App";
import { useForm } from 'react-hook-form';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
        const { register, handleSubmit, watch, errors } = useForm();
        const onSubmit = data => {
            const savedCart = getDatabaseCart();
            const orderDetails = {...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() };

            fetch('https://emaajohn.herokuapp.com/addOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderDetails)
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        processOrder();
                        alert('Your Order Placed Successfully!');
                    }
                })

        };

        // eslint-disable-next-line
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        console.log(watch("example"));

        return ( <
                form className = "ship-form"
                onSubmit = { handleSubmit(onSubmit) } >
                <
                input name = "name"
                defaultValue = { loggedInUser.name }
                ref = { register({ required: true }) }
                placeholder = "Enter Your Name" / > {
                    errors.name && < span className = "error" > * Name is required < /span>}

                    <
                    input name = "email"
                    defaultValue = { loggedInUser.email }
                    ref = { register({ required: true }) }
                    placeholder = "Enter Your Email" / > {
                        errors.email && < span className = "error" > * Email is required < /span>}

                        <
                        input name = "address"
                        defaultValue = ""
                        ref = { register({ required: true }) }
                        placeholder = "Enter Your Address" / > {
                            errors.address && < span className = "error" > * Address is required < /span>}

                            <
                            input name = "phone"
                            defaultValue = ""
                            ref = { register({ required: true }) }
                            placeholder = "Enter Your Phone" / > {
                                errors.phone && < span className = "error" > * Phone is required < /span>}

                                <
                                input type = "submit" / >
                                <
                                /form>
                            );
                        };

                        export default Shipment;