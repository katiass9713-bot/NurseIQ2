export interface Scale {
  id: string;
  name: string;
  description: string;
  parameters: string[];
  interpretation: string;
  application: string;
}

export const scales: Scale[] = [
  {
    id: '1',
    name: 'Escala de Coma de Glasgow (ECG)',
    description: 'Avalia o nível de consciência em pacientes com trauma crânio-encefálico.',
    parameters: [
      'Abertura Ocular (1-4 pontos)',
      'Resposta Verbal (1-5 pontos)',
      'Resposta Motora (1-6 pontos)',
      'Reatividade Pupilar (subtrai 0-2 pontos)'
    ],
    interpretation: '13-15: Leve; 9-12: Moderado; ≤ 8: Grave (Indicação de IOT).',
    application: 'Trauma, Neurologia, Emergência.'
  },
  {
    id: '2',
    name: 'AVPU',
    description: 'Triagem neurológica rápida para nível de consciência.',
    parameters: [
      'A (Alert): Alerta e orientado.',
      'V (Voice): Responde ao chamado verbal.',
      'P (Pain): Responde apenas a estímulos dolorosos.',
      'U (Unresponsive): Não responde a nenhum estímulo.'
    ],
    interpretation: 'P ou U exigem intervenção imediata em via aérea.',
    application: 'APH, Triagem rápida.'
  },
  {
    id: '3',
    name: 'ESI (Emergency Severity Index)',
    description: 'Sistema de triagem de 5 níveis baseado na gravidade e necessidade de recursos.',
    parameters: [
      'ESI-1: Emergência imediata (Risco de morte).',
      'ESI-2: Situação crítica (Intervenção rápida).',
      'ESI-3: Estável (Múltiplos recursos).',
      'ESI-4: Estável (Um recurso).',
      'ESI-5: Não urgente (Nenhum recurso).'
    ],
    interpretation: 'Prioriza o atendimento conforme a complexidade clínica.',
    application: 'Classificação de Risco em Pronto-Socorro.'
  },
  {
    id: '4',
    name: 'NEWS (National Early Warning Score)',
    description: 'Detectar precocemente a deterioração clínica em adultos.',
    parameters: [
      'FR, SatO2, O2 suplementar, PAS, FC, Temperatura, Nível de consciência.'
    ],
    interpretation: '0-4: Baixo risco; 5-6: Médio risco (Alerta médico); ≥ 7: Alto risco (Emergência).',
    application: 'Enfermarias, Monitoração contínua.'
  },
  {
    id: '5',
    name: 'Escala de Cincinnati',
    description: 'Triagem rápida para Acidente Vascular Cerebral (AVC).',
    parameters: [
      'Assimetria Facial (Peça para sorrir).',
      'Fraqueza de Braço (Peça para levantar os braços).',
      'Fala Anormal (Peça para repetir uma frase).'
    ],
    interpretation: '1 critério alterado = 72% chance de AVC; 3 critérios = >85%.',
    application: 'APH, Pronto-Socorro.'
  },
  {
    id: '6',
    name: 'qSOFA (quick SOFA)',
    description: 'Identificação rápida de pacientes com suspeita de sepse fora da UTI.',
    parameters: [
      'FR ≥ 22 irpm.',
      'Alteração do nível de consciência (Glasgow < 15).',
      'PAS ≤ 100 mmHg.'
    ],
    interpretation: '≥ 2 pontos indica alto risco de mortalidade e suspeita de sepse grave.',
    application: 'Triagem, Enfermarias.'
  },
  {
    id: '7',
    name: 'Escala de Braden',
    description: 'Avaliação do risco de desenvolvimento de Úlcera por Pressão (UPP).',
    parameters: [
      'Percepção sensorial, Umidade, Atividade, Mobilidade, Nutrição, Fricção/Cisalhamento.'
    ],
    interpretation: '≤ 12: Alto risco; 13-14: Risco moderado; 15-18: Risco leve.',
    application: 'Pacientes acamados, Idosos, UTI.'
  },
  {
    id: '8',
    name: 'Escala de Ramsay',
    description: 'Avalia o nível de sedação em pacientes em UTI ou pós-operatório.',
    parameters: [
      '1: Ansioso, agitado.',
      '2: Cooperativo, orientado.',
      '3: Responde apenas a comandos.',
      '4: Resposta rápida à luz/som.',
      '5: Resposta lenta à luz/som.',
      '6: Sem resposta.'
    ],
    interpretation: 'Ideal: Nível 2 a 3 para sedação leve/moderada.',
    application: 'UTI, Sedação paliativa.'
  },
  {
    id: '9',
    name: 'Escala de Apgar',
    description: 'Avaliação da vitalidade do recém-nascido no 1º e 5º minutos de vida.',
    parameters: [
      'Aparência (Cor), Pulso (FC), Gesticulação (Reflexos), Atividade (Tônus), Respiração.'
    ],
    interpretation: '7-10: Normal; 4-6: Moderada depressão; 0-3: Grave (Reanimação imediata).',
    application: 'Sala de Parto, Neonatologia.'
  },
  {
    id: '10',
    name: 'Escala de Morse',
    description: 'Avaliação do risco de quedas em ambiente hospitalar.',
    parameters: [
      'História de quedas, Diagnóstico secundário, Auxílio na deambulação, Terapia IV, Marcha, Estado Mental.'
    ],
    interpretation: '0-24: Baixo risco; 25-44: Risco moderado; ≥ 45: Alto risco.',
    application: 'Internação, Segurança do Paciente.'
  },
  {
    id: '11',
    name: 'CPOT (Critical-Care Pain Observation Tool)',
    description: 'Avaliação de dor em pacientes críticos não comunicantes (sedados/entubados).',
    parameters: [
      'Expressão facial, Movimentos corporais, Tensão muscular, Adaptação ao ventilador.'
    ],
    interpretation: '≥ 3 pontos indica presença de dor significativa.',
    application: 'UTI, Pacientes em VM.'
  },
  {
    id: '12',
    name: 'FLACC',
    description: 'Avaliação de dor em crianças (2 meses a 7 anos) ou pacientes sem comunicação verbal.',
    parameters: [
      'Face, Legs (Pernas), Activity (Atividade), Cry (Choro), Consolability (Consolabilidade).'
    ],
    interpretation: '1-3: Dor leve; 4-6: Dor moderada; 7-10: Dor intensa.',
    application: 'Pediatria, Pós-operatório infantil.'
  },
  {
    id: '13',
    name: 'Escala de Fugulin',
    description: 'Classificação de dependência do paciente para dimensionamento de pessoal.',
    parameters: [
      'Estado mental, Oxigenação, Sinais vitais, Motilidade, Deambulação, Alimentação, Cuidado corporal, Eliminação, Terapêutica.'
    ],
    interpretation: 'Define carga de trabalho: Cuidados Mínimos, Intermediários, Alta Dependência, Semi-intensivo ou Intensivo.',
    application: 'Gestão de Enfermagem, Dimensionamento.'
  },
  {
    id: '14',
    name: 'Modelo TIME',
    description: 'Abordagem sistemática para o preparo do leito da ferida e cicatrização.',
    parameters: [
      'T (Tissue): Tecido não viável (necrose/esfacelo).',
      'I (Infection): Infecção ou inflamação.',
      'M (Moisture): Umidade (exsudato).',
      'E (Edge): Borda da ferida (epitelização).'
    ],
    interpretation: 'Orienta a escolha do curativo e conduta terapêutica.',
    application: 'Estomaterapia, Curativos complexos.'
  }
];

