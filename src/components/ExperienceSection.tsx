import React, { useState, useEffect } from 'react';

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeExp]);
  
  const handleExpChange = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setActiveExp(index);
    }, 300);
  };
  
  const experiences = [
    {
      company: "Kshema General Insurance Limited",
      position: "Member of Technical Staff",
      duration: "Feb 2023 - Present",
      appLinks: [
        { name: "Kshema", url: "#" },
        { name: "Smart CCE", url: "#" }
      ],
      responsibilities: [
        "Spearheading Android development projects using Ionic, Angular, Typescript, HTML, and SCSS.",
        "Leading the crop insurance Android project, implementing user-focused features.",
        "Designed and developed a Progressive Web APP (PWA) using Ionic, enhancing cross platform accessibility.",
        "Proficiently utilized Google Maps API to create interactive polygons, markers and layers.",
        "Developed a variety of applications and APKs using HTML, CSS, Capacitor and JavaScript.",
        "Conducted thorough bug fixes, enhancing application performance and user experience.",
        "Demonstrated proficiency in Git operations for version control.",
        "Configured the New Relic agent to collect data on application performance, including transaction tracing, error tracking, and metric collection.",
        "Currently leading the development of Kshema 2.0, utilizing React Native, Redux, Storybook, and React JS for web to build a scalable, high-performance application with a focus on modern UI/UX standards and maintainable code architecture."
      ]
    },
    {
      company: "Itus Insurance Brokers Pvt Ltd",
      position: "Trainee Executive (Internal transfer to Kshema general insurance limited)",
      duration: "Oct 2022 - Feb 2023",
      appLinks: [
        { name: "Bass", url: "#" }
      ],
      responsibilities: [
        "Developed responsive screens for various devices and screen sizes.",
        "Implemented validating user input, passing relevant data to the next page using query params, session storage, local storage or API calls."
      ]
    }
  ];

  return (
    <div className="text-gray-100 min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
          Professional Experience
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Timeline navigation */}
          <div className="md:col-span-1">
            <div className="flex md:flex-col gap-3">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  onClick={() => handleExpChange(index)}
                  className={`relative cursor-pointer group transition-all duration-500 ease-in-out transform ${
                    index === activeExp 
                      ? "border-l-4 border-purple-500 pl-4 scale-105" 
                      : "border-l-4 border-gray-700 pl-4 opacity-50 hover:opacity-80 hover:translate-x-1"
                  }`}
                >
                  <div className={`absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-900 border-4 ${
                    index === activeExp ? "border-purple-500 animate-ping" : "border-gray-700"
                  }`} style={{ animationDuration: '2s' }}></div>
                  <div className={`absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-gray-900 border-4 ${
                    index === activeExp ? "border-purple-500" : "border-gray-700"
                  }`}></div>
                  <p className="font-semibold text-lg group-hover:text-purple-400 transition-colors">{exp.company.split(' ')[0]}</p>
                  <p className="text-xs text-gray-400">{exp.duration}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Content area */}
          <div className={`md:col-span-4 bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-500 ease-in-out transform ${
            animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 relative overflow-hidden">
                  <span className={`block transition-all duration-500 transform ${
                    animate ? "translate-y-0" : "-translate-y-8 opacity-0"
                  }`}>{experiences[activeExp].company}</span>
                </h3>
                <p className={`text-purple-400 font-medium transition-all duration-500 delay-100 transform ${
                  animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>{experiences[activeExp].position}</p>
              </div>
              
              <div className={`mt-3 md:mt-0 transition-all duration-500 delay-200 transform ${
                animate ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}>
                <span className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm relative overflow-hidden group">
                  <span className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></span>
                  {experiences[activeExp].duration}
                </span>
              </div>
            </div>
            
            {experiences[activeExp].appLinks && (
              <div className={`flex flex-wrap gap-2 mb-6 transition-all duration-500 delay-300 transform ${
                animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
                {experiences[activeExp].appLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    className="inline-flex items-center text-sm bg-gray-900 text-blue-400 px-3 py-1.5 rounded-full hover:bg-gray-700 transition-all duration-300 group hover:scale-105 transform"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-all duration-300 transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {link.name}
                  </a>
                ))}
              </div>
            )}
            
            <div className="space-y-4">
              {experiences[activeExp].responsibilities.map((resp, i) => (
                <div 
                  key={i} 
                  className={`flex items-start group transition-all duration-500 transform ${
                    animate ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <div className="mr-3 mt-1.5 bg-purple-500 rounded-full p-1 flex items-center justify-center group-hover:scale-125 transition-all duration-300 transform">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-200">{resp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}