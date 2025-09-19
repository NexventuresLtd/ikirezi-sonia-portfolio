import { useState, useEffect } from 'react';
import { GraduationCap, Target, Briefcase, BarChart3, Heart, Calendar } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  const events = [
    {
      id: 1,
      title: "Started BEL at African Leadership University",
      date: "May 2023",
      description: "Persuing Bachelor's in Entrepreneurial Leadership with focus on innovation and strategy",
      icon: GraduationCap,
      color: "green"
    },
    {
      id: 2,
      title: "Launched Kuza Wellness Initiative",
      date: "December 2024",
      description: "Developed mental health program for Rwandan high school students",
      icon: Target,
      color: "green"
    },
    {
      id: 3,
      title: "Joined Rwanda Revenue Authority",
      date: "February 2025",
      description: "Gained practical experience in tax collection and public sector processes",
      icon: Briefcase,
      color: "green"
    },
    {
      id: 4,
      title: "Became COF at Nexventures Ltd",
      date: "July 2025",
      description: "Leading financial operations and strategic investment decisions",
      icon: BarChart3,
      color: "orange"
    },
    {
      id: 5,
      title: "ISH Nutrition Initiative",
      date: "Ongoing",
      description: "Developing nutrition solutions as preventive healthcare for African youth",
      icon: Heart,
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
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl animate-pulse">
              <Target className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Entrepreneurial Leadership Journey
          </h2>
          <div className="w-32 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-500 rounded-full"></div>
          
          {/* Timeline events */}
          <div className="space-y-16">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isVisible = visibleItems.has(index.toString());
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={event.id}
                  data-timeline-item
                  data-index={index}
                  className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className={`w-5/12 transform transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100' : `${isLeft ? '-translate-x-10' : 'translate-x-10'} opacity-0`
                  }`}>
                    <div className={`p-8 bg-white rounded-[30px_15px_30px_15px] shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100 relative overflow-hidden ${
                      isLeft ? 'mr-8' : 'ml-8'
                    }`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-${event.color} opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-2 px-4 py-2 bg-${event.color}-100 text-${event.color}-700 rounded-full text-sm font-medium mb-4 inline-flex`}>
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      
                      {/* Decorative corner */}
                      <div className={`absolute bottom-0 ${isLeft ? 'right-0' : 'left-0'} w-16 h-16 bg-gradient-to-${isLeft ? 'tl' : 'tr'} from-${event.color} to-${event.color} ${isLeft ? 'rounded-tl-[30px]' : 'rounded-tr-[30px]'}`}></div>
                    </div>
                  </div>
                  
                  {/* Central icon */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-${event.color}-600 rounded-[20px_6px_20px_6px] flex items-center justify-center shadow-xl z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;