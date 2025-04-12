
import React from 'react';
import { Button } from "@/components/ui/button";
import { FacebookIcon, MessageSquare, Users, Share2 } from 'lucide-react';

const Community = () => {
  const shareGroup = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Programmer Handal - Facebook Group',
        text: 'Komunitas programmer Indonesia yang fokus untuk saling berbagi ilmu dan pengalaman dalam dunia programming tanpa ngoding!',
        url: 'https://facebook.com/groups/programmerhandal/',
      })
      .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://facebook.com/groups/programmerhandal/')}`, '_blank');
    }
  };

  return (
    <div id="community" className="py-24 bg-dark-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-accent1/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent2/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card-gradient p-1 rounded-xl">
              <div className="bg-dark-800 rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <FacebookIcon className="h-8 w-8 text-[#1877F2] mr-2" />
                    <span className="text-xl font-bold text-white">Facebook Group</span>
                  </div>
                  <div className="bg-dark-700 text-white/70 px-3 py-1 rounded-full text-sm">
                    <span className="flex items-center">
                      <Users size={14} className="mr-1" />
                      10K+ Members
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Programmer Handal</h3>
                <p className="text-white/70 mb-6">
                  Komunitas programmer Indonesia yang fokus untuk saling berbagi ilmu dan pengalaman dalam dunia programming.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-dark-700 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-white">10K+</div>
                    <div className="text-xs text-white/60">Members</div>
                  </div>
                  <div className="bg-dark-700 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-white">500+</div>
                    <div className="text-xs text-white/60">Posts/Week</div>
                  </div>
                  <div className="bg-dark-700 p-3 rounded-lg text-center">
                    <div className="text-xl font-bold text-white">98%</div>
                    <div className="text-xs text-white/60">Response</div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    className="bg-[#1877F2] hover:bg-[#166FE5] text-white"
                    onClick={() => window.open("https://facebook.com/groups/programmerhandal/", "_blank")}
                  >
                    <FacebookIcon className="mr-2 h-4 w-4" />
                    Join Group
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 text-white hover:border-white/40"
                    onClick={shareGroup}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabung dengan <span className="gradient-text">Komunitas</span> Kami
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Akses ke komunitas Facebook eksklusif dengan ribuan programmer yang saling berbagi pengalaman, pengetahuan, dan dukungan dalam perjalanan belajar Anda.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dark-700 rounded-full p-2 mr-4 mt-1">
                  <MessageSquare className="h-5 w-5 text-accent1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Diskusi Aktif</h3>
                  <p className="text-white/70">Tanyakan apapun tentang programming dan dapatkan jawaban dari para ahli dan sesama pembelajar.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-700 rounded-full p-2 mr-4 mt-1">
                  <Users className="h-5 w-5 text-accent2" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Dukungan Peer</h3>
                  <p className="text-white/70">Dapatkan motivasi dan dukungan dari rekan-rekan yang memiliki tujuan yang sama dengan Anda.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dark-700 rounded-full p-2 mr-4 mt-1">
                  <Share2 className="h-5 w-5 text-accent1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Resource Bermanfaat</h3>
                  <p className="text-white/70">Akses ke berbagai resource belajar, tutorial, dan alat yang akan mempercepat proses belajar Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
