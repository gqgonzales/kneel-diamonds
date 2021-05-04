import {
  getMetals,
  getSizes,
  getStyles,
  getOrders,
  getConfigs,
} from "./database.js";

const buildOrderListItem = (order) => {
  const metals = getMetals();
  const sizes = getSizes();
  const styles = getStyles();
  const configs = getConfigs();

  const foundMetal = metals.find((metal) => {
    return metal.id === order.metalId;
  });

  const foundSize = sizes.find((size) => {
    return size.id === order.sizeId;
  });

  const foundStyle = styles.find((style) => {
    return style.id === order.styleId;
  });

  const foundConfig = configs.find((config) => {
    return config.id === order.configId;
  });

  let totalCost =
    (foundMetal.price + foundSize.price + foundStyle.price) *
    foundConfig.priceMultiplier;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}.
    </li>`;
};

export const Orders = () => {
  const orders = getOrders();

  let html = "<ul>";

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join("");
  html += "</ul>";

  return html;
};
