import React from 'react';
import { Wifi, Eye, Mountain, Map, BarChart2, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "水砂物聯網監測系統建置",
      subtitle: "IoT Monitoring",
      desc: "針對河川、野溪、水庫集水區，建置全自動化水砂觀測站。整合濁度計、水位計、流速計、沖蝕計、雨量筒，透過 4G 即時回傳數據至雲端平台，支援山區極端環境下的長期運作。"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "AI 水位/濁度/流速影像辨識",
      subtitle: "Computer Vision",
      desc: "利用建置之攝影機影像，導入 AI 深度學習模型。自動辨識水位高程、利用影像特徵估算表面流速，並透過影像色度分析推估濁度變化。"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "水庫集水區減砂策略評估",
      subtitle: "Sediment Management",
      desc: "評估上游集水區治理工程（如防砂壩）之減砂效益。計算土砂生產量、運移量與入庫量，協助擬定最優化的水庫保育策略。"
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: "GIS 與空間資訊分析",
      subtitle: "Geospatial Analysis",
      desc: "崩塌地判釋、集水區地文分析、野溪治理分區劃定。結合衛星影像與無人機 (UAV) 正射影像，建立完整的地理資訊資料庫。"
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "資料科學與預測模型",
      subtitle: "Data Science & LSTM",
      desc: "運用 Python 建置 AI 預測模型。分析歷史水文數據，建立濁度、流量預測預警系統，為防汛期間提供提前預警資訊。"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "客製化監測站與系統整合",
      subtitle: "Custom Integration",
      desc: "依據案場需求，客製化設計水砂觀測設備。提供從硬體架設到軟體儀表板 (Dashboard) 的一站式服務。"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">專業服務項目</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          從硬體建置到資料分析，提供全方位的水利資訊解決方案
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-200 flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4 mt-1">{s.subtitle}</p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
              {/* <div className="px-8 py-4 bg-slate-50 border-t border-slate-100">
                <span className="text-blue-600 text-sm font-medium cursor-pointer hover:underline">了解更多 &rarr;</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;