export const pizzaPrice = (...p) => p.reduce((s, t) => s + { e: 7, s: 9, g: 10, T: 2, S: 1 }[t[5]], 0);

export function orderPrice(pizzaOrders) {
  var orderprice = 0;
  pizzaOrders.forEach((order)=>{
    // console.log(order);
    orderprice = orderprice + pizzaPrice(order.pizza,...order.extras);
  });
  return orderprice
  throw new Error('Please implement the orderPrice function');
}
