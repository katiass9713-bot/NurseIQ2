export interface Drug {
  name: string;
  class: string;
  indication: string;
  dilution: string;
  dosage: string;
  nursingCare: string[];
}

export const pharmacology: Drug[] = [
  {
    name: 'Amiodarona',
    class: 'Antiarrítmico Classe III',
    indication: 'Arritmias ventriculares e supraventriculares.',
    dilution: 'Diluir em Soro Glicosado 5% (SG5%). Incompatível com Soro Fisiológico (SF).',
    dosage: 'Ataque: 150-300mg em 10-20 min. Manutenção: 900mg em 24h.',
    nursingCare: [
      'Monitorar ECG contínuo.',
      'Monitorar pressão arterial (risco de hipotensão).',
      'Administrar preferencialmente em acesso venoso central.'
    ]
  },
  {
    name: 'Ceftriaxona',
    class: 'Antibiótico (Cefalosporina de 3ª Geração)',
    indication: 'Infecções bacterianas graves (Pneumonia, Meningite, ITU).',
    dilution: 'EV: Reconstituir com AD e diluir em 50-100ml de SF ou SG5%. IM: Reconstituir com lidocaína 1%.',
    dosage: '1g a 2g a cada 12h ou 24h.',
    nursingCare: [
      'Verificar histórico de alergia a penicilinas.',
      'Não misturar com soluções contendo cálcio (Ringer Lactato).'
    ]
  },
  {
    name: 'Furosemida',
    class: 'Diurético de Alça',
    indication: 'Edema agudo de pulmão, ICC, Crise hipertensiva.',
    dilution: 'Pode ser administrado direto (bolus lento) ou diluído em SF/SG5%.',
    dosage: '20mg a 40mg EV ou VO.',
    nursingCare: [
      'Monitorar balanço hídrico.',
      'Monitorar níveis de potássio (risco de hipocalemia).',
      'Monitorar pressão arterial.'
    ]
  },
  {
    name: 'Morfina',
    class: 'Analgésico Opioide',
    indication: 'Dor intensa, Infarto Agudo do Miocárdio.',
    dilution: 'Diluir 1ml (10mg) em 9ml de AD ou SF para obter 1mg/ml.',
    dosage: '2mg a 5mg EV lento.',
    nursingCare: [
      'Monitorar frequência respiratória (risco de depressão respiratória).',
      'Ter Naloxona disponível como antídoto.',
      'Monitorar nível de consciência.'
    ]
  },
  {
    name: 'Adrenalina (Epinefrina)',
    class: 'Agonista Adrenérgico',
    indication: 'Parada cardiorrespiratória, Anafilaxia, Choque séptico.',
    dilution: 'PCR: Direto (bolus). Anafilaxia: IM. Choque: Diluir em SF ou SG5% para infusão contínua.',
    dosage: 'PCR: 1mg a cada 3-5 min. Anafilaxia: 0,3-0,5mg IM.',
    nursingCare: [
      'Monitorar frequência cardíaca e pressão arterial.',
      'Verificar patência do acesso venoso (risco de necrose por extravasamento).',
      'Monitorar ECG continuamente.'
    ]
  },
  {
    name: 'Noradrenalina',
    class: 'Vasopressor',
    indication: 'Choque hipovolêmico, séptico ou cardiogênico com hipotensão grave.',
    dilution: 'Diluir em SG5% (preferencialmente) para evitar oxidação. SF também é usado.',
    dosage: '0,05 a 2 mcg/kg/min em infusão contínua.',
    nursingCare: [
      'Administrar obrigatoriamente em acesso venoso central.',
      'Monitorar pressão arterial invasiva (PAM) se possível.',
      'Monitorar perfusão periférica.'
    ]
  },
  {
    name: 'Dopamina',
    class: 'Inotrópico / Vasopressor',
    indication: 'Choque, Hipotensão, Baixo débito cardíaco.',
    dilution: 'Diluir em SF ou SG5%.',
    dosage: 'Dose dopaminérgica (1-5 mcg/kg/min), beta (5-10), alfa (>10).',
    nursingCare: [
      'Monitorar frequência cardíaca (risco de taquiarritmias).',
      'Monitorar débito urinário.',
      'Monitorar local da punção.'
    ]
  },
  {
    name: 'Insulina Regular',
    class: 'Hormônio Pancreático (Ação Rápida)',
    indication: 'Diabetes Mellitus, Cetoacidose diabética, Hipercalemia.',
    dilution: 'Pode ser administrada SC ou EV (diluída em SF).',
    dosage: 'Conforme esquema de glicemia capilar ou protocolo de bomba.',
    nursingCare: [
      'Monitorar glicemia capilar rigorosamente.',
      'Observar sinais de hipoglicemia (sudorese, tremor, confusão).',
      'No uso EV, monitorar potássio sérico.'
    ]
  },
  {
    name: 'Heparina Sódica',
    class: 'Anticoagulante',
    indication: 'Trombose Venosa Profunda, Embolia Pulmonar, IAM.',
    dilution: 'EV: Diluir em SF ou SG5% para infusão contínua.',
    dosage: 'Bolus inicial seguido de manutenção conforme TTPA.',
    nursingCare: [
      'Monitorar TTPA regularmente.',
      'Observar sinais de sangramento (gengivorragia, hematúria).',
      'Evitar injeções IM durante o uso.'
    ]
  },
  {
    name: 'Midazolam',
    class: 'Benzodiazepínico (Sedativo)',
    indication: 'Sedação consciente, Indução anestésica, Estado de mal epiléptico.',
    dilution: 'Pode ser administrado puro ou diluído em SF/SG5%.',
    dosage: 'Dose dependente do objetivo clínico.',
    nursingCare: [
      'Monitorar padrão respiratório e oximetria.',
      'Ter Flumazenil disponível (antídoto).',
      'Monitorar pressão arterial.'
    ]
  },
  {
    name: 'Diazepam',
    class: 'Benzodiazepínico (Ansiolítico/Anticonvulsivante)',
    indication: 'Ansiedade, Convulsões, Espasmos musculares.',
    dilution: 'Administrar EV direto e lento. Não diluir (risco de precipitação).',
    dosage: '5mg a 10mg EV ou VO.',
    nursingCare: [
      'Monitorar nível de sedação.',
      'Monitorar frequência respiratória.',
      'Não misturar com outros medicamentos na mesma seringa.'
    ]
  },
  {
    name: 'Fenitoína',
    class: 'Anticonvulsivante',
    indication: 'Crises convulsivas, Estado de mal epiléptico.',
    dilution: 'Diluir APENAS em Soro Fisiológico (SF). Cristaliza em SG5%.',
    dosage: 'Ataque: 15-20mg/kg. Manutenção: 100mg a cada 8h.',
    nursingCare: [
      'Administrar em veia calibrosa (risco de flebite/síndrome da luva roxa).',
      'Monitorar ECG e PA durante a infusão (risco de arritmias/hipotensão).',
      'Lavar o acesso com SF antes e depois.'
    ]
  },
  {
    name: 'Metoclopramida',
    class: 'Antiemético / Procinético',
    indication: 'Náuseas, Vômitos, Refluxo gastroesofágico.',
    dilution: 'Pode ser administrado direto ou diluído em SF/SG5%.',
    dosage: '10mg EV ou VO.',
    nursingCare: [
      'Observar sinais extrapiramidais (acatisia, distonia).',
      'Administrar EV de forma lenta.',
      'Monitorar nível de consciência em idosos.'
    ]
  },
  {
    name: 'Dipirona',
    class: 'Analgésico / Antipirético',
    indication: 'Dor e febre.',
    dilution: 'Diluir em 10-20ml de AD ou SF para administração EV.',
    dosage: '500mg a 1g a cada 6h.',
    nursingCare: [
      'Administrar EV de forma muito lenta (risco de hipotensão súbita).',
      'Monitorar temperatura corporal.',
      'Verificar histórico de alergia.'
    ]
  },
  {
    name: 'Dobutamina',
    class: 'Inotrópico',
    indication: 'Insuficiência cardíaca aguda, choque cardiogênico.',
    dilution: 'Diluir em SF ou SG 5%. Padrão: 250 mg em 250 mL (1000 mcg/mL).',
    dosage: '2 a 20 mcg/kg/min (infusão contínua).',
    nursingCare: [
      'Monitorar FC, PA e débito urinário.',
      'Risco de taquiarritmias.',
      'Administrar preferencialmente em acesso venoso central.'
    ]
  },
  {
    name: 'Fentanil',
    class: 'Analgésico Opioide',
    indication: 'Dor intensa, sedação em UTI, anestesia.',
    dilution: 'Pode ser usado puro ou diluído em SF/SG 5%.',
    dosage: 'Bolus: 1-2 mcg/kg. Infusão: 0.5-2 mcg/kg/h.',
    nursingCare: [
      'Monitorar depressão respiratória e saturação de O2.',
      'Risco de rigidez torácica em doses altas rápidas.',
      'Monitorar nível de consciência.'
    ]
  },
  {
    name: 'Propofol',
    class: 'Anestésico Geral',
    indication: 'Indução e manutenção de anestesia, sedação em UTI.',
    dilution: 'Usar puro (emulsão lipídica). Não misturar com outras drogas.',
    dosage: 'Sedação: 5-50 mcg/kg/min.',
    nursingCare: [
      'Trocar equipo a cada 12h (alto risco de contaminação).',
      'Monitorar triglicerídeos e PA.',
      'Observar sinais de síndrome da infusão do propofol.'
    ]
  },
  {
    name: 'Nitroprussiato de Sódio',
    class: 'Vasodilatador Potente',
    indication: 'Crise hipertensiva, insuficiência cardíaca grave.',
    dilution: 'Diluir em SG 5%. Padrão: 50 mg em 250 mL.',
    dosage: '0.3 a 10 mcg/kg/min.',
    nursingCare: [
      'FOTOSSENSÍVEL (proteger frasco e equipo).',
      'Monitorar PA invasiva se possível.',
      'Risco de toxicidade por cianeto em uso prolongado.'
    ]
  },
  {
    name: 'Nitroglicerina (Tridil)',
    class: 'Vasodilatador Coronariano',
    indication: 'Angina instável, IAM, edema agudo de pulmão.',
    dilution: 'Diluir em SF ou SG 5%. Padrão: 50 mg em 250 mL.',
    dosage: '5 a 200 mcg/min.',
    nursingCare: [
      'Usar equipo de polietileno (não PVC) para evitar absorção da droga pelo plástico.',
      'Monitorar PA e frequência cardíaca.',
      'Observar cefaleia como efeito colateral comum.'
    ]
  },
  {
    name: 'Gluconato de Cálcio 10%',
    class: 'Eletrólito',
    indication: 'Hipocalemia, hipercalemia (proteção cardíaca), intoxicação por magnésio.',
    dilution: 'Diluir em SF ou SG 5% para infusão lenta.',
    dosage: '10-20 mL em 10-20 min.',
    nursingCare: [
      'Monitorar ECG (risco de arritmias).',
      'Extravasamento causa necrose tecidual grave.',
      'Administrar lentamente.'
    ]
  },
  {
    name: 'Sulfato de Magnésio',
    class: 'Eletrólito',
    indication: 'Hipomagnesemia, Torsades de Pointes, pré-eclâmpsia.',
    dilution: 'Diluir em SG 5% ou SF.',
    dosage: 'Ataque: 1-4g. Manutenção: 1-2g/h.',
    nursingCare: [
      'Monitorar reflexos patelares.',
      'Monitorar frequência respiratória e débito urinário.',
      'Observar sinais de toxicidade por magnésio.'
    ]
  },
  {
    name: 'Cloreto de Potássio (KCl) 19,1%',
    class: 'Eletrólito',
    indication: 'Hipocalemia.',
    dilution: 'NUNCA FAZER PURO. Diluir em grandes volumes (SF ou SG). Máximo 40-60 mEq/L em veia periférica.',
    dosage: 'Reposição lenta (máximo 10-20 mEq/h).',
    nursingCare: [
      'Monitorar ECG e função renal.',
      'Infusão rápida pode causar parada cardíaca.',
      'Verificar local da infusão (irritante venoso).'
    ]
  },
  {
    name: 'Bicarbonato de Sódio 8,4%',
    class: 'Agente Alcalinizante',
    indication: 'Acidose metabólica grave, hipercalemia, parada cardiorrespiratória.',
    dilution: 'Geralmente usado puro em PCR ou diluído em SG 5% para infusão contínua.',
    dosage: 'Conforme gasometria arterial.',
    nursingCare: [
      'Incompatível com diversas drogas (precipita).',
      'Monitorar pH e eletrólitos.',
      'Lavar o acesso antes e depois.'
    ]
  },
  {
    name: 'Vancomicina',
    class: 'Antibiótico (Glicopeptídeo)',
    indication: 'Infecções graves por Gram-positivos (MRSA).',
    dilution: 'Diluir 500mg em 100mL ou 1g em 200mL de SF ou SG 5%.',
    dosage: '15-20 mg/kg a cada 8-12h.',
    nursingCare: [
      'Infusão lenta (mínimo 60 min) para evitar "Síndrome do Homem Vermelho".',
      'Monitorar função renal (creatinina).',
      'Monitorar níveis séricos se possível.'
    ]
  },
  {
    name: 'Metronidazol (IV)',
    class: 'Antibiótico/Antiprotozoário',
    indication: 'Infecções por anaeróbios, amebíase, giardíase.',
    dilution: 'Geralmente vem pronto para uso (bolsa de 100mL com 500mg).',
    dosage: '500mg a cada 8h.',
    nursingCare: [
      'Infusão em 30-60 min.',
      'Não refrigerar (pode cristalizar).',
      'Observar efeitos gastrointestinais.'
    ]
  },
  {
    name: 'Pantoprazol (IV)',
    class: 'Inibidor de Bomba de Prótons',
    indication: 'Hemorragia digestiva alta, profilaxia de úlcera de estresse.',
    dilution: 'Diluir 40mg em 10mL de SF (IV direto) ou 100mL (infusão).',
    dosage: '40mg a cada 12-24h.',
    nursingCare: [
      'Usar imediatamente após diluição.',
      'Monitorar hipomagnesemia em uso prolongado.',
      'Administrar em bolus lento.'
    ]
  },
  {
    name: 'Ondansetrona',
    class: 'Antiemético',
    indication: 'Náuseas e vômitos.',
    dilution: 'Diluir 8mg em 20-100mL de SF ou SG 5%.',
    dosage: '4 a 8mg a cada 8h.',
    nursingCare: [
      'Infusão lenta.',
      'Pode causar prolongamento do intervalo QT no ECG.',
      'Monitorar cefaleia e constipação.'
    ]
  },
  {
    name: 'Enalaprilat (IV)',
    class: 'Inibidor da ECA',
    indication: 'Hipertensão arterial grave.',
    dilution: 'Pode ser administrado puro ou diluído em 50ml de SF/SG5%.',
    dosage: '1.25mg a cada 6h.',
    nursingCare: [
      'Monitorar pressão arterial rigorosamente.',
      'Monitorar função renal e potássio.',
      'Observar risco de angioedema.'
    ]
  },
  {
    name: 'Haloperidol',
    class: 'Antipsicótico (Neuroléptico)',
    indication: 'Agitação psicomotora, delírio, psicoses.',
    dilution: 'IM: Puro. EV: Diluir em SF ou SG5% (uso off-label).',
    dosage: '2.5mg a 5mg.',
    nursingCare: [
      'Monitorar sinais extrapiramidais.',
      'Monitorar intervalo QT no ECG.',
      'Monitorar nível de sedação.'
    ]
  },
  {
    name: 'Prometazina',
    class: 'Anti-histamínico / Sedativo',
    indication: 'Reações alérgicas, náuseas, sedação.',
    dilution: 'IM: Profunda. EV: Diluir em 10-20ml de SF e administrar muito lentamente.',
    dosage: '25mg a 50mg.',
    nursingCare: [
      'Risco de necrose tecidual grave se houver extravasamento EV.',
      'Monitorar nível de consciência (sonolência intensa).',
      'Administrar IM em músculo grande.'
    ]
  },
  {
    name: 'Hidrocortisona',
    class: 'Corticosteroide',
    indication: 'Insuficiência adrenal, choque séptico, anafilaxia.',
    dilution: 'Reconstituir com AD e diluir em SF ou SG5%.',
    dosage: '100mg a 500mg.',
    nursingCare: [
      'Monitorar glicemia (hiperglicemia).',
      'Monitorar pressão arterial e eletrólitos.',
      'Observar sinais de infecção mascarada.'
    ]
  },
  {
    name: 'Tenecteplase',
    class: 'Trombolítico',
    indication: 'Infarto Agudo do Miocárdio (IAM) com supra de ST.',
    dilution: 'Reconstituir com AD fornecida. Não agitar vigorosamente.',
    dosage: 'Dose baseada no peso (30mg a 50mg) em bolus único.',
    nursingCare: [
      'Monitorar rigorosamente sinais de sangramento.',
      'Monitorar ECG para sinais de reperfusão (arritmias).',
      'Evitar punções e procedimentos invasivos após administração.'
    ]
  },
  {
    name: 'Alteplase (rt-PA)',
    class: 'Trombolítico',
    indication: 'AVC Isquêmico agudo, TEP massivo, IAM.',
    dilution: 'Reconstituir com AD fornecida para 1mg/ml.',
    dosage: '0.9mg/kg (máximo 90mg). 10% em bolus e o restante em 1h.',
    nursingCare: [
      'Monitorar nível de consciência (risco de hemorragia intracraniana).',
      'Monitorar PA rigorosamente (manter < 180/105 mmHg).',
      'Protocolo rigoroso de monitorização de sangramentos.'
    ]
  },
  {
    name: 'Ácido Tranexâmico (Transamin)',
    class: 'Antifibrinolítico',
    indication: 'Controle e prevenção de hemorragias (cirurgias, traumas).',
    dilution: 'SF 0,9% ou SG 5% (25 a 250mL) ou AD (20mL).',
    dosage: '50mg/mL (ampola 5mL). Infusão lenta (10-20 min).',
    nursingCare: [
      'Administrar lentamente (risco de hipotensão se rápido).',
      'Monitorar sinais de trombose.',
      'Pode ser feito sem diluição (máx 10 ampolas) a 1mL/min.'
    ]
  },
  {
    name: 'Bromoprida',
    class: 'Antiemético / Procinético',
    indication: 'Náuseas, vômitos, refluxo gastroesofágico.',
    dilution: '50mL (máx) ou 20mL (mín) de SF ou AD.',
    dosage: '1 a 2 ampolas (10-20mg) IM ou EV.',
    nursingCare: [
      'EV rápido aumenta risco de reações extrapiramidais.',
      'Monitorar tontura e sonolência.',
      'Dose pediátrica: 0,5 a 1mg/kg/dia.'
    ]
  },
  {
    name: 'Buscopan (Escopolamina)',
    class: 'Antiespasmódico',
    indication: 'Cólicas e espasmos (gastrintestinal, biliar, renal).',
    dilution: 'Puro ou diluído em 20mL de SF 0,9% ou AD.',
    dosage: '20mg EV ou IM (simples) ou 4mg + 500mg dipirona (composto).',
    nursingCare: [
      'Monitorar taquicardia.',
      'Observar boca seca e visão turva.',
      'Administrar lentamente (1-2 min).'
    ]
  },
  {
    name: 'Cimetidina',
    class: 'Antagonista H2',
    indication: 'Úlceras gástricas, refluxo, profilaxia de úlcera de estresse.',
    dilution: 'Diluir em 20-100mL de SF, SG ou Ringer.',
    dosage: '150mg/mL (ampola 2mL). Infusão contínua: 75mg/h.',
    nursingCare: [
      'EV direto: mínimo 2 min.',
      'Infusão lenta: mínimo 30 min.',
      'Interage com Fenitoína.'
    ]
  },
  {
    name: 'Efortil (Etilefrina)',
    class: 'Vasopressor (Simpaticomimético)',
    indication: 'Hipotensão sintomática ou ortostática.',
    dilution: 'Diluir 10mg em 10mL de SF 0,9%.',
    dosage: '10mg EV ou IM.',
    nursingCare: [
      'Risco de taquicardia e hipertensão.',
      'Monitorar sinais vitais rigorosamente.',
      'Infusão lenta (1-2 min).'
    ]
  },
  {
    name: 'Ergometrina',
    class: 'Ocitócico',
    indication: 'Hemorragia pós-parto, atonia uterina.',
    dilution: 'Diluir em 10mL de SF 0,9% (se EV).',
    dosage: '0,2mg IM ou EV.',
    nursingCare: [
      'CONTRAINDICADO em pré-eclâmpsia (risco de hipertensão grave).',
      'Não administrar antes do nascimento total do feto.',
      'Infusão lenta (1 min).'
    ]
  },
  {
    name: 'Penicilina Benzatina (Benzetacil)',
    class: 'Antibiótico (Penicilina)',
    indication: 'Sífilis, infecções estreptocócicas, febre reumática.',
    dilution: 'Reconstituir com Água Destilada.',
    dosage: '600.000 UI a 1.200.000 UI IM.',
    nursingCare: [
      'USO EXCLUSIVAMENTE IM. Nunca fazer EV (risco de embolia).',
      'Pode adicionar 0,5 a 1,3mL de Lidocaína 2% para reduzir dor.',
      'Alto risco de anafilaxia.'
    ]
  },
  {
    name: 'Tramadol (Tramal)',
    class: 'Analgésico Opioide',
    indication: 'Dor moderada a grave.',
    dilution: 'Diluir em 100mL de SF 0,9% ou SG 5%.',
    dosage: '100mg/2mL (ampola 2mL).',
    nursingCare: [
      'Infusão lenta (20-30 min) para reduzir náuseas/vômitos.',
      'Risco de convulsão em doses altas.',
      'Monitorar nível de consciência.'
    ]
  },
  {
    name: 'Cálculo: Frasco-Ampola',
    class: 'Cálculo / Fórmula',
    indication: 'Descobrir volume a administrar de droga em pó.',
    dilution: 'Fórmula: (Dose Prescrita x Volume Diluente) / Quantidade Disponível',
    dosage: 'Ex: Prescrição 300mg Ceftriaxona. Disp: 1g/10mL. (300x10)/1000 = 3mL.',
    nursingCare: [
      'Sempre conferir a validade após reconstituição.',
      'Atenção à unidade de medida (mg vs g).',
      'Lavar o frasco para garantir dose total.'
    ]
  },
  {
    name: 'Cálculo: Gotejamento (Gotas/min)',
    class: 'Cálculo / Fórmula',
    indication: 'Controle de infusão em equipos comuns.',
    dilution: 'Fórmula: Volume (mL) / (Tempo (h) x 3)',
    dosage: 'Ex: 500mL em 4h. 500 / (4x3) = 41,6 ≈ 42 gotas/min.',
    nursingCare: [
      'Para microgotas, multiplique o resultado por 3.',
      'Monitorar o gotejamento manualmente a cada hora.',
      'Atenção ao posicionamento do membro.'
    ]
  },
  {
    name: 'Cálculo: Diluição (C1V1 = C2V2)',
    class: 'Cálculo / Fórmula',
    indication: 'Modificar a concentração de uma solução.',
    dilution: 'Fórmula: Conc1 x Vol1 = Conc2 x Vol2',
    dosage: 'Ex: Diluir 10mL a 20% para obter 2%. 20x10 = 2x100. Vol final = 100mL.',
    nursingCare: [
      'Garantir homogeneização da mistura.',
      'Identificar claramente o frasco com a nova concentração.',
      'Conferir cálculos com outro profissional.'
    ]
  },
  {
    name: 'Cálculo: Bomba de Infusão (mL/h)',
    class: 'Cálculo / Fórmula',
    indication: 'Ajuste de dose precisa em BIC.',
    dilution: 'Fórmula: (mcg/kg/min x peso x 60 x Vol Ampola) / Dose Total Ampola (mcg)',
    dosage: 'Ex: Noradrenalina 4mcg/kg/min, 70kg, 8mg/100mL. (4x70x60x100)/8000 = 210 mL/h.',
    nursingCare: [
      'Conferir programação da bomba rigorosamente.',
      'Atenção à unidade (mcg vs mg).',
      'Monitorar sinais vitais conforme a droga infundida.'
    ]
  },
  {
    name: 'Atropina',
    class: 'Anticolinérgico',
    indication: 'Bradicardia sinusal, Antídoto para organofosforados.',
    dilution: 'Pode ser administrada pura ou diluída em SF.',
    dosage: '0,5mg a 1mg IV a cada 3-5 min (máx 3mg).',
    nursingCare: [
      'Monitorar frequência cardíaca.',
      'Observar sinais de toxicidade anticolinérgica (boca seca, delírio).',
      'Manter paciente em monitorização contínua.'
    ]
  },
  {
    name: 'Amiodarona',
    class: 'Antiarrítmico (Classe III)',
    indication: 'Arritmias ventriculares e supraventriculares.',
    dilution: 'Diluir em SG5% (não compatível com SF).',
    dosage: 'Ataque: 150-300mg. Manutenção: 900mg em 24h.',
    nursingCare: [
      'Monitorar ECG (intervalo QT).',
      'Monitorar função pulmonar e tireoidiana no uso crônico.',
      'Administrar preferencialmente em acesso central.'
    ]
  },
  {
    name: 'Dobutamina',
    class: 'Inotrópico Positivo',
    indication: 'Choque cardiogênico, Insuficiência cardíaca descompensada.',
    dilution: 'Diluir em SF ou SG5%.',
    dosage: '2 a 20 mcg/kg/min.',
    nursingCare: [
      'Monitorar pressão arterial e frequência cardíaca.',
      'Atenção ao risco de taquiarritmias.',
      'Não misturar com soluções alcalinas.'
    ]
  },
  {
    name: 'Nitroprussiato de Sódio',
    class: 'Vasodilatador Potente',
    indication: 'Emergências hipertensivas.',
    dilution: 'Diluir em SG5%. Solução fotossensível.',
    dosage: '0,25 a 10 mcg/kg/min.',
    nursingCare: [
      'Usar equipo e frasco fotossensíveis.',
      'Monitoração invasiva da PA (PAM).',
      'Monitorar sinais de toxicidade por cianeto.'
    ]
  },
  {
    name: 'Nitroglicerina',
    class: 'Vasodilatador Coronariano',
    indication: 'Angina instável, IAM, Edema agudo de pulmão.',
    dilution: 'Diluir em SG5% ou SF. Usar frasco de vidro ou polietileno.',
    dosage: '5 a 200 mcg/min.',
    nursingCare: [
      'Monitorar PA rigorosamente.',
      'Atenção à cefaleia (efeito colateral comum).',
      'Evitar uso em pacientes que usaram inibidores da PDE-5.'
    ]
  },
  {
    name: 'Adenosina',
    class: 'Antiarrítmico',
    indication: 'Taquicardia Supraventricular Paroxística (TSVP).',
    dilution: 'Administrar pura em bolus rápido.',
    dosage: '6mg (1ª dose), 12mg (2ª dose).',
    nursingCare: [
      'Administrar em veia calibrosa (fossa cubital).',
      'Elevar o membro após administração.',
      'Monitorar ECG (assistolia transitória esperada).'
    ]
  },
  {
    name: 'Varfarina',
    class: 'Anticoagulante Oral',
    indication: 'Prevenção de tromboembolismo.',
    dilution: 'Via Oral.',
    dosage: 'Conforme RNI (INR).',
    nursingCare: [
      'Monitorar RNI regularmente.',
      'Orientar sobre dieta (Vitamina K).',
      'Observar sinais de sangramento (gengivorragia, hematúria).'
    ]
  },
  {
    name: 'Enoxaparina',
    class: 'Anticoagulante (HBPM)',
    indication: 'Profilaxia e tratamento de TVP/TEP.',
    dilution: 'Seringa preenchida SC.',
    dosage: '1mg/kg (terapêutica) ou 40mg (profilática).',
    nursingCare: [
      'Aplicação no abdome (rodízio).',
      'Não massagear o local após aplicação.',
      'Monitorar plaquetas.'
    ]
  },
  {
    name: 'Clopidogrel',
    class: 'Antiagregante Plaquetário',
    indication: 'Prevenção de eventos aterotrombóticos.',
    dilution: 'Via Oral.',
    dosage: '75mg/dia.',
    nursingCare: [
      'Monitorar sinais de sangramento.',
      'Informar sobre risco de hematomas.',
      'Suspender antes de cirurgias conforme orientação médica.'
    ]
  },
  {
    name: 'Furosemida',
    class: 'Diurético de Alça',
    indication: 'Edema, Insuficiência cardíaca, Crise hipertensiva.',
    dilution: 'Pode ser administrada pura ou diluída.',
    dosage: '20 a 80mg IV ou VO.',
    nursingCare: [
      'Monitorar balanço hídrico.',
      'Monitorar níveis de potássio (risco de hipocalemia).',
      'Monitorar pressão arterial.'
    ]
  },
  {
    name: 'Hidroclorotiazida',
    class: 'Diurético Tiazídico',
    indication: 'Hipertensão arterial.',
    dilution: 'Via Oral.',
    dosage: '12,5 a 50mg/dia.',
    nursingCare: [
      'Monitorar eletrólitos.',
      'Observar sinais de desidratação.',
      'Administrar preferencialmente pela manhã.'
    ]
  },
  {
    name: 'Espironolactona',
    class: 'Diurético Poupador de Potássio',
    indication: 'IC, Ascite, Hipertensão.',
    dilution: 'Via Oral.',
    dosage: '25 a 100mg/dia.',
    nursingCare: [
      'Monitorar níveis de potássio (risco de hipercalemia).',
      'Observar ginecomastia em homens.',
      'Monitorar função renal.'
    ]
  },
  {
    name: 'Losartana',
    class: 'Anti-hipertensivo (BRA)',
    indication: 'Hipertensão arterial, IC.',
    dilution: 'Via Oral.',
    dosage: '25 a 100mg/dia.',
    nursingCare: [
      'Monitorar PA.',
      'Monitorar função renal.',
      'Observar tonturas.'
    ]
  },
  {
    name: 'Enalapril',
    class: 'Anti-hipertensivo (IECA)',
    indication: 'Hipertensão arterial, IC.',
    dilution: 'Via Oral.',
    dosage: '5 a 40mg/dia.',
    nursingCare: [
      'Observar tosse seca (efeito colateral comum).',
      'Monitorar potássio sérico.',
      'Risco de angioedema.'
    ]
  },
  {
    name: 'Carvedilol',
    class: 'Betabloqueador',
    indication: 'Insuficiência cardíaca, Hipertensão.',
    dilution: 'Via Oral.',
    dosage: '3,125 a 50mg/dia.',
    nursingCare: [
      'Verificar FC antes da administração.',
      'Monitorar sinais de bradicardia.',
      'Não suspender abruptamente.'
    ]
  },
  {
    name: 'Digoxina',
    class: 'Cardiotônico',
    indication: 'IC, Fibrilação atrial.',
    dilution: 'Via Oral ou IV.',
    dosage: '0,125 a 0,25mg/dia.',
    nursingCare: [
      'Verificar pulso apical por 1 min.',
      'Monitorar sinais de intoxicação digitálica (náuseas, visão amarela).',
      'Monitorar potássio (hipocalemia aumenta risco de toxicidade).'
    ]
  },
  {
    name: 'Metformina',
    class: 'Antidiabético Oral',
    indication: 'Diabetes Mellitus tipo 2.',
    dilution: 'Via Oral.',
    dosage: '500 a 2550mg/dia.',
    nursingCare: [
      'Administrar com as refeições.',
      'Monitorar função renal.',
      'Suspender antes de exames com contraste iodado.'
    ]
  },
  {
    name: 'Glibenclamida',
    class: 'Antidiabético Oral',
    indication: 'Diabetes Mellitus tipo 2.',
    dilution: 'Via Oral.',
    dosage: '2,5 a 20mg/dia.',
    nursingCare: [
      'Monitorar sinais de hipoglicemia.',
      'Administrar antes das refeições.',
      'Orientar sobre dieta.'
    ]
  },
  {
    name: 'Levotiroxina',
    class: 'Hormônio Tireoidiano',
    indication: 'Hipotireoidismo.',
    dilution: 'Via Oral.',
    dosage: '25 a 200mcg/dia.',
    nursingCare: [
      'Administrar em jejum (30 min antes do café).',
      'Monitorar sinais de hipertireoidismo.',
      'Monitorar níveis de TSH.'
    ]
  },
  {
    name: 'Omeprazol',
    class: 'Inibidor da Bomba de Prótons',
    indication: 'Gastrite, Úlcera, Refluxo.',
    dilution: 'Via Oral ou IV.',
    dosage: '20 a 40mg/dia.',
    nursingCare: [
      'Administrar em jejum.',
      'Monitorar queixas gástricas.',
      'Não mastigar as cápsulas.'
    ]
  },
  {
    name: 'Metoclopramida',
    class: 'Antiemético',
    indication: 'Náuseas e vômitos.',
    dilution: 'Via Oral ou IV.',
    dosage: '10mg a cada 8h.',
    nursingCare: [
      'Observar reações extrapiramidais (acatisia).',
      'Administrar IV lentamente.',
      'Monitorar sonolência.'
    ]
  },
  {
    name: 'Ondansetrona',
    class: 'Antiemético',
    indication: 'Náuseas e vômitos (pós-op ou quimio).',
    dilution: 'Via Oral ou IV.',
    dosage: '4 a 8mg.',
    nursingCare: [
      'Monitorar cefaleia.',
      'Observar constipação.',
      'Monitorar intervalo QT.'
    ]
  },
  {
    name: 'Ceftriaxona',
    class: 'Antibiótico (Cefalosporina)',
    indication: 'Infecções graves, Meningite, Pneumonia.',
    dilution: 'Diluir em SF ou AD.',
    dosage: '1 a 2g/dia.',
    nursingCare: [
      'Verificar histórico de alergia.',
      'Administrar IV lentamente.',
      'Monitorar função renal.'
    ]
  },
  {
    name: 'Vancomicina',
    class: 'Antibiótico (Glicopeptídeo)',
    indication: 'Infecções por MRSA.',
    dilution: 'Diluir em SF ou SG5%.',
    dosage: '500mg a 1g a cada 12h.',
    nursingCare: [
      'Infusão lenta (mínimo 60 min).',
      'Monitorar nefrotoxicidade e ototoxicidade.',
      'Observar Síndrome do Homem Vermelho.'
    ]
  },
  {
    name: 'Morfina',
    class: 'Analgésico Opioide',
    indication: 'Dor intensa.',
    dilution: 'Diluir em SF.',
    dosage: '2 a 10mg IV.',
    nursingCare: [
      'Monitorar frequência respiratória.',
      'Monitorar nível de consciência.',
      'Observar constipação e retenção urinária.'
    ]
  },
  {
    name: 'Paracetamol',
    class: 'Analgésico / Antipirético',
    indication: 'Dor leve a moderada e febre.',
    dilution: 'VO: Gotas ou comprimidos. EV: Diluir em SF ou SG5% (conforme fabricante).',
    dosage: 'Adultos: 500mg a 1g a cada 6h. Crianças: 10-15mg/kg/dose.',
    nursingCare: [
      'Monitorar função hepática em uso prolongado.',
      'Não exceder 4g/dia em adultos.',
      'Observar sinais de hipersensibilidade.'
    ]
  },
  {
    name: 'Ibuprofeno',
    class: 'AINE (Anti-inflamatório Não Esteroidal)',
    indication: 'Dor, febre e inflamação.',
    dilution: 'Via Oral.',
    dosage: 'Adultos: 400-600mg a cada 8h. Crianças: 5-10mg/kg/dose.',
    nursingCare: [
      'Administrar preferencialmente após as refeições.',
      'Monitorar função renal e sinais de sangramento gástrico.',
      'Evitar em pacientes com dengue suspeita.'
    ]
  },
  {
    name: 'Amoxicilina',
    class: 'Antibiótico (Penicilina)',
    indication: 'Infecções bacterianas (vias aéreas, ITU, pele).',
    dilution: 'Via Oral (Cápsulas ou Suspensão).',
    dosage: '500mg a cada 8h ou 875mg a cada 12h.',
    nursingCare: [
      'Verificar histórico de alergia a penicilinas.',
      'Orientar sobre a importância de completar o tempo de tratamento.',
      'Observar reações cutâneas ou diarreia.'
    ]
  },
  {
    name: 'Azitromicina',
    class: 'Antibiótico (Macrolídeo)',
    indication: 'Infecções respiratórias, ISTs (Clamídia).',
    dilution: 'Via Oral ou EV (diluição específica em SF/SG5%).',
    dosage: '500mg 1x/dia por 3 a 5 dias. IST: 1g dose única.',
    nursingCare: [
      'Monitorar intervalo QT no ECG (risco de arritmias).',
      'Administrar 1h antes ou 2h após as refeições (VO).',
      'Observar queixas gastrointestinais.'
    ]
  },
  {
    name: 'Prednisona',
    class: 'Corticosteroide Oral',
    indication: 'Doenças inflamatórias, autoimunes, asma.',
    dilution: 'Via Oral.',
    dosage: '5mg a 60mg/dia (conforme prescrição).',
    nursingCare: [
      'Administrar preferencialmente pela manhã.',
      'Monitorar glicemia e pressão arterial.',
      'Não interromper o uso abruptamente (risco de insuficiência adrenal).'
    ]
  },
  {
    name: 'Salbutamol',
    class: 'Broncodilatador (Beta-2 Agonista)',
    indication: 'Asma, DPOC, broncoespasmo.',
    dilution: 'Inalatório (Nebulização ou Spray).',
    dosage: 'Nebulização: 2,5-5mg. Spray: 100-200mcg.',
    nursingCare: [
      'Monitorar frequência cardíaca (pode causar taquicardia).',
      'Observar tremores e ansiedade.',
      'Avaliar padrão respiratório antes e após o uso.'
    ]
  }
];
