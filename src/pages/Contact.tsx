import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title text-center"
          >
            Contato
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <div className="bg-nyx-dark/50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                      <span>🌐 Website</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                      <span>✨ GitHub</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                      <span>📡 Twitter</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Email</h3>
                  <p className="text-gray-300">nothing by now</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact 