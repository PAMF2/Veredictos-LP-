
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Clock, 
  Calculator, 
  Activity, 
  AlertTriangle, 
  Zap, 
  DollarSign, 
  TrendingUp, 
  PlayCircle,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  Linkedin,
  Scale,
  Lock,
  HelpCircle,
  Quote,
  User,
  XCircle,
  ArrowDownNarrowWide,
  Stethoscope,
  Eye,
  FileBadge,
  ClipboardCheck,
  Thermometer,
  Microscope,
  History,
  Target,
  Camera,
  Cpu,
  ListOrdered,
  PlusSquare,
  FileOutput,
  EyeOff
} from 'lucide-react';

// --- Theme Components ---

const Badge: React.FC<{ children: React.ReactNode; variant?: 'blue' | 'teal' | 'red' }> = ({ children, variant = 'blue' }) => {
  const styles = {
    blue: 'bg-blue-50/10 text-blue-200 border-blue-100/20',
    teal: 'bg-teal-50/10 text-teal-400 border-teal-100/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20'
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border backdrop-blur-md ${styles[variant]} mb-6 inline-block`}>
      {children}
    </span>
  );
};

const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ${className}`}>
    {children}
  </div>
);

const SectionBackground: React.FC<{ 
  imageUrl?: string; 
  videoUrl?: string;
  overlayColor?: string; 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
  blurClass?: string;
  containerClass?: string;
}> = ({ imageUrl, videoUrl, overlayColor = "bg-slate-950/90", children, className = "", id, blurClass = "backdrop-blur-sm", containerClass = "max-w-7xl mx-auto px-6 md:px-12" }) => (
  <section id={id} className={`relative py-32 overflow-hidden border-b border-white/5 ${className}`}>
    {(imageUrl || videoUrl) && (
      <div className="absolute inset-0 z-0">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            autoPlay 
            loop
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={imageUrl} alt="Background" className="w-full h-full object-cover" />
        )}
        <div className={`absolute inset-0 ${overlayColor} ${blurClass}`}></div>
      </div>
    )}
    <div className={`${containerClass} relative z-10`}>
      {children}
    </div>
  </section>
);

