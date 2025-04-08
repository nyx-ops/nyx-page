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
            Pequeno grupo codando por diversão, explorando novas tecnologias e criando sem limites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button onClick={scrollToTimeline} className="btn-primary">
              Conheça mais
            </button>
          </motion.div>
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
              Nossa Jornada
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
                    <h3 className="text-2xl font-bold mb-2">Abril 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">Nascimento da Nyx</h4>
                      <p className="text-gray-400 mb-4">O início de uma nova era no desenvolvimento de software</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Lançamento da Nyx como projeto open-source</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Início do desenvolvimento da MoonIDE</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Formação da equipe inicial de desenvolvimento</span>
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
                    <h3 className="text-2xl font-bold mb-2">Julho 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v1.0 - MVP</h4>
                      <p className="text-nyx-pink mb-4">Primeira Release Pública</p>
                      <p className="text-gray-400 mb-4">Uma nova forma de desenvolver, mais inteligente e eficiente</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Editor de código com suporte a múltiplas linguagens</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Autocomplete inteligente com IA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Integração com GitHub (commit, push, clone)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Interface minimalista com terminal integrado</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Modo híbrido: local e nuvem</span>
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
                    <h3 className="text-2xl font-bold mb-2">Novembro 2025</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v2.0 - IA Avançada</h4>
                      <p className="text-nyx-purple mb-4">Segunda Release Pública</p>
                      <p className="text-gray-400 mb-4">A IA se torna sua parceira de desenvolvimento</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Debug assistido por IA</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Revisão automática de código e PRs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Geração de projetos via prompt</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Memória persistente por projeto</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-purple mr-2">•</span>
                          <span>Marketplace de plugins</span>
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
                    <h3 className="text-2xl font-bold mb-2">Fevereiro 2026</h3>
                    <div className="bg-nyx-dark/50 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-4">MoonIDE v3.0 - Deploy e Monitoramento</h4>
                      <p className="text-nyx-pink mb-4">Terceira Release Pública</p>
                      <p className="text-gray-400 mb-4">Do desenvolvimento à produção, tudo em um só lugar</p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Assistente de deploy automatizado</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Gerenciamento de secrets e configurações</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Monitoramento de produção</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Integração com bancos de dados</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-nyx-pink mr-2">•</span>
                          <span>Análise de performance e logs</span>
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