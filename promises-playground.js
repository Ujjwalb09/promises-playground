"use-strict";

/*
simulating an API call and using promise to handle 
the async task

  1. creating a basic order API and performing the task in promise
     structure.
  2. If cart contains items we will resolve the promise, if cart
     is empty we will throw and error.
  3. Will validate the cart inside the executor function
  4. API calls are Asynchronous tasks
*/

const cart = ["Shoes", "Mobile", "Laptop"];

const promiseObj = createOrderAPI(cart);

//consuming the promise object
promiseObj
  .then(function (orderId) {
    console.log(orderId);
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
      }, 5000);
    } else {
      setTimeout(function () {
        const orderId = "123456";
        resolve(orderId);
      }, 5000);
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
