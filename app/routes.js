const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



// Set service name based on sub folders for different prototypes
router.get('/land-manager/*', function(req, res, next){
  res.locals['serviceName'] = 'Make or update an ELM claim'

  next()
})

router.get('/land-manager/accountcheck', function (req, res) {
  const option = req.session.data['account-check']

  if (option == "register") {
    res.redirect('/land-manager/register')
  } else {
    res.redirect('/land-manager/sign-in')
  }
})



// Search goods from default session data file and render view or no results view
// router.get('/land-manager/manage-activity', (req, res) => {
//   const good = req.session.data['public_goods'].filter(good => good.id === req.session.data['id'])
//   res.locals.good = good[0]
//   res.render('v1/manage-activity')
// })





module.exports = router
