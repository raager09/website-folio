import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top grid: Portfolio + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portfolio Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 hover:bg-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Portfolio</h2>
            </div>

            <div className="space-y-4 text-lg">
              <p><span className="font-semibold">Name:</span> Raager</p>
              <p><span className="font-semibold">Location:</span> Alberta, Canada</p>
              <p><span className="font-semibold">Interests:</span> Tech, Coding, AI/ML</p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 hover:bg-white/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>

            <div className="space-y-6">
              {[
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 80 },
                { name: 'Node.js', level: 75 },
                { name: 'Python', level: 85 },
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

        {/* Experience Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border border-white/20 p-6 shadow-lg bg-white/10 backdrop-blur-md transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 hover:bg-white/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6h13M9 11V5h13M3 17h.01M3 11h.01M3 5h.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Frontend Developer',
                place: 'Freelance · 2022 – Present',
                desc: 'Building modern web applications with React, TypeScript, and Tailwind.',
              },
              {
                title: 'Backend Developer',
                place: 'Personal Projects · 2021 – 2022',
                desc: 'Experience with Node.js, Express, and API development.',
              },
              {
                title: 'AI/ML Enthusiast',
                place: 'Self-learning · Ongoing',
                desc: 'Exploring Python libraries like TensorFlow and PyTorch for machine learning.',
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="p-4 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-md"
              >
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-200">{job.place}</p>
                <p className="mt-2 text-gray-100">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
