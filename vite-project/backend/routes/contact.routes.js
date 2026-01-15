const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { sendContactEmail } = require('../controllers/contact.controller');
const { validateContactForm } = require('../middleware/validation.middleware');

// Limiter les requêtes pour éviter le spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requêtes max par IP
  message: {
    success: false,
    message: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Route pour envoyer le formulaire
router.post('/send', contactLimiter, validateContactForm, sendContactEmail);

// Route de test
router.get('/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API de contact fonctionnelle',
    endpoints: {
      send: 'POST /api/contact/send',
      test: 'GET /api/contact/test'
    }
  });
});

module.exports = router;