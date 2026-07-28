import { 
  GraduationCap, Code2, Globe, Users, Calendar, 
  Target, Rocket, Brain, Sparkles
} from "lucide-react"
import { FaJava } from 'react-icons/fa'
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiVite, SiMongodb, SiExpress, SiNodedotjs,
  SiGit, SiGithub, SiDocker, SiVercel,
  SiHtml5, SiCss,  // ← SiCss au lieu de SiCss3
  SiPython,        // ← retirer SiJava
  SiBootstrap, SiPostgresql
} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experiences" className="py-16 md:py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
      {/* Fond avec effet Iron Man */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gold">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Education, language skills, and professional goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Academic background */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <GraduationCap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Academic <span className="text-gold">Background</span>
              </h3>
            </div>

            {/* Education timeline */}
            <div className="relative pl-8 border-l-2 border-gold/30 space-y-8">
              {/* Current step */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-gold rounded-full shadow-lg shadow-gold/30"></div>
                <div className="bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-sm font-semibold text-gold">2026 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">Bachelor's in Computer Science (L2)</h4>
                  <p className="text-text-secondary mb-3">
                    Digital Transformation track. Building strong foundations in web development while nurturing a passion for robotics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-royal/20 text-royal-light text-sm rounded-full border border-royal/20">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">
                      Programming
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">
                      Digital Transformation
                    </span>
                  </div>
                </div>
              </div>

              {/* High school diploma */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-text-secondary/30 rounded-full"></div>
                <div className="bg-bg-card p-6 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-text-secondary/50" />
                    <span className="text-sm font-semibold text-text-secondary/50">2024</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">High School Diploma (Scientific)</h4>
                  <p className="text-text-secondary">
                    Obtained scientific high school diploma, solid foundation in mathematics and physics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Skills and languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Language <span className="text-gold">Skills</span>
              </h3>
            </div>

            {/* Languages */}
            <div className="space-y-6 mb-10">
              {[
                { language: "Malagasy", level: "Mother tongue", levelText: "Native", color: "from-green-500 to-emerald-400" },
                { language: "French", level: "Good command", levelText: "Native", color: "from-blue-500 to-blue-400" },
                { language: "English", level: "Intermediate", levelText: "B1/B2", color: "from-gold to-gold-light" },
                { language: "German", level: "Beginner", levelText: "A1/A2", color: "from-orange-500 to-orange-400" }
              ].map((lang, index) => (
                <div key={index} className="bg-bg-card p-5 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg text-text-primary">{lang.language}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-royal/20 text-text-secondary border border-gold/10">
                      {lang.levelText}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">{lang.level}</p>
                  <div className="h-1.5 bg-royal/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: lang.language === "Malagasy" || lang.language === "French" ? "100%" :
                               lang.language === "English" ? "60%" : "30%" 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

           
            <div className="bg-gradient-to-br from-royal/20 to-gold/5 p-6 rounded-xl border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-gold" />
                <h4 className="text-xl font-bold text-text-primary">Professional Goals</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Master web development today to explore the exciting intersection between digital 
                and robotics tomorrow. Every project brings me closer to this vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-text-secondary">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Excel in web development (my current expertise)</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Rocket className="w-4 h-4 text-gold" />
                  <span>Explore robotics and automation as a future path</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Brain className="w-4 h-4 text-gold" />
                  <span>Build projects bridging digital and physical worlds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-royal to-royal/50 rounded-full flex items-center justify-center border border-gold/30 shadow-lg shadow-royal/20">
              <Code2 className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              Technical <span className="text-gold">Skills</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
              { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
              { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
              { name: "Vite", icon: SiVite, color: "#646CFF" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "Express", icon: SiExpress, color: "#FFFFFF" },
              { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
              { name: "Git", icon: SiGit, color: "#F05032" },
              { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
              { name: "Docker", icon: SiDocker, color: "#2496ED" },
              { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
              { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
              { name: "CSS3", icon: SiCss, color: "#1572B6" },
              { name: "Python", icon: SiPython, color: "#3776AB" },
              { name: "Java", icon: FaJava, color: "#007396" },
              { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
              { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            ].map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="group relative aspect-square"
                >
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-royal/20 to-bg-card border border-royal/30 p-4 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 hover:border-gold/40 hover:shadow-2xl hover:shadow-royal/20">
                    
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-royal via-gold/30 to-royal opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/5 via-transparent to-royal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative transition-transform duration-1000 group-hover:rotate-180">
                      <Icon 
                        className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-500"
                        style={{ color: skill.color }}
                      />
                    </div>
                    
                    <div className="relative mt-3 text-center">
                      <p className="text-xs sm:text-sm font-medium transition-all duration-500 text-text-secondary group-hover:text-gold-light">
                        {skill.name}
                      </p>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 h-0.5 bg-royal/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{
                          width: '30%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                          boxShadow: `0 0 20px ${skill.color}44`
                        }}
                      />
                    </div>

                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold/30 transition-all duration-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-gold" />
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              My <span className="text-gold">Approach</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Active Learning",
                description: "I build my skills through hands-on projects and personal research, growing as a developer every day."
              },
              {
                icon: Rocket,
                title: "Adaptability",
                description: "From web development to robotics, I embrace new technologies with enthusiasm and dedication."
              },
              {
                icon: Target,
                title: "Long-Term Vision",
                description: "My current focus on web development is a stepping stone toward my dream: merging digital with robotics."
              }
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index} 
                  className="bg-bg-card p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10 group"
                >
                  <div className="w-14 h-14 bg-royal/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
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
      </div>
    </section>
  )
}

export default Experience