export interface Pathology {
  id: string;
  name: string;
  category: string;
  ageGroups: string[];
  pathophysiology: string;
  signsSymptoms: string[];
  nanda: string[];
  nic: string[];
  noc: string[];
  pharmacology: string;
}

export const pathologies: Pathology[] = [
  {
    "id": "1",
    "name": "Apneia Obstrutiva do Sono",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Obstrução intermitente e repetitiva da via aérea superior durante o sono, levando a episódios de hipóxia e despertares frequentes.",
    "signsSymptoms": [
      "Ronco alto",
      "Sonolência diurna",
      "Cefaleia matinal",
      "Irritabilidade"
    ],
    "nanda": [
      "Padrão respiratório ineficaz relacionado a obstrução da via aérea superior evidenciado por ronco alto, apneia presenciada e despertares frequentes.",
      "Distúrbio no padrão do sono relacionado a episódios de hipóxia noturna evidenciado por sonolência diurna excessiva e fadiga ao despertar."
    ],
    "nic": [
      "Monitorização respiratória: Avaliar padrão respiratório, oximetria de pulso contínua durante o sono e sinais de hipóxia.",
      "Melhora do sono: Orientar higiene do sono, evitar uso de sedativos/álcool antes de dormir e promover ambiente tranquilo.",
      "Controle de vias aéreas: Auxiliar na adaptação e uso correto do CPAP, verificando vazamentos e conforto da máscara."
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Qualidade do sono"
    ],
    "pharmacology": "Uso de CPAP (principal), Modafinila em casos específicos de sonolência residual."
  },
  {
    "id": "2",
    "name": "Asma Brônquica",
    "category": "Respiratório",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação crônica das vias aéreas resultando em hiperresponsividade brônquica e obstrução variável do fluxo de ar.",
    "signsSymptoms": [
      "Dispneia",
      "Sibilos",
      "Opressão torácica",
      "Tosse noturna"
    ],
    "nanda": [
      "Desobstrução ineficaz de vias aéreas relacionada a broncoespasmo e excesso de muco evidenciada por sibilos, tosse e dispneia.",
      "Troca de gases prejudicada relacionada a desequilíbrio na ventilação-perfusão evidenciada por hipoxemia, taquipneia e agitação."
    ],
    "nic": [
      "Controle das vias aéreas: Posicionar em Fowler/Semi-Fowler (45º-60º) para maximizar o potencial de ventilação.",
      "Monitorização de sinais vitais: Avaliar FR, oximetria de pulso, FC e esforço respiratório (uso de musculatura acessória) a cada 1-2 horas na crise.",
      "Administração de medicamentos: Administrar broncodilatadores inalatórios conforme prescrição e avaliar resposta clínica após 15-30 minutos."
    ],
    "noc": [
      "Estado respiratório: patência das vias aéreas"
    ],
    "pharmacology": "Broncodilatadores (Salbutamol), Corticoides inalatórios (Fluticasona)."
  },
  {
    "id": "3",
    "name": "Insuficiência Cardíaca Congestiva (ICC)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Incapacidade do coração em bombear sangue em volume suficiente para atender às demandas metabólicas teciduais.",
    "signsSymptoms": [
      "Edema de membros inferiores",
      "Ortopneia",
      "Dispneia paroxística noturna",
      "Fadiga"
    ],
    "nanda": [
      "Débito cardíaco diminuído relacionado a alteração na contratilidade miocárdica evidenciado por fadiga, edema de extremidades e dispneia aos esforços.",
      "Volume de líquidos excessivo relacionado a mecanismos reguladores comprometidos evidenciado por ganho de peso súbito, ortopneia e turgência jugular."
    ],
    "nic": [
      "Cuidados cardíacos: Monitorar sinais vitais, ritmo cardíaco, e avaliar presença de B3 ou B4 à ausculta.",
      "Controle de líquidos/eletrólitos: Realizar balanço hídrico rigoroso (entradas e saídas) e controle de peso diário em jejum.",
      "Terapia intravenosa: Administrar diuréticos de alça (ex: Furosemida) com atenção aos níveis de potássio sérico e risco de hipotensão."
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Diuréticos (Furosemida), Betabloqueadores (Carvedilol), Inibidores da ECA (Enalapril)."
  },
  {
    "id": "4",
    "name": "Diabetes Mellitus Tipo 2",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Resistência à insulina associada a uma deficiência relativa na secreção de insulina pelas células beta pancreáticas.",
    "signsSymptoms": [
      "Poliúria",
      "Polidipsia",
      "Polifagia",
      "Visão turva"
    ],
    "nanda": [
      "Risco de glicemia instável relacionado a adesão inadequada ao plano terapêutico e conhecimento deficiente sobre a doença.",
      "Conhecimento deficiente relacionado a falta de exposição à informação evidenciado por verbalização do problema e seguimento inadequado de instruções."
    ],
    "nic": [
      "Ensino: processo da doença: Explicar a relação entre dieta, exercício e níveis glicêmicos, utilizando materiais visuais.",
      "Controle da hiperglicemia: Monitorar glicemia capilar conforme protocolo (ex: pré-prandial e ao deitar) e administrar insulina/hipoglicemiantes.",
      "Cuidados com os pés: Inspecionar diariamente os pés quanto a lesões, orientar corte reto das unhas e uso de calçados adequados."
    ],
    "noc": [
      "Controle da glicemia",
      "Conhecimento: controle do diabetes"
    ],
    "pharmacology": "Metformina, Gliclazida, Insulina NPH/Regular se necessário."
  },
  {
    "id": "5",
    "name": "Pneumonia Adquirida na Comunidade (PAC)",
    "category": "Respiratório",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção do parênquima pulmonar causada por bactérias, vírus ou fungos, resultando em exsudato alveolar.",
    "signsSymptoms": [
      "Febre",
      "Tosse produtiva",
      "Dor pleurítica",
      "Estertores à ausculta"
    ],
    "nanda": [
      "Padrão respiratório ineficaz relacionado a dor pleurítica e fadiga evidenciado por taquipneia, uso de musculatura acessória e dispneia.",
      "Hipertermia relacionada a processo infeccioso (exsudato alveolar) evidenciada por temperatura corporal elevada, taquicardia e pele quente ao toque."
    ],
    "nic": [
      "Administração de medicamentos: Administrar antibioticoterapia no horário correto e avaliar sinais de melhora clínica ou reações adversas.",
      "Oxigenoterapia: Administrar O2 suplementar para manter SatO2 > 92% (ou conforme prescrição) e umidificar o oxigênio se fluxo > 4L/min.",
      "Monitorização respiratória: Avaliar padrão respiratório, ausculta pulmonar (presença de estertores/roncos) e características do escarro."
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Termorregulação"
    ],
    "pharmacology": "Antibióticos (Amoxicilina/Clavulanato, Azitromicina), Analgésicos."
  },
  {
    "id": "6",
    "name": "Acidente Vascular Cerebral (AVC) Isquêmico",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Interrupção do fluxo sanguíneo para uma parte do cérebro devido a um trombo ou êmbolo, causando isquemia e morte neuronal.",
    "signsSymptoms": [
      "Hemiparesia",
      "Afasia",
      "Desvio de rima labial",
      "Cefaleia súbita"
    ],
    "nanda": [
      "Perfusão tissular cerebral ineficaz relacionada a interrupção do fluxo sanguíneo evidenciada por alterações motoras, sensitivas e de fala.",
      "Mobilidade física prejudicada relacionada a prejuízo neuromuscular (hemiparesia/hemiplegia) evidenciada por incapacidade de mover-se intencionalmente no leito."
    ],
    "nic": [
      "Monitorização neurológica: Monitorar sinais neurológicos (Escala de Glasgow, pupilas, força motora) a cada 1-2 horas na fase aguda.",
      "Prevenção de quedas: Manter grades do leito elevadas, campainha ao alcance do membro não afetado e auxiliar em todas as transferências.",
      "Terapia de exercícios: mobilidade articular: Realizar exercícios passivos de amplitude de movimento (ADM) nos membros afetados 3x ao dia para prevenir contraturas."
    ],
    "noc": [
      "Estado neurológico",
      "Nível de mobilidade"
    ],
    "pharmacology": "Trombolíticos (rTPA) se em janela, Antiagregantes plaquetários (AAS), Estatinas."
  },
  {
    "id": "7",
    "name": "Doença de Alzheimer",
    "category": "Neurológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Doença neurodegenerativa progressiva caracterizada por placas de beta-amiloide e emaranhados neurofibrilares, levando à atrofia cerebral.",
    "signsSymptoms": [
      "Perda de memória recente",
      "Desorientação",
      "Alterações de humor",
      "Dificuldade em tarefas complexas"
    ],
    "nanda": [
      "Confusão crônica relacionada a degeneração neurológica progressiva evidenciada por alteração de personalidade, memória prejudicada e desorientação.",
      "Memória prejudicada relacionada a alterações neurológicas progressivas evidenciada por incapacidade de recordar eventos recentes e desorientação."
    ],
    "nic": [
      "Estimulação cognitiva: Estimular a memória remota com fotos e músicas familiares, mantendo rotinas diárias consistentes.",
      "Apoio ao cuidador: Orientar familiares sobre a evolução da doença, estratégias de comunicação e importância de redes de apoio/descanso.",
      "Controle do ambiente: segurança: Remover tapetes soltos, melhorar a iluminação e instalar barras de apoio para prevenir quedas."
    ],
    "noc": [
      "Capacidade de comunicação",
      "Estado cognitivo"
    ],
    "pharmacology": "Inibidores da colinesterase (Donepezila), Antagonistas do NMDA (Memantina)."
  },
  {
    "id": "8",
    "name": "Infarto Agudo do Miocárdio (IAM)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Necrose do músculo cardíaco resultante de isquemia prolongada devido à oclusão de uma artéria coronária.",
    "signsSymptoms": [
      "Dor precordial opressiva",
      "Sudorese fria",
      "Náuseas",
      "Irradiação para braço esquerdo/mandíbula"
    ],
    "nanda": [
      "Dor aguda relacionada a isquemia do músculo cardíaco evidenciada por relato de dor precordial opressiva, sudorese e agitação.",
      "Débito cardíaco diminuído relacionado a alteração na contratilidade miocárdica (necrose) evidenciado por hipotensão, taquicardia e dispneia."
    ],
    "nic": [
      "Controle da dor: Administrar analgésicos (ex: Morfina) e nitratos conforme prescrição, avaliando a eficácia e monitorando a PA.",
      "Cuidados cardíacos: fase aguda: Realizar ECG de 12 derivações em até 10 minutos, monitorar ritmo cardíaco continuamente e administrar oxigênio se SatO2 < 90%."
    ],
    "noc": [
      "Nível de dor",
      "Eficácia da bomba cardíaca"
    ],
    "pharmacology": "Morfina, Oxigênio, Nitratos, AAS, Clopidogrel, Trombolíticos ou Angioplastia."
  },
  {
    "id": "9",
    "name": "Doença Renal Crônica (DRC)",
    "category": "Nefrológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Perda progressiva e irreversível da função renal, resultando em acúmulo de escórias nitrogenadas e desequilíbrio hidroeletrolítico.",
    "signsSymptoms": [
      "Uremia",
      "Anemia",
      "Hipertensão",
      "Edema generalizado"
    ],
    "nanda": [
      "Volume de líquidos excessivo relacionado a mecanismos reguladores renais comprometidos evidenciado por edema generalizado, oligúria e ganho de peso.",
      "Risco de eletrólitos desequilibrados relacionado a disfunção renal (incapacidade de excretar potássio e fósforo)."
    ],
    "nic": [
      "Monitorização hídrica: Realizar balanço hídrico rigoroso, pesar o paciente diariamente e restringir ingestão de líquidos conforme prescrição.",
      "Controle da hemodiálise: Preparar o paciente para a terapia renal substitutiva, monitorar sinais vitais durante o procedimento e avaliar o acesso vascular (fístula ou cateter)."
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Função renal"
    ],
    "pharmacology": "Quelantes de fósforo, Eritropoetina, Diuréticos, Anti-hipertensivos."
  },
  {
    "id": "10",
    "name": "Sepse",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Disfunção orgânica potencialmente fatal causada por uma resposta desregulada do hospedeiro à infecção.",
    "signsSymptoms": [
      "Hipotensão",
      "Taquicardia",
      "Febre ou hipotermia",
      "Alteração do nível de consciência"
    ],
    "nanda": [
      "Risco de choque relacionado a infecção sistêmica e resposta inflamatória desregulada (vasodilatação e aumento da permeabilidade capilar).",
      "Troca de gases prejudicada relacionada a desequilíbrio na ventilação-perfusão (SDRA secundária) evidenciada por hipoxemia e taquipneia."
    ],
    "nic": [
      "Controle de infecção: Coletar culturas (sangue, urina, secreções) antes do início da antibioticoterapia e administrar antibióticos de amplo espectro na primeira hora.",
      "Ressuscitação hídrica: Administrar cristaloides (ex: Ringer Lactato) em bolus conforme protocolo (ex: 30mL/kg) e monitorar resposta hemodinâmica (PAM, lactato)."
    ],
    "noc": [
      "Estado infeccioso",
      "Perfusão tissular: celular"
    ],
    "pharmacology": "Antibioticoterapia de amplo espectro precoce, Vasopressores (Noradrenalina), Cristaloides."
  },
  {
    "id": "11",
    "name": "Cirrose Hepática",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Substituição do tecido hepático normal por fibrose e nódulos de regeneração, levando à hipertensão portal e insuficiência hepática.",
    "signsSymptoms": [
      "Ascite",
      "Icterícia",
      "Encefalopatia",
      "Circulação colateral"
    ],
    "nanda": [
      "Volume de líquidos excessivo relacionado a hipertensão portal e hipoalbuminemia evidenciado por ascite, edema periférico e ganho de peso.",
      "Risco de função hepática prejudicada relacionado a fibrose e nódulos de regeneração (risco de encefalopatia e sangramento de varizes)."
    ],
    "nic": [
      "Controle de eletrólitos e líquidos: Administrar diuréticos (ex: Espironolactona), monitorar potássio sérico e medir a circunferência abdominal diariamente.",
      "Monitorização neurológica: Avaliar nível de consciência e presença de flapping (asterixe) para detecção precoce de encefalopatia hepática."
    ],
    "noc": [
      "Função hepática",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Lactulona (para encefalopatia), Espironolactona (para ascite), Propranolol (prevenção de varizes)."
  },
  {
    "id": "12",
    "name": "Dengue",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença febril aguda causada por um arbovírus, transmitida pelo mosquito Aedes aegypti, causando aumento da permeabilidade vascular.",
    "signsSymptoms": [
      "Febre alta",
      "Dor retro-orbital",
      "Mialgia intensa",
      "Exantema"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente relacionado a aumento da permeabilidade capilar (extravasamento de plasma) e febre.",
      "Dor aguda relacionada a processo infeccioso viral evidenciada por mialgia intensa, dor retro-orbital e cefaleia."
    ],
    "nic": [
      "Hidratação vigorosa: Incentivar ingestão hídrica oral abundante ou administrar hidratação venosa conforme estadiamento clínico, monitorando diurese.",
      "Monitorização de sinais de alarme: Avaliar dor abdominal intensa, vômitos persistentes, sangramento de mucosas e letargia, indicativos de gravidade."
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Nível de dor"
    ],
    "pharmacology": "Paracetamol ou Dipirona (evitar AAS e AINEs pelo risco hemorrágico)."
  },
  {
    "id": "13",
    "name": "Esclerose Múltipla",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune desmielinizante do sistema nervoso central, onde o sistema imune ataca a bainha de mielina dos neurônios.",
    "signsSymptoms": [
      "Fadiga extrema",
      "Neurite óptica",
      "Fraqueza muscular",
      "Ataxia"
    ],
    "nanda": [
      "Mobilidade física prejudicada relacionada a prejuízo neuromuscular (desmielinização) evidenciada por fraqueza muscular, espasticidade e ataxia.",
      "Fadiga relacionada a estado de doença crônica e processo autoimune evidenciada por relato de exaustão desproporcional à atividade."
    ],
    "nic": [
      "Promoção do exercício: Encorajar exercícios de alongamento e fortalecimento toleráveis, intercalados com períodos de descanso frequentes.",
      "Ensino: processo da doença: Orientar sobre a importância de evitar o calor excessivo (que pode exacerbar os sintomas) e adesão à terapia imunomoduladora."
    ],
    "noc": [
      "Nível de fadiga",
      "Equilíbrio"
    ],
    "pharmacology": "Corticoides (pulsoterapia), Interferon beta, Natalizumabe."
  },
  {
    "id": "14",
    "name": "Pancreatite Aguda",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Processo inflamatório agudo do pâncreas devido à ativação prematura de enzimas pancreáticas, causando autodigestão do órgão.",
    "signsSymptoms": [
      "Dor abdominal em barra",
      "Náuseas e vômitos",
      "Distensão abdominal",
      "Sinal de Cullen/Grey Turner (casos graves)"
    ],
    "nanda": [
      "Dor aguda relacionada a processo inflamatório pancreático (autodigestão) evidenciada por dor abdominal intensa em barra, náuseas e agitação.",
      "Risco de volume de líquidos deficiente relacionado a vômitos, jejum prolongado e sequestro de líquidos no terceiro espaço."
    ],
    "nic": [
      "Controle da dor: Administrar analgésicos opioides conforme prescrição, avaliar a eficácia e manter o paciente em posição de conforto (ex: posição fetal).",
      "Monitorização nutricional e hídrica: Manter jejum inicial (NPO), instalar acesso venoso calibroso para hidratação agressiva e monitorar balanço hídrico."
    ],
    "noc": [
      "Nível de dor",
      "Estado nutricional"
    ],
    "pharmacology": "Analgésicos potentes, Hidratação venosa agressiva, Inibidores da bomba de prótons."
  },
  {
    "id": "15",
    "name": "Tromboembolismo Pulmonar (TEP)",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Obstrução de uma ou mais artérias pulmonares por um coágulo (geralmente vindo de uma TVP em membros inferiores).",
    "signsSymptoms": [
      "Dispneia súbita",
      "Dor torácica pleurítica",
      "Hemoptise",
      "Taquipneia"
    ],
    "nanda": [
      "Troca de gases prejudicada relacionada a desequilíbrio na ventilação-perfusão (obstrução vascular pulmonar) evidenciada por hipoxemia, taquipneia e dispneia súbita.",
      "Padrão respiratório ineficaz relacionado a dor pleurítica e ansiedade evidenciado por respiração rápida e superficial."
    ],
    "nic": [
      "Monitorização respiratória: Avaliar oximetria de pulso, administrar oxigênio suplementar para manter SatO2 > 90% e manter o paciente em repouso no leito.",
      "Terapia de anticoagulação: Administrar heparina conforme protocolo, monitorar sinais de sangramento (gengival, hematúria) e avaliar exames de coagulação (TTPa)."
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Perfusão tissular: pulmonar"
    ],
    "pharmacology": "Heparina (HNF ou HBPM), Varfarina, Novos Anticoagulantes Orais (NOACs)."
  },
  {
    "id": "16",
    "name": "Hipertensão Arterial Sistêmica (HAS)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Elevação persistente da pressão arterial, resultando em lesões em órgãos-alvo como coração, cérebro e rins.",
    "signsSymptoms": [
      "Cefaleia",
      "Tontura",
      "Visão turva",
      "Muitas vezes assintomática"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Risco de perfusão tissular cardíaca ineficaz"
    ],
    "nic": [
      "Monitorização de sinais vitais",
      "Ensino: dieta prescrita"
    ],
    "noc": [
      "Controle do risco: hipertensão",
      "Conhecimento: controle da hipertensão"
    ],
    "pharmacology": "Diuréticos, Inibidores da ECA, Bloqueadores dos Canais de Cálcio, Betabloqueadores."
  },
  {
    "id": "17",
    "name": "Hipotireoidismo",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Deficiência na produção de hormônios tireoidianos (T3 e T4), levando a uma lentificação generalizada do metabolismo.",
    "signsSymptoms": [
      "Fadiga",
      "Ganho de peso",
      "Intolerância ao frio",
      "Pele seca",
      "Bradicardia"
    ],
    "nanda": [
      "Fadiga",
      "Constipação"
    ],
    "nic": [
      "Controle da energia",
      "Monitorização nutricional"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional"
    ],
    "pharmacology": "Levotiroxina sódica."
  },
  {
    "id": "18",
    "name": "Hipertireoidismo",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Excesso de produção de hormônios tireoidianos, resultando em um estado hipermetabólico.",
    "signsSymptoms": [
      "Taquicardia",
      "Perda de peso",
      "Exoftalmia",
      "Tremores",
      "Intolerância ao calor"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Ansiedade"
    ],
    "nic": [
      "Cuidados cardíacos",
      "Redução da ansiedade"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Nível de ansiedade"
    ],
    "pharmacology": "Metimazol, Propiltiouracil, Betabloqueadores (para sintomas)."
  },
  {
    "id": "19",
    "name": "Doença Pulmonar Obstrutiva Crônica (DPOC)",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Obstrução crônica e irreversível do fluxo de ar, geralmente causada pelo tabagismo, englobando bronquite crônica e enfisema.",
    "signsSymptoms": [
      "Tosse crônica",
      "Expectoração",
      "Dispneia aos esforços",
      "Tórax em tonel"
    ],
    "nanda": [
      "Troca de gases prejudicada relacionada a alterações na membrana alvéolo-capilar evidenciada por hipoxemia, confusão mental e cianose.",
      "Desobstrução ineficaz de vias aéreas relacionada a secreções retidas e dor torácica evidenciada por tosse ineficaz e estertores crepitantes."
    ],
    "nic": [
      "Oxigenoterapia: Administrar O2 suplementar para manter SatO2 > 92% (ou conforme prescrição) e umidificar o oxigênio se fluxo > 4L/min.",
      "Monitorização respiratória: Avaliar padrão respiratório, ausculta pulmonar (presença de estertores/roncos) e características do escarro.",
      "Promoção da tosse: Ensinar tosse assistida/higiene brônquica e encorajar hidratação adequada (se não contraindicado) para fluidificar secreções."
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Estado respiratório: ventilação"
    ],
    "pharmacology": "Broncodilatadores de longa ação (LAMA/LABA), Corticoides inalatórios."
  },
  {
    "id": "20",
    "name": "Artrite Reumatoide",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença inflamatória crônica autoimune que afeta principalmente as articulações sinoviais, causando destruição óssea e deformidades.",
    "signsSymptoms": [
      "Rigidez matinal",
      "Dor articular simétrica",
      "Deformidades em mãos",
      "Nódulos reumatoides"
    ],
    "nanda": [
      "Dor crônica",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Terapia com exercícios: mobilidade articular"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "Metotrexato, Leflunomida, Agentes biológicos (Anti-TNF)."
  },
  {
    "id": "21",
    "name": "Lúpus Eritematoso Sistêmico (LES)",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune multissistêmica caracterizada pela produção de autoanticorpos contra componentes do núcleo celular.",
    "signsSymptoms": [
      "Eritema em asa de borboleta",
      "Fotossensibilidade",
      "Artrite",
      "Nefrite"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle da energia"
    ],
    "noc": [
      "Integridade tissular: pele e mucosas",
      "Nível de fadiga"
    ],
    "pharmacology": "Hidroxicloroquina, Corticoides, Imunossupressores (Azatioprina)."
  },
  {
    "id": "22",
    "name": "Gota",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Deposição de cristais de urato monossódico nas articulações devido à hiperuricemia crônica.",
    "signsSymptoms": [
      "Dor articular súbita e intensa (podagra)",
      "Edema e calor local",
      "Tofos gotosos"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: dieta prescrita (baixa purina)"
    ],
    "noc": [
      "Nível de dor",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Colchicina, AINEs, Alopurinol (manutenção)."
  },
  {
    "id": "23",
    "name": "Osteoporose",
    "category": "Reumatológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Diminuição da densidade mineral óssea e deterioração da microarquitetura do tecido ósseo, aumentando a fragilidade e o risco de fraturas.",
    "signsSymptoms": [
      "Fraturas por fragilidade",
      "Perda de altura",
      "Cifose dorsal"
    ],
    "nanda": [
      "Risco de quedas",
      "Risco de lesão"
    ],
    "nic": [
      "Prevenção de quedas",
      "Promoção do exercício"
    ],
    "noc": [
      "Comportamento de prevenção de quedas",
      "Conhecimento: prevenção de quedas"
    ],
    "pharmacology": "Bisfosfonatos (Alendronato), Cálcio, Vitamina D."
  },
  {
    "id": "24",
    "name": "Doença de Parkinson",
    "category": "Neurológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Degeneração de neurônios dopaminérgicos na substância negra, levando a uma deficiência de dopamina no corpo estriado.",
    "signsSymptoms": [
      "Tremor de repouso",
      "Bradicinesia",
      "Rigidez muscular",
      "Instabilidade postural"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Risco de quedas"
    ],
    "nic": [
      "Terapia com exercícios",
      "Prevenção de quedas"
    ],
    "noc": [
      "Mobilidade",
      "Equilíbrio"
    ],
    "pharmacology": "Levodopa/Carbidopa, Pramipexol, Selegilina."
  },
  {
    "id": "25",
    "name": "Epilepsia",
    "category": "Neurológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Distúrbio cerebral caracterizado por uma predisposição duradoura a gerar crises epilépticas devido a descargas elétricas anormais.",
    "signsSymptoms": [
      "Convulsões tônico-clônicas",
      "Crises de ausência",
      "Auras",
      "Automatismos"
    ],
    "nanda": [
      "Risco de lesão",
      "Risco de aspiração"
    ],
    "nic": [
      "Controle de convulsões",
      "Precauções contra convulsões"
    ],
    "noc": [
      "Conhecimento: controle de convulsões",
      "Controle de riscos"
    ],
    "pharmacology": "Fenitoína, Carbamazepina, Valproato de Sódio, Levetiracetam."
  },
  {
    "id": "26",
    "name": "Esclerose Lateral Amiotrófica (ELA)",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença neurodegenerativa progressiva que afeta os neurônios motores superiores e inferiores, causando paralisia muscular.",
    "signsSymptoms": [
      "Fraqueza muscular progressiva",
      "Fasciculações",
      "Disfagia",
      "Insuficiência respiratória"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Deglutição prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Assistência na ventilação",
      "Terapia de deglutição"
    ],
    "noc": [
      "Estado respiratório",
      "Estado de deglutição"
    ],
    "pharmacology": "Riluzol, Edaravona."
  },
  {
    "id": "27",
    "name": "Meningite Bacteriana",
    "category": "Neurológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação das meninges causada por infecção bacteriana, levando a edema cerebral e aumento da pressão intracraniana.",
    "signsSymptoms": [
      "Rigidez de nuca",
      "Febre alta",
      "Cefaleia intensa",
      "Vômitos em jato"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Hipertermia"
    ],
    "nic": [
      "Monitorização neurológica",
      "Controle da febre"
    ],
    "noc": [
      "Estado neurológico",
      "Termorregulação"
    ],
    "pharmacology": "Antibióticos (Ceftriaxona, Vancomicina), Corticoides (Dexametasona)."
  },
  {
    "id": "28",
    "name": "HIV/AIDS",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção pelo vírus da imunodeficiência humana que destrói os linfócitos T CD4+, levando à imunossupressão grave e infecções oportunistas.",
    "signsSymptoms": [
      "Linfadenopatia",
      "Perda de peso",
      "Infecções oportunistas",
      "Sarcoma de Kaposi"
    ],
    "nanda": [
      "Risco de infecção",
      "Nutrição desequilibrada: menor do que as necessidades corporais"
    ],
    "nic": [
      "Controle de infecção",
      "Monitorização nutricional"
    ],
    "noc": [
      "Estado imunológico",
      "Estado nutricional"
    ],
    "pharmacology": "Terapia Antirretroviral (TARV) - Tenofovir, Lamivudina, Dolutegravir."
  },
  {
    "id": "29",
    "name": "Tuberculose Pulmonar",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção causada pelo Mycobacterium tuberculosis, resultando em inflamação granulomatosa nos pulmões.",
    "signsSymptoms": [
      "Tosse por mais de 3 semanas",
      "Sudorese noturna",
      "Emagrecimento",
      "Hemoptise"
    ],
    "nanda": [
      "Risco de infecção (transmissão)",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Controle de infecção",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Conhecimento: controle da infecção",
      "Estado nutricional"
    ],
    "pharmacology": "Esquema RIPE (Rifampicina, Isoniazida, Pirazinamida, Etambutol)."
  },
  {
    "id": "30",
    "name": "Hepatite B",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Inflamação do fígado causada pelo vírus HBV, podendo evoluir para cronicidade, cirrose e carcinoma hepatocelular.",
    "signsSymptoms": [
      "Icterícia",
      "Colúria",
      "Acolia fecal",
      "Fadiga"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Monitorização de sinais vitais",
      "Controle da energia"
    ],
    "noc": [
      "Função hepática",
      "Nível de fadiga"
    ],
    "pharmacology": "Tenofovir, Entecavir (em casos crônicos selecionados)."
  },
  {
    "id": "31",
    "name": "Hepatite C",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção viral pelo HCV que causa inflamação hepática, com alta taxa de cronificação e risco de cirrose.",
    "signsSymptoms": [
      "Muitas vezes assintomática até fases avançadas",
      "Fadiga",
      "Icterícia (raro na fase aguda)"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Ensino: processo da doença",
      "Monitorização laboratorial"
    ],
    "noc": [
      "Função hepática",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Antivirais de ação direta (Sofosbuvir, Daclatasvir)."
  },
  {
    "id": "32",
    "name": "Malária",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção causada por protozoários do gênero Plasmodium, transmitida pela picada do mosquito Anopheles, afetando os eritrócitos.",
    "signsSymptoms": [
      "Paroxismos febris (calafrios, febre, sudorese)",
      "Anemia",
      "Esplenomegalia"
    ],
    "nanda": [
      "Hipertermia",
      "Fadiga"
    ],
    "nic": [
      "Controle da febre",
      "Monitorização hídrica"
    ],
    "noc": [
      "Termorregulação",
      "Estado infeccioso"
    ],
    "pharmacology": "Artemeter/Lumefantrina, Primaquina, Cloroquina."
  },
  {
    "id": "33",
    "name": "Leishmaniose Visceral",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença sistêmica causada por protozoários do gênero Leishmania, afetando órgãos do sistema reticuloendotelial (fígado, baço, medula óssea).",
    "signsSymptoms": [
      "Febre prolongada",
      "Hepatomegalia",
      "Esplenomegalia acentuada",
      "Pancitopenia"
    ],
    "nanda": [
      "Risco de infecção",
      "Risco de sangramento"
    ],
    "nic": [
      "Controle de infecção",
      "Vigilância"
    ],
    "noc": [
      "Estado imunológico",
      "Coagulação sanguínea"
    ],
    "pharmacology": "Antimonial pentavalente (Glucantime), Anfotericina B lipossomal."
  },
  {
    "id": "34",
    "name": "Hanseníase",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença granulomatosa crônica causada pelo Mycobacterium leprae, afetando principalmente a pele e os nervos periféricos.",
    "signsSymptoms": [
      "Manchas hipocrômicas com perda de sensibilidade",
      "Espessamento de nervos",
      "Fraqueza muscular"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Percepção sensorial prejudicada"
    ],
    "nic": [
      "Vigilância da pele",
      "Prevenção de automutilação"
    ],
    "noc": [
      "Integridade tissular",
      "Função sensorial: tátil"
    ],
    "pharmacology": "Poliquimioterapia (Rifampicina, Dapsona, Clofazimina)."
  },
  {
    "id": "35",
    "name": "Sífilis",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção sexualmente transmissível causada pela bactéria Treponema pallidum, com fases primária, secundária, latente e terciária.",
    "signsSymptoms": [
      "Cancro duro (primária)",
      "Roséolas e pápulas em palmas/plantas (secundária)",
      "Gomas sifilíticas (terciária)"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Ensino: sexo seguro",
      "Administração de medicamentos"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: comportamento sexual"
    ],
    "pharmacology": "Penicilina G Benzatina."
  },
  {
    "id": "36",
    "name": "Câncer de Mama",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Proliferação descontrolada de células anormais no tecido mamário, podendo invadir tecidos adjacentes e causar metástases.",
    "signsSymptoms": [
      "Nódulo palpável e endurecido",
      "Retração do mamilo",
      "Pele em casca de laranja",
      "Secreção papilar"
    ],
    "nanda": [
      "Medo",
      "Distúrbio na imagem corporal"
    ],
    "nic": [
      "Apoio emocional",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Nível de medo",
      "Imagem corporal"
    ],
    "pharmacology": "Quimioterapia, Hormonioterapia (Tamoxifeno), Terapia alvo."
  },
  {
    "id": "37",
    "name": "Câncer de Próstata",
    "category": "Oncologia",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Desenvolvimento de células malignas na glândula prostática, frequentemente dependente de andrógenos.",
    "signsSymptoms": [
      "Disúria",
      "Nictúria",
      "Diminuição do jato urinário",
      "Dor óssea (em metástases)"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Retenção urinária"
    ],
    "nic": [
      "Cuidados na retenção urinária",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Eliminação urinária",
      "Conhecimento: controle do câncer"
    ],
    "pharmacology": "Bloqueio hormonal, Quimioterapia."
  },
  {
    "id": "38",
    "name": "Câncer de Cólon e Reto",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Tumores malignos que se originam na mucosa do intestino grosso ou reto, muitas vezes a partir de pólipos preexistentes.",
    "signsSymptoms": [
      "Alteração do hábito intestinal",
      "Sangue nas fezes",
      "Dor abdominal",
      "Anemia"
    ],
    "nanda": [
      "Diarreia",
      "Constipação"
    ],
    "nic": [
      "Controle da diarreia",
      "Controle da constipação"
    ],
    "noc": [
      "Eliminação intestinal",
      "Nível de dor"
    ],
    "pharmacology": "Quimioterapia (5-Fluorouracil), Terapia alvo."
  },
  {
    "id": "39",
    "name": "Leucemia Mieloide Aguda (LMA)",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Câncer das células precursoras da linhagem mieloide na medula óssea, levando à produção de blastos anormais e falência medular.",
    "signsSymptoms": [
      "Anemia",
      "Hemorragias (petéquias, gengivorragia)",
      "Infecções recorrentes",
      "Fadiga"
    ],
    "nanda": [
      "Risco de infecção",
      "Risco de sangramento"
    ],
    "nic": [
      "Controle de infecção",
      "Prevenção de hemorragias"
    ],
    "noc": [
      "Estado imunológico",
      "Coagulação sanguínea"
    ],
    "pharmacology": "Quimioterapia intensiva, Transplante de medula óssea."
  },
  {
    "id": "40",
    "name": "Linfoma de Hodgkin",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Neoplasia do sistema linfático caracterizada pela presença de células de Reed-Sternberg.",
    "signsSymptoms": [
      "Linfadenopatia indolor (geralmente cervical)",
      "Febre",
      "Sudorese noturna",
      "Perda de peso"
    ],
    "nanda": [
      "Risco de infecção",
      "Fadiga"
    ],
    "nic": [
      "Controle de infecção",
      "Controle da energia"
    ],
    "noc": [
      "Estado imunológico",
      "Nível de fadiga"
    ],
    "pharmacology": "Poliquimioterapia (Esquema ABVD)."
  },
  {
    "id": "41",
    "name": "Anemia Ferropriva",
    "category": "Hematológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Redução dos níveis de hemoglobina devido à deficiência de ferro, essencial para a síntese do heme.",
    "signsSymptoms": [
      "Palidez cutânea",
      "Fadiga",
      "Pica (desejo por substâncias não alimentares)",
      "Glossite"
    ],
    "nanda": [
      "Fadiga",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Controle da energia",
      "Ensino: dieta prescrita"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional"
    ],
    "pharmacology": "Sulfato Ferroso."
  },
  {
    "id": "42",
    "name": "Anemia Falciforme",
    "category": "Hematológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença genética caracterizada pela presença de hemoglobina S, que causa a deformação das hemácias em foice em condições de baixa oxigenação.",
    "signsSymptoms": [
      "Crises álgicas",
      "Icterícia",
      "Síndrome torácica aguda",
      "Dactilite"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de perfusão tissular periférica ineficaz"
    ],
    "nic": [
      "Controle da dor",
      "Hidratação"
    ],
    "noc": [
      "Nível de dor",
      "Perfusão tissular: órgãos periféricos"
    ],
    "pharmacology": "Hidroxicarbamida, Analgésicos, Ácido Fólico."
  },
  {
    "id": "43",
    "name": "Hemofilia A",
    "category": "Hematológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Distúrbio hereditário da coagulação causado pela deficiência do Fator VIII.",
    "signsSymptoms": [
      "Hemartroses",
      "Hematomas musculares",
      "Sangramentos prolongados após traumas"
    ],
    "nanda": [
      "Risco de sangramento",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Prevenção de hemorragias",
      "Cuidados na hemartrose"
    ],
    "noc": [
      "Coagulação sanguínea",
      "Nível de mobilidade"
    ],
    "pharmacology": "Reposição de Fator VIII, Desmopressina (DDAVP)."
  },
  {
    "id": "44",
    "name": "Púrpura Trombocitopênica Imune (PTI)",
    "category": "Hematológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Destruição imunomediada de plaquetas, levando a contagens plaquetárias baixas e risco de sangramento.",
    "signsSymptoms": [
      "Petéquias",
      "Equimoses",
      "Epistaxe",
      "Gengivorragia"
    ],
    "nanda": [
      "Risco de sangramento",
      "Risco de lesão"
    ],
    "nic": [
      "Prevenção de hemorragias",
      "Vigilância"
    ],
    "noc": [
      "Coagulação sanguínea",
      "Controle de riscos"
    ],
    "pharmacology": "Corticoides, Imunoglobulina IV, Esplenectomia (casos refratários)."
  },
  {
    "id": "45",
    "name": "Depressão Maior",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Transtorno do humor caracterizado por desequilíbrio de neurotransmissores (serotonina, noradrenalina, dopamina) no sistema nervoso central.",
    "signsSymptoms": [
      "Anedonia",
      "Tristeza profunda",
      "Alterações no sono/apetite",
      "Ideação suicida"
    ],
    "nanda": [
      "Risco de suicídio",
      "Baixa autoestima situacional"
    ],
    "nic": [
      "Prevenção do suicídio",
      "Aumento da autoestima"
    ],
    "noc": [
      "Autocontrole da depressão",
      "Esperança"
    ],
    "pharmacology": "Inibidores Seletivos da Recaptação de Serotonina (Fluoxetina, Sertralina)."
  },
  {
    "id": "46",
    "name": "Transtorno de Ansiedade Generalizada (TAG)",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Ansiedade e preocupação excessivas e persistentes sobre diversos eventos ou atividades, associadas a sintomas físicos.",
    "signsSymptoms": [
      "Inquietude",
      "Irritabilidade",
      "Tensão muscular",
      "Dificuldade de concentração"
    ],
    "nanda": [
      "Ansiedade",
      "Medo"
    ],
    "nic": [
      "Redução da ansiedade",
      "Técnicas de relaxamento"
    ],
    "noc": [
      "Nível de ansiedade",
      "Autocontrole da ansiedade"
    ],
    "pharmacology": "Benzodiazepínicos (curto prazo), Antidepressivos (longo prazo)."
  },
  {
    "id": "47",
    "name": "Esquizofrenia",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Transtorno mental grave caracterizado por distorções no pensamento, percepção, emoções e comportamento.",
    "signsSymptoms": [
      "Alucinações",
      "Delírios",
      "Discurso desorganizado",
      "Afeto embotado"
    ],
    "nanda": [
      "Processos do pensamento perturbados",
      "Sensopercepção perturbada"
    ],
    "nic": [
      "Controle de alucinações",
      "Controle de delírios"
    ],
    "noc": [
      "Autocontrole do pensamento distorcido",
      "Nível de psicose"
    ],
    "pharmacology": "Antipsicóticos (Haloperidol, Risperidona, Olanzapina)."
  },
  {
    "id": "48",
    "name": "Transtorno Bipolar",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Transtorno do humor caracterizado por alternância entre episódios de mania (ou hipomania) e depressão.",
    "signsSymptoms": [
      "Logorreia e grandiosidade (mania)",
      "Tristeza e lentificação (depressão)"
    ],
    "nanda": [
      "Risco de violência direcionada a si mesmo ou a outros",
      "Interação social prejudicada"
    ],
    "nic": [
      "Controle da mania",
      "Prevenção do suicídio"
    ],
    "noc": [
      "Autocontrole do humor",
      "Equilíbrio emocional"
    ],
    "pharmacology": "Estabilizadores de humor (Lítio, Valproato), Antipsicóticos."
  },
  {
    "id": "49",
    "name": "Doença Celíaca",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune desencadeada pela ingestão de glúten em indivíduos geneticamente predispostos, causando inflamação da mucosa do intestino delgado.",
    "signsSymptoms": [
      "Diarreia crônica",
      "Distensão abdominal",
      "Desnutrição",
      "Anemia"
    ],
    "nanda": [
      "Diarreia",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Controle da diarreia",
      "Ensino: dieta prescrita (isenta de glúten)"
    ],
    "noc": [
      "Eliminação intestinal",
      "Estado nutricional"
    ],
    "pharmacology": "Suplementação de vitaminas e minerais se necessário."
  },
  {
    "id": "50",
    "name": "Doença de Crohn",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença inflamatória intestinal crônica que pode afetar qualquer parte do trato gastrointestinal, com inflamação transmural e descontínua.",
    "signsSymptoms": [
      "Dor abdominal",
      "Diarreia",
      "Perda de peso",
      "Fístulas e abscessos"
    ],
    "nanda": [
      "Dor aguda",
      "Diarreia"
    ],
    "nic": [
      "Controle da dor",
      "Controle da diarreia"
    ],
    "noc": [
      "Nível de dor",
      "Eliminação intestinal"
    ],
    "pharmacology": "Corticoides, Imunossupressores (Azatioprina), Biológicos (Infliximabe)."
  },
  {
    "id": "51",
    "name": "Retocolite Ulcerativa",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença inflamatória intestinal que afeta apenas o cólon e o reto, com inflamação restrita à mucosa e contínua.",
    "signsSymptoms": [
      "Diarreia sanguinolenta",
      "Tenésmo",
      "Dor abdominal",
      "Urgência fecal"
    ],
    "nanda": [
      "Diarreia",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Controle da diarreia",
      "Monitorização hídrica"
    ],
    "noc": [
      "Eliminação intestinal",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Aminossalicilatos (Mesalazina), Corticoides."
  },
  {
    "id": "52",
    "name": "Refluxo Gastroesofágico (DRGE)",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Retorno do conteúdo gástrico para o esôfago devido à incompetência do esfíncter esofágico inferior, causando lesão na mucosa.",
    "signsSymptoms": [
      "Pirose (azia)",
      "Regurgitação ácida",
      "Dor retroesternal",
      "Tosse seca"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de aspiração"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: dieta prescrita"
    ],
    "noc": [
      "Nível de dor",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Inibidores da Bomba de Prótons (Omeprazol), Antiacidos."
  },
  {
    "id": "53",
    "name": "Colelitíase",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Presença de cálculos na vesícula biliar devido ao desequilíbrio na composição da bile.",
    "signsSymptoms": [
      "Cólica biliar",
      "Náuseas e vômitos",
      "Dor no hipocôndrio direito"
    ],
    "nanda": [
      "Dor aguda",
      "Náusea"
    ],
    "nic": [
      "Controle da dor",
      "Controle de náuseas"
    ],
    "noc": [
      "Nível de dor",
      "Nível de náuseas e vômitos"
    ],
    "pharmacology": "Analgésicos, Antiespasmódicos."
  },
  {
    "id": "54",
    "name": "Apendicite Aguda",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação do apêndice cecal, geralmente devido à obstrução da sua luz por um fecalito.",
    "signsSymptoms": [
      "Dor na fossa ilíaca direita (Ponto de McBurney)",
      "Febre baixa",
      "Náuseas",
      "Sinal de Blumberg positivo"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de infecção"
    ],
    "nic": [
      "Controle da dor",
      "Preparação cirúrgica"
    ],
    "noc": [
      "Nível de dor",
      "Estado infeccioso"
    ],
    "pharmacology": "Antibióticos profiláticos, Analgésicos."
  },
  {
    "id": "55",
    "name": "Hérnia Inguinal",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Protrusão de conteúdo abdominal através de um ponto de fraqueza na parede do canal inguinal.",
    "signsSymptoms": [
      "Abaulamento na região inguinal",
      "Dor ao esforço físico",
      "Risco de encarceramento"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de perfusão gastrointestinal ineficaz"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Nível de dor",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Analgésicos se necessário."
  },
  {
    "id": "56",
    "name": "Infecção do Trato Urinário (ITU)",
    "category": "Nefrológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Colonização e multiplicação de microrganismos (geralmente bactérias) em qualquer parte do sistema urinário.",
    "signsSymptoms": [
      "Disúria",
      "Polaquiúria",
      "Urgência miccional",
      "Dor suprapúbica"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Controle da eliminação urinária",
      "Administração de medicamentos"
    ],
    "noc": [
      "Eliminação urinária",
      "Nível de dor"
    ],
    "pharmacology": "Antibióticos (Nitrofurantoína, Ciprofloxacino), Analgésicos urinários."
  },
  {
    "id": "57",
    "name": "Litíase Renal",
    "category": "Nefrológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Formação de cálculos no trato urinário devido à supersaturação da urina por sais.",
    "signsSymptoms": [
      "Cólica nefrética intensa",
      "Hematúria",
      "Náuseas e vômitos"
    ],
    "nanda": [
      "Dor aguda",
      "Eliminação urinária prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Monitorização hídrica"
    ],
    "noc": [
      "Nível de dor",
      "Eliminação urinária"
    ],
    "pharmacology": "Analgésicos potentes, Antiespasmódicos, Bloqueadores alfa (para expulsão)."
  },
  {
    "id": "58",
    "name": "Hiperplasia Prostática Benigna (HPB)",
    "category": "Nefrológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Aumento não maligno da próstata que comprime a uretra, dificultando o fluxo urinário.",
    "signsSymptoms": [
      "Hesitação urinária",
      "Jato fraco",
      "Nictúria",
      "Sensação de esvaziamento incompleto"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Retenção urinária"
    ],
    "nic": [
      "Cuidados na retenção urinária",
      "Monitorização da eliminação urinária"
    ],
    "noc": [
      "Eliminação urinária",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Bloqueadores alfa (Tansulosina), Inibidores da 5-alfa-redutase (Finasterida)."
  },
  {
    "id": "59",
    "name": "Glomerulonefrite Aguda",
    "category": "Nefrológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação dos glomérulos renais, frequentemente após uma infecção estreptocócica, causando hematúria e proteinúria.",
    "signsSymptoms": [
      "Hematúria (urina cor de chá)",
      "Edema periorbital",
      "Hipertensão",
      "Oligúria"
    ],
    "nanda": [
      "Volume de líquidos excessivo",
      "Risco de perfusão renal ineficaz"
    ],
    "nic": [
      "Monitorização hídrica",
      "Controle da pressão arterial"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Função renal"
    ],
    "pharmacology": "Diuréticos, Anti-hipertensivos, Antibióticos (se infecção ativa)."
  },
  {
    "id": "60",
    "name": "Síndrome Nefrótica",
    "category": "Nefrológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Distúrbio renal caracterizado por proteinúria maciça, hipoalbuminemia e edema grave devido ao aumento da permeabilidade glomerular.",
    "signsSymptoms": [
      "Edema generalizado (anasarca)",
      "Urina espumosa",
      "Hiperlipidemia"
    ],
    "nanda": [
      "Volume de líquidos excessivo",
      "Risco de infecção"
    ],
    "nic": [
      "Monitorização hídrica",
      "Vigilância da pele"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Integridade tissular"
    ],
    "pharmacology": "Corticoides, Diuréticos, Estatinas."
  },
  {
    "id": "61",
    "name": "Psoríase",
    "category": "Dermatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença inflamatória crônica da pele, de base imunológica, caracterizada por hiperproliferação de queratinócitos.",
    "signsSymptoms": [
      "Placas eritemato-escamosas",
      "Prurido",
      "Lesões em cotovelos e joelhos",
      "Alterações ungueais"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Distúrbio na imagem corporal"
    ],
    "nic": [
      "Vigilância da pele",
      "Apoio emocional"
    ],
    "noc": [
      "Integridade tissular",
      "Imagem corporal"
    ],
    "pharmacology": "Corticoides tópicos, Calcipotriol, Metotrexato, Biológicos."
  },
  {
    "id": "62",
    "name": "Dermatite Atópica",
    "category": "Dermatológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença inflamatória crônica e pruriginosa da pele, associada a uma barreira cutânea defeituosa e resposta imune alterada.",
    "signsSymptoms": [
      "Prurido intenso",
      "Eczema",
      "Pele muito seca (xerose)",
      "Liquenificação"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Ensino: cuidados com a pele"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Emolientes, Corticoides tópicos, Inibidores da calcineurina."
  },
  {
    "id": "63",
    "name": "Celulite Infecciosa",
    "category": "Dermatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção bacteriana aguda da derme profunda e tecidos subcutâneos, geralmente por Estreptococos ou Estafilococos.",
    "signsSymptoms": [
      "Eritema mal delimitado",
      "Calor e edema local",
      "Dor",
      "Febre"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Controle de infecção",
      "Cuidados com feridas"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Antibióticos sistêmicos (Cefalexina, Oxacilina)."
  },
  {
    "id": "64",
    "name": "Escabiose (Sarna)",
    "category": "Dermatológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infestação cutânea causada pelo ácaro Sarcoptes scabiei, que escava túneis na epiderme.",
    "signsSymptoms": [
      "Prurido intenso (piora à noite)",
      "Pápulas e túneis na pele",
      "Lesões em dobras e espaços interdigitais"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Permetrina 5%, Ivermectina oral."
  },
  {
    "id": "65",
    "name": "Queimadura de 2º Grau",
    "category": "Dermatológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Lesão térmica que atinge a epiderme e parte da derme, causando destruição tecidual e resposta inflamatória.",
    "signsSymptoms": [
      "Flictenas (bolhas)",
      "Dor intensa",
      "Base eritematosa e úmida"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Cuidados com queimaduras",
      "Controle da dor"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de dor"
    ],
    "pharmacology": "Sulfadiazina de Prata, Analgésicos."
  },
  {
    "id": "66",
    "name": "Escarlatina",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Doença exantemática causada pela toxina eritrogênica do Streptococcus pyogenes.",
    "signsSymptoms": [
      "Exantema micropapular (lixa)",
      "Língua em framboesa",
      "Sinal de Pastia",
      "Sinal de Filatov"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Hipertermia"
    ],
    "nic": [
      "Controle da febre",
      "Controle de infecção"
    ],
    "noc": [
      "Termorregulação",
      "Integridade tissular"
    ],
    "pharmacology": "Penicilina ou Amoxicilina."
  },
  {
    "id": "67",
    "name": "Varicela (Catapora)",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção primária pelo vírus Varicela-Zoster, altamente contagiosa.",
    "signsSymptoms": [
      "Polimorfismo regional (pápulas, vesículas, crostas)",
      "Prurido intenso",
      "Febre moderada"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Antitérmicos (evitar AAS), Anti-histamínicos, Aciclovir (em casos específicos)."
  },
  {
    "id": "68",
    "name": "Sarampo",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Doença viral aguda, altamente contagiosa, que causa imunossupressão transitória.",
    "signsSymptoms": [
      "Manchas de Koplik",
      "Exantema morbiliforme descendente",
      "Tosse, coriza e conjuntivite"
    ],
    "nanda": [
      "Risco de infecção",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Controle de infecção",
      "Monitorização respiratória"
    ],
    "noc": [
      "Estado imunológico",
      "Integridade tissular"
    ],
    "pharmacology": "Vitamina A (reduz complicações), Antitérmicos."
  },
  {
    "id": "69",
    "name": "Caxumba (Parotidite)",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Infecção viral sistêmica que afeta principalmente as glândulas salivares parótidas.",
    "signsSymptoms": [
      "Aumento das parótidas",
      "Febre",
      "Dor ao mastigar",
      "Risco de orquite/ooforite"
    ],
    "nanda": [
      "Dor aguda",
      "Hipertermia"
    ],
    "nic": [
      "Controle da dor",
      "Controle da febre"
    ],
    "noc": [
      "Nível de dor",
      "Termorregulação"
    ],
    "pharmacology": "Analgésicos, Antitérmicos."
  },
  {
    "id": "70",
    "name": "Rubéola",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença viral geralmente leve, mas grave se ocorrer durante a gestação (Rubéola Congênita).",
    "signsSymptoms": [
      "Exantema maculopapular rosado",
      "Linfadenopatia retroauricular e occipital",
      "Febre baixa"
    ],
    "nanda": [
      "Risco de infecção (transmissão vertical)",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Controle de infecção",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Estado imunológico",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Sintomáticos."
  },
  {
    "id": "71",
    "name": "Coqueluche",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção respiratória aguda causada pela Bordetella pertussis, caracterizada por paroxismos de tosse.",
    "signsSymptoms": [
      "Tosse em acessos (paroxística)",
      "Guincho inspiratório",
      "Vômitos pós-tosse"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Desobstrução ineficaz de vias aéreas"
    ],
    "nic": [
      "Monitorização respiratória",
      "Aspiração de vias aéreas"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Estado respiratório: patência das vias aéreas"
    ],
    "pharmacology": "Macrolídeos (Azitromicina, Claritromicina)."
  },
  {
    "id": "72",
    "name": "Tétano",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença causada pela toxina do Clostridium tetani, que bloqueia neurotransmissores inibitórios, causando espasmos musculares.",
    "signsSymptoms": [
      "Trismo (rigidez mandibular)",
      "Riso sardônico",
      "Opistótono",
      "Espasmos musculares dolorosos"
    ],
    "nanda": [
      "Risco de aspiração",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle de convulsões/espasmos",
      "Manutenção de vias aéreas"
    ],
    "noc": [
      "Estado neurológico",
      "Função muscular"
    ],
    "pharmacology": "Imunoglobulina antitetânica, Metronidazol, Diazepam."
  },
  {
    "id": "73",
    "name": "Botulismo",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Intoxicação grave causada pela toxina do Clostridium botulinum, que impede a liberação de acetilcolina na junção neuromuscular.",
    "signsSymptoms": [
      "Paralisia flácida descendente",
      "Diplopia",
      "Ptose palpebral",
      "Disfagia"
    ],
    "nanda": [
      "Risco de aspiração",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Assistência na ventilação",
      "Monitorização neurológica"
    ],
    "noc": [
      "Estado respiratório",
      "Estado neurológico"
    ],
    "pharmacology": "Soro antibotulínico."
  },
  {
    "id": "74",
    "name": "Raiva Humana",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Encefalite viral progressiva e quase invariavelmente fatal, transmitida pela saliva de animais infectados.",
    "signsSymptoms": [
      "Hidrofobia",
      "Aerofobia",
      "Agitação psicomotora",
      "Paralisia progressiva"
    ],
    "nanda": [
      "Confusão aguda",
      "Risco de violência"
    ],
    "nic": [
      "Monitorização neurológica",
      "Controle ambiental"
    ],
    "noc": [
      "Estado neurológico",
      "Segurança pessoal"
    ],
    "pharmacology": "Vacina e Soro antirrábico (profilaxia pós-exposição)."
  },
  {
    "id": "75",
    "name": "Leptospirose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Zoonose causada por espiroquetas do gênero Leptospira, transmitida pelo contato com urina de ratos infectados.",
    "signsSymptoms": [
      "Febre alta",
      "Mialgia intensa (principalmente panturrilhas)",
      "Icterícia rubínica",
      "Sufusão conjuntival"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente",
      "Risco de função renal prejudicada"
    ],
    "nic": [
      "Monitorização hídrica",
      "Monitorização laboratorial"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Função renal"
    ],
    "pharmacology": "Penicilina Cristalina, Doxiciclina."
  },
  {
    "id": "76",
    "name": "Doença de Chagas",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção causada pelo protozoário Trypanosoma cruzi, podendo evoluir para formas cardíacas e digestivas crônicas.",
    "signsSymptoms": [
      "Sinal de Romaña (fase aguda)",
      "Cardiomegalia",
      "Megaesôfago",
      "Megacólon"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Eliminação intestinal prejudicada"
    ],
    "nic": [
      "Cuidados cardíacos",
      "Controle da constipação"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Eliminação intestinal"
    ],
    "pharmacology": "Benzonidazol."
  },
  {
    "id": "77",
    "name": "Esquistossomose",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Infecção causada por vermes do gênero Schistosoma, cujos ovos causam inflamação granulomatosa no fígado e intestinos.",
    "signsSymptoms": [
      "Dermatite cercariana",
      "Febre de Katayama",
      "Hepatoesplenomegalia",
      "Hipertensão portal"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Monitorização laboratorial",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Função hepática",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Praziquantel."
  },
  {
    "id": "78",
    "name": "Ancilostomose (Amarelão)",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Infecção intestinal por vermes que se fixam na mucosa e sugam sangue, levando à anemia ferropriva.",
    "signsSymptoms": [
      "Anemia grave",
      "Palidez",
      "Geofagia",
      "Dor abdominal"
    ],
    "nanda": [
      "Fadiga",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Controle da energia",
      "Monitorização nutricional"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional"
    ],
    "pharmacology": "Albendazol, Mebendazol, Reposição de ferro."
  },
  {
    "id": "79",
    "name": "Ascaridíase",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infestação pelo Ascaris lumbricoides, que pode causar obstrução intestinal e ciclo pulmonar (Síndrome de Loeffler).",
    "signsSymptoms": [
      "Dor abdominal",
      "Eliminação de vermes",
      "Tosse seca e dispneia (fase pulmonar)"
    ],
    "nanda": [
      "Risco de motilidade gastrintestinal disfuncional",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Monitorização gastrointestinal",
      "Monitorização respiratória"
    ],
    "noc": [
      "Eliminação intestinal",
      "Estado respiratório"
    ],
    "pharmacology": "Albendazol, Mebendazol."
  },
  {
    "id": "80",
    "name": "Giardíase",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção do intestino delgado pelo protozoário Giardia lamblia, causando má absorção de gorduras.",
    "signsSymptoms": [
      "Diarreia esteatorreica (fezes gordurosas)",
      "Flatulência",
      "Distensão abdominal"
    ],
    "nanda": [
      "Diarreia",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Controle da diarreia",
      "Monitorização nutricional"
    ],
    "noc": [
      "Eliminação intestinal",
      "Estado nutricional"
    ],
    "pharmacology": "Metronidazol, Tinidazol."
  },
  {
    "id": "81",
    "name": "Candidíase Oral (Sapinho)",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Idoso"
    ],
    "pathophysiology": "Infecção fúngica oportunista da mucosa oral causada por Candida albicans.",
    "signsSymptoms": [
      "Placas brancas na língua e bochechas",
      "Dor ao engolir",
      "Ardência bucal"
    ],
    "nanda": [
      "Integridade da mucosa oral prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Restauração da saúde bucal",
      "Administração de medicamentos"
    ],
    "noc": [
      "Higiene bucal",
      "Nível de conforto"
    ],
    "pharmacology": "Nistatina (suspensão oral), Fluconazol."
  },
  {
    "id": "82",
    "name": "Herpes Simples (Labial/Genital)",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção viral recorrente caracterizada por vesículas dolorosas na pele ou mucosas.",
    "signsSymptoms": [
      "Vesículas agrupadas sobre base eritematosa",
      "Ardência e prurido local"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle da dor"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de dor"
    ],
    "pharmacology": "Aciclovir (tópico ou oral)."
  },
  {
    "id": "83",
    "name": "Herpes Zoster (Cobreiro)",
    "category": "Infectologia",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Reativação do vírus Varicela-Zoster latente nos gânglios nervosos, ocorrendo geralmente em imunossuprimidos ou idosos.",
    "signsSymptoms": [
      "Erupção vesicular seguindo um dermátomo",
      "Dor neuropática intensa",
      "Neuralgia pós-herpética"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Cuidados com feridas"
    ],
    "noc": [
      "Nível de dor",
      "Integridade tissular"
    ],
    "pharmacology": "Aciclovir, Valaciclovir, Analgésicos para dor neuropática (Pregabalina)."
  },
  {
    "id": "84",
    "name": "Escabiose Norueguesa (Crustosa)",
    "category": "Infectologia",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Forma grave e altamente contagiosa de escabiose que ocorre em indivíduos gravemente imunossuprimidos ou debilitados.",
    "signsSymptoms": [
      "Crostas espessas e disseminadas",
      "Milhares de ácaros presentes",
      "Prurido pode ser ausente"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção (transmissão)"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Ivermectina oral, Permetrina tópica repetida."
  },
  {
    "id": "85",
    "name": "Pediculose do Couro Cabeludo",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infestação do couro cabeludo pelo piolho Pediculus humanus capitis.",
    "signsSymptoms": [
      "Prurido intenso no couro cabeludo",
      "Presença de lêndeas e piolhos vivos",
      "Escoriações por coçadura"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Permetrina 1%, Delmetrina."
  },
  {
    "id": "86",
    "name": "Osteomielite",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção do osso e da medula óssea, geralmente bacteriana, podendo ser aguda ou crônica.",
    "signsSymptoms": [
      "Dor óssea localizada",
      "Edema e calor local",
      "Febre",
      "Drenagem de pus (fístula)"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade tissular prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Administração de antibióticos"
    ],
    "noc": [
      "Nível de dor",
      "Cura de feridas"
    ],
    "pharmacology": "Antibioticoterapia prolongada (Oxacilina, Vancomicina)."
  },
  {
    "id": "87",
    "name": "Endocardite Infecciosa",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção do endocárdio e das válvulas cardíacas, levando à formação de vegetações e destruição valvar.",
    "signsSymptoms": [
      "Sopro cardíaco novo ou alterado",
      "Febre prolongada",
      "Petéquias",
      "Nódulos de Osler"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Risco de choque"
    ],
    "nic": [
      "Cuidados cardíacos",
      "Monitorização de sinais vitais"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Estado infeccioso"
    ],
    "pharmacology": "Antibioticoterapia EV prolongada."
  },
  {
    "id": "88",
    "name": "Abscesso Cerebral",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Coleção purulenta localizada no parênquima cerebral, geralmente secundária a focos infecciosos próximos (otite, sinusite).",
    "signsSymptoms": [
      "Cefaleia",
      "Febre",
      "Déficits neurológicos focais",
      "Crises convulsivas"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Dor aguda"
    ],
    "nic": [
      "Monitorização neurológica",
      "Controle da dor"
    ],
    "noc": [
      "Estado neurológico",
      "Nível de dor"
    ],
    "pharmacology": "Antibióticos de largo espectro, Corticoides (para edema)."
  },
  {
    "id": "89",
    "name": "Hidrocefalia",
    "category": "Neurológico",
    "ageGroups": [
      "Pediátrico",
      "Idoso"
    ],
    "pathophysiology": "Acúmulo excessivo de líquido cefalorraquidiano (LCR) nos ventrículos cerebrais, causando aumento da pressão intracraniana.",
    "signsSymptoms": [
      "Aumento do perímetro cefálico (bebês)",
      "Cefaleia e vômitos",
      "Alterações da marcha (idosos)"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Monitorização neurológica",
      "Cuidados pós-operatórios (DVP)"
    ],
    "noc": [
      "Estado neurológico",
      "Nível de mobilidade"
    ],
    "pharmacology": "Acetazolamida (uso limitado), Diuréticos."
  },
  {
    "id": "90",
    "name": "Tumor Cerebral",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Crescimento de células anormais no cérebro, podendo ser primário ou metastático, comprimindo estruturas adjacentes.",
    "signsSymptoms": [
      "Cefaleia progressiva",
      "Crises convulsivas",
      "Alterações de personalidade",
      "Déficits motores"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Confusão crônica"
    ],
    "nic": [
      "Monitorização neurológica",
      "Apoio emocional"
    ],
    "noc": [
      "Estado neurológico",
      "Estado cognitivo"
    ],
    "pharmacology": "Corticoides (Dexametasona), Anticonvulsivantes, Quimioterapia."
  },
  {
    "id": "91",
    "name": "Glaucoma de Ângulo Aberto",
    "category": "Oftalmológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Doença progressiva do nervo óptico associada ao aumento da pressão intraocular, levando à perda de campo visual periférico.",
    "signsSymptoms": [
      "Perda gradual da visão periférica (visão tubular)",
      "Muitas vezes assintomática no início"
    ],
    "nanda": [
      "Percepção sensorial prejudicada: visual",
      "Risco de quedas"
    ],
    "nic": [
      "Ensino: processo da doença",
      "Prevenção de quedas"
    ],
    "noc": [
      "Função sensorial: visão",
      "Comportamento de compensação visual"
    ],
    "pharmacology": "Colírios hipotensores (Timolol, Latanoprosta)."
  },
  {
    "id": "92",
    "name": "Catarata",
    "category": "Oftalmológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Opacificação progressiva do cristalino, impedindo a passagem da luz e prejudicando a visão.",
    "signsSymptoms": [
      "Visão embaçada",
      "Sensibilidade ao brilho",
      "Dificuldade para enxergar à noite"
    ],
    "nanda": [
      "Percepção sensorial prejudicada: visual",
      "Risco de quedas"
    ],
    "nic": [
      "Cuidados pós-operatórios",
      "Prevenção de quedas"
    ],
    "noc": [
      "Função sensorial: visão",
      "Nível de mobilidade"
    ],
    "pharmacology": "Tratamento é cirúrgico."
  },
  {
    "id": "93",
    "name": "Descolamento de Retina",
    "category": "Oftalmológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Separação da retina neurossensorial do epitélio pigmentar subjacente, sendo uma emergência oftalmológica.",
    "signsSymptoms": [
      "Flashs de luz (fotopsias)",
      "Moscas volantes",
      "Sombra ou cortina no campo visual"
    ],
    "nanda": [
      "Percepção sensorial prejudicada: visual",
      "Medo"
    ],
    "nic": [
      "Posicionamento do paciente",
      "Preparação cirúrgica"
    ],
    "noc": [
      "Função sensorial: visão",
      "Nível de medo"
    ],
    "pharmacology": "Tratamento é cirúrgico."
  },
  {
    "id": "94",
    "name": "Conjuntivite Bacteriana",
    "category": "Oftalmológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação da conjuntiva causada por infecção bacteriana, altamente contagiosa.",
    "signsSymptoms": [
      "Olhos vermelhos",
      "Secreção purulenta abundante",
      "Sensação de corpo estranho"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Risco de infecção (transmissão)"
    ],
    "nic": [
      "Controle de infecção",
      "Ensino: higiene"
    ],
    "noc": [
      "Nível de conforto",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Colírios antibióticos (Tobramicina, Cloranfenicol)."
  },
  {
    "id": "95",
    "name": "Otite Média Aguda",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção do ouvido médio, frequentemente precedida por uma infecção das vias aéreas superiores.",
    "signsSymptoms": [
      "Otalgia intensa",
      "Febre",
      "Irritabilidade",
      "Abaulamento da membrana timpânica"
    ],
    "nanda": [
      "Dor aguda",
      "Hipertermia"
    ],
    "nic": [
      "Controle da dor",
      "Controle da febre"
    ],
    "noc": [
      "Nível de dor",
      "Termorregulação"
    ],
    "pharmacology": "Amoxicilina, Analgésicos."
  },
  {
    "id": "96",
    "name": "Sinusite Aguda",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Inflamação dos seios paranasais devido a infecção viral ou bacteriana, causando obstrução da drenagem de muco.",
    "signsSymptoms": [
      "Dor ou pressão facial",
      "Congestão nasal",
      "Secreção purulenta",
      "Cefaleia"
    ],
    "nanda": [
      "Dor aguda",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Nível de dor",
      "Estado respiratório: ventilação"
    ],
    "pharmacology": "Antibióticos (se bacteriana), Descongestionantes, Lavagem nasal com SF."
  },
  {
    "id": "97",
    "name": "Amigdalite Bacteriana",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação das amígdalas palatinas causada por bactérias, principalmente Streptococcus pyogenes.",
    "signsSymptoms": [
      "Odinofagia intensa",
      "Febre alta",
      "Placas purulentas nas amígdalas",
      "Linfadenopatia cervical"
    ],
    "nanda": [
      "Dor aguda",
      "Deglutição prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Administração de medicamentos"
    ],
    "noc": [
      "Nível de dor",
      "Estado de deglutição"
    ],
    "pharmacology": "Penicilina Benzatina, Amoxicilina."
  },
  {
    "id": "98",
    "name": "Labirintite",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Inflamação do labirinto (ouvido interno), afetando o equilíbrio e a audição.",
    "signsSymptoms": [
      "Vertigem intensa",
      "Náuseas e vômitos",
      "Zumbido",
      "Perda auditiva transitória"
    ],
    "nanda": [
      "Risco de quedas",
      "Náusea"
    ],
    "nic": [
      "Prevenção de quedas",
      "Controle de náuseas"
    ],
    "noc": [
      "Equilíbrio",
      "Nível de náuseas e vômitos"
    ],
    "pharmacology": "Dimenidrinato, Cinarizina, Betahistina."
  },
  {
    "id": "99",
    "name": "Rinite Alérgica",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação da mucosa nasal mediada por IgE após exposição a alérgenos.",
    "signsSymptoms": [
      "Espirros em salva",
      "Prurido nasal e ocular",
      "Coriza hialina",
      "Congestão nasal"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Ensino: controle ambiental",
      "Administração de medicamentos"
    ],
    "noc": [
      "Nível de conforto",
      "Estado respiratório: ventilação"
    ],
    "pharmacology": "Anti-histamínicos, Corticoides nasais."
  },
  {
    "id": "100",
    "name": "Crup (Laringotraqueobronquite)",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção viral das vias aéreas superiores que causa edema na região subglótica.",
    "signsSymptoms": [
      "Tosse ladrante (tosse de cachorro)",
      "Estridor inspiratório",
      "Rouquidão",
      "Desconforto respiratório"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Desobstrução ineficaz de vias aéreas"
    ],
    "nic": [
      "Monitorização respiratória",
      "Nebulização com adrenalina (se necessário)"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Estado respiratório: patência das vias aéreas"
    ],
    "pharmacology": "Dexametasona (dose única), Nebulização com adrenalina racêmica."
  },
  {
    "id": "101",
    "name": "Pneumotórax Hipertensivo",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Acúmulo de ar no espaço pleural com mecanismo de válvula unidirecional, aumentando a pressão intratorácica e desviando o mediastino.",
    "signsSymptoms": [
      "Desvio de traqueia",
      "Turgência jugular",
      "Hipotensão",
      "Ausência de murmúrio vesicular unilateral"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Troca de gases prejudicada"
    ],
    "nic": [
      "Assistência na drenagem torácica",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Sinais vitais"
    ],
    "pharmacology": "Oxigenioterapia, analgesia pós-drenagem."
  },
  {
    "id": "102",
    "name": "Tamponamento Cardíaco",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Acúmulo de líquido no saco pericárdico que impede o enchimento diastólico do coração.",
    "signsSymptoms": [
      "Tríade de Beck (hipotensão, turgência jugular, abafamento de bulhas)"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Perfusão tissular periférica ineficaz"
    ],
    "nic": [
      "Assistência na pericardiocentese",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Sinais vitais"
    ],
    "pharmacology": "Expansão volêmica (temporário), dobutamina."
  },
  {
    "id": "103",
    "name": "Edema Agudo de Pulmão (EAP)",
    "category": "Cardiologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Acúmulo de líquido nos alvéolos devido à falência do ventrículo esquerdo ou sobrecarga volêmica.",
    "signsSymptoms": [
      "Dispneia grave",
      "Ortopneia",
      "Expectoração rósea espumosa",
      "Estertores crepitantes"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Excesso de volume de líquidos"
    ],
    "nic": [
      "Monitoração respiratória",
      "Controle de líquidos/eletrólitos"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Furosemida, Morfina, Nitroglicerina, Oxigênio (VNI)."
  },
  {
    "id": "104",
    "name": "Cetoacidose Diabética (CAD)",
    "category": "Endocrinologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Deficiência grave de insulina levando à hiperglicemia, lipólise e formação de corpos cetônicos, resultando em acidose metabólica.",
    "signsSymptoms": [
      "Hálito cetônico",
      "Respiração de Kussmaul",
      "Dor abdominal",
      "Poliúria",
      "Desidratação"
    ],
    "nanda": [
      "Volume de líquidos deficiente",
      "Glicemia instável"
    ],
    "nic": [
      "Controle da acidose metabólica",
      "Controle da hiperglicemia"
    ],
    "noc": [
      "Equilíbrio hidroeletrolítico",
      "Nível de glicemia"
    ],
    "pharmacology": "Insulina regular IV, Hidratação venosa, Reposição de Potássio."
  },
  {
    "id": "105",
    "name": "Sepse / Choque Séptico",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Resposta inflamatória sistêmica desregulada a uma infecção, causando disfunção orgânica e falência circulatória.",
    "signsSymptoms": [
      "Febre ou hipotermia",
      "Taquicardia",
      "Taquipneia",
      "Hipotensão refratária a volume",
      "Oligúria"
    ],
    "nanda": [
      "Risco de choque",
      "Perfusão tissular ineficaz"
    ],
    "nic": [
      "Controle de infecção",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Estado infeccioso",
      "Perfusão tissular: órgãos"
    ],
    "pharmacology": "Antibioticoterapia precoce, Noradrenalina, Cristaloides."
  },
  {
    "id": "106",
    "name": "AVE Isquêmico",
    "category": "Neurologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Obstrução de uma artéria cerebral por trombo ou êmbolo, levando à isquemia e morte neuronal.",
    "signsSymptoms": [
      "Hemiparesia",
      "Afasia",
      "Desvio de rima labial",
      "Perda súbita de visão"
    ],
    "nanda": [
      "Perfusão tissular cerebral ineficaz",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Monitoração neurológica",
      "Prevenção de aspiração"
    ],
    "noc": [
      "Estado neurológico",
      "Capacidade de transferência"
    ],
    "pharmacology": "Alteplase (se critérios), AAS, Estatinas."
  },
  {
    "id": "107",
    "name": "AVE Hemorrágico",
    "category": "Neurologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Ruptura de um vaso sanguíneo cerebral, causando sangramento intracraniano e aumento da pressão intracraniana.",
    "signsSymptoms": [
      "Cefaleia súbita e intensa",
      "Vômitos em jato",
      "Rebaixamento do nível de consciência"
    ],
    "nanda": [
      "Capacidade adaptativa intracraniana diminuída",
      "Risco de perfusão cerebral ineficaz"
    ],
    "nic": [
      "Controle da pressão intracraniana",
      "Monitoração neurológica"
    ],
    "noc": [
      "Estado neurológico",
      "Nível de consciência"
    ],
    "pharmacology": "Controle rigoroso da PA (Nitroprussiato), Manitol."
  },
  {
    "id": "108",
    "name": "Embolia Pulmonar (TEP)",
    "category": "Pneumologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Obstrução da artéria pulmonar por um êmbolo, prejudicando a troca gasosa e aumentando a carga do ventrículo direito.",
    "signsSymptoms": [
      "Dispneia súbita",
      "Dor torácica pleurítica",
      "Taquicardia",
      "Hemoptise"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Controle de trombolítico/anticoagulante",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Sinais vitais"
    ],
    "pharmacology": "Heparina, Enoxaparina, Warfarina, Trombolíticos (se instável)."
  },
  {
    "id": "109",
    "name": "Insuficiência Renal Aguda (IRA)",
    "category": "Nefrologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Queda súbita da função renal, resultando em acúmulo de escórias nitrogenadas e desequilíbrio hidroeletrolítico.",
    "signsSymptoms": [
      "Oligúria ou anúria",
      "Edema",
      "Uremia (náuseas, confusão)",
      "Hipercalemia"
    ],
    "nanda": [
      "Excesso de volume de líquidos",
      "Risco de equilíbrio eletrolítico desequilibrado"
    ],
    "nic": [
      "Controle de líquidos",
      "Monitoração renal"
    ],
    "noc": [
      "Função renal",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Diuréticos (se indicado), ajuste de doses de outras drogas."
  },
  {
    "id": "112",
    "name": "Pneumonia Associada à Ventilação (PAV)",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção do parênquima pulmonar que ocorre 48-72h após a intubação endotraqueal.",
    "signsSymptoms": [
      "Febre",
      "Secreção traqueal purulenta",
      "Piora da oxigenação",
      "Novos infiltrados no Raio-X"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Cuidados com a ventilação mecânica",
      "Aspiração de vias aéreas"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Estado infeccioso"
    ],
    "pharmacology": "Antibioticoterapia empírica de amplo espectro."
  },
  {
    "id": "114",
    "name": "Crise Convulsiva",
    "category": "Neurologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Atividade elétrica cerebral anormal e excessiva, podendo ser focal ou generalizada.",
    "signsSymptoms": [
      "Movimentos tônico-clônicos",
      "Perda de consciência",
      "Sialorreia",
      "Liberação esfincteriana"
    ],
    "nanda": [
      "Risco de aspiração",
      "Risco de trauma"
    ],
    "nic": [
      "Controle de convulsão",
      "Manutenção de vias aéreas"
    ],
    "noc": [
      "Controle de riscos",
      "Estado neurológico"
    ],
    "pharmacology": "Diazepam, Midazolam, Fenitoína, Fenobarbital."
  },
  {
    "id": "115",
    "name": "Queimaduras de 3º Grau",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Destruição total da epiderme e derme, podendo atingir tecidos profundos, causando perda de barreira e grande perda volêmica.",
    "signsSymptoms": [
      "Pele carbonizada ou esbranquiçada",
      "Ausência de dor local",
      "Choque hipovolêmico"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Cuidados com queimaduras",
      "Reposição de líquidos"
    ],
    "noc": [
      "Integridade tissular",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Fórmula de Parkland (Ringer Lactato), Analgesia, Sulfadiazina de Prata."
  },
  {
    "id": "116",
    "name": "Edema Cerebral",
    "category": "Neurologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Acúmulo de líquido no parênquima cerebral, aumentando o volume e a pressão intracraniana.",
    "signsSymptoms": [
      "Cefaleia",
      "Vômitos",
      "Papiledema",
      "Alteração do nível de consciência"
    ],
    "nanda": [
      "Capacidade adaptativa intracraniana diminuída",
      "Risco de perfusão cerebral ineficaz"
    ],
    "nic": [
      "Controle da pressão intracraniana",
      "Posicionamento do paciente"
    ],
    "noc": [
      "Estado neurológico",
      "Nível de consciência"
    ],
    "pharmacology": "Manitol, Solução Salina Hipertônica, Dexametasona."
  },
  {
    "id": "117",
    "name": "Hemorragia Digestiva Alta (HDA)",
    "category": "Gastroenterologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Sangramento originado acima do ângulo de Treitz (esôfago, estômago ou duodeno).",
    "signsSymptoms": [
      "Hematêmese",
      "Melena",
      "Choque hipovolêmico",
      "Anemia"
    ],
    "nanda": [
      "Volume de líquidos deficiente",
      "Risco de choque"
    ],
    "nic": [
      "Controle de hemorragia",
      "Manejo de líquidos"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Estado de coagulação"
    ],
    "pharmacology": "Pantoprazol IV, Terlipressina (se varizes), Octreotida."
  },
  {
    "id": "118",
    "name": "Pielonefrite Aguda",
    "category": "Nefrologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção bacteriana do parênquima renal e da pelve renal.",
    "signsSymptoms": [
      "Dor lombar (Giordano positivo)",
      "Febre",
      "Calafrios",
      "Disúria"
    ],
    "nanda": [
      "Dor aguda",
      "Hipertermia"
    ],
    "nic": [
      "Controle da dor",
      "Tratamento da infecção"
    ],
    "noc": [
      "Nível de dor",
      "Sinais vitais"
    ],
    "pharmacology": "Ciprofloxacino, Ceftriaxona, Analgésicos."
  },
  {
    "id": "119",
    "name": "DPOC Exacerbada",
    "category": "Pneumologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Piora aguda dos sintomas respiratórios em paciente com limitação crônica do fluxo aéreo.",
    "signsSymptoms": [
      "Aumento da dispneia",
      "Aumento do volume/purulência do escarro",
      "Sibilância"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Monitoração respiratória",
      "Oxigenioterapia"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Sinais vitais"
    ],
    "pharmacology": "Broncodilatadores, Corticosteroides, Antibióticos, Oxigênio."
  },
  {
    "id": "121",
    "name": "Pré-eclâmpsia",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Disfunção endotelial sistêmica devido à placentação anormal, resultando em hipertensão e proteinúria após 20 semanas de gestação.",
    "signsSymptoms": [
      "Cefaleia intensa",
      "Escotomas (visão turva)",
      "Epigastralgia",
      "Edema generalizado",
      "PA ≥ 140x90 mmHg"
    ],
    "nanda": [
      "Risco de perfusão tissular ineficaz",
      "Excesso de volume de líquidos"
    ],
    "nic": [
      "Controle da hipertensão",
      "Monitoração da diurese",
      "Administração de Sulfato de Magnésio"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Estado materno: pré-parto"
    ],
    "pharmacology": "Hidralazina, Metildopa, Labetalol, Sulfato de Magnésio (prevenção de crises)."
  },
  {
    "id": "122",
    "name": "Descolamento Prematuro de Placenta (DPP)",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Separação da placenta da parede uterina antes do nascimento, causando hemorragia e comprometimento da troca gasosa fetal.",
    "signsSymptoms": [
      "Dor abdominal súbita e intensa",
      "Sangramento vaginal escuro",
      "Útero rígido (hipertônico)",
      "Sofrimento fetal"
    ],
    "nanda": [
      "Risco de choque hipovolêmico",
      "Risco de binômio mãe-feto perturbado"
    ],
    "nic": [
      "Manejo da hemorragia",
      "Monitoração fetal eletrônica",
      "Preparação para parto imediato"
    ],
    "noc": [
      "Estado fetal: pré-parto",
      "Gravidade da perda de sangue"
    ],
    "pharmacology": "Cristaloides (reposição volêmica), Ocitocina (pós-parto)."
  },
  {
    "id": "123",
    "name": "Rotura Uterina",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Rompimento total ou parcial da musculatura uterina, geralmente durante o trabalho de parto em úteros com cicatrizes prévias.",
    "signsSymptoms": [
      "Dor abdominal excruciante",
      "Cessação das contrações",
      "Hemorragia interna",
      "Partes fetais palpáveis no abdome"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de choque"
    ],
    "nic": [
      "Assistência em cirurgia de emergência",
      "Manejo de líquidos/eletrólitos"
    ],
    "noc": [
      "Sinais vitais",
      "Estado materno: pós-parto"
    ],
    "pharmacology": "Anestesia geral, Reposição volêmica maciça."
  },
  {
    "id": "124",
    "name": "Prolapso de Cordão",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Descida do cordão umbilical à frente da apresentação fetal após a ruptura das membranas, causando compressão e hipóxia fetal.",
    "signsSymptoms": [
      "Cordão visível ou palpável na vagina",
      "Desacelerações súbitas de BCF",
      "Bradicardia fetal"
    ],
    "nanda": [
      "Risco de binômio mãe-feto perturbado",
      "Troca de gases prejudicada (fetal)"
    ],
    "nic": [
      "Posicionamento (Genupeitoral)",
      "Elevação manual da apresentação",
      "Preparação para cesárea urgente"
    ],
    "noc": [
      "Estado fetal: intraparto",
      "Sinais vitais"
    ],
    "pharmacology": "Oxigenioterapia materna."
  },
  {
    "id": "125",
    "name": "Sepse Puerperal",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção sistêmica originada no trato reprodutivo após o parto ou aborto.",
    "signsSymptoms": [
      "Febre alta",
      "Lóquios fétidos",
      "Taquicardia",
      "Dor pélvica",
      "Mal-estar geral"
    ],
    "nanda": [
      "Risco de choque séptico",
      "Hipertermia"
    ],
    "nic": [
      "Controle de infecção",
      "Administração de antibióticos IV",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Estado infeccioso",
      "Perfusão tissular: órgãos"
    ],
    "pharmacology": "Clindamicina + Gentamicina, Ampicilina."
  },
  {
    "id": "126",
    "name": "Embolia Amniótica",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Entrada de líquido amniótico na circulação materna, desencadeando resposta anafilactoide, colapso cardiorrespiratório e CID.",
    "signsSymptoms": [
      "Dispneia súbita",
      "Cianose",
      "Hipotensão grave",
      "Hemorragia por coagulopatia"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Débito cardíaco diminuído"
    ],
    "nic": [
      "Ressuscitação cardiopulmonar",
      "Manejo de via aérea",
      "Controle de hemorragia"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Eficácia da bomba cardíaca"
    ],
    "pharmacology": "Adrenalina, Hidrocortisona, Hemocomponentes."
  },
  {
    "id": "127",
    "name": "Parto Obstruído (Distócia)",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Falha na progressão do parto devido a fatores mecânicos (desproporção céfalo-pélvica, posição anômala).",
    "signsSymptoms": [
      "Dilatação estacionada",
      "Sofrimento fetal",
      "Cansaço materno extremo"
    ],
    "nanda": [
      "Fadiga",
      "Risco de lesão materna/fetal"
    ],
    "nic": [
      "Monitoração do trabalho de parto",
      "Assistência em manobras de distócia",
      "Preparação para cesárea"
    ],
    "noc": [
      "Estado fetal: intraparto",
      "Conhecimento: processo do parto"
    ],
    "pharmacology": "Analgesia de parto, Ocitocina (se indicado)."
  },
  {
    "id": "128",
    "name": "Pneumonia Neonatal",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Infecção do parênquima pulmonar adquirida intraútero, durante o parto ou nos primeiros dias de vida.",
    "signsSymptoms": [
      "Gemência",
      "Taquipneia",
      "Cianose",
      "Instabilidade térmica",
      "Apneia"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Troca de gases prejudicada"
    ],
    "nic": [
      "Monitorização respiratória",
      "Oxigenioterapia",
      "Controle térmico"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Termorregulação"
    ],
    "pharmacology": "Ampicilina + Gentamicina (esquema inicial)."
  },
  {
    "id": "129",
    "name": "Enterocolite Necrosante (ECN)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Isquemia e necrose da mucosa intestinal, associada à prematuridade e colonização bacteriana anormal.",
    "signsSymptoms": [
      "Distensão abdominal",
      "Resíduo gástrico bilioso",
      "Sangue nas fezes",
      "Letargia"
    ],
    "nanda": [
      "Risco de perfusão gastrintestinal ineficaz",
      "Volume de líquidos deficiente"
    ],
    "nic": [
      "Manejo da nutrição (NPO)",
      "Descompressão gástrica",
      "Monitoração de sinais de perfuração"
    ],
    "noc": [
      "Função gastrintestinal",
      "Equilíbrio hidroeletrolítico"
    ],
    "pharmacology": "Antibioticoterapia de amplo espectro (Metronidazol, Vancomicina)."
  },
  {
    "id": "130",
    "name": "Icterícia Neonatal Grave",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Acúmulo excessivo de bilirrubina indireta, com risco de ultrapassar a barreira hematoencefálica (Kernicterus).",
    "signsSymptoms": [
      "Icterícia zona IV/V de Kramer",
      "Hipotonia",
      "Sucção débil",
      "Choro agudo"
    ],
    "nanda": [
      "Icterícia neonatal",
      "Risco de lesão cerebral"
    ],
    "nic": [
      "Fototerapia",
      "Monitoração de bilirrubinas",
      "Assistência na exsanguíneotransfusão"
    ],
    "noc": [
      "Adaptação do recém-nascido",
      "Integridade tissular"
    ],
    "pharmacology": "Imunoglobulina (se incompatibilidade Rh)."
  },
  {
    "id": "131",
    "name": "Apneia da Prematuridade",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Imaturidade dos centros respiratórios e resposta reduzida ao CO2 em prematuros.",
    "signsSymptoms": [
      "Pausas respiratórias > 20 segundos",
      "Bradicardia associada",
      "Cianose ou palidez"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Risco de aspiração"
    ],
    "nic": [
      "Monitorização cardiorrespiratória",
      "Estímulo tátil",
      "Posicionamento adequado"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Sinais vitais"
    ],
    "pharmacology": "Citrato de Cafeína, Aminofilina."
  },
  {
    "id": "132",
    "name": "Hipoglicemia Neonatal",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Queda da glicemia (< 45 mg/dL) devido a baixas reservas de glicogênio ou hiperinsulinismo.",
    "signsSymptoms": [
      "Tremores",
      "Irritabilidade",
      "Letargia",
      "Crises convulsivas",
      "Sudorese"
    ],
    "nanda": [
      "Risco de glicemia instável",
      "Risco de lesão neurológica"
    ],
    "nic": [
      "Monitoração da glicemia capilar",
      "Alimentação precoce",
      "Administração de Glicose IV"
    ],
    "noc": [
      "Nível de glicemia",
      "Estado neurológico"
    ],
    "pharmacology": "Glicose 10% (bolus e manutenção), Glucagon."
  },
  {
    "id": "133",
    "name": "Tetralogia de Fallot",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal",
      "Pediátrico"
    ],
    "pathophysiology": "Cardiopatia congênita cianótica (CIV, estenose pulmonar, dextroposição da aorta, hipertrofia de VD).",
    "signsSymptoms": [
      "Cianose central",
      "Sopro cardíaco",
      "Crises hipóxicas (Tet spells)",
      "Baqueteamento digital"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Troca de gases prejudicada"
    ],
    "nic": [
      "Manejo da crise hipóxica (posição genupeitoral)",
      "Oxigenioterapia",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Estado respiratório: troca de gases"
    ],
    "pharmacology": "Morfina, Propranolol, Bicarbonato de Sódio."
  },
  {
    "id": "134",
    "name": "Ducto Arterioso Persistente (DAP)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Falha no fechamento do canal arterial após o nascimento, causando shunt esquerda-direita.",
    "signsSymptoms": [
      "Sopro contínuo (maquinária)",
      "Pulsos amplos",
      "Taquipneia",
      "Sinais de insuficiência cardíaca"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Restrição hídrica",
      "Monitoração de sinais de ICC",
      "Cuidados pós-operatórios (se ligadura)"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Indometacina, Ibuprofeno (para fechamento)."
  },
  {
    "id": "135",
    "name": "Hipocalcemia Neonatal",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Cálcio sérico < 7 mg/dL, comum em filhos de mães diabéticas ou prematuros.",
    "signsSymptoms": [
      "Irritabilidade",
      "Tremores",
      "Crises convulsivas",
      "Prolongamento do intervalo QT"
    ],
    "nanda": [
      "Risco de eletrólitos desequilibrados",
      "Risco de trauma"
    ],
    "nic": [
      "Monitoração de eletrólitos",
      "Administração de Gluconato de Cálcio",
      "Monitoração de ECG"
    ],
    "noc": [
      "Equilíbrio hidroeletrolítico",
      "Estado neurológico"
    ],
    "pharmacology": "Gluconato de Cálcio 10%."
  },
  {
    "id": "136",
    "name": "Retinopatia da Prematuridade (ROP)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Proliferação vascular anormal na retina de prematuros, agravada pelo uso excessivo de oxigênio.",
    "signsSymptoms": [
      "Assintomática inicialmente",
      "Leucocoria (em estágios avançados)"
    ],
    "nanda": [
      "Risco de percepção sensorial perturbada (visual)"
    ],
    "nic": [
      "Controle rigoroso da SatO2",
      "Acompanhamento oftalmológico precoce"
    ],
    "noc": [
      "Visão",
      "Adaptação do recém-nascido"
    ],
    "pharmacology": "Bevacizumabe (anti-VEGF) intraocular."
  },
  {
    "id": "137",
    "name": "Hérnia Diafragmática Congênita",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Defeito no diafragma que permite a passagem de órgãos abdominais para o tórax, causando hipoplasia pulmonar.",
    "signsSymptoms": [
      "Desconforto respiratório grave ao nascer",
      "Abdome escavado",
      "Cianose"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Intubação imediata (evitar máscara)",
      "Descompressão gástrica (SNG)",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Sinais vitais"
    ],
    "pharmacology": "Sedação (Fentanil), Inotrópicos (Dopamina)."
  },
  {
    "id": "138",
    "name": "Hemorragia Intraventricular (HIV)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Sangramento na matriz germinativa do cérebro, comum em prematuros de muito baixo peso.",
    "signsSymptoms": [
      "Queda súbita do hematócrito",
      "Fontanela abaulada",
      "Apneia",
      "Hipotonia"
    ],
    "nanda": [
      "Capacidade adaptativa intracraniana diminuída",
      "Risco de perfusão cerebral ineficaz"
    ],
    "nic": [
      "Monitoração neurológica",
      "Manuseio mínimo",
      "Posicionamento da cabeça em linha média"
    ],
    "noc": [
      "Estado neurológico",
      "Sinais vitais"
    ],
    "pharmacology": "Vitamina K, Fenobarbital (se convulsões)."
  },
  {
    "id": "139",
    "name": "Síndrome de Abstinência Neonatal (SAN)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Sintomas de retirada em recém-nascidos expostos a substâncias psicoativas intraútero.",
    "signsSymptoms": [
      "Irritabilidade extrema",
      "Choro agudo",
      "Tremores",
      "Diarreia",
      "Dificuldade de alimentação"
    ],
    "nanda": [
      "Comportamento desorganizado do bebê",
      "Risco de integridade da pele prejudicada"
    ],
    "nic": [
      "Aplicação da Escala de Finnegan",
      "Ambiente calmo e escuro",
      "Técnica do casulo (swaddling)"
    ],
    "noc": [
      "Adaptação do recém-nascido",
      "Sono"
    ],
    "pharmacology": "Morfina oral, Fenobarbital, Clonidina."
  },
  {
    "id": "140",
    "name": "Broncodisplasia Pulmonar (BDP)",
    "category": "Pediatria",
    "ageGroups": [
      "Neonatal"
    ],
    "pathophysiology": "Doença pulmonar crônica resultante de lesão por oxigênio e ventilação mecânica em prematuros.",
    "signsSymptoms": [
      "Dependência de oxigênio",
      "Taquipneia crônica",
      "Retrações intercostais",
      "Sibilância"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Nutrição desequilibrada: menor que as necessidades"
    ],
    "nic": [
      "Manejo da oxigenioterapia",
      "Restrição hídrica",
      "Suporte nutricional hipercalórico"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Crescimento"
    ],
    "pharmacology": "Diuréticos (Furosemida), Corticosteroides (Dexametasona), Broncodilatadores."
  },
  {
    "id": "141",
    "name": "Tuberculose",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção bacteriana crônica causada pelo Mycobacterium tuberculosis, afetando principalmente os pulmões.",
    "signsSymptoms": [
      "Tosse persistente (> 3 semanas)",
      "Febre vespertina",
      "Sudorese noturna",
      "Emagrecimento"
    ],
    "nanda": [
      "Risco de infecção (transmissão)",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Supervisão de terapia (TDO)",
      "Ensino sobre a doença",
      "Monitoração de efeitos adversos"
    ],
    "noc": [
      "Estado infeccioso",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Rifampicina, Isoniazida, Pirazinamida, Etambutol (RIPE)."
  },
  {
    "id": "143",
    "name": "Leishmaniose Visceral (Calazar)",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção sistêmica causada por protozoários do gênero Leishmania, transmitida pelo mosquito-palha.",
    "signsSymptoms": [
      "Febre prolongada",
      "Hepatoesplenomegalia",
      "Palidez intensa (anemia)",
      "Perda de peso"
    ],
    "nanda": [
      "Risco de sangramento",
      "Risco de infecção oportunista"
    ],
    "nic": [
      "Monitoração de sinais vitais",
      "Manejo da nutrição",
      "Monitoração de exames laboratoriais"
    ],
    "noc": [
      "Estado infeccioso",
      "Estado nutricional"
    ],
    "pharmacology": "Antimoniato de Meglumina (Glucantime), Anfotericina B Lipossomal."
  },
  {
    "id": "144",
    "name": "Dengue / Zika / Chikungunya",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Arboviroses transmitidas pelo Aedes aegypti, causando resposta inflamatória sistêmica aguda.",
    "signsSymptoms": [
      "Febre alta",
      "Mialgia/Artralgia intensa",
      "Exantema",
      "Dor retro-orbital"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente",
      "Dor aguda"
    ],
    "nic": [
      "Hidratação vigorosa",
      "Monitoração de sinais de alarme",
      "Controle da dor"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Nível de dor"
    ],
    "pharmacology": "Paracetamol, Dipirona (Evitar AINEs e AAS)."
  },
  {
    "id": "146",
    "name": "Febre Amarela",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção viral aguda transmitida por mosquitos, causando necrose hepática e disfunção renal.",
    "signsSymptoms": [
      "Febre súbita",
      "Icterícia (amarelão)",
      "Hemorragias",
      "Vômito negro"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Risco de sangramento"
    ],
    "nic": [
      "Monitoração de sinais vitais",
      "Balanço hídrico rigoroso",
      "Cuidados na hemorragia"
    ],
    "noc": [
      "Função hepática",
      "Coagulação sanguínea"
    ],
    "pharmacology": "Tratamento de suporte, vacinação preventiva."
  },
  {
    "id": "148",
    "name": "Cólera",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção intestinal aguda causada pela toxina da bactéria Vibrio cholerae, levando a diarreia aquosa maciça.",
    "signsSymptoms": [
      "Diarreia em \"água de arroz\"",
      "Vômitos",
      "Desidratação grave",
      "Cãibras"
    ],
    "nanda": [
      "Déficit de volume de líquidos",
      "Risco de choque hipovolêmico"
    ],
    "nic": [
      "Terapia de reidratação oral/venosa",
      "Monitoração de eletrólitos"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Equilíbrio hidroeletrolítico"
    ],
    "pharmacology": "Sais de reidratação, Doxiciclina (casos graves)."
  },
  {
    "id": "150",
    "name": "Peste Bubônica",
    "category": "Doenças Tropicais",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção causada pela bactéria Yersinia pestis, transmitida por pulgas de roedores.",
    "signsSymptoms": [
      "Bubões (linfonodos dolorosos)",
      "Febre alta",
      "Prostração",
      "Pneumonia (forma pulmonar)"
    ],
    "nanda": [
      "Risco de choque",
      "Dor aguda"
    ],
    "nic": [
      "Isolamento (se pulmonar)",
      "Manejo da dor",
      "Controle de infecção"
    ],
    "noc": [
      "Estado infeccioso",
      "Nível de dor"
    ],
    "pharmacology": "Estreptomicina, Gentamicina, Doxiciclina."
  },
  {
    "id": "156",
    "name": "Faringoamigdalite Bacteriana",
    "category": "Otorrinolaringologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Infecção das amígdalas e faringe, frequentemente por Streptococcus pyogenes.",
    "signsSymptoms": [
      "Odinofagia grave",
      "Febre",
      "Exsudato purulento nas amígdalas",
      "Linfadenopatia cervical"
    ],
    "nanda": [
      "Dor aguda",
      "Deglutição prejudicada"
    ],
    "nic": [
      "Manejo da dor",
      "Monitoração da hidratação"
    ],
    "noc": [
      "Nível de dor",
      "Estado infeccioso"
    ],
    "pharmacology": "Penicilina Benzatina, Amoxicilina."
  },
  {
    "id": "158",
    "name": "Pericardite Aguda",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Inflamação do pericárdio, frequentemente viral ou idiopática, causando atrito entre as camadas.",
    "signsSymptoms": [
      "Dor torácica pleurítica (melhora ao inclinar para frente)",
      "Atrito pericárdico",
      "Alterações no ECG"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Manejo da dor",
      "Monitoração de sinais de tamponamento cardíaco"
    ],
    "noc": [
      "Nível de dor",
      "Eficácia da bomba cardíaca"
    ],
    "pharmacology": "AINEs (Ibuprofeno), Colchicina."
  },
  {
    "id": "159",
    "name": "Miocardite",
    "category": "Cardiovascular",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Inflamação do músculo cardíaco, geralmente viral, podendo levar a insuficiência cardíaca aguda.",
    "signsSymptoms": [
      "Fadiga",
      "Dispneia",
      "Arritmias",
      "Dor torácica"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Intolerância à atividade"
    ],
    "nic": [
      "Repouso no leito",
      "Monitoração cardíaca contínua"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Tolerância à atividade"
    ],
    "pharmacology": "Suporte para IC, Imunoglobulina (em alguns casos)."
  },
  {
    "id": "160",
    "name": "Aneurisma de Aorta Abdominal",
    "category": "Cardiovascular",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Dilatação focal da aorta abdominal devido à fraqueza da parede arterial.",
    "signsSymptoms": [
      "Massa abdominal pulsátil",
      "Dor lombar ou abdominal",
      "Muitas vezes assintomático até ruptura"
    ],
    "nanda": [
      "Risco de choque hipovolêmico",
      "Risco de perfusão tissular ineficaz"
    ],
    "nic": [
      "Controle rigoroso da PA",
      "Monitoração de sinais de ruptura"
    ],
    "noc": [
      "Sinais vitais",
      "Conhecimento: processo da doença"
    ],
    "pharmacology": "Anti-hipertensivos (Betabloqueadores)."
  },
  {
    "id": "161",
    "name": "Doença Arterial Periférica (DAP)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Aterosclerose das artérias dos membros inferiores, reduzindo o fluxo sanguíneo.",
    "signsSymptoms": [
      "Claudicação intermitente",
      "Pulsos diminuídos",
      "Pele fria e pálida",
      "Úlceras isquêmicas"
    ],
    "nanda": [
      "Perfusão tissular periférica ineficaz",
      "Dor crônica"
    ],
    "nic": [
      "Cuidados com os pés",
      "Ensino sobre exercícios de caminhada"
    ],
    "noc": [
      "Perfusão tissular: periférica",
      "Nível de dor"
    ],
    "pharmacology": "Cilostazol, Estatinas, Antiagregantes (AAS)."
  },
  {
    "id": "162",
    "name": "Insuficiência Venosa Crônica",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Incompetência das valvas venosas, levando a estase sanguínea e hipertensão venosa nos membros inferiores.",
    "signsSymptoms": [
      "Varizes",
      "Edema vespertino",
      "Dermatite de estase",
      "Úlceras venosas"
    ],
    "nanda": [
      "Perfusão tissular periférica ineficaz",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Uso de meias de compressão",
      "Elevação dos membros",
      "Cuidados com úlceras"
    ],
    "noc": [
      "Perfusão tissular: periférica",
      "Integridade tissular"
    ],
    "pharmacology": "Venotônicos (Diosmina/Hesperidina)."
  },
  {
    "id": "163",
    "name": "Síndrome de Guillain-Barré",
    "category": "Neurológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Polirradiculoneuropatia inflamatória aguda desmielinizante, frequentemente pós-infecciosa.",
    "signsSymptoms": [
      "Paralisia ascendente simétrica",
      "Arreflexia",
      "Parestesias",
      "Insuficiência respiratória"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Monitoração da função respiratória",
      "Prevenção de complicações da imobilidade"
    ],
    "noc": [
      "Estado neurológico",
      "Estado respiratório: ventilação"
    ],
    "pharmacology": "Imunoglobulina IV, Plasmaférese."
  },
  {
    "id": "164",
    "name": "Miastenia Gravis",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune da junção neuromuscular, onde anticorpos bloqueiam os receptores de acetilcolina.",
    "signsSymptoms": [
      "Ptose palpebral",
      "Diplopia",
      "Fraqueza muscular flutuante (piora com esforço)",
      "Disfagia"
    ],
    "nanda": [
      "Fadiga",
      "Risco de aspiração"
    ],
    "nic": [
      "Manejo da energia",
      "Terapia de deglutição"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado de deglutição"
    ],
    "pharmacology": "Piridostigmina, Corticoides, Imunossupressores."
  },
  {
    "id": "165",
    "name": "Neuralgia do Trigêmeo",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Compressão ou desmielinização do nervo trigêmeo, causando crises de dor lancinante na face.",
    "signsSymptoms": [
      "Dor súbita em choque na face",
      "Gatilhos (falar, mastigar, vento)"
    ],
    "nanda": [
      "Dor aguda",
      "Medo"
    ],
    "nic": [
      "Manejo da dor",
      "Identificação de gatilhos"
    ],
    "noc": [
      "Nível de dor",
      "Nível de medo"
    ],
    "pharmacology": "Carbamazepina, Gabapentina."
  },
  {
    "id": "166",
    "name": "Mielite Transversa",
    "category": "Neurológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Inflamação de um segmento da medula espinhal, interrompendo a comunicação nervosa.",
    "signsSymptoms": [
      "Paraplegia súbita",
      "Nível sensitivo",
      "Disfunção esfincteriana"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Eliminação urinária prejudicada"
    ],
    "nic": [
      "Cateterismo vesical intermitente",
      "Prevenção de úlceras por pressão"
    ],
    "noc": [
      "Mobilidade",
      "Eliminação urinária"
    ],
    "pharmacology": "Corticoides (pulsoterapia), Plasmaférese."
  },
  {
    "id": "167",
    "name": "Encefalopatia Hepática",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Disfunção cerebral causada pelo acúmulo de toxinas (como amônia) não filtradas pelo fígado doente.",
    "signsSymptoms": [
      "Flapping (asterixe)",
      "Confusão mental",
      "Sonolência",
      "Hálito hepático"
    ],
    "nanda": [
      "Confusão aguda",
      "Risco de lesão"
    ],
    "nic": [
      "Monitoração do estado mental",
      "Controle de eletrólitos",
      "Manejo da eliminação"
    ],
    "noc": [
      "Estado cognitivo",
      "Segurança"
    ],
    "pharmacology": "Lactulona, Rifaximina."
  },
  {
    "id": "168",
    "name": "Varizes de Esôfago",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Veias dilatadas no esôfago devido à hipertensão portal na cirrose, com alto risco de ruptura.",
    "signsSymptoms": [
      "Hematêmese maciça",
      "Melena",
      "Sinais de choque"
    ],
    "nanda": [
      "Risco de choque hipovolêmico",
      "Risco de sangramento"
    ],
    "nic": [
      "Assistência na endoscopia de urgência",
      "Ressuscitação hídrica",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Coagulação sanguínea",
      "Sinais vitais"
    ],
    "pharmacology": "Terlipressina, Octreotida, Propranolol (prevenção)."
  },
  {
    "id": "169",
    "name": "Síndrome do Intestino Irritável (SII)",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Distúrbio funcional do trato gastrointestinal caracterizado por dor abdominal e alteração do hábito intestinal sem causa orgânica.",
    "signsSymptoms": [
      "Dor abdominal que melhora ao evacuar",
      "Distensão",
      "Alternância entre diarreia e constipação"
    ],
    "nanda": [
      "Dor crônica",
      "Padrão de eliminação intestinal ineficaz"
    ],
    "nic": [
      "Ensino sobre dieta (FODMAPs)",
      "Manejo do estresse"
    ],
    "noc": [
      "Nível de dor",
      "Eliminação intestinal"
    ],
    "pharmacology": "Antiespasmódicos, Fibras, Antidepressivos em baixas doses."
  },
  {
    "id": "170",
    "name": "Doença de Wilson",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Distúrbio genético do metabolismo do cobre, levando ao seu acúmulo no fígado, cérebro e olhos.",
    "signsSymptoms": [
      "Anéis de Kayser-Fleischer",
      "Disfunção hepática",
      "Sintomas neurológicos (tremores)"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Monitoração laboratorial",
      "Ensino sobre dieta pobre em cobre"
    ],
    "noc": [
      "Função hepática",
      "Estado neurológico"
    ],
    "pharmacology": "D-penicilamina, Trientina, Zinco."
  },
  {
    "id": "171",
    "name": "Hemocromatose Hereditária",
    "category": "Hematológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Absorção excessiva de ferro da dieta, resultando em sobrecarga de ferro nos órgãos.",
    "signsSymptoms": [
      "Pele bronzeada",
      "Diabetes (diabetes bronzeado)",
      "Artralgia",
      "Cirrose"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Assistência na flebotomia terapêutica",
      "Monitoração de ferritina"
    ],
    "noc": [
      "Função hepática",
      "Nível de fadiga"
    ],
    "pharmacology": "Quelantes de ferro (se flebotomia contraindicada)."
  },
  {
    "id": "172",
    "name": "Policitemia Vera",
    "category": "Hematológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Neoplasia mieloproliferativa caracterizada pela produção excessiva de hemácias, aumentando a viscosidade sanguínea.",
    "signsSymptoms": [
      "Prurido após banho quente",
      "Pletora facial",
      "Cefaleia",
      "Risco de trombose"
    ],
    "nanda": [
      "Risco de perfusão tissular ineficaz",
      "Prurido"
    ],
    "nic": [
      "Assistência na flebotomia",
      "Monitoração de sinais de trombose"
    ],
    "noc": [
      "Perfusão tissular",
      "Conforto"
    ],
    "pharmacology": "Hidroxicarbamida, AAS, Interferon."
  },
  {
    "id": "173",
    "name": "Mieloma Múltiplo",
    "category": "Oncologia",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Câncer de plasmócitos na medula óssea, produzindo proteínas anormais e causando destruição óssea.",
    "signsSymptoms": [
      "Dor óssea",
      "Fraturas patológicas",
      "Hipercalcemia",
      "Insuficiência renal"
    ],
    "nanda": [
      "Dor crônica",
      "Risco de lesão (fratura)"
    ],
    "nic": [
      "Manejo da dor",
      "Monitoração da função renal",
      "Prevenção de quedas"
    ],
    "noc": [
      "Nível de dor",
      "Função renal"
    ],
    "pharmacology": "Bortezomibe, Talidomida, Bisfosfonatos."
  },
  {
    "id": "174",
    "name": "Câncer de Pulmão",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Crescimento maligno de células nos tecidos pulmonares, fortemente associado ao tabagismo.",
    "signsSymptoms": [
      "Tosse persistente",
      "Hemoptise",
      "Dispneia",
      "Perda de peso"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Manejo da dispneia",
      "Apoio emocional",
      "Cuidados paliativos"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Qualidade de vida"
    ],
    "pharmacology": "Quimioterapia, Imunoterapia, Radioterapia."
  },
  {
    "id": "175",
    "name": "Câncer de Pâncreas",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Adenocarcinoma agressivo do pâncreas, com diagnóstico frequentemente tardio.",
    "signsSymptoms": [
      "Icterícia indolor",
      "Dor abdominal irradiando para o dorso",
      "Perda de peso rápida"
    ],
    "nanda": [
      "Dor crônica",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Manejo da dor oncológica",
      "Suporte nutricional",
      "Apoio ao fim de vida"
    ],
    "noc": [
      "Nível de dor",
      "Estado nutricional"
    ],
    "pharmacology": "Quimioterapia (Gencitabina)."
  },
  {
    "id": "177",
    "name": "Endometriose",
    "category": "Ginecologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Presença de tecido endometrial fora da cavidade uterina, causando inflamação crônica.",
    "signsSymptoms": [
      "Dismenorreia intensa",
      "Dor pélvica crônica",
      "Dispareunia",
      "Infertilidade"
    ],
    "nanda": [
      "Dor crônica",
      "Risco de infertilidade"
    ],
    "nic": [
      "Manejo da dor",
      "Apoio emocional"
    ],
    "noc": [
      "Nível de dor",
      "Saúde reprodutiva"
    ],
    "pharmacology": "Anticoncepcionais, Análogos do GnRH, Analgésicos."
  },
  {
    "id": "178",
    "name": "Síndrome dos Ovários Policísticos (SOP)",
    "category": "Ginecologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Distúrbio endócrino caracterizado por anovulação crônica e hiperandrogenismo.",
    "signsSymptoms": [
      "Irregularidade menstrual",
      "Hirsutismo",
      "Acne",
      "Obesidade"
    ],
    "nanda": [
      "Risco de glicemia instável",
      "Distúrbio na imagem corporal"
    ],
    "nic": [
      "Ensino sobre controle de peso",
      "Apoio na imagem corporal"
    ],
    "noc": [
      "Equilíbrio hormonal",
      "Imagem corporal"
    ],
    "pharmacology": "Anticoncepcionais, Metformina, Espironolactona."
  },
  {
    "id": "179",
    "name": "Doença Inflamatória Pélvica (DIP)",
    "category": "Ginecologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção ascendente do trato reprodutivo feminino, geralmente por ISTs.",
    "signsSymptoms": [
      "Dor abdominal inferior",
      "Corrimento vaginal anormal",
      "Febre",
      "Dispareunia"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de infecção"
    ],
    "nic": [
      "Administração de antibióticos",
      "Ensino sobre sexo seguro"
    ],
    "noc": [
      "Nível de dor",
      "Estado infeccioso"
    ],
    "pharmacology": "Ceftriaxona, Doxiciclina, Metronidazol."
  },
  {
    "id": "180",
    "name": "Gravidez Ectópica",
    "category": "Obstetrícia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Implantação do blastocisto fora da cavidade uterina, geralmente na tuba uterina.",
    "signsSymptoms": [
      "Dor abdominal unilateral",
      "Atraso menstrual",
      "Sangramento vaginal",
      "Sinais de choque (se ruptura)"
    ],
    "nanda": [
      "Risco de choque hipovolêmico",
      "Dor aguda"
    ],
    "nic": [
      "Monitoração hemodinâmica",
      "Preparação para cirurgia de urgência"
    ],
    "noc": [
      "Sinais vitais",
      "Nível de dor"
    ],
    "pharmacology": "Metotrexato (casos não rotos), Cirurgia."
  },
  {
    "id": "181",
    "name": "Fibrose Cística",
    "category": "Respiratório",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença genética que causa secreções mucosas espessas e viscosas, afetando pulmões e pâncreas.",
    "signsSymptoms": [
      "Tosse produtiva crônica",
      "Infecções pulmonares recorrentes",
      "Esteatorreia",
      "Suor salgado"
    ],
    "nanda": [
      "Desobstrução ineficaz de vias aéreas",
      "Nutrição desequilibrada"
    ],
    "nic": [
      "Fisioterapia respiratória",
      "Suplementação de enzimas pancreáticas"
    ],
    "noc": [
      "Estado respiratório: patência",
      "Estado nutricional"
    ],
    "pharmacology": "Dornase alfa, Antibióticos inalatórios, Enzimas pancreáticas."
  },
  {
    "id": "182",
    "name": "Sarcoidose",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença inflamatória multissistêmica caracterizada por granulomas não caseificantes, afetando principalmente os pulmões.",
    "signsSymptoms": [
      "Tosse seca",
      "Dispneia",
      "Eritema nodoso",
      "Linfadenopatia hilar"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Monitoração respiratória",
      "Ensino sobre a doença"
    ],
    "noc": [
      "Estado respiratório: ventilação",
      "Nível de fadiga"
    ],
    "pharmacology": "Corticosteroides."
  },
  {
    "id": "183",
    "name": "Hipertensão Pulmonar",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Aumento da pressão nas artérias pulmonares, levando a sobrecarga do ventrículo direito.",
    "signsSymptoms": [
      "Dispneia progressiva",
      "Fadiga",
      "Síncope",
      "Edema periférico"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Intolerância à atividade"
    ],
    "nic": [
      "Oxigenoterapia",
      "Manejo da energia"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Tolerância à atividade"
    ],
    "pharmacology": "Sildenafila, Bosentana, Diuréticos."
  },
  {
    "id": "184",
    "name": "Síndrome de Cushing",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Excesso crônico de glicocorticoides (cortisol), endógeno ou iatrogênico.",
    "signsSymptoms": [
      "Fácies em lua cheia",
      "Giba dorsal",
      "Estrias purpúreas",
      "Hipertensão",
      "Obesidade central"
    ],
    "nanda": [
      "Risco de infecção",
      "Distúrbio na imagem corporal"
    ],
    "nic": [
      "Monitoração da glicemia",
      "Cuidados com a pele",
      "Apoio emocional"
    ],
    "noc": [
      "Equilíbrio hormonal",
      "Imagem corporal"
    ],
    "pharmacology": "Inibidores da síntese de cortisol (Cetoconazol)."
  },
  {
    "id": "185",
    "name": "Doença de Addison",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Insuficiência adrenocortical primária, resultando em deficiência de cortisol e aldosterona.",
    "signsSymptoms": [
      "Hiperpigmentação da pele",
      "Hipotensão ortostática",
      "Fadiga",
      "Desejo por sal"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente",
      "Fadiga"
    ],
    "nic": [
      "Monitoração de sinais vitais",
      "Ensino sobre crise adrenal"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Sinais vitais"
    ],
    "pharmacology": "Hidrocortisona, Fludrocortisona."
  },
  {
    "id": "186",
    "name": "Diabetes Insipidus",
    "category": "Endócrino",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Deficiência de ADH ou resistência renal ao ADH, levando a poliúria maciça.",
    "signsSymptoms": [
      "Poliúria extrema",
      "Polidipsia intensa",
      "Urina muito diluída"
    ],
    "nanda": [
      "Déficit de volume de líquidos",
      "Risco de eletrólitos desequilibrados"
    ],
    "nic": [
      "Monitoração hídrica rigorosa",
      "Administração de vasopressina"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Equilíbrio hidroeletrolítico"
    ],
    "pharmacology": "Desmopressina (DDAVP)."
  },
  {
    "id": "187",
    "name": "Acromegalia",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Excesso de hormônio do crescimento (GH) após o fechamento das epífises ósseas.",
    "signsSymptoms": [
      "Crescimento de mãos e pés",
      "Prognatismo",
      "Macroglossia",
      "Cefaleia"
    ],
    "nanda": [
      "Distúrbio na imagem corporal",
      "Dor crônica"
    ],
    "nic": [
      "Apoio emocional",
      "Manejo da dor"
    ],
    "noc": [
      "Imagem corporal",
      "Nível de dor"
    ],
    "pharmacology": "Octreotida, Cabergolina."
  },
  {
    "id": "188",
    "name": "Osteoartrite (Artrose)",
    "category": "Reumatológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Degeneração da cartilagem articular e osso subjacente, associada ao envelhecimento e desgaste.",
    "signsSymptoms": [
      "Dor articular que piora com uso",
      "Rigidez matinal curta",
      "Crepitação"
    ],
    "nanda": [
      "Dor crônica",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Manejo da dor",
      "Promoção do exercício de baixo impacto"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "Paracetamol, AINEs tópicos, Condroitina/Glicosamina."
  },
  {
    "id": "189",
    "name": "Fibromialgia",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Síndrome de dor crônica generalizada associada a distúrbios do processamento sensorial da dor.",
    "signsSymptoms": [
      "Dor em pontos gatilho",
      "Fadiga",
      "Distúrbios do sono",
      "Névoa mental (fibrofog)"
    ],
    "nanda": [
      "Dor crônica",
      "Fadiga"
    ],
    "nic": [
      "Manejo da dor",
      "Higiene do sono",
      "Apoio psicossocial"
    ],
    "noc": [
      "Nível de dor",
      "Qualidade do sono"
    ],
    "pharmacology": "Amitriptilina, Pregabalina, Duloxetina."
  },
  {
    "id": "190",
    "name": "Espondilite Anquilosante",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença inflamatória crônica que afeta a coluna vertebral e articulações sacroilíacas, podendo levar à fusão óssea.",
    "signsSymptoms": [
      "Dor lombar inflamatória (melhora com exercício)",
      "Rigidez matinal prolongada",
      "Postura curvada"
    ],
    "nanda": [
      "Dor crônica",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Terapia com exercícios (alongamento)",
      "Ensino sobre postura"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "AINEs, Biológicos (Anti-TNF)."
  },
  {
    "id": "191",
    "name": "Escabiose",
    "category": "Dermatológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infestação cutânea pelo ácaro Sarcoptes scabiei.",
    "signsSymptoms": [
      "Prurido intenso noturno",
      "Túneis e pápulas",
      "Lesões em dobras"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Aplicação de escabicidas",
      "Ensino sobre higiene e lavagem de roupas"
    ],
    "noc": [
      "Integridade tissular",
      "Conforto"
    ],
    "pharmacology": "Permetrina, Ivermectina."
  },
  {
    "id": "192",
    "name": "Impétigo",
    "category": "Dermatológico",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção bacteriana superficial da pele (S. aureus ou S. pyogenes).",
    "signsSymptoms": [
      "Crostas melicéricas (cor de mel)",
      "Vesículas",
      "Prurido"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção (transmissão)"
    ],
    "nic": [
      "Cuidados com feridas",
      "Ensino sobre higiene das mãos"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Mupirocina tópica, Cefalexina."
  },
  {
    "id": "193",
    "name": "Erisipela",
    "category": "Dermatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Infecção bacteriana da derme superficial com envolvimento linfático, bem delimitada.",
    "signsSymptoms": [
      "Placa eritematosa brilhante e dolorosa",
      "Bordas elevadas",
      "Febre"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Repouso com membro elevado",
      "Administração de antibióticos"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de dor"
    ],
    "pharmacology": "Penicilina, Cefalosporinas."
  },
  {
    "id": "194",
    "name": "Herpes Zoster",
    "category": "Dermatológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Reativação do vírus Varicela-Zoster nos gânglios nervosos.",
    "signsSymptoms": [
      "Vesículas seguindo um dermátomo",
      "Dor neuropática intensa (queimação)",
      "Prurido"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Manejo da dor",
      "Cuidados com as lesões",
      "Monitoração de neuralgia pós-herpética"
    ],
    "noc": [
      "Nível de dor",
      "Integridade tissular"
    ],
    "pharmacology": "Aciclovir, Gabapentina (para dor)."
  },
  {
    "id": "195",
    "name": "Urticária Aguda",
    "category": "Dermatológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Reação de hipersensibilidade tipo I, causando liberação de histamina e edema dérmico.",
    "signsSymptoms": [
      "Urticária (pápulas eritematosas e pruriginosas)",
      "Angioedema (em alguns casos)"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Risco de resposta alérgica grave"
    ],
    "nic": [
      "Identificação de alérgenos",
      "Monitoração respiratória (se angioedema)"
    ],
    "noc": [
      "Nível de conforto",
      "Estado imune"
    ],
    "pharmacology": "Anti-histamínicos, Corticoides."
  },
  {
    "id": "196",
    "name": "Carcinoma Basocelular",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Câncer de pele mais comum, originado nas células basais da epiderme, associado à exposição solar.",
    "signsSymptoms": [
      "Pápula perolada",
      "Telangiectasias",
      "Ulceração central (ulcus rodens)"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Ensino sobre fotoproteção",
      "Cuidados pós-cirúrgicos"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: prevenção do câncer"
    ],
    "pharmacology": "Tratamento cirúrgico."
  },
  {
    "id": "197",
    "name": "Melanoma Maligno",
    "category": "Oncologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Câncer de pele agressivo originado nos melanócitos, com alto potencial de metástase.",
    "signsSymptoms": [
      "Lesão pigmentada assimétrica",
      "Bordas irregulares",
      "Cores variadas",
      "Diâmetro > 6mm"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Medo"
    ],
    "nic": [
      "Ensino sobre autoexame da pele",
      "Apoio emocional"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: controle do câncer"
    ],
    "pharmacology": "Cirurgia, Imunoterapia, Terapia alvo."
  },
  {
    "id": "198",
    "name": "Pênfigo Vulgar",
    "category": "Dermatológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune bolhosa grave, onde anticorpos atacam as desmossomos (adesão celular).",
    "signsSymptoms": [
      "Bolhas flácidas que rompem facilmente",
      "Erosões dolorosas em mucosas",
      "Sinal de Nikolsky positivo"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Cuidados com feridas extensas",
      "Prevenção de infecção secundária"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Corticosteroides em altas doses, Imunossupressores."
  },
  {
    "id": "199",
    "name": "Vitiligo",
    "category": "Dermatológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Perda progressiva de melanócitos, resultando em manchas acrômicas (brancas).",
    "signsSymptoms": [
      "Manchas brancas bem delimitadas",
      "Frequentemente simétricas"
    ],
    "nanda": [
      "Distúrbio na imagem corporal",
      "Baixa autoestima situacional"
    ],
    "nic": [
      "Apoio emocional",
      "Ensino sobre fotoproteção das áreas afetadas"
    ],
    "noc": [
      "Imagem corporal",
      "Autoestima"
    ],
    "pharmacology": "Corticoides tópicos, Fototerapia."
  },
  {
    "id": "200",
    "name": "Acne Vulgar",
    "category": "Dermatológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação da unidade pilossebácea, envolvendo hiperqueratinização, excesso de sebo e bactérias.",
    "signsSymptoms": [
      "Comedões (cravos)",
      "Pápulas",
      "Pústulas",
      "Cistos e cicatrizes"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Distúrbio na imagem corporal"
    ],
    "nic": [
      "Ensino sobre cuidados com a pele",
      "Apoio na imagem corporal"
    ],
    "noc": [
      "Integridade tissular",
      "Imagem corporal"
    ],
    "pharmacology": "Peróxido de Benzoíla, Antibióticos tópicos/orais, Isotretinoína."
  },
  {
    "id": "203",
    "name": "Insuficiência Renal Aguda (LRA)",
    "category": "Nefrológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Declínio rápido da função renal, resultando em retenção de escórias nitrogenadas e desequilíbrio hidroeletrolítico.",
    "signsSymptoms": [
      "Oligúria ou anúria",
      "Edema",
      "Confusão mental",
      "Arritmias (devido à hipercalemia)"
    ],
    "nanda": [
      "Volume de líquidos excessivo",
      "Risco de eletrólitos desequilibrados"
    ],
    "nic": [
      "Monitorização hídrica",
      "Controle de eletrólitos",
      "Terapia de substituição renal (se indicado)"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Função renal"
    ],
    "pharmacology": "Diuréticos de alça (Furosemida), Tratamento da hipercalemia (Gluconato de cálcio, Insulina + Glicose)."
  },
  {
    "id": "204",
    "name": "Choque Anafilático",
    "category": "Imunologia / Urgência",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Reação de hipersensibilidade sistêmica grave, rápida e potencialmente fatal, com liberação maciça de mediadores inflamatórios.",
    "signsSymptoms": [
      "Urticária",
      "Angioedema",
      "Broncoespasmo (estridor, sibilos)",
      "Hipotensão severa"
    ],
    "nanda": [
      "Risco de choque",
      "Padrão respiratório ineficaz",
      "Débito cardíaco diminuído"
    ],
    "nic": [
      "Manejo do choque: anafilaxia",
      "Controle de vias aéreas"
    ],
    "noc": [
      "Estado respiratório: patência das vias aéreas",
      "Efetividade da bomba cardíaca"
    ],
    "pharmacology": "Adrenalina IM (primeira linha), Anti-histamínicos, Corticoides, Broncodilatadores."
  },
  {
    "id": "206",
    "name": "Tricomoníase",
    "category": "IST",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção sexualmente transmissível causada pelo protozoário Trichomonas vaginalis, que afeta o trato geniturinário.",
    "signsSymptoms": [
      "Corrimento vaginal amarelo-esverdeado bolhoso",
      "Odor fétido",
      "Prurido vulvar",
      "Disúria",
      "Colo em framboesa"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Dor aguda",
      "Risco de infecção"
    ],
    "nic": [
      "Ensino: sexo seguro",
      "Administração de medicamentos",
      "Controle da dor"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: comportamento sexual",
      "Nível de dor"
    ],
    "pharmacology": "Metronidazol VO."
  },
  {
    "id": "207",
    "name": "Vaginose Bacteriana",
    "category": "Ginecologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Desequilíbrio da flora vaginal normal com diminuição de Lactobacillus e supercrescimento de bactérias anaeróbias (ex: Gardnerella vaginalis).",
    "signsSymptoms": [
      "Corrimento vaginal branco-acinzentado",
      "Odor de peixe (piora após relação sexual ou menstruação)",
      "Ausência de inflamação significativa"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Risco de infecção"
    ],
    "nic": [
      "Ensino: processo da doença",
      "Administração de medicamentos"
    ],
    "noc": [
      "Nível de conforto",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Metronidazol VO ou Gel vaginal, Clindamicina."
  },
  {
    "id": "208",
    "name": "Candidíase Vulvovaginal",
    "category": "Ginecologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção fúngica causada pelo crescimento excessivo de Candida albicans na mucosa vaginal.",
    "signsSymptoms": [
      "Prurido vulvar intenso",
      "Corrimento branco grumoso (aspecto de leite coalhado)",
      "Eritema",
      "Dispareunia"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Dor aguda",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle da dor",
      "Ensino: cuidados íntimos"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de dor",
      "Nível de conforto"
    ],
    "pharmacology": "Miconazol creme, Fluconazol VO."
  },
  {
    "id": "209",
    "name": "Faringoamigdalite Estreptocócica",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação da faringe e amígdalas causada pelo Streptococcus pyogenes (Grupo A), podendo levar a complicações como febre reumática.",
    "signsSymptoms": [
      "Dor de garganta intensa",
      "Febre alta",
      "Exsudato amigdaliano",
      "Linfonodomegalia cervical dolorosa",
      "Ausência de tosse"
    ],
    "nanda": [
      "Dor aguda",
      "Hipertermia",
      "Deglutição prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Controle da febre",
      "Terapia de deglutição"
    ],
    "noc": [
      "Nível de dor",
      "Termorregulação",
      "Estado de deglutição"
    ],
    "pharmacology": "Benzilpenicilina Benzatina IM, Amoxicilina VO."
  },
  {
    "id": "210",
    "name": "Otite Média Aguda (OMA)",
    "category": "Otorrinolaringologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Inflamação do ouvido médio, frequentemente associada a infecções das vias aéreas superiores e disfunção da tuba auditiva.",
    "signsSymptoms": [
      "Otalgia",
      "Febre",
      "Irritabilidade (em crianças)",
      "Otorreia (se perfuração timpânica)",
      "Hipoacusia"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de infecção",
      "Hipertermia"
    ],
    "nic": [
      "Controle da dor",
      "Administração de medicamentos",
      "Controle da febre"
    ],
    "noc": [
      "Nível de dor",
      "Estado infeccioso",
      "Termorregulação"
    ],
    "pharmacology": "Amoxicilina, Analgésicos (Ibuprofeno, Dipirona)."
  },
  {
    "id": "211",
    "name": "Gastroenterite Aguda",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Inflamação do trato gastrointestinal, geralmente de origem viral (Rotavírus, Norovírus) ou bacteriana, causando aumento da secreção ou diminuição da absorção.",
    "signsSymptoms": [
      "Diarreia aquosa",
      "Náuseas e vômitos",
      "Dor abdominal em cólica",
      "Febre baixa"
    ],
    "nanda": [
      "Diarreia",
      "Risco de volume de líquidos deficiente",
      "Náusea"
    ],
    "nic": [
      "Controle da diarreia",
      "Monitorização hídrica",
      "Controle de náuseas"
    ],
    "noc": [
      "Eliminação intestinal",
      "Equilíbrio hídrico",
      "Nível de náuseas e vômitos"
    ],
    "pharmacology": "Sais de Rehidratação Oral (SRO), Antieméticos (Ondansetrona), Zinco (em crianças)."
  },
  {
    "id": "212",
    "name": "Conjuntivite",
    "category": "Oftalmologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Inflamação da conjuntiva ocular, podendo ser viral, bacteriana ou alérgica.",
    "signsSymptoms": [
      "Hiperemia conjuntival (olho vermelho)",
      "Prurido",
      "Lacrimejamento",
      "Secreção (purulenta se bacteriana, aquosa se viral)"
    ],
    "nanda": [
      "Risco de infecção",
      "Conforto prejudicado",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Controle de infecção",
      "Cuidados com os olhos",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Controle de riscos",
      "Nível de conforto",
      "Conhecimento: controle da infecção"
    ],
    "pharmacology": "Colírios lubrificantes, Colírios antibióticos (se bacteriana), Compressas frias."
  },
  {
    "id": "215",
    "name": "Lombalgia Mecânica",
    "category": "Ortopedia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Dor na região lombar inferior, geralmente relacionada a tensão muscular, má postura ou esforço físico, sem compressão radicular.",
    "signsSymptoms": [
      "Dor lombar que piora com o movimento",
      "Espasmo muscular",
      "Limitação da amplitude de movimento"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Terapia com exercícios: mobilidade articular"
    ],
    "noc": [
      "Nível de dor",
      "Nível de mobilidade"
    ],
    "pharmacology": "Analgésicos (Dipirona, Paracetamol), AINEs (Ibuprofeno, Diclofenaco), Relaxantes musculares (Ciclobenzaprina)."
  },
  {
    "id": "217",
    "name": "Gonorreia",
    "category": "IST",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção bacteriana causada pela Neisseria gonorrhoeae, afetando principalmente o epitélio colunar da uretra, endocérvice, reto e faringe.",
    "signsSymptoms": [
      "Corrimento uretral purulento",
      "Disúria",
      "Corrimento endocervical",
      "Dor pélvica"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de infecção",
      "Padrão de sexualidade ineficaz"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: processo da doença",
      "Administração de medicamentos"
    ],
    "noc": [
      "Nível de dor",
      "Conhecimento: controle da doença"
    ],
    "pharmacology": "Ceftriaxona IM + Azitromicina VO (tratamento empírico frequentemente associado à Clamídia)."
  },
  {
    "id": "218",
    "name": "Infecção por Clamídia",
    "category": "IST",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção bacteriana intracelular obrigatória causada pela Chlamydia trachomatis. Frequentemente assintomática, mas pode causar DIP e infertilidade.",
    "signsSymptoms": [
      "Frequentemente assintomática",
      "Corrimento uretral ou vaginal claro/mucoide",
      "Disúria",
      "Sangramento intermenstrual"
    ],
    "nanda": [
      "Risco de infecção",
      "Conhecimento deficiente",
      "Risco de função reprodutiva alterada"
    ],
    "nic": [
      "Ensino: sexo seguro",
      "Administração de medicamentos",
      "Aconselhamento sexual"
    ],
    "noc": [
      "Conhecimento: comportamento sexual",
      "Estado de saúde reprodutiva"
    ],
    "pharmacology": "Azitromicina VO ou Doxiciclina VO."
  },
  {
    "id": "219",
    "name": "Herpes Genital",
    "category": "IST",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção viral crônica causada pelo Vírus Herpes Simplex (HSV-1 ou HSV-2), caracterizada por períodos de latência e reativação.",
    "signsSymptoms": [
      "Vesículas agrupadas sobre base eritematosa",
      "Úlceras dolorosas",
      "Ardor",
      "Prurido",
      "Linfadenopatia inguinal"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade da pele prejudicada",
      "Risco de solidão (estigma)"
    ],
    "nic": [
      "Controle da dor",
      "Cuidados com lesões",
      "Apoio emocional"
    ],
    "noc": [
      "Nível de dor",
      "Integridade tissular",
      "Bem-estar psicológico"
    ],
    "pharmacology": "Aciclovir, Valaciclovir ou Fanciclovir (antivirais orais)."
  },
  {
    "id": "220",
    "name": "Cistite (ITU Baixa)",
    "category": "Infectologia / Urologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Inflamação da bexiga, geralmente causada por infecção bacteriana ascendente (E. coli é o patógeno mais comum).",
    "signsSymptoms": [
      "Disúria",
      "Polaciúria",
      "Urgência miccional",
      "Dor suprapúbica",
      "Urina turva ou com odor forte"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Dor aguda",
      "Risco de infecção"
    ],
    "nic": [
      "Controle da eliminação urinária",
      "Controle da dor",
      "Administração de medicamentos"
    ],
    "noc": [
      "Eliminação urinária",
      "Nível de dor"
    ],
    "pharmacology": "Fosfomicina trometamol, Nitrofurantoína, Sulfametoxazol-Trimetoprima."
  },
  {
    "id": "222",
    "name": "Dermatite de Contato",
    "category": "Dermatologia / Imunologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Reação inflamatória da pele desencadeada pelo contato direto com uma substância irritante ou alérgeno.",
    "signsSymptoms": [
      "Eritema",
      "Prurido intenso",
      "Vesículas",
      "Descamação",
      "Edema localizado"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado",
      "Risco de infecção"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle do prurido",
      "Ensino: evitar alérgenos"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Corticoides tópicos, Anti-histamínicos orais, Emolientes."
  },
  {
    "id": "223",
    "name": "Doença do Refluxo Gastroesofágico (DRGE)",
    "category": "Gastroenterologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Retorno do conteúdo gástrico para o esôfago, causando sintomas incômodos e/ou complicações devido à falha do esfíncter esofágico inferior.",
    "signsSymptoms": [
      "Pirose (azia)",
      "Regurgitação ácida",
      "Dor torácica não cardíaca",
      "Tosse seca crônica"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de aspiração",
      "Nutrição desequilibrada: menos do que as necessidades corporais"
    ],
    "nic": [
      "Controle da dor",
      "Precauções contra aspiração",
      "Aconselhamento nutricional"
    ],
    "noc": [
      "Nível de dor",
      "Estado nutricional"
    ],
    "pharmacology": "Inibidores da Bomba de Prótons (IBP - Omeprazol, Pantoprazol), Antagonistas H2, Antiácidos."
  },
  {
    "id": "67",
    "name": "Hepatite A",
    "category": "Infecciosas",
    "ageGroups": [
      "Crianças",
      "Adultos"
    ],
    "pathophysiology": "Infecção viral aguda do fígado causada pelo vírus da hepatite A (HAV), transmitida principalmente pela via fecal-oral.",
    "signsSymptoms": [
      "Icterícia",
      "Fadiga extrema",
      "Náuseas e vômitos",
      "Dor abdominal (hipocôndrio direito)",
      "Urina escura (colúria)",
      "Fezes claras (acolia)"
    ],
    "nanda": [
      "Fadiga",
      "Nutrição desequilibrada: menor do que as necessidades corporais",
      "Risco de função hepática prejudicada"
    ],
    "nic": [
      "Controle de doenças transmissíveis",
      "Monitoração nutricional",
      "Educação em saúde: higiene e saneamento"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional",
      "Conhecimento: controle de infecção"
    ],
    "pharmacology": "Tratamento sintomático (Antieméticos, Analgésicos), evitar drogas hepatotóxicas."
  },
  {
    "id": "71",
    "name": "Hanseníase Paucibacilar",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença infectocontagiosa causada pelo Mycobacterium leprae, com baixa carga bacilar e resposta imune celular preservada.",
    "signsSymptoms": [
      "Manchas hipocrômicas ou eritematosas",
      "Perda de sensibilidade local",
      "Alopecia na lesão"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Percepção sensorial perturbada"
    ],
    "nic": [
      "Vigilância da pele",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: controle de infecção"
    ],
    "pharmacology": "Rifampicina, Dapsona (PQT-PB)."
  },
  {
    "id": "72",
    "name": "Hanseníase Multibacilar",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Forma contagiosa da hanseníase com alta carga bacilar e resposta imune celular deficiente.",
    "signsSymptoms": [
      "Infiltrações cutâneas",
      "Nódulos (hanseniomas)",
      "Espessamento de troncos nervosos",
      "Madarose"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Risco de lesão"
    ],
    "nic": [
      "Prevenção de úlceras por pressão",
      "Monitoração neurológica"
    ],
    "noc": [
      "Integridade tissular",
      "Função sensorial"
    ],
    "pharmacology": "Rifampicina, Dapsona, Clofazimina (PQT-MB)."
  },
  {
    "id": "73",
    "name": "Leishmaniose Tegumentar Americana",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença causada por protozoários do gênero Leishmania, transmitida por flebotomíneos.",
    "signsSymptoms": [
      "Úlceras com bordas elevadas (moldura)",
      "Lesões indolores",
      "Linfadenopatia local"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Cuidados com feridas",
      "Controle de infecção"
    ],
    "noc": [
      "Cicatrização de feridas",
      "Estado infeccioso"
    ],
    "pharmacology": "Antimonial pentavalente (Glucantime), Anfotericina B."
  },
  {
    "id": "75",
    "name": "Esquistossomose Mansoni",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Doença causada pelo Schistosoma mansoni, transmitida pelo contato com águas contendo cercárias.",
    "signsSymptoms": [
      "Dermatite cercariana (coceira)",
      "Febre de Katayama",
      "Hepatoesplenomegalia",
      "Ascite"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente",
      "Dor aguda"
    ],
    "nic": [
      "Monitoração hídrica",
      "Controle da dor"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Função hepática"
    ],
    "pharmacology": "Praziquantel."
  },
  {
    "id": "76",
    "name": "Doença de Chagas Aguda",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Infecção pelo Trypanosoma cruzi, transmitida pelas fezes do barbeiro ou via oral.",
    "signsSymptoms": [
      "Sinal de Romaña",
      "Chagoma de inoculação",
      "Febre prolongada",
      "Miocardite aguda"
    ],
    "nanda": [
      "Risco de débito cardíaco diminuído",
      "Hipertermia"
    ],
    "nic": [
      "Monitoração cardíaca",
      "Tratamento da febre"
    ],
    "noc": [
      "Sinais vitais",
      "Estado infeccioso"
    ],
    "pharmacology": "Benznidazol, Nifurtimox."
  },
  {
    "id": "77",
    "name": "Doença de Chagas Crônica",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Fase tardia da infecção pelo T. cruzi, com danos irreversíveis ao coração ou sistema digestivo.",
    "signsSymptoms": [
      "Insuficiência cardíaca",
      "Arritmias",
      "Megaesôfago",
      "Megacólon"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Constipação"
    ],
    "nic": [
      "Cuidados cardíacos",
      "Controle intestinal"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Eliminação intestinal"
    ],
    "pharmacology": "Tratamento das complicações (Diuréticos, IECA, Antiarrítmicos)."
  },
  {
    "id": "78",
    "name": "Toxoplasmose Congênita",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infecção fetal pelo Toxoplasma gondii via transplacentária.",
    "signsSymptoms": [
      "Tríade de Sabin (coriorretinite, calcificações, hidrocefalia)",
      "Microcefalia"
    ],
    "nanda": [
      "Crescimento e desenvolvimento retardados",
      "Risco de lesão"
    ],
    "nic": [
      "Monitoração neurológica",
      "Apoio à família"
    ],
    "noc": [
      "Desenvolvimento infantil",
      "Estado neurológico"
    ],
    "pharmacology": "Sulfadiazina, Pirimetamina, Ácido folínico."
  },
  {
    "id": "79",
    "name": "Criptococose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção fúngica sistêmica causada pelo Cryptococcus neoformans, comum em imunodeprimidos.",
    "signsSymptoms": [
      "Meningite (cefaleia, rigidez de nuca)",
      "Pneumonia fúngica",
      "Lesões cutâneas"
    ],
    "nanda": [
      "Capacidade adaptativa intracraniana diminuída",
      "Risco de infecção"
    ],
    "nic": [
      "Monitoração neurológica",
      "Administração de antifúngicos"
    ],
    "noc": [
      "Estado neurológico",
      "Estado infeccioso"
    ],
    "pharmacology": "Anfotericina B, Fluconazol."
  },
  {
    "id": "80",
    "name": "Paracoccidioidomicose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Micose sistêmica causada pelo Paracoccidioides brasiliensis, comum em trabalhadores rurais.",
    "signsSymptoms": [
      "Estomatite moriforme (lesões na boca)",
      "Linfadenopatia cervical",
      "Infiltrado pulmonar em asa de borboleta"
    ],
    "nanda": [
      "Integridade da mucosa oral prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Restauração da saúde bucal",
      "Monitoração respiratória"
    ],
    "noc": [
      "Integridade tissular",
      "Estado respiratório"
    ],
    "pharmacology": "Itraconazol, Sulfametoxazol + Trimetoprima."
  },
  {
    "id": "81",
    "name": "Histoplasmose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção fúngica causada pelo Histoplasma capsulatum, adquirida pela inalação de esporos em fezes de morcegos/aves.",
    "signsSymptoms": [
      "Febre",
      "Tosse seca",
      "Dor torácica",
      "Hepatoesplenomegalia (forma disseminada)"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Hipertermia"
    ],
    "nic": [
      "Monitoração respiratória",
      "Tratamento da febre"
    ],
    "noc": [
      "Estado respiratório",
      "Termorregulação"
    ],
    "pharmacology": "Itraconazol, Anfotericina B."
  },
  {
    "id": "82",
    "name": "Esporotricose",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Micose subcutânea causada pelo Sporothrix schenckii, transmitida por arranhadura de gatos ou espinhos.",
    "signsSymptoms": [
      "Nódulos subcutâneos em trajeto linfático",
      "Úlceras cutâneas"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Cuidados com feridas",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Integridade tissular",
      "Cicatrização de feridas"
    ],
    "pharmacology": "Itraconazol, Iodeto de potássio."
  },
  {
    "id": "87",
    "name": "Sífilis Primária",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Primeira fase da infecção pelo Treponema pallidum, caracterizada pelo cancro duro.",
    "signsSymptoms": [
      "Úlcera indolor de bordas endurecidas",
      "Linfadenopatia regional indolor"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Ensino: saúde sexual",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Conhecimento: saúde sexual"
    ],
    "pharmacology": "Penicilina G Benzatina."
  },
  {
    "id": "88",
    "name": "Sífilis Secundária",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Disseminação sistêmica do T. pallidum após semanas/meses da fase primária.",
    "signsSymptoms": [
      "Roséolas sifilíticas",
      "Sifilides palmoplantares",
      "Condiloma plano",
      "Micropoliadenopatia"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Vigilância da pele",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Integridade tissular",
      "Estado de imunidade"
    ],
    "pharmacology": "Penicilina G Benzatina."
  },
  {
    "id": "89",
    "name": "Sífilis Terciária",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Fase tardia da sífilis, ocorrendo anos após a infecção inicial não tratada.",
    "signsSymptoms": [
      "Gomas sifilíticas",
      "Neurossífilis",
      "Aneurisma de aorta",
      "Tabes dorsalis"
    ],
    "nanda": [
      "Confusão crônica",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Monitoração neurológica",
      "Monitoração cardíaca"
    ],
    "noc": [
      "Estado neurológico",
      "Sinais vitais"
    ],
    "pharmacology": "Penicilina G Cristalina (para neurossífilis)."
  },
  {
    "id": "91",
    "name": "Clamídia",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "IST causada pela Chlamydia trachomatis, frequentemente silenciosa.",
    "signsSymptoms": [
      "Corrimento claro",
      "Disúria leve",
      "Dor pélvica",
      "Infertilidade (sequela)"
    ],
    "nanda": [
      "Risco de infecção",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Aconselhamento sexual",
      "Ensino: processo da doença"
    ],
    "noc": [
      "Conhecimento: saúde sexual",
      "Estado de imunidade"
    ],
    "pharmacology": "Azitromicina, Doxiciclina."
  },
  {
    "id": "92",
    "name": "Cancro Mole",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "IST causada pelo Haemophilus ducreyi.",
    "signsSymptoms": [
      "Úlceras dolorosas e múltiplas",
      "Fundo purulento",
      "Bubo inguinal (linfadenite supurativa)"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Cuidados com feridas"
    ],
    "noc": [
      "Nível de dor",
      "Integridade tissular"
    ],
    "pharmacology": "Azitromicina, Ceftriaxona."
  },
  {
    "id": "93",
    "name": "Linfogranuloma Venéreo",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção sistêmica causada por sorotipos específicos de C. trachomatis.",
    "signsSymptoms": [
      "Pápula fugaz",
      "Linfadenopatia inguinal dolorosa (sinal do sulco)",
      "Proctite"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Controle da dor",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Doxiciclina, Eritromicina."
  },
  {
    "id": "94",
    "name": "Donovanose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença crônica progressiva causada pela Klebsiella granulomatis.",
    "signsSymptoms": [
      "Lesões ulcerovegetantes indolores",
      "Fundo vermelho vivo (carne crua)",
      "Bordas bem definidas"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Cuidados com feridas",
      "Ensino: saúde sexual"
    ],
    "noc": [
      "Integridade tissular",
      "Cicatrização de feridas"
    ],
    "pharmacology": "Azitromicina, Doxiciclina."
  },
  {
    "id": "96",
    "name": "Condiloma Acuminado (HPV)",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção pelo Papilomavírus Humano, causando verrugas genitais.",
    "signsSymptoms": [
      "Verrugas em aspecto de couve-flor",
      "Lesões únicas ou múltiplas",
      "Prurido ocasional"
    ],
    "nanda": [
      "Imagem corporal perturbada",
      "Risco de infecção"
    ],
    "nic": [
      "Apoio emocional",
      "Ensino: saúde sexual"
    ],
    "noc": [
      "Imagem corporal",
      "Conhecimento: saúde sexual"
    ],
    "pharmacology": "Podofilina, Imiquimode, Ácido Tricloroacético (ATA)."
  },
  {
    "id": "99",
    "name": "Tuberculose Ganglionar",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Forma extrapulmonar mais comum da tuberculose, afetando os linfonodos.",
    "signsSymptoms": [
      "Linfadenopatia indolor (cervical)",
      "Fistulização com saída de secreção caseosa"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Risco de infecção"
    ],
    "nic": [
      "Cuidados com feridas",
      "Controle de infecção"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Esquema RIPE."
  },
  {
    "id": "101",
    "name": "Dengue Clássica",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Doença viral transmitida pelo Aedes aegypti, causando resposta inflamatória sistêmica.",
    "signsSymptoms": [
      "Febre alta súbita",
      "Dor retro-orbital",
      "Mialgia e artralgia (dor nos ossos)",
      "Exantema"
    ],
    "nanda": [
      "Dor aguda",
      "Hipertermia"
    ],
    "nic": [
      "Controle da dor",
      "Tratamento da febre"
    ],
    "noc": [
      "Nível de dor",
      "Termorregulação"
    ],
    "pharmacology": "Dipirona, Paracetamol (evitar AINEs e AAS)."
  },
  {
    "id": "102",
    "name": "Dengue Hemorrágica",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Forma grave de dengue com extravasamento plasmático e distúrbios de coagulação.",
    "signsSymptoms": [
      "Prova do laço positiva",
      "Sangramentos (gengiva, nariz)",
      "Dor abdominal intensa",
      "Hipotensão"
    ],
    "nanda": [
      "Risco de choque",
      "Risco de sangramento"
    ],
    "nic": [
      "Monitoração hídrica",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Coagulação sanguínea"
    ],
    "pharmacology": "Hidratação venosa vigorosa."
  },
  {
    "id": "103",
    "name": "Zika Vírus",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção viral transmitida pelo Aedes aegypti, associada a complicações neurológicas.",
    "signsSymptoms": [
      "Exantema pruriginoso",
      "Febre baixa",
      "Conjuntivite não purulenta",
      "Artralgia leve"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Vigilância da pele",
      "Controle do prurido"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Anti-histamínicos, Sintomáticos."
  },
  {
    "id": "104",
    "name": "Chikungunya",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Doença viral transmitida pelo Aedes aegypti, caracterizada por artrite intensa.",
    "signsSymptoms": [
      "Febre alta",
      "Poliartralgia intensa e incapacitante",
      "Edema articular",
      "Exantema"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Terapia com exercícios: mobilidade articular"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "Analgésicos, AINEs (após fase aguda)."
  },
  {
    "id": "105",
    "name": "Febre Tifoide",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infecção sistêmica causada pela Salmonella Typhi, via fecal-oral.",
    "signsSymptoms": [
      "Febre em degraus",
      "Roséolas tíficas (abdome)",
      "Bradicardia relativa",
      "Constipação ou diarreia"
    ],
    "nanda": [
      "Hipertermia",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Tratamento da febre",
      "Monitoração hídrica"
    ],
    "noc": [
      "Termorregulação",
      "Estado infeccioso"
    ],
    "pharmacology": "Ciprofloxacino, Ceftriaxona."
  },
  {
    "id": "109",
    "name": "Ancilostomíase (Amarelão)",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infestação por Ancylostoma duodenale ou Necator americanus, que sugam sangue na mucosa intestinal.",
    "signsSymptoms": [
      "Anemia ferropriva grave",
      "Palidez",
      "Geofagia (desejo de comer terra)",
      "Fadiga"
    ],
    "nanda": [
      "Fadiga",
      "Nutrição desequilibrada: menos que as necessidades"
    ],
    "nic": [
      "Monitoração laboratorial",
      "Controle de nutrição"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional"
    ],
    "pharmacology": "Albendazol, Sulfato Ferroso."
  },
  {
    "id": "110",
    "name": "Oxiuríase",
    "category": "Infectologia",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Infestação pelo Enterobius vermicularis.",
    "signsSymptoms": [
      "Prurido anal noturno",
      "Irritabilidade",
      "Sono agitado"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Padrão de sono prejudicado"
    ],
    "nic": [
      "Ensino: higiene pessoal",
      "Administração de medicação"
    ],
    "noc": [
      "Nível de conforto",
      "Higiene"
    ],
    "pharmacology": "Mebendazol, Albendazol (repetir em 15 dias)."
  },
  {
    "id": "111",
    "name": "Teníase",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infestação intestinal pela Taenia solium (porco) ou Taenia saginata (boi).",
    "signsSymptoms": [
      "Eliminação de proglótides nas fezes",
      "Dor abdominal leve",
      "Alteração do apetite"
    ],
    "nanda": [
      "Risco de eliminação intestinal prejudicada",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Ensino: segurança alimentar",
      "Controle intestinal"
    ],
    "noc": [
      "Eliminação intestinal",
      "Conhecimento: controle de infecção"
    ],
    "pharmacology": "Praziquantel, Niclosamida."
  },
  {
    "id": "112",
    "name": "Cisticercose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Infestação tecidual por larvas de T. solium após ingestão de ovos.",
    "signsSymptoms": [
      "Neurocisticercose (convulsões, cefaleia)",
      "Nódulos subcutâneos"
    ],
    "nanda": [
      "Risco de capacidade adaptativa intracraniana diminuída",
      "Risco de lesão"
    ],
    "nic": [
      "Monitoração neurológica",
      "Controle de convulsão"
    ],
    "noc": [
      "Estado neurológico",
      "Controle de riscos"
    ],
    "pharmacology": "Albendazol, Praziquantel, Corticoides."
  },
  {
    "id": "113",
    "name": "Amebíase",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção pela Entamoeba histolytica, podendo causar colite ou abscessos hepáticos.",
    "signsSymptoms": [
      "Diarreia com muco e sangue",
      "Tenesmo",
      "Dor abdominal",
      "Febre (se abscesso)"
    ],
    "nanda": [
      "Diarreia",
      "Dor aguda"
    ],
    "nic": [
      "Controle intestinal",
      "Monitoração hídrica"
    ],
    "noc": [
      "Eliminação intestinal",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Metronidazol, Tinidazol."
  },
  {
    "id": "115",
    "name": "Brucelose",
    "category": "Infectologia",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Zoonose transmitida pelo contato com animais infectados ou leite não pasteurizado.",
    "signsSymptoms": [
      "Febre ondulante",
      "Sudorese com odor característico",
      "Artralgia",
      "Orquite"
    ],
    "nanda": [
      "Hipertermia",
      "Dor aguda"
    ],
    "nic": [
      "Tratamento da febre",
      "Controle de infecção"
    ],
    "noc": [
      "Termorregulação",
      "Estado infeccioso"
    ],
    "pharmacology": "Doxiciclina + Rifampicina."
  },
  {
    "id": "116",
    "name": "Febre Maculosa",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Doença causada pela Rickettsia rickettsii, transmitida pelo carrapato-estrela.",
    "signsSymptoms": [
      "Febre alta",
      "Cefaleia intensa",
      "Exantema maculopapular (centrípeto)",
      "Mialgia"
    ],
    "nanda": [
      "Hipertermia",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Monitoração de sinais vitais",
      "Tratamento da febre"
    ],
    "noc": [
      "Termorregulação",
      "Estado infeccioso"
    ],
    "pharmacology": "Doxiciclina (início precoce é vital)."
  },
  {
    "id": "118",
    "name": "Varíola dos Macacos (Mpox)",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Doença viral zoonótica causada pelo vírus Mpox.",
    "signsSymptoms": [
      "Lesões cutâneas (pápula, vesícula, pústula, crosta)",
      "Linfadenopatia",
      "Febre",
      "Prostração"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Dor aguda"
    ],
    "nic": [
      "Controle de infecção",
      "Vigilância da pele"
    ],
    "noc": [
      "Integridade tissular",
      "Estado infeccioso"
    ],
    "pharmacology": "Sintomáticos, Tecovirimat (casos graves)."
  },
  {
    "id": "119",
    "name": "COVID-19",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção respiratória causada pelo vírus SARS-CoV-2.",
    "signsSymptoms": [
      "Tosse",
      "Febre",
      "Anosmia (perda de olfato)",
      "Ageusia",
      "Dispneia (casos graves)"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Risco de infecção"
    ],
    "nic": [
      "Monitoração respiratória",
      "Precauções contra transmissão"
    ],
    "noc": [
      "Estado respiratório",
      "Estado infeccioso"
    ],
    "pharmacology": "Sintomáticos, Antivirais (Nirmatrelvir/Ritonavir), Corticoides (se O2 baixo)."
  },
  {
    "id": "120",
    "name": "Gripe (Influenza)",
    "category": "Infectologia",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Infecção viral aguda do sistema respiratório.",
    "signsSymptoms": [
      "Febre alta súbita",
      "Mialgia",
      "Cefaleia",
      "Tosse seca",
      "Prostração"
    ],
    "nanda": [
      "Hipertermia",
      "Fadiga"
    ],
    "nic": [
      "Tratamento da febre",
      "Monitoração respiratória"
    ],
    "noc": [
      "Termorregulação",
      "Nível de fadiga"
    ],
    "pharmacology": "Oseltamivir (Tamiflu), Sintomáticos."
  },
  {
    "id": "122",
    "name": "Abscesso Pulmonar",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Lesão necrosante do parênquima pulmonar contendo pus, geralmente por aspiração.",
    "signsSymptoms": [
      "Tosse com vômica (expectoração fétida)",
      "Febre persistente",
      "Suores noturnos"
    ],
    "nanda": [
      "Desobstrução ineficaz de vias aéreas",
      "Hipertermia"
    ],
    "nic": [
      "Drenagem postural",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório",
      "Estado infeccioso"
    ],
    "pharmacology": "Clindamicina, Amoxicilina + Clavulanato."
  },
  {
    "id": "123",
    "name": "Empiema Pleural",
    "category": "Respiratório",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Presença de pus no espaço pleural, geralmente como complicação de pneumonia.",
    "signsSymptoms": [
      "Dor torácica intensa",
      "Febre",
      "Dispneia",
      "Macicez à percussão"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Dor aguda"
    ],
    "nic": [
      "Monitoração respiratória",
      "Assistência em drenagem torácica"
    ],
    "noc": [
      "Estado respiratório",
      "Nível de dor"
    ],
    "pharmacology": "Antibióticos IV, Drenagem de tórax."
  },
  {
    "id": "124",
    "name": "Bronquiectasia",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Dilatação permanente e irreversível dos brônquios devido à destruição das paredes musculares e elásticas.",
    "signsSymptoms": [
      "Tosse crônica produtiva (muito catarro)",
      "Hemoptise recorrente",
      "Dispneia"
    ],
    "nanda": [
      "Desobstrução ineficaz de vias aéreas",
      "Risco de infecção"
    ],
    "nic": [
      "Drenagem postural",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório: permeabilidade",
      "Estado infeccioso"
    ],
    "pharmacology": "Antibióticos (se exacerbação), Broncodilatadores."
  },
  {
    "id": "126",
    "name": "Silicose",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Pneumoconiose causada pela inalação de poeira de sílica, levando à fibrose pulmonar.",
    "signsSymptoms": [
      "Dispneia progressiva",
      "Tosse seca",
      "Aumento do risco de tuberculose"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Fadiga"
    ],
    "nic": [
      "Monitoração respiratória",
      "Ensino: proteção respiratória"
    ],
    "noc": [
      "Estado respiratório",
      "Nível de fadiga"
    ],
    "pharmacology": "Tratamento de suporte, Oxigenoterapia."
  },
  {
    "id": "127",
    "name": "Asbestose",
    "category": "Respiratório",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Fibrose pulmonar causada pela inalação de fibras de asbesto (amianto).",
    "signsSymptoms": [
      "Dispneia de esforço",
      "Estertores crepitantes basais",
      "Baqueteamento digital"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Intolerância à atividade"
    ],
    "nic": [
      "Monitoração respiratória",
      "Promoção do exercício"
    ],
    "noc": [
      "Estado respiratório",
      "Tolerância à atividade"
    ],
    "pharmacology": "Suporte, Cessação do tabagismo."
  },
  {
    "id": "131",
    "name": "Esclerose Sistêmica (Esclerodermia)",
    "category": "Imunológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Doença autoimune caracterizada por fibrose excessiva da pele e órgãos internos.",
    "signsSymptoms": [
      "Esclerodactilia (pele endurecida)",
      "Fenômeno de Raynaud",
      "Facies de máscara",
      "Disfagia"
    ],
    "nanda": [
      "Integridade da pele prejudicada",
      "Deglutição prejudicada"
    ],
    "nic": [
      "Vigilância da pele",
      "Terapia de deglutição"
    ],
    "noc": [
      "Integridade tissular",
      "Estado de deglutição"
    ],
    "pharmacology": "Nifedipino (para Raynaud), Imunossupressores."
  },
  {
    "id": "132",
    "name": "Dermatomiosite",
    "category": "Imunológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Miopatia inflamatória idiopática com manifestações cutâneas características.",
    "signsSymptoms": [
      "Heliótropo (edema violáceo palpebral)",
      "Pápulas de Gottron",
      "Fraqueza muscular proximal"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Terapia com exercícios",
      "Vigilância da pele"
    ],
    "noc": [
      "Mobilidade",
      "Integridade tissular"
    ],
    "pharmacology": "Corticoides, Metotrexato, Imunoglobulina IV."
  },
  {
    "id": "133",
    "name": "Síndrome de Sjögren",
    "category": "Imunológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença autoimune que ataca glândulas exócrinas, causando secura.",
    "signsSymptoms": [
      "Xerostomia (boca seca)",
      "Xerofalmia (olho seco)",
      "Cáries frequentes"
    ],
    "nanda": [
      "Integridade da mucosa oral prejudicada",
      "Conforto prejudicado"
    ],
    "nic": [
      "Manutenção da saúde bucal",
      "Lubrificação ocular"
    ],
    "noc": [
      "Integridade tissular",
      "Nível de conforto"
    ],
    "pharmacology": "Lágrimas artificiais, Saliva artificial, Pilocarpina."
  },
  {
    "id": "135",
    "name": "Gota (Artrite Gotosa)",
    "category": "Reumatológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Deposição de cristais de urato monossódico nas articulações devido à hiperuricemia.",
    "signsSymptoms": [
      "Podagra (dor intensa no hálux)",
      "Tofos gotosos",
      "Eritema e edema articular"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: dieta"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "Colchicina, Alopurinol, AINEs."
  },
  {
    "id": "140",
    "name": "Hérnia de Disco",
    "category": "Ortopédico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Deslocamento do núcleo pulposo do disco intervertebral, comprimindo raízes nervosas.",
    "signsSymptoms": [
      "Lombociatalgia (dor irradiada para perna)",
      "Parestesia",
      "Fraqueza muscular"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Mecânica corporal"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "Analgésicos, Relaxantes musculares, Corticoides."
  },
  {
    "id": "141",
    "name": "Síndrome do Túnel do Carpo",
    "category": "Ortopédico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Compressão do nervo mediano no punho.",
    "signsSymptoms": [
      "Parestesia em 1º, 2º e 3º dedos",
      "Dor noturna no punho",
      "Atrofia tenar"
    ],
    "nanda": [
      "Dor crônica",
      "Percepção sensorial perturbada"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: ergonomia"
    ],
    "noc": [
      "Nível de dor",
      "Função sensorial"
    ],
    "pharmacology": "AINEs, Injeção de corticoide."
  },
  {
    "id": "142",
    "name": "Tendinite de De Quervain",
    "category": "Ortopédico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Inflamação dos tendões do polegar (abdutor longo e extensor curto).",
    "signsSymptoms": [
      "Dor na base do polegar",
      "Sinal de Finkelstein positivo",
      "Edema local"
    ],
    "nanda": [
      "Dor aguda",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Imobilização"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "AINEs, Repouso."
  },
  {
    "id": "143",
    "name": "Fascite Plantar",
    "category": "Ortopédico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Inflamação da fáscia plantar devido a microtraumas repetitivos.",
    "signsSymptoms": [
      "Dor no calcanhar ao dar os primeiros passos do dia",
      "Melhora com a caminhada"
    ],
    "nanda": [
      "Dor crônica",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Controle da dor",
      "Ensino: calçados adequados"
    ],
    "noc": [
      "Nível de dor",
      "Mobilidade"
    ],
    "pharmacology": "AINEs, Alongamentos."
  },
  {
    "id": "144",
    "name": "Escoliose Idiopática",
    "category": "Ortopédico",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Desvio lateral da coluna vertebral com rotação das vértebras.",
    "signsSymptoms": [
      "Assimetria de ombros/quadril",
      "Gibosidade dorsal (teste de Adams)",
      "Muitas vezes indolor"
    ],
    "nanda": [
      "Mobilidade física prejudicada",
      "Imagem corporal perturbada"
    ],
    "nic": [
      "Monitoração da coluna",
      "Melhora da imagem corporal"
    ],
    "noc": [
      "Mobilidade",
      "Imagem corporal"
    ],
    "pharmacology": "Uso de coletes, Cirurgia (em casos graves)."
  },
  {
    "id": "152",
    "name": "Enxaqueca (Migrânea)",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Cefaleia primária recorrente associada a alterações vasculares e neuronais no cérebro.",
    "signsSymptoms": [
      "Cefaleia unilateral pulsátil",
      "Fotofobia e fonofobia",
      "Náuseas e vômitos",
      "Aura (em alguns casos)"
    ],
    "nanda": [
      "Dor aguda",
      "Náusea"
    ],
    "nic": [
      "Controle da dor",
      "Controle de náusea",
      "Redução de estímulos ambientais"
    ],
    "noc": [
      "Nível de dor",
      "Nível de náusea"
    ],
    "pharmacology": "Triptanos (Sumatriptano), AINEs, Profilaxia (Propranolol, Topiramato)."
  },
  {
    "id": "153",
    "name": "Cefaleia Tensional",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Tipo mais comum de cefaleia, associada a estresse e tensão muscular pericraniana.",
    "signsSymptoms": [
      "Dor em aperto/pressão (capacete)",
      "Bilateral",
      "Intensidade leve a moderada"
    ],
    "nanda": [
      "Dor aguda",
      "Ansiedade"
    ],
    "nic": [
      "Controle da dor",
      "Técnicas de relaxamento"
    ],
    "noc": [
      "Nível de dor",
      "Nível de estresse"
    ],
    "pharmacology": "Analgésicos simples (Dipirona, Paracetamol), AINEs."
  },
  {
    "id": "154",
    "name": "Cefaleia em Salvas",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Cefaleia trigêmino-autonômica caracterizada por ataques de dor excruciante.",
    "signsSymptoms": [
      "Dor orbitária unilateral intensa",
      "Lacrimejamento",
      "Rinorreia ipsilateral",
      "Ptose"
    ],
    "nanda": [
      "Dor aguda",
      "Padrão de sono prejudicado"
    ],
    "nic": [
      "Controle da dor",
      "Oxigenoterapia"
    ],
    "noc": [
      "Nível de dor",
      "Conforto"
    ],
    "pharmacology": "Oxigênio 100%, Sumatriptano injetável, Verapamil (profilaxia)."
  },
  {
    "id": "156",
    "name": "Paralisia Facial de Bell",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Disfunção aguda do nervo facial (VII par), provavelmente por reativação viral.",
    "signsSymptoms": [
      "Fraqueza súbita de um lado da face",
      "Impossibilidade de fechar o olho",
      "Boca desviada"
    ],
    "nanda": [
      "Imagem corporal perturbada",
      "Risco de lesão da córnea"
    ],
    "nic": [
      "Lubrificação ocular",
      "Melhora da imagem corporal"
    ],
    "noc": [
      "Imagem corporal",
      "Integridade tissular"
    ],
    "pharmacology": "Prednisona, Aciclovir."
  },
  {
    "id": "158",
    "name": "Anemia Megaloblástica",
    "category": "Hematológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Deficiência de Vitamina B12 ou Ácido Fólico, afetando a síntese de DNA.",
    "signsSymptoms": [
      "Glossite (língua careca)",
      "Parestesias (se falta B12)",
      "Fadiga",
      "Palidez"
    ],
    "nanda": [
      "Fadiga",
      "Percepção sensorial perturbada"
    ],
    "nic": [
      "Monitoração laboratorial",
      "Ensino: dieta"
    ],
    "noc": [
      "Nível de fadiga",
      "Estado nutricional"
    ],
    "pharmacology": "Cianocobalamina (B12), Ácido Fólico."
  },
  {
    "id": "161",
    "name": "Trombose Venosa Profunda (TVP)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Formação de coágulo em veias profundas, geralmente nos membros inferiores.",
    "signsSymptoms": [
      "Edema unilateral",
      "Dor na panturrilha",
      "Calor e eritema local",
      "Sinal de Homans"
    ],
    "nanda": [
      "Perfusão tissular periférica ineficaz",
      "Dor aguda",
      "Risco de embolia"
    ],
    "nic": [
      "Cuidados circulatórios",
      "Monitoração de sinais vitais",
      "Administração de anticoagulantes"
    ],
    "noc": [
      "Perfusão tissular",
      "Nível de dor"
    ],
    "pharmacology": "Heparina, Varfarina, Rivaroxabana."
  },
  {
    "id": "169",
    "name": "Choque Hipovolêmico",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Estado de hipoperfusão tecidual devido à perda crítica de volume intravascular (sangue ou fluidos).",
    "signsSymptoms": [
      "Hipotensão",
      "Taquicardia",
      "Pele fria e pegajosa",
      "Oligúria",
      "Alteração do nível de consciência"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Volume de líquidos deficiente",
      "Risco de perfusão tissular ineficaz"
    ],
    "nic": [
      "Terapia intravenosa",
      "Monitoração de sinais vitais",
      "Controle de sangramento"
    ],
    "noc": [
      "Sinais vitais",
      "Equilíbrio hídrico",
      "Perfusão tissular"
    ],
    "pharmacology": "Cristaloides, Hemoderivados."
  },
  {
    "id": "171",
    "name": "Choque Séptico",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Disfunção orgânica ameaçadora à vida causada por uma resposta desregulada do hospedeiro à infecção, com hipotensão persistente.",
    "signsSymptoms": [
      "Hipotensão refratária a fluidos",
      "Lactato elevado",
      "Febre ou hipotermia",
      "Taquicardia"
    ],
    "nanda": [
      "Risco de choque",
      "Risco de perfusão tissular ineficaz"
    ],
    "nic": [
      "Controle de infecção",
      "Terapia intravenosa",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Sinais vitais",
      "Perfusão tissular"
    ],
    "pharmacology": "Vasopressores (Noradrenalina), Antibióticos de amplo espectro, Cristaloides."
  },
  {
    "id": "172",
    "name": "Choque Cardiogênico",
    "category": "Emergência",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Falha primária da bomba cardíaca resultando em débito cardíaco inadequado e hipoperfusão tecidual.",
    "signsSymptoms": [
      "Hipotensão",
      "Congestão pulmonar (estertores)",
      "Pele fria",
      "Oligúria"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Risco de choque"
    ],
    "nic": [
      "Cuidados cardíacos agudos",
      "Monitoração hemodinâmica"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Sinais vitais"
    ],
    "pharmacology": "Inotrópicos (Dobutamina), Vasopressores."
  },
  {
    "id": "173",
    "name": "Crise Hipertensiva (Emergência)",
    "category": "Emergência",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Elevação súbita e grave da PA (>180/120 mmHg) com lesão aguda de órgão-alvo.",
    "signsSymptoms": [
      "Cefaleia intensa",
      "Confusão mental",
      "Dor torácica",
      "Dispneia",
      "Déficit neurológico"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Dor aguda"
    ],
    "nic": [
      "Monitoração da pressão arterial",
      "Administração de medicação IV"
    ],
    "noc": [
      "Sinais vitais",
      "Estado neurológico"
    ],
    "pharmacology": "Nitroprussiato de Sódio, Nitroglicerina, Labetalol."
  },
  {
    "id": "174",
    "name": "Edema Agudo de Pulmão",
    "category": "Emergência",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Acúmulo súbito de líquido nos alvéolos pulmonares, geralmente por falha ventricular esquerda.",
    "signsSymptoms": [
      "Dispneia extrema",
      "Expectoração rósea espumosa",
      "Cianose",
      "Agitação"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Monitoração respiratória",
      "Oxigenoterapia",
      "Posicionamento adequado"
    ],
    "noc": [
      "Estado respiratório: troca de gases",
      "Sinais vitais"
    ],
    "pharmacology": "Furosemida IV, Morfina, Nitroglicerina, O2."
  },
  {
    "id": "176",
    "name": "Estado Hiperglicêmico Hiperosmolar (EHH)",
    "category": "Emergência",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Complicação do DM2 com hiperglicemia extrema e desidratação, sem acidose significativa.",
    "signsSymptoms": [
      "Glicemia > 600 mg/dL",
      "Desidratação profunda",
      "Alteração do nível de consciência"
    ],
    "nanda": [
      "Volume de líquidos deficiente",
      "Confusão aguda"
    ],
    "nic": [
      "Monitoração hídrica",
      "Terapia intravenosa"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Estado neurológico"
    ],
    "pharmacology": "Hidratação venosa vigorosa, Insulina."
  },
  {
    "id": "177",
    "name": "Hipoglicemia Grave",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Queda crítica dos níveis de glicose no sangue (< 54 mg/dL), afetando a função cerebral.",
    "signsSymptoms": [
      "Sudorese fria",
      "Tremores",
      "Confusão mental",
      "Convulsão",
      "Coma"
    ],
    "nanda": [
      "Risco de glicemia instável",
      "Risco de lesão"
    ],
    "nic": [
      "Monitoração da glicemia",
      "Administração de glicose"
    ],
    "noc": [
      "Nível de glicemia",
      "Estado neurológico"
    ],
    "pharmacology": "Glicose 50% IV, Glucagon."
  },
  {
    "id": "178",
    "name": "Crise Tireotóxica (Tempestade)",
    "category": "Emergência",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Estado hipermetabólico extremo e fatal devido ao excesso de hormônios tireoidianos.",
    "signsSymptoms": [
      "Febre alta",
      "Taquicardia extrema",
      "Arritmias",
      "Agitação/Delirium"
    ],
    "nanda": [
      "Hipertermia",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Tratamento da febre",
      "Monitoração cardíaca"
    ],
    "noc": [
      "Termorregulação",
      "Sinais vitais"
    ],
    "pharmacology": "Propiltiouracil, Betabloqueadores, Iodo, Corticoides."
  },
  {
    "id": "179",
    "name": "Coma Mixedematoso",
    "category": "Emergência",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Forma extrema e fatal de hipotireoidismo não tratado.",
    "signsSymptoms": [
      "Hipotermia",
      "Bradicardia",
      "Hipoventilação",
      "Edema generalizado",
      "Coma"
    ],
    "nanda": [
      "Hipotermia",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Aquecimento passivo",
      "Monitoração respiratória"
    ],
    "noc": [
      "Termorregulação",
      "Estado neurológico"
    ],
    "pharmacology": "Levotiroxina IV, Hidrocortisona."
  },
  {
    "id": "180",
    "name": "Insuficiência Adrenal Aguda (Crise)",
    "category": "Emergência",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Deficiência súbita de cortisol, levando ao colapso circulatório.",
    "signsSymptoms": [
      "Hipotensão severa",
      "Choque inexplicável",
      "Dor abdominal",
      "Vômitos"
    ],
    "nanda": [
      "Risco de choque",
      "Volume de líquidos deficiente"
    ],
    "nic": [
      "Terapia intravenosa",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Sinais vitais",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Hidrocortisona IV, Hidratação salina."
  },
  {
    "id": "181",
    "name": "Intoxicação por Organofosforados",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Inibição irreversível da acetilcolinesterase, causando excesso de acetilcolina.",
    "signsSymptoms": [
      "Miose (pupila em ponta de alfinete)",
      "Sialorreia",
      "Broncorreia",
      "Bradicardia",
      "Fasciculações"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Risco de aspiração"
    ],
    "nic": [
      "Monitoração respiratória",
      "Descontaminação"
    ],
    "noc": [
      "Estado respiratório",
      "Sinais vitais"
    ],
    "pharmacology": "Atropina (atropinização), Pralidoxima."
  },
  {
    "id": "182",
    "name": "Intoxicação por Paracetamol",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Sobrecarga do metabolismo hepático levando à necrose centrolobular.",
    "signsSymptoms": [
      "Náuseas",
      "Vômitos",
      "Dor no hipocôndrio direito",
      "Icterícia (tardia)"
    ],
    "nanda": [
      "Risco de função hepática prejudicada",
      "Náusea"
    ],
    "nic": [
      "Monitoração laboratorial",
      "Administração de antídoto"
    ],
    "noc": [
      "Função hepática",
      "Estado infeccioso"
    ],
    "pharmacology": "N-acetilcisteína (NAC)."
  },
  {
    "id": "183",
    "name": "Intoxicação por Opioides",
    "category": "Emergência",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Depressão do SNC e do centro respiratório por agonistas opioides.",
    "signsSymptoms": [
      "Tríade: Miose, Depressão respiratória, Coma"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Risco de aspiração"
    ],
    "nic": [
      "Monitoração respiratória",
      "Administração de antídoto"
    ],
    "noc": [
      "Estado respiratório",
      "Estado neurológico"
    ],
    "pharmacology": "Naloxona."
  },
  {
    "id": "184",
    "name": "Acidente Botrópico (Jararaca)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Ação proteolítica, coagulante e hemorrágica do veneno.",
    "signsSymptoms": [
      "Dor e edema local intenso",
      "Equimose",
      "Bolhas",
      "Gengivorragia"
    ],
    "nanda": [
      "Dor aguda",
      "Integridade tissular prejudicada",
      "Risco de sangramento"
    ],
    "nic": [
      "Cuidados com feridas",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Integridade tissular",
      "Coagulação sanguínea"
    ],
    "pharmacology": "Soro Antibotrópico (SAB)."
  },
  {
    "id": "185",
    "name": "Acidente Crotálico (Cascavel)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Ação neurotóxica, miotóxica e coagulante do veneno.",
    "signsSymptoms": [
      "Facies miastênica (ptose)",
      "Diplopia",
      "Urina escura (mioglobinúria)",
      "Dor muscular"
    ],
    "nanda": [
      "Risco de perfusão renal ineficaz",
      "Risco de aspiração"
    ],
    "nic": [
      "Monitoração hídrica",
      "Monitoração neurológica"
    ],
    "noc": [
      "Função renal",
      "Estado neurológico"
    ],
    "pharmacology": "Soro Anticrotálico (SAC)."
  },
  {
    "id": "186",
    "name": "Acidente Elapídico (Coral)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Ação neurotóxica potente que bloqueia a junção neuromuscular.",
    "signsSymptoms": [
      "Ptose palpebral",
      "Dificuldade de deglutição",
      "Paralisia respiratória rápida"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Risco de aspiração"
    ],
    "nic": [
      "Vigilância respiratória",
      "Monitoração neurológica"
    ],
    "noc": [
      "Estado respiratório",
      "Estado neurológico"
    ],
    "pharmacology": "Soro Antielapídico (SAE)."
  },
  {
    "id": "187",
    "name": "Escorpionismo (Escorpião)",
    "category": "Emergência",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Ação neurotóxica que estimula a liberação de catecolaminas e acetilcolina.",
    "signsSymptoms": [
      "Dor local intensa",
      "Sudorese",
      "Vômitos profusos",
      "Arritmias",
      "Edema pulmonar (em crianças)"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Controle da dor",
      "Monitoração cardíaca"
    ],
    "noc": [
      "Nível de dor",
      "Sinais vitais"
    ],
    "pharmacology": "Soro Antiescorpiônico (SAEsc), Analgésicos."
  },
  {
    "id": "188",
    "name": "Loxoscelismo (Aranha Marrom)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Ação dermonecrótica e hemolítica do veneno.",
    "signsSymptoms": [
      "Placa livedoide (marmorizada)",
      "Necrose cutânea tardia",
      "Hemólise (forma sistêmica)"
    ],
    "nanda": [
      "Integridade tissular prejudicada",
      "Risco de perfusão renal ineficaz"
    ],
    "nic": [
      "Cuidados com feridas",
      "Monitoração laboratorial"
    ],
    "noc": [
      "Integridade tissular",
      "Função renal"
    ],
    "pharmacology": "Soro Antiloxoscélico, Corticoides."
  },
  {
    "id": "189",
    "name": "Latrodectismo (Viúva Negra)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Ação neurotóxica que causa liberação massiva de neurotransmissores.",
    "signsSymptoms": [
      "Dor local",
      "Contratura muscular abdominal (abdome em tábua)",
      "Sudorese",
      "Facies latrodectismica"
    ],
    "nanda": [
      "Dor aguda",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Controle da dor",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Nível de dor",
      "Sinais vitais"
    ],
    "pharmacology": "Soro Antilatrodectus, Gluconato de Cálcio."
  },
  {
    "id": "190",
    "name": "Afogamento",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Aspiração de líquido que causa lavagem do surfactante, edema pulmonar e hipóxia.",
    "signsSymptoms": [
      "Cianose",
      "Espuma na boca/nariz",
      "Apneia",
      "Bradicardia"
    ],
    "nanda": [
      "Troca de gases prejudicada",
      "Risco de aspiração"
    ],
    "nic": [
      "Ressuscitação cardiopulmonar",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório",
      "Sinais vitais"
    ],
    "pharmacology": "Oxigênio, Suporte ventilatório."
  },
  {
    "id": "191",
    "name": "Hipotermia Acidental",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Queda da temperatura central < 35°C, reduzindo o metabolismo e função orgânica.",
    "signsSymptoms": [
      "Tremores (fase inicial)",
      "Confusão mental",
      "Bradicardia",
      "Rigidez muscular"
    ],
    "nanda": [
      "Hipotermia",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Aquecimento passivo e ativo",
      "Monitoração cardíaca"
    ],
    "noc": [
      "Termorregulação",
      "Sinais vitais"
    ],
    "pharmacology": "Fluidos aquecidos IV."
  },
  {
    "id": "192",
    "name": "Insolação (Heat Stroke)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Falha na termorregulação devido à exposição excessiva ao calor, com temperatura > 40°C.",
    "signsSymptoms": [
      "Pele quente e seca",
      "Confusão mental/Coma",
      "Taquicardia",
      "Anidrose"
    ],
    "nanda": [
      "Hipertermia",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Resfriamento externo",
      "Monitoração hídrica"
    ],
    "noc": [
      "Termorregulação",
      "Estado neurológico"
    ],
    "pharmacology": "Hidratação venosa."
  },
  {
    "id": "194",
    "name": "Obstrução de Vias Aéreas por Corpo Estranho (OVACE)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Bloqueio mecânico da laringe ou traqueia por objeto ou alimento.",
    "signsSymptoms": [
      "Sinal universal de asfixia (mãos no pescoço)",
      "Incapacidade de falar/tossir",
      "Cianose"
    ],
    "nanda": [
      "Desobstrução ineficaz de vias aéreas",
      "Risco de sufocação"
    ],
    "nic": [
      "Manejo de vias aéreas: desobstrução",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório: permeabilidade"
    ],
    "pharmacology": "Manobra de Heimlich."
  },
  {
    "id": "195",
    "name": "Parada Cardiorrespiratória (PCR)",
    "category": "Emergência",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Cessação súbita da atividade mecânica do coração e da respiração espontânea.",
    "signsSymptoms": [
      "Inconsciência",
      "Ausência de pulso central",
      "Apneia ou gasping"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Padrão respiratório ineficaz"
    ],
    "nic": [
      "Ressuscitação cardiopulmonar",
      "Manejo de desfibrilação"
    ],
    "noc": [
      "Sinais vitais",
      "Estado circulatório"
    ],
    "pharmacology": "Adrenalina, Amiodarona, Vasopressina."
  },
  {
    "id": "196",
    "name": "Acidente Vascular Cerebral Isquêmico (AVCi)",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Oclusão de uma artéria cerebral por trombo ou êmbolo, causando isquemia e infarto tecidual.",
    "signsSymptoms": [
      "Hemiparesia súbita",
      "Desvio de rima labial",
      "Afasia/Disartria",
      "Heminegligência"
    ],
    "nanda": [
      "Risco de perfusão tissular cerebral ineficaz",
      "Mobilidade física prejudicada"
    ],
    "nic": [
      "Monitoração neurológica",
      "Monitoração de sinais vitais",
      "Prevenção de aspiração"
    ],
    "noc": [
      "Estado neurológico",
      "Capacidade de comunicação"
    ],
    "pharmacology": "Trombolíticos (rtPA), AAS, Estatinas."
  },
  {
    "id": "197",
    "name": "Acidente Vascular Cerebral Hemorrágico (AVCh)",
    "category": "Neurológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Ruptura de um vaso sanguíneo cerebral, causando sangramento intracraniano e aumento da pressão.",
    "signsSymptoms": [
      "Cefaleia súbita e intensa (a pior da vida)",
      "Vômitos",
      "Rebaixamento do nível de consciência"
    ],
    "nanda": [
      "Capacidade adaptativa intracraniana diminuída",
      "Risco de perfusão tissular cerebral ineficaz"
    ],
    "nic": [
      "Monitoração neurológica",
      "Monitoração da pressão arterial",
      "Posicionamento da cabeça (30°)"
    ],
    "noc": [
      "Estado neurológico",
      "Sinais vitais"
    ],
    "pharmacology": "Controle da PA, Manitol (se HIC)."
  },
  {
    "id": "199",
    "name": "Hemorragia Digestiva Baixa (HDB)",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Sangramento originado abaixo do ângulo de Treitz (intestino delgado, cólon ou reto).",
    "signsSymptoms": [
      "Hematoquezia (sangue vivo nas fezes)",
      "Enterorragia",
      "Dor abdominal"
    ],
    "nanda": [
      "Risco de choque",
      "Eliminação intestinal prejudicada"
    ],
    "nic": [
      "Monitoração hídrica",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Equilíbrio hídrico",
      "Eliminação intestinal"
    ],
    "pharmacology": "Suporte volêmico."
  },
  {
    "id": "200",
    "name": "Obstrução Intestinal",
    "category": "Gastrointestinal",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Interrupção do fluxo do conteúdo intestinal por causas mecânicas ou funcionais.",
    "signsSymptoms": [
      "Parada de eliminação de gases/fezes",
      "Vômitos fecaloides",
      "Dor abdominal em cólica",
      "Distensão"
    ],
    "nanda": [
      "Eliminação intestinal prejudicada",
      "Dor aguda",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Manejo gastrointestinal",
      "Inserção de sonda nasogástrica",
      "Monitoração hídrica"
    ],
    "noc": [
      "Eliminação intestinal",
      "Nível de dor"
    ],
    "pharmacology": "Hidratação venosa, Jejum."
  },
  {
    "id": "201",
    "name": "Pneumonia Aspirativa",
    "category": "Respiratório",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Inflamação pulmonar causada pela entrada de conteúdo gástrico ou orofaríngeo nas vias aéreas.",
    "signsSymptoms": [
      "Tosse após alimentação",
      "Febre",
      "Dispneia",
      "Saturação de O2 baixa"
    ],
    "nanda": [
      "Risco de aspiração",
      "Troca de gases prejudicada"
    ],
    "nic": [
      "Prevenção de aspiração",
      "Monitoração respiratória"
    ],
    "noc": [
      "Estado respiratório",
      "Estado de deglutição"
    ],
    "pharmacology": "Clindamicina, Amoxicilina + Clavulanato."
  },
  {
    "id": "203",
    "name": "Asma Exacerbada",
    "category": "Respiratório",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Crise aguda de broncoespasmo e inflamação das vias aéreas.",
    "signsSymptoms": [
      "Sibilos audíveis",
      "Tosse seca",
      "Opressão torácica",
      "Uso de musculatura acessória"
    ],
    "nanda": [
      "Padrão respiratório ineficaz",
      "Troca de gases prejudicada"
    ],
    "nic": [
      "Monitoração respiratória",
      "Manejo de medicação",
      "Posicionamento"
    ],
    "noc": [
      "Estado respiratório",
      "Sinais vitais"
    ],
    "pharmacology": "Salbutamol, Fenoterol, Prednisona."
  },
  {
    "id": "204",
    "name": "Insuficiência Cardíaca Descompensada",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Piora súbita da função cardíaca levando à congestão sistêmica ou pulmonar.",
    "signsSymptoms": [
      "Dispneia de esforço/repouso",
      "Ortopneia",
      "Edema de membros inferiores",
      "Turgência jugular"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Excesso de volume de líquidos"
    ],
    "nic": [
      "Monitoração cardíaca",
      "Monitoração hídrica",
      "Manejo de eletrólitos"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Furosemida IV, Vasodilatadores, Inotrópicos."
  },
  {
    "id": "206",
    "name": "Angina Instável",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Isquemia miocárdica aguda sem necrose, mas com alto risco de evolução para IAM.",
    "signsSymptoms": [
      "Dor torácica ao repouso ou que piorou de padrão",
      "Duração > 20 min"
    ],
    "nanda": [
      "Dor aguda",
      "Risco de débito cardíaco diminuído"
    ],
    "nic": [
      "Monitoração cardíaca",
      "Controle da dor"
    ],
    "noc": [
      "Nível de dor",
      "Sinais vitais"
    ],
    "pharmacology": "AAS, Nitratos, Betabloqueadores, Heparina."
  },
  {
    "id": "207",
    "name": "Arritmias Cardíacas (Fibrilação Atrial)",
    "category": "Cardiovascular",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Atividade elétrica atrial desorganizada e rápida, levando a contração ineficaz.",
    "signsSymptoms": [
      "Palpitações",
      "Pulso irregular",
      "Tontura",
      "Dispneia"
    ],
    "nanda": [
      "Débito cardíaco diminuído",
      "Risco de perfusão tissular cerebral ineficaz"
    ],
    "nic": [
      "Monitoração cardíaca",
      "Ensino: medicação"
    ],
    "noc": [
      "Eficácia da bomba cardíaca",
      "Sinais vitais"
    ],
    "pharmacology": "Varfarina/Rivaroxabana (anticoagulação), Amiodarona, Digoxina."
  },
  {
    "id": "208",
    "name": "Síncope Vasovagal",
    "category": "Neurológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Perda súbita e transitória da consciência por reflexo mediado pelo nervo vago, causando bradicardia e hipotensão.",
    "signsSymptoms": [
      "Desmaio precedido de pródromos (náusea, palidez, sudorese)",
      "Recuperação rápida"
    ],
    "nanda": [
      "Risco de quedas",
      "Risco de perfusão tissular cerebral ineficaz"
    ],
    "nic": [
      "Prevenção de quedas",
      "Monitoração de sinais vitais"
    ],
    "noc": [
      "Conhecimento: prevenção de quedas",
      "Sinais vitais"
    ],
    "pharmacology": "Hidratação, Manobras de contrapressão."
  },
  {
    "id": "209",
    "name": "Delirium (Estado Confusional Agudo)",
    "category": "Neurológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Disfunção cerebral aguda e flutuante, geralmente secundária a infecção, drogas ou distúrbios metabólicos.",
    "signsSymptoms": [
      "Início súbito",
      "Desatenção",
      "Pensamento desorganizado",
      "Alteração do nível de consciência"
    ],
    "nanda": [
      "Confusão aguda",
      "Risco de lesão"
    ],
    "nic": [
      "Orientação da realidade",
      "Manejo ambiental: segurança",
      "Monitoração neurológica"
    ],
    "noc": [
      "Estado cognitivo",
      "Segurança"
    ],
    "pharmacology": "Haloperidol (se agitação grave), Tratamento da causa base."
  },
  {
    "id": "212",
    "name": "Transtorno do Pânico",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Ataques de pânico recorrentes e inesperados, com medo persistente de novos ataques.",
    "signsSymptoms": [
      "Palpitações",
      "Sensação de morte iminente",
      "Sudorese",
      "Falta de ar"
    ],
    "nanda": [
      "Medo",
      "Ansiedade"
    ],
    "nic": [
      "Redução da ansiedade",
      "Apoio emocional"
    ],
    "noc": [
      "Autocontrole do medo",
      "Nível de ansiedade"
    ],
    "pharmacology": "Paroxetina, Alprazolam."
  },
  {
    "id": "215",
    "name": "Transtorno do Espectro Autista (TEA)",
    "category": "Neurológico",
    "ageGroups": [
      "Pediátrico"
    ],
    "pathophysiology": "Transtorno do neurodesenvolvimento que afeta a comunicação e interação social.",
    "signsSymptoms": [
      "Dificuldade de contato visual",
      "Comportamentos repetitivos",
      "Atraso na fala",
      "Hipersensibilidade sensorial"
    ],
    "nanda": [
      "Interação social prejudicada",
      "Comunicação verbal prejudicada"
    ],
    "nic": [
      "Melhora da socialização",
      "Estimulação da comunicação",
      "Apoio à família"
    ],
    "noc": [
      "Habilidades de interação social",
      "Desenvolvimento infantil"
    ],
    "pharmacology": "Risperidona (se agressividade), Terapias multidisciplinares."
  },
  {
    "id": "216",
    "name": "TDAH",
    "category": "Neurológico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Transtorno neurobiológico caracterizado por desatenção, hiperatividade e impulsividade.",
    "signsSymptoms": [
      "Dificuldade em manter o foco",
      "Inquietude motora",
      "Interrompe os outros",
      "Esquecimentos"
    ],
    "nanda": [
      "Risco de atraso no desenvolvimento",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Modificação do comportamento",
      "Ensino: estratégias de foco"
    ],
    "noc": [
      "Autocontrole do TDAH",
      "Desempenho escolar/laboral"
    ],
    "pharmacology": "Metilfenidato (Ritalina), Lisdexanfetamina (Venvanse)."
  },
  {
    "id": "217",
    "name": "Anorexia Nervosa",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Pediátrico",
      "Adulto"
    ],
    "pathophysiology": "Transtorno alimentar caracterizado por restrição calórica extrema e medo intenso de ganhar peso.",
    "signsSymptoms": [
      "Baixo peso extremo",
      "Distorção da imagem corporal",
      "Amenorreia",
      "Lanugo"
    ],
    "nanda": [
      "Nutrição desequilibrada: menos que as necessidades",
      "Imagem corporal perturbada"
    ],
    "nic": [
      "Manejo de transtornos alimentares",
      "Monitoração nutricional",
      "Melhora da imagem corporal"
    ],
    "noc": [
      "Estado nutricional",
      "Imagem corporal"
    ],
    "pharmacology": "Suplementação nutricional, Antidepressivos."
  },
  {
    "id": "218",
    "name": "Bulimia Nervosa",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Episódios de compulsão alimentar seguidos por métodos compensatórios inadequados (vômitos, laxantes).",
    "signsSymptoms": [
      "Erosão do esmalte dentário",
      "Sinal de Russell (calos nos dedos)",
      "Oscilações de peso"
    ],
    "nanda": [
      "Risco de volume de líquidos deficiente",
      "Imagem corporal perturbada"
    ],
    "nic": [
      "Manejo de transtornos alimentares",
      "Apoio emocional"
    ],
    "noc": [
      "Autocontrole do transtorno alimentar",
      "Equilíbrio eletrolítico"
    ],
    "pharmacology": "Fluoxetina."
  },
  {
    "id": "219",
    "name": "Alcoolismo (Dependência)",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Doença crônica caracterizada pelo consumo incontrolável de álcool e dependência física/psicológica.",
    "signsSymptoms": [
      "Tolerância",
      "Abstinência (tremores, sudorese)",
      "Perda de controle sobre o uso"
    ],
    "nanda": [
      "Enfrentamento ineficaz",
      "Risco de função hepática prejudicada"
    ],
    "nic": [
      "Tratamento por uso de substâncias",
      "Apoio à família"
    ],
    "noc": [
      "Autocontrole do uso de álcool",
      "Saúde emocional"
    ],
    "pharmacology": "Naltrexona, Dissulfiram, Acamprosato."
  },
  {
    "id": "220",
    "name": "Tabagismo",
    "category": "Psiquiátrico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Dependência química da nicotina, levando a diversas doenças sistêmicas.",
    "signsSymptoms": [
      "Desejo intenso de fumar (craving)",
      "Tosse crônica",
      "Dentes amarelados"
    ],
    "nanda": [
      "Comportamento de saúde propenso a risco",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Cessação do tabagismo",
      "Ensino: riscos à saúde"
    ],
    "noc": [
      "Cessação do tabagismo",
      "Conhecimento: estilo de vida saudável"
    ],
    "pharmacology": "Bupropiona, Vareniclina, Reposição de nicotina (adesivo/goma)."
  },
  {
    "id": "229",
    "name": "Doença de Cushing",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Excesso crônico de cortisol, geralmente por tumor hipofisário produtor de ACTH.",
    "signsSymptoms": [
      "Facies em \"lua cheia\"",
      "Giba dorsal",
      "Estrias violáceas",
      "Hipertensão"
    ],
    "nanda": [
      "Imagem corporal perturbada",
      "Risco de infecção",
      "Excesso de volume de líquidos"
    ],
    "nic": [
      "Melhora da imagem corporal",
      "Proteção contra infecção"
    ],
    "noc": [
      "Imagem corporal",
      "Estado infeccioso"
    ],
    "pharmacology": "Cirurgia, Inibidores da síntese de cortisol."
  },
  {
    "id": "233",
    "name": "Síndrome de Ovários Policísticos (SOP)",
    "category": "Endócrino",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Disfunção endócrina caracterizada por anovulação crônica e hiperandrogenismo.",
    "signsSymptoms": [
      "Irregularidade menstrual",
      "Hirsutismo (pelos excessivos)",
      "Acne",
      "Resistência à insulina"
    ],
    "nanda": [
      "Imagem corporal perturbada",
      "Risco de glicemia instável"
    ],
    "nic": [
      "Ensino: processo da doença",
      "Manejo de peso"
    ],
    "noc": [
      "Imagem corporal",
      "Conhecimento: controle do diabetes"
    ],
    "pharmacology": "Anticoncepcionais, Metformina, Espironolactona."
  },
  {
    "id": "235",
    "name": "Miomatose Uterina",
    "category": "Ginecológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Tumores benignos do músculo liso do útero (leiomiomas).",
    "signsSymptoms": [
      "Menorragia (fluxo intenso)",
      "Aumento do volume abdominal",
      "Dor pélvica"
    ],
    "nanda": [
      "Risco de sangramento",
      "Dor aguda"
    ],
    "nic": [
      "Monitoração de sinais vitais",
      "Manejo da dor"
    ],
    "noc": [
      "Coagulação sanguínea",
      "Nível de dor"
    ],
    "pharmacology": "Análogos de GnRH, Anti-inflamatórios."
  },
  {
    "id": "237",
    "name": "Hiperplasia Benigna da Próstata (HBP)",
    "category": "Urológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Crescimento não canceroso da próstata que comprime a uretra.",
    "signsSymptoms": [
      "Hesitação urinária",
      "Jato fraco",
      "Nictúria",
      "Sensação de esvaziamento incompleto"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Retenção urinária"
    ],
    "nic": [
      "Cuidados na retenção urinária",
      "Monitoração hídrica"
    ],
    "noc": [
      "Eliminação urinária",
      "Sintomas de gravidade da HBP"
    ],
    "pharmacology": "Tansulosina, Finasterida."
  },
  {
    "id": "240",
    "name": "Câncer de Colo do Útero",
    "category": "Oncológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Neoplasia maligna associada à infecção persistente pelo HPV.",
    "signsSymptoms": [
      "Sangramento pós-coito",
      "Corrimento vaginal anormal",
      "Dor pélvica"
    ],
    "nanda": [
      "Risco de sangramento",
      "Conhecimento deficiente"
    ],
    "nic": [
      "Ensino: saúde sexual",
      "Apoio emocional"
    ],
    "noc": [
      "Conhecimento: controle do câncer",
      "Saúde reprodutiva"
    ],
    "pharmacology": "Quimioterapia, Radioterapia."
  },
  {
    "id": "242",
    "name": "Câncer Colorretal",
    "category": "Oncológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Neoplasia maligna que se desenvolve no cólon ou reto, muitas vezes a partir de pólipos.",
    "signsSymptoms": [
      "Alteração do hábito intestinal",
      "Sangue nas fezes",
      "Anemia ferropriva inexplicada"
    ],
    "nanda": [
      "Eliminação intestinal prejudicada",
      "Risco de volume de líquidos deficiente"
    ],
    "nic": [
      "Manejo intestinal",
      "Apoio emocional"
    ],
    "noc": [
      "Eliminação intestinal",
      "Estado nutricional"
    ],
    "pharmacology": "5-Fluorouracil, Oxaliplatina."
  },
  {
    "id": "247",
    "name": "Hemofilia",
    "category": "Hematológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Distúrbio hereditário da coagulação por deficiência de fatores (VIII ou IX).",
    "signsSymptoms": [
      "Hemartroses (sangramento articular)",
      "Hematomas musculares",
      "Sangramento prolongado"
    ],
    "nanda": [
      "Risco de sangramento",
      "Dor aguda"
    ],
    "nic": [
      "Prevenção de sangramento",
      "Manejo da dor"
    ],
    "noc": [
      "Coagulação sanguínea",
      "Nível de dor"
    ],
    "pharmacology": "Reposição de Fator VIII ou IX."
  },
  {
    "id": "249",
    "name": "Glaucoma",
    "category": "Oftalmológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Aumento da pressão intraocular causando dano progressivo ao nervo óptico.",
    "signsSymptoms": [
      "Perda de visão periférica (visão em túnel)",
      "Dor ocular (agudo)",
      "Halos coloridos"
    ],
    "nanda": [
      "Percepção sensorial perturbada: visual",
      "Risco de quedas"
    ],
    "nic": [
      "Ensino: administração de colírio",
      "Prevenção de quedas"
    ],
    "noc": [
      "Função sensorial: visão",
      "Conhecimento: controle do glaucoma"
    ],
    "pharmacology": "Timolol, Latanoprosta."
  },
  {
    "id": "251",
    "name": "Degeneração Macular Relacionada à Idade (DMRI)",
    "category": "Oftalmológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Deterioração da mácula (centro da retina), causando perda da visão central.",
    "signsSymptoms": [
      "Visão central borrada",
      "Linhas retas parecem onduladas",
      "Mancha escura no centro da visão"
    ],
    "nanda": [
      "Percepção sensorial perturbada: visual",
      "Déficit no autocuidado"
    ],
    "nic": [
      "Melhora da comunicação: visual",
      "Apoio emocional"
    ],
    "noc": [
      "Função sensorial: visão",
      "Adaptação à deficiência visual"
    ],
    "pharmacology": "Vitaminas antioxidantes, Anti-VEGF (injeção intravítrea)."
  },
  {
    "id": "253",
    "name": "Labirintite / Vertigem Posicional Paroxística Benigna (VPPB)",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Disfunção do sistema vestibular no ouvido interno.",
    "signsSymptoms": [
      "Vertigem (sensação de giro)",
      "Náuseas/Vômitos",
      "Nistagmo",
      "Desequilíbrio"
    ],
    "nanda": [
      "Risco de quedas",
      "Náusea"
    ],
    "nic": [
      "Prevenção de quedas",
      "Manejo da náusea"
    ],
    "noc": [
      "Equilíbrio",
      "Nível de náusea"
    ],
    "pharmacology": "Betahistina, Cinarizina, Manobras de reposicionamento."
  },
  {
    "id": "255",
    "name": "Faringite / Amigdalite Bacteriana",
    "category": "Otorrinolaringológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Inflamação da faringe/amígdalas, frequentemente por Streptococcus pyogenes.",
    "signsSymptoms": [
      "Odinofagia (dor ao engolir)",
      "Febre",
      "Exsudato purulento",
      "Linfadenopatia cervical"
    ],
    "nanda": [
      "Dor aguda",
      "Deglutição prejudicada"
    ],
    "nic": [
      "Manejo da dor",
      "Administração de antibióticos"
    ],
    "noc": [
      "Nível de dor",
      "Estado infeccioso"
    ],
    "pharmacology": "Penicilina Benzatina, Amoxicilina."
  },
  {
    "id": "258",
    "name": "Urticária",
    "category": "Dermatológico",
    "ageGroups": [
      "Todas"
    ],
    "pathophysiology": "Reação vascular da derme caracterizada por pápulas edematosas e pruriginosas (urticas).",
    "signsSymptoms": [
      "Urticas evanescentes",
      "Prurido intenso",
      "Angioedema (em alguns casos)"
    ],
    "nanda": [
      "Conforto prejudicado",
      "Integridade da pele prejudicada"
    ],
    "nic": [
      "Manejo do prurido",
      "Identificação de gatilhos"
    ],
    "noc": [
      "Nível de conforto",
      "Integridade tissular"
    ],
    "pharmacology": "Anti-histamínicos (Loratadina, Cetirizina)."
  },
  {
    "id": "261",
    "name": "Insuficiência Renal Crônica (IRC)",
    "category": "Urológico",
    "ageGroups": [
      "Adulto",
      "Idoso"
    ],
    "pathophysiology": "Perda progressiva e irreversível da função renal por mais de 3 meses.",
    "signsSymptoms": [
      "Edema",
      "Hipertensão",
      "Anemia",
      "Prurido urêmico",
      "Oligúria (fase terminal)"
    ],
    "nanda": [
      "Excesso de volume de líquidos",
      "Risco de eletrólitos desequilibrados"
    ],
    "nic": [
      "Manejo hídrico",
      "Manejo eletrolítico",
      "Manejo da diálise"
    ],
    "noc": [
      "Função renal",
      "Equilíbrio hídrico"
    ],
    "pharmacology": "Eritropoetina, Quelantes de fósforo, Diuréticos."
  },
  {
    "id": "262",
    "name": "Litíase Urinária (Cálculo Renal)",
    "category": "Urológico",
    "ageGroups": [
      "Adulto"
    ],
    "pathophysiology": "Formação de cristais no trato urinário que podem causar obstrução.",
    "signsSymptoms": [
      "Cólica renal intensa irradiada para região inguinal",
      "Hematúria",
      "Náuseas"
    ],
    "nanda": [
      "Dor aguda",
      "Eliminação urinária prejudicada"
    ],
    "nic": [
      "Manejo da dor",
      "Monitoração hídrica",
      "Ensino: dieta"
    ],
    "noc": [
      "Nível de dor",
      "Eliminação urinária"
    ],
    "pharmacology": "Analgésicos potentes, Tansulosina."
  },
  {
    "id": "263",
    "name": "Incontinência Urinária",
    "category": "Urológico",
    "ageGroups": [
      "Idoso"
    ],
    "pathophysiology": "Perda involuntária de urina por disfunção do esfíncter ou da bexiga.",
    "signsSymptoms": [
      "Perda de urina ao tossir/espirrar (esforço)",
      "Desejo súbito e incontrolável (urgência)"
    ],
    "nanda": [
      "Eliminação urinária prejudicada",
      "Risco de integridade da pele prejudicada"
    ],
    "nic": [
      "Treinamento da bexiga",
      "Exercícios de assoalho pélvico (Kegel)"
    ],
    "noc": [
      "Continência urinária",
      "Autocuidado: eliminação"
    ],
    "pharmacology": "Oxibutinina, Mirabegrona."
  }
];
