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

router.get('/tier1/*', function(req, res, next){
  res.locals['serviceName'] = 'Apply for ELM Tier 1'

  next()
})

// Tier 1

// Add an additional farm type
router.post('/another-type-answer', function (req, res) {

  var anotherType = req.session.data['another-type']

  if (anotherType == "yes"){
    res.redirect('/tier1/farm-type-2')
  }
  else {
    res.redirect('/tier1/farm-type-answers')
  }

})

// Add an action
router.post('/actions-answer', function (req, res) {

  var action = req.session.data['actions']

  if (action == "fencing"){
    res.redirect('/tier1/fencing')
  }
  else {
    res.redirect('/tier1/cover-crops')
  }
})

// Add an additional action
router.post('/another-action-answer', function (req, res) {

  var anotherType = req.session.data['another-action']

  if (anotherType == "yes"){
    res.redirect('/tier1/actions')
  }
  else {
    res.redirect('/tier1/actions-answers')
  }

})

// Evidence required

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
