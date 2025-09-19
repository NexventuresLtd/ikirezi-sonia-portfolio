import { Quote } from 'lucide-react';

const MissionStatement = () => {
  return (
    <section className="py-10 bg-green-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-[25px_10px_25px_10px] flex items-center justify-center shadow-2xl animate-pulse">
              <Quote className="h-10 w-10" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            My Mission
          </h2>
          
          <div className="relative">
            <blockquote className="text-xl md:text-2xl leading-relaxed font-light mb-8 px-8 py-6 bg-white/10 backdrop-blur-sm rounded-[40px_20px_40px_20px] border border-white/20">
              "To empower African youth with accessible, affordable, and culturally appropriate 
              nutrition solutions that prevent malnutrition and diet-related diseases, while 
              uplifting their well-being, productivity, and long-term health outcomes."
            </blockquote>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;