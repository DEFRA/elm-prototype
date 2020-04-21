const express = require('express')
const router = express.Router()

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
  res.locals.currentURL = req.originalUrl; //current screen
  res.locals.prevURL = req.get('Referrer'); // previous screen
console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
  next();
});

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

router.get('/tier1-v2/*', function(req, res, next){
  res.locals['serviceName'] = 'Apply for ELM'

  next()
})

// Start folder specific routes
router.use('/tier1-v1', require('./views/tier1-v1/_routes'));
router.use('/tier1-v2', require('./views/tier1-v2/_routes'));
router.use('/tier1-v3', require('./views/tier1-v3/_routes'));

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
