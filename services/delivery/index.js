'use strict'

exports.scheduleDelivery = (message, context) => {
    const data = Buffer.from(message.data, 'base64').toString();
    const {orderId} = JSON.parse(data);
        console.log('scheduleDelivery', orderId);
        return true;
    
}