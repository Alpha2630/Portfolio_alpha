import { useState } from "react";
import axios from "axios";
import { apiEndpoints } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      console.log("Sending to backend...");
      
      const response = await axios.post(apiEndpoints.contact.send, formData, {
        timeout: 15000, 
      });
      
      console.log("Backend response:", response.data);

      if (response.data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        setTimeout(() => {
          setSuccess(false);
        }, 8000);
      } else {
        setError(response.data.message || "Unknown error");
      }
      
    } catch (err: any) {
      console.error("Full error:", err);
      
      if (err.response) {
        setError(err.response.data?.message || `Server error (${err.response.status})`);
      } else if (err.request) {
        setError("Server is not responding. Please check that the backend is running");
      } else {
        setError("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's talk about your project. I respond quickly and seriously.
          </p>
        </div>

        {/* Status messages */}
        {success && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 dark:text-green-300 text-xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-green-800 dark:text-green-200">
                  Message sent successfully!
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  You'll receive a confirmation email. I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mr-4">
                <span className="text-red-600 dark:text-red-300 text-xl">✕</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-800 dark:text-red-200">
                  Sending error
                </h3>
                <p className="text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              My Contact Details
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Professional Email</h3>
                <a 
                  href="mailto:hei.alpha.7@gmail.com" 
                  className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors break-all"
                >
                  hei.alpha.7@gmail.com
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Guaranteed response within 24 hours
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Phone / WhatsApp</h3>
                <a 
                  href="tel:+261374813725" 
                  className="text-lg text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  +261 37 48 137 25
                </a>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-sm rounded-full">
                    WhatsApp available
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                    Voice call
                  </span>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">Location</h3>
                <p className="text-lg text-gray-800 dark:text-white">Madagascar</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  Specialized in international remote collaboration
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-white">Quick Contact</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  For a faster response, reach out to me directly on WhatsApp:
                </p>
                <a 
                  href="https://wa.me/261374813725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Your full name"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Your email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="your@email.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Subject of your message"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Your message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-colors"
                  placeholder="Describe your project, needs, or ask your questions..."
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-lg rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                You'll receive a confirmation email. Your information is secure.
              </p>
            </form>
          </div>
        </div>

        {/* Social section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
            Other Ways to Reach Me
          </h3>
          
          <div className="flex justify-center gap-8">
            <a 
              href="mailto:hei.alpha.7@gmail.com"
              className="px-8 py-4 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium rounded-lg transition-colors border border-blue-200 dark:border-blue-800"
            >
              Send an Email
            </a>
            
            <a 
              href="https://wa.me/261374813725"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 font-medium rounded-lg transition-colors border border-green-200 dark:border-green-800"
            >
              WhatsApp
            </a>
          </div>
          
          <p className="mt-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm serious about my work and I respond quickly to all professional inquiries.
            Feel free to reach out to discuss your web development projects or collaboration opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;