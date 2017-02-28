require('./configure');

import paypal from 'paypal-rest-sdk';
import { responseCallback } from './utils';

paypal.payout.get(ARGS.payoutId, responseCallback);
