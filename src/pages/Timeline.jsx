import { useState, useEffect } from 'react';
import { TrendingUp, Users, Calendar, Zap, Building2, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  const timelineEvents = [
    {
      date: "July 2025 - Present",
      title: "Head of Finance at Nexventures Ltd",
      description: "Leading financial operations and strategic investment decisions for a rapidly growing startup. Overseeing budget planning, financial analysis, and strategic partnerships to drive company growth and sustainability.",
      icon: TrendingUp,
      color: "emerald",
      type: "current"
    },
    {
      date: "February 2025",
      title: "Field Operator - Rwanda Revenue Authority",
      description: "Gained valuable exposure to Rwanda's revenue system and public sector processes. Developed understanding of tax policy implementation and government financial operations at the grassroots level.",
      icon: Building2,
      color: "blue",
      type: "experience"
    },
    {
      date: "December 2024 - Present",
      title: "Operations Manager at Kozzy Wellness",
      description: "Overseeing comprehensive mental health initiatives specifically designed for high school students across Rwanda. Managing program implementation, staff coordination, and impact measurement for sustainable mental health support.",
      icon: Users,
      color: "purple",
      type: "current"
    },
    {
      date: "May 2023 - Present",
      title: "Bachelor's in Entrepreneurial Leadership",
      description: "Currently pursuing advanced studies in entrepreneurial leadership at The African Leadership University. Focusing on innovative business strategies, leadership development, and sustainable enterprise management.",
      icon: GraduationCap,
      color: "orange",
      type: "education"
    },
    {
      date: "2023 - 2024",
      title: "ISH Nutrition Initiative Development",
      description: "Designed and developed comprehensive solutions to promote nutrition as preventive healthcare across African communities. Created sustainable business models for addressing malnutrition challenges among youth populations.",
      icon: Zap,
      color: "teal",
      type: "project"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getTypeBackground = (type) => {
    switch (type) {
      case 'current': return 'from-green-50 to-emerald-50';
      case 'experience': return 'from-blue-50 to-sky-50';
      case 'education': return 'from-orange-50 to-amber-50';
      case 'project': return 'from-teal-50 to-cyan-50';
      default: return 'from-gray-50 to-slate-50';
    }
  };

  return (
    <div id="timeline" className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-white py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Leadership Journey
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A chronological exploration of professional growth, academic achievements, and impactful initiatives that shape entrepreneurial leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-teal-400 rounded-full shadow-sm"></div>
          
          {/* Mobile timeline line - Left side */}
          <div className="lg:hidden absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-teal-400 rounded-full"></div>
          
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isVisible = visibleItems.has(index.toString());
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index}
                data-timeline-item
                data-index={index}
                className={`relative flex items-center mb-16 lg:mb-24 ${
                  // Desktop layout alternating sides
                  isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`w-full lg:w-5/12 ml-16 lg:ml-0 transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 lg:translate-x-0 opacity-0'
                } ${
                  // Desktop margins
                  isLeft ? 'lg:mr-8' : 'lg:ml-8'
                } ${
                  // Desktop animation direction
                  isVisible ? '' : (isLeft ? 'lg:-translate-x-10' : 'lg:translate-x-10')
                }`}>
                  <div className={`group relative p-6 lg:p-8 bg-gradient-to-br ${getTypeBackground(event.type)} rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm overflow-hidden`}>
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl lg:rounded-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm lg:text-base font-medium bg-${event.color}-100 text-${event.color}-700 mb-4 lg:mb-6 shadow-sm`}>
                        <Calendar className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
                        {event.date}
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3 lg:mb-4 group-hover:text-gray-900 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {event.description}
                      </p>
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 lg:w-16 lg:h-16 bg-${event.color}-200/30 rounded-tl-3xl transform group-hover:scale-110 transition-transform duration-500`}></div>
                  </div>
                </div>
                
                {/* Central icon */}
                <div className={`absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-${event.color}-500 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg lg:shadow-xl z-20 transition-all duration-700 ${
                  isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
                } hover:scale-110 cursor-pointer group`}>
                  <Icon className="h-6 w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Pulsing ring effect */}
                  <div className={`absolute inset-0 bg-${event.color}-400 rounded-2xl lg:rounded-3xl animate-ping opacity-20`}></div>
                </div>

                {/* Connection line for mobile */}
                <div className="lg:hidden absolute left-6 top-6 w-10 h-0.5 bg-gray-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats or call to action */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-white/50">
              <div className="text-2xl lg:text-3xl font-bold text-emerald-600 mb-2">3+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-white/50">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Major Projects</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-white/50">
              <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Current Roles</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg border border-white/50">
              <div className="text-2xl lg:text-3xl font-bold text-teal-600 mb-2">1</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">Degree in Progress</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 lg:w-64 lg:h-64 bg-emerald-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 lg:w-48 lg:h-48 bg-blue-200/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 lg:w-40 lg:h-40 bg-purple-200/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default Timeline;