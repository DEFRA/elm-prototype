const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/dashboard', function (req, res) {
  res.locals.goods = req.session.data['public_goods']
  res.render('dashboard')
})

// Search goods from default session data file and render view or no results view
router.get('/manage-activity', (req, res) => {
  const good = req.session.data['public_goods'].filter(good => good.id === req.session.data['id'])

  res.locals.good = good[0]

  if (good == false) {
    res.render('no-match')
  } else {
    res.render('manage-activity')
  }
})

// Go to remove good page if they choose that option
router.get('/v1/new-agreement', function (req, res) {
  if (req.session.data['what-to-do'] == "remove-good") {
    res.redirect('/v1/remove-good')
  } else {
    res.render('v1/new-agreement')
  }
})
