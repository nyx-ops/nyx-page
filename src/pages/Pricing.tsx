import { motion } from 'framer-motion'

const Pricing = () => {
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
            Pricing
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">$20</p>
              <p className="text-gray-300 mb-4">Single Page Application</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Basic Animations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>1 Revision</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Standard</h3>
              <p className="text-4xl font-bold mb-4">$50</p>
              <p className="text-gray-300 mb-4">Multi-Page Application</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Advanced Animations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>3 Revisions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Basic SEO Optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-nyx-dark/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-4">$100</p>
              <p className="text-gray-300 mb-4">Custom Web Application</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Custom Animations</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Unlimited Revisions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Advanced SEO Optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-nyx-purple mr-2">✓</span>
                  <span>Backend Integration</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing 