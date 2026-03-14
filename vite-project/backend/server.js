const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
const allowedOrigins = [
  'http://localhost:5173',
  'https://portfolio-alphatech.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
// Configurer le transporteur email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true pour 465, false pour autres ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});


app.use(express.json());
app.get('/api/test', (req, res) => {
  res.json({ success: true, message: 'API fonctionnelle' });
});
// Vérifier la connexion email
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Erreur configuration email:', error);
  } else {
    console.log('✅ Serveur email prêt à envoyer des messages');
  }
});

// Route de test
app.get('/test', (req, res) => {
  res.json({
    success: true,
    message: '✅ API backend fonctionnelle avec email',
    email: process.env.EMAIL_USER,
    timestamp: new Date().toISOString()
  });
});

// Route d'envoi d'email RÉEL
app.post('/send', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    console.log('📧 Tentative d\'envoi email de:', name, email);

    // 1. Email pour vous (Alpha)
    const mailOptionsToYou = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER, // Votre email
      subject: `📨 Nouveau contact portfolio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
          <div style="background: white; color: #333; padding: 30px; border-radius: 8px;">
            <h2 style="color: #667eea; margin-top: 0;">Nouveau message de contact</h2>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Sujet:</strong> ${subject}</p>
            </div>
            
            <div style="background: #eef2ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <h3 style="color: #333;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 2px dashed #ddd; margin: 20px 0;">
            
            <p style="color: #666; font-size: 12px;">
              Date: ${new Date().toLocaleString('fr-FR')}<br>
              IP: ${req.ip}
            </p>
          </div>
        </div>
      `
    };

    // 2. Email de confirmation pour le visiteur
    const mailOptionsToVisitor = {
      from: process.env.EMAIL_FROM,
      to: email, // Email du visiteur
      subject: `✅ Confirmation de votre message - AlphaTech Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: white; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">AlphaTech Portfolio</h1>
            <p style="opacity: 0.8; margin: 5px 0 0 0;">Développeur Full Stack</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="display: inline-block; width: 60px; height: 60px; background: #4CAF50; color: white; border-radius: 50%; line-height: 60px; font-size: 30px; margin-bottom: 15px;">
                ✓
              </div>
              <h2 style="color: #333; margin: 10px 0;">Message bien reçu !</h2>
            </div>
            
            <p>Bonjour <strong>${name}</strong>,</p>
            
            <p>Merci de m'avoir contacté via mon portfolio. J'ai bien reçu votre message concernant :</p>
            
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #667eea;">
              <p style="margin: 0; font-weight: bold; color: #333;">${subject}</p>
            </div>
            
            <p>Je prends connaissance de votre message et vous répondrai dans les plus brefs délais.</p>
            
            <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #d0d7ff;">
              <h3 style="color: #333; margin-top: 0;">Mes coordonnées :</h3>
              <p><strong>Email :</strong> hei.alpha.7@gmail.com</p>
              <p><strong>Téléphone :</strong> +261 37 48 137 25 (WhatsApp disponible)</p>
              <p><strong>Localisation :</strong> Madagascar</p>
            </div>
            
            <p>En attendant, vous pouvez :</p>
            <ul style="color: #666;">
              <li>Consulter mes projets sur mon portfolio</li>
              <li>Me contacter sur WhatsApp pour une réponse plus rapide</li>
              <li>Explorer mes compétences en développement web et robotique</li>
            </ul>
            
            <p style="margin-top: 30px;">Cordialement,<br>
            <strong>Alpha</strong><br>
            Développeur Full Stack</p>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #f8f9fa; border-top: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 12px; margin: 5px 0;">
              Ceci est un email automatique. Veuillez ne pas y répondre directement.<br>
              © ${new Date().getFullYear()} AlphaTech Portfolio. Tous droits réservés.
            </p>
          </div>
        </div>
      `
    };

    // Envoyer les deux emails
    const info1 = await transporter.sendMail(mailOptionsToYou);
    console.log('✅ Email à Alpha envoyé:', info1.messageId);
    
    const info2 = await transporter.sendMail(mailOptionsToVisitor);
    console.log('✅ Email de confirmation envoyé:', info2.messageId);

    res.json({
      success: true,
      message: 'Message envoyé avec succès ! Vous recevrez une confirmation par email.',
      messageId: info1.messageId
    });

  } catch (error) {
    console.error('❌ Erreur envoi email:', error);
    
    let errorMessage = 'Erreur lors de l\'envoi du message.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Erreur d\'authentification email. Vérifiez la configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Impossible de se connecter au serveur email.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Route d'accueil
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Backend Portfolio AlphaTech - Email fonctionnel',
    version: '1.0.0',
    emailConfigured: !!process.env.EMAIL_USER,
    endpoints: [
      'GET  /test - Test API',
      'POST /send - Envoyer email réel',
      'GET  / - Cette page'
    ]
  });
});

// Middleware de gestion d'erreurs
app.use((err, req, res, next) => {
  console.error('🔥 Erreur serveur:', err);
  res.status(500).json({
    success: false,
    message: 'Erreur interne du serveur'
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`📧 Email configuré pour: ${process.env.EMAIL_USER}`);
  console.log(`🌍 CORS autorisé pour: ${process.env.CORS_ORIGIN}`);
});
module.exports = app;