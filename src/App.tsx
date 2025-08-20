import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  DollarSign, 
  Brain, 
  Heart, 
  Target, 
  Users, 
  CheckCircle, 
  Star,
  Download,
  Lock,
  Clock,
  TrendingUp,
  Zap,
  Gift,
  Shield,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Rocket,
  Trophy
} from 'lucide-react';

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const purchaseLink = "https://pay.hotmart.com/M99636716H";

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-emerald-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Vitor Bordão
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre')} className="hover:text-emerald-400 transition-colors">
                Sobre o Ebook
              </button>
              <button onClick={() => scrollToSection('conteudo')} className="hover:text-emerald-400 transition-colors">
                Conteúdo
              </button>
              <button onClick={() => scrollToSection('autor')} className="hover:text-emerald-400 transition-colors">
                Autor
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="hover:text-emerald-400 transition-colors">
                Depoimentos
              </button>
            </nav>
            <a 
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-300">Mais de 70 páginas de conteúdo</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    O Caminho para
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Liberdade
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transforme sua vida financeira, encontre o equilíbrio perfeito, domine seu mindset e 
                  descubra o caminho para uma vida de abundância e realização pessoal.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Baixar Agora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">4.9/5 (2.847 avaliações)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300">+15.000 vidas transformadas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pessoa celebrando sucesso financeiro"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Sua Transformação Começa Aqui
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Organização financeira completa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Equilíbrio vida pessoal e profissional</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Mindset de abundância</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">Novo rumo para sua vida</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Ebook */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Mais de 70 Páginas
              </span>
              <br />
              <span className="text-white">de Transformação Real</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Um guia completo e prático que vai revolucionar sua relação com o dinheiro, 
              sua vida pessoal e seu potencial interior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Organização Financeira</h3>
              <p className="text-gray-300 leading-relaxed">
                Aprenda a controlar suas finanças, criar orçamentos eficazes e construir 
                uma base sólida para sua independência financeira.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Equilíbrio de Vida</h3>
              <p className="text-gray-300 leading-relaxed">
                Descubra como balancear trabalho, família, saúde e lazer para uma vida 
                plena e harmoniosa em todas as áreas.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Domínio do Mindset</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforme sua mentalidade, elimine crenças limitantes e desenvolva 
                uma mente próspera e focada no sucesso.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Novo Rumo de Vida</h3>
              <p className="text-gray-300 leading-relaxed">
                Defina objetivos claros, crie um plano de ação eficaz e tome as 
                rédeas do seu destino com confiança e determinação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Detalhado */}
      <section id="conteudo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">O Que Você Vai</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Descobrir Dentro
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada capítulo foi cuidadosamente desenvolvido para sua transformação completa
            </p>
          </div>

          <div className="space-y-12">
            {/* Módulo 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Fundamentos da Organização Financeira</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Aprenda os pilares essenciais para uma vida financeira saudável. Descubra como 
                  criar um orçamento que funciona, controlar gastos e estabelecer metas financeiras realistas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Como criar um orçamento pessoal eficaz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Técnicas para controlar gastos desnecessários</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Estratégias de poupança e investimento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Planejamento financeiro de longo prazo</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Gráficos financeiros coloridos"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pessoa em ambiente harmonioso"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Equilíbrio e Harmonia Pessoal</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Descubra como criar uma vida equilibrada entre trabalho, família, saúde e lazer. 
                  Aprenda técnicas práticas para gerenciar seu tempo e energia de forma eficiente.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Gestão eficaz do tempo e prioridades</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Técnicas de relaxamento e bem-estar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Como manter relacionamentos saudáveis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Estratégias para reduzir o estresse</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Transformação do Mindset</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Reprograme sua mente para o sucesso. Elimine crenças limitantes, desenvolva 
                  autoconfiança e cultive uma mentalidade de abundância e crescimento.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Identificação e eliminação de crenças limitantes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Desenvolvimento da autoconfiança</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Técnicas de visualização e manifestação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Criação de hábitos positivos duradouros</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cérebro com conexões neurais coloridas"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Módulo 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Pessoa no topo da montanha"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="space-y-6 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Definindo Seu Novo Rumo</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Crie um plano de ação concreto para sua nova vida. Defina objetivos claros, 
                  estabeleça metas alcançáveis e desenvolva a disciplina necessária para o sucesso.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Definição de objetivos SMART</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Criação de planos de ação eficazes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Desenvolvimento da disciplina e persistência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                    <span className="text-gray-300">Estratégias para superar obstáculos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center animate-bounce">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-white">Sua Transformação</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Começa Agora!
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Não deixe mais um dia passar sem tomar o controle da sua vida. 
              Milhares de pessoas já transformaram suas vidas com este ebook.
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 line-through text-lg">De R$ 97,00</span>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 px-3 py-1 rounded-full">
                    <span className="text-white font-bold text-sm">50% OFF</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    R$ 39
                  </span>
                  <span className="text-gray-300 text-lg">,90</span>
                </div>
                <p className="text-gray-400 text-sm">Oferta por tempo limitado</p>
              </div>
            </div>

            <a 
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              <span className="flex items-center justify-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Quero Transformar Minha Vida</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <div className="flex items-center justify-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Garantia de 30 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Pagamento seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">Download imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Autor */}
      <section id="autor" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-white">Conheça</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Vitor Bordão
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Especialista em transformação pessoal e desenvolvimento humano, com mais de 10 anos 
                  de experiência ajudando pessoas a alcançarem sua liberdade financeira e pessoal.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Mais de 15.000 Vidas Transformadas</h3>
                    <p className="text-gray-300">
                      Através de seus métodos comprovados, Vitor já ajudou milhares de pessoas a 
                      conquistarem sua independência financeira e equilíbrio pessoal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Especialista em Mindset</h3>
                    <p className="text-gray-300">
                      Formado em Psicologia e especialista em desenvolvimento de mindset de abundância 
                      e transformação de crenças limitantes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Consultor Financeiro Certificado</h3>
                    <p className="text-gray-300">
                      Certificado em planejamento financeiro pessoal e estratégias de investimento, 
                      com foco em educação financeira prática.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  Minha missão é simples: ajudar você a descobrir seu potencial máximo e criar 
                  uma vida de abundância, equilíbrio e realização. Cada página deste ebook foi 
                  escrita pensando na sua transformação real.
                </p>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">VB</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Vitor Bordão</p>
                    <p className="text-gray-400 text-sm">Autor e Mentor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Vitor Bordão - Autor do ebook"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">O Que Dizem Quem</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Já Se Transformou
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Histórias reais de pessoas que mudaram suas vidas com "O Caminho para Liberdade"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Em apenas 3 meses aplicando os métodos do Vitor, consegui quitar todas as minhas 
                dívidas e ainda criar uma reserva de emergência. Minha vida financeira nunca esteve tão organizada!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Maria Clara</p>
                  <p className="text-gray-400 text-sm">Empresária, São Paulo</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                O capítulo sobre mindset mudou completamente minha perspectiva. Hoje tenho uma mentalidade 
                de abundância e meus resultados melhoraram em todas as áreas da vida.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Roberto Silva</p>
                  <p className="text-gray-400 text-sm">Consultor, Rio de Janeiro</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Finalmente encontrei o equilíbrio entre trabalho e vida pessoal. As técnicas de gestão 
                de tempo do ebook são simplesmente revolucionárias!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AF</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Ana Fernandes</p>
                  <p className="text-gray-400 text-sm">Advogada, Belo Horizonte</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Saí de uma situação de desespero financeiro para ter minha própria empresa em 8 meses. 
                Este ebook literalmente salvou minha vida!
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">CS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Carlos Santos</p>
                  <p className="text-gray-400 text-sm">Empreendedor, Brasília</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As estratégias de investimento me ajudaram a multiplicar minha renda. Hoje tenho 
                múltiplas fontes de renda passiva graças aos ensinamentos do Vitor.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">LP</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Luciana Pereira</p>
                  <p className="text-gray-400 text-sm">Investidora, Curitiba</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Meu casamento estava em crise por causa do estresse financeiro. Hoje somos mais unidos 
                que nunca e nossa situação financeira está estável.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div>
                  <p className="text-white font-semibold">João Martins</p>
                  <p className="text-gray-400 text-sm">Professor, Salvador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Garantia Total
              </span>
              <br />
              <span className="text-white">de 30 Dias</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Estamos tão confiantes na qualidade do nosso conteúdo que oferecemos uma garantia 
              incondicional de 30 dias. Se você não ficar completamente satisfeito, devolvemos 
              100% do seu dinheiro, sem perguntas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">30 Dias Completos</h3>
                <p className="text-gray-300">
                  Você tem um mês inteiro para testar todos os métodos e técnicas do ebook.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <Gift className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Sem Perguntas</h3>
                <p className="text-gray-300">
                  Se não ficar satisfeito por qualquer motivo, devolvemos seu dinheiro imediatamente.
                </p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Reembolso Rápido</h3>
                <p className="text-gray-300">
                  Processamos reembolsos em até 24 horas após a solicitação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Perguntas</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre o ebook "O Caminho para Liberdade"
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Como recebo o ebook após a compra?",
                answer: "Após a confirmação do pagamento, você receberá imediatamente um email com o link para download do ebook em formato PDF. O processo é 100% digital e instantâneo."
              },
              {
                question: "O ebook funciona para qualquer situação financeira?",
                answer: "Sim! O conteúdo foi desenvolvido para pessoas em diferentes situações financeiras, desde quem está começando do zero até quem já tem alguma organização mas quer melhorar seus resultados."
              },
              {
                question: "Preciso de conhecimento prévio em finanças?",
                answer: "Não é necessário nenhum conhecimento prévio. O ebook foi escrito em linguagem simples e didática, com exemplos práticos que qualquer pessoa pode entender e aplicar."
              },
              {
                question: "Quanto tempo leva para ver resultados?",
                answer: "Os primeiros resultados podem ser percebidos já nas primeiras semanas de aplicação. No entanto, para uma transformação completa, recomendamos seguir o método por pelo menos 90 dias."
              },
              {
                question: "Posso imprimir o ebook?",
                answer: "Sim, você pode imprimir o ebook para sua conveniência. O arquivo PDF permite impressão em alta qualidade para que você possa estudar offline."
              },
              {
                question: "E se eu não ficar satisfeito?",
                answer: "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-white">Não Espere Mais!</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Sua Liberdade Te Espera
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cada dia que passa sem ação é um dia a menos na sua jornada para a liberdade. 
              Junte-se às milhares de pessoas que já transformaram suas vidas.
            </p>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Clock className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-bold text-lg">Oferta por tempo limitado!</span>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    R$ 47
                  </span>
                  <span className="text-gray-300 text-lg">,00</span>
                </div>
                <p className="text-gray-400 text-sm">Menos que o preço de um jantar</p>
              </div>
            </div>

            <a 
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 animate-pulse"
            >
              <span className="flex items-center justify-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Começar Minha Transformação Agora</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Ao clicar no botão acima, você será redirecionado para nossa página de pagamento seguro. 
              Após a confirmação, receberá o ebook imediatamente em seu email.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-emerald-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Vitor Bordão
                </span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através da educação financeira e desenvolvimento pessoal.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Links Úteis</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('sobre')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Sobre o Ebook
                </button>
                <button onClick={() => scrollToSection('conteudo')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Conteúdo
                </button>
                <button onClick={() => scrollToSection('autor')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Sobre o Autor
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="block text-gray-400 hover:text-emerald-400 transition-colors">
                  Depoimentos
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contato</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400">contato@vitorbordao.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-400">Garantia de 30 dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Vitor Bordão. Todos os direitos reservados. | 
              <span className="text-emerald-400"> O Caminho para Liberdade</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
