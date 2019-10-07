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

const landparcels = [
  'SK 3957 1585',
  'SK 3957 1586',
  'SK 3957 1587',
  'SK 3957 1588',
  'SK 3957 1589',
  'SK 3957 1590'
]

//accessibleAutocomplete({
//  element: document.querySelector('#my-autocomplete-container'),
//  id: 'my-autocomplete', // To match it to the existing <label>.
//  source: topics
//})

accessibleAutocomplete({
  element: document.querySelector('#my-autocomplete-container'),
  id: 'my-autocomplete', // To match it to the existing <label>.
  source: landparcels
})
