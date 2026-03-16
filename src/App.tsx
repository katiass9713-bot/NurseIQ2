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
  ClipboardCheck,
  FileSignature,
  Users,
  ArrowLeft,
  Moon,
  Sun,
  FileText,
  Syringe
} from 'lucide-react';
import { pathologies, Pathology } from './data/pathologies';
import { technicalTerms, TechnicalTerm } from './data/terms';
import { pharmacology, Drug } from './data/pharmacology';
import { scales, protocols, Scale } from './data/scales';
import { prescriptions, Prescription } from './data/prescriptions';
import { consultations, ConsultationTopic } from './data/consultations';
import { cn } from './lib/utils';

type Tab = 'HOME' | 'ALMANAC' | 'TERMS' | 'PHARMA' | 'SCALES' | 'PRESCRIPTION' | 'CONSULTATION';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('HOME');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  React.useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

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
      const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? s.name.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const filteredProtocols = useMemo(() => {
    return protocols.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.steps.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLetter = selectedLetter ? p.name.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedLetter]);

  const filteredPrescriptions = useMemo(() => {
    return prescriptions.filter(p => {
      const matchesSearch = p.condition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.medication.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter ? p.condition.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.condition.localeCompare(b.condition));
  }, [searchQuery, selectedLetter]);

  const filteredConsultations = useMemo(() => {
    return consultations.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLetter = selectedLetter ? c.title.toUpperCase().startsWith(selectedLetter) : true;
      return matchesSearch && matchesLetter;
    }).sort((a, b) => a.title.localeCompare(b.title));
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
      <div className="min-h-[100dvh] bg-bg-dark text-zinc-100 font-sans flex flex-col items-center justify-center p-6 overflow-hidden relative transition-colors duration-300">
        {/* Theme Toggle */}
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="absolute top-6 right-6 z-50 p-3 bg-card-dark border border-white/20 rounded-full shadow-2xl text-white hover:scale-110 transition-transform"
        >
          {isLightMode ? <Moon strokeWidth={1.5} className="w-5 h-5" /> : <Sun strokeWidth={1.5} className="w-5 h-5" />}
        </button>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        
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
              className="w-24 h-24 bg-card-dark border border-white/20 rounded-[3rem] mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <Activity className="text-white w-12 h-12" strokeWidth={1.5} />
            </motion.div>
            <div className="space-y-2">
              <h1 className="text-7xl font-black tracking-tighter">NurseIQ <span className="text-white">Pro</span></h1>
              <p className="text-white/40 font-bold uppercase tracking-[0.5em] text-[10px]">Clinical Intelligence Almanac</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <HomeButton 
              icon={<BookOpen className="w-6 h-6" strokeWidth={1.5} />} 
              label="Almanaque" 
              onClick={() => handleTabChange('ALMANAC')} 
            />
            <HomeButton 
              icon={<ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />} 
              label="Escalas" 
              onClick={() => handleTabChange('SCALES')} 
            />
            <HomeButton 
              icon={<Pill className="w-6 h-6" strokeWidth={1.5} />} 
              label="Farmacologia" 
              onClick={() => handleTabChange('PHARMA')} 
            />
            <HomeButton 
              icon={<Book className="w-6 h-6" strokeWidth={1.5} />} 
              label="Termos A-Z" 
              onClick={() => handleTabChange('TERMS')} 
            />
            <HomeButton 
              icon={<FileSignature className="w-6 h-6" strokeWidth={1.5} />} 
              label="Prescrição" 
              onClick={() => handleTabChange('PRESCRIPTION')} 
            />
            <HomeButton 
              icon={<Users className="w-6 h-6" strokeWidth={1.5} />} 
              label="Consulta" 
              onClick={() => handleTabChange('CONSULTATION')} 
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
    <div className="h-[100dvh] bg-bg-dark text-zinc-100 font-sans flex overflow-hidden transition-colors duration-300">
      {/* Sidebar Mobile Toggle */}
      <div className="lg:hidden fixed top-6 right-6 z-50 flex gap-3">
        <button 
          onClick={() => setIsLightMode(!isLightMode)}
          className="p-3 bg-card-dark border border-white/30 rounded-full shadow-2xl text-white"
        >
          {isLightMode ? <Moon strokeWidth={1.5} className="w-5 h-5" /> : <Sun strokeWidth={1.5} className="w-5 h-5" />}
        </button>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-3 bg-card-dark border border-white/30 rounded-full shadow-2xl text-white"
        >
          {isSidebarOpen ? <X strokeWidth={1.5} className="w-5 h-5" /> : <Menu strokeWidth={1.5} className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-80 bg-card-dark border-r border-border-dark transition-transform lg:translate-x-0 lg:static lg:block shrink-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-10 border-b border-border-dark relative shrink-0">
          <button 
            onClick={() => setIsLightMode(!isLightMode)}
            className="hidden lg:flex absolute top-10 right-8 p-2 bg-white/5 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
          >
            {isLightMode ? <Moon strokeWidth={1.5} className="w-4 h-4" /> : <Sun strokeWidth={1.5} className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => handleTabChange('HOME')}
            className="flex items-center gap-4 mb-2 group"
          >
            <div className="text-white group-hover:scale-110 transition-transform">
              <Activity className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h1 className="font-black tracking-tight text-2xl">NurseIQ <span className="text-white">Pro</span></h1>
          </button>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-black">Clinical Almanac v6.1</p>
        </div>

        <nav className="p-8 space-y-4 overflow-y-auto flex-1 no-scrollbar pb-32">
          <SidebarButton 
            active={activeTab === 'ALMANAC'} 
            onClick={() => handleTabChange('ALMANAC')} 
            icon={<BookOpen className="w-5 h-5" strokeWidth={1.5} />} 
            label="Almanaque" 
          />
          <SidebarButton 
            active={activeTab === 'SCALES'} 
            onClick={() => handleTabChange('SCALES')} 
            icon={<ClipboardCheck className="w-5 h-5" strokeWidth={1.5} />} 
            label="Escalas & Protocolos" 
          />
          <SidebarButton 
            active={activeTab === 'PHARMA'} 
            onClick={() => handleTabChange('PHARMA')} 
            icon={<Pill className="w-5 h-5" strokeWidth={1.5} />} 
            label="Farmacologia" 
          />
          <SidebarButton 
            active={activeTab === 'TERMS'} 
            onClick={() => handleTabChange('TERMS')} 
            icon={<Book className="w-5 h-5" strokeWidth={1.5} />} 
            label="Termos A-Z" 
          />
          <SidebarButton 
            active={activeTab === 'PRESCRIPTION'} 
            onClick={() => handleTabChange('PRESCRIPTION')} 
            icon={<FileSignature className="w-5 h-5" strokeWidth={1.5} />} 
            label="Prescrição" 
          />
          <SidebarButton 
            active={activeTab === 'CONSULTATION'} 
            onClick={() => handleTabChange('CONSULTATION')} 
            icon={<Users className="w-5 h-5" strokeWidth={1.5} />} 
            label="Consulta" 
          />
        </nav>

        <div className="p-10 border-t border-border-dark bg-card-dark shrink-0">
          <div className="flex items-center gap-3 opacity-40">
            <ShieldAlert className="w-4 h-4 text-white" strokeWidth={1.5} />
            <span className="text-[9px] uppercase tracking-[0.3em] font-black">Evidência Científica</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-[100dvh] min-w-0 overflow-hidden bg-bg-dark">
        {/* Header / Search */}
        <header className={cn("bg-card-dark/50 backdrop-blur-xl border-b border-border-dark p-10 flex-col gap-8", selectedItem ? "hidden md:flex" : "flex")}>
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black text-white tracking-tighter">
              {activeTab === 'ALMANAC' && "Almanaque Clínico"}
              {activeTab === 'SCALES' && "Escalas & Protocolos"}
              {activeTab === 'PHARMA' && "Guia Farmacológico"}
              {activeTab === 'TERMS' && "Terminologia Técnica"}
              {activeTab === 'PRESCRIPTION' && "Guia de Prescrição"}
              {activeTab === 'CONSULTATION' && "Consulta de Enfermagem"}
            </h2>
            <button 
              onClick={() => handleTabChange('HOME')}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors"
            >
              Voltar
            </button>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5" strokeWidth={1.5} />
              <input 
                type="text" 
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-8 py-5 bg-card-dark border border-border-dark rounded-[2rem] text-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-all font-medium text-white placeholder-zinc-700"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              <button 
                onClick={() => setSelectedLetter(null)}
                className={cn(
                  "px-5 py-3 rounded-[2rem] text-[10px] font-black transition-all shrink-0 border",
                  selectedLetter === null ? "bg-white text-black border-white" : "bg-card-dark text-zinc-500 border-border-dark hover:border-zinc-700"
                )}
              >
                TODOS
              </button>
              {alphabet.map(l => (
                <button 
                  key={l}
                  onClick={() => setSelectedLetter(l)}
                  className={cn(
                    "px-5 py-3 rounded-[2rem] text-[10px] font-black transition-all shrink-0 border",
                    selectedLetter === l ? "bg-white text-black border-white" : "bg-card-dark text-zinc-500 border-border-dark hover:border-zinc-700"
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
          <div className={cn("w-full md:w-96 border-r border-border-dark overflow-y-auto bg-card-dark/30 shrink-0 no-scrollbar", selectedItem ? "hidden md:block" : "block")}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="divide-y divide-border-dark pb-32"
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

                {activeTab === 'SCALES' && filteredProtocols.map(p => (
                  <ListItem 
                    key={p.id} 
                    active={selectedItem?.id === p.id} 
                    onClick={() => setSelectedItem(p)}
                    title={p.name}
                    subtitle="Protocolo Clínico"
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

                {activeTab === 'PRESCRIPTION' && filteredPrescriptions.map(p => (
                  <ListItem 
                    key={p.id} 
                    active={selectedItem?.id === p.id} 
                    onClick={() => setSelectedItem(p)}
                    title={p.condition}
                    subtitle={p.medication}
                    tags={[p.category]}
                  />
                ))}

                {activeTab === 'CONSULTATION' && filteredConsultations.map(c => (
                  <ListItem 
                    key={c.id} 
                    active={selectedItem?.id === c.id} 
                    onClick={() => setSelectedItem(c)}
                    title={c.title}
                    subtitle={c.category}
                  />
                ))}

                {(activeTab === 'ALMANAC' ? filteredPathologies : activeTab === 'TERMS' ? filteredTerms : activeTab === 'PHARMA' ? filteredPharma : activeTab === 'PRESCRIPTION' ? filteredPrescriptions : activeTab === 'CONSULTATION' ? filteredConsultations : [...filteredScales, ...filteredProtocols]).length === 0 && (
                  <div className="p-20 text-center">
                    <Info className="w-12 h-12 text-zinc-800 mx-auto mb-6" strokeWidth={1.5} />
                    <p className="text-xs text-zinc-600 font-black uppercase tracking-widest">Nenhum resultado.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Detail View */}
          <div className={cn("flex-1 overflow-y-auto bg-bg-dark p-6 md:p-16 no-scrollbar", selectedItem ? "block" : "hidden md:block")}>
            <AnimatePresence mode="wait">
              {selectedItem ? (
                <motion.div 
                  key={selectedItem.id || selectedItem.term || selectedItem.name || selectedItem.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-5xl mx-auto space-y-8 md:space-y-12"
                >
                  {/* Header Detail */}
                  <div className="bg-card-dark p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-border-dark relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                    
                    <button 
                      onClick={() => setSelectedItem(null)}
                      className="md:hidden mb-8 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors relative z-10"
                    >
                      <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
                      <span className="text-xs font-black uppercase tracking-widest">Voltar para lista</span>
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8 relative z-10">
                      <div className="text-white shrink-0">
                        {activeTab === 'ALMANAC' && <Stethoscope className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                        {activeTab === 'SCALES' && <ClipboardCheck className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                        {activeTab === 'TERMS' && <Book className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                        {activeTab === 'PHARMA' && <Pill className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                        {activeTab === 'PRESCRIPTION' && <FileSignature className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                        {activeTab === 'CONSULTATION' && <Users className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />}
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{selectedItem.name || selectedItem.term || selectedItem.condition || selectedItem.title || selectedItem.age}</h3>
                        <p className="text-sm md:text-lg text-zinc-400 font-bold uppercase tracking-widest mt-2">
                          {selectedItem.category || (activeTab === 'TERMS' ? 'Terminologia Técnica' : selectedItem.class)}
                        </p>
                      </div>
                    </div>

                    {activeTab === 'ALMANAC' && (
                      <div className="flex gap-4 border-t border-border-dark pt-10 mt-10 relative z-10">
                        {selectedItem.ageGroups.map((g: string) => (
                          <span key={g} className="px-6 py-3 bg-border-dark border border-zinc-800 rounded-[2rem] text-[10px] font-black uppercase tracking-widest text-zinc-400">{g}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Body Detail */}
                  <div className="grid grid-cols-1 gap-10">
                    {activeTab === 'ALMANAC' && (
                      <>
                        <Section title="Fisiopatologia" icon={<Brain className="w-6 h-6" strokeWidth={1.5} />}>
                          <p className="text-zinc-400 leading-relaxed text-xl font-medium">{selectedItem.pathophysiology}</p>
                        </Section>

                        <Section title="Sinais e Sintomas" icon={<Thermometer className="w-6 h-6" strokeWidth={1.5} />}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {selectedItem.signsSymptoms.map((s: string) => (
                              <div key={s} className="flex items-center gap-4 text-lg text-zinc-300 font-semibold bg-card-dark p-6 rounded-[2rem] border border-border-dark">
                                <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" /> {s}
                              </div>
                            ))}
                          </div>
                        </Section>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                          <Section title="NANDA" icon={<ShieldAlert className="w-6 h-6" strokeWidth={1.5} />}>
                            <ul className="space-y-4">
                              {selectedItem.nanda.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-400 font-bold italic border-l-2 border-white pl-4">{n}</li>
                              ))}
                            </ul>
                          </Section>
                          <Section title="NIC" icon={<Activity className="w-6 h-6" strokeWidth={1.5} />}>
                            <ul className="space-y-4">
                              {selectedItem.nic.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-300 font-bold bg-border-dark p-4 rounded-[1.5rem] border border-zinc-800">{n}</li>
                              ))}
                            </ul>
                          </Section>
                          <Section title="NOC" icon={<HeartPulse className="w-6 h-6" strokeWidth={1.5} />}>
                            <ul className="space-y-4">
                              {selectedItem.noc.map((n: string) => (
                                <li key={n} className="text-sm text-zinc-400 font-bold border-b border-border-dark pb-3">{n}</li>
                              ))}
                            </ul>
                          </Section>
                        </div>

                        <Section title="Farmacologia Aplicada" icon={<Pill className="w-6 h-6" strokeWidth={1.5} />}>
                          <div className="bg-card-dark text-white p-8 rounded-[2rem] font-mono text-base leading-relaxed border border-white/20 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)]">
                            {selectedItem.pharmacology}
                          </div>
                        </Section>
                      </>
                    )}

                    {activeTab === 'SCALES' && (
                      <>
                        <Section title="Descrição" icon={<Info className="w-6 h-6" strokeWidth={1.5} />}>
                          <p className="text-zinc-400 leading-relaxed text-xl font-medium">{selectedItem.description}</p>
                        </Section>
                        
                        {selectedItem.parameters && (
                          <Section title="Parâmetros de Avaliação" icon={<LayoutList className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedItem.parameters.map((p: string) => (
                                <div key={p} className="bg-card-dark p-6 rounded-[2rem] border border-border-dark text-zinc-300 font-bold">
                                  {p}
                                </div>
                              ))}
                            </div>
                          </Section>
                        )}

                        {selectedItem.steps && (
                          <Section title="Passos do Protocolo" icon={<LayoutList className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedItem.steps.map((s: string, idx: number) => (
                                <div key={idx} className="bg-card-dark p-6 rounded-[2rem] border border-border-dark text-zinc-300 font-bold flex gap-4">
                                  <span className="text-white font-black">{idx + 1}.</span> {s}
                                </div>
                              ))}
                            </div>
                          </Section>
                        )}

                        {(selectedItem.interpretation || selectedItem.application) && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {selectedItem.interpretation && (
                              <Section title="Interpretação" icon={<Activity className="w-6 h-6" strokeWidth={1.5} />}>
                                <div className="bg-white/5 border border-white/20 p-8 rounded-[2.5rem] text-white font-black text-lg">
                                  {selectedItem.interpretation}
                                </div>
                              </Section>
                            )}
                            {selectedItem.application && (
                              <Section title="Aplicação" icon={<ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />}>
                                <div className="bg-border-dark border border-zinc-800 p-8 rounded-[2.5rem] text-zinc-400 font-bold text-lg">
                                  {selectedItem.application}
                                </div>
                              </Section>
                            )}
                          </div>
                        )}
                      </>
                    )}

                    {activeTab === 'TERMS' && (
                      <Section title="Definição Técnica" icon={<Info className="w-6 h-6" strokeWidth={1.5} />}>
                        <p className="text-3xl text-zinc-200 leading-relaxed font-serif italic">"{selectedItem.definition}"</p>
                      </Section>
                    )}

                    {activeTab === 'PHARMA' && (
                      <>
                        <Section title="Indicação Clínica" icon={<Info className="w-6 h-6" strokeWidth={1.5} />}>
                          <p className="text-xl text-zinc-300 font-semibold">{selectedItem.indication}</p>
                        </Section>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <Section title="Diluição e Preparo" icon={<FlaskConical className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/20">
                              <p className="text-lg text-white font-black leading-relaxed">{selectedItem.dilution}</p>
                            </div>
                          </Section>
                          <Section title="Posologia / Dose" icon={<Activity className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/20">
                              <p className="text-lg text-white font-black leading-relaxed">{selectedItem.dosage}</p>
                            </div>
                          </Section>
                        </div>

                        <Section title="Cuidados de Enfermagem" icon={<ShieldAlert className="w-6 h-6" strokeWidth={1.5} />}>
                          <ul className="space-y-6">
                            {selectedItem.nursingCare.map((c: string) => (
                              <li key={c} className="flex gap-6 text-lg text-zinc-300 font-bold bg-card-dark p-8 rounded-[2rem] border border-border-dark shadow-2xl">
                                <span className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-black shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.4)]">!</span> 
                                {c}
                              </li>
                            ))}
                          </ul>
                        </Section>
                      </>
                    )}

                    {activeTab === 'PRESCRIPTION' && (
                      <>
                        <div className="bg-card-dark p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                          <h4 className="text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">Medicamento / Associação</h4>
                          <p className="text-4xl font-black text-white tracking-tight mb-4 relative z-10">{selectedItem.medication}</p>
                          {selectedItem.protocol && (
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-bold text-white relative z-10">
                              <ShieldAlert className="w-4 h-4" strokeWidth={2} />
                              Protocolo: {selectedItem.protocol}
                            </div>
                          )}
                        </div>

                        <Section title="Indicação" icon={<Info className="w-6 h-6" strokeWidth={1.5} />}>
                          <p className="text-xl text-zinc-300 font-semibold">{selectedItem.condition}</p>
                        </Section>
                        <div className="grid grid-cols-1 gap-10">
                          <Section title="Posologia / Dose" icon={<Activity className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/20">
                              <p className="text-lg text-white font-black leading-relaxed">{selectedItem.dosage}</p>
                            </div>
                          </Section>
                          <Section title="Instruções" icon={<ClipboardCheck className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="bg-border-dark p-8 rounded-[2.5rem] border border-zinc-800">
                              <p className="text-lg text-zinc-300 font-medium leading-relaxed">{selectedItem.instructions}</p>
                            </div>
                          </Section>
                        </div>
                      </>
                    )}

                    {activeTab === 'CONSULTATION' && (
                      <>
                        <Section title="Conteúdo" icon={<BookOpen className="w-6 h-6" strokeWidth={1.5} />}>
                          <p className="text-xl text-zinc-300 font-medium leading-relaxed">{selectedItem.content}</p>
                        </Section>
                        <Section title="Detalhes" icon={<LayoutList className="w-6 h-6" strokeWidth={1.5} />}>
                          <ul className="space-y-4">
                            {selectedItem.details.map((d: string) => (
                              <li key={d} className="text-lg text-zinc-400 font-medium bg-card-dark p-6 rounded-[2rem] border border-border-dark">
                                {d}
                              </li>
                            ))}
                          </ul>
                        </Section>
                        {selectedItem.exampleRecord && (
                          <Section title="Exemplo de Evolução / Registro" icon={<FileText className="w-6 h-6" strokeWidth={1.5} />}>
                            <div className="bg-white/5 p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-white/20">
                              <p className="text-xs md:text-lg text-white font-mono leading-relaxed whitespace-pre-wrap">{selectedItem.exampleRecord}</p>
                            </div>
                          </Section>
                        )}
                      </>
                    )}
                  </div>

                  <footer className="pt-20 pb-32 text-center border-t border-border-dark">
                    <p className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.8em]">NurseIQ Clinical Database // Evidence-Based Protocols // v6.1.0</p>
                  </footer>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-800">
                  <div className="relative mb-12">
                    <div className="absolute -inset-12 bg-white/5 blur-[100px] rounded-full" />
                    <BookOpen className="w-32 h-32 opacity-10 relative z-10" strokeWidth={1.5} />
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
      className="neon-button flex flex-col items-center gap-3 md:gap-6 p-4 md:p-10 group"
    >
      <div className="text-zinc-500 group-hover:text-white transition-colors scale-125 md:scale-150">
        {icon}
      </div>
      <span className="font-black uppercase tracking-widest md:tracking-[0.3em] text-[8px] md:text-[10px] text-zinc-500 group-hover:text-white transition-colors">{label}</span>
    </motion.button>
  );
}

function SidebarButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-5 px-6 py-5 rounded-[2rem] transition-all text-[11px] font-black uppercase tracking-[0.2em] border-2",
        active ? "neon-border-active text-white" : "border-transparent text-zinc-600 hover:bg-border-dark hover:text-zinc-300"
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
        active ? "bg-border-dark border-white" : "border-transparent"
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={cn(
          "font-black text-lg tracking-tight transition-colors",
          active ? "text-white" : "text-zinc-400 group-hover:text-white"
        )}>{title}</span>
        <ChevronRight className={cn("w-5 h-5 transition-transform", active ? "text-white translate-x-1" : "text-zinc-800")} strokeWidth={1.5} />
      </div>
      {(subtitle || tags) && (
        <div className="flex flex-wrap gap-2">
          {subtitle && <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600 bg-border-dark px-3 py-1.5 rounded-[1rem] border border-zinc-800">{subtitle}</span>}
          {tags?.map(g => (
            <span key={g} className="text-[9px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-3 py-1.5 rounded-[1rem] border border-white/20">{g}</span>
          ))}
        </div>
      )}
    </button>
  );
}

function Section({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="bg-card-dark p-10 rounded-[3rem] border border-border-dark shadow-2xl">
      <h4 className="text-[11px] font-black text-zinc-600 uppercase tracking-[0.4em] flex items-center gap-4 mb-8">
        <div className="text-white">{icon}</div> {title}
      </h4>
      {children}
    </div>
  );
}
