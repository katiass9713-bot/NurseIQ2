import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Book, 
  Search, 
  Stethoscope, 
  FlaskConical, 
  Brain, 
  Activity, 
  ChevronRight, 
  Info,
  Menu,
  X,
  ShieldAlert,
  Thermometer,
  HeartPulse,
  Pill,
  BookOpen,
  LayoutList,
  ClipboardCheck
} from 'lucide-react';
import { pathologies, Pathology } from './data/pathologies';
import { technicalTerms, TechnicalTerm } from './data/terms';
import { pharmacology, Drug } from './data/pharmacology';
import { scales, protocols, Scale } from './data/scales';
import { cn } from './lib/utils';

type Tab = 'HOME' | 'ALMANAC' | 'TERMS' | 'PHARMA' | 'SCALES';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredPathologies = useMemo(() => {
    return pathologies.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? p.name.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const filteredTerms = useMemo(() => {
    return technicalTerms.filter(t => {
      const matchesSearch = t.term.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? t.term.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedLetter]);

  const filteredPharma = useMemo(() => {
    return pharmacology.filter(d => {
      const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.class.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? d.name.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const filteredScales = useMemo(() => {
    return scales.filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? s.name.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSearchQuery('');
    setSelectedItem(null);
    setSelectedLetter(null);
    setIsSidebarOpen(false);
  };

  if (activeTab === 'HOME') {
    return (
      <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans flex flex-col items-center justify-center p-6 overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-16 max-w-4xl relative z-10"
        >
          <div className="space-y-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-[#0A0A0A] border border-[#00FF00]/30 rounded-[2rem] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(0,255,0,0.1)]"
            >
              <Activity className="text-[#00FF00] w-12 h-12" />
            </motion.div>
            <div className="space-y-2">
              <h1 className="text-7xl font-black tracking-tighter">NurseIQ <span className="text-[#00FF00]">Pro</span></h1>
              <p className="text-[#00FF00]/40 font-bold uppercase tracking-[0.5em] text-[10px]">Clinical Intelligence Almanac</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HomeButton 
              icon={<BookOpen className="w-6 h-6" />} 
              label="Almanaque" 
              onClick={() => handleTabChange('ALMANAC')} 
            />
            <HomeButton 
              icon={<ClipboardCheck className="w-6 h-6" />} 
              label="Escalas" 
              onClick={() => handleTabChange('SCALES')} 
            />
            <HomeButton 
              icon={<Pill className="w-6 h-6" />} 
              label="Farmacologia" 
              onClick={() => handleTabChange('PHARMA')} 
            />
            <HomeButton 
              icon={<Book className="w-6 h-6" />} 
              label="Termos A-Z" 
              onClick={() => handleTabChange('TERMS')} 
            />
          </div>

          <footer className="pt-12 opacity-30">
            <p className="text-[9px] font-black uppercase tracking-[0.6em]">Protocolos Baseados em Evidências // v6.1.0</p>
          </footer>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans flex overflow-hidden">
      {/* Sidebar Mobile Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 p-3 bg-[#0A0A0A] border border-[#00FF00]/30 rounded-2xl shadow-2xl text-[#00FF00]"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-80 bg-[#0A0A0A] border-r border-[#1A1A1A] transition-transform lg:translate-x-0 lg:static lg:block shrink-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-10 border-b border-[#1A1A1A]">
          <button 
            onClick={() => handleTabChange('HOME')}
            className="flex items-center gap-4 mb-2 group"
          >
            <div className="w-12 h-12 bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Activity className="text-[#00FF00] w-7 h-7" />
            </div>
            <h1 className="font-black tracking-tight text-2xl">NurseIQ <span className="text-[#00FF00]">Pro</span></h1>
          </button>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black">Clinical Almanac v6.1</p>
        </div>

        <nav className="p-8 space-y-4">
          <SidebarButton 
            active={activeTab === 'ALMANAC'} 
            onClick={() => handleTabChange('ALMANAC')} 
            icon={<BookOpen className="w-5 h-5" />} 
            label="Almanaque" 
          />
          <SidebarButton 
            active={activeTab === 'SCALES'} 
            onClick={() => handleTabChange('SCALES')} 
            icon={<ClipboardCheck className="w-5 h-5" />} 
            label="Escalas & Protocolos" 
          />
          <SidebarButton 
            active={activeTab === 'PHARMA'} 
            onClick={() => handleTabChange('PHARMA')} 
            icon={<Pill className="w-5 h-5" />} 
            label="Farmacologia" 
          />
          <SidebarButton 
            active={activeTab === 'TERMS'} 
            onClick={() => handleTabChange('TERMS')} 
            icon={<Book className="w-5 h-5" />} 
            label="Termos A-Z" 
          />
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-10 border-t border-[#1A1A1A] bg-[#0A0A0A]">
          <div className="flex items-center gap-3 opacity-40">
            <ShieldAlert className="w-4 h-4 text-[#00FF00]" />
            <span className="text-[9px] uppercase tracking-[0.3em] font-black">Evidência Científica</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#050505]">
        {/* Header / Search */}
        <header className="bg-[#0A0A0A]/50 backdrop-blur-xl border-b border-[#1A1A1A] p-10 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black text-white tracking-tighter">
              {activeTab === 'ALMANAC' && "Almanaque Clínico"}
              {activeTab === 'SCALES' && "Escalas & Protocolos"}
              {activeTab === 'PHARMA' && "Guia Farmacológico"}
              {activeTab === 'TERMS' && "Terminologia Técnica"}
            </h2>
            <button 
              onClick={() => handleTabChange('HOME')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-[#00FF00] transition-colors"
            >
              Voltar
            </button>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-8 py-5 bg-[#0A0A0A] border border-[#1A1A1A] rounded-[1.5rem] text-lg focus:ring-2 focus:ring-[#00FF00]/50 focus:border-[#00FF00] transition-all font-medium text-white placeholder-zinc-700"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              <button 
                onClick={() => setSelectedLetter(null)}
                className={cn(
                  "px-5 py-3 rounded-xl text-[10px] font-black transition-all shrink-0 border",
                  selectedLetter === null ? "bg-[#00FF00] text-black border-[#00FF00]" : "bg-[#0A0A0A] text-zinc-500 border-[#1A1A1A] hover:border-zinc-700"
                )}
              >
                TODOS
              </button>
              {alphabet.map(l => (
                <button 
                  key={l}
                  onClick={() => setSelectedLetter(l)}
                  className={cn(
                    "px-5 py-3 rounded-xl text-[10px] font-black transition-all shrink-0 border",
                    selectedLetter === l ? "bg-[#00FF00] text-black border-[#00FF00]" : "bg-[#0A0A0A] text-zinc-500 border-[#1A1A1A] hover:border-zinc-700"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* List View */}
          <div className="w-full md:w-96 border-r border-[#1A1A1A] overflow-y-auto bg-[#0A0A0A]/30 shrink-0 no-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="divide-y divide-[#1A1A1A]"
              >
                {activeTab === 'ALMANAC' && filteredPathologies.map(p => (
                  <ListItem 
                    key={p.id} 
                    active={selectedItem?.id === p.id} 
                    onClick={() => setSelectedItem(p)}
                    title={p.name}
                    subtitle={p.category}
                    tags={p.ageGroups}
                  />
                ))}

                {activeTab === 'SCALES' && filteredScales.map(s => (
                  <ListItem 
                    key={s.id} 
                    active={selectedItem?.id === s.id} 
                    onClick={() => setSelectedItem(s)}
                    title={s.name}
                    subtitle="Escala Clínica"
                  />
                ))}

                {activeTab === 'TERMS' && filteredTerms.map(t => (
                  <ListItem 
                    key={t.term} 
                    active={selectedItem?.term === t.term} 
                    onClick={() => setSelectedItem(t)}
                    title={t.term}
                  />
                ))}

                {activeTab === 'PHARMA' && filteredPharma.map(d => (
                  <ListItem 
                    key={d.name} 
                    active={selectedItem?.name === d.name} 
                    onClick={() => setSelectedItem(d)}
                    title={d.name}
                    subtitle={d.class}
                  />
                ))}

                {(activeTab === 'ALMANAC' ? filteredPathologies : activeTab === 'TERMS' ? filteredTerms : activeTab === 'PHARMA' ? filteredPharma : filteredScales).length === 0 && (
                  <div className="p-20 text-center">
                    <Info className="w-12 h-12 text-zinc-800 mx-auto mb-6" />
                    <p className="text-xs text-zinc-600 font-black uppercase tracking-widest">Nenhum resultado.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Detail View */}
          <div className="hidden md:block flex-1 overflow-y-auto bg-[#050505] p-16 no-scrollbar">
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div 
                  key={selectedItem.id || selectedItem.term || selectedItem.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-5xl mx-auto space-y-12"
                >
                  {/* Header Detail */}
                  <div className="bg-[#0A0A0A] p-12 rounded-[2.5rem] border border-[#1A1A1A] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF00]/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                    
                    <div className="flex items-center gap-8 mb-8 relative z-10">
                      <div className="w-20 h-20 bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                        {activeTab === 'ALMANAC' && <Stethoscope className="text-[#00FF00] w-10 h-10" />}
                        {activeTab === 'SCALES' && <ClipboardCheck className="text-[#00FF00] w-10 h-10" />}
                        {activeTab === 'TERMS' && <Book className="text-[#00FF00] w-10 h-10" />}
                        {activeTab === 'PHARMA' && <Pill className="text-[#00FF00] w-10 h-10" />}
                      </div>
                      <div>
                        <h3 className="text-5xl font-black text-white tracking-tighter">{selectedItem.name || selectedItem.term}</h3>
                        <p className="text-lg text-[#00FF00]/60 font-bold uppercase tracking-widest mt-2">
                          {selectedItem.category || (activeTab === 'TERMS' ? 'Terminologia Técnica' : selectedItem.class)}
                        </p>
                      </div>
                    </div>

                    {activeTab === 'ALMANAC' && (
                      <div className="flex gap-4 border-t border-[#1A1A1A] pt-10 mt-10 relative z-10">
                        {selectedItem.ageGroups.map((g: string) => (
                          <span key={g} className="px-6 py-3 bg-[#1A1A1A] border border-[#333] rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-400">{g}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body Detail */}
                  <div className="grid grid-cols-1 gap-10">
                    {activeTab === 'ALMANAC' && (
                      <>
                        <Section title="Fisiopatologia" icon={<Brain className="w-5 h-5" />}>
                          <p className="text-zinc-400 leading-relaxed text-xl font-medium">{selectedItem.pathophysiology}</p>
                        </Section>

                        <Section title="Sinais e Sintomas" icon={<Thermometer className="w-5 h-5" />}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {selectedItem.signsSymptoms.map((s: string) => (
                              <div key={s} className="flex items-center gap-4 text-lg text-zinc-300 font-semibold bg-[#0A0A0A] p-6 rounded-2xl border border-[#1A1A1A]">
                                <div className="w-2.5 h-2.5 bg-[#00FF00] rounded-full shadow-[0_0_15px_#00FF00]" /> {s}
                              </div>
                            ))}
                          </div>
                        </Section>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                          <Section title="NANDA" icon={<ShieldAlert className="w-5 h-5" />}>
                            <ul className="space-y-4">
                              {selectedItem.nanda.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-400 font-bold italic border-l-2 border-[#00FF00] pl-4">{n}</li>
                              ))}
                            </ul>
                          </Section>
                          <Section title="NIC" icon={<Activity className="w-5 h-5" />}>
                            <ul className="space-y-4">
                              {selectedItem.nic.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-300 font-bold bg-[#1A1A1A] p-4 rounded-xl border border-[#333]">{n}</li>
                              ))}
                            </ul>
                          </Section>
                          <Section title="NOC" icon={<HeartPulse className="w-5 h-5" />}>
                            <ul className="space-y-4">
                              {selectedItem.noc.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-400 font-bold border-b border-[#1A1A1A] pb-3">{n}</li>
                              ))}
                            </ul>
                          </Section>
                        </div>

                        <Section title="Farmacologia Aplicada" icon={<Pill className="w-5 h-5" />}>
                          <div className="bg-[#0A0A0A] text-[#00FF00] p-8 rounded-3xl font-mono text-base leading-relaxed border border-[#00FF00]/20 shadow-[inset_0_0_30px_rgba(0,255,0,0.05)]">
                            {selectedItem.pharmacology}
                          </div>
                        </Section>
                      </>
                    )}

                    {activeTab === 'SCALES' && (
                      <>
                        <Section title="Descrição" icon={<Info className="w-5 h-5" />}>
                          <p className="text-zinc-400 leading-relaxed text-xl font-medium">{selectedItem.description}</p>
                        </Section>
                        
                        <Section title="Parâmetros de Avaliação" icon={<LayoutList className="w-5 h-5" />}>
                          <div className="grid grid-cols-1 gap-4">
                            {selectedItem.parameters.map((p: string) => (
                              <div key={p} className="bg-[#0A0A0A] p-6 rounded-2xl border border-[#1A1A1A] text-zinc-300 font-bold">
                                {p}
                              </div>
                            ))}
                          </div>
                        </Section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <Section title="Interpretação" icon={<Activity className="w-5 h-5" />}>
                            <div className="bg-[#00FF00]/5 border border-[#00FF00]/20 p-8 rounded-3xl text-[#00FF00] font-black text-lg">
                              {selectedItem.interpretation}
                            </div>
                          </Section>
                          <Section title="Aplicação" icon={<ClipboardCheck className="w-5 h-5" />}>
                            <div className="bg-[#1A1A1A] border border-[#333] p-8 rounded-3xl text-zinc-400 font-bold text-lg">
                              {selectedItem.application}
                            </div>
                          </Section>
                        </div>
                      </>
                    )}

                    {activeTab === 'TERMS' && (
                      <Section title="Definição Técnica" icon={<Info className="w-5 h-5" />}>
                        <p className="text-3xl text-zinc-200 leading-relaxed font-serif italic">"{selectedItem.definition}"</p>
                      </Section>
                    )}

                    {activeTab === 'PHARMA' && (
                      <>
                        <Section title="Indicação Clínica" icon={<Info className="w-5 h-5" />}>
                          <p className="text-xl text-zinc-300 font-semibold">{selectedItem.indication}</p>
                        </Section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <Section title="Diluição e Preparo" icon={<FlaskConical className="w-5 h-5" />}>
                            <div className="bg-blue-500/5 p-8 rounded-3xl border border-blue-500/20">
                              <p className="text-lg text-blue-400 font-black leading-relaxed">{selectedItem.dilution}</p>
                            </div>
                          </Section>
                          <Section title="Posologia / Dose" icon={<Activity className="w-5 h-5" />}>
                            <div className="bg-[#00FF00]/5 p-8 rounded-3xl border border-[#00FF00]/20">
                              <p className="text-lg text-[#00FF00] font-black leading-relaxed">{selectedItem.dosage}</p>
                            </div>
                          </Section>
                        </div>

                        <Section title="Cuidados de Enfermagem" icon={<ShieldAlert className="w-5 h-5" />}>
                          <ul className="space-y-6">
                            {selectedItem.nursingCare.map((c: string) => (
                              <li key={c} className="flex gap-6 text-lg text-zinc-300 font-bold bg-[#0A0A0A] p-8 rounded-[2rem] border border-[#1A1A1A] shadow-2xl">
                                <span className="w-10 h-10 bg-[#00FF00] text-black rounded-full flex items-center justify-center font-black shrink-0 shadow-[0_0_20px_rgba(0,255,0,0.4)]">!</span> 
                                {c}
                              </li>
                            ))}
                          </ul>
                        </Section>
                      </>
                    )}
                  </div>

                  <footer className="pt-20 pb-16 text-center border-t border-[#1A1A1A]">
                    <p className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.8em]">NurseIQ Clinical Database // Evidence-Based Protocols // v6.1.0</p>
                  </footer>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-800">
                  <div className="relative mb-12">
                    <div className="absolute -inset-12 bg-[#00FF00]/5 blur-[100px] rounded-full" />
                    <BookOpen className="w-32 h-32 opacity-10 relative z-10" />
                  </div>
                  <p className="font-black uppercase tracking-[0.4em] text-zinc-700">Selecione um item para análise</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

function HomeButton({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="neon-button flex flex-col items-center gap-6 p-10 group"
    >
      <div className="w-16 h-16 bg-border-dark border border-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-neon-green group-hover:border-neon-green transition-all shadow-2xl">
        <div className="text-zinc-500 group-hover:text-black transition-colors">{icon}</div>
      </div>
      <span className="font-black uppercase tracking-[0.3em] text-[10px] text-zinc-500 group-hover:text-neon-green transition-colors">{label}</span>
    </motion.button>
  );
}

function SidebarButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-5 px-6 py-5 rounded-2xl transition-all text-[11px] font-black uppercase tracking-[0.2em] border-2",
        active ? "neon-border-active text-neon-green" : "border-transparent text-zinc-600 hover:bg-border-dark hover:text-zinc-300"
      )}
    >
      {icon} {label}
    </button>
  );
}

function ListItem({ active, onClick, title, subtitle, tags }: { active: boolean, onClick: () => void, title: string, subtitle?: string, tags?: string[] }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full text-left p-8 hover:bg-border-dark/50 transition-all group border-l-4",
        active ? "bg-border-dark border-neon-green" : "border-transparent"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={cn(
          "font-black text-lg tracking-tight transition-colors",
          active ? "text-neon-green" : "text-zinc-400 group-hover:text-white"
        )}>{title}</span>
        <ChevronRight className={cn("w-5 h-5 transition-transform", active ? "text-neon-green translate-x-1" : "text-zinc-800")} />
      </div>
      {(subtitle || tags) && (
        <div className="flex flex-wrap gap-2">
          {subtitle && <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 bg-border-dark px-3 py-1.5 rounded-lg border border-zinc-800">{subtitle}</span>}
          {tags?.map(g => (
            <span key={g} className="text-[9px] font-black uppercase tracking-widest text-neon-green/60 bg-neon-green/5 px-3 py-1.5 rounded-lg border border-neon-green/20">{g}</span>
          ))}
        </div>
      )}
    </button>
  );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-card-dark p-10 rounded-[2.5rem] border border-border-dark shadow-2xl">
      <h4 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] flex items-center gap-4 mb-8">
        <div className="p-3 bg-border-dark border border-zinc-800 rounded-xl text-neon-green">{icon}</div> {title}
      </h4>
      {children}
    </div>
  );
}
