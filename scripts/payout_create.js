require('./configure');

import paypal from 'paypal-rest-sdk';
import { responseCallback } from './utils';

const sender_batch_id = ARGS.senderBatchId || Math.random().toString(36).substring(9);

const create_payout_json = {
    "sender_batch_header": {
        "sender_batch_id": sender_batch_id,
        "email_subject": "You have a payment"
    },
    "items": [
        {
            "recipient_type": "EMAIL",
            "amount": {
                "value": 7.68,
                "currency": "USD"
            },
            "receiver": "danielsiwek95@gmail.com",
            "note": "Thank you.",
            "sender_item_id": "item_1"
        }
    ]
};

paypal.payout.create(create_payout_json, responseCallback);
