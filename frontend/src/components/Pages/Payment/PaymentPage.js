import React, { useState, useEffect } from 'react';
import classes from './paymentPage.module.css';
import { trackOrder } from '../../../Services/orderService';
import Title from '../../../components/Title/Title';
import OrderItemsList from '../../../components/OrderItemsList/OrderItemsList';
import PaypalButtons from '../../../components/PaypalButtons/PaypalButtons';

export default function PaymentPage() {
  const [order, setOrder] = useState();

  useEffect(() => {
    trackOrder().then(data => setOrder(data));
  }, []);

  if (!order) return;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          {/* <Title title="Order Form" fontSize="1.6rem" /> */}
          <div className={classes.summary}>
            <div>
              <h3>Name:</h3>
              <span>{order.name}</span>
            </div>
          </div>
          <OrderItemsList order={order} />
        </div>

        <div className={classes.buttons_container}>
          <div className={classes.buttons}>
            <PaypalButtons order={order} />
          </div>
        </div>
      </div>
    </>
  );
}
