import React from 'react';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

interface Project {
  code: string;
  title: string;
  client: string;
  // desc: string;
  tech: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      code: "01",
      title: "114年水庫集水區保育減砂暨崩塌地變遷評估",
      client: "農村水保署",
      // desc: "於偏遠山區建置全自動太陽能供電監測站。透過 4G 回傳即時影像與濁度數據，解決霧社水庫上游崩塌地泥砂監控難題。",
      tech: ["水理分析", "輸砂量計算", "無人機 (UAV) 測繪"]
    },
    {
      code: "02",
      title: "114年度石門水庫集水區減砂入庫土砂觀測分析暨調適方案追蹤評估",
      client: "農村水保署臺北分署",
      // desc: "針對石門水庫上游集水區進行長期水砂觀測，分析霞雲攔砂壩及義興壩之淤積狀況，並建立入庫泥砂量推估公式，作為清淤工程決策依據。",
      tech: ["Solar IoT", "Raspberry Pi", "4G 傳輸"]
    },
    {
      code: "03",
      title: "114年度臺南分署水砂觀測維護設置計畫",
      client: "農村水保署臺南分署",
      // desc: "導入 AI 影像辨識技術輔助構造物（防砂壩）安全巡檢，並於重點河段建置雷達水位計與影像式流速計 (Surface Velocity Radar)。",
      tech: ["AI Image Rec.", "SVR", "構造物快篩"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900">專案實績</h1>
            <p className="mt-4 text-slate-600">全台各地執行的指標性計畫成果</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {projects.map((p) => (
                <div key={p.code} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                        <div className="md:w-1/4 bg-slate-900 p-8 text-white flex flex-col justify-center items-center text-center">
                            <span className="text-3xl font-bold mb-2">政府委辦</span>
                            <span className="text-3xl font-mono font-bold text-blue-400">{p.code}</span>
                            <div className="mt-4 inline-flex items-center gap-2 text-xl text-slate-100">
                                <MapPin size={14} /> {p.client}
                            </div>
                        </div>
                        <div className="md:w-3/4 p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{p.title}</h3>
                            {/* <p className="text-slate-600 mb-6 leading-relaxed">
                                {p.desc}
                            </p> */}
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-l font-medium flex items-center gap-1">
                                        <CheckCircle size={14} /> {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;