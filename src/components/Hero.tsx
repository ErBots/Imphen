
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  // User name untuk menampilkan total pengikut
  const users = [
    { name: "Andi", color: "bg-purple-500" },
    { name: "Budi", color: "bg-blue-500" },
    { name: "Citra", color: "bg-green-500" },
    { name: "Deni", color: "bg-amber-500" },
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent1/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 bg-accent2/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-dark-700 mb-6">
              <Star size={16} className="text-yellow-500 mr-2" />
              <span className="text-sm text-white/80">Cara Baru Belajar Programming</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ingin Menjadi <span className="gradient-text">Programmer Handal</span>, Namun Enggan Ngoding
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Jalur belajar revolusioner yang dirancang untuk membantu Anda menguasai pemrograman tanpa harus menulis baris kode yang rumit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-to-r from-accent1 to-accent2 text-white px-8 py-6 rounded-lg text-lg hover-scale"
                onClick={() => window.open("https://facebook.com/groups/programmerhandal/", "_blank")}
              >
                Gabung Komunitas
                <ArrowRight className="ml-2" size={18} />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white/20 text-white px-8 py-6 rounded-lg text-lg hover:border-white/40"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Keuntungan
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {users.map((user, i) => (
                  <Avatar key={i} className="border-2 border-dark-900">
                    <AvatarFallback className={`${user.color} text-white font-medium`}>
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="ml-4">
                <p className="text-white/80">Bergabung dengan <span className="text-white font-bold">1,000+</span> member lainnya</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="card-gradient rounded-xl p-1">
                <div className="bg-dark-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Code className="text-white/60" size={16} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-6 bg-dark-700 rounded w-full animate-pulse-slow"></div>
                    <div className="h-6 bg-dark-700 rounded w-3/4 animate-pulse-slow delay-100"></div>
                    <div className="h-6 bg-dark-700 rounded w-5/6 animate-pulse-slow delay-200"></div>
                    <div className="mt-6 h-10 bg-gradient-to-r from-accent1/30 to-accent2/30 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 card-gradient rounded-xl p-1 w-48">
                <div className="bg-dark-800 rounded-lg p-3">
                  <div className="text-xs text-white/60">Progress Belajar</div>
                  <div className="text-lg font-bold text-white mt-1">75% Selesai</div>
                  <div className="w-full h-2 bg-dark-700 rounded-full mt-2">
                    <div className="w-3/4 h-full bg-gradient-to-r from-accent1 to-accent2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
