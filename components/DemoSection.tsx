import React, { useState } from 'react';
import { analyzeReceiptText } from '../services/geminiService';
import { AnalysisResult, LoadingState } from '../types';
import { ScanLine, Mic, Sparkles, AlertCircle, Loader2, Send } from 'lucide-react';

const MOCK_RECEIPT_TEXT = "Korzinka.uz: Xleb 4500, Moloko 12000, Go'sht 1kg 85000, Snickers 8000. Jami: 109500";

export const DemoSection: React.FC = () => {
  const [input, setInput] = useState(MOCK_RECEIPT_TEXT);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    setStatus(LoadingState.LOADING);
    setResult(null);
    try {
      const data = await analyzeReceiptText(input);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      console.error(e);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full bg-white rounded-[2rem] shadow-2xl border-4 border-slate-900 overflow-hidden relative z-10 mx-auto transform transition-transform">
      {/* Notch / Status Bar Area */}
      <div className="bg-slate-900 h-7 w-full flex justify-center items-center relative">
         <div className="w-20 h-4 bg-black rounded-b-xl absolute top-0"></div>
      </div>

      {/* App Header */}
      <div className="bg-slate-50 border-b border-slate-100 p-4 flex justify-between items-center sticky top-0 z-20">
        <span className="font-bold text-indigo-900 tracking-tight">SUMLY</span>
        <div className="flex gap-1.5">
           <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
        </div>
      </div>

      <div className="p-5 h-[480px] overflow-y-auto scrollbar-hide bg-white">
        
        {/* Chat / Input Area */}
        <div className="space-y-4">
           {/* Bot Message */}
           <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                 <Sparkles size={14} />
              </div>
              <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-sm text-slate-700 max-w-[85%]">
                 Привет! Отправь мне фото чека или напиши, что купил. Я посчитаю бюджет.
              </div>
           </div>

           {/* User Input Area (Textarea styled as chat bubble) */}
           <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                 <span className="text-xs font-bold">You</span>
              </div>
              <div className="w-full max-w-[85%]">
                 <div className="relative">
                    <textarea 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="w-full p-3 pr-10 text-sm bg-indigo-50 border border-indigo-100 rounded-2xl rounded-tr-none focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24 text-slate-800 placeholder-indigo-300"
                      placeholder="Например: Такси 20000..."
                    />
                    <button className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full text-indigo-500 shadow-sm hover:text-indigo-700">
                       <Mic size={14} />
                    </button>
                 </div>
                 <div className="flex justify-end mt-2">
                    <button 
                      onClick={handleAnalyze}
                      disabled={status === LoadingState.LOADING}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-xs font-bold flex items-center gap-2 transition-all active:scale-95 disabled:opacity-70"
                    >
                      {status === LoadingState.LOADING ? <Loader2 className="animate-spin" size={12} /> : <Send size={12} />}
                      Отправить
                    </button>
                 </div>
              </div>
           </div>

           {/* Error State */}
           {status === LoadingState.ERROR && (
              <div className="flex justify-center animate-in fade-in slide-in-from-bottom-2">
                 <div className="bg-red-50 text-red-600 text-xs px-3 py-2 rounded-lg flex items-center gap-2 border border-red-100">
                   <AlertCircle size={14} />
                   Ошибка подключения. Проверьте API Key.
                 </div>
              </div>
           )}

           {/* Result Card */}
           {status === LoadingState.SUCCESS && result && (
             <div className="mt-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="bg-white border border-slate-100 rounded-2xl shadow-lg overflow-hidden">
                   
                   {/* Header Summary */}
                   <div className="bg-gradient-to-r from-indigo-500 to-violet-600 p-4 text-white">
                      <div className="text-xs opacity-80 mb-1">Итого за сегодня</div>
                      <div className="text-2xl font-bold tracking-tight">
                         {result.total.toLocaleString()} <span className="text-sm font-normal opacity-80">{result.currency}</span>
                      </div>
                   </div>

                   {/* List */}
                   <div className="p-4 space-y-3 bg-slate-50/50">
                      {result.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm items-center border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                          <div className="flex flex-col">
                             <span className="font-medium text-slate-800">{item.name}</span>
                             <span className="text-[10px] text-slate-400 uppercase tracking-wide">{item.category}</span>
                          </div>
                          <span className="font-semibold text-slate-600">{item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                   </div>

                   {/* AI Insight */}
                   <div className="bg-indigo-50 p-4 border-t border-indigo-100">
                      <div className="flex gap-3">
                         <div className="mt-0.5 text-indigo-600 shrink-0">
                            <Sparkles size={16} />
                         </div>
                         <div className="space-y-2">
                            <p className="text-xs text-indigo-900 leading-relaxed">
                               {result.insight}
                            </p>
                            <div className="bg-white/60 p-2 rounded-lg text-xs font-medium text-indigo-800 border border-indigo-100/50">
                               💡 {result.savingsTip}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           )}
           
           {/* Fake loading spacers to fill height if empty */}
           {status === LoadingState.IDLE && (
              <div className="opacity-30 space-y-3 pointer-events-none blur-[1px]">
                 <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="h-10 w-24 bg-slate-100 rounded-xl rounded-tr-none"></div>
                 </div>
                 <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-50"></div>
                    <div className="h-20 w-48 bg-slate-50 rounded-xl rounded-tl-none"></div>
                 </div>
              </div>
           )}
        </div>
      </div>
      
      {/* Bottom Nav Fake */}
      <div className="bg-white border-t border-slate-100 p-3 flex justify-around items-center">
         <div className="text-indigo-600"><ScanLine size={20} /></div>
         <div className="text-slate-300"><Sparkles size={20} /></div>
         <div className="text-slate-300"><AlertCircle size={20} /></div>
      </div>
    </div>
  );
};