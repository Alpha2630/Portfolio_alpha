const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  
  const errors = [];
  
  // Validation du nom
  if (!name || name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }
  
  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Email invalide');
  }
  
  // Validation du sujet
  if (!subject || subject.trim().length < 3) {
    errors.push('Le sujet doit contenir au moins 3 caractères');
  }
  
  // Validation du message
  if (!message || message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }
  
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }
  
  next();
};

module.exports = { validateContactForm };