import { useState, useEffect } from 'react';
import { FileText, BarChart3, Calendar, ExternalLink, Download } from 'lucide-react';

interface ArtifactCardProps {
  title: string;
  type: string;
  date: string;
  description: string;
  index?: number;
}

const ArtifactCard = ({ title, type, date, description, index = 0 }: ArtifactCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'report':
        return <FileText className="h-6 w-6" />;
      case 'financial':
        return <BarChart3 className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'financial': return 'green';
      case 'report': return 'green';
      default: return 'gray';
    }
  };

  const colorClass = getTypeColor(type);

  return (
    <div 
      className={`group transform transition-all duration-700 hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="relative bg-white rounded-[30px_15px_30px_15px] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Floating type indicator */}
        <div className={`absolute -top-3 -right-3 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-[15px_5px_15px_5px] transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
          {type}
        </div>
        
        <div className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 bg-${colorClass}-200 rounded-[18px_6px_18px_6px] flex items-center justify-center text-${colorClass}-600 group-hover:scale-110 transition-transform duration-300`}>
              {getIcon(type)}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-gray-900 transition-colors">
            {title}
          </h3>
          
          <div className={`flex items-center text-${colorClass}-600 mb-4`}>
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex gap-3">
            <button className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-${colorClass}-600 text-white rounded-[20px_8px_20px_8px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}>
              <ExternalLink className="h-4 w-4" />
              <span className="font-medium">View</span>
            </button>
            
            <button className={`px-4 py-3 border-2 border-${colorClass}-200 text-${colorClass}-600 rounded-[20px_8px_20px_8px] hover:bg-${colorClass}-50 transform hover:-translate-y-0.5 transition-all duration-300`}>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Decorative corner element */}
        <div className={`absolute bottom-0 left-0 w-20 h-20 bg-${colorClass}-200/20  rounded-tr-[40px] transform group-hover:scale-110 transition-transform duration-500`}></div>
      </div>
    </div>
  );
};

export default ArtifactCard;