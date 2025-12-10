import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Database, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              智慧監測，數據治水 <br />
              <span className="text-blue-400">引領水利工程數位轉型</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              奧創科技工程結合 IoT 物聯網、GIS 空間分析與水資源工程，
              為水庫、河川與防災工程提供最精準的決策支援數據。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors">
                探索服務
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 border border-slate-500 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 md:text-lg transition-colors">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Key Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">奧創核心優勢</h2>
            <p className="mt-4 text-slate-600">傳統工程經驗 與 現代資訊科技 的完美融合</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 tech-card group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">智慧水砂觀測 IoT</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                自主研發低功耗、太陽能供電的野外監測站。即時傳輸水位、流速、濁度數據，解決偏遠山區供電與通訊難題。
              </p>
              <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                了解更多 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Highlight 2 */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 tech-card group">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Database size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">決策支援與評估</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                結合 GIS 空間資訊與統計科學，針對水庫減砂、集水區治理成效進行量化評估，提供具科學依據的治理策略。
              </p>
              <Link to="/projects" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium">
                瀏覽實績 <ChevronRight size={16} />
              </Link>
            </div>

            {/* Highlight 3 */}
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 tech-card group">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI 智慧化分析</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                運用深度學習模型，將蒐集資料加值分析。自動識別、預測水文資訊與土砂運移特徵，以量化資料輔助決策。
              </p>
              <Link to="/technology" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                查看技術 <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">準備好升級您的監測系統了嗎？</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            無論是野溪監測、水庫治理評估，客製化 AI 決策需求，奧創皆能為您提供最專業的解決方案。
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-blue-400 hover:bg-blue-300 transition-colors">
            立即諮詢 <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;