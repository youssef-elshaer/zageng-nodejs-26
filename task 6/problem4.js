function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { id: 1, name: "Youssef" };
      console.log("User loaded");
      resolve(user);
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const orders = [
        { id: 101, product: "Laptop" },
        { id: 102, product: "Phone" },
      ];
      console.log("Orders loaded");
      resolve(orders);
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const details = {
        orderId: orderId,
        status: "Shipped",
        price: 1500,
      };
      console.log("Details loaded");
      resolve(details);
    }, 1000);
  });
}

async function loadData() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);

    console.log(details);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();