// --- Credibility Bar ---
const CredibilityBar = () => {
  return (
    <div className="relative z-20 w-full">
      <div className="w-full bg-black py-10 overflow-hidden relative flex flex-col items-center justify-center pt-12">
        <div className="text-slate-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-10 text-center">
        Reconhecidos e apoiados por:
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden flex items-center">
        {/* Gradient Masks for smooth fading on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee shrink-0">
          <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 shrink-0">
            <img src="https://i.imgur.com/3FyzQ90.png" alt="Secretaria Municipal de Saude - Rio" className="h-20 md:h-32 object-contain shrink-0" />
            <img src="https://i.imgur.com/1raQGkI.png" alt="NVIDIA Inception" className="h-16 md:h-24 object-contain shrink-0" />
            <img src="https://i.imgur.com/QbuXpJk.png" alt="Google for Startups" className="h-20 md:h-32 object-contain shrink-0" />
            <img src="https://i.imgur.com/ydf9BB2.png" alt="CrewAI" className="h-16 md:h-24 object-contain shrink-0" />
          </div>
          <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 shrink-0">
            <img src="https://i.imgur.com/3FyzQ90.png" alt="Secretaria Municipal de Saude - Rio" className="h-20 md:h-32 object-contain shrink-0" />
            <img src="https://i.imgur.com/1raQGkI.png" alt="NVIDIA Inception" className="h-16 md:h-24 object-contain shrink-0" />
            <img src="https://i.imgur.com/QbuXpJk.png" alt="Google for Startups" className="h-20 md:h-32 object-contain shrink-0" />
            <img src="https://i.imgur.com/ydf9BB2.png" alt="CrewAI" className="h-16 md:h-24 object-contain shrink-0" />
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
      </div>
    </div>
  );
};

// --- Main Page ---

const whatsappLink = "https://wa.me/5521995435384?text=Olá,%20Gabriel!%20Vi%20a%20página%20da%20Veredictos%20Vision%20e%20tenho%20interesse%20no%20programa%20de%20Municípios%20Pioneiros.%20Gostaria%20de%20entender%20como%20podemos%20implementar%20o%20piloto%20de%20triagem%20inteligente%20para%20reduzir%20nossa%20fila%20de%20espera%20e%20custos%20de%20tratamento";

const HomePage: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-teal-400 selection:text-slate-950">
      
      {/* SEÇÃO 1: HEADLINE */}
      <SectionBackground 
        videoUrl="https://res.cloudinary.com/dkfm4lzmy/video/upload/v1773075329/Veredictos_Vision_Pitch_Deck_-_ENGLISH_3_hryrzh.mp4" 
        overlayColor="bg-transparent" 
        blurClass="backdrop-blur-none"
        containerClass="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20"
        className="!border-b-0"
      >
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl pt-12 md:pt-24">
          <div className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            <Badge variant="teal">VEREDICTOS VISION • PARCEIRO OFICIAL PREFEITURA RIO</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter mb-6 [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.8)]">
            A tecnologia escolhida pela Secretaria Municipal de Saúde do Rio para <span className="text-teal-400 italic">salvar a visão de diabéticos e hipertensos.</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl block text-slate-200 font-medium tracking-tight mb-10 leading-relaxed [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8)]">
            IA médica que detecta as 3 principais causas de cegueira evitável em uma única imagem de fundo de olho — e já entrega ao seu oftalmologista uma fila priorizada por urgência.
          </h2>
          
          <div className="p-4 md:p-5 bg-teal-400/10 border border-teal-400/20 rounded-2xl mb-10 inline-block backdrop-blur-md shadow-2xl">
            <p className="text-teal-400 font-black uppercase tracking-widest text-xs md:text-sm flex items-center gap-3 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">
              <Zap className="w-5 h-5 animate-pulse" /> Economize milhões com detecção e tratamento preventivo de retinopatia diabética, hipertensiva e glaucoma
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#resultados" className="px-10 py-5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black rounded-full transition-all flex items-center gap-3 group shadow-xl shadow-teal-500/20 text-lg">
              Ver resultados do piloto no Rio
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contato" className="px-10 py-5 bg-transparent hover:bg-teal-400/10 text-teal-400 font-bold rounded-full transition-all flex items-center gap-3 border-2 border-teal-400 text-lg">
              Agendar demonstração gratuita
            </a>
          </div>
        </div>
      </SectionBackground>

      <CredibilityBar />

      <div className="w-full bg-black flex justify-center py-16">
        <div className="flex items-center gap-2 text-teal-400 font-medium text-sm bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20 shadow-[0_0_15px_rgba(45,210,190,0.15)]">
          <CheckCircle2 className="w-4 h-4" />
          <span>Em conformidade com Resolução CFM 2.454/2026</span>
        </div>
      </div>

      {/* BLOCO CFM */}
      <SectionBackground className="bg-black !pt-0 !border-b-0">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 md:p-12 relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
            {/* Subtle gradient background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 shadow-inner mb-6">
                <Scale className="w-8 h-8 text-slate-300" />
              </div>
              
              <div>
                <div className="flex flex-col items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    A IA não diagnostica. <span className="text-teal-400">O oftalmologista sim.</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                  <p>
                    E o CFM acabou de regulamentar exatamente isso. A <strong className="text-slate-200 font-bold">Resolução CFM nº 2.454/2026</strong>, publicada em fevereiro deste ano, define que sistemas de IA devem atuar exclusivamente como instrumento de apoio à decisão clínica — jamais substituindo a autoridade e a responsabilidade do médico.
                  </p>
                  
                  <div className="bg-black/40 border border-white/5 rounded-xl p-6 mt-6">
                    <p className="text-xl font-bold text-white tracking-wide">
                      Triamos. Priorizamos. Documentamos. <br className="hidden md:block" />
                      <span className="text-teal-400">O diagnóstico e a conduta clínica pertencem ao especialista. Sempre.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* SEÇÃO 2: PROBLEM STATEMENT */}
      <SectionBackground className="bg-black !pt-16 !border-b-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6 uppercase">
              Esse ciclo acontece todo dia na sua rede.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Retinopatia diabética, hipertensiva e glaucoma não avisam. A visão vai sumindo pelas bordas, devagar, sem dor. Quando o paciente finalmente descobre, ainda enfrenta meses de espera na fila. É aí que o dano irreversível acontece.
            </p>
          </div>

          {/* JORNADA DO PACIENTE — LINHA DO TEMPO */}
          <div className="relative w-full max-w-7xl mx-auto py-12 mb-16 -ml-4 lg:-ml-8">
            
            {/* Desktop Layout (Horizontal) */}
            <div className="hidden lg:flex items-start justify-between px-4">
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#00CED1] flex items-center justify-center mb-4 shadow-lg">
                  <PlusSquare className="w-10 h-10 text-black" strokeWidth={1.5} />
                </div>
                <span className="text-[#00CED1] font-bold text-sm mb-1">Etapa 1</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">Clínica da Família</h4>
                <p className="text-[#AAAAAA] text-sm">Atendimento primário</p>
              </div>

              {/* Connector 1 */}
              <div className="flex-1 h-20 flex items-center justify-center relative min-w-[20px]">
                <div className="absolute w-full h-[2px] bg-[#00CED1]"></div>
                <ArrowRight className="w-6 h-6 text-[#00CED1] relative z-10 bg-black" strokeWidth={1.5} />
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#00CED1] flex items-center justify-center mb-4 shadow-lg">
                  <FileOutput className="w-10 h-10 text-black" strokeWidth={1.5} />
                </div>
                <span className="text-[#00CED1] font-bold text-sm mb-1">Etapa 2</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">Encaminhamento</h4>
                <p className="text-[#AAAAAA] text-sm">Para especialista</p>
              </div>

              {/* Connector 2 */}
              <div className="flex-1 h-20 flex items-center justify-center relative min-w-[20px]">
                <div className="absolute w-full h-[2px] bg-[#00CED1]"></div>
                <ArrowRight className="w-6 h-6 text-[#00CED1] relative z-10 bg-black" strokeWidth={1.5} />
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#00CED1] flex items-center justify-center mb-4 shadow-lg">
                  <Eye className="w-10 h-10 text-black" strokeWidth={1.5} />
                </div>
                <span className="text-[#00CED1] font-bold text-sm mb-1">Etapa 3</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">Requisição de Exame</h4>
                <p className="text-[#AAAAAA] text-sm">Fundo de olho</p>
              </div>

              {/* Connector 3 */}
              <div className="flex-1 h-20 flex items-center justify-center relative min-w-[20px]">
                <div className="absolute w-full h-[2px] bg-[#00CED1]"></div>
                <ArrowRight className="w-6 h-6 text-[#00CED1] relative z-10 bg-black" strokeWidth={1.5} />
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#DC143C] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(220,20,60,0.6)]">
                  <Clock className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#DC143C] font-bold text-sm mb-1">Etapa 4</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">6 a 12 meses na fila</h4>
                <p className="text-[#AAAAAA] text-sm">Espera no SUS</p>
              </div>

              {/* Connector 4 */}
              <div className="flex-1 h-20 flex items-center justify-center relative min-w-[20px]">
                <div className="absolute w-full h-[2px] bg-[#00CED1]"></div>
                <ArrowRight className="w-6 h-6 text-[#00CED1] relative z-10 bg-black" strokeWidth={1.5} />
              </div>

              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#DC143C] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(220,20,60,0.6)]">
                  <EyeOff className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#DC143C] font-bold text-sm mb-1">Etapa 5</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">Dano Irreversível</h4>
                <p className="text-[#AAAAAA] text-sm">Perda de visão</p>
              </div>

              {/* Connector 5 */}
              <div className="flex-1 h-20 flex items-center justify-center relative min-w-[20px]">
                <div className="absolute w-full h-[2px] bg-[#00CED1]"></div>
                <ArrowRight className="w-6 h-6 text-[#00CED1] relative z-10 bg-black" strokeWidth={1.5} />
              </div>

              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center w-36 xl:w-48 text-center shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#DC143C] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(220,20,60,0.6)]">
                  <TrendingUp className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-[#DC143C] font-bold text-sm mb-1">Etapa 6</span>
                <h4 className="text-white font-bold text-base leading-tight mb-1">Tratamento tardio</h4>
                <p className="text-[#AAAAAA] text-sm">Custo 10x maior</p>
              </div>
            </div>

            {/* Mobile/Tablet Layout (Vertical) */}
            <div className="flex lg:hidden flex-col items-start px-4 relative max-w-sm mx-auto">
              {/* Vertical Line */}
              <div className="absolute left-[3rem] top-8 bottom-8 w-[2px] bg-[#00CED1]"></div>

              {/* Step 1 */}
              <div className="relative z-10 flex items-center w-full mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00CED1] flex items-center justify-center shadow-lg shrink-0 mr-6">
                  <PlusSquare className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#00CED1] font-bold text-xs mb-1 block">Etapa 1</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">Clínica da Família</h4>
                  <p className="text-[#AAAAAA] text-sm">Atendimento primário</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative z-10 flex items-center w-full mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00CED1] flex items-center justify-center shadow-lg shrink-0 mr-6">
                  <FileOutput className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#00CED1] font-bold text-xs mb-1 block">Etapa 2</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">Encaminhamento</h4>
                  <p className="text-[#AAAAAA] text-sm">Para especialista</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative z-10 flex items-center w-full mb-8">
                <div className="w-16 h-16 rounded-full bg-[#00CED1] flex items-center justify-center shadow-lg shrink-0 mr-6">
                  <Eye className="w-8 h-8 text-black" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#00CED1] font-bold text-xs mb-1 block">Etapa 3</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">Requisição de Exame</h4>
                  <p className="text-[#AAAAAA] text-sm">Fundo de olho</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative z-10 flex items-center w-full mb-8">
                <div className="w-16 h-16 rounded-full bg-[#DC143C] flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.6)] shrink-0 mr-6">
                  <Clock className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#DC143C] font-bold text-xs mb-1 block">Etapa 4</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">6 a 12 meses na fila</h4>
                  <p className="text-[#AAAAAA] text-sm">Espera no SUS</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative z-10 flex items-center w-full mb-8">
                <div className="w-16 h-16 rounded-full bg-[#DC143C] flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.6)] shrink-0 mr-6">
                  <EyeOff className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#DC143C] font-bold text-xs mb-1 block">Etapa 5</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">Dano Irreversível</h4>
                  <p className="text-[#AAAAAA] text-sm">Perda de visão</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="relative z-10 flex items-center w-full">
                <div className="w-16 h-16 rounded-full bg-[#DC143C] flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.6)] shrink-0 mr-6">
                  <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[#DC143C] font-bold text-xs mb-1 block">Etapa 6</span>
                  <h4 className="text-white font-bold text-lg leading-tight mb-1">Tratamento tardio</h4>
                  <p className="text-[#AAAAAA] text-sm">Custo 10x maior</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-red-950/40 to-slate-900/40 border border-red-500/20 rounded-[2rem] p-8 md:p-12 mb-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <div className="flex flex-col items-center">
              <div className="flex-1 w-full">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 uppercase tracking-tight flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 mb-2">
                    <DollarSign className="w-6 h-6 text-red-500" />
                  </div>
                  O custo que cai no seu orçamento
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                  <strong className="text-white font-bold">Fila parada não é só um problema clínico. É um problema de orçamento.</strong><br/>
                  Sem laudos registrados no SIA/SUS, a produção oftalmológica da sua rede cai — e com ela, o repasse federal do Teto MAC no ano seguinte. Cada exame não realizado hoje é verba que não volta amanhã.
                </p>
                <div className="inline-block bg-red-500/10 border border-red-500/20 rounded-xl p-4 max-w-2xl mx-auto">
                  <p className="text-red-400 font-bold text-lg">
                    Cada caso que chega tarde custa até 10x mais para a rede tratar. Triagem preventiva não é custo — é economia. E é produção registrada no sistema.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
              O gargalo é o tempo. Sem triagem prévia, casos graves e casos leves chegam juntos na mesma fila — e esperam igualmente 6 a 12 meses. Na oftalmologia, esse tempo pode ser a diferença entre tratar e operar. <strong className="text-white">Entre recuperar e perder a visão para sempre.</strong>
            </p>
          </div>

          {/* TRANSIÇÃO → SOLUÇÃO */}
          <div className="max-w-3xl mx-auto text-center mt-40 relative pt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-[2px] h-20 bg-gradient-to-b from-transparent to-teal-500"></div>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium mb-8">
              E se os casos mais graves da sua rede chegassem ao oftalmologista em dias — não em meses — já documentados com achados, mapas de calor e nível de prioridade definido?
            </p>
            <h3 className="text-teal-400 text-2xl md:text-4xl font-black uppercase tracking-tight mb-10">
              É isso que a Veredictos faz.
            </h3>
            
            <a href="/solucao" className="inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-base md:text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,210,190,0.4)] uppercase tracking-wide">
              Ver como funciona <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* SEÇÃO 3: TRIAGEM MULTI-PATOLOGIA */}
      <SectionBackground id="resultados" className="bg-black !border-b-0">
        <div className="mb-20 text-center max-w-5xl mx-auto">
          <Badge variant="teal">Tecnologia de Ponta</Badge>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-8 leading-tight text-white">
            Triagem inteligente que organiza sua fila
            <span className="block text-teal-400 mt-2 text-3xl md:text-5xl">antes do oftalmologista ver o primeiro paciente.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Uma única imagem de fundo de olho. Três patologias analisadas simultaneamente. Uma fila priorizada por urgência — com cada caso já documentado e pronto para decisão clínica.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-black uppercase text-white mb-12 text-center tracking-widest">
            COMO FUNCIONA <span className="text-teal-400">— FLUXO DE 4 ETAPAS</span>
          </h3>
          
          <div className="relative">
            <div className="space-y-8 relative">
              {/* Vertical line connecting the steps for desktop */}
              <div className="hidden md:block absolute top-12 bottom-12 left-12 w-1 bg-white/10 z-0"></div>

              {[
                {
                  step: "1",
                  title: "IDENTIFICAÇÃO NA ATENÇÃO PRIMÁRIA",
                  icon: <User className="w-8 h-8" />,
                  items: [
                    "O médico clínico identifica durante a consulta de rotina pacientes diabéticos, hipertensos ou com fatores de risco para glaucoma — e solicita retinografia como parte do protocolo de rastreamento."
                  ]
                },
                {
                  step: "2",
                  title: "RETINOGRAFIA",
                  icon: <Camera className="w-8 h-8" />,
                  items: [
                    "Técnico capacitado realiza o exame. A imagem é capturada e enviada automaticamente para processamento.",
                    "Equipamento: retinógrafo local. Sem necessidade de infraestrutura adicional."
                  ]
                },
                {
                  step: "3",
                  title: "ANÁLISE",
                  icon: <Cpu className="w-8 h-8" />,
                  items: [
                    "A Veredictos Vision processa a imagem e os dados clínicos do paciente (HbA1c, PA, PIO) e gera:",
                    "→ Detecção simultânea de 3 patologias: Retinopatia Diabética · Glaucoma · Retinopatia Hipertensiva",
                    "→ Relatório técnico com mapa de calor, localização precisa dos achados e análise morfométrica",
                    "→ Nível de prioridade definido:",
                    { text: "🔴 Urgente — consulta em 7 a 15 dias", indent: true },
                    { text: "🟠 Prioritário — consulta em 30 dias", indent: true },
                    { text: "🟡 Moderado — consulta em 60 dias", indent: true },
                    { text: "🟢 Rotina — consulta em 90 a 120 dias", indent: true }
                  ]
                },
                {
                  step: "4",
                  title: "OFTALMOLOGISTA POTENCIALIZADO",
                  icon: <Stethoscope className="w-8 h-8" />,
                  items: [
                    "O especialista abre o prontuário e encontra:",
                    "→ Caso já documentado com achados clínicos",
                    "→ Mapa de calor com localização das lesões",
                    "→ Fila organizada por urgência real",
                    "Foco total em decisão clínica. Zero tempo perdido em triagem manual."
                  ]
                }
              ].map((phase, i) => (
                <div key={i} className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-slate-950 border-4 border-teal-400/30 flex items-center justify-center text-teal-400 shrink-0 shadow-xl shadow-teal-900/50 mx-auto md:mx-0">
                    {phase.icon}
                  </div>
                  <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-6 md:p-8 flex-1 w-full relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
                    <div className="relative z-10">
                      <div className="mb-6 border-b border-white/10 pb-4 text-center md:text-left">
                        <span className="text-teal-400 font-black text-sm tracking-widest block mb-1">ETAPA {phase.step}</span>
                        <h5 className="text-white font-black uppercase text-xl">{phase.title}</h5>
                      </div>
                      <ul className="space-y-3">
                        {phase.items.map((item, j) => {
                          const isObject = typeof item === 'object';
                          const text = isObject ? item.text : item;
                          const indent = isObject && item.indent;
                          const isColorCoded = text.startsWith("🔴") || text.startsWith("🟠") || text.startsWith("🟡") || text.startsWith("🟢");
                          
                          return (
                            <li key={j} className={`text-sm md:text-base text-slate-300 font-medium flex items-start gap-3 ${indent ? 'ml-6' : ''}`}>
                              {!indent && !text.startsWith("→") && <span className="text-teal-400 mt-1 shrink-0">•</span>}
                              {indent && !isColorCoded && <span className="text-slate-500 mt-1 shrink-0">-</span>}
                              <span className={isColorCoded ? "font-bold" : ""}>
                                {text}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-24 text-center">
          <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-widest">
            ACURÁCIA
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 min-w-[280px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-7xl font-black text-teal-400 mb-2">96,2%</div>
                <div className="text-white font-bold uppercase tracking-widest mb-3">de acurácia</div>
                <p className="text-slate-400 font-medium text-sm">Detecta 96 de cada 100 casos graves.</p>
              </div>
            </GlassCard>
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 min-w-[280px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-7xl font-black text-blue-400 mb-2">94,6%</div>
                <div className="text-white font-bold uppercase tracking-widest mb-3">de sensibilidade</div>
                <p className="text-slate-400 font-medium text-sm">Evita 94 de cada 100 falsos alarmes.</p>
              </div>
            </GlassCard>
          </div>
          <p className="text-slate-400 italic max-w-3xl mx-auto">
            Resultados obtidos em validação interna sobre dataset próprio. Validação clínica em ambiente real em curso com o Centro Carioca do Olho.
          </p>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-black uppercase text-white mb-12 text-center tracking-widest">
            BENEFÍCIOS POR STAKEHOLDER
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-400/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-teal-400" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-wider">Para Gestores de Saúde</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Casos críticos atendidos em dias, não em meses",
                    "3x mais pacientes triados sem aumentar equipe ou infraestrutura",
                    "Rastreabilidade completa de cada decisão — segurança jurídica e auditoria simplificada",
                    "Conformidade com Resolução CFM 2.454/2026 desde o primeiro dia",
                    "Dashboard gerencial em tempo real"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>

            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-wider">Para Oftalmologistas</h4>
                </div>
                <ul className="space-y-4">
                  {[
                    "Cada caso chega pré-documentado — achados, mapas de calor e nível de prioridade já definidos",
                    "Foco em decisão clínica e casos complexos",
                    "Suporte à defesa médico-legal",
                    "Autonomia e responsabilidade clínica preservadas integralmente"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
            Quer ver o sistema funcionando na prática?
          </h3>
          <a href="/contato" className="inline-flex items-center justify-center gap-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(45,210,190,0.5)] uppercase tracking-wide">
            Agendar demonstração gratuita <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* SEÇÃO 4: FOUNDERS */}
      <SectionBackground className="bg-black !pt-16 !border-t-0 !border-b-0">
        <div className="mb-20 text-center">
          <Badge variant="teal">Nossa História</Badge>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-white">
            Fundado por Quem<br/>
            <span className="text-teal-400">Viveu o Problema de Perto</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
            Combinamos experiência técnica de ponta com profundo entendimento do SUS brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* Gabriel Maia */}
          <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-teal-400"></div>
            <div className="flex flex-col h-full relative z-10 p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-teal-400/30 overflow-hidden flex-shrink-0">
                  <img src="https://i.imgur.com/IwEAcpq_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Gabriel Maia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider">Gabriel Maia</h3>
                    <a href="https://www.linkedin.com/in/gabrielmaiavarella/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-teal-400 font-black uppercase tracking-widest text-sm">CEO & Co-Fundador</p>
                </div>
              </div>
              
              <div className="p-6 bg-teal-400/5 rounded-2xl border border-teal-400/10 relative mb-8 flex-grow">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-teal-400/30 rotate-180" />
                <p className="text-slate-300 font-medium leading-relaxed italic relative z-10">
                  "Meu avô ficou cego por falta de triagem preventiva. Construí a Veredictos Vision para que isso não aconteça com milhões de brasileiros."
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Gerente de Produtos",
                  "Especialista em soluções de IA de multi-agentes",
                  "Google for Startups Bootcamp SP 2025",
                  "1º lugar mundial CrewAI Challenge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                    <span className="text-teal-400 mt-1 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Pedro Afonso */}
          <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 relative overflow-hidden group hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="flex flex-col h-full relative z-10 p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-blue-500/30 overflow-hidden flex-shrink-0">
                  <img src="https://i.imgur.com/40DXd4t_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Pedro Afonso" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider">Pedro Afonso</h3>
                    <a href="https://www.linkedin.com/in/pedro-afonso-b136b9326/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-blue-400 font-black uppercase tracking-widest text-sm">CTO & Co-Fundador</p>
                </div>
              </div>
              
              <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10 relative mb-8 flex-grow">
                <Quote className="absolute -top-3 -left-3 w-6 h-6 text-blue-500/30 rotate-180" />
                <p className="text-slate-300 font-medium leading-relaxed italic relative z-10">
                  "Sistemas de IA na medicina precisam ser transparentes e auditáveis. Construímos isso desde o primeiro dia."
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Engenheiro de Machine Learning",
                  "Arquiteto de sistemas multi-agente",
                  "Especialista em IA médica reprodutível",
                  "1º lugar mundial CrewAI Challenge"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>

        {/* Dr. João Batista */}
        <div className="max-w-3xl mx-auto">
          <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 relative overflow-hidden group hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 p-8">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-purple-500/30 overflow-hidden flex-shrink-0">
                <img src="https://i.imgur.com/4DzxfYT_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="Dr. João Batista" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-1">Dr. João Batista</h3>
                <p className="text-purple-400 font-black uppercase tracking-widest text-sm mb-6">Advisor Médico | Oftalmologista | Co-Founder</p>
                
                <ul className="space-y-3 inline-block text-left">
                  {[
                    "8 anos de experiência em Oftalmologia",
                    "Mestrado em Medicina — UNIRIO",
                    "Fellowship em Córnea, Ceratocone e Lentes de Contato — UERJ",
                    "Graduação sanduíche UERJ / De Montfort University (Reino Unido)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                      <span className="text-purple-500 mt-1 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* SEÇÃO 5: VALIDAÇÃO E TRAÇÃO */}
      <SectionBackground className="bg-black !pt-16 !border-t-0">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-white">
              Reconhecida. Validada.<br/>
              <span className="text-teal-400">Em operação no SUS.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-4xl mx-auto leading-relaxed">
              Do desenvolvimento ao protocolo clínico formalizado — com Acordo de Cooperação Técnica assinado com a Secretaria Municipal de Saúde do Rio de Janeiro e o Centro Carioca do Olho / SPDM.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* VÍDEO GLOBO */}
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <h3 className="text-xl font-black uppercase mb-6 border-b border-white/10 pb-4 italic text-white flex items-center gap-3">
                <span className="text-2xl">📺</span> Na Mídia
              </h3>
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                <iframe 
                  className="absolute inset-0 w-full h-full border-0"
                  src="https://www.youtube.com/embed/q1-cLnz5XrE?autoplay=0&controls=1&modestbranding=1" 
                  title="Veredictos Vision na Mídia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-lg text-slate-300 font-medium leading-relaxed">
                A Rede Globo cobriu a tecnologia que está transformando a triagem oftalmológica no SUS carioca.
              </p>
            </GlassCard>

            {/* PARCERIAS INSTITUCIONAIS */}
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <h3 className="text-xl font-black uppercase mb-6 border-b border-white/10 pb-4 italic text-white flex items-center gap-3">
                <span className="text-2xl">🤝</span> Parcerias Institucionais
              </h3>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-24 h-24 flex items-center justify-center shrink-0 overflow-hidden">
                      <img src="https://i.imgur.com/3FyzQ90.png" alt="SMS RJ" className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-lg font-black text-white uppercase tracking-wider">Secretaria Municipal de Saúde — Rio de Janeiro</h4>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm">
                    Acordo de Cooperação Técnica firmado com a Secretaria Municipal de Saúde do Rio de Janeiro para implantação do protocolo de triagem oftalmológica inteligente na rede municipal. A Veredictos Vision é a solução tecnológica para detecção de retinopatia diabética, glaucoma e retinopatia hipertensiva no SUS carioca.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl bg-teal-400/20 flex items-center justify-center font-black text-teal-400 text-xs text-center leading-tight shrink-0">CCO</div>
                    <h4 className="text-lg font-black text-white uppercase tracking-wider">Centro Carioca do Olho</h4>
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm">
                    Parceria técnica formalizada com o Centro Carioca do Olho / SPDM — principal centro de referência em oftalmologia do Rio de Janeiro e executor técnico do Acordo de Cooperação Técnica com a SMS-Rio. Validação clínica do protocolo de triagem multi-patologia em curso.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* RECONHECIMENTOS */}
            <GlassCard className="bg-white/[0.02] backdrop-blur-md border-white/5 p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
              <h3 className="text-xl font-black uppercase mb-6 border-b border-white/10 pb-4 italic text-white flex items-center gap-3">
                <span className="text-2xl">🏆</span> Reconhecimentos
              </h3>
              <div className="relative z-10 space-y-8 flex-grow">
                <div className="flex items-start gap-6">
                  <div className="w-28 h-28 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://i.imgur.com/ydf9BB2.png" alt="Crew AI" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-wider mb-1">1º Lugar Mundial — CrewAI Challenge</h4>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                      Competição global de inteligência artificial. Selecionados entre centenas de projetos de mais de 40 países pela arquitetura inovadora de análise médica multi-agente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-28 h-28 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://i.imgur.com/1raQGkI.png" alt="NVIDIA Inception" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-wider mb-1">NVIDIA Inception</h4>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                      Parceiros do programa NVIDIA Inception — rede global de startups de tecnologia de ponta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-28 h-28 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://i.imgur.com/QbuXpJk.png" alt="Google for Startups" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-wider mb-1">Google for Startups</h4>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed">
                      Selecionados para o Google for Startups Bootcamp São Paulo 2025.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* SEÇÃO 6: CTA FINAL */}
      <SectionBackground id="pioneiros" className="bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="teal">Oportunidade Exclusiva</Badge>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight text-white">
            Sua rede pode fechar o ano com a fila controlada e o orçamento executado.
          </h2>
          <p className="text-xl md:text-2xl text-teal-400 font-bold mb-8 uppercase tracking-wide">
            E a produção registrada no sistema.
          </p>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-12 leading-relaxed max-w-2xl mx-auto">
            O Rio de Janeiro assinou. A implementação começa agora. Estamos selecionando os próximos municípios parceiros.
          </p>
          <Link 
            to="/contato"
            className="group inline-flex items-center gap-4 px-10 py-6 bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xl md:text-2xl rounded-full shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wide"
          >
            Quero ser parceiro estratégico
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </SectionBackground>

      {/* Glowing Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2dd2be] to-transparent shadow-[0_0_20px_rgba(45,210,190,0.8)] relative z-30"></div>

      {/* FOOTER */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          <div>
            <h4 className="text-3xl font-black tracking-tighter text-white mb-10 italic">VEREDICTOS <span className="text-teal-400">VISION</span></h4>
            <div className="space-y-8">
              <a href={whatsappLink} className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic">+55 21 99543-5384</span>
              </a>
              <a href="mailto:contato@veredictos.com" className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic">contato@veredictos.com</span>
              </a>
              <a href="https://www.linkedin.com/in/gabrielmaiavarella/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-400/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold italic underline decoration-teal-400/30">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="lg:text-right flex flex-col justify-end">
            <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-xs">Informações Corporativas</p>
            <p className="text-slate-300 font-black text-xl mb-2">CNPJ: 62.358.893/0001-07</p>
            <p className="text-slate-600 text-sm italic">Veredictos Vision - Rio de Janeiro, Brasil.</p>
            <div className="mt-12 pt-8 border-t border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-widest">
              A pergunta não é "se funciona". É: você vai implementar antes ou depois dos seus vizinhos?
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-teal-400 selection:text-slate-950 flex flex-col">
      {/* HEADER SIMPLES PARA VOLTAR */}
      <div className="p-6 md:p-12 absolute top-0 left-0 z-50">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors font-bold uppercase tracking-widest text-xs bg-slate-900/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/5">
          <ArrowRight className="w-4 h-4 rotate-180" /> Voltar para o início
        </Link>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        <SectionBackground className="bg-black !pt-32 !border-b-0">
          <div className="max-w-5xl mx-auto text-center">
            <Badge variant="teal">Contato</Badge>
            <h1 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-white">
              Vamos conversar sobre como implementar na<br/>
              <span className="text-teal-400">sua rede.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-16 leading-relaxed max-w-3xl mx-auto">
              Escolha o canal mais conveniente e nossa equipe responde em até 1 dia útil.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group">
                <GlassCard className="h-full flex flex-col items-center justify-center p-8 md:p-12 hover:border-teal-400/30 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 bg-slate-900/50">
                  <div className="w-20 h-20 bg-teal-400/10 rounded-2xl flex items-center justify-center text-teal-400 mb-8 group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white mb-3">WhatsApp</h3>
                  <p className="text-base text-slate-400 font-medium mb-8">Resposta mais rápida</p>
                  <span className="text-sm font-black uppercase tracking-widest text-teal-400 flex items-center gap-2">
                    Falar pelo WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </a>

              <a href="mailto:contato@veredictos.com" className="group">
                <GlassCard className="h-full flex flex-col items-center justify-center p-8 md:p-12 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 bg-slate-900/50">
                  <div className="w-20 h-20 bg-blue-400/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-400 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white mb-3">E-mail</h3>
                  <p className="text-base text-slate-400 font-medium mb-8">Propostas e parcerias</p>
                  <span className="text-sm font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
                    contato@veredictos.com <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </a>

              <a href="https://www.linkedin.com/company/veredictos" target="_blank" rel="noopener noreferrer" className="group">
                <GlassCard className="h-full flex flex-col items-center justify-center p-8 md:p-12 hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 bg-slate-900/50">
                  <div className="w-20 h-20 bg-purple-400/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-400 group-hover:text-slate-950 transition-colors">
                    <Linkedin className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white mb-3">LinkedIn</h3>
                  <p className="text-base text-slate-400 font-medium mb-8">Acompanhe as novidades</p>
                  <span className="text-sm font-black uppercase tracking-widest text-purple-400 flex items-center gap-2">
                    Seguir página <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlassCard>
              </a>
            </div>
          </div>
        </SectionBackground>
      </div>

      {/* FOOTER */}
      <section className="py-12 bg-black border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-500 font-bold mb-2 uppercase tracking-widest text-xs">Veredictos Tecnologia e Inovação LTDA</p>
          <p className="text-slate-400 font-medium text-sm">CNPJ: 62.358.893/0001-07 | Rio de Janeiro, RJ — Brasil</p>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
