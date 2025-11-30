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
  Smartphone,
  Sparkles,
  PlayCircle,
  Zap,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  PieChart
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
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-950 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              S
            </div>
            <span>SUMLY <span className="text-[10px] font-bold uppercase text-indigo-500 ml-1 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100 align-middle">Beta</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('problem')} className="hover:text-indigo-600 transition-colors">Проблема</button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-indigo-600 transition-colors">Решение</button>
            <button onClick={() => scrollToSection('tech')} className="hover:text-indigo-600 transition-colors">Технологии</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-indigo-600 transition-colors">Команда</button>
          </div>
          <button 
            onClick={() => scrollToSection('hero-demo')}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-full transition-all hover:shadow-lg hover:shadow-indigo-200 active:scale-95"
          >
            Попробовать Demo
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <header id="hero" className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Left Column: Copy */}
              <div className="flex-1 text-center lg:text-left z-10 max-w-2xl mx-auto lg:mx-0">
                 
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-600 text-xs font-bold uppercase tracking-wide mb-8 animate-fade-in-up">
                    <Sparkles size={14} className="fill-indigo-100" />
                    <span>Hackathon AI500 Submission</span>
                 </div>

                 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.15]">
                   Умный учет финансов <br className="hidden lg:block"/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600">без скучных таблиц</span>
                 </h1>

                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   SUMLY — это ваш персональный AI-бухгалтер. Сфотографируйте чек или скажите траты голосом — нейросеть мгновенно разложит всё по категориям и подскажет, как сэкономить.
                 </p>

                 <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                    <button 
                      onClick={() => scrollToSection('hero-demo')} 
                      className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
                    >
                       <Zap size={20} />
                       Запустить Демо
                    </button>
                    <button 
                      onClick={() => scrollToSection('problem')} 
                      className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                       <PlayCircle size={20} />
                       Как это работает
                    </button>
                 </div>
                 
                 {/* Trust Indicators */}
                 <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500">
                    <div className="flex items-center gap-2 text-sm font-medium">
                       <CheckCircle2 size={16} className="text-green-500" />
                       <span>Gemini 2.5 Flash</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                       <CheckCircle2 size={16} className="text-green-500" />
                       <span>Распознавание чеков</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                       <CheckCircle2 size={16} className="text-green-500" />
                       <span>Голосовой ввод</span>
                    </div>
                 </div>
              </div>

              {/* Right Column: Demo App Preview */}
              <div id="hero-demo" className="flex-1 w-full max-w-[420px] lg:max-w-md relative mx-auto">
                 {/* Decorative blobs behind phone */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
                 
                 {/* The App Interface */}
                 <div className="relative transform transition-all duration-500 hover:scale-[1.02]">
                    <DemoSection />
                    
                    {/* Floating Badge 1 */}
                    <div className="absolute -right-4 top-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:3s]">
                       <div className="bg-green-100 p-2 rounded-lg text-green-600">
                          <TrendingUp size={20} />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 font-medium">Экономия</div>
                          <div className="text-sm font-bold text-slate-900">+150,000 UZS</div>
                       </div>
                    </div>

                    {/* Floating Badge 2 */}
                    <div className="absolute -left-8 bottom-32 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce [animation-duration:4s] [animation-delay:1s]">
                       <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                          <PieChart size={20} />
                       </div>
                       <div>
                          <div className="text-xs text-slate-500 font-medium">Анализ трат</div>
                          <div className="text-sm font-bold text-slate-900">Мгновенно</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </header>

      {/* 2. PROBLEM SECTION */}
      <section id="problem" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          
          {/* New Philosophical Intro */}
          <div className="max-w-4xl mx-auto text-center mb-20">
             <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
               У денег есть подлое свойство — <br/>
               <span className="text-indigo-900">они исчезают там, где нет внимания.</span>
             </h2>
             <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
               Мы часто бросаем учет, потому что возиться с чеками и таблицами — это адская скука, но именно здесь захлопывается ловушка.
             </p>
             <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white border border-red-100 px-6 py-5 rounded-xl shadow-sm">
                   <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
                     Игнорировать свои расходы — значит <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">собственноручно сжигать 15% дохода</span> каждый месяц, даже не понимая, куда именно утекают деньги.
                   </p>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Problem Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-100 text-red-600 text-sm font-bold mb-2">
                  <AlertTriangle size={18} />
                  <span>Барьеры</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                Почему 80% людей бросают учет финансов через неделю?
              </h3>
              <p className="text-lg text-slate-600">
                Мотивация падает, когда рутина превышает пользу.
              </p>
              
              <div className="space-y-4 mt-4">
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                   <div className="mt-1 text-red-500"><CreditCard /></div>
                   <div>
                      <h4 className="font-bold text-slate-900">Ручной ввод — это боль</h4>
                      <p className="text-sm text-slate-600 mt-1">Переносить цифры из чеков в Excel или приложение долго и скучно. Ошибка в одной цифре рушит весь баланс.</p>
                   </div>
                </div>
                <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                   <div className="mt-1 text-red-500"><AlertTriangle /></div>
                   <div>
                      <h4 className="font-bold text-slate-900">Деньги исчезают незаметно</h4>
                      <p className="text-sm text-slate-600 mt-1">"Продукты — 500,000 сумов". А что именно? Снеки, безделушки или мясо? Без детализации нет контроля.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Solution / Architecture Preview */}
            <div id="solution" className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-[100px] -z-0"></div>
               
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-bold mb-6">
                     <Lightbulb size={18} />
                     <span>Решение SUMLY</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Автоматизация через Gemini AI
                  </h3>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 font-bold">1</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Сбор данных</h4>
                           <p className="text-sm text-slate-600">Фото чека, голосовое сообщение или текст. Любой формат превращается в данные.</p>
                        </div>
                     </div>
                     <div className="w-0.5 h-6 bg-slate-200 ml-5"></div>
                     <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 font-bold">2</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Анализ (Gemini 2.5)</h4>
                           <p className="text-sm text-slate-600">ИИ распознает товары, цены и категории. Даже если в чеке сокращения или ошибки.</p>
                        </div>
                     </div>
                     <div className="w-0.5 h-6 bg-slate-200 ml-5"></div>
                     <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 font-bold">3</div>
                        <div>
                           <h4 className="font-bold text-slate-900">Умные советы</h4>
                           <p className="text-sm text-slate-600">Система не просто считает, а советует: "Ты тратишь на кофе 200$ в месяц, давай сократим?"</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. UNDER THE HOOD (Technical Details) - Replaces old Demo Section content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                 <div className="flex-1 space-y-6">
                    <h2 className="text-3xl font-bold">Как это работает "под капотом"?</h2>
                    <p className="text-slate-300">
                       Мы используем мощь Google Gemini 2.5 Flash для обработки неструктурированных данных в реальном времени.
                    </p>
                    
                    <div className="space-y-4">
                       <div className="flex items-center gap-3 text-sm p-3 bg-white/5 rounded-lg border border-white/10">
                          <Code className="text-indigo-400" size={20} />
                          <span>React Frontend конвертирует инпут в промпт</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm p-3 bg-white/5 rounded-lg border border-white/10">
                          <BrainCircuit className="text-purple-400" size={20} />
                          <span>Gemini API извлекает JSON схему</span>
                       </div>
                       <div className="flex items-center gap-3 text-sm p-3 bg-white/5 rounded-lg border border-white/10">
                          <Database className="text-green-400" size={20} />
                          <span>Данные категоризируются и сохраняются</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex-1 bg-slate-800 rounded-xl p-6 border border-slate-700 font-mono text-xs md:text-sm overflow-x-auto w-full">
                    <div className="text-green-400 mb-2">// Response from Gemini API</div>
                    <pre className="text-slate-300">
{`{
  "total": 109500,
  "currency": "UZS",
  "items": [
    { "name": "Milk", "cat": "Food" },
    { "name": "Taxi", "cat": "Transport" }
  ],
  "insight": "Вы потратили 20% бюджета на такси.",
  "savingsTip": "Используйте автобус..."
}`}
                    </pre>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. TECH STACK & IMPLEMENTATION */}
      <section id="tech" className="py-20 bg-slate-50">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Технологический стек</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-indigo-600">
                     <Layers size={24} />
                     <h3 className="font-bold text-lg text-slate-900">Mobile App</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                     <li>• <strong>Flutter (Dart)</strong> Cross-platform</li>
                     <li>• BLoC (State Management)</li>
                     <li>• Google ML Kit (Local OCR)</li>
                  </ul>
               </div>

               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-purple-600">
                     <BrainCircuit size={24} />
                     <h3 className="font-bold text-lg text-slate-900">AI Core</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                     <li>• <strong>Google GenAI SDK</strong></li>
                     <li>• <code>gemini-2.5-flash</code> (Fast & Cheap)</li>
                     <li>• Structured JSON Output</li>
                  </ul>
               </div>

               <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="flex items-center gap-3 mb-4 text-green-600">
                     <Cpu size={24} />
                     <h3 className="font-bold text-lg text-slate-900">Backend & Infra</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600">
                     <li>• Firebase / Supabase</li>
                     <li>• Cloud Functions</li>
                     <li>• Telegram Bot API</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* 5. TEAM */}
      <section id="team" className="py-20 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide mb-4">
                  <span>Dream Team</span>
               </div>
               <h2 className="text-3xl font-bold text-slate-900">Команда проекта</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               <div className="group text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                     <div className="absolute inset-0 bg-indigo-100 rounded-full transform group-hover:scale-110 transition-transform"></div>
                     <img src="https://drive.google.com/uc?export=view&id=1LiKFoZk2VPFFo4cYhkk5-EpI5-hIN2kn" alt="Мухаммадсаид" className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Мухаммадсаид</h3>
                  <div className="text-indigo-600 text-sm font-medium">Fullstack Lead</div>
               </div>
               <div className="group text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                     <div className="absolute inset-0 bg-purple-100 rounded-full transform group-hover:scale-110 transition-transform"></div>
                     <img src="/Images/Azamat.jpg" alt="Азамат" className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Азамат</h3>
                  <div className="text-indigo-600 text-sm font-medium">AI Engineer</div>
               </div>
               <div className="group text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                     <div className="absolute inset-0 bg-green-100 rounded-full transform group-hover:scale-110 transition-transform"></div>
                     <img src="/Images/Sherzod.jpg" alt="Шерзод" className="w-full h-full object-cover rounded-full relative z-10" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">Шерзод</h3>
                  <div className="text-indigo-600 text-sm font-medium">Product Manager</div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">S</div>
               <span className="font-bold text-white">SUMLY</span>
            </div>
            <p className="text-xs">&copy; 2025 Hackathon Prototype. Powered by Google Gemini.</p>
         </div>
      </footer>

    </div>
  );
}