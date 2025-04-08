import { motion } from 'framer-motion'

const About = () => {
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
            About Nyx
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <p className="text-xl text-gray-300 mb-8">
              Nyx is a small group of passionate developers who love coding and exploring new technologies. We believe in the power of open-source and indie development to drive innovation and create amazing things.
            </p>
            
            <p className="text-xl text-gray-300 mb-8">
              Our mission is to empower developers around the world with the tools and resources they need to bring their ideas to life. We're building MoonIDE, an intelligent IDE powered by AI, to revolutionize the way we develop software.
            </p>
            
            <p className="text-xl text-gray-300 mb-8">
              At Nyx, we value collaboration, creativity, and pushing the boundaries of what's possible. We're excited to be on this journey and can't wait to see what the future holds.
            </p>
            
            <p className="text-xl text-gray-300">
              Join us in our mission to create without limits!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 