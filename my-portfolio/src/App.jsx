import './App.css'

import { useState, useEffect } from 'react';
import { Camera, Link2, Mail, ChevronDown } from 'lucide-react';

const App = () => {
  const [isVisible, setIsVisible] = useState({
    about: false,
    experience: false,
    skills: false,
    projects: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
        <div className="text-center p-8">
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <p className="text-xl mb-6">Senior Software Developer</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Camera className="w-6 h-6" /> {/* Using Camera instead of GitHub */}
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Link2 className="w-6 h-6" /> {/* Using Link2 instead of LinkedIn */}
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-8 h-8" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate software developer with 6 years of experience specializing in React, AWS, and Docker. 
            I love building scalable applications and solving complex problems through elegant solutions.
            Throughout my career, I've worked with various companies, helping them achieve their technical goals
            and deliver high-quality software products.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-white">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.experience ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Senior Software Developer</h3>
              <p className="text-gray-600">TechCorp Inc. • 2021 - Present</p>
              <ul className="mt-2 text-gray-600 list-disc ml-4">
                <li>Led development of microservices using React and AWS</li>
                <li>Implemented CI/CD pipelines using Docker and Jenkins</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="text-gray-600">Innovation Labs • 2019 - 2021</p>
              <ul className="mt-2 text-gray-600 list-disc ml-4">
                <li>Developed and maintained React applications</li>
                <li>Implemented AWS services for scalable solutions</li>
                <li>Collaborated with cross-functional teams</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, TypeScript, Redux, HTML5, CSS3</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Express, RESTful APIs</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
              <p className="text-gray-600">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-white">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">A full-stack e-commerce solution built with React and AWS</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                View Project <Link2 className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cloud Management Dashboard</h3>
              <p className="text-gray-600 mb-4">AWS resource management tool with React frontend</p>
              <a href="#" className="text-blue-500 hover:text-blue-600 inline-flex items-center">
                View Project <Link2 className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p>© 2025 John Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Link2 className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;