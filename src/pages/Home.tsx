import { motion } from 'framer-motion'
import { useState } from 'react'

const Home = () => {
  const [showTimeline, setShowTimeline] = useState(false)

  const scrollToTimeline = () => {
    setShowTimeline(true)
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Nyx
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Empowering open-source and indie developers to create without limits.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button onClick={scrollToTimeline} className="btn-primary">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Open Source Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-300 mb-4">Description of open-source project 1</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-300 mb-4">Description of open-source project 2</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Project 3</h3>
              <p className="text-gray-300 mb-4">Description of open-source project 3</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Featured Indie Developers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <img src="/developer1.jpg" alt="Developer 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer 1</h3>
              <p className="text-gray-300">Bio of indie developer 1</p>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <img src="/developer2.jpg" alt="Developer 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer 2</h3>
              <p className="text-gray-300">Bio of indie developer 2</p>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <img src="/developer3.jpg" alt="Developer 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Developer 3</h3>
              <p className="text-gray-300">Bio of indie developer 3</p>
            </div>
          </div>
        </div>
      </section>

      {showTimeline && (
        <section id="timeline" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-title text-center"
            >
              Our Journey
            </motion.h2>

            <div className="relative mt-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-nyx-purple/50"></div>

              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nyx-purple"></div>
                  <div className="ml-auto w-5/12 pl-8">
                    <h3 className="text-2xl font-bold mb-2">April 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">Birth of Nyx</h4>
                      <p className="text-gray-400 mb-4">The beginning of a new era in software development</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Launch of Nyx as an open-source project</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Start of MoonIDE development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Formation of the initial development team</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nyx-pink"></div>
                  <div className="mr-auto w-5/12 pr-8">
                    <h3 className="text-2xl font-bold mb-2">July 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v1.0 - MVP</h4>
                      <p className="text-nyx-pink mb-4">First Public Release</p>
                      <p className="text-gray-400 mb-4">A new way to develop, smarter and more efficient</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Code editor with multi-language support</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Smart autocomplete with AI</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>GitHub integration (commit, push, clone)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Minimalist interface with integrated terminal</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Hybrid mode: local and cloud</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nyx-purple"></div>
                  <div className="ml-auto w-5/12 pl-8">
                    <h3 className="text-2xl font-bold mb-2">November 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v2.0 - Advanced AI</h4>
                      <p className="text-nyx-purple mb-4">Second Public Release</p>
                      <p className="text-gray-400 mb-4">AI becomes your development partner</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>AI-assisted debugging</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Automatic code review and PRs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Project generation via prompt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Persistent memory per project</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Plugin marketplace</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nyx-pink"></div>
                  <div className="mr-auto w-5/12 pr-8">
                    <h3 className="text-2xl font-bold mb-2">February 2026</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v3.0 - Deploy and Monitoring</h4>
                      <p className="text-nyx-pink mb-4">Third Public Release</p>
                      <p className="text-gray-400 mb-4">From development to production, all in one place</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Automated deploy assistant</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Secrets and configurations management</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Production monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Database integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Performance and log analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Home 