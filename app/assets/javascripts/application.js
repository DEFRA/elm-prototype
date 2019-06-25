/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


var allPlots = $("svg.plots .plot");

allPlots.on("click", function() {

  allPlots.removeClass("selected");
  $(this).addClass("selected");

});





const topics = [
  'Arable land',
  'Bird feeding',
  'Feeding birds',
  'Tree health',
  'Kestrels',
  'Flower mix'
]

accessibleAutocomplete({
  element: document.querySelector('#my-autocomplete-container'),
  id: 'my-autocomplete', // To match it to the existing <label>.
  source: topics
})
