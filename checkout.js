const express = require('express');
const router = express.Router();

const base_path = '/';

router.post(base_path, (req, res) => {

    console.log(req.body);

    if(req.body.merchant_id && 
        req.body.card_number &&
        req.body.card_cvv  &&
        req.body.card_expire &&
        req.body.cardholder_name &&
        req.body.price &&
        req.body.currency &&
        req.body.bill_ref &&
        req.body.payment_return_url){
            res.send("TRUE")
        }
     else{
        res.send("Please send all the required fields\n"+JSON.stringify(req.body));
     }
    
    
})

module.exports = router;