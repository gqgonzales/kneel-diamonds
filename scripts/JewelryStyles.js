import { getStyles } from "./database.js";

const styles = getStyles();

document.addEventListener("change", (event) => {
  if (event.target.name === "style") {
    window.alert(``);
  }
});

export const JewelryStyles = () => {
  let html = "<ul>";

  // Use .map() for converting objects to <li> elements
  const stylesList = styles.map((styleObject) => {
    return `<li>
            <input type="radio" name="style" value="${styleObject.id}" /> ${styleObject.style}
        </li>`;
  });
  // Join all of the strings in the array into a single string
  html += stylesList.join("");

  html += "</ul>";
  return html;
};
