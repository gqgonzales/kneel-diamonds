import { getConfigs, setConfig } from "./database.js";

const configs = getConfigs();

document.addEventListener("change", (event) => {
  if (event.target.name === "configuration") {
    setConfig(parseInt(event.target.value));
  }
});

export const Configurations = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const listItems = configs.map((config) => {
    return `<li class="config_options">
            <input type="radio" name="configuration" value="${config.id}" /> ${config.config}
        </li>`;
  });

  html += listItems.join("");
  // The .join("") attaches all the strings in your array into one long string!
  html += "</ul>";

  return html;
};
