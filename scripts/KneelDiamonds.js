import { Metals } from "./Metals.js";
import { DiamondSizes } from "./DiamondSizes.js";
import { JewelryStyles } from "./JewelryStyles.js";
import { Orders } from "./Orders.js";
import { addCustomOrder } from "./database.js";

document.addEventListener("click", (event) => {
  const itemClicked = event.target;
  if (itemClicked.id.startsWith("orderButton")) {
    addCustomOrder();
  }
});

// const metals = getMetals();

// Remember that the function you pass to find() must return true/false
// const foundMetal = metals.find((metal) => {
//   return metal.id === order.metalId;
// });
// const totalCost = foundMetal.price;

// const costString = totalCost.toLocaleString("en-US", {
//   style: "currency",
//   currency: "USD",
// })`<li>
//     Order #${order.id} cost ${costString}
// </li>`;

export const KneelDiamonds = () => {
  return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `;
};
