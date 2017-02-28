import paypal from 'paypal-rest-sdk';

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': CONFIG.client_id,
  'client_secret': CONFIG.client_secret
});
