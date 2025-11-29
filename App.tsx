import React from 'react';
import { DemoSection } from './components/DemoSection';
import { 
  Rocket, 
  Target, 
  Users, 
  Code, 
  Cpu, 
  Layers, 
  Calendar, 
  CheckCircle2, 
  Lightbulb, 
  AlertTriangle, 
  ArrowRight,
  Github,
  Linkedin,
  Database,
  BrainCircuit,
  Smartphone
} from 'lucide-react';

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-950">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span>SUMLY <span className="text-xs font-normal text-slate-500 ml-1 bg-slate-100 px-2 py-0.5 rounded-full">MVP</span></span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('problem')} className="hover:text-indigo-600 transition-colors">Проблема</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-indigo-600 transition-colors">Решение</button>
            <button onClick={() => scrollToSection('tech')} className="hover:text-indigo-600 transition-colors">Технологии</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-indigo-600 transition-colors">Roadmap</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-indigo-600 transition-colors">Команда</button>
          </div>
          <button 
            onClick={() => scrollToSection('demo')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors"
          >
            Live Demo
          </button>
        </div>
      </nav>

      {/* 1. HERO: Idea Pitch */}
      <header className="pt-32 pb-16 lg:pt-48 lg:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Hackathon Submission 2025
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
             Финансовая грамотность через <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Generative AI</span>
           </h1>
           <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
             SUMLY автоматизирует учет расходов в Узбекистане, превращая чеки и голосовые заметки в аналитику за 3 секунды с помощью Google Gemini 2.5.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-2xl font-bold text-indigo-600">~15%</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Potential Savings</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-2xl font-bold text-indigo-600">&lt;3 sec</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Entry Time</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-2xl font-bold text-indigo-600">95%</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">OCR Accuracy</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-2xl font-bold text-indigo-600">MVP</div>
                <div className="text-xs text-slate-500 uppercase font-semibold mt-1">Current Stage</div>
              </div>
           </div>
        </div>
      </header>

      {/* 2. PROBLEM & SOLUTION */}
      <section id="problem" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Problem */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Проблема</h2>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">
                Почему люди бросают учет финансов через 3 дня?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></div>
                  <p className="text-slate-600"><strong>Ручной ввод утомляет:</strong> Переносить данные из чеков Korzinka/Makro в Excel долго и скучно.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></div>
                  <p className="text-slate-600"><strong>Отсутствие контекста:</strong> Общая сумма "Продукты - 500,000" не говорит, сколько потрачено на вредные снеки, а сколько на мясо.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5"></div>
                  <p className="text-slate-600"><strong>Культура наличных:</strong> В Узбекистане много трат на базарах и в такси, где нет цифрового следа.</p>
                </li>
              </ul>
            </div>

            {/* Solution */}
            <div id="solution" className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0"></div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                      <Lightbulb size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Решение</h2>
                  </div>
                  <p className="text-lg text-slate-600">
                    Мобильное приложение <strong>(Android/Flutter)</strong> с интеграцией <strong>Google Gemini 2.5 Flash</strong> для мгновенной обработки неструктурированных данных.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <Smartphone className="text-indigo-600 mb-2" size={24} />
                        <h4 className="font-bold text-slate-900">Scan & Go</h4>
                        <p className="text-xs text-slate-500 mt-1">Фото чека -> JSON детализация</p>
                     </div>
                     <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <BrainCircuit className="text-indigo-600 mb-2" size={24} />
                        <h4 className="font-bold text-slate-900">AI Coach</h4>
                        <p className="text-xs text-slate-500 mt-1">Персонализированные советы</p>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PROTOTYPE / DEMO */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">MVP Прототип</h2>
              <p className="text-slate-600 mt-2">Работающая модель на базе Google Gemini API. Попробуйте прямо сейчас.</p>
           </div>
           
           <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              <div className="flex-1 max-w-lg">
                 <DemoSection />
              </div>
              <div className="flex-1 max-w-lg space-y-6">
                 <h3 className="text-xl font-bold text-indigo-900">Как это работает "под капотом":</h3>
                 <ol className="space-y-6 relative border-l-2 border-indigo-100 ml-3">
                    <li className="pl-6 relative">
                       <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></span>
                       <h4 className="font-bold text-slate-900">Input Processing</h4>
                       <p className="text-sm text-slate-600 mt-1">Пользователь отправляет текст, аудио или фото. React конвертирует это в промпт.</p>
                    </li>
                    <li className="pl-6 relative">
                       <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-400 border-4 border-white"></span>
                       <h4 className="font-bold text-slate-900">Gemini 2.5 Analysis</h4>
                       <p className="text-sm text-slate-600 mt-1">Модель извлекает сущности (Товар, Цена, Категория) и игнорирует шум, используя <code>responseSchema</code> для чистого JSON.</p>
                    </li>
                    <li className="pl-6 relative">
                       <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-200 border-4 border-white"></span>
                       <h4 className="font-bold text-slate-900">Insight Generation</h4>
                       <p className="text-sm text-slate-600 mt-1">На основе контекста (Узбекистан) генерируется совет по экономии (например, сравнение цен на базаре и в маркете).</p>
                    </li>
                 </ol>
              </div>
           </div>
        </div>
      </section>

      {/* 4. TECH STACK & IMPLEMENTATION */}
      <section id="tech" className="py-20 bg-slate-900 text-white">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">План реализации и стек</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4 text-indigo-400">
                     <Layers size={24} />
                     <h3 className="font-bold text-lg">Mobile App (Android)</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                     <li>• <strong>Flutter (Dart)</strong></li>
                     <li>• BLoC (State Management)</li>
                     <li>• Material Design 3</li>
                     <li>• Google ML Kit (OCR)</li>
                  </ul>
               </div>

               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4 text-purple-400">
                     <BrainCircuit size={24} />
                     <h3 className="font-bold text-lg">AI & Backend</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                     <li>• <strong>Google GenAI SDK</strong></li>
                     <li>• Model: <code>gemini-2.5-flash</code> (Speed)</li>
                     <li>• Model: <code>gemini-pro</code> (Complex Analytics)</li>
                     <li>• Firebase / Supabase (Auth & DB)</li>
                  </ul>
               </div>

               <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-3 mb-4 text-green-400">
                     <Cpu size={24} />
                     <h3 className="font-bold text-lg">Integrations</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                     <li>• Web Speech API (Voice Input)</li>
                     <li>• Camera API (Scanning)</li>
                     <li>• Telegram Bot API (Alternative interface)</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 5. ROADMAP */}
      <section id="roadmap" className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Дорожная карта проекта</h2>
            
            <div className="max-w-4xl mx-auto">
               <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:pl-0 space-y-12">
                  
                  {/* Item 1 */}
                  <div className="md:flex items-center justify-between group">
                     <div className="hidden md:block w-5/12 text-right pr-8">
                        <h4 className="text-xl font-bold text-slate-900">Идея & Ресерч</h4>
                        <p className="text-slate-500 text-sm mt-1">Анализ проблем пользователей, CustDev, формирование гипотез.</p>
                     </div>
                     <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-slate-300 border-4 border-white group-hover:bg-green-500 transition-colors"></div>
                     <div className="md:hidden pl-8 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ноябрь 1-25</span>
                        <h4 className="text-xl font-bold text-slate-900">Идея & Ресерч</h4>
                     </div>
                     <div className="w-full md:w-5/12 pl-8 md:pl-8">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ноябрь 1-25</span>
                        <p className="md:hidden text-slate-500 text-sm mt-1">Анализ проблем пользователей, CustDev.</p>
                     </div>
                  </div>

                  {/* Item 2 - Current */}
                  <div className="md:flex items-center justify-between group">
                     <div className="hidden md:block w-5/12 text-right pr-8">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Ноябрь 26-30 (Сейчас)</span>
                     </div>
                     <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-lg shadow-indigo-200"></div>
                     <div className="md:hidden pl-8 mb-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Ноябрь 26-30</span>
                        <h4 className="text-xl font-bold text-indigo-900">MVP & Hackathon</h4>
                     </div>
                     <div className="w-full md:w-5/12 pl-8 md:pl-8">
                        <h4 className="hidden md:block text-xl font-bold text-indigo-900">MVP & Hackathon</h4>
                        <p className="text-slate-600 text-sm mt-1">Разработка ядра на Gemini API, создание <strong>Android приложения (Flutter)</strong>, демо-стенд.</p>
                     </div>
                  </div>

                  {/* Item 3 */}
                  <div className="md:flex items-center justify-between group">
                     <div className="hidden md:block w-5/12 text-right pr-8">
                        <h4 className="text-xl font-bold text-slate-900">Бета-тест</h4>
                        <p className="text-slate-500 text-sm mt-1">Запуск на 100 пользователей, интеграция Telegram бота.</p>
                     </div>
                     <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-slate-200 border-4 border-white"></div>
                     <div className="md:hidden pl-8 mb-2">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Декабрь 2025</span>
                        <h4 className="text-xl font-bold text-slate-900">Бета-тест</h4>
                     </div>
                     <div className="w-full md:w-5/12 pl-8 md:pl-8">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Декабрь 2025</span>
                     </div>
                  </div>

                  {/* Item 4 */}
                  <div className="md:flex items-center justify-between group">
                     <div className="hidden md:block w-5/12 text-right pr-8">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">2026</span>
                     </div>
                     <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-slate-200 border-4 border-white"></div>
                     <div className="md:hidden pl-8 mb-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">2026</span>
                        <h4 className="text-xl font-bold text-slate-900">Релиз & Масштабирование</h4>
                     </div>
                     <div className="w-full md:w-5/12 pl-8 md:pl-8">
                        <h4 className="hidden md:block text-xl font-bold text-slate-900">Релиз & Масштабирование</h4>
                        <p className="text-slate-500 text-sm mt-1">Выход в AppStore/Google Play, монетизация (Freemium).</p>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* 6. TEAM */}
      <section id="team" className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Наша Команда</h2>
            <div className="max-w-3xl mx-auto mb-10 text-center text-slate-600">
               <p>Мы объединяем экспертизу в финтехе и современную AI-разработку, чтобы решить проблему финансовой грамотности.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               
               {/* Member 1 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Мухаммадсаид</h3>
                  <div className="text-indigo-600 text-sm font-medium mb-3">Fullstack Dev & Team Lead</div>
                  <p className="text-xs text-slate-500 mb-4">Архитектура, React, интеграция API.</p>
                  <div className="flex justify-center gap-3">
                     <Github size={18} className="text-slate-400 hover:text-slate-800 cursor-pointer" />
                     <Linkedin size={18} className="text-slate-400 hover:text-indigo-600 cursor-pointer" />
                  </div>
               </div>

               {/* Member 2 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Азамат</h3>
                  <div className="text-indigo-600 text-sm font-medium mb-3">AI Engineer</div>
                  <p className="text-xs text-slate-500 mb-4">Настройка Gemini, RAG, обработка данных.</p>
                  <div className="flex justify-center gap-3">
                     <Github size={18} className="text-slate-400 hover:text-slate-800 cursor-pointer" />
                     <Linkedin size={18} className="text-slate-400 hover:text-indigo-600 cursor-pointer" />
                  </div>
               </div>

               {/* Member 3 */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jonas" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Шерзод</h3>
                  <div className="text-indigo-600 text-sm font-medium mb-3">Product Manager</div>
                  <p className="text-xs text-slate-500 mb-4">Strategy, Design, Marketing.</p>
                  <div className="flex justify-center gap-3">
                     <Github size={18} className="text-slate-400 hover:text-slate-800 cursor-pointer" />
                     <Linkedin size={18} className="text-slate-400 hover:text-indigo-600 cursor-pointer" />
                  </div>
               </div>

            </div>

            {/* Why Us */}
            <div className="mt-16 bg-indigo-50 rounded-2xl p-8 border border-indigo-100 text-center max-w-4xl mx-auto">
               <h3 className="text-xl font-bold text-indigo-900 mb-4">Почему мы справимся?</h3>
               <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex gap-3">
                     <CheckCircle2 className="text-indigo-600 shrink-0" />
                     <span className="text-indigo-800 text-sm">Глубокое понимание локального рынка (Узбекистан) и проблем пользователей.</span>
                  </div>
                  <div className="flex gap-3">
                     <CheckCircle2 className="text-indigo-600 shrink-0" />
                     <span className="text-indigo-800 text-sm">Опыт работы с LLM и GenAI (Google Gemini, OpenAI).</span>
                  </div>
                  <div className="flex gap-3">
                     <CheckCircle2 className="text-indigo-600 shrink-0" />
                     <span className="text-indigo-800 text-sm">Готовый MVP, который уже выполняет основную функцию.</span>
                  </div>
                  <div className="flex gap-3">
                     <CheckCircle2 className="text-indigo-600 shrink-0" />
                     <span className="text-indigo-800 text-sm">Сбалансированная команда (Tech + Product).</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 border-t border-slate-800">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
               <div className="font-bold text-white text-xl">SUMLY</div>
               <p className="text-xs mt-2">Hackathon Prototype.</p>
            </div>
            <div className="text-sm text-center md:text-right">
               <p>&copy; 2025 SUMLY. Все права не защищены (Open Source MVP).</p>
               <p className="mt-1">Built with React & Google Gemini (Demo Site).</p>
            </div>
         </div>
      </footer>

    </div>
  );
}