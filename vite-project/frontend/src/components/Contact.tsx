import { useState } from "react"
import axios from "axios"
import { apiEndpoints } from '../config/api'
import { 
  Mail, Phone, MapPin, MessageSquare, Send, 
  CheckCircle, XCircle, Loader2, ExternalLink,
  Github, Linkedin, Twitter
} from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    
    try {
      console.log("Sending to backend...")
      
      const response = await axios.post(apiEndpoints.contact.send, formData, {
        timeout: 15000, 
      })
      
      console.log("Backend response:", response.data)

      if (response.data.success) {
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
        
        setTimeout(() => {
          setSuccess(false)
        }, 8000)
      } else {
        setError(response.data.message || "Unknown error")
      }
      
    } catch (err: any) {
      console.error("Full error:", err)
      
      if (err.response) {
        setError(err.response.data?.message || `Server error (${err.response.status})`)
      } else if (err.request) {
        setError("Server is not responding. Please check that the backend is running")
      } else {
        setError("Error: " + err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError("")
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
      {/* Fond avec effet Iron Man */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Contact <span className="text-gold">Me</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Let's talk about your project. I respond quickly and seriously.
          </p>
        </div>

        {/* Status messages */}
        {success && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl animate-slide-in">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-emerald-400">
                  Message sent successfully!
                </h3>
                <p className="text-text-secondary">
                  You'll receive a confirmation email. I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl animate-slide-in">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-400">
                  Sending error
                </h3>
                <p className="text-text-secondary">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <MessageSquare className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">
                My <span className="text-gold">Contact Details</span>
              </h2>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="group bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Professional Email</h3>
                    <a 
                      href="mailto:hei.alpha.7@gmail.com" 
                      className="text-gold-light hover:text-gold transition-colors break-all"
                    >
                      hei.alpha.7@gmail.com
                    </a>
                    <p className="text-text-secondary text-sm mt-1">
                      Guaranteed response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Phone / WhatsApp</h3>
                    <a 
                      href="tel:+261374813725" 
                      className="text-gold-light hover:text-gold transition-colors"
                    >
                      +261 37 48 137 25
                    </a>
                    <div className="flex gap-2 mt-2">
                      <span className="px-3 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/20">
                        WhatsApp
                      </span>
                      <span className="px-3 py-0.5 text-xs bg-royal/20 text-royal-light rounded-full border border-royal/20">
                        Voice call
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">Location</h3>
                    <p className="text-text-primary">Madagascar</p>
                    <p className="text-text-secondary text-sm mt-1">
                      Specialized in international remote collaboration
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-royal/20 to-gold/5 p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                <h3 className="font-bold text-text-primary mb-3">Quick Contact</h3>
                <p className="text-text-secondary text-sm mb-4">
                  For a faster response, reach out to me directly on WhatsApp:
                </p>
                <a 
                  href="https://wa.me/261374813725" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <Send className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary">
                Send Me a <span className="text-gold">Message</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-bg-card p-8 rounded-xl border border-gold/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Your name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 bg-bg-primary border border-gold/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                    placeholder="Your full name"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Your email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bg-primary border border-gold/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                    placeholder="your@email.com"
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className="w-full px-4 py-3 bg-bg-primary border border-gold/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none transition-colors"
                  placeholder="Subject of your message"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Your message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={6}
                  className="w-full px-4 py-3 bg-bg-primary border border-gold/10 rounded-lg text-text-primary placeholder-text-secondary/50 focus:border-gold/50 focus:ring-1 focus:ring-gold/20 outline-none resize-none transition-colors"
                  placeholder="Describe your project, needs, or ask your questions..."
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-gradient-to-r from-gold to-gold-light text-bg-primary font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-center text-sm text-text-secondary/50 pt-4 border-t border-gold/10">
                You'll receive a confirmation email. Your information is secure.
              </p>
            </form>
          </div>
        </div>

        {/* Social section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Other Ways to <span className="text-gold">Reach Me</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:hei.alpha.7@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-royal/20 border border-gold/20 hover:border-gold/50 rounded-lg text-text-secondary hover:text-gold transition-all duration-300"
            >
              <Mail className="w-5 h-5 group-hover:text-gold transition-colors" />
              Send an Email
            </a>
            
            <a 
              href="https://wa.me/261374813725"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 rounded-lg text-text-secondary hover:text-emerald-400 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
              WhatsApp
            </a>

            <a 
              href="https://github.com/Alpha2630"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-royal/20 border border-gold/20 hover:border-gold/50 rounded-lg text-text-secondary hover:text-gold transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:text-gold transition-colors" />
              GitHub
            </a>

            <a 
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-royal/20 border border-gold/20 hover:border-gold/50 rounded-lg text-text-secondary hover:text-gold transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:text-gold transition-colors" />
              LinkedIn
            </a>
          </div>
          
          <p className="mt-8 text-text-secondary max-w-2xl mx-auto">
            I'm serious about my work and I respond quickly to all professional inquiries.
            Feel free to reach out to discuss your web development projects or collaboration opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact