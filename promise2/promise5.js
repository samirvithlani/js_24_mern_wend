const selectDish = ()=>{



    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                dish:"you have selected..."+"Pizza",
                price:200,
                time:3000
            })
        },3000)
    })

}

const placeOrder = (dish)=>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:`Order placed for ${dish.dish}`,
                time:dish.time,
                orderId:1234,
                date:new Date()
            })
        },2000)
    })


}

const payment = (order)=>{


    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                message:`Payment done for order ${order.orderId}`,
                transactionId:1234,
            })
        },2000)

    })

}
const assignDelivery = (payment)=>{


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:`Delivery assigned for order ${payment.transactionId}`,
                deliveryPerson:'John',
                contact:1234567890
            })
        },2000)
    })

}

const deliverOrder = (delivery)=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:`Order delivered by ${delivery.deliveryPerson}`,
                contact:delivery.contact,
                time:new Date()

            })
        },2000)
    })

}

const orderFood = async()=>{

    console.log("ordering food....")
    const dish = await selectDish()
    console.log(dish)
    const order = await placeOrder(dish)
    console.log(order)
    const pay = await payment(order)
    console.log(pay)
    const delivery = await assignDelivery(pay)
    console.log(delivery)
    const delivered = await deliverOrder(delivery)
    console.log(delivered)



}
orderFood()