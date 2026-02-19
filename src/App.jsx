import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall } from 'lucide-react';

const App = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = [
    '/assets/hero1.jpg', 
    '/assets/hero2.jpg', 
    '/assets/hero3.jpg'
  ];
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [step, setStep] = useState('form'); // 'form' | 'success'

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar select-none">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center gap-8">
          <img src="/assets/logo.png" alt="D-order" className="h-7" />
          <nav className="hidden md:flex gap-8 text-white/90 text-sm font-semibold">
            <a href="#intro" className="hover:text-white transition">서비스 소개</a>
            <a href="#manual" className="hover:text-white transition">사용 설명서</a>
            <a href="#trial" className="hover:text-white transition">체험하기</a>
            <a href="#status" className="hover:text-white transition">실시간 현황</a>
          </nav>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300" onClick={() => window.open('http://pf.kakao.com/_xeKARX', '_blank')}>
          이용 문의하기
        </button>
      </header>

      <section id="intro" className="relative h-screen w-full snap-start overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight"
          >
            스마트한 부스 운영의 시작!<br />
            <span className="text-orange-500">D-Order</span>
          </motion.h1>
          <p className="text-white/70 mt-8 text-lg md:text-xl font-light">
            비영리로 운영되는 우리 학우들을 위한 테이블 오더
          </p>
        </div>
      </section>

      <section id="manual" className="h-screen w-full snap-start bg-[#f5f5f7] flex items-center justify-center p-6 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl h-full py-20">
            <div className="bg-white rounded-[2rem] p-10 shadow-sm flex flex-col justify-between overflow-hidden relative border border-gray-100">
                <div>
                    <span className="text-orange-500 font-bold text-sm">운영 효율</span>
                    <h3 className="text-3xl font-bold mt-2">간편한 주문 관리</h3>
                    <p className="text-gray-400 mt-4 leading-relaxed">복잡한 종이 주문서 대신<br/>태블릿 하나로 모든 주문을 관리하세요.</p>
                </div>
                <div className="h-1/2 w-full bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center text-gray-300 text-center p-4 text-xs">
                    Admin Preview Image<br/>(public/assets/card_admin.png)
                </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
                <div className="bg-blue-600 rounded-[2rem] p-10 text-white relative overflow-hidden">
                    <h3 className="text-2xl font-bold">비영리 구간 요금제</h3>
                    <p className="opacity-70 mt-2">최소한의 서버 유지비만 받습니다.</p>
                    <div className="mt-8 flex gap-4">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex-1 text-center">
                            <p className="text-xs opacity-60">Lite</p>
                            <p className="font-bold">5,000₩</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex-1 text-center">
                            <p className="text-xs opacity-60">Standard</p>
                            <p className="font-bold">8,000₩</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 rounded-[2rem] p-10 text-white flex flex-col justify-center">
                    <h3 className="text-2xl font-bold">현장 대응팀 상주</h3>
                    <p className="opacity-70 mt-2">"파란 조끼를 찾으세요"<br/>축제 전일/당일 밀착 지원</p>
                </div>
            </div>
        </div>
      </section>

      <section id="trial" className="h-screen w-full snap-start bg-white flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-4xl font-black mb-4">지금 바로 체험하기</h2>
        <p className="text-gray-400 mb-16">로그인 없이 실제 기능을 테스트해보세요.</p>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          <div className="flex-1 aspect-video bg-gray-50 rounded-[2.5rem] flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                 <span className="text-orange-500 group-hover:text-white text-2xl">👨‍🍳</span>
            </div>
            <span className="text-xl font-bold">사장님용 (Admin)</span>
            <p className="text-gray-400 text-sm mt-2">실시간 주문 접수 및 현황 관리</p>
          </div>
          <div className="flex-1 aspect-video bg-gray-50 rounded-[2.5rem] flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-4 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                 <span className="text-blue-500 group-hover:text-white text-2xl">📱</span>
            </div>
            <span className="text-xl font-bold">손님용 (Order)</span>
            <p className="text-gray-400 text-sm mt-2">메뉴판 탐색 및 QR 주문하기</p>
          </div>
        </div>
      </section>

      <section id="status" className="h-screen w-full snap-start bg-black text-white flex flex-col items-center justify-center text-center">
        <span className="text-orange-500 font-mono tracking-widest text-sm mb-6 uppercase">Festival Live Monitor</span>
        <h2 className="text-6xl md:text-8xl font-black mb-10">COMING SOON</h2>
        <p className="text-lg opacity-40 max-w-lg leading-relaxed px-6">
          2025 가을 동국대학교 대동제 기간에<br/>전체 주점의 실시간 주문 통계가 공개됩니다.
        </p>
      </section>

      {/* App.jsx 하단 FLOATING ACTION BUTTONS 부분 */}
      // 2. 하단 FLOATING ACTION BUTTONS 부분 수정
<div className="fixed bottom-10 right-10 flex flex-col gap-4 z-[100]">
  {/* 카카오톡 채널: 기존 유지 */}
  <motion.button 
    onClick={() => window.open('http://pf.kakao.com/_xeKARX', '_blank')}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-[#FAE100] w-16 h-16 rounded-3xl shadow-2xl flex items-center justify-center text-black"
  >
    <MessageCircle size={32} fill="black" />
  </motion.button>

  {/* 전화 상담 요청: 링크 대신 모달 트리거로 변경 */}
  {/* <motion.button 
    onClick={() => {
      setIsContactModalOpen(true);
      setStep('form');
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-white w-16 h-16 rounded-3xl shadow-2xl flex items-center justify-center text-black border border-gray-100"
  >
    <PhoneCall size={28} />
  </motion.button> */}
</div>

      // 3. 상담 요청 모달 UI 추가 (return문 안쪽 하단에 배치)
      {/* <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-white w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl relative"
            >
              <button onClick={() => setIsContactModalOpen(false)} className="absolute top-6 right-6 text-gray-400">✕</button>
              
              {step === 'form' ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">전화 상담 요청</h3>
                  <p className="text-gray-500 mb-6 text-sm">현장 대응팀이 확인 후 즉시 연락드립니다.</p>
                  <div className="flex flex-col gap-3">
                    <input type="text" placeholder="부스 이름" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="tel" placeholder="연락처" className="p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500" />
                    <textarea placeholder="문의 사항 (짧게)" className="p-4 bg-gray-50 rounded-2xl h-24 resize-none outline-none focus:ring-2 focus:ring-orange-500" />
                    <button 
                      onClick={() => setStep('success')}
                      className="bg-black text-white py-4 rounded-2xl font-bold mt-2"
                    >
                      상담 요청하기
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold">요청 완료!</h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    남겨주신 번호로 현장 대응팀이<br/>최대한 빠르게 연락드릴게요.
                  </p>
                  <button 
                    onClick={() => setIsContactModalOpen(false)}
                    className="mt-8 text-orange-500 font-bold"
                  >
                    확인
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default App;
