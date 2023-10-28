"use-strict";

/*
simulating an API call and using promise to handle 
the async task

  1. creating a basic order API and performing the task in promise
     structure.
  2. If cart contains items we will resolve the promise, if cart
     is empty we will throw an error.
  3. Will validate the cart inside the executor function
  4. API calls are Asynchronous tasks
  
  //update

  5. learnt about promise chaining and implemented the 3 new 
     async API's to simulate promise chaining
     1. proceedtoPayment()
     2. showOrderSummary()
     3. updateWalletBallance()
  6. Learnt about advance error handling.
*/

const cart = ["shoes", "Jeans", "Shirt"];

createOrderAPI(cart)
  .then(function (result) {
    console.log(`OrderId : ${result.id}`);
    console.log(`Total Price: ${result.price}`);
    return result;
  })
  .then(function (result) {
    return proceedtoPayment(result);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .then(function () {
    return showOrderSummary(cart);
  })
  .then(function (printOrderSummary) {
    console.log(printOrderSummary);
  })
  .then(function () {
    return updateWalletBalance();
  })
  .then(function (walletBalanceInfo) {
    console.log(walletBalanceInfo);
  })
  .catch(function (error) {
    //handling error if rejected
    console.log(error);
  });

function createOrderAPI(cart) {
  const promise = new Promise(function (resolve, reject) {
    //validate the cart
    //create order or Reject order
    if (!validateCart(cart)) {
      setTimeout(function () {
        const error = "Oops! Your shopping cart is empty";
        reject(error);
      }, 1000);
    } else {
      setTimeout(function () {
        const orderId = "123456";
        const orderPrice = "2000 INR";
        const orderDetails = { id: orderId, price: orderPrice };
        resolve(orderDetails);
      }, 1000);
    }
  });

  return promise;
}

function validateCart(cart) {
  if (cart.length === 0) {
    return false;
  } else {
    return true;
  }
}

function proceedtoPayment(result) {
  return new Promise((resolve, reject) => {
    resolve(
      `Payment of ${result.price} for orderId ${result.id} is successful`
    );
  });
}

function showOrderSummary(cart) {
  return new Promise((resolve, reject) => {
    resolve(`Total items in your cart are ${cart} 
    Your total order value is 2000 INR`);
  });
}

function updateWalletBalance() {
  return new Promise((resolve, reject) => {
    resolve("Your wallet balance is updated");
  });
}
