
import React from 'react';
import { Brain, BookOpen, Users, UserCheck, Code, Layers } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-12 w-12 text-accent1" />,
    title: "Belajar Konsep, Bukan Syntax",
    description: "Fokus pada pemahaman logika dan arsitektur, bukan menghafal syntax yang membingungkan."
  },
  {
    icon: <BookOpen className="h-12 w-12 text-accent2" />,
    title: "Pembelajaran Visual",
    description: "Materi visual interaktif yang memudahkan pemahaman konsep programming yang kompleks."
  },
  {
    icon: <Users className="h-12 w-12 text-accent1" />,
    title: "Komunitas Supportif",
    description: "Bergabung dengan komunitas yang selalu siap membantu proses belajar Anda."
  },
  {
    icon: <Code className="h-12 w-12 text-accent2" />,
    title: "Tanpa Coding Kompleks",
    description: "Metode belajar yang meminimalisir penulisan kode rumit namun tetap memaksimalkan pemahaman."
  },
  {
    icon: <UserCheck className="h-12 w-12 text-accent1" />,
    title: "Bimbingan Expert",
    description: "Dibimbing langsung oleh praktisi berpengalaman di industri programming."
  },
  {
    icon: <Layers className="h-12 w-12 text-accent2" />,
    title: "Proyek Praktis",
    description: "Pelajari melalui proyek nyata yang bisa langsung diimplementasikan."
  }
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fitur <span className="gradient-text">Pembelajaran</span> Unik
          </h2>
          <p className="text-lg text-white/70">
            Metode pembelajaran yang dirancang khusus untuk memudahkan Anda memahami dunia programming tanpa perlu berjam-jam menulis kode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-gradient p-6 rounded-xl hover-scale"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
