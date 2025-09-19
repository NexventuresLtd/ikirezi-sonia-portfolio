import { useState, useEffect } from 'react';
import { FileText, TrendingUp, Calendar, ExternalLink, Download, X, BarChart3 } from 'lucide-react';

type ArtifactCardProps = {
  title: string;
  type: string;
  date: string;
  description: string;
  fullDescription: string;
  image: string;
  details: string[];
  index: number;
  onViewClick: () => void;
};

const ArtifactCard = ({ title, type, date, description, index, onViewClick }: ArtifactCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Financial': return TrendingUp;
      case 'Report': return FileText;
      case 'Strategy': return BarChart3;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Financial': return 'emerald';
      case 'Report': return 'blue';
      case 'Strategy': return 'purple';
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
      <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        <div className={`absolute inset-0 bg-gradient-to-br from-${colorClass}-50/50 to-${colorClass}-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Floating icon */}
        <div className={`absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-14 lg:h-14 bg-${colorClass}-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
          <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
        </div>
        
        <div className="p-6 lg:p-8 relative z-10">
          <div className="mb-4">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-${colorClass}-100 text-${colorClass}-700 mb-3`}>
              <Calendar className="h-4 w-4 mr-2" />
              {date}
            </div>
            
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-gray-900 transition-colors">
              {title}
            </h3>
          </div>
          
          <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          <div className="flex gap-3">
            <button 
              onClick={onViewClick}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-${colorClass}-600 text-white rounded-xl hover:bg-${colorClass}-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium`}
            >
              <ExternalLink className="h-4 w-4" />
              <span>View Details</span>
            </button>
            
            <button className={`px-4 py-3 border-2 border-${colorClass}-200 text-${colorClass}-600 rounded-xl hover:bg-${colorClass}-50 transform hover:-translate-y-0.5 transition-all duration-300`}>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Animated corner decoration */}
        <div className={`absolute bottom-0 left-0 w-16 h-16 lg:w-24 lg:h-24 bg-${colorClass}-200/30 rounded-tr-3xl lg:rounded-tr-[3rem] transform group-hover:scale-110 transition-transform duration-500`}></div>
      </div>
    </div>
  );
};

type PopupProps = {
  artifact: {
    title: string;
    type: string;
    date: string;
    fullDescription: string;
    image: string;
    details: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectPopup = ({ artifact, isOpen, onClose }: PopupProps) => {
  if (!isOpen || !artifact) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Financial': return 'emerald';
      case 'Report': return 'blue';
      case 'Strategy': return 'purple';
      default: return 'gray';
    }
  };

  const colorClass = getTypeColor(artifact.type);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        {/* Header with image */}
        <div className="relative h-64 lg:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={artifact.image}
            alt={artifact.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-${colorClass}-900/80 via-${colorClass}-900/40 to-transparent`}></div>
          <div className="absolute bottom-6 left-6 right-16">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-${colorClass}-100 text-${colorClass}-700 mb-3`}>
              <Calendar className="h-4 w-4 mr-2" />
              {artifact.date}
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight">
              {artifact.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Project Overview</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {artifact.fullDescription}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Key Details</h3>
            <ul className="space-y-3">
              {artifact.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 bg-${colorClass}-500 rounded-full mt-2 flex-shrink-0`}></div>
                  <span className="text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-${colorClass}-600 text-white rounded-xl hover:bg-${colorClass}-700 transition-colors duration-200 font-medium`}>
              <Download className="h-5 w-5" />
              Download Report
            </button>
            <button className={`flex-1 px-6 py-3 border-2 border-${colorClass}-200 text-${colorClass}-600 rounded-xl hover:bg-${colorClass}-50 transition-colors duration-200 font-medium`}>
              Share Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  type Artifact = {
    id: number;
    title: string;
    type: string;
    date: string;
    description: string;
    fullDescription: string;
    image: string;
    details: string[];
  };
  
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const artifacts = [
    {
      id: 1,
      title: "Financial Strategy Report - Nexventures",
      type: "Financial",
      date: "August 2025",
      description: "Comprehensive analysis of company financial health with strategic recommendations for investment and cost control.",
      fullDescription: "This comprehensive financial strategy report provides an in-depth analysis of Nexventures Ltd's current financial position and outlines strategic recommendations for sustainable growth. The report covers cash flow optimization, investment portfolio analysis, risk assessment, and strategic cost management initiatives designed to improve operational efficiency while maintaining competitive advantage in the market.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      details: [
        "Cash flow analysis and optimization strategies",
        "Investment portfolio diversification recommendations",
        "Risk assessment and mitigation frameworks",
        "Cost reduction initiatives with projected savings of 15%",
        "Strategic financial planning for next 3 years"
      ]
    },
    {
      id: 2,
      title: "Kozzy Wellness Program Proposal",
      type: "Report",
      date: "January 2025",
      description: "Detailed plan for mental health outreach program in Rwandan high schools, including budget and implementation timeline.",
      fullDescription: "The Kozzy Wellness Program is a comprehensive mental health initiative designed to address the growing need for psychological support among Rwandan high school students. This proposal outlines a structured approach to delivering mental health services, peer support programs, and educational workshops that promote emotional well-being and academic success.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      details: [
        "Mental health screening and assessment protocols",
        "Peer support network development",
        "Teacher training programs on mental health awareness",
        "Crisis intervention procedures and support systems",
        "Program evaluation metrics and success indicators"
      ]
    },
    {
      id: 3,
      title: "ISH Nutrition Initiative Research",
      type: "Strategy",
      date: "March 2024",
      description: "Market research and feasibility study for nutrition solutions targeting African youth malnutrition issues.",
      fullDescription: "The ISH Nutrition Initiative represents a groundbreaking approach to addressing malnutrition among African youth through innovative, culturally-appropriate nutritional solutions. This strategic research document presents comprehensive market analysis, implementation strategies, and sustainable business models for scaling nutrition interventions across multiple African markets.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop",
      details: [
        "Comprehensive market analysis across 5 African countries",
        "Nutritional gap assessment and intervention mapping",
        "Sustainable supply chain development strategies",
        "Community engagement and education frameworks",
        "Impact measurement and monitoring systems"
      ]
    }
  ];

  const filters = ['All', 'Financial', 'Report', 'Strategy'];
  
  const filteredArtifacts = activeFilter === 'All' 
    ? artifacts 
    : artifacts.filter(artifact => artifact.type === activeFilter);

  const handleViewClick = (artifact: {
    id: number;
    title: string;
    type: string;
    date: string;
    description: string;
    fullDescription: string;
    image: string;
    details: string[];
  }) => {
    setSelectedArtifact(artifact);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedArtifact(null);
  };

  return (
    <div id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero section */}
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-4 lg:right-20 w-48 h-48 lg:w-96 lg:h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-4 lg:left-20 w-56 h-56 lg:w-[30rem] lg:h-[30rem] bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Professional Portfolio
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A showcase of strategic leadership, financial expertise, and social impact initiatives driving meaningful change
            </p>
          </div>
        </div>
      </section>

      {/* Artifacts section */}
      <section className="pb-20 lg:pb-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6 lg:mb-8">Project Artifacts</h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 max-w-3xl mx-auto">
              Explore the projects and deliverables that showcase expertise in finance, strategy, and social impact
            </p>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12 lg:mb-16">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 lg:px-8 lg:py-4 rounded-2xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-base lg:text-lg ${
                    activeFilter === filter
                      ? 'bg-emerald-500 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {filteredArtifacts.map((artifact, index) => (
              <ArtifactCard
                key={artifact.id}
                title={artifact.title}
                type={artifact.type}
                date={artifact.date}
                description={artifact.description}
                fullDescription={artifact.fullDescription}
                image={artifact.image}
                details={artifact.details}
                index={index}
                onViewClick={() => handleViewClick(artifact)}
              />
            ))}
          </div>
          
          {filteredArtifacts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-12 w-12 lg:h-16 lg:w-16 text-gray-400" />
              </div>
              <p className="text-xl lg:text-2xl text-gray-500">No artifacts found for this filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Popup */}
      <ProjectPopup
        artifact={selectedArtifact}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Portfolio;