import { motion } from 'framer-motion'

const Projects = () => {
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
            Nossos Projetos
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Projeto 1</h3>
              <p className="text-gray-300 mb-4">Descrição do projeto 1</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Projeto 2</h3>
              <p className="text-gray-300 mb-4">Descrição do projeto 2</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Projeto 3</h3>
              <p className="text-gray-300 mb-4">Descrição do projeto 3</p>
              <div className="flex space-x-4">
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">GitHub</a>
                <a href="#" className="text-nyx-purple hover:text-nyx-pink">Demo</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects 