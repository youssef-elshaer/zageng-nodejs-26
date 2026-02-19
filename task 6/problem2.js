function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "Youssef",
    };
    console.log("User loaded");
    callback(user);
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    const orders = [
      { id: 101, product: "Laptop" },
      { id: 102, product: "Phone" },
    ];
    console.log("Orders loaded");
    callback(orders);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    const details = {
      orderId: orderId,
      status: "Shipped",
      price: 1500,
    };
    console.log("Details loaded");
    callback(details);
  }, 1000);
}
getUser((user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      console.log(details);
    });
  });
});
