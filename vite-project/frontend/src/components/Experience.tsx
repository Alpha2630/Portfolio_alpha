import { GraduationCap, Code2, Globe, Users, Calendar, BookOpen } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiences" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-accent">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Education, language skills, and professional goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Academic background */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Academic <span className="text-accent">Background</span></h3>
            </div>

            {/* Education timeline */}
            <div className="relative pl-8 border-l-2 border-accent space-y-8">
              {/* Current step */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-accent rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">2026 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Bachelor's in Computer Science (L2)</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Digital Transformation track. Building strong foundations in web development while nurturing a passion for robotics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                      Programming
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      Digital Transformation
                    </span>
                  </div>
                </div>
              </div>

              {/* High school diploma */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-500">2024</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">High School Diploma (Scientific)</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obtained scientific high school diploma, solid foundation in mathematics and physics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Skills and languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Language <span className="text-primary">Skills</span></h3>
            </div>

            {/* Languages */}
            <div className="space-y-6 mb-10">
              {[
                { language: "Malagasy", level: "Mother tongue", levelText: "Native", color: "bg-green-500" },
                { language: "French", level: "Good command", levelText: "Native", color: "bg-blue-500" },
                { language: "English", level: "Intermediate", levelText: "B1/B2", color: "bg-purple-500" },
                { language: "German", level: "Beginner", levelText: "A1/A2", color: "bg-orange-500" }
              ].map((lang, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{lang.language}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                      {lang.levelText}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{lang.level}</p>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${lang.color} rounded-full`}
                      style={{ 
                        width: lang.language === "Malagasy" || lang.language === "French" ? "100%" :
                               lang.language === "English" ? "60%" : "30%" 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Goals */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
                <h4 className="text-xl font-bold">Professional Goals</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Master web development today to explore the exciting intersection between digital 
                and robotics tomorrow. Every project brings me closer to this vision.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Excel in web development (my current expertise)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Explore robotics and automation as a future path</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Build projects bridging digital and physical worlds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical skills section */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center">Technical <span className="text-primary">Skills</span></h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", icon: "JS", color: "bg-yellow-100 dark:bg-yellow-900/30", textColor: "text-yellow-700 dark:text-yellow-300" },
              { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-700 dark:text-blue-300" },
              { name: "Python", icon: "🐍", color: "bg-green-100 dark:bg-green-900/30", textColor: "text-green-700 dark:text-green-300" },
              { name: "HTML/CSS", icon: "🌐", color: "bg-orange-100 dark:bg-orange-900/30", textColor: "text-orange-700 dark:text-orange-300" },
              { name: "Java", icon: "☕", color: "bg-red-100 dark:bg-red-900/30", textColor: "text-red-700 dark:text-red-300" },
              { name: "Tailwind", icon: "🎨", color: "bg-teal-100 dark:bg-teal-900/30", textColor: "text-teal-700 dark:text-teal-300" },
              { name: "Bootstrap", icon: "🚀", color: "bg-purple-100 dark:bg-purple-900/30", textColor: "text-purple-700 dark:text-purple-300" },
              { name: "Git", icon: "📦", color: "bg-gray-100 dark:bg-gray-700", textColor: "text-gray-700 dark:text-gray-300" }
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  <span className={skill.textColor}>{skill.icon}</span>
                </div>
                <h4 className="font-bold text-lg">{skill.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {["JavaScript", "React", "HTML/CSS"].includes(skill.name) ? "Intermediate" : 
                   ["Python", "Java"].includes(skill.name) ? "Solid basics" : "Familiar"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold">My <span className="text-accent">Approach</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Active Learning",
                description: "I build my skills through hands-on projects and personal research, growing as a developer every day."
              },
              {
                title: "Adaptability",
                description: "From web development to robotics, I embrace new technologies with enthusiasm and dedication."
              },
              {
                title: "Long-Term Vision",
                description: "My current focus on web development is a stepping stone toward my dream: merging digital with robotics."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;