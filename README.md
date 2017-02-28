# Paypal Syncano Socket

It is Paypal integration with Syncano. It allows you to do actions on payments and payouts like create, get or execute.

## Config
Go to `syncano/paypal/socket.yml` in socket directory set `client_id` and `client_secret` to your config. Visit [hhttps://developer.paypal.com/docs/integration/direct/make-your-first-call/](hhttps://developer.paypal.com/docs/integration/direct/make-your-first-call/) to find out how to get them.

## Endpoints
### payment_create_with_paypal
    
#### parameters:
      paymentJsonData: '{
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
      }'

#### response: 
      {
        id: 'PAY-7PB74678F47120112LC2Z4NI',
        intent: 'sale',
        state: 'created',
        payer: { payment_method: 'paypal' },
        transactions: [{
          amount: { total: '1.00', currency: 'USD' },
          description: 'This is the payment description.',
          item_list: {
            items: [{
              name: 'item1',
              sku: 'item',
              price: '1.00',
              currency: 'USD',
              quantity: 1
            }]
          },
          related_resources: []
        }],
        create_time: '2017-02-28T15:58:45Z',
        links: [
          {
            href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-7PB74678F47120112LC2Z4NI',
            rel: 'self',
            method: 'GET'
          },
          {
            href: 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-7T094805F4644894L',
            rel: 'approval_url',
            method: 'REDIRECT'
          },
          {
            href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-7PB74678F47120112LC2Z4NI/execute',
            rel: 'execute',
            method: 'POST'
          }
        ],
        httpStatusCode: 201
      }
&nbsp;

### payment_create_with_credit_card
    
#### parameters:
      paymentJsonData: '{
        "intent": "sale",
        "payer": {
          "payment_method": "credit_card",
          "funding_instruments": [{
            "credit_card": {
              "type": "visa",
              "number": "4417119669820331",
              "expire_month": "11",
              "expire_year": "2018",
              "cvv2": "874",
              "first_name": "Joe",
              "last_name": "Shopper",
              "billing_address": {
                "line1": "52 N Main ST",
                "city": "Johnstown",
                "state": "OH",
                "postal_code": "43210",
                "country_code": "US"
              }
            }
          }]
        },
        "transactions": [{
          "amount": {
            "total": "7",
            "currency": "USD",
            "details": {
              "subtotal": "5",
              "tax": "1",
              "shipping": "1"
            }
          },
          "description": "This is the payment transaction description."
        }]
      }'

#### response: 
      {
        id: 'PAY-69G10061U9672872WLC22BRY',
        create_time: '2017-02-28T16:09:43Z',
        update_time: '2017-02-28T16:09:47Z',
        state: 'approved',
        intent: 'sale',
        payer: {
          payment_method: 'credit_card',
          funding_instruments: [{
            credit_card: {
              type: 'visa',
              number: 'xxxxxxxxxxxx4750',
              expire_month: '3',
              expire_year: '2022',
              first_name: 'Joe',
              last_name: 'Shopper',
              billing_address: {
                line1: '52 N Main ST',
                city: 'Johnstown',
                state: 'OH',
                postal_code: '43210',
                country_code: 'US'
              }
            }
          }]
        },
        transactions: [{
          amount: {
            total: '7.00',
            currency: 'USD',
            details: {
              subtotal: '5.00',
              tax: '1.00',
              shipping: '1.00'
            }
          },
          description: 'This is the payment transaction description.',
          related_resources: [{
            sale: {
              id: '0TA408769F059142E',
              create_time: '2017-02-28T16:09:43Z',
              update_time: '2017-02-28T16:09:47Z',
              amount: {
                total: '7.00',
                currency: 'USD'
              },
              state: 'completed',
              parent_payment: 'PAY-69G10061U9672872WLC22BRY',
              links:[
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/sale/0TA408769F059142E',
                  rel: 'self',
                  method: 'GET'
                },
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/sale/0TA408769F059142E/refund',
                  rel: 'refund',
                  method: 'POST'
                },
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-69G10061U9672872WLC22BRY',
                  rel: 'parent_payment',
                  method: 'GET'
                }
              ],
              fmf_details: {},
              processor_response: { avs_code: 'X', cvv_code: 'M' }
            }
          }]
        }],
        links: [{
          href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-69G10061U9672872WLC22BRY',
          rel: 'self',
          method: 'GET'
        }],
        httpStatusCode: 201
      }
&nbsp;

### payment_details
    
#### parameters:
      paymentId: 'PAY-64644582DN4640416LC2DLSI' 

#### response: 
      {
        id: 'PAY-64644582DN4640416LC2DLSI',
        intent: 'sale',
        state: 'approved',
        cart: '290534519S964102S',
        payer: {
          payment_method: 'paypal',
          status: 'VERIFIED',
          payer_info: {
            email: 'danielsiwek95-buyer@gmail.com',
            first_name: 'test',
            last_name: 'buyer',
            payer_id: '4TYTMXM27QEF6',
            shipping_address: {
              recipient_name: 'test buyer',
              line1: 'Bajkowa 2 / 5,',
              line2: 'Case postale 12',
              city: 'Warszawa',
              state: '',
              postal_code: '00800',
              country_code: 'PL'
            },
            phone: '2269420414',
            country_code: 'PL'
          }
        },
        transactions: [{
          amount: {
            total: '1.00',
            currency: 'USD',
            details: { subtotal: '1.00' }
          },
          description: 'This is the payment description.',
          item_list: {
            items: [{
              name: 'item1',
              sku: 'item',
              price: '1.00',
              currency: 'USD',
              tax: '0.00',
              quantity: 1
            }],
            shipping_address: {
              recipient_name: 'test buyer',
              line1: 'Bajkowa 2 / 5,',
              line2: 'Case postale 12',
              city: 'Warszawa',
              state: '',
              postal_code: '00800',
              country_code: 'PL'
            }
          },
          related_resources: [{
            sale: {
              id: '87L90858SU220704X',
              state: 'completed',
              amount: {
                total: '1.00',
                currency: 'USD',
                details: { subtotal: '1.00' }
              },
              payment_mode: 'INSTANT_TRANSFER',
              protection_eligibility: 'ELIGIBLE',
              protection_eligibility_type: 'ITEM_NOT_RECEIVED_ELIGIBLE,UNAUTHORIZED_PAYMENT_ELIGIBLE',
              transaction_fee: {
                value: '0.34',
                currency: 'USD'
              },
              parent_payment: 'PAY-64644582DN4640416LC2DLSI',
              create_time: '2017-02-27T14:21:39Z',
              update_time: '2017-02-27T14:21:39Z',
              links: [
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/sale/87L90858SU220704X',
                  rel: 'self',
                  method: 'GET'
                },
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/sale/87L90858SU220704X/refund',
                  rel: 'refund',
                  method: 'POST'
                },
                {
                  href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-64644582DN4640416LC2DLSI',
                  rel: 'parent_payment',
                  method: 'GET'
                }
              ]
            }
          }]
        }],
        create_time: '2017-02-27T14:21:39Z',
        links: [{
          href: 'https://api.sandbox.paypal.com/v1/payments/payment/PAY-64644582DN4640416LC2DLSI',
          rel: 'self',
          method: 'GET'
        }],
        httpStatusCode: 200
      }
