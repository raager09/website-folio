import { BackgroundManager } from '@/components/BackgroundManager';
import { Navigation } from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen p-8 text-black">
      <div className="max-w-4xl mx-auto">
        {/* Content section with blur background */}
        <div className="content-section">
          {/* Title with fade-up animation */}
          <h1 className="animate-fade-up text-4xl font-bold text-center mb-8">
            About Me
          </h1>
          
          {/* About paragraphs with staggered delays */}
          <div className="space-y-6 mb-12">
            <p className="animate-fade-up-delay-1 text-lg leading-relaxed">
              Hey there! I'm a passionate developer and tech enthusiast from Alberta, Canada. I 
              love exploring new technologies, building cool projects, and sharing knowledge with 
              the community.
            </p>
            
            <p className="animate-fade-up-delay-2 text-lg leading-relaxed">
              When I'm not coding, you can find me diving deep into the latest tech trends, 
              contributing to open source projects, or just nerding out about the latest 
              developments in web development and software engineering.
            </p>
            
            <p className="animate-fade-up-delay-3 text-lg leading-relaxed">
              I believe in the power of technology to solve real-world problems and create 
              meaningful connections between people. That's what drives me to keep learning and 
              building every day.
            </p>
          </div>
          
          {/* Skills section */}
          <div className="animate-fade-up-delay-4">
            <h2 className="text-2xl font-bold text-center mb-6">
              Skills & Interests
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                React
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                TypeScript
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                Node.js
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                Python
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                Docker
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                AWS
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                Web3
              </span>
              <span className="animate-tech-tag tech-tag-blur px-4 py-2 rounded-full text-sm">
                AI/ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
