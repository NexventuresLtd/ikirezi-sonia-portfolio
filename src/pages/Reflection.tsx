import { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, Target, ChevronRight, Quote, Sparkles, Brain, Heart, Compass } from 'lucide-react';

const Reflection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);

  const sections = [
    {
      id: 1,
      title: "Transformative Learning Experiences",
      icon: Sparkles,
      color: "green",
      content: [
        "My journey at African Leadership University provided transformative learning experiences that fundamentally reshaped my approach to leadership and problem-solving. The most impactful was designing an AI-Driven Community Wellness Platform, which taught me to balance technological innovation with human-centered design. This project challenged me to consider accessibility for illiterate users—a constraint that pushed me to think creatively about inclusive solutions.",
        "Another pivotal experience was my fieldwork with the Rwanda Revenue Authority, where I witnessed firsthand the complexities of public sector systems. This exposure to ground-level implementation realities transformed my understanding of how policies impact communities and the importance of designing systems with empathy for end-users."
      ]
    },
    {
      id: 2,
      title: "Applied Leadership Theories",
      icon: Brain,
      color: "green",
      content: [
        "I've consistently applied transformational leadership theory throughout my initiatives. At Kozzy Wellness, I motivated team members by connecting our mental health work to a larger purpose—improving educational outcomes through student wellbeing. This approach created higher engagement and commitment than purely task-oriented management would have achieved.",
        "Similarly, I employed situational leadership at Nexventures when guiding financial strategy. With junior team members, I provided more directive guidance on financial reporting, while with experienced colleagues, I adopted a delegating approach for investment analysis. This flexibility allowed me to optimize team performance across different competency levels."
      ]
    },
    {
      id: 3,
      title: "Learning Journey Evaluation",
      icon: TrendingUp,
      color: "green",
      content: [
        "My learning journey has been characterized by progressive complexity—from academic theories to practical applications, and eventually to developing strategic initiatives. I've evolved from simply understanding leadership concepts to applying them in real-world contexts with measurable impacts.",
        "This journey has transformed my skills from theoretical knowledge to practical competencies in financial management, operational strategy, and stakeholder engagement. More importantly, it has shifted my mindset from solution-oriented to systems-thinking—I now approach problems by understanding underlying structures and relationships rather than treating symptoms."
      ]
    },
    {
      id: 4,
      title: "Mission & Post-Graduation Plans",
      icon: Target,
      color: "orange",
      content: [
        "My learning journey has directly informed and shaped my mission to empower African youth through nutrition solutions. The financial skills developed at Nexventures will be crucial for ensuring the sustainability of nutrition initiatives, while the operational experience from Kozzy Wellness has taught me how to scale social impact programs effectively.",
        "The artefacts in my portfolio—from financial reports to program proposals—demonstrate this integration of diverse skills toward a unified mission. Post-graduation, I plan to launch a social enterprise that addresses youth nutrition through affordable, culturally appropriate solutions. My journey has equipped me with both the strategic vision to design this initiative and the practical skills to implement it successfully.",
        "Ultimately, every experience—whether in finance, operations, or field work—has contributed to a comprehensive understanding of how to create sustainable change. This holistic perspective will be essential as I work toward my mission of improving health outcomes for African youth."
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(parseInt((entry.target as HTMLElement).dataset.section!)));
          }
        });
      },
      { threshold: 0.3 }
    );

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach(el => observer.observe(el));
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="reflection" className="pt-10 relative">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="py-10 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-400/10  rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-400/10  rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/5  rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-300 rounded-[25px_10px_25px_10px] flex items-center justify-center shadow-2xl animate-pulse">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-green-600 bg-clip-text text-transparent">
                Leadership Reflection
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              A deep dive into transformative experiences, applied theories, and future aspirations
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={section.id} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${section.color}-100 text-${section.color}-700`}>
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">Section {index + 1}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="w-32 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isVisible = visibleSections.has(section.id);
              
              return (
                <div 
                  key={section.id}
                  data-section={section.id}
                  className={`mb-20 transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <div className="relative">
                    {/* Question number and icon */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`flex-shrink-0 w-16 h-16 bg-${section.color}-500  rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${section.color}-100 text-${section.color}-700 text-sm font-medium mb-4`}>
                          Question {index + 1}
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`bg-${section.color}-50/50 p-8 md:p-12 rounded-[40px_20px_40px_20px] shadow-xl border border-${section.color}-100/50 relative overflow-hidden`}>
                      {/* Decorative elements */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-${section.color}-200/20 rounded-bl-[60px]`}></div>
                      <div className={`absolute bottom-0 left-0 w-24 h-24 bg-${section.color}-200/20 rounded-tr-[40px]`}></div>
                      
                      {/* Quote icon */}
                      <div className={`w-12 h-12 bg-${section.color}-200/30 rounded-full flex items-center justify-center mb-6`}>
                        <Quote className={`h-6 w-6 text-${section.color}-600`} />
                      </div>
                      
                      <div className="space-y-6 relative z-10">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {/* Bottom accent */}
                      <div className={`mt-8 pt-6 border-t border-${section.color}-200/30 flex items-center justify-between`}>
                        <div className={`flex items-center gap-2 text-${section.color}-600`}>
                          <Heart className="h-4 w-4" />
                          <span className="text-sm font-medium">Key Insight</span>
                        </div>
                        
                        {index < sections.length - 1 && (
                          <button className={`flex items-center gap-2 px-4 py-2 text-${section.color}-600 hover:text-${section.color}-700 transition-colors`}>
                            <span className="text-sm">Next Section</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Conclusion Section */}
            <div className="relative mt-20">
              <div className="bg-gradient-to-br from-gray-900 via-green-900 to-green-900 p-12 md:p-16 rounded-[50px_25px_50px_25px] text-white relative overflow-hidden shadow-2xl">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-300/10 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-300/5 rounded-full animate-ping"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[20px_8px_20px_8px] flex items-center justify-center shadow-xl">
                      <Compass className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-8">
                    Looking Forward
                  </h3>
                  
                  <p className="text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
                    This reflection represents not just a summary of my journey, but a compass for my future. 
                    Every experience has shaped my vision of creating sustainable change in African communities, 
                    and I'm excited to transform these insights into impactful action.
                  </p>
                  
                  <div className="mt-8 flex justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reflection;