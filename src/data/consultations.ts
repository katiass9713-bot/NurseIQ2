export interface ConsultationTopic {
  id: string;
  category: string;
  title: string;
  content: string;
  details: string[];
  exampleRecord?: string;
  exampleRecords?: { title: string; content: string }[];
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
    ],
    exampleRecord: '14:30 - Paciente posicionado em decúbito dorsal horizontal no leito, alinhamento corporal mantido. Orientado quanto à necessidade de repouso nesta posição por 2 horas após o procedimento. Sem queixas álgicas no momento. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '2',
    category: 'Consulta de Enfermagem',
    title: 'Puericultura',
    content: 'Acompanhamento do crescimento e desenvolvimento infantil, com foco na promoção da saúde e prevenção de agravos.',
    details: [
      'Avaliação do crescimento: Peso, Estatura, Perímetro Cefálico (curvas da OMS).',
      'Avaliação do desenvolvimento: Marcos motores, cognitivos e sociais (Caderneta da Criança).',
      'Estado vacinal: Conferência rigorosa da caderneta de vacinação.',
      'Aleitamento materno e alimentação complementar: Orientações conforme faixa etária.',
      'Prevenção de acidentes e promoção de ambiente seguro.',
      'Rastreamento de Transtorno do Espectro Autista (M-CHAT-R/F): Aplicado entre 16 e 30 meses. Consiste em 20 perguntas (sim/não) para os pais. Risco Baixo (0-2 pontos), Risco Moderado (3-7 pontos - aplicar entrevista de seguimento), Risco Alto (8-20 pontos - encaminhar imediatamente).'
    ],
    exampleRecords: [
      {
        title: 'Recém-nascido (0 a 15 dias)',
        content: 'S: Mãe primípara, relata dificuldades na pega da amamentação, fissuras mamilares. RN sugando bem, evacuações e diureses presentes (amarelo-ouro). Nega febre.\nO: RN ativo, reativo, choro forte. Peso: 3,4kg (recuperando peso de nascimento), Estatura: 50cm, PC: 35cm. Icterícia fisiológica leve (zona I). Coto umbilical em processo de mumificação, sem sinais flogísticos. Reflexos primitivos (Moro, sucção, preensão) presentes e simétricos.\nA: RN a termo, crescimento adequado, dificuldade no aleitamento materno.\nP: Corrigida pega e posicionamento durante a consulta. Orientada ordenha de alívio e banho de sol. Reforçada higiene do coto com álcool 70%. Agendado retorno em 1 semana.'
      },
      {
        title: 'Lactente (6 meses)',
        content: 'S: Mãe relata introdução alimentar iniciada há 1 semana com boa aceitação de frutas amassadas. Mantém aleitamento materno sob livre demanda. Sono tranquilo.\nO: Ativo, reativo, sorri, senta com apoio, tenta alcançar objetos. Peso: 7,2kg (Z-score 0), Estatura: 66cm (Z-score 0), PC: 43cm. Reflexos simétricos. Fontanela anterior normotensa (1x1cm). Pele íntegra. Abdome flácido, RHA+. Eliminações fisiológicas.\nA: Crescimento e desenvolvimento adequados para a idade. Introdução alimentar em curso.\nP: Orientada sobre continuidade da IA (papinhas salgadas) e manutenção do aleitamento. Vacinas do 6º mês atualizadas nesta data. Retorno agendado para o 9º mês.'
      },
      {
        title: 'Lactente (1 ano)',
        content: 'S: Mãe refere que a criança já engatinha bem e tenta ficar em pé com apoio. Fala "mama" e "papa". Alimentação da família, boa aceitação. Nega intercorrências.\nO: Criança interativa, explora o ambiente. Fica em pé com apoio, faz pinça com os dedos. Peso: 9,8kg (Z-score 0), Estatura: 75cm (Z-score 0), PC: 46cm. Ausculta cardíaca e pulmonar sem alterações. Dentição: 4 incisivos presentes.\nA: Crescimento e desenvolvimento adequados. \nP: Orientada sobre prevenção de acidentes (quedas, engasgos, intoxicações). Reforçada higiene bucal. Vacinas de 1 ano (Tríplice Viral, Pneumo 10, Meningo C, ACWY) administradas. Retorno aos 15 meses.'
      },
      {
        title: 'Criança (2 anos)',
        content: 'S: Pais relatam que a criança corre, chuta bola, forma frases curtas ("quero água"). Desfralde diurno iniciado. M-CHAT-R aplicado com pontuação 1 (Baixo Risco).\nO: Criança ativa, colaborativa. Peso: 12,5kg (Z-score 0), Estatura: 87cm (Z-score 0). Marcha estável. Interage bem durante a consulta, aponta para partes do corpo quando solicitada.\nA: Crescimento e desenvolvimento adequados. Risco baixo para TEA.\nP: Orientada sobre manejo de birras e estabelecimento de limites. Incentivada leitura e brincadeiras lúdicas. Vacinas em dia. Retorno anual.'
      },
      {
        title: 'Criança (5 anos)',
        content: 'S: Criança frequenta a escola, mãe relata boa adaptação. Alimentação variada, mas com recusa de alguns vegetais. Controle esfincteriano total.\nO: Criança comunicativa, desenha formas simples, pula num pé só. Peso: 18kg (Z-score 0), Estatura: 110cm (Z-score 0), IMC adequado. Acuidade visual (Snellen) 20/20 em ambos os olhos. Exame físico sem alterações.\nA: Crescimento e desenvolvimento adequados. \nP: Orientada sobre alimentação saudável (evitar ultraprocessados) e tempo de tela (máx 1h/dia). Vacinas de 5 anos (Febre Amarela, Pneumo 23 se indicação) atualizadas. Retorno anual.'
      }
    ]
  },
  {
    id: '3',
    category: 'Consulta de Enfermagem',
    title: 'Pré-Natal',
    content: 'Assistência integral à gestante para garantir uma gestação saudável, identificação precoce de riscos e um parto seguro.',
    details: [
      'Cálculo da Idade Gestacional (IG) e Data Provável do Parto (DPP).',
      'Parâmetros Clínicos Esperados (Risco Habitual): BCF entre 110-160 bpm; Altura Uterina (AU) crescendo ~1cm/semana a partir de 20 semanas (acompanhar curva); PA < 140/90 mmHg; Ganho de peso adequado ao IMC pré-gestacional.',
      'Manobras de Leopold-Zweifel (a partir de 28 semanas): 1º Tempo (Fundo uterino - Situação: longitudinal, transversa); 2º Tempo (Laterais do abdome - Posição: dorso à direita ou esquerda); 3º Tempo (Apreensão do polo inferior - Apresentação: cefálica, pélvica); 4º Tempo (Escavação pélvica - Insinuação).',
      'Exames 1º Trimestre: Hemograma, Tipagem Sanguínea/Fator Rh, Glicemia em jejum, Teste rápido Sífilis/HIV/Hepatite B e C, Toxoplasmose (IgG/IgM), Urina tipo I, Urocultura, USG obstétrica (preferencialmente morfológica de 1T).',
      'Exames 2º Trimestre: TOTG 75g (entre 24-28 semanas), Coombs indireto (se Rh negativo, repetir mensalmente).',
      'Exames 3º Trimestre: Repetir Hemograma, Glicemia, VDRL, HIV, Hepatites, Urina I, Urocultura. Pesquisa de Estreptococo do Grupo B (GBS) entre 35-37 semanas.',
      'Suplementação: Ácido Fólico (até fim do 1º trimestre) e Sulfato Ferroso (profilático até 3 meses pós-parto).',
      'Orientações: Sinais de alarme (sangramento, perda de líquido, cefaleia intensa, escotomas, dor epigástrica), plano de parto e aleitamento.'
    ],
    exampleRecords: [
      {
        title: '1º Trimestre (Ex: 10 semanas)',
        content: 'S: Gestante, 26 anos, G1P0A0, comparece para 1ª consulta de pré-natal. DUM: 15/01/2026. Relata náuseas matinais e sonolência. Nega sangramentos ou dor pélvica. Antecedentes: nega HAS, DM ou alergias.\nO: Corada, hidratada. PA: 110x70 mmHg, FC: 80 bpm, Peso: 62kg, Altura: 1,65m (IMC: 22,7 - Eutrófica). Mamas simétricas, sem alterações. Abdome flácido, indolor. AU não mensurável ainda. BCF não audível com Sonar.\nA: Gestação de risco habitual, 10 semanas e 2 dias. Sintomas fisiológicos do 1T.\nP: Solicitados exames de rotina do 1º trimestre. Prescrito Ácido Fólico 400mcg/dia. Orientada sobre alimentação fracionada para náuseas, hidratação e sinais de alarme. Agendado retorno com exames.'
      },
      {
        title: '2º Trimestre (Ex: 24 semanas)',
        content: 'S: Gestante comparece para consulta de rotina. IG: 24 semanas. Relata movimentação fetal ativa. Queixa de pirose ocasional. Nega sangramento, perda de líquido ou contrações.\nO: PA: 115x75 mmHg, Peso: 66kg (+4kg desde o início). Abdome gravídico. AU: 23cm (adequada para IG). Manobras de Leopold: situação longitudinal. BCF: 142 bpm no QIE. Dinâmica uterina ausente. Edema em MMII (+/4+).\nA: Gestação de risco habitual, 24 semanas. Crescimento fetal adequado.\nP: Solicitado TOTG 75g. Iniciada suplementação com Sulfato Ferroso 40mg/dia. Orientada sobre fracionamento da dieta para pirose, elevação dos MMII ao repouso. Retorno em 4 semanas.'
      },
      {
        title: '3º Trimestre (Ex: 36 semanas)',
        content: 'S: Gestante em acompanhamento, IG: 36 semanas. Relata ansiedade para o parto, aumento da frequência urinária e dor lombar leve. Movimentação fetal presente e vigorosa. Nega perda de líquido ou sangramento.\nO: PA: 120x80 mmHg, Peso: 72kg (+10kg total). AU: 34cm. Manobras de Leopold: situação longitudinal, dorso à esquerda, apresentação cefálica, insinuada. BCF: 138 bpm no QIE. DU: ausente. Edema em MMII (++/4+).\nA: Gestação de risco habitual, 36 semanas. Feto cefálico.\nP: Solicitada pesquisa de GBS e exames de 3º trimestre. Revisado plano de parto. Orientada sobre sinais de trabalho de parto (contrações rítmicas, perda de tampão/líquido) e amamentação. Retorno em 15 dias.'
      }
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
    ],
    exampleRecord: 'S: Paciente refere "dor de cabeça forte latejante" e náuseas desde a manhã. Nega vômitos.\nO: Consciente, orientada, fácies de dor. PA: 140x90 mmHg, FC: 88 bpm, FR: 18 irpm, Tax: 36,8ºC, Dor: 8/10. Pupilas isocóricas e fotorreagentes.\nA: Dor aguda relacionada a processo neurológico/vascular evidenciada por relato verbal e fácies de dor.\nP: Administrado analgésico SN conforme prescrição médica. Mantido ambiente calmo e com pouca luz. Reavaliar dor em 30 minutos. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '11:00 - Avaliado resultado de hemograma de hoje: Hb 8,5 g/dL, Ht 26% (anemia), Leucócitos 14.500/mm³ com 8% de bastões (leucocitose com desvio à esquerda sugerindo infecção aguda), Plaquetas 180.000/mm³ (normais). Comunicado achados ao médico plantonista Dr. Silva, que prescreveu nova antibioticoterapia e concentrado de hemácias. Início do preparo para transfusão conforme protocolo institucional. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '08:30 - Realizado curativo em úlcera venosa em MMIE (região maleolar medial). Retirada cobertura anterior saturada com exsudato serosanguinolento moderado. Limpeza com SF 0,9% em jato. Leito da ferida com 80% de tecido de granulação vermelho vivo e 20% de esfacelo amarelado aderido. Bordas regulares e maceração perilesional leve. Mensuração: 4x3cm. Aplicado hidrogel no esfacelo e coberto com espuma de poliuretano. Fixado com atadura de crepom. Paciente tolerou bem o procedimento, sem queixas de dor (EVA 2/10). -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '16:45 - Paciente relata tontura e cefaleia nucal. Posicionado em decúbito dorsal com cabeceira a 45º. Aferida PA em MSE (160x100 mmHg) e MSD (158x98 mmHg) após 5 minutos de repouso. FC: 92 bpm. Comunicado enfermeiro plantonista e administrado Captopril 25mg VO conforme prescrição médica de "se necessário". Mantido em repouso e observação. -- Tec. Enf. Nome / Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '14:00 - Consulta de enfermagem ao idoso (78 anos), acompanhado da filha. Relata esquecimentos recentes e duas quedas no último semestre em domicílio. Independente para AVDs básicas, mas necessita auxílio para AIVDs (finanças, compras). MEEM: 22/30 (escolaridade 4 anos - sugestivo de declínio cognitivo leve). Teste Timed Up and Go (TUG): 15 segundos (alto risco de quedas). Traz receita com 8 medicamentos (polifarmácia). PA: 130x80 mmHg. Conduta: Orientada filha sobre adaptações ambientais para prevenção de quedas (retirar tapetes, iluminação noturna). Encaminhado para avaliação geriátrica e revisão farmacoterapêutica. Agendado retorno em 2 meses. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '10:05 - Paciente encontrado irresponsivo no leito, sem pulso central e em apneia. Acionado código azul. Iniciadas manobras de RCP de alta qualidade (compressões torácicas). 10:07 - Chegada do carrinho de emergência e equipe médica. Instalado monitor: ritmo de Fibrilação Ventricular (FV). 10:08 - Aplicado 1 choque (200J) bifásico, seguido de RCP imediata. Puncionado AVP em MSE e administrado Epinefrina 1mg EV. 10:10 - Checado pulso: pulso carotídeo presente, ritmo sinusal no monitor. Retorno da Circulação Espontânea (RCE). Paciente intubado pelo médico e transferido para UTI. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '09:30 - Paciente, 35 anos, comparece para coleta de preventivo de rotina. DUM: 10/05/2023. Nega queixas ginecológicas. Ao exame especular: colo uterino de aspecto epitelizado, sem lesões macroscópicas, orifício externo em fenda. Secreção vaginal fisiológica, em pequena quantidade, cor branca, sem odor. Realizada coleta dupla (ectocérvice com espátula de Ayre e endocérvice com escova) sem intercorrências. Lâmina fixada e identificada. Orientada sobre prazo de entrega do resultado (30 dias) e importância do retorno. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '15:20 - Paciente evolui com dispneia e tosse produtiva. Ao exame físico respiratório: Tórax simétrico, expansibilidade diminuída em base direita. FR: 26 irpm, SpO2: 91% em ar ambiente. À ausculta pulmonar: Murmúrio vesicular diminuído globalmente, com presença de estertores crepitantes em base pulmonar direita e sibilos esparsos bilateralmente. Instalado cateter nasal de O2 a 2L/min conforme prescrição, com melhora da saturação para 96%. Elevada cabeceira (Fowler). Comunicado médico plantonista sobre os achados. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '20:00 - Paciente vítima de TCE grave, em leito de UTI. Sedação suspensa há 2 horas para avaliação neurológica. ECG: 6 (Abertura ocular à dor: 2, Resposta verbal ausente/intubado: 1T, Resposta motora de flexão anormal/decorticação: 3). Pupilas anisocóricas (D: 4mm, E: 2mm), pupila direita fotorreagente lenta, esquerda fotorreagente rápida. Mantém ventilação mecânica. Sinais vitais: PA 160x90 mmHg, FC 55 bpm (bradicardia), FR 14 irpm (ritmo do ventilador). Sinais sugestivos de hipertensão intracraniana comunicados imediatamente ao neurocirurgião de plantão. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '07:30 - Recebo plantão com paciente no 2º DPO de laparotomia exploradora. SNE em narina direita, fixação limpa e íntegra, recebendo dieta enteral a 40ml/h em BIC, boa aceitação, sem resíduo gástrico. SVD pérvia, drenando urina amarelo-claro, límpida, volume de 450ml em 12h. Dreno de Port-o-vac em flanco direito, com vácuo mantido, drenando 30ml de secreção serosanguinolenta. Curativo da inserção do dreno limpo e seco. Realizada higiene íntima e troca da fixação da SVD. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '11:00 - Durante banho no leito, inspecionada pele do paciente restrito ao leito. Identificada LPP Estágio 2 em região sacral, medindo 2x2cm, leito rosado, sem exsudato, bordas regulares. Pele perilesional íntegra. Realizada limpeza com SF 0,9% morno e aplicado curativo de hidrocoloide placa. Aplicado AGE em proeminências ósseas (calcâneos, trocânteres e cotovelos) e instalado colchão pneumático. Realizada mudança de decúbito para lateral direito. Orientado acompanhante sobre a importância da mudança de decúbito a cada 2 horas. -- Enf. Nome (COREN-XX 12345)'
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
    ],
    exampleRecord: '08:15 - Paciente admitido no PS com queixa de dor torácica típica (em aperto, irradiada para MSE). Imediatamente posicionado em maca, instalado monitorização multiparamétrica e oxigênio sob cateter nasal a 2L/min. Realizado ECG de 12 derivações em menos de 10 minutos da admissão. Traçado entregue em mãos ao médico plantonista Dr. Carlos, que evidenciou supradesnivelamento do segmento ST em parede inferior (DII, DIII, aVF). Puncionado AVP calibroso em MSE e administrado AAS 300mg e Clopidogrel 300mg VO conforme prescrição médica. Aguardando vaga na Hemodinâmica. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '14',
    category: 'Saúde da Mulher',
    title: 'Exame Físico da Gestante',
    content: 'Avaliação sistemática da gestante durante o pré-natal.',
    details: [
      'Inspeção: Presença de cloasma gravídico, linha nigra, estrias.',
      'Palpação (Manobras de Leopold): 1ª (Fundo uterino), 2ª (Posição fetal), 3ª (Apresentação), 4ª (Insinuação).',
      'Medida da Altura Uterina (AU): Do sínfise púbica ao fundo do útero.',
      'Ausculta dos Batimentos Cardiofetais (BCF): Localizar dorso fetal (normal: 120-160 bpm).',
      'Avaliação de Edema: Membros inferiores (sinal do cacifo).'
    ],
    exampleRecord: 'Consulta de Pré-natal (IG: 28 sem). Gestante em bom estado geral. PA: 110/70 mmHg, Peso: 68kg. Ao exame físico: Abdome globoso, presença de linha nigra. Palpação: Dorso fetal à esquerda, apresentação cefálica. AU: 27cm. BCF: 144 bpm, rítmicos. Ausência de edema em MMII. Orientada sobre sinais de alerta e próxima consulta. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '15',
    category: 'Saúde da Criança',
    title: 'Exame Físico em Puericultura',
    content: 'Avaliação do crescimento e desenvolvimento infantil.',
    details: [
      'Medidas Antropométricas: Peso, Comprimento, Perímetro Cefálico (PC).',
      'Fontanelas: Anterior (Bregmática) e Posterior (Lambdoide).',
      'Pele: Mancha mongólica, hemangiomas, icterícia.',
      'Reflexos Primitivos: Moro, Sucção, Preensão palmar/plantar, Marcha.',
      'Genitália: Criptorquidia (meninos), Sinéquia (meninas).'
    ],
    exampleRecord: 'Consulta de Puericultura (2 meses). Lactente calmo, hidratado, corado. Peso: 5.200g (P50), Estatura: 56cm (P50), PC: 39cm. Fontanela anterior plana e normotensa. Reflexos de Moro e preensão presentes e simétricos. Coto umbilical cicatrizado. Genitália masculina: testículos tópicos na bolsa escrotal. Vacinação em dia. Mãe orientada sobre aleitamento materno exclusivo. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '16',
    category: 'Saúde do Idoso',
    title: 'Exame Físico do Idoso',
    content: 'Foco na funcionalidade e fragilidades comuns no envelhecimento.',
    details: [
      'Avaliação da Pele: Turgor diminuído, manchas senis, risco de lesão por pressão.',
      'Sistema Sensorial: Acuidade visual e auditiva (teste do sussurro).',
      'Sistema Cardiovascular: Pesquisa de hipotensão ortostática (PA deitado e em pé).',
      'Sistema Musculoesquelético: Marcha, equilíbrio, força muscular.',
      'Avaliação Cognitiva: MEEM, Teste do Relógio.'
    ],
    exampleRecord: 'Consulta de Enfermagem ao Idoso. Paciente lúcido e orientado. PA: 130/80 mmHg (sentado). Ao exame: Pele com turgor diminuído, presença de ceratoses actínicas em braços. Acuidade auditiva preservada ao teste do sussurro. Marcha estável, sem auxílio de dispositivos. Escala de Katz: Independente para AVDs. Orientado sobre prevenção de quedas no domicílio. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '17',
    category: 'Programas Estratégicos',
    title: 'Exame Físico TB / MH',
    content: 'Avaliação específica para Tuberculose e Hanseníase.',
    details: [
      'Tuberculose: Avaliação do padrão respiratório, ausculta pulmonar, perda ponderal.',
      'Hanseníase (Avaliação Neurológica Simplificada): Inspeção de mãos e pés (calosidades, feridas).',
      'Palpação de Nervos: Ulnar, Radial, Fibular comum, Tibial posterior.',
      'Testes de Sensibilidade: Monofilamentos de Semmes-Weinstein (Estesiometria).',
      'Avaliação de Força Muscular: Mãos e pés.'
    ],
    exampleRecord: 'Avaliação de Hanseníase (em tratamento MB). Paciente refere dormência em mão direita. Ao exame: Mancha hipocrômica em antebraço D com perda de sensibilidade térmica. Palpação de nervos: Nervo ulnar D espessado e doloroso à palpação. Estesiometria: Perda de sensibilidade em território do ulnar D (monofilamento roxo). Força muscular preservada. Orientado sobre autocuidados com as mãos. -- Enf. Nome (COREN-XX 12345)'
  },
  {
    id: '18',
    category: 'Consulta de Enfermagem',
    title: 'Calendário Vacinal (2026)',
    content: 'Esquema vacinal atualizado conforme Ministério da Saúde.',
    details: [
      'Ao nascer: BCG e Hepatite B.',
      '2 meses: Pentavalente (1ª), VIP (1ª), Pneumocócica 10V (1ª), Rotavírus (1ª).',
      '3 meses: Meningocócica C (1ª).',
      '4 meses: Pentavalente (2ª), VIP (2ª), Pneumocócica 10V (2ª), Rotavírus (2ª).',
      '5 meses: Meningocócica C (2ª).',
      '6 meses: Pentavalente (3ª), VIP (3ª), Influenza (Anual), Covid-19 (1ª).',
      '7 meses: Covid-19 (2ª).',
      '9 meses: Febre Amarela (1ª), Covid-19 (3ª).',
      '12 meses: Tríplice Viral (1ª), Pneumocócica 10V (Reforço), Meningocócica C (Reforço), Meningocócica ACWY.',
      '15 meses: DTP (1º Reforço), VOP (Reforço), Hepatite A, Tetra Viral.',
      '4 anos: DTP (2º Reforço), VOP (2º Reforço), Febre Amarela (Reforço), Varicela.',
      '5 anos: Febre Amarela (Dose adicional se necessário), Pneumocócica 23 (Dose única).',
      '9 a 14 anos: HPV (Dose única).'
    ],
    exampleRecord: '11:20 - Lactente (12 meses) comparece para atualização vacinal. Caderneta conferida. Administradas vacinas: Tríplice Viral (1ª dose), Pneumocócica 10V (reforço), Meningocócica C (reforço) e Meningocócica ACWY conforme nova recomendação. Criança tolerou bem os procedimentos. Mãe orientada sobre possíveis reações e agendado retorno para os 15 meses. -- Enf. Nome (COREN-XX 12345)'
  }
];
