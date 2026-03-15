export interface Prescription {
  id: string;
  category: string;
  condition: string;
  medication: string;
  dosage: string;
  instructions: string;
  protocol?: string;
}

export const prescriptions: Prescription[] = [
  {
    id: '1',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Herpes genital primário e recorrente',
    medication: 'Aciclovir',
    dosage: 'VO: 200 mg 5x/dia por 5 dias. Recorrência: 200 mg 5x/dia por 5 dias.',
    instructions: 'Omitir a dose noturna. Casos graves sob supervisão médica.',
    protocol: 'Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para IST'
  },
  {
    id: '2',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Sífilis recente',
    medication: 'Benzilpenicilina Benzatina',
    dosage: '2,4 milhões UI IM dose única (1,2 milhão UI em cada glúteo)',
    instructions: 'Via IM profunda. Observar reação de Jarisch-Herxheimer.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '3',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Sífilis tardia',
    medication: 'Benzilpenicilina Benzatina',
    dosage: '2,4 milhões UI IM 1x/semana por 3 semanas (total de 7,2 milhões UI)',
    instructions: 'Via IM profunda. Tempo máximo de uso: 3 semanas.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '4',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Uretrites, cervicites (clamídia)',
    medication: 'Azitromicina',
    dosage: '1 g VO dose única; ou 500 mg VO dose única + 250 mg VO/dia por 4 dias',
    instructions: 'Tratar parceiro(a).',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '5',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Gonorreia',
    medication: 'Ceftriaxona + Azitromicina',
    dosage: 'Ceftriaxona 500 mg IM dose única + Azitromicina 1g VO',
    instructions: 'Reconstituição IM: 500 mg + 2 mL lidocaína 1%.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '6',
    category: 'Contracepção',
    condition: 'Contracepção hormonal combinada oral',
    medication: 'Etinilestradiol + Levonorgestrel',
    dosage: '1 comprimido VO/dia por 21 dias + pausa de 7 dias',
    instructions: 'Uso contínuo enquanto não houver contraindicação.',
    protocol: 'Manual de Anticoncepção da FEBRASGO'
  },
  {
    id: '7',
    category: 'Contracepção',
    condition: 'Contracepção de Emergência',
    medication: 'Levonorgestrel',
    dosage: '1,5 mg VO dose única (até 72h após relação)',
    instructions: 'Uso máximo: 1x ao ano.',
    protocol: 'Manual de Anticoncepção da FEBRASGO'
  },
  {
    id: '8',
    category: 'Atenção à Saúde da Mulher',
    condition: 'Dismenorreia',
    medication: 'Ibuprofeno',
    dosage: '300–600 mg VO a cada 8h',
    instructions: 'Uso máximo: até 5–7 dias. Risco gástrico.',
    protocol: 'Protocolos de Atenção Básica - Saúde das Mulheres'
  },
  {
    id: '9',
    category: 'Pré-natal',
    condition: 'Profilaxia de pré-eclâmpsia',
    medication: 'AAS (Ácido Acetilsalicílico)',
    dosage: '1 cp (100mg) VO 1x/dia (preferencialmente à noite)',
    instructions: 'Uso máximo: até 36ª semana.',
    protocol: 'Diretrizes de Assistência ao Pré-Natal'
  },
  {
    id: '10',
    category: 'Pré-natal',
    condition: 'Prevenção de defeitos do tubo neural',
    medication: 'Ácido Fólico',
    dosage: '1 cp (5mg) VO/dia',
    instructions: 'Uso durante todo o pré-natal.',
    protocol: 'Diretrizes de Assistência ao Pré-Natal'
  },
  {
    id: '11',
    category: 'Atenção à Saúde da Criança',
    condition: 'Pneumonia, otite média aguda (2m a 5 anos)',
    medication: 'Amoxicilina (Suspensão oral)',
    dosage: '40–50 mg/kg/dia VO, divididos em 2 a 3 tomadas',
    instructions: 'Tempo máximo de uso: 7 a 10 dias.',
    protocol: 'Protocolos de Atenção Básica - Saúde da Criança'
  },
  {
    id: '12',
    category: 'Tuberculose',
    condition: 'Fase Intensiva (Ataque) - 2 meses',
    medication: 'RHZE (Rifampicina, Isoniazida, Pirazinamida, Etambutol)',
    dosage: 'Conforme peso (ex: 36-50kg = 3 comp/dia)',
    instructions: 'Dose única diária, em jejum.',
    protocol: 'Manual de Recomendações para o Controle da Tuberculose no Brasil'
  },
  {
    id: '13',
    category: 'Diabetes',
    condition: 'Diabetes mellitus tipo 2',
    medication: 'Cloridrato de Metformina',
    dosage: '500 mg ou 850 mg, 1 a 2 vezes ao dia, junto às refeições',
    instructions: 'Uso contínuo. Risco de desconforto gastrointestinal.',
    protocol: 'Diretrizes da Sociedade Brasileira de Diabetes (SBD)'
  },
  {
    id: '14',
    category: 'Hipertensão',
    condition: 'Hipertensão arterial e angina',
    medication: 'Besilato de Anlodipino',
    dosage: '5 mg a 10 mg, uma vez ao dia',
    instructions: 'Uso contínuo. Observar edema de membros inferiores.',
    protocol: 'Diretrizes Brasileiras de Hipertensão Arterial'
  },
  {
    id: '15',
    category: 'Dengue',
    condition: 'Alívio de dor e febre',
    medication: 'Dipirona Sódica',
    dosage: 'Adultos: 500 mg a 1000 mg por dose, até 4x/dia',
    instructions: 'Enquanto persistirem os sintomas. Evitar AINEs.',
    protocol: 'Dengue: Diagnóstico e Manejo Clínico - Ministério da Saúde'
  },
  {
    id: '16',
    category: 'Atenção à Saúde da Criança',
    condition: 'Febre e dor leve a moderada',
    medication: 'Paracetamol (Gotas 200mg/mL)',
    dosage: '1 gota/kg/dose, até 4 a 5 vezes ao dia',
    instructions: 'Dose máxima de 35 gotas por tomada. Intervalo mínimo de 4 a 6 horas.',
    protocol: 'Protocolos de Atenção Básica - Saúde da Criança'
  },
  {
    id: '17',
    category: 'Saúde da Mulher',
    condition: 'Candidíase Vulvovaginal',
    medication: 'Miconazol (Creme vaginal 2%)',
    dosage: '1 aplicador cheio (5g) à noite ao deitar, por 7 dias',
    instructions: 'Uso intravaginal profundo. Evitar relações sexuais durante o tratamento.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '18',
    category: 'Hipertensão',
    condition: 'Hipertensão Arterial Sistêmica',
    medication: 'Losartana Potássica',
    dosage: '50 mg, 1 a 2 vezes ao dia',
    instructions: 'Uso contínuo. Monitorar função renal e potássio.',
    protocol: 'Diretrizes Brasileiras de Hipertensão Arterial'
  },
  {
    id: '19',
    category: 'Asma',
    condition: 'Crise de Asma Leve a Moderada',
    medication: 'Salbutamol (Aerossol 100mcg/jato)',
    dosage: '2 a 4 jatos com espaçador, a cada 20 minutos por até 1 hora',
    instructions: 'Avaliar resposta clínica após 1 hora. Encaminhar se não houver melhora.',
    protocol: 'Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia (SBPT)'
  },
  {
    id: '20',
    category: 'Infecções de Pele',
    condition: 'Impetigo',
    medication: 'Cefalexina',
    dosage: 'Adultos: 500 mg VO a cada 6 horas por 7 dias',
    instructions: 'Tomar com estômago vazio ou com alimentos. Completar o tratamento.',
    protocol: 'Protocolos de Atenção Básica'
  },
  {
    id: '21',
    category: 'Endocrinologia',
    condition: 'Hipotireoidismo',
    medication: 'Levotiroxina Sódica',
    dosage: 'Dose individualizada (ex: 25 a 100 mcg/dia)',
    instructions: 'Tomar em jejum, 30 a 60 minutos antes do café da manhã. Não misturar com outras medicações.',
    protocol: 'Consenso Brasileiro para o Tratamento do Hipotireoidismo'
  },
  {
    id: '22',
    category: 'Hematologia',
    condition: 'Anemia Ferropriva',
    medication: 'Sulfato Ferroso',
    dosage: '1 a 2 comprimidos (40mg de ferro elementar) VO, 1 a 2x/dia',
    instructions: 'Tomar 1 hora antes ou 2 horas após as refeições. Vitamina C ajuda na absorção. Fezes podem ficar escuras.',
    protocol: 'Protocolo Clínico e Diretrizes Terapêuticas da Anemia por Deficiência de Ferro'
  },
  {
    id: '23',
    category: 'Urgência / Cardiologia',
    condition: 'Profilaxia de TEV (Tromboembolismo Venoso)',
    medication: 'Enoxaparina Sódica',
    dosage: '40 mg SC 1x/dia',
    instructions: 'Aplicar no tecido subcutâneo do abdome. Alternar locais de aplicação. Observar sinais de sangramento.',
    protocol: 'Diretrizes de Profilaxia de Tromboembolismo Venoso'
  },
  {
    id: '24',
    category: 'Atenção Primária',
    condition: 'Parasitoses Intestinais (Ascaridíase, Enterobíase)',
    medication: 'Albendazol',
    dosage: '400 mg VO dose única',
    instructions: 'Mastigar o comprimido ou tomar com água. Repetir em 14 dias se enterobíase.',
    protocol: 'Cadernos de Atenção Básica - Doenças Infecciosas e Parasitárias'
  },
  {
    id: '25',
    category: 'Atenção à Saúde da Mulher',
    condition: 'Infecção do Trato Urinário (ITU) não complicada',
    medication: 'Fosfomicina trometamol',
    dosage: '3g VO dose única',
    instructions: 'Dissolver o envelope em meio copo de água. Tomar preferencialmente à noite, com a bexiga vazia.',
    protocol: 'Diretrizes da Sociedade Brasileira de Urologia (SBU)'
  },
  {
    id: '26',
    category: 'Gastroenterologia',
    condition: 'Doença do Refluxo Gastroesofágico (DRGE)',
    medication: 'Omeprazol',
    dosage: '20 a 40 mg VO 1x/dia',
    instructions: 'Tomar em jejum, 30 minutos antes do café da manhã.',
    protocol: 'Consenso Brasileiro da Doença do Refluxo Gastroesofágico'
  },
  {
    id: '27',
    category: 'Saúde Mental',
    condition: 'Transtorno de Ansiedade Generalizada',
    medication: 'Clonazepam',
    dosage: '0,25 mg a 0,5 mg VO 2x/dia (dose inicial)',
    instructions: 'Pode causar sonolência. Não ingerir álcool. Risco de dependência em uso prolongado.',
    protocol: 'Protocolos Clínicos em Psiquiatria'
  },
  {
    id: '28',
    category: 'Neurologia',
    condition: 'Crise Convulsiva (Fase Aguda)',
    medication: 'Diazepam',
    dosage: '10 mg IV lento (1 a 2 mg/min)',
    instructions: 'Monitorar padrão respiratório e nível de consciência. Pode repetir se necessário.',
    protocol: 'Protocolo de Manejo do Estado de Mal Epiléptico'
  },
  {
    id: '29',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Tricomoníase',
    medication: 'Metronidazol',
    dosage: '2 g VO dose única ou 500 mg VO 2x/dia por 7 dias',
    instructions: 'Tratar parceiro(a). Evitar álcool durante e até 24h após o tratamento (efeito antabuse).',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '30',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Vaginose Bacteriana',
    medication: 'Metronidazol',
    dosage: '500 mg VO 2x/dia por 7 dias ou Gel vaginal 100mg/g 1 aplicador à noite por 5 dias',
    instructions: 'Não é necessário tratar o parceiro rotineiramente. Evitar álcool.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '31',
    category: 'Atenção Primária',
    condition: 'Faringoamigdalite Estreptocócica',
    medication: 'Benzilpenicilina Benzatina',
    dosage: 'Adultos: 1,2 milhão UI IM dose única',
    instructions: 'Via IM profunda. Alternativa: Amoxicilina 500mg VO 3x/dia por 10 dias.',
    protocol: 'Protocolos de Atenção Básica - Infecções de Vias Aéreas Superiores'
  },
  {
    id: '32',
    category: 'Dermatologia',
    condition: 'Escabiose (Sarna)',
    medication: 'Permetrina 5% (Loção)',
    dosage: 'Aplicar no corpo todo à noite, deixar por 8-14h e lavar. Repetir em 7 dias.',
    instructions: 'Tratar todos os contatos domiciliares simultaneamente. Lavar roupas de cama com água quente.',
    protocol: 'Cadernos de Atenção Básica - Dermatologia'
  },
  {
    id: '33',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Sífilis Primária, Secundária ou Latente Recente',
    medication: 'Benzilpenicilina Benzatina',
    dosage: '2,4 milhões UI, via IM, dose única (1,2 milhão UI em cada glúteo)',
    instructions: 'Acompanhamento com VDRL. Tratar parcerias sexuais.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '34',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Gonorreia (Cervicite/Uretrite Gonocócica)',
    medication: 'Ceftriaxona + Azitromicina',
    dosage: 'Ceftriaxona 500 mg IM dose única + Azitromicina 1 g VO dose única',
    instructions: 'Tratamento empírico conjunto para Clamídia. Tratar parcerias sexuais.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '35',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Infecção por Clamídia (Cervicite/Uretrite)',
    medication: 'Azitromicina ou Doxiciclina',
    dosage: 'Azitromicina 1 g VO dose única OU Doxiciclina 100 mg VO 2x/dia por 7 dias',
    instructions: 'Doxiciclina é contraindicada na gestação. Tratar parcerias sexuais.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '36',
    category: 'IST, saúde sexual e reprodutiva',
    condition: 'Herpes Genital (Primeiro Episódio)',
    medication: 'Aciclovir',
    dosage: '400 mg VO, 3x/dia, por 7 a 10 dias',
    instructions: 'Iniciar o tratamento o mais precocemente possível. Manter higiene local.',
    protocol: 'PCDT para IST - Ministério da Saúde'
  },
  {
    id: '37',
    category: 'Urologia / Atenção Primária',
    condition: 'Cistite (ITU Baixa Não Complicada)',
    medication: 'Fosfomicina trometamol ou Nitrofurantoína',
    dosage: 'Fosfomicina 3 g VO dose única OU Nitrofurantoína 100 mg VO 4x/dia por 5 a 7 dias',
    instructions: 'Aumentar a ingestão hídrica. Fosfomicina preferencialmente à noite com bexiga vazia.',
    protocol: 'Diretrizes da Sociedade Brasileira de Urologia (SBU)'
  },
  {
    id: '38',
    category: 'Pneumologia / Atenção Primária',
    condition: 'Asma Brônquica (Tratamento de Manutenção Leve)',
    medication: 'Budesonida + Formoterol',
    dosage: 'Inalatório, conforme prescrição médica (ex: 200/6 mcg, 1 a 2 inalações 2x/dia)',
    instructions: 'Lavar a boca após o uso para evitar candidíase oral. Uso contínuo.',
    protocol: 'Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia (SBPT)'
  },
  {
    id: '39',
    category: 'Dermatologia / Alergia',
    condition: 'Dermatite de Contato',
    medication: 'Dexametasona (Creme) ou Hidrocortisona (Pomada)',
    dosage: 'Aplicar camada fina sobre a lesão, 1 a 2x/dia, por 7 a 14 dias',
    instructions: 'Evitar contato com o agente causador. Não usar por tempo prolongado sem orientação.',
    protocol: 'Cadernos de Atenção Básica - Dermatologia'
  },
  {
    id: '40',
    category: 'Ortopedia / Dor',
    condition: 'Lombalgia Mecânica Aguda',
    medication: 'Ibuprofeno + Ciclobenzaprina',
    dosage: 'Ibuprofeno 600 mg VO 8/8h + Ciclobenzaprina 5 mg VO à noite',
    instructions: 'Ciclobenzaprina pode causar sonolência. Ibuprofeno tomar após as refeições. Uso por 3 a 5 dias.',
    protocol: 'Protocolo de Manejo da Dor Lombar Aguda'
  }
];
