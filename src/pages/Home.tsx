import { Download, Linkedin, Mail, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

const MissionStatement = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-green-600 via-green-600 to-teal-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            My Mission
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed font-light">
            "To empower African youth with accessible, affordable, and culturally appropriate 
            nutrition solutions that prevent malnutrition and diet-related diseases, while 
            uplifting their well-being, productivity, and long-term health outcomes."
          </p>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "3+", label: "Years Experience", icon: TrendingUp, color: "green" },
    { number: "5+", label: "Projects Led", icon: Award, color: "green" },
    { number: "2", label: "Initiatives Founded", icon: Users, color: "green" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div id="home" className="pt-10 overflow-hidden">
      {/* Hero Section with enhanced design */}
      <section className="min-h-screen py-10 bg-gradient-to-br from-slate-50 via-green-200 to-indigo-100 relative">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl animate-spin slow-spin"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
            {/* Image Section with irregular shape */}
            <div className="w-full lg:w-1/2 mb-8 md:mb-12 lg:mb-0 mt-12 md:mt-16 lg:mt-21 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-sm md:max-w-md lg:max-w-lg">
                {/* Main image container with irregular shape */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-120 mx-auto transform transition-all duration-700 hover:scale-105 hover:rotate-2">
                {/* Irregular background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-teal-500 rounded-[30px_15px_50px_20px] sm:rounded-[40px_18px_60px_25px] lg:rounded-[50px_20px_80px_30px] transform rotate-3 sm:rotate-4 lg:rotate-6 group-hover:rotate-6 sm:group-hover:rotate-8 lg:group-hover:rotate-12 transition-transform duration-700"></div>
                
                {/* Secondary shape for depth */}
                <div className="absolute inset-2 sm:inset-3 lg:inset-4 bg-gradient-to-tr from-pink-400 to-orange-400 rounded-[20px_40px_25px_50px] sm:rounded-[25px_50px_30px_60px] lg:rounded-[30px_60px_40px_70px] transform -rotate-2 sm:-rotate-2 lg:-rotate-3 group-hover:-rotate-3 sm:group-hover:-rotate-4 lg:group-hover:-rotate-6 transition-transform duration-700 opacity-80"></div>
                
                {/* Image container */}
                <div className="absolute inset-3 sm:inset-5 lg:inset-8 bg-white rounded-[25px_15px_40px_20px] sm:rounded-[30px_20px_50px_25px] lg:rounded-[40px_25px_60px_35px] overflow-hidden shadow-xl sm:shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-slate-400 to-gray-300 flex items-center justify-center relative">
                    <img 
                        src="/sonia (2).jpeg" 
                        alt="Profile" 
                        className="object-cover py-10 w-100 h-150"
                    />
                    
                    {/* Floating elements around image */}
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 lg:-bottom-2 lg:-left-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-400 rounded-full animate-bounce delay-500"></div>
                    </div>
                </div>
                </div>
                
                {/* Floating achievement badges */}
                <div className="absolute -top-6 -left-4 sm:-top-7 sm:-left-6 lg:-top-8 lg:-left-8 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-2 sm:p-3 animate-float">
                <div className="flex items-center gap-1 sm:gap-2">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Finance Leader</span>
                </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 lg:-bottom-6 lg:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-2 sm:p-3 animate-float delay-1000">
                <div className="flex items-center gap-1 sm:gap-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Impact Maker</span>
                </div>
                </div>
            </div>
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent">
                    Ikirezi Hirwa
                  </span>
                  <br />
                  <span className="text-gray-700">Sonia</span>
                </h1>
                
                <div className="mb-8 space-y-2">
                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    Entrepreneurial Leader
                  </p>
                  <p className="text-lg md:text-xl text-gray-500">
                    Finance Professional • Nutrition Advocate
                  </p>
                </div>
                
                {/* Animated CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300">
                    <Download className="h-5 w-5 group-hover:animate-bounce" />
                    Download CV
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-white border-2 border-green-200 text-green-600 rounded-2xl flex items-center justify-center gap-3 hover:border-green-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5 group-hover:animate-pulse" />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="mailto:soniahirwa@gmail.com" 
                    className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-600 rounded-2xl flex items-center justify-center gap-3 hover:border-gray-400 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 group-hover:animate-pulse" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Bio Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="transform hover:scale-105 transition-transform duration-300 p-6 bg-gradient-to-r from-green-50 to-indigo-50 rounded-2xl border border-green-100">
                  I am a passionate entrepreneurial leader with a Bachelor's degree in Entrepreneurial Leadership 
                  from the African Leadership University. My professional journey has spanned finance, operations, 
                  and social impact initiatives, with a focus on creating sustainable solutions for African communities.
                </p>
                
                <p className="transform hover:scale-105 transition-transform duration-300 p-6 bg-gradient-to-r from-green-50 to-pink-50 rounded-2xl border border-green-100">
                  Currently serving as Head of Finance at Nexventures Ltd, I lead financial operations and strategy, 
                  while also managing operations for Kozzy Wellness—a mental health initiative for high school students.
                </p>
                
                <p className="transform hover:scale-105 transition-transform duration-300 p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-2xl border border-teal-100">
                  My approach combines strategic financial thinking with a deep commitment to social impact, 
                  always seeking to balance profitability with purpose-driven outcomes.
                </p>
              </div>
              
              {/* Animated stats with cycling display */}
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    const isActive = currentStat === index;
                    
                    return (
                      <div 
                        key={index}
                        className={`p-8 rounded-3xl transform transition-all duration-700 ${
                          isActive 
                            ? `bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 text-white scale-110 shadow-2xl shadow-${stat.color}-500/25` 
                            : 'bg-gray-50 hover:bg-gray-100 scale-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className={`text-4xl font-bold mb-2 ${isActive ? 'text-white' : `text-${stat.color}-600`}`}>
                              {stat.number}
                            </div>
                            <div className={`text-lg ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                              {stat.label}
                            </div>
                          </div>
                          <Icon className={`h-12 w-12 ${isActive ? 'text-white animate-pulse' : `text-${stat.color}-500`}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Progress indicators */}
                <div className="flex justify-center gap-2">
                  {stats.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        currentStat === index ? 'w-8 bg-green-500' : 'w-2 bg-gray-300'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionStatement />
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slow-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `,
        }}
      />
    </div>
  );
};

export default Home;