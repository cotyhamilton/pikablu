/* --- search modal display --- */

document.getElementById("search-field").addEventListener("focus", darken);
document.getElementById("search-field").addEventListener("blur", lighten);

function darken() {
    document.getElementById("results-container").style.display = "block";
}
function lighten() {
    document.getElementById("results-container").style.display = "none";
}