const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Set service name based on sub folders for different prototypes
router.get('/land-manager/*', function(req, res, next){
  res.locals['serviceName'] = 'Make or update an ELM claim'

  next()
})

router.get('/adviser/*', function(req, res, next){
  res.locals['serviceName'] = 'Make or update an ELM claim'

  next()
})

router.get('/tier1-v1/*', function(req, res, next){
  res.locals['serviceName'] = 'Apply for Environmental Land Management'

  next()
})

// Tier 1 version 2

// Select an action
router.post('/actions-answer', function (req, res) {

  var action = req.session.data['what-action']

  if (action == "agroforestry"){res.redirect('/tier1-v2/agroforestry')}
  if (action == "bare-soil"){res.redirect('/tier1-v2/bare-soil')}
  if (action == "bog-grazing"){res.redirect('/tier1-v2/bog-grazing')}
  if (action == "canopy-cover"){res.redirect('/tier1-v2/canopy-cover')}
  if (action == "cover-crops"){res.redirect('/tier1-v2/cover-crops')}
  if (action == "create-grassland"){res.redirect('/tier1-v2/create-grassland')}
  if (action == "deadwood"){res.redirect('/tier1-v2/deadwood')}
  if (action == "drinking-water"){res.redirect('/tier1-v2/drinking-water')}
  if (action == "fencing"){res.redirect('/tier1-v2/fencing')}
  if (action == "fertilisers"){res.redirect('/tier1-v2/fertilisers')}
  if (action == "fertiliser-spreading"){res.redirect('/tier1-v2/fertiliser-spreading')}
  if (action == "flower-habitat"){res.redirect('/tier1-v2/flower-habitat')}
  if (action == "grass-strips"){res.redirect('/tier1-v2/grass-strips')}
  if (action == "manure"){res.redirect('/tier1-v2/manure')}
  if (action == "no-till"){res.redirect('/tier1-v2/no-till')}
  if (action == "nutrients"){res.redirect('/tier1-v2/nutrients')}
  if (action == "tree-belts"){res.redirect('/tier1-v2/tree-belts')}
  else {res.redirect('/tier1-v2/wind-erosion')}
})

// Arrange a site visit
router.post('/site-visit-required', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v2/site-visit')}
  if (deadWood != 0){res.redirect('/tier1-v2/site-visit')}
  if (agroForestry != 0){res.redirect('/tier1-v2/site-visit')}
  if (treeBelts != 0){res.redirect('/tier1-v2/site-visit')}
  else {res.redirect('/tier1-v2/calculation')}
})

// Step-by-step
router.post('/application-complete', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (deadWood != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (agroForestry != 0){res.redirect('/tier1-v2/completing-your-application')}
  if (treeBelts != 0){res.redirect('/tier1-v2/completing-your-application')}
  else {res.redirect('/tier1-v2/agreement-confirmation')}
})

// Tier 1 version 1

// Select an action
router.post('/actions-answer', function (req, res) {

  var action = req.session.data['what-action']

  if (action == "agroforestry"){res.redirect('/tier1-v1/agroforestry')}
  if (action == "bare-soil"){res.redirect('/tier1-v1/bare-soil')}
  if (action == "bog-grazing"){res.redirect('/tier1-v1/bog-grazing')}
  if (action == "canopy-cover"){res.redirect('/tier1-v1/canopy-cover')}
  if (action == "cover-crops"){res.redirect('/tier1-v1/cover-crops')}
  if (action == "create-grassland"){res.redirect('/tier1-v1/create-grassland')}
  if (action == "deadwood"){res.redirect('/tier1-v1/deadwood')}
  if (action == "drinking-water"){res.redirect('/tier1-v1/drinking-water')}
  if (action == "fencing"){res.redirect('/tier1-v1/fencing')}
  if (action == "fertilisers"){res.redirect('/tier1-v1/fertilisers')}
  if (action == "fertiliser-spreading"){res.redirect('/tier1-v1/fertiliser-spreading')}
  if (action == "flower-habitat"){res.redirect('/tier1-v1/flower-habitat')}
  if (action == "grass-strips"){res.redirect('/tier1-v1/grass-strips')}
  if (action == "manure"){res.redirect('/tier1-v1/manure')}
  if (action == "no-till"){res.redirect('/tier1-v1/no-till')}
  if (action == "nutrients"){res.redirect('/tier1-v1/nutrients')}
  if (action == "tree-belts"){res.redirect('/tier1-v1/tree-belts')}
  else {res.redirect('/tier1-v1/wind-erosion')}
})

// Arrange a site visit
router.post('/site-visit-required', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v1/site-visit')}
  if (deadWood != 0){res.redirect('/tier1-v1/site-visit')}
  if (agroForestry != 0){res.redirect('/tier1-v1/site-visit')}
  if (treeBelts != 0){res.redirect('/tier1-v1/site-visit')}
  else {res.redirect('/tier1-v1/calculation')}
})

// Step-by-step
router.post('/application-complete', function (req, res) {

  var canopyCover = req.session.data['canopy-cover']['amount']
  var deadWood = req.session.data['deadwood']['amount']
  var agroForestry = req.session.data['agroforestry']['amount']
  var treeBelts = req.session.data['tree-belts']['amount']

  if (canopyCover != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (deadWood != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (agroForestry != 0){res.redirect('/tier1-v1/completing-your-application')}
  if (treeBelts != 0){res.redirect('/tier1-v1/completing-your-application')}
  else {res.redirect('/tier1-v1/agreement-confirmation')}
})

// Land managers

router.get('/land-manager/accountcheck', function (req, res) {
  const option = req.session.data['account-check']

  if (option == "register") {
    res.redirect('/land-manager/register')
  } else {
    res.redirect('/land-manager/sign-in')
  }
})

// Search goods from default session data file and render view or no results view
router.get('/land-manager/manage-activity', (req, res) => {
  const good = req.session.data['goods'].filter(good => good.id === req.session.data['id'])
  res.locals.good = good[0]
  res.render('land-manager/manage-activity')
})

module.exports = router
