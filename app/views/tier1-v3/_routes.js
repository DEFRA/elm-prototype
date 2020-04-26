const express = require('express')
const router = express.Router()

// Tier 1 version 3

// Select an action
router.post('/actions-answer', function (req, res) {

  var action = req.session.data['what-action']

  if (action == "fertilisers"){res.redirect('/tier1-v3/options/fertilisers?what-action=')}
  if (action == "fertiliser-spreading"){res.redirect('/tier1-v3/options/fertiliser-spreading?what-action=')}
  if (action == "no-till"){res.redirect('/tier1-v3/options/no-till?what-action=')}
  if (action == "nutrients"){res.redirect('/tier1-v3/options/nutrients?what-action=')}
  if (action == "cover-crops"){res.redirect('/tier1-v3/options/cover-crops?what-action=')}
  if (action == "tree-belts"){res.redirect('/tier1-v3/options/tree-belts?what-action=')}
  if (action == "agroforestry"){res.redirect('/tier1-v3/options/agroforestry?what-action=')}
  if (action == "wind-erosion"){res.redirect('/tier1-v3/options/wind-erosion?what-action=')}
  if (action == "create-grassland"){res.redirect('/tier1-v3/options/create-grassland?what-action=')}
  if (action == "flower-habitat"){res.redirect('/tier1-v3/options/flower-habitat?what-action=')}
  if (action == "low-input-cereal"){res.redirect('/tier1-v3/options/low-input-cereal?what-action=')}
  if (action == "unharvested-cereal"){res.redirect('/tier1-v3/options/unharvested-cereal?what-action=')}
  if (action == "beetle-bank"){res.redirect('/tier1-v3/options/beetle-bank?what-action=')}
  if (action == "cultivated-plots"){res.redirect('/tier1-v3/options/cultivated-plots?what-action=')}
  if (action == "grassy-strips"){res.redirect('/tier1-v3/options/grassy-strips?what-action=')}
  if (action == "nesting-plots"){res.redirect('/tier1-v3/options/nesting-plots?what-action=')}
  if (action == "winter-bird-food"){res.redirect('/tier1-v3/options/winter-bird-food?what-action=')}
  if (action == "winter-supplementary"){res.redirect('/tier1-v3/options/winter-supplementary?what-action=')}
  if (action == "bog-grazing"){res.redirect('/tier1-v3/options/bog-grazing?what-action=')}
  if (action == "fencing"){res.redirect('/tier1-v3/options/fencing?what-action=')}
  if (action == "drinking-water"){res.redirect('/tier1-v3/options/drinking-water?what-action=')}
  if (action == "manure"){res.redirect('/tier1-v3/options/manure?what-action=')}
  if (action == "chalk-limestone-grasslands"){res.redirect('/tier1-v3/options/chalk-limestone-grasslands?what-action=')}
  if (action == "purple-moor-grass"){res.redirect('/tier1-v3/options/purple-moor-grass?what-action=')}
  if (action == "calcareous-grassland"){res.redirect('/tier1-v3/options/calcareous-grassland?what-action=')}
  if (action == "bare-soil"){res.redirect('/tier1-v3/options/bare-soil?what-action=')}
  if (action == "grass-strips"){res.redirect('/tier1-v3/options/grass-strips?what-action=')}
  if (action == "canopy-cover"){res.redirect('/tier1-v3/options/canopy-cover?what-action=')}
  if (action == "deadwood"){res.redirect('/tier1-v3/options/deadwood?what-action=')}
  else {res.redirect('/tier1-v3/actions-environmental-validation')}
})

// Raise errors on attributes

router.post('/fertilisers-validation', function (req, res) {

  var fertilisers = req.session.data['fertilisers']['amount']

  if (fertilisers == undefined ){res.redirect('/tier1-v3/options/fertilisers-validation')}
  if (fertilisers == null ){res.redirect('/tier1-v3/options/fertilisers-validation')}
  if (fertilisers == 0 ){res.redirect('/tier1-v3/options/fertilisers-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/fertiliser-spreading-validation', function (req, res) {

  var fertiliserSpreading = req.session.data['fertiliser-spreading']['amount']

  if (fertiliserSpreading == undefined ){res.redirect('/tier1-v3/options/fertiliser-spreading-validation')}
  if (fertiliserSpreading == null ){res.redirect('/tier1-v3/options/fertiliser-spreading-validation')}
  if (fertiliserSpreading == 0 ){res.redirect('/tier1-v3/options/fertiliser-spreading-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/no-till-validation', function (req, res) {

  var noTill = req.session.data['no-till']['amount']

  if (noTill == undefined ){res.redirect('/tier1-v3/options/no-till-validation')}
  if (noTill == null ){res.redirect('/tier1-v3/options/no-till-validation')}
  if (noTill == 0 ){res.redirect('/tier1-v3/options/no-till-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/nutrients-validation', function (req, res) {

  var nutrients = req.session.data['nutrients']['amount']

  if (nutrients == undefined ){res.redirect('/tier1-v3/options/nutrients-validation')}
  if (nutrients == null ){res.redirect('/tier1-v3/options/nutrients-validation')}
  if (nutrients == 0 ){res.redirect('/tier1-v3/options/nutrients-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/cover-crops-validation', function (req, res) {

  var coverCrops = req.session.data['cover-crops']['amount']

  if (coverCrops == undefined ){res.redirect('/tier1-v3/options/cover-crops-validation')}
  if (coverCrops == null ){res.redirect('/tier1-v3/options/cover-crops-validation')}
  if (coverCrops == 0 ){res.redirect('/tier1-v3/options/cover-crops-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/tree-belts-validation', function (req, res) {

  var treeBelts = req.session.data['tree-belts']['amount']

  if (treeBelts == undefined ){res.redirect('/tier1-v3/options/tree-belts-validation')}
  if (treeBelts == null ){res.redirect('/tier1-v3/options/tree-belts-validation')}
  if (treeBelts == 0 ){res.redirect('/tier1-v3/options/tree-belts-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/agroforestry-validation', function (req, res) {

  var agroForestry = req.session.data['agroforestry']['amount']

  if (agroForestry == undefined ){res.redirect('/tier1-v3/options/agroforestry-validation')}
  if (agroForestry == null ){res.redirect('/tier1-v3/options/agroforestry-validation')}
  if (agroForestry == 0 ){res.redirect('/tier1-v3/options/agroforestry-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/wind-erosion-validation', function (req, res) {

  var windErosion = req.session.data['wind-erosion']['amount']

  if (windErosion == undefined ){res.redirect('/tier1-v3/options/wind-erosion-validation')}
  if (windErosion == null ){res.redirect('/tier1-v3/options/wind-erosion-validation')}
  if (windErosion == 0 ){res.redirect('/tier1-v3/options/wind-erosion-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/create-grassland-validation', function (req, res) {

  var createGrassland = req.session.data['create-grassland']['amount']

  if (createGrassland == undefined ){res.redirect('/tier1-v3/options/create-grassland-validation')}
  if (createGrassland == null ){res.redirect('/tier1-v3/options/create-grassland-validation')}
  if (createGrassland == 0 ){res.redirect('/tier1-v3/options/create-grassland-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/flower-habitat-validation', function (req, res) {

  var flowerHabitat = req.session.data['flower-habitat']['amount']

  if (flowerHabitat == undefined ){res.redirect('/tier1-v3/options/flower-habitat-validation')}
  if (flowerHabitat == null ){res.redirect('/tier1-v3/options/flower-habitat-validation')}
  if (flowerHabitat == 0 ){res.redirect('/tier1-v3/options/flower-habitat-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/low-input-cereal-validation', function (req, res) {

  var lowInputCereal = req.session.data['low-input-cereal']['amount']

  if (lowInputCereal == undefined ){res.redirect('/tier1-v3/options/low-input-cereal-validation')}
  if (lowInputCereal == null ){res.redirect('/tier1-v3/options/low-input-cereal-validation')}
  if (lowInputCereal == 0 ){res.redirect('/tier1-v3/options/low-input-cereal-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/unharvested-cereal-validation', function (req, res) {

  var unharvestedCereal = req.session.data['unharvested-cereal']['amount']

  if (unharvestedCereal == undefined ){res.redirect('/tier1-v3/options/unharvested-cereal-validation')}
  if (unharvestedCereal == null ){res.redirect('/tier1-v3/options/unharvested-cereal-validation')}
  if (unharvestedCereal == 0 ){res.redirect('/tier1-v3/options/unharvested-cereal-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/beetle-bank-validation', function (req, res) {

  var beetleBank = req.session.data['beetle-bank']['amount']

  if (beetleBank == undefined ){res.redirect('/tier1-v3/options/beetle-bank-validation')}
  if (beetleBank == null ){res.redirect('/tier1-v3/options/beetle-bank-validation')}
  if (beetleBank == 0 ){res.redirect('/tier1-v3/options/beetle-bank-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/cultivated-plots-validation', function (req, res) {

  var cultivatedPlots = req.session.data['cultivated-plots']['amount']

  if (cultivatedPlots == undefined ){res.redirect('/tier1-v3/options/cultivated-plots-validation')}
  if (cultivatedPlots == null ){res.redirect('/tier1-v3/options/cultivated-plots-validation')}
  if (cultivatedPlots == 0 ){res.redirect('/tier1-v3/options/cultivated-plots-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/grassy-strips-validation', function (req, res) {

  var grassyStrips = req.session.data['grassy-strips']['amount']

  if (grassyStrips == undefined ){res.redirect('/tier1-v3/options/grassy-strips-validation')}
  if (grassyStrips == null ){res.redirect('/tier1-v3/options/grassy-strips-validation')}
  if (grassyStrips == 0 ){res.redirect('/tier1-v3/options/grassy-strips-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/nesting-plots-validation', function (req, res) {

  var nestingPlots = req.session.data['nesting-plots']['amount']

  if (nestingPlots == undefined ){res.redirect('/tier1-v3/options/nesting-plots-validation')}
  if (nestingPlots == null ){res.redirect('/tier1-v3/options/nesting-plots-validation')}
  if (nestingPlots == 0 ){res.redirect('/tier1-v3/options/nesting-plots-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/winter-bird-food-validation', function (req, res) {

  var winterBirdFood = req.session.data['winter-bird-food']['amount']

  if (winterBirdFood == undefined ){res.redirect('/tier1-v3/options/winter-bird-food-validation')}
  if (winterBirdFood == null ){res.redirect('/tier1-v3/options/winter-bird-food-validation')}
  if (winterBirdFood == 0 ){res.redirect('/tier1-v3/options/winter-bird-food-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/winter-supplementary-validation', function (req, res) {

  var winterSupplementary = req.session.data['winter-supplementary']['amount']

  if (winterSupplementary == undefined ){res.redirect('/tier1-v3/options/winter-supplementary-validation')}
  if (winterSupplementary == null ){res.redirect('/tier1-v3/options/winter-supplementary-validation')}
  if (winterSupplementary == 0 ){res.redirect('/tier1-v3/options/winter-supplementary-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/bog-grazing-validation', function (req, res) {

  var bogGrazing = req.session.data['bog-grazing']['amount']

  if (bogGrazing == undefined ){res.redirect('/tier1-v3/options/bog-grazing-validation')}
  if (bogGrazing == null ){res.redirect('/tier1-v3/options/bog-grazing-validation')}
  if (bogGrazing == 0 ){res.redirect('/tier1-v3/options/bog-grazing-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/fencing-validation', function (req, res) {

  var fencing = req.session.data['fencing']['amount']

  if (fencing == undefined ){res.redirect('/tier1-v3/options/fencing-validation')}
  if (fencing == null ){res.redirect('/tier1-v3/options/fencing-validation')}
  if (fencing == 0 ){res.redirect('/tier1-v3/options/fencing-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/drinking-water-validation', function (req, res) {

  var drinkingWater = req.session.data['drinking-water']['amount']

  if (drinkingWater == undefined ){res.redirect('/tier1-v3/options/drinking-water-validation')}
  if (drinkingWater == null ){res.redirect('/tier1-v3/options/drinking-water-validation')}
  if (drinkingWater == 0 ){res.redirect('/tier1-v3/options/drinking-water-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/manure-validation', function (req, res) {

  var manure = req.session.data['manure']['amount']

  if (manure == undefined ){res.redirect('/tier1-v3/options/manure-validation')}
  if (manure == null ){res.redirect('/tier1-v3/options/manure-validation')}
  if (manure == 0 ){res.redirect('/tier1-v3/options/manure-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/chalk-limestone-grasslands-validation', function (req, res) {

  var chalkLimestoneGrasslands = req.session.data['chalk-limestone-grasslands']['amount']

  if (chalkLimestoneGrasslands == undefined ){res.redirect('/tier1-v3/options/chalk-limestone-grasslands-validation')}
  if (chalkLimestoneGrasslands == null ){res.redirect('/tier1-v3/options/chalk-limestone-grasslands-validation')}
  if (chalkLimestoneGrasslands == 0 ){res.redirect('/tier1-v3/options/chalk-limestone-grasslands-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/purple-moor-grass-validation', function (req, res) {

  var purpleMoorGrass = req.session.data['purple-moor-grass']['amount']

  if (purpleMoorGrass == undefined ){res.redirect('/tier1-v3/options/purple-moor-grass-validation')}
  if (purpleMoorGrass == null ){res.redirect('/tier1-v3/options/purple-moor-grass-validation')}
  if (purpleMoorGrass == 0 ){res.redirect('/tier1-v3/options/purple-moor-grass-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/calcareous-grassland-validation', function (req, res) {

  var calcareousGrassland = req.session.data['calcareous-grassland']['amount']

  if (calcareousGrassland == undefined ){res.redirect('/tier1-v3/options/calcareous-grassland-validation')}
  if (calcareousGrassland == null ){res.redirect('/tier1-v3/options/calcareous-grassland-validation')}
  if (calcareousGrassland == 0 ){res.redirect('/tier1-v3/options/calcareous-grassland-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/bare-soil-validation', function (req, res) {

  var bareSoil = req.session.data['bare-soil']['amount']

  if (bareSoil == undefined ){res.redirect('/tier1-v3/options/bare-soil-validation')}
  if (bareSoil == null ){res.redirect('/tier1-v3/options/bare-soil-validation')}
  if (bareSoil == 0 ){res.redirect('/tier1-v3/options/bare-soil-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/grass-strips-validation', function (req, res) {

  var grassStrips = req.session.data['grass-strips']['amount']

  if (grassStrips == undefined ){res.redirect('/tier1-v3/options/grass-strips-validation')}
  if (grassStrips == null ){res.redirect('/tier1-v3/options/grass-strips-validation')}
  if (grassStrips == 0 ){res.redirect('/tier1-v3/options/grass-strips-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/canopy-cover-validation', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']

  if (canopyCover == undefined ){res.redirect('/tier1-v3/options/canopy-cover-validation')}
  if (canopyCover == null ){res.redirect('/tier1-v3/options/canopy-cover-validation')}
  if (canopyCover == 0 ){res.redirect('/tier1-v3/options/canopy-cover-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

router.post('/deadwood-validation', function (req, res) {

  var deadWood = req.session.data['deadwood']['amount']

  if (deadWood == undefined ){res.redirect('/tier1-v3/options/deadwood-validation')}
  if (deadWood == null ){res.redirect('/tier1-v3/options/deadwood-validation')}
  if (deadWood == 0 ){res.redirect('/tier1-v3/options/deadwood-validation')}
  else {res.redirect('/tier1-v3/actions-answers')}

})

// Add another option

router.post('/another-option', function (req, res) {

  var anotherOption = req.session.data['another-option']
  var sort = req.session.data['sort']

  if ( (anotherOption == "yes") & (sort == "env") ){res.redirect('/tier1-v3/actions-environmental?another-option=')}
  if ( (anotherOption == "yes") & (sort == "farm") ){res.redirect('/tier1-v3/actions-farmtype?another-option=')}
  if ( (anotherOption == "yes") & (sort == "land") ){res.redirect('/tier1-v3/actions-landtype?another-option=')}
  if ( (anotherOption == "yes") & (sort == "payment") ){res.redirect('/tier1-v3/actions-payment?another-option=')}
  if ( (anotherOption == "yes") & (sort == "region") ){res.redirect('/tier1-v3/actions-region?another-option=')}
  if (anotherOption == "no"){res.redirect('/tier1-v3/calculation?another-option=')}
  else {res.redirect('/tier1-v3/actions-answers-validation')}
})

router.post('/actions-button', function (req, res) {

  var sort = req.session.data['sort']

  if (sort == "env"){res.redirect('/tier1-v3/actions-environmental?another-option=')}
  if (sort == "farm"){res.redirect('/tier1-v3/actions-farmtype?another-option=')}
  if (sort == "land"){res.redirect('/tier1-v3/actions-landtype?another-option=')}
  if (sort == "payment"){res.redirect('/tier1-v3/actions-payment?another-option=')}
  if (sort == "region"){res.redirect('/tier1-v3/actions-region?another-option=')}

})

// Step-by-step
router.post('/application-complete', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v3/completing-your-application')}
  if (deadWood != 0){res.redirect('/tier1-v3/completing-your-application')}
  if (agroForestry != 0){res.redirect('/tier1-v3/completing-your-application')}
  if (treeBelts != 0){res.redirect('/tier1-v3/completing-your-application')}
  else {res.redirect('/tier1-v3/agreement-confirmation')}
})

module.exports = router
