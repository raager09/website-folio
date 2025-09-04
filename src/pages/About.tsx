import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* Bio Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md 
                       transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
                       hover:border-blue-400 hover:bg-white/20"
          >
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-3">
              Hi, I'm <span className="font-semibold">Aarmaan</span>, a 19-year-old developer from 
              Washington, USA. I'm interested in full-stack web development, AI/ML, and cybersecurity.
            </p>
            <p>Outside of coding, I enjoy tech, photography, and learning new things every day.</p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md 
                       transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
                       hover:border-blue-400 hover:bg-white/20"
          >
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-6">
              {[
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'Node.js', level: 75 },
                { name: 'Python', level: 85 },
                { name: 'JavaScript', level: 50 },
              ].map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all duration-500 hover:bg-blue-400"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md 
                     transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl 
                     hover:border-blue-400 hover:bg-white/20"
        >
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Portfolio Website',
                desc: 'This personal portfolio showcasing skills, projects, and experience.',
              },
              {
                title: 'AI/ML Projects',
                desc: 'Experiments with TensorFlow and PyTorch for computer vision and NLP.',
              },
              {
                title: 'Freelance Web Developer',
                desc: 'Building responsive websites for small businesses and individuals.',
              },
              {
                title: 'Retouch',
                desc: 'An upcoming AI-powered photo editor tailored for real estate photography.',
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-md"
              >
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-100">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
