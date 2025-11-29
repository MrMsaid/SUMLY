import React, { useState } from 'react';
import { analyzeReceiptText } from '../services/geminiService';
import { AnalysisResult, LoadingState } from '../types';
import { ScanLine, Mic, Sparkles, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';

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
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 transform md:translate-x-0 md:mt-0 mt-8">
      {/* Header of the Phone App */}
      <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
        <span className="font-semibold text-lg">SUMLY</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-600 block">
            Тест-драйв ИИ-аналитика (введите текст чека):
          </label>
          <div className="relative">
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24"
            />
            <div className="absolute bottom-2 right-2 flex gap-2">
               <button title="Голосовой ввод (демо)" className="p-1.5 bg-white rounded-full shadow-sm border border-slate-200 text-slate-400 hover:text-indigo-600 transition-colors">
                  <Mic size={16} />
               </button>
            </div>
          </div>
        </div>

        <button 
          onClick={handleAnalyze}
          disabled={status === LoadingState.LOADING}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100"
        >
          {status === LoadingState.LOADING ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Анализирую...
            </>
          ) : (
            <>
              <Sparkles size={18} />
              Разобрать расходы
            </>
          )}
        </button>

        {status === LoadingState.ERROR && (
           <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
             <AlertCircle size={16} />
             Ошибка анализа. Попробуйте снова.
           </div>
        )}

        {status === LoadingState.SUCCESS && result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-slate-500 text-sm">Итого:</span>
                <span className="text-2xl font-bold text-slate-900">
                  {result.total.toLocaleString()} {result.currency}
                </span>
              </div>
              <div className="space-y-1">
                {result.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-slate-700">{item.name}</span>
                    <span className="text-slate-500">{item.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 shrink-0">
                   <ScanLine size={18} />
                </div>
                <div>
                   <h4 className="font-semibold text-indigo-900 text-sm mb-1">Совет ИИ-аналитика</h4>
                   <p className="text-indigo-800 text-xs leading-relaxed">
                     {result.insight} <br/>
                     <span className="font-bold mt-1 block">{result.savingsTip}</span>
                   </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};