require('./configure');

import paypal from 'paypal-rest-sdk';
import { responseCallback } from './utils';

paypal.payment.get(ARGS.paymentId, responseCallback);
