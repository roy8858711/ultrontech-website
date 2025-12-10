import React from 'react';
import { Terminal, Cpu, Share2, Layers } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">核心技術展示</h1>
          <p className="text-blue-200">Deep Learning • Edge Computing • Big Data</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Tech Block 1: AI Vision */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4">
              <Cpu size={14} /> Smart Hydro-Monitoring
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              全自動化水砂觀測站建置與數據整合
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              我們針對河川、野溪及水庫集水區建置全自動化水砂觀測站，整合濁度計、水位計、流速計、沖蝕計與雨量筒等感測設備，能在山區極端環境下長期穩定運作。所有觀測數據透過 4G 即時回傳至雲端平台，自動化完成濃度、水位、流量與輸砂量等核心水砂參數分析，提供管理單位更即時、更精準的決策依據。
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>多感測器整合：</strong> 濁度、水位、流速、沖蝕深度與降雨量即時監測。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>自動化資料回傳：</strong> 透過 4G 全時連線，支援偏遠山區監測。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>雲端資料平台：</strong> 自動化處理濃度、水位、流量、輸砂量與異常事件。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <strong>極端環境穩定性：</strong> 針對山區高流量、高濁度、落石等條件優化設備設計。
              </li>
            </ul>
          </div>

          {/* 右側圖片展示 */}
          <div className="lg:w-1/2 bg-slate-800 rounded-xl p-6 shadow-2xl overflow-hidden">
            {/* 上方三色 Mac-style 點 */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* 圖片卡片 */}
            <div className="rounded-lg overflow-hidden border border-slate-700">
              <img
                src="/images/hydro-station-demo.png"
                alt="水砂觀測站示意圖"
                className="w-full h-72 object-cover"
              />
            </div>

            <p className="text-slate-100 text-lg mt-3 text-center">
              全自動化水砂觀測站示意圖（濁度、水位、流速、雨量整合）
            </p>
          </div>

        </div>

        <hr className="border-slate-100" />

        {/* Tech Block 2: Watershed Management & Sediment Assessment */}
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4">
              <Terminal size={14} /> Watershed Sediment Analysis
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              集水區治理規劃與水砂量評估
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              透過集水區土地利用、崩塌分布、坡度、河道侵蝕特性及水砂觀測資料整合，
              建構入庫土砂量推估模型，評估重要土砂來源熱區、囚砂效果及減淤成效。
              並依據現地條件研擬最適治理策略，協助管理單位制定科學化治理決策。
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <strong>土砂來源評估：</strong> 結合 DEM、崩塌圖資與水砂觀測資料辨識熱區。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <strong>入庫土砂量推估：</strong> 評估懸移質、推移質與事件輸砂總量。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <strong>治理策略研擬：</strong> 針對熱區提出截流、固床、囚砂、坡面處理等方案。
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <strong>治理成效評估：</strong> 檢視治理後土砂減量、濁度下降與入庫改善程度。
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 bg-slate-100 rounded-xl p-8 border border-slate-200">
            <div className="grid grid-cols-2 gap-4 text-center">

              <div className="bg-white p-4 rounded shadow-sm">
                <Layers className="mx-auto text-emerald-600 mb-2" />
                <h4 className="font-bold">集水區空間分析</h4>
                <p className="text-xs text-slate-500">DEM / 崩塌分布</p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <Share2 className="mx-auto text-emerald-600 mb-2" />
                <h4 className="font-bold">水砂時序</h4>
                <p className="text-xs text-slate-500">水位 / 流速 / 濁度</p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm col-span-2">
                <h4 className="font-bold text-slate-800">輸砂量評估模型</h4>
                <div className="mt-2 text-xs text-slate-500 flex justify-center gap-4">
                  <span>● 全洪程監測</span>
                  <span>● 降雨事件分析</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <hr className="border-slate-100" />

        {/* Tech Block 3: Prediction */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-4">
              <Layers size={14} /> Smart Analytics
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-6">智慧化水砂分析與預測</h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              運用人工智慧與大數據技術，整合降雨、水位、濁度、流量等多源時序資料，建立全面性的水砂行為分析模型。從歷史事件中自動學習特徵，掌握集水區的反應模式與輸砂特性。
            </p>

            <p className="text-slate-600 leading-relaxed">
              透過智慧化演算法提升水文監測與決策效率，協助提前辨識可能的濁度上升與輸砂熱區變化，支持水庫調度與集水區治理策略規劃。
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-4 text-center">智慧化分析</h4>

              <div className="grid grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="p-3 bg-white border rounded shadow-sm text-center">
                  多源資料整合<br />Rain / WaterLevel<br /> / Flow Velocity / NTU
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded shadow-sm font-bold text-indigo-700 text-center">
                  分析核心<br />AI、大數據統計
                </div>
                <div className="p-3 bg-white border rounded shadow-sm text-center">
                  趨勢研判<br />治理決策
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Technology;