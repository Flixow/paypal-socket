require('./configure');

import paypal from 'paypal-rest-sdk';
import { responseCallback } from './utils';

paypal.payment.execute(ARGS.paymentId, { 'payer_id': ARGS.PayerID }, responseCallback);
