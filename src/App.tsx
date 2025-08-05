import React from 'react';
import { BookOpen, Target, TrendingUp, Users, CheckCircle, Star, Download, Shield, Clock, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-75"></div>
                <BookOpen className="relative w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              O Caminho para
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Liberdade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme sua vida com mais de <strong className="text-white">70 páginas</strong> de conteúdo sobre organização financeira, equilíbrio de vida e desenvolvimento do mindset
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => window.open("https://go.hotmart.com/M99636716H?dp=1", "_blank")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Comprar Agora
              </button>
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-2" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-2" />
                <span>Download Imediato</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Author Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Por Vitor Bordão</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Especialista em desenvolvimento pessoal e financeiro, Vitor Bordão compartilha sua experiência 
              e conhecimento para ajudar pessoas a alcançarem a liberdade financeira e pessoal através de 
              estratégias práticas e mindset transformador.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conteúdo completo e prático para transformar sua relação com o dinheiro e sua vida
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Organização Financeira</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Como criar e manter um orçamento eficaz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Estratégias para eliminar dívidas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Planejamento financeiro de longo prazo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Investimentos para iniciantes</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equilíbrio de Vida</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Gestão eficaz do tempo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Como definir prioridades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Técnicas de produtividade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Equilíbrio trabalho-vida pessoal</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Desenvolvimento do Mindset</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mentalidade de abundância</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Superação de crenças limitantes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Desenvolvimento da disciplina</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Construção de hábitos positivos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que dizem nossos leitores
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Este ebook mudou completamente minha perspectiva sobre dinheiro. Em 3 meses consegui organizar minhas finanças e começar a investir."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Maria Silva</p>
                  <p className="text-gray-400 text-sm">Empresária</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Conteúdo prático e direto ao ponto. As estratégias de mindset me ajudaram a superar bloqueios que tinha há anos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <p className="text-white font-semibold">João Santos</p>
                  <p className="text-gray-400 text-sm">Consultor</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Recomendo para qualquer pessoa que queira ter controle sobre sua vida financeira. Linguagem clara e exemplos práticos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Ana Costa</p>
                  <p className="text-gray-400 text-sm">Professora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Invista no seu futuro
            </h2>
            <p className="text-xl text-gray-300">
              Acesso completo ao ebook por um preço especial
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
            <div className="relative text-center">
              <div className="mb-8">
                <div className="text-gray-400 text-lg mb-2">De R$ 97,00 por apenas</div>
                <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                  R$ <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">47</span>
                </div>
                <div className="text-gray-300 text-lg">Pagamento único • Acesso vitalício</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Mais de 70 páginas de conteúdo</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Download imediato após a compra</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Garantia de satisfação de 7 dias</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Suporte direto com o autor</span>
                </div>
              </div>
              
              <button
                onClick={() => window.open("https://go.hotmart.com/M99636716H?dp=1", "_blank")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Comprar Agora
              </button>
              
              <div className="mt-6 text-gray-400 text-sm">
                <Shield className="w-4 h-4 inline mr-2" />
                Pagamento 100% seguro via Hotmart
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Como recebo o ebook após a compra?</h3>
              <p className="text-gray-300">
                Após a confirmação do pagamento, você receberá um email com o link para download imediato do ebook em formato PDF.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Posso ler em qualquer dispositivo?</h3>
              <p className="text-gray-300">
                Sim! O ebook está em formato PDF e pode ser lido em computadores, tablets, smartphones e e-readers.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">Como funciona a garantia?</h3>
              <p className="text-gray-300">
                Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-3">O conteúdo é adequado para iniciantes?</h3>
              <p className="text-gray-300">
                Absolutamente! O ebook foi escrito de forma didática, sendo perfeito tanto para iniciantes quanto para quem já tem algum conhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comece sua jornada para a liberdade hoje
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Não deixe para amanhã a transformação que você pode começar hoje. 
            Sua liberdade financeira e pessoal está a um clique de distância.
          </p>
          <button
            onClick={() => window.open("https://go.hotmart.com/M99636716H?dp=1", "_blank")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Comprar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 O Caminho para Liberdade - Vitor Bordão. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}