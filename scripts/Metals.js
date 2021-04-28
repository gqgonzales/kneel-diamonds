import { getMetals } from "./database.js";

const metals = getMetals();

document.addEventListener("change", (event) => {
  if (event.target.name === "metal") {
    window.alert(``);
  }
});

export const Metals = () => {
  let html = "<ul>";

  // This is how you have been converting objects to <li> elements

  /*

  for (const metal of metals) {
    html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`;
  }

  */

  // Re-write it using .map

  const metalsList = metals.map((metal) => {
    return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`;
  });

  html += metalsList.join("");

  // And that's how you'd rewrite using .map!

  html += "</ul>";
  return html;
};
