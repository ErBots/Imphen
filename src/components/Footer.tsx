
import React from 'react';
import { Button } from "@/components/ui/button";
import { FacebookIcon, Twitter, Instagram, Youtube, Send, Mail, Phone, User } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8 border-t border-dark-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold gradient-text">Imphen</span>
            </div>
            <p className="text-white/70 mb-6">
              Platform pembelajaran programming revolusioner yang membantu Anda menjadi programmer handal tanpa perlu ngoding rumit. Anti pusing sama syntax error!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/groups/programmerhandal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-700 p-2 rounded-full hover:bg-dark-600 transition-colors"
                aria-label="Facebook Group"
              >
                <FacebookIcon className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://fb.com/rikoyuanpradika" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-700 p-2 rounded-full hover:bg-dark-600 transition-colors"
                aria-label="Facebook Profile"
              >
                <User className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://wa.me/6285701699102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-dark-700 p-2 rounded-full hover:bg-dark-600 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:hub@erdev.biz.id" 
                className="bg-dark-700 p-2 rounded-full hover:bg-dark-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Navigasi</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#community" className="text-white/70 hover:text-white transition-colors">Komunitas</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="text-white/70 flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:hub@erdev.biz.id" className="hover:text-white transition-colors">hub@erdev.biz.id</a>
              </li>
              <li className="text-white/70 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="https://wa.me/6285701699102" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+62 857 0169 9102</a>
              </li>
              <li className="text-white/70 flex items-center">
                <FacebookIcon className="h-4 w-4 mr-2" />
                <a href="https://fb.com/rikoyuanpradika" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">fb.com/rikoyuanpradika</a>
              </li>
              <li className="text-white/70">Jakarta, Indonesia</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Berlangganan</h3>
            <p className="text-white/70 mb-4">
              Dapatkan update terbaru tentang cara jadi programmer handal tanpa pusing syntax error!
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="bg-dark-700 border border-dark-600 text-white rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-accent1 w-full"
              />
              <Button className="bg-accent1 hover:bg-accent1/90 text-white rounded-l-none">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-white/50 text-xs mt-2 italic">
              *Kami tidak akan mengirimkan kode rumit ke email Anda
            </p>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; 2025 Imphen. Semua hak cipta dilindungi undang-undang. <span className="italic">Ngoding? Tidak Perlu!</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
