const express = require('express')
const router = express.Router()
const swal = require('sweetalert2')

//@desc Landing/ landing page
// @route Get /
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('index', {
      name: req.user.firstName,
    })
  } else {
    res.render('index')
  }
})

// @desc About
// @route Get /
router.get('/about', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('about', {
      name: req.user.firstName,
    })
  } else {
    res.render('about')
  }
})
// @desc Products
// @route Get /
router.get('/product', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('product', {
      name: req.user.firstName,
    })
  } else {
    res.render('product')
  }
})
// @desc About
// @route Get /
router.get('/why', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('why', {
      name: req.user.firstName,
    })
  } else {
    res.render('why')
  }
})
// @desc About
// @route Get /
router.get('/testimonial', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('testimonial', {
      name: req.user.firstName,
    })
  } else {
    res.render('testimonial')
  }
})
// @desc About
// @route Get /
router.get('/signin', (req, res) => {
  res.render('signin', {
    layout: 'log',
  })
})

// @desc About
// @route Get /
router.get('/signup', (req, res) => {
  res.render('signup', {
  layout: 'log',
})
})
module.exports = router