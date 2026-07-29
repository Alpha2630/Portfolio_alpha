import { Code2, Cpu, Globe, Shield, Users, Zap } from "lucide-react"

const About = () => {
  return (
    <section id="apropos" className="relative py-16 md:py-24 px-4 md:px-8 bg-bg-primary overflow-hidden">

      {/* ===== ANIMATION CIRCUIT BOARD (NOUVELLE) ===== */}

      {/* Lignes horizontales qui se tracent (effet PCB) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-royal/40 to-transparent"
            style={{
              top: `${15 + i * 20}%`,
              left: '-10%',
              width: '120%',
              animation: `trace-line ${6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Lignes verticales */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent"
            style={{
              left: `${20 + i * 25}%`,
              top: '-10%',
              height: '120%',
              animation: `trace-vertical ${7 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`
            }}
          />
        ))}
      </div>

      {/* Points lumineux qui voyagent sur les pistes (effet "data flow") */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-royal-light shadow-lg shadow-royal/30 animate-flow-dot"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Effet de "trace" qui apparaît/disparaît (flash) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-gold/10 animate-flash-ring" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-royal/10 animate-flash-ring-delayed" />
      </div>

      {/* Effets de fond existants (gardés) */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      {/* ===== CONTENU PRINCIPAL (INCHANGÉ) ===== */}

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Discover my journey, my skills, and my vision for the future of technology
          </p>
        </div>

        {/* Main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and experience */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              My <span className="text-gold">Journey</span>
            </h3>
            
            <p className="text-text-secondary mb-6 leading-relaxed">
              Currently in my second year of Computer Science, Digital Transformation track, 
              I'm building strong foundations for my tech career. Passionate about 
              web development, I dream of one day exploring the fascinating world 
              of robotics.
            </p>
            
            <p className="text-text-secondary mb-8 leading-relaxed">
              My curiosity and thirst for learning push me to exceed my limits every day. 
              While my current skills are rooted in web development, my vision extends 
              far beyond: I want to understand how digital technology can bring matter 
              to life through robotics.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Zap className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-3xl font-bold text-text-primary">10+</span>
                </div>
                <p className="text-text-secondary">Web projects completed</p>
              </div>
              
              <div className="bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Cpu className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-3xl font-bold text-text-primary">∞</span>
                </div>
                <p className="text-text-secondary">Passion for robotics</p>
              </div>
            </div>

            {/* Button */}
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-bg-primary font-semibold rounded-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Let's work together
              <Zap className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Skills (INCHANGÉ) */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              My <span className="text-gold">Skills</span>
            </h3>

            {/* Skill bars */}
            <div className="space-y-6">
              {[
                { skill: "Frontend Development", level: 75, icon: Code2, color: "#61DAFB" },
                { skill: "JavaScript & React", level: 70, icon: Globe, color: "#F7DF1E" },
                { skill: "HTML & CSS", level: 80, icon: Code2, color: "#E34F26" },
                { skill: "Robotics (Beginner)", level: 20, icon: Cpu, color: "#00D4FF" },
                { skill: "Digital Transformation", level: 65, icon: Users, color: "#D4AF37" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-royal/20 rounded-lg border border-gold/10 group-hover:border-gold/30 transition-all">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <span className="font-medium text-text-primary">{item.skill}</span>
                      </div>
                      <span className="text-sm font-bold text-gold-light">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-royal/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ 
                          width: `${item.level}%`,
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                          boxShadow: `0 0 20px ${item.color}33`
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-12">
            My <span className="text-gold">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Insatiable Curiosity",
                description: "I learn every day to become the developer I aspire to be tomorrow."
              },
              {
                icon: Shield,
                title: "Continuous Learning",
                description: "From my studies to personal projects, every step is an opportunity to grow."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "I believe in the power of teamwork to turn ideas into reality."
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index} 
                  className="bg-bg-card p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10 group"
                >
                  <div className="w-16 h-16 bg-royal/20 rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/50 transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-4">{value.title}</h4>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vision section */}
        <div className="mt-20 bg-gradient-to-br from-royal/20 to-gold/5 p-8 md:p-12 rounded-2xl border border-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-transparent to-gold/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                My Vision for the <span className="text-gold">Future</span>
              </h3>
              <p className="text-text-secondary mb-4">
                As a digital transformation student, I'm preparing to be a driver of change. 
                My goal: master web development today so that tomorrow, I can explore 
                the perfect fusion between digital and robotics.
              </p>
              <p className="text-text-secondary">
                I'm convinced that the future belongs to those who can build bridges 
                between virtual and physical worlds. This dual passion will guide 
                my professional journey in the years to come.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-royal/30 to-gold/20 rounded-full flex items-center justify-center border border-gold/30 shadow-2xl shadow-royal/20 animate-pulse-gold">
                  <Cpu className="w-24 h-24 text-gold" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-royal/30 rounded-full -z-10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-full -z-10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About