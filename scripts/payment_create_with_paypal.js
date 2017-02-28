require('./configure');

import paypal from 'paypal-rest-sdk';
import { responseCallback } from './utils';

let paymentJsonData = {};

try {
  paymentJsonData = JSON.parse(ARGS.paymentJsonData);
} catch (e) {
  setResponse(new HttpResponse(400, 'Cannot convert paymentJsonData to object', 'text/plain'));
}

paypal.payment.create(paymentJsonData, responseCallback);
