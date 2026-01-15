const transporter = require('../config/mail.config');

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Email pour vous (le propriétaire)
    const mailOptionsToYou = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `📨 Nouveau contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #7D26CD;">📨 Nouveau message de contact</h2>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>👤 Nom:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📝 Sujet:</strong> ${subject}</p>
          </div>
          <div style="background: #f0f7ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 2px dashed #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            📅 Date: ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `
    };
    
    // Email de confirmation pour le visiteur
    const mailOptionsToVisitor = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `✅ Confirmation de votre message - AlphaTech Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #7D26CD; text-align: center;">✅ Message bien reçu !</h2>
          
          <div style="text-align: center; margin: 20px 0;">
            <div style="background: #7D26CD; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; margin: 0 auto; font-size: 24px;">
              ✓
            </div>
          </div>
          
          <p>Bonjour <strong>${name}</strong>,</p>
          
          <p>Merci de m'avoir contacté ! J'ai bien reçu votre message concernant :</p>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p><strong>${subject}</strong></p>
          </div>
          
          <p>Je vous répondrai dans les plus brefs délais.</p>
          
          <div style="background: #f0f7ff; padding: 15px; border-radius: 5px; margin: 15px 0;">
            <h4 style="margin-top: 0;">📞 Contact rapide :</h4>
            <p>Email : <strong>hei.alpha.7@gmail.com</strong></p>
            <p>Téléphone : <strong>+261 37 48 137 25</strong> (WhatsApp disponible)</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px; text-align: center;">
            Ceci est un email automatique. Veuillez ne pas y répondre.<br>
            © ${new Date().getFullYear()} AlphaTech Portfolio
          </p>
        </div>
      `
    };
    
    // Envoyer les deux emails
    await transporter.sendMail(mailOptionsToYou);
    await transporter.sendMail(mailOptionsToVisitor);
    
    res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès ! Vous recevrez une confirmation par email.'
    });
    
  } catch (error) {
    console.error('Erreur envoi email:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    });
  }
};

module.exports = { sendContactEmail };