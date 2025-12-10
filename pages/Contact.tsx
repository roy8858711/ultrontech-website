import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="bg-slate-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold">聯絡我們</h1>
                <p className="mt-4 text-slate-400">若有任何業務需求或技術諮詢，歡迎與我們聯繫</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">公司資訊</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">地址</h3>
                                    <p className="text-slate-600">10690 臺北市大安區忠孝東路４段191號14樓之2</p>
                                    <p className="text-sm text-slate-500 mt-1">鄰近捷運站，交通便利</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Email</h3>
                                    <p className="text-slate-600">info@ultrontech.com.tw</p>
                                    <p className="text-sm text-slate-500 mt-1">業務諮詢、技術支援</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">電話</h3>
                                    <p className="text-slate-600">02-1234-5678</p>
                                    <p className="text-sm text-slate-500 mt-1">週一至週五 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="mt-12 bg-slate-200 h-64 rounded-xl overflow-hidden shadow-inner">
                            <iframe
                                title="Google Map"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=25.041654,121.551156&z=16&output=embed"
                            ></iframe>
                        </div>
                    </div>

                    <a
                        href="https://www.104.com.tw/company/1a2x6bnd81?jobsource=google"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <Send size={18} /> 加入我們｜查看人才招募資訊
                    </a>


                </div>
            </div>
        </div>
    );
};

export default Contact;