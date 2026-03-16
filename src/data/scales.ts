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
  },
  {
    id: '15',
    name: 'Escala de Katz',
    description: 'Avalia a independência nas Atividades de Vida Diária (AVDs).',
    parameters: [
      'Banho',
      'Vestir-se',
      'Uso do vaso sanitário',
      'Transferência',
      'Continência',
      'Alimentação'
    ],
    interpretation: 'Independente em todas as funções vs Dependente em uma ou mais.',
    application: 'Saúde do Idoso, Reabilitação.'
  },
  {
    id: '16',
    name: 'Escala de Lawton e Brody',
    description: 'Avalia as Atividades Instrumentais de Vida Diária (AIVDs).',
    parameters: [
      'Usar telefone',
      'Fazer compras',
      'Preparar refeições',
      'Limpar a casa',
      'Lavar roupa',
      'Usar meios de transporte',
      'Responsabilidade pelos medicamentos',
      'Lidar com dinheiro'
    ],
    interpretation: 'Pontuação de 8 a 24. Menor pontuação indica maior dependência.',
    application: 'Saúde do Idoso, APS.'
  },
  {
    id: '17',
    name: 'Mini Exame do Estado Mental (MEEM)',
    description: 'Rastreio cognitivo rápido.',
    parameters: [
      'Orientação temporal e espacial',
      'Registro (memória imediata)',
      'Atenção e cálculo',
      'Evocação',
      'Linguagem e praxia'
    ],
    interpretation: 'Pontos de corte variam conforme a escolaridade (ex: 20 para analfabetos, 24 para escolarizados).',
    application: 'Geriatria, Neurologia, APS.'
  },
  {
    id: '18',
    name: 'Teste de Fagerström',
    description: 'Avalia o grau de dependência de nicotina.',
    parameters: [
      'Tempo até o primeiro cigarro',
      'Dificuldade de não fumar em locais proibidos',
      'Cigarro mais difícil de abandonar',
      'Quantidade de cigarros/dia',
      'Fumar mais pela manhã',
      'Fumar mesmo doente'
    ],
    interpretation: '0-2: Muito Baixa; 3-4: Baixa; 5: Média; 6-7: Alta; 8-10: Muito Alta.',
    application: 'Programa de Tabagismo, APS.'
  },
  {
    id: '19',
    name: 'AUDIT',
    description: 'Identifica transtornos por uso de álcool.',
    parameters: [
      'Frequência de consumo',
      'Quantidade típica',
      'Frequência de consumo pesado',
      'Perda de controle',
      'Culpa após beber',
      'Apagões',
      'Lesões por beber',
      'Preocupação de terceiros'
    ],
    interpretation: '0-7: Baixo risco; 8-15: Uso de risco; 16-19: Uso nocivo; 20+: Provável dependência.',
    application: 'Saúde Mental, APS.'
  }
];

export const protocols = [
  {
    id: 'p1',
    name: 'Acolhimento com Classificação de Risco',
    description: 'Protocolo de triagem na APS para priorização do atendimento.',
    steps: [
      'Identificação do motivo da consulta.',
      'Avaliação de sinais vitais e sinais de alerta.',
      'Classificação: Vermelho (Emergência), Amarelo (Urgência), Verde (Pouco Urgente), Azul (Não Urgente).',
      'Encaminhamento para atendimento médico, enfermagem ou sala de urgência.'
    ]
  },
  {
    id: 'p2',
    name: 'Protocolo de Pré-Natal de Baixo Risco',
    description: 'Acompanhamento da gestante na APS.',
    steps: [
      'Confirmação da gravidez e cálculo da DPP/IG.',
      'Solicitação de exames de rotina (1º, 2º e 3º trimestres).',
      'Avaliação nutricional e suplementação (Ferro, Ácido Fólico).',
      'Monitoramento de PA, Peso, AU e BCF.',
      'Vacinação (DTPA, Hepatite B, Influenza).'
    ]
  },
  {
    id: 'p3',
    name: 'Protocolo de Hipertensão Arterial (APS)',
    description: 'Manejo e acompanhamento do paciente hipertenso.',
    steps: [
      'Diagnóstico (PA ≥ 140/90 mmHg em duas ocasiões).',
      'Estratificação de risco cardiovascular.',
      'Orientações não farmacológicas (dieta, exercício).',
      'Acompanhamento semestral ou trimestral conforme risco.',
      'Monitoramento de lesões em órgãos-alvo.'
    ]
  },
  {
    id: 'p4',
    name: 'Protocolo de Diabetes Mellitus (APS)',
    description: 'Manejo e acompanhamento do paciente diabético.',
    steps: [
      'Rastreamento e diagnóstico (Glicemia de jejum, HbA1c).',
      'Exame físico dos pés (prevenção de pé diabético).',
      'Solicitação de exames anuais (Fundo de olho, Microalbuminúria).',
      'Educação em saúde sobre automonitoramento e insulina.'
    ]
  },
  {
    id: 'p5',
    name: 'Protocolo de Tuberculose (APS)',
    description: 'Busca ativa e tratamento supervisionado.',
    steps: [
      'Identificação de Sintomático Respiratório (tosse ≥ 3 semanas).',
      'Solicitação de Baciloscopia ou Teste Rápido Molecular.',
      'Início do tratamento (Esquema Básico: RIPE).',
      'Realização de TDO (Tratamento Diretamente Observado).',
      'Investigação de contatos.'
    ]
  },
  {
    id: 'p6',
    name: 'Suporte Básico de Vida (XABCDE)',
    description: 'Protocolo de avaliação primária no trauma (PHTLS).',
    steps: [
      'X: Exsanguinação (Controle de hemorragias externas graves).',
      'A: Airway (Vias aéreas e controle da coluna cervical).',
      'B: Breathing (Respiração e ventilação).',
      'C: Circulation (Circulação com controle de hemorragias internas).',
      'D: Disability (Déficit neurológico).',
      'E: Exposure (Exposição e controle da hipotermia).'
    ]
  },
  {
    id: 'p7',
    name: 'Calendário Nacional de Vacinação (2026)',
    description: 'Esquema vacinal completo atualizado.',
    steps: [
      'Ao nascer: BCG, Hepatite B.',
      '2 meses: Penta (1ª), VIP (1ª), Pneumo 10 (1ª), Rotavírus (1ª).',
      '3 meses: Meningo C (1ª).',
      '4 meses: Penta (2ª), VIP (2ª), Pneumo 10 (2ª), Rotavírus (2ª).',
      '5 meses: Meningo C (2ª).',
      '6 meses: Penta (3ª), VIP (3ª), Influenza (Anual), Covid-19 (1ª).',
      '7 meses: Covid-19 (2ª).',
      '9 meses: Febre Amarela (1ª), Covid-19 (3ª).',
      '12 meses: Tríplice Viral (1ª), Pneumo 10 (R), Meningo C (R), Meningo ACWY.',
      '15 meses: DTP (1º R), VOP (R), Hepatite A, Tetra Viral.',
      '4 anos: DTP (2º R), VOP (2º R), Febre Amarela (R), Varicela.',
      '5 anos: Febre Amarela (Adicional), Pneumo 23.',
      '9 a 14 anos: HPV (Dose única).'
    ]
  }
];