export const protocols = [
  {
    id: 'p1',
    name: 'XABCDE do Trauma',
    description: 'Sequência prioritária no atendimento ao trauma.',
    steps: [
      'X: Exsanguinação (Hemorragia externa grave).',
      'A: Airway (Vias aéreas e controle cervical).',
      'B: Breathing (Respiração e ventilação).',
      'C: Circulation (Circulação e controle de choque).',
      'D: Disability (Déficit neurológico).',
      'E: Exposure (Exposição e prevenção de hipotermia).'
    ]
  },
  {
    id: 'p2',
    name: 'Anamnese SAMPLE',
    description: 'Coleta de dados rápida em emergências.',
    steps: [
      'S: Sinais e Sintomas.',
      'A: Alergias.',
      'M: Medicamentos em uso.',
      'P: Passado médico / Prenhez.',
      'L: Líquidos e alimentos (última ingestão).',
      'E: Eventos relacionados ao trauma/doença.'
    ]
  },
  {
    id: 'p3',
    name: 'Manobra de OVACE',
    description: 'Desobstrução de Vias Aéreas por Corpo Estranho.',
    steps: [
      'Adulto Consciente: Manobra de Heimlich (compressões subdiafragmáticas).',
      'Lactente: 5 batidas nas costas + 5 compressões torácicas.',
      'Inconsciente: Iniciar RCP e checar orofaringe.'
    ]
  }
];
