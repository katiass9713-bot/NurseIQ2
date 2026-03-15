export interface ConsultationTopic {
  id: string;
  category: string;
  title: string;
  content: string;
  details: string[];
}

export const consultations: ConsultationTopic[] = [
  {
    id: '1',
    category: 'Semiologia',
    title: 'Posição Anatômica',
    content: 'A posição anatômica de referência é a postura ereta, com a face voltada para frente, olhar no horizonte, membros superiores estendidos ao longo do tronco com as palmas voltadas para frente, e membros inferiores unidos com as pontas dos pés para frente.',
    details: [
      'Decúbito Dorsal (Supina): Deitado de costas.',
      'Decúbito Ventral (Prona): Deitado de bruços.',
      'Decúbito Lateral: Deitado de lado (direito ou esquerdo).',
      'Posição de Fowler: Cabeceira elevada (45º a 60º).',
      'Posição de Trendelenburg: Cabeça mais baixa que os pés.'
    ]
  },
  {
    id: '2',
    category: 'Consulta de Enfermagem',
    title: 'Puericultura',
    content: 'Acompanhamento do crescimento e desenvolvimento infantil.',
    details: [
      'Avaliação do crescimento: Peso, Estatura, Perímetro Cefálico.',
      'Avaliação do desenvolvimento: Marcos motores, cognitivos e sociais.',
      'Estado vacinal: Conferência da caderneta de vacinação.',
      'Aleitamento materno e alimentação complementar.',
      'Orientações de prevenção de acidentes.'
    ]
  },
  {
    id: '3',
    category: 'Consulta de Enfermagem',
    title: 'Pré-Natal',
    content: 'Assistência à gestante para garantir uma gestação saudável e um parto seguro.',
    details: [
      'Cálculo da Idade Gestacional (IG) e Data Provável do Parto (DPP).',
      'Aferição de PA, Peso, Altura Uterina (AU) e Batimentos Cardíacos Fetais (BCF).',
      'Solicitação e avaliação de exames de rotina (Tipagem sanguínea, VDRL, HIV, Toxoplasmose, Hepatites, Urina, USG).',
      'Suplementação de Ácido Fólico e Sulfato Ferroso.',
      'Orientações sobre sinais de alarme e preparo para o parto.'
    ]
  },
  {
    id: '4',
    category: 'Prontuário Eletrônico',
    title: 'Evolução SOAP',
    content: 'Método de registro estruturado da evolução de enfermagem.',
    details: [
      'S (Subjetivo): O que o paciente relata (queixas, sintomas).',
      'O (Objetivo): O que o profissional observa (sinais vitais, exame físico, exames).',
      'A (Avaliação): Análise dos dados subjetivos e objetivos (diagnósticos de enfermagem).',
      'P (Plano): Condutas, prescrições de enfermagem e orientações.'
    ]
  },
  {
    id: '5',
    category: 'Interpretação de Exames',
    title: 'Hemograma',
    content: 'Avaliação das séries vermelha, branca e plaquetária.',
    details: [
      'Série Vermelha: Hemácias, Hemoglobina, Hematócrito, VCM, HCM, CHCM, RDW (avaliação de anemias).',
      'Série Branca: Leucócitos totais, Neutrófilos, Linfócitos, Monócitos, Eosinófilos, Basófilos (avaliação de infecções/inflamações).',
      'Plaquetas: Avaliação da coagulação (trombocitopenia/trombocitose).'
    ]
  },
  {
    id: '6',
    category: 'Procedimentos',
    title: 'Curativos',
    content: 'Tratamento de lesões cutâneas para promover a cicatrização.',
    details: [
      'Limpeza: Soro Fisiológico 0,9% morno ou em jato.',
      'Desbridamento: Autolítico (hidrogel), Enzimático (colagenase), Mecânico ou Instrumental.',
      'Coberturas: Alginato, Hidrocolóide, Espuma de Poliuretano, Prata, Carvão Ativado.',
      'Avaliação da lesão: Tamanho, exsudato, tecido (granulação, esfacelo, necrose), bordas.'
    ]
  },
  {
    id: '7',
    category: 'Sinais Vitais',
    title: 'Aferição de Pressão Arterial',
    content: 'Procedimento técnico para mensuração da pressão arterial sistêmica.',
    details: [
      'Paciente em repouso por pelo menos 5 minutos.',
      'Braço apoiado na altura do coração, palma da mão para cima.',
      'Manguito adequado à circunferência do braço.',
      'Palpar pulso radial, inflar até o desaparecimento do pulso para estimar PAS.',
      'Desinflar, aguardar 1 minuto, inflar 30 mmHg acima da PAS estimada e auscultar com estetoscópio.'
    ]
  },
  {
    id: '8',
    category: 'Consulta de Enfermagem',
    title: 'Saúde do Idoso',
    content: 'Avaliação multidimensional da pessoa idosa.',
    details: [
      'Avaliação da capacidade funcional (AVDs e AIVDs).',
      'Rastreio de risco de quedas.',
      'Avaliação cognitiva (Mini Exame do Estado Mental - MEEM).',
      'Revisão de medicamentos (polifarmácia).',
      'Avaliação nutricional e de saúde bucal.'
    ]
  },
  {
    id: '9',
    category: 'Urgência e Emergência',
    title: 'Suporte Básico de Vida (SBV)',
    content: 'Atendimento inicial à Parada Cardiorrespiratória (PCR).',
    details: [
      'C (Compressões): 100 a 120 por minuto, profundidade de 5 a 6 cm.',
      'A (Vias Aéreas): Abertura das vias aéreas (elevação do queixo/tração da mandíbula).',
      'B (Boa Ventilação): 2 ventilações a cada 30 compressões (se treinado).',
      'D (Desfibrilação): Uso do DEA assim que disponível.'
    ]
  },
  {
    id: '10',
    category: 'Saúde da Mulher',
    title: 'Coleta de Citopatológico (Preventivo)',
    content: 'Exame de rastreamento do câncer do colo do útero.',
    details: [
      'Indicação: Mulheres de 25 a 64 anos que já tiveram atividade sexual.',
      'Periodicidade: Anual, após dois exames anuais negativos, a cada 3 anos.',
      'Coleta da ectocérvice (espátula de Ayre) e endocérvice (escova endocervical).',
      'Fixação imediata da lâmina.'
    ]
  },
  {
    id: '11',
    category: 'Exame Físico',
    title: 'Ausculta Pulmonar',
    content: 'Avaliação dos sons respiratórios para identificar anormalidades no trato respiratório inferior.',
    details: [
      'Murmúrio Vesicular (MV): Som normal, audível em quase todo o pulmão.',
      'Estertores Finos (Crepitantes): Som de fricção de cabelo, comum em pneumonia e congestão pulmonar (final da inspiração).',
      'Estertores Grossos (Bolhosos): Som de bolhas estourando, secreção em vias maiores.',
      'Sibilos: Som agudo, musical, indica broncoespasmo (asma, DPOC).',
      'Roncos: Som grave, indica secreção espessa em vias aéreas de grande calibre.',
      'Estridor: Som agudo e intenso na inspiração, indica obstrução de vias aéreas superiores.'
    ]
  },
  {
    id: '12',
    category: 'Avaliação Neurológica',
    title: 'Escala de Coma de Glasgow e Pupilas',
    content: 'Avaliação do nível de consciência e função do tronco encefálico.',
    details: [
      'Abertura Ocular (1-4): Espontânea (4), À voz (3), À dor (2), Ausente (1).',
      'Resposta Verbal (1-5): Orientada (5), Confusa (4), Palavras inapropriadas (3), Sons incompreensíveis (2), Ausente (1).',
      'Resposta Motora (1-6): Obedece comandos (6), Localiza dor (5), Flexão normal (4), Flexão anormal/Decorticação (3), Extensão/Descerebração (2), Ausente (1).',
      'Reatividade Pupilar (-2 a 0): Ambas reagem (0), Uma reage (-1), Nenhuma reage (-2).',
      'Avaliação Pupilar (Tamanho): Isocóricas (iguais), Anisocóricas (diferentes), Miose (contraídas), Midríase (dilatadas).'
    ]
  },
  {
    id: '13',
    category: 'Cuidados de Enfermagem',
    title: 'Manejo de Sondas e Drenos',
    content: 'Diretrizes para manutenção, avaliação e prevenção de complicações em dispositivos invasivos.',
    details: [
      'Sonda Vesical de Demora (SVD): Manter bolsa abaixo do nível da bexiga, higiene do meato diária, avaliar aspecto e volume da urina.',
      'Sonda Nasoenteral (SNE): Confirmar posicionamento por RX antes da dieta, manter cabeceira elevada (30-45º) durante e após dieta, lavar com água (20-30ml) após medicações.',
      'Dreno de Tórax: Manter selo d\'água (2cm), observar oscilação e borbulhamento, não pinçar durante transporte (exceto se houver indicação específica), avaliar débito.',
      'Dreno de Port-o-Vac/Jackson-Pratt: Manter vácuo contínuo, esvaziar quando atingir 1/2 a 2/3 da capacidade, registrar volume e aspecto.'
    ]
  },
  {
    id: '14',
    category: 'Feridas e Curativos',
    title: 'Avaliação e Tratamento de Lesões por Pressão (LPP)',
    content: 'Prevenção e manejo de lesões de pele causadas por pressão prolongada.',
    details: [
      'Estágio 1: Eritema não branquiável em pele intacta.',
      'Estágio 2: Perda de espessura parcial da derme, úlcera rasa aberta ou bolha intacta.',
      'Estágio 3: Perda de espessura total da pele, tecido adiposo visível.',
      'Estágio 4: Perda de espessura total dos tecidos, osso, tendão ou músculo exposto.',
      'Prevenção: Mudança de decúbito a cada 2h, hidratação da pele, uso de colchão piramidal, proteção de proeminências ósseas.',
      'Tratamento: Debridamento (se necrose), curativos com hidrocoloide, alginato ou hidrogel dependendo do exsudato.'
    ]
  },
  {
    id: '15',
    category: 'Saúde do Adulto',
    title: 'Eletrocardiograma (ECG) - Noções Básicas',
    content: 'Interpretação inicial e posicionamento dos eletrodos.',
    details: [
      'V1: 4º espaço intercostal à margem direita do esterno.',
      'V2: 4º espaço intercostal à margem esquerda do esterno.',
      'V3: Entre V2 e V4.',
      'V4: 5º espaço intercostal na linha hemiclavicular esquerda.',
      'V5: 5º espaço intercostal na linha axilar anterior esquerda.',
      'V6: 5º espaço intercostal na linha axilar média esquerda.',
      'Onda P: Despolarização atrial.',
      'Complexo QRS: Despolarização ventricular.',
      'Onda T: Repolarização ventricular.'
    ]
  }
];
