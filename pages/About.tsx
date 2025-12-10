import React from 'react';
import { Target, ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 text-center">關於奧創科技工程</h1>
          <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
            水資源工程與資訊科技的橋樑，致力於將先進的 AI 與 IoT 技術落地於台灣的山河守護之中。
          </p>
        </div>
      </div>

      {/* Story / Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">公司定位</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                奧創科技工程有限公司 成立於資訊爆炸的時代，我們深知傳統土木、水利工程在面對極端氣候挑戰時，需要更即時、更精確的數據支持。
              </p>
              <p className="mb-4">
                團隊由資深水利工程師、資料科學家與 IoT 硬體專家組成。不同於純軟體公司，奧創懂水理、懂土砂；不同於傳統顧問公司，奧創具備自主開發 AI 模型與物聯網設備的能力。
              </p>
              <p>
                從野溪源頭的土砂崩塌，到水庫下游的供水安全，奧創科技透過全方位的監測與分析，守護台灣水資源環境。
              </p>
            </div>
          </div>
          <div className="bg-slate-200 rounded-xl h-96 w-full flex items-center justify-center overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-800 opacity-90"></div>
             <div className="relative z-10 text-white text-center p-8">
                <h3 className="text-4xl font-bold mb-4">專業 • 科技 • 值得信賴</h3>
                <div className="flex justify-center gap-6 mt-8">
                    <div className="flex flex-col items-center">
                        <Target size={60} className="text-blue-400 mb-2" />
                        <span className="text-sm">精準數據</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <ShieldCheck size={60} className="text-blue-400 mb-2" />
                        <span className="text-sm">穩定系統</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users size={60} className="text-blue-400 mb-2" />
                        <span className="text-sm">跨域整合</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Expertise Grid */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">專業領域</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "水資源工程", desc: "水文分析、輸砂計算、河川治理規劃" },
              { title: "物聯網 IoT", desc: "水砂觀測設備、4G 傳輸、太陽能供電" },
              { title: "AI 智慧分析", desc: "深度學習、水位監測、防洪預警" },
              { title: "GIS 空間資訊", desc: "集水區劃定、崩塌地判釋、UAV施測" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;