import { Code2, Cpu, Globe, Shield, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover my journey, my skills, and my vision for the future of technology
          </p>
        </div>

        {/* Main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and experience */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              My <span className="text-accent">Journey</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently in my second year of Computer Science, Digital Transformation track, 
              I'm building strong foundations for my tech career. Passionate about 
              web development, I dream of one day exploring the fascinating world 
              of robotics.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My curiosity and thirst for learning push me to exceed my limits every day. 
              While my current skills are rooted in web development, my vision extends 
              far beyond: I want to understand how digital technology can bring matter 
              to life through robotics.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-8 h-8 text-accent" />
                  <span className="text-3xl font-bold">10+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Web projects completed</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-8 h-8 text-accent" />
                  <span className="text-3xl font-bold">∞</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Passion for robotics</p>
              </div>
            </div>

            {/* Button */}
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg px-8 inline-flex items-center gap-2"
            >
              Let's work together
              <Zap className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Skills */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              My <span className="text-accent">Skills</span>
            </h3>

            {/* Skill bars */}
            <div className="space-y-6">
              {[
                { skill: "Frontend Development", level: 75, icon: <Code2 className="w-5 h-5" /> },
                { skill: "JavaScript & React", level: 70, icon: <Globe className="w-5 h-5" /> },
                { skill: "HTML & CSS", level: 80, icon: <Code2 className="w-5 h-5" /> },
                { skill: "Robotics (Beginner)", level: 20, icon: <Cpu className="w-5 h-5" /> },
                { skill: "Digital Transformation", level: 65, icon: <Users className="w-5 h-5" /> },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-medium">{item.skill}</span>
                    </div>
                    <span className="text-sm font-bold">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My <span className="text-accent">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Insatiable Curiosity",
                description: "I learn every day to become the developer I aspire to be tomorrow."
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Continuous Learning",
                description: "From my studies to personal projects, every step is an opportunity to grow."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Collaboration",
                description: "I believe in the power of teamwork to turn ideas into reality."
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <div className="text-accent">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision section */}
        <div className="mt-20 bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-8 md:p-12 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                My Vision for the <span className="text-accent">Future</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a digital transformation student, I'm preparing to be a driver of change. 
                My goal: master web development today so that tomorrow, I can explore 
                the perfect fusion between digital and robotics.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm convinced that the future belongs to those who can build bridges 
                between virtual and physical worlds. This dual passion will guide 
                my professional journey in the years to come.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center">
                  <Cpu className="w-24 h-24 text-accent animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;