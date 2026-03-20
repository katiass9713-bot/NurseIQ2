export interface Scale {
  id: string;
  name: string;
  description: string;
  parameters: string[];
  interpretation: string;
  application: string;
  theoreticalBasis?: string;
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
    application: 'Trauma, Neurologia, Emergência.',
    theoreticalBasis: 'A ECG foi desenvolvida em 1974 por Teasdale e Jennett na Universidade de Glasgow. Baseia-se na premissa de que o nível de consciência é um indicador sensível de disfunção cerebral global. A avaliação sistemática da abertura ocular (tronco encefálico), resposta verbal (córtex cerebral) e motora (integração do SNC) permite quantificar o grau de comprometimento neurológico, monitorar a evolução clínica e guiar intervenções como a intubação orotraqueal (IOT) para proteção de via aérea em escores ≤ 8.'
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
    application: 'APH, Triagem rápida.',
    theoreticalBasis: 'A escala AVPU é uma simplificação da Escala de Coma de Glasgow, desenhada para uso em situações de emergência pré-hospitalar (APH) e triagem inicial, onde a rapidez é mais crítica que a precisão detalhada. Ela avalia o córtex cerebral e o tronco encefálico de forma binária (responde ou não responde) a estímulos progressivamente mais intensos (voz, depois dor). Uma resposta P ou U indica incapacidade de proteger a própria via aérea, exigindo manejo imediato.'
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
    application: 'Classificação de Risco em Pronto-Socorro.',
    theoreticalBasis: 'O ESI (Emergency Severity Index) foi criado no final dos anos 90 nos EUA. Diferente de outras escalas de triagem que focam apenas no tempo de espera seguro, o ESI incorpora a previsão do número de recursos (exames laboratoriais, imagem, procedimentos, consultas com especialistas) que o paciente necessitará. Isso permite não apenas priorizar o atendimento dos mais graves (Níveis 1 e 2), mas também otimizar o fluxo do pronto-socorro, direcionando pacientes de Nível 4 e 5 para áreas de atendimento rápido (Fast Track).'
  },
  {
    id: '4',
    name: 'NEWS (National Early Warning Score)',
    description: 'Detectar precocemente a deterioração clínica em adultos.',
    parameters: [
      'FR, SatO2, O2 suplementar, PAS, FC, Temperatura, Nível de consciência.'
    ],
    interpretation: '0-4: Baixo risco; 5-6: Médio risco (Alerta médico); ≥ 7: Alto risco (Emergência).',
    application: 'Enfermarias, Monitoração contínua.',
    theoreticalBasis: 'O NEWS (National Early Warning Score) foi desenvolvido pelo Royal College of Physicians (Reino Unido) em 2012. Baseia-se no princípio fisiológico de que a deterioração clínica (como sepse, choque ou insuficiência respiratória) é precedida por alterações sutis e progressivas nos sinais vitais. Ao atribuir pesos (0 a 3) para desvios da normalidade em 6 parâmetros fisiológicos básicos, o NEWS cria um escore agregado que padroniza a detecção de agravamento e aciona protocolos de resposta rápida (Time de Resposta Rápida - TRR) antes que ocorra parada cardiorrespiratória.'
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
    application: 'APH, Pronto-Socorro.',
    theoreticalBasis: 'A Escala Pré-Hospitalar de Cincinnati (CPSS) foi derivada da escala do NIHSS (National Institutes of Health Stroke Scale). Ela foca nos três achados físicos mais comuns e reprodutíveis do AVC isquêmico no território da artéria cerebral média (ACM), que é a artéria mais frequentemente acometida. A presença de qualquer um dos três sinais (queda facial, fraqueza no braço, fala anormal) em um paciente com início súbito de sintomas tem alta sensibilidade para o diagnóstico de AVC, justificando o acionamento imediato do protocolo de AVC ("Tempo é Cérebro").'
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
    application: 'UTI, Sedação paliativa.',
    theoreticalBasis: 'A Escala de Sedação de Ramsay foi a primeira escala desenvolvida para avaliar o nível de sedação em pacientes internados em Unidades de Terapia Intensiva (UTI). Seu objetivo principal é evitar tanto a sedação excessiva (que prolonga a ventilação mecânica e aumenta o risco de pneumonia associada à ventilação) quanto a sedação insuficiente (que causa ansiedade, dor e assincronia com o ventilador). A escala baseia-se na observação clínica da resposta do paciente a estímulos auditivos e visuais, classificando o nível de consciência em seis graus progressivos de depressão do sistema nervoso central.'
  },
  {
    id: '9',
    name: 'Escala de Apgar',
    description: 'Avaliação da vitalidade do recém-nascido no 1º e 5º minutos de vida.',
    parameters: [
      'Aparência (Cor), Pulso (FC), Gesticulação (Reflexos), Atividade (Tônus), Respiração.'
    ],
    interpretation: '7-10: Normal; 4-6: Moderada depressão; 0-3: Grave (Reanimação imediata).',
    application: 'Sala de Parto, Neonatologia.',
    theoreticalBasis: 'Desenvolvido pela Dra. Virginia Apgar em 1952, o Índice de Apgar é um método rápido e padronizado para avaliar a condição clínica do recém-nascido logo após o nascimento e a necessidade de intervenções de reanimação. Os cinco parâmetros avaliados (Frequência Cardíaca, Esforço Respiratório, Tônus Muscular, Irritabilidade Reflexa e Cor da Pele) refletem a transição fisiológica do ambiente intrauterino para o extrauterino, especialmente a adaptação cardiorrespiratória e neurológica. A avaliação no 1º minuto indica a tolerância ao processo de nascimento, enquanto a do 5º minuto reflete a adaptação ao novo ambiente e a eficácia de eventuais manobras de reanimação.'
  },
  {
    id: '10',
    name: 'Escala de Morse',
    description: 'Avaliação do risco de quedas em ambiente hospitalar.',
    parameters: [
      'História de quedas, Diagnóstico secundário, Auxílio na deambulação, Terapia IV, Marcha, Estado Mental.'
    ],
    interpretation: '0-24: Baixo risco; 25-44: Risco moderado; ≥ 45: Alto risco.',
    application: 'Internação, Segurança do Paciente.',
    theoreticalBasis: 'A Morse Fall Scale (MFS) foi desenvolvida por Janice Morse em 1989 para identificar pacientes adultos com risco de sofrer quedas durante a internação hospitalar. A escala baseia-se em seis variáveis preditivas que demonstraram forte correlação com a ocorrência de quedas em estudos clínicos. A avaliação sistemática desses fatores permite à equipe de enfermagem implementar medidas preventivas direcionadas, como uso de pulseiras de identificação, adequação do ambiente (grades elevadas, iluminação), supervisão durante a deambulação e revisão de medicamentos que possam causar tontura ou confusão mental.'
  },
  {
    id: '11',
    name: 'CPOT (Critical-Care Pain Observation Tool)',
    description: 'Avaliação de dor em pacientes críticos não comunicantes (sedados/entubados).',
    parameters: [
      'Expressão facial, Movimentos corporais, Tensão muscular, Adaptação ao ventilador.'
    ],
    interpretation: '≥ 3 pontos indica presença de dor significativa.',
    application: 'UTI, Pacientes em VM.',
    theoreticalBasis: 'A CPOT foi desenvolvida por Gélinas et al. (2006) especificamente para avaliar a dor em pacientes adultos internados em UTI que não conseguem se comunicar verbalmente, como aqueles sob ventilação mecânica ou sedação. Baseia-se na premissa de que a dor provoca respostas comportamentais e fisiológicas observáveis. A escala avalia quatro domínios comportamentais: expressão facial (o indicador mais válido de dor), movimentos corporais, tensão muscular (avaliada pela resistência à movimentação passiva) e a sincronia com o ventilador mecânico (ou vocalização em pacientes extubados).'
  },
  {
    id: '12',
    name: 'FLACC',
    description: 'Avaliação de dor em crianças (2 meses a 7 anos) ou pacientes sem comunicação verbal.',
    parameters: [
      'Face, Legs (Pernas), Activity (Atividade), Cry (Choro), Consolability (Consolabilidade).'
    ],
    interpretation: '1-3: Dor leve; 4-6: Dor moderada; 7-10: Dor intensa.',
    application: 'Pediatria, Pós-operatório infantil.',
    theoreticalBasis: 'A escala FLACC (Face, Legs, Activity, Cry, Consolability) é uma ferramenta observacional validada para quantificar a dor em crianças que não conseguem relatar sua dor de forma confiável (geralmente entre 2 meses e 7 anos) ou em adultos com comprometimento cognitivo. A teoria subjacente é que a dor aguda se manifesta através de comportamentos motores e vocais específicos. Cada um dos cinco parâmetros é pontuado de 0 a 2, gerando um escore total de 0 a 10, que orienta a intervenção analgésica de forma semelhante à escala visual analógica (EVA) usada em adultos.'
  },
  {
    id: '13',
    name: 'Escala de Fugulin',
    description: 'Classificação de dependência do paciente para dimensionamento de pessoal.',
    parameters: [
      'Estado mental, Oxigenação, Sinais vitais, Motilidade, Deambulação, Alimentação, Cuidado corporal, Eliminação, Terapêutica.'
    ],
    interpretation: 'Define carga de trabalho: Cuidados Mínimos, Intermediários, Alta Dependência, Semi-intensivo ou Intensivo.',
    application: 'Gestão de Enfermagem, Dimensionamento.',
    theoreticalBasis: 'O Sistema de Classificação de Pacientes (SCP) de Fugulin, desenvolvido no Brasil, é um instrumento gerencial fundamentado na teoria das necessidades humanas básicas. Ele objetiva categorizar os pacientes de acordo com o grau de dependência em relação à equipe de enfermagem, traduzindo a complexidade assistencial em horas de cuidado necessárias. A avaliação de nove áreas de cuidado permite classificar o paciente em cinco níveis de complexidade, fornecendo dados objetivos para o dimensionamento adequado do quadro de profissionais de enfermagem, garantindo a qualidade e segurança da assistência.'
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
    application: 'Estomaterapia, Curativos complexos.',
    theoreticalBasis: 'O conceito TIME, introduzido pelo International Advisory Board on Wound Bed Preparation em 2003, fornece uma estrutura teórica e prática para o manejo de feridas crônicas. A premissa é que a cicatrização é frequentemente impedida por barreiras locais no leito da ferida. O modelo foca na remoção sistemática dessas barreiras: desbridamento de tecido desvitalizado (T), controle da carga bacteriana e inflamação (I), regulação do exsudato para manter um ambiente úmido ideal (M) e avaliação do avanço das bordas epiteliais (E). Esta abordagem holística otimiza as condições locais, permitindo que o processo fisiológico de cicatrização ocorra.'
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
    application: 'Saúde do Idoso, Reabilitação.',
    theoreticalBasis: 'O Índice de Independência em Atividades de Vida Diária (AVD) de Katz, desenvolvido em 1963, baseia-se na teoria de que a perda e a recuperação de funções em idosos ou pacientes em reabilitação seguem um padrão hierárquico, semelhante ao desenvolvimento infantil. As funções mais complexas (como tomar banho e vestir-se) são perdidas primeiro, enquanto as funções mais básicas (como alimentação e continência) são preservadas por mais tempo e recuperadas primeiro. A escala avalia a capacidade funcional básica, sendo fundamental para o planejamento de cuidados de longo prazo e avaliação de declínio cognitivo/físico.'
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
    application: 'Saúde do Idoso, APS.',
    theoreticalBasis: 'Desenvolvida em 1969, a escala de Lawton e Brody foca nas Atividades Instrumentais de Vida Diária (AIVDs), que são habilidades mais complexas necessárias para a vida independente na comunidade, exigindo maior integração cognitiva e motora do que as AVDs básicas (Katz). A teoria subjacente é que o declínio funcional geralmente afeta primeiro as AIVDs (como gerenciar finanças ou medicamentos) antes de comprometer as AVDs básicas. É um instrumento sensível para detectar os estágios iniciais de demência ou declínio funcional em idosos, auxiliando na determinação da necessidade de suporte domiciliar ou institucionalização.'
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
    application: 'Geriatria, Neurologia, APS.',
    theoreticalBasis: 'O MEEM, criado por Folstein em 1975, é o teste de rastreio cognitivo mais utilizado mundialmente. Baseia-se na avaliação quantitativa de diferentes domínios cognitivos que frequentemente estão comprometidos em síndromes demenciais, como a Doença de Alzheimer. A teoria neuropsicológica por trás do teste assume que diferentes áreas cerebrais são responsáveis por funções específicas (ex: lobo temporal para memória, lobo parietal para praxia). O teste não diagnostica a causa da demência, mas quantifica a gravidade do comprometimento cognitivo e serve para monitorar a progressão da doença ao longo do tempo.'
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
    application: 'Programa de Tabagismo, APS.',
    theoreticalBasis: 'O Teste de Fagerström para Dependência de Nicotina (FTND) fundamenta-se na compreensão neurobiológica do vício em nicotina. A nicotina liga-se aos receptores colinérgicos nicotínicos no cérebro, liberando dopamina e gerando a sensação de recompensa. Com o uso crônico, ocorre neuroadaptação (tolerância e dependência física). O teste avalia indiretamente essa neuroadaptação através de comportamentos, sendo o tempo até o primeiro cigarro do dia o indicador mais forte de dependência física (refletindo a necessidade de repor os níveis de nicotina que caíram durante o sono). A pontuação orienta a necessidade e a dosagem da Terapia de Reposição de Nicotina (TRN).'
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
    application: 'Saúde Mental, APS.',
    theoreticalBasis: 'O Alcohol Use Disorders Identification Test (AUDIT) foi desenvolvido pela Organização Mundial da Saúde (OMS) como um método simples de triagem para o consumo excessivo de álcool. A teoria por trás do instrumento é que o uso problemático de álcool existe em um continuum, desde o uso de risco até a dependência grave. O questionário de 10 itens avalia três domínios conceituais distintos: consumo de álcool (itens 1-3), comportamento de dependência (itens 4-6) e problemas relacionados ao álcool (itens 7-10). Isso permite não apenas identificar a dependência, mas também intervir precocemente na fase de "uso de risco", antes que danos físicos ou psicossociais graves ocorram.'
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
