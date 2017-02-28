require('./configure');

import paypal from 'paypal-rest-sdk';

paypal.payment.list({}, (error, response) => {
  if (error) {
    setResponse(new HttpResponse(error.httpStatusCode, JSON.stringify(error)));
  } else {
    const payments = response.payments.map(payment => {
      const { id, create_time, update_time, intent, state, payer_info } = payment;

      return {
        id,
        create_time,
        update_time,
        intent,
        state,
        ppayer_info
      }
    });

    setResponse(new HttpResponse(response.httpStatusCode, JSON.stringify(payments)));
  }
});
