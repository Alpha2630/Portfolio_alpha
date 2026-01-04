import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Créer le lien mailto avec les données du formulaire
    const mailtoLink = `mailto:hei.alpha.7@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact Portfolio")}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contactez-<span className="text-accent">moi</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discutons de vos projets robotiques ou web. Je suis disponible pour collaborer !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Informations de contact */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Mes <span className="text-accent">Coordonnées</span>
            </h3>

            {/* Cartes d'informations */}
            <div className="space-y-6 mb-10">
              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a 
                    href="mailto:hei.alpha.7@gmail.com" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors break-all"
                  >
                    hei.alpha.7@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Réponse sous 24h</p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Téléphone</h4>
                  <a 
                    href="tel:+261374813725" 
                    className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
                  >
                    +261 37 48 137 25
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Disponible sur WhatsApp</p>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Localisation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Madagascar</p>
                  <p className="text-sm text-gray-500 mt-2">Ouvert aux collaborations à distance</p>
                </div>
              </div>

              {/* Disponibilité */}
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Disponibilité</h4>
                  <p className="text-gray-600 dark:text-gray-300">Flexible pour les projets</p>
                  <p className="text-sm text-gray-500 mt-2">Étudiant en L2 - Disponible les soirs et week-ends</p>
                </div>
              </div>
            </div>

            {/* QR Code ou note */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-3">📱 Contact rapide</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Préférez-vous WhatsApp ? Envoyez-moi un message directement au :
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center">
                <code className="font-mono text-lg font-bold">+261 37 48 137 25</code>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire de contact */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Envoyez-moi un <span className="text-accent">Message</span>
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Votre nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Votre email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Votre message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet, vos idées ou vos questions..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-full flex items-center justify-center gap-3 py-4 text-lg"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                * Le message s'ouvrira dans votre client email
              </p>
            </form>
          </div>
        </div>

        {/* Section réseaux sociaux optionnelle */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Ou retrouvez-moi sur</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:hei.alpha.7@gmail.com"
              className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all"
              title="Envoyer un email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/261374813725"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
              title="WhatsApp"
            >
              <Phone className="w-6 h-6" />
            </a>
            {/* Ajoutez vos autres réseaux si vous en avez */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;