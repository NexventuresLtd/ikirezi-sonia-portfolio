import { useState, useEffect } from 'react';
import { Download, MapPin, Mail, Phone, Linkedin, Briefcase, GraduationCap, Award, Target, Calendar, Building, Users, TrendingUp, Lightbulb, Heart, Star, Zap } from 'lucide-react';

type SkillCategory = 'technical' | 'leadership' | 'soft';

type SkillCategoryData = {
  title: string;
  icon: React.ElementType;
  color: string;
  items: string[];
};

const Resume = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('technical');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills: Record<SkillCategory, SkillCategoryData> = {
    technical: {
      title: "Technical Skills",
      icon: TrendingUp,
      color: "green",
      items: ["Financial Analysis", "Cost Control", "Investment Planning", "Operations Management", "Project Management"]
    },
    leadership: {
      title: "Leadership Skills", 
      icon: Users,
      color: "green",
      items: ["Strategic Thinking", "Stakeholder Engagement", "Problem-Solving", "Decision-Making", "Teamwork"]
    },
    soft: {
      title: "Soft Skills",
      icon: Heart,
      color: "teal",
      items: ["Creativity", "Resilience", "Adaptability", "Communication", "Critical Thinking"]
    }
  };

  const experiences = [
    {
      title: "Head of Finance",
      company: "Nexventures Ltd",
      period: "Jul 2025 – Present",
      icon: TrendingUp,
      color: "green",
      responsibilities: [
        "Lead financial operations and strategy for Nexventures Ltd",
        "Prepare and present weekly financial reports for decision-making",
        "Guide the team on strategic investment decisions",
        "Recommend cost-control strategies and profitability improvements"
      ]
    },
    {
      title: "Operations Manager",
      company: "Kozzy Wellness",
      period: "Dec 2024 – Present",
      icon: Users,
      color: "green",
      responsibilities: [
        "Oversee operations for Kuza Wellness Initiative",
        "Coordinate school outreach programs and stakeholder engagement",
        "Manage team performance and ensure smooth implementation",
        "Support strategy development for scaling wellness initiatives"
      ]
    },
    {
      title: "Field Operator",
      company: "Rwanda Revenue Authority",
      period: "Feb 2025",
      icon: Building,
      color: "green",
      responsibilities: [
        "Supported field operations for tax collection and compliance",
        "Gained practical exposure to Rwanda's revenue system"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = (entry.target as HTMLElement).dataset.section;
            if (section) {
              setVisibleSections(prev => new Set(prev).add(section));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="resume" className="pt-10 relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-10 bg-slate-50 relative">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-green-400/10  rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-green-600 bg-clip-text text-transparent">
                  Professional Resume
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive overview of my experience, skills, and achievements in entrepreneurial leadership and finance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-green-600 text-white rounded-[25px_10px_25px_10px] flex items-center gap-3 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300">
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download PDF
                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Information Card */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div 
            data-section="personal"
            className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
              visibleSections.has('personal') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-green-900 p-8 md:p-12 rounded-[50px_25px_50px_25px] text-white relative overflow-hidden shadow-2xl">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-300/20 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-300/5 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Ikirezi Hirwa Sonia
                    </h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <span className="text-lg">Kigali, Nyarugenge, Rwanda</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span className="text-lg">soniahirwa@gmail.com</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5" />
                        </div>
                        <span className="text-lg">+250 786 497 029</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <span className="text-lg">linkedin.com/in/soniahirwa</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mission Statement */}
                  <div className="bg-white/10 p-6 rounded-[30px_15px_30px_15px] backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="h-6 w-6 text-yellow-400" />
                      <h3 className="text-xl font-semibold">Mission Statement</h3>
                    </div>
                    <p className="text-gray-200 leading-relaxed italic">
                      "To empower African youth with accessible, affordable, and culturally appropriate nutrition 
                      solutions that prevent malnutrition and diet-related diseases, while uplifting their well-being, 
                      productivity, and long-term health outcomes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <div 
            data-section="experience"
            className={`transform transition-all duration-1000 ${
              visibleSections.has('experience') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
              <div className="w-32 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isVisible = visibleSections.has('experience');
                
                return (
                  <div 
                    key={index}
                    className={`transform transition-all duration-700 delay-${index * 200} ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="group bg-white p-8 rounded-[40px_20px_40px_20px] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className={`absolute inset-0 bg-${exp.color}-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div className="flex items-center gap-4 mb-4 md:mb-0">
                            <div className={`w-14 h-14 bg-${exp.color}-500 rounded-[18px_6px_18px_6px] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-7 w-7 text-white" />
                            </div>
                            
                            <div>
                              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                                {exp.title}
                              </h3>
                              <p className={`text-lg font-medium text-${exp.color}-600`}>
                                {exp.company}
                              </p>
                            </div>
                          </div>
                          
                          <div className={`flex items-center gap-2 px-4 py-2 bg-${exp.color}-100 text-${exp.color}-700 rounded-full`}>
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((responsibility, rIndex) => (
                            <div key={rIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                              <div className={`w-6 h-6 bg-${exp.color}-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <div className={`w-2 h-2 bg-${exp.color}-600 rounded-full`}></div>
                              </div>
                              <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div 
            data-section="education"
            className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
              visibleSections.has('education') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
              <div className="w-32 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-teal-50 p-8 md:p-12 rounded-[50px_25px_50px_25px] border border-green-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-bl-[60px]"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200/30 rounded-tr-[40px]"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Bachelor's in Entrepreneurial Leadership
                    </h3>
                    <p className="text-xl text-green-600 font-semibold mb-4">
                      The African Leadership University
                    </p>
                    <p className="text-gray-700 mb-6">
                      Key coursework: Leadership, Strategy, Innovation, Financial Analysis
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full flex-shrink-0">
                    <Award className="h-4 w-4" />
                    <span className="font-medium">Graduated: May 2023</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Projects
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-[25px_10px_25px_10px] shadow-lg border border-green-100">
                      <h5 className="font-semibold text-gray-800 mb-3">AI-Driven Community Wellness Platform</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Designed a comprehensive platform concept focusing on inclusivity for illiterate users and community wellness sustainability.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-[25px_10px_25px_10px] shadow-lg border border-green-100">
                      <h5 className="font-semibold text-gray-800 mb-3">Misinformation Challenge Solution</h5>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Applied Tina Seelig's Invention Cycle methodology to develop innovative approaches for combating misinformation and disinformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <div 
            data-section="skills"
            className={`transform transition-all duration-1000 ${
              visibleSections.has('skills') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-pink-600 rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
              <div className="w-32 h-1 bg-pink-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              {/* Category Selector */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.entries(skills).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSkillCategory(key as SkillCategory)}
                      className={`flex items-center gap-3 px-6 py-4 rounded-[25px_10px_25px_10px] font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                        activeSkillCategory === key
                          ? `bg-${category.color}-500 text-white shadow-lg shadow-${category.color}-500/25`
                          : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {category.title}
                    </button>
                  );
                })}
              </div>
              
              {/* Skills Display */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills[activeSkillCategory].items.map((skill, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`group p-6 bg-white rounded-[25px_10px_25px_10px] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden ${
                      hoveredSkill === index ? 'scale-105' : ''
                    }`}
                  >
                    <div className={`absolute inset-0 bg-${skills[activeSkillCategory].color}-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`font-medium text-gray-800 group-hover:text-${skills[activeSkillCategory].color}-700 transition-colors`}>
                        {skill}
                      </span>
                      <Star className={`h-5 w-5 text-${skills[activeSkillCategory].color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                    
                    {hoveredSkill === index && (
                      <div className={`absolute bottom-2 right-2 w-2 h-2 bg-${skills[activeSkillCategory].color}-500 rounded-full animate-pulse`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;