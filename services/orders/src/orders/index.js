'use strict';

const {pubsub} = require('@google-cloud/pubsub')
const pubSubClient = new pubsub();
const TOPIC_name = 'orders';

const createOrder= async (data) => {
    const orderId = Math.random(Math.random() * 100000);
    console.log('createOrder::data', data);
    console.log('createOrder::OrderId', orderId);
   
    await notifyOrderCreated(orderId); 
    
    return orderId;
}

const notifyOrderCreated = async (orderId) => {
    pubSubClient.topic(TOPIC_name).publish(Buffer.from(JSON.stringify({orderId})));
   return await topic.publishJson({orderId});
}

module.exports = {
    createOrder
}