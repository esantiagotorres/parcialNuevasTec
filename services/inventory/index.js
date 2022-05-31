'use strict';

exports.updateInventory = (message, context) => {
    const data = Buffer.from(message.data, 'base64').toString();
    const {orderId} = JSON.parse(data);
    console.log('updateInventory::orderId', orderId);
    return true;
}

