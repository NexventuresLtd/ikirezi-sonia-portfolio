import { useState, useEffect } from 'react';
import { FileText, TrendingUp, Users, Calendar, ExternalLink, Download, Award, Target, Zap} from 'lucide-react';

type ArtifactCardProps = {
  title: string;
  type: string;
  date: string;
  description: string;
  index: number;
};

const ArtifactCard = ({ title, type, date, description, index }: ArtifactCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Financial': return TrendingUp;
      case 'Report': return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Financial': return 'green';
      case 'Report': return 'green';
      default: return 'gray';
    }
  };

  const Icon = getTypeIcon(type);
  const colorClass = getTypeColor(type);

  return (
    <div 
      className={`group transform transition-all duration-700 hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative bg-white rounded-[20px_10px_20px_10px] md:rounded-[30px_15px_30px_15px] shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">

        <div className={`absolute inset-0 bg-${colorClass}-400/10 via-transparent to-${colorClass}-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Floating icon */}
        <div className={`absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-${colorClass}-600 rounded-[12px_4px_12px_4px] md:rounded-[15px_5px_15px_5px] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-md md:shadow-lg`}>
          <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
        </div>
        
        <div className="p-5 md:p-8 relative z-10">
          <div className="mb-3 md:mb-4">
            <div className={`inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-${colorClass}-100 text-${colorClass}-700 mb-2 md:mb-3`}>
              <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              {date}
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 leading-tight group-hover:text-gray-900 transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex gap-2 md:gap-3">
            <button className={`flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-3 bg-${colorClass}-600 text-white rounded-xl md:rounded-2xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base`}>
              <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
              <span className="font-medium">View</span>
            </button>
            
            <button className={`px-3 py-2 md:px-4 md:py-3 border-2 border-${colorClass}-200 text-${colorClass}-600 rounded-xl md:rounded-2xl hover:bg-${colorClass}-50 transform hover:-translate-y-0.5 transition-all duration-300`}>
              <Download className="h-3 w-3 md:h-4 md:w-4" />
            </button>
          </div>
        </div>
        
        {/* Animated corner decoration */}
        <div className={`absolute bottom-0 left-0 w-14 h-14 md:w-20 md:h-20 bg-${colorClass}-200/30 rounded-tr-[30px] md:rounded-tr-[40px] transform group-hover:scale-110 transition-transform duration-500`}></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  const timelineEvents = [
    {
      date: "July 2025 - Present",
      title: "Head of Finance at Nexventures Ltd",
      description: "Leading financial operations and strategic investment decisions",
      icon: TrendingUp,
      color: "green"
    },
    {
      date: "February 2025",
      title: "Field Operator - Rwanda Revenue Authority",
      description: "Gained exposure to Rwanda's revenue system and public sector processes",
      icon: Award,
      color: "green"
    },
    {
      date: "December 2024 - Present",
      title: "Operations Manager at Kozzy Wellness",
      description: "Overseeing mental health initiatives for high school students",
      icon: Users,
      color: "green"
    },
    {
      date: "May 2023",
      title: "Bachelor's in Entrepreneurial Leadership",
      description: "Graduated from The African Leadership University",
      icon: Target,
      color: "orange"
    },
    {
      date: "2023 - 2024",
      title: "ISH Nutrition Initiative Development",
      description: "Designed solution to promote nutrition as preventive healthcare",
      icon: Zap,
      color: "teal"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <h3 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 font-bold text-center text-gray-800">
        Entrepreneurial Leadership Journey
      </h3>
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-0">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 md:w-1 h-full bg-teal-500 rounded-full"></div>
        
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isVisible = visibleItems.has(index.toString());
          const isLeft = index % 2 === 0;
          
          return (
            <div 
              key={index}
              data-timeline-item
              data-index={index}
              className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content card */}
              <div className={`w-full md:w-5/12 transform transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : `${isLeft ? '-translate-x-10' : 'translate-x-10'} opacity-0`
              }`}>
                <div className={`p-5 md:p-8 bg-white rounded-[15px_8px_15px_8px] md:rounded-[25px_10px_25px_10px] shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-500 border border-gray-100 ${
                  isLeft ? 'mr-4 md:mr-8' : 'ml-4 md:ml-8'
                }`}>
                  <div className={`inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-${event.color}-100 text-${event.color}-700 mb-3 md:mb-4`}>
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    {event.date}
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                    {event.title}
                  </h4>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Central icon */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-${event.color}-500 rounded-[15px_4px_15px_4px] md:rounded-[20px_5px_20px_5px] flex items-center justify-center shadow-md md:shadow-lg z-10 transition-all duration-500 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}>
                <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const artifacts = [
    {
      id: 1,
      title: "Financial Strategy Report - Nexventures",
      type: "Financial",
      date: "August 2025",
      description: "Comprehensive analysis of company financial health with strategic recommendations for investment and cost control."
    },
    {
      id: 2,
      title: "Kuza Wellness Program Proposal",
      type: "Report",
      date: "January 2025",
      description: "Detailed plan for mental health outreach program in Rwandan high schools, including budget and implementation timeline."
    },
    {
      id: 3,
      title: "ISH Nutrition Initiative Research",
      type: "Report",
      date: "March 2025",
      description: "Market research and feasibility study for nutrition solutions targeting African youth malnutrition issues."
    }
  ];

  const filters = ['All', 'Financial', 'Report'];
  
  const filteredArtifacts = activeFilter === 'All' 
    ? artifacts 
    : artifacts.filter(artifact => artifact.type === activeFilter);

  return (
    <div id="portfolio" className="pt-10 overflow-hidden">
      {/* Hero section */}
      <section className="py-6 md:py-8 bg-slate-50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-green-400/10 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-4 md:left-10 w-56 h-56 md:w-96 md:h-96 bg-teal-400/10 rounded-full blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="bg-green-800 bg-clip-text text-transparent">
                Professional Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
              A showcase of strategic leadership, financial expertise, and social impact initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Artifacts section */}
      <section className="bg-white mt-5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">Project Artifacts</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Explore the projects and deliverables that showcase my expertise in finance, strategy, and social impact
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-sm md:text-base ${
                    activeFilter === filter
                      ? 'bg-green-500 text-white shadow-md md:shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-16 md:mb-20">
            {filteredArtifacts.map((artifact, index) => (
              <ArtifactCard
                key={artifact.id}
                title={artifact.title}
                type={artifact.type}
                date={artifact.date}
                description={artifact.description}
                index={index}
              />
            ))}
          </div>
          
          {filteredArtifacts.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <FileText className="h-8 w-8 md:h-12 md:w-12 text-gray-400" />
              </div>
              <p className="text-lg md:text-xl text-gray-500">No artifacts found for this filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-8 md:py-10 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 md:w-32 md:h-32 bg-green-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-14 h-14 md:w-20 md:h-20 bg-green-200/30 rounded-full animate-bounce"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;