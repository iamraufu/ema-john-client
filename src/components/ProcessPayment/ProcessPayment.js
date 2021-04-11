import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SpiltCardForm from './SpiltCardForm';

const ProcessPayment = ({handlePayment}) => {
      const stripePromise = loadStripe('pk_test_51IevUCA0Ihq6EpA0dqfdO8X4gU8CdMvb99F6l9RFCA3hibadCuDAMqlzj9mgvqmykisBnLM1PmXVGB9m4Bk1elVc00mNzURU0t');

      
      return (

            <Elements stripe={stripePromise}>
                  <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
                  {/* <SpiltCardForm/> */}
            </Elements>

      );
};

export default ProcessPayment;