// Data layer — 18 cardiopatías congénitas con información clínica completa y detallada
const cardiopatias = [
  // --- CORTOCIRCUITOS (SHUNTS) ---
  {
    id: 'cia',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Comunicación Interauricular (CIA)',
    nombreCorto: 'CIA',
    descripcion: 'Defecto en el tabique interauricular que permite el cortocircuito de sangre oxigenada (AI) a la AD.',
    color: '#3b82f6',
    icon: '🫀',
    imagen: 'assets/images/cia.png',
    tags: ['Shunt izquierda-derecha', 'Acianótica', 'Sobrecarga volumen derecha'],
    video: null, // Pegar URL de YouTube aquí
    diagnostico: {
      titulo: 'Diagnóstico Clínico',
      icon: '🔍',
      contenido: `<p>Frecuentemente asintomática en la infancia. El diagnóstico suele ser por hallazgo de soplo o cardiomegalia en Rx.</p>
<ul>
  <li><strong>Auscultación:</strong> El hallazgo clásico es el <strong>desdoblamiento fijo y amplio del segundo ruido (S2)</strong>. Puede auscultarse un soplo sistólico eyectivo en foco pulmonar (por hiperaflujo) y un retumbo diastólico tricuspídeo (en shunts grandes).</li>
  <li><strong>ECG:</strong> Ritmo sinusal regular. Eje desviado a la derecha (tipo Ostium Secundum) o a la izquierda (Ostium Primum). Bloqueo incompleto de rama derecha (rSr' en V1) es muy característico.</li>
  <li><strong>Radiografía:</strong> Cardiomegalia a expensas de AD y VD. Prominencia del arco pulmonar y aumento de la trama vascular pulmonar (plétora).</li>
  <li><strong>Ecocardiografía:</strong> Confirma el diagnóstico, localiza el defecto (Secundum, Primum, Seno Venoso), cuantifica el Qp/Qs y evalúa la dilatación del VD.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología y Consecuencias',
      icon: '⚠️',
      contenido: `<p>El shunt I-D produce una sobrecarga de volumen crónica en las cavidades derechas y el lecho vascular pulmonar.</p>
<ul>
  <li><strong>Dilatación de Cavidades Derechas:</strong> La AD y el VD se dilatan progresivamente. Si no se corrige, puede llevar a fallo ventricular derecho a largo plazo (3ª-4ª década).</li>
  <li><strong>Hipertensión Pulmonar (HTP):</strong> Rara en la infancia (<5%), pero el riesgo aumenta con la edad. El desarrollo de enfermedad vascular pulmonar irreversible (Eisenmenger) es la complicación más temida pero tardía.</li>
  <li><strong>Arritmias:</strong> La dilatación auricular predispone a fibrilación auricular y flutter auricular en la edad adulta.</li>
  <li><strong>Embolia Paradójica:</strong> Posibilidad de paso de trombos venosos a la circulación sistémica (ictus), especialmente si hay hipertensión pulmonar o Valsalva.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Médico',
      icon: '🚑',
      contenido: `<p>La mayoría de los niños son asintomáticos y no requieren tratamiento agudo.</p>
<ul>
  <li><strong>Insuficiencia Cardíaca:</strong> Si aparece (raro, salvo en defectos muy grandes o prematuros), se maneja con diuréticos (Furosemida) para reducir la precarga.</li>
  <li><strong>Profilaxis:</strong> No se recomienda profilaxis de endocarditis bacteriana salvo en los 6 meses posteriores al cierre con dispositivo/parche.</li>
</ul>`
    },
    cirugia: {
      titulo: 'Tratamiento Intervencionista/Quirúrgico',
      icon: '🔪',
      contenido: `<p>El cierre está indicado ante evidencia de sobrecarga de volumen (VD dilatado) o Qp/Qs ≥ 1.5:1, idealmente entre los 3-5 años (prescolar).</p>
<ul>
  <li><strong>Cierre Percutáneo (Cateterismo):</strong> Es el tratamiento de elección para la <strong>CIA Ostium Secundum</strong> con bordes adecuados. Se utiliza un dispositivo oclusor (p. ej., Amplatzer). Éxito >95%, estancia hospitalaria corta (24h).</li>
  <li><strong>Cierre Quirúrgico:</strong> Indicado para:
    <ul>
      <li>CIA Ostium Secundum muy grandes o sin bordes para dispositivo.</li>
      <li>CIA Ostium Primum (requiere reparación valvular mitral asociada).</li>
      <li>CIA Seno Venoso (requiere reconexión de venas pulmonares anómalas).</li>
    </ul>
    Se realiza bajo circulación extracorpórea (CEC) mediante parche de pericardio autólogo o bovino.
  </li>
</ul>`
    }
  },
  {
    id: 'civ',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Comunicación Interventricular (CIV)',
    nombreCorto: 'CIV',
    descripcion: 'Orificio en el tabique interventricular. Es la cardiopatía congénita más frecuente (excluyendo válvula aórtica bicúspide).',
    color: '#8b5cf6',
    icon: '💜',
    imagen: 'assets/images/civ.png',
    tags: ['Shunt izquierda-derecha', 'ICC', 'Hipertensión Pulmonar'],
    diagnostico: {
      titulo: 'Diagnóstico Clínico',
      icon: '🔍',
      contenido: `<p>La clínica varía desde asintomática (CIV pequeña) hasta ICC severa (CIV grande nos restrictiva).</p>
<ul>
  <li><strong>Auscultación:</strong> Soplo <strong>holosistólico</strong>, áspero, de alta frecuencia, audible en borde esternal izquierdo bajo (3º-4º EIC). En CIVs restrictivas (pequeñas) el soplo es muy intenso y puede acompañarse de frémito (thrill). En CIVs muy grandes el soplo puede ser menos llamativo si las presiones se igualan.</li>
  <li><strong>Clínica de ICC:</strong> Taquipnea, sudoración con las tomas, fallo de medro, fatiga. Aparece típicamente entre la 2ª y 8ª semana de vida (al caer las resistencias pulmonares).</li>
  <li><strong>ECG:</strong> Normal en CIV pequeña. Signos de hipertrofia biventricular y crecimiento de AI en CIV grandes.</li>
  <li><strong>Radiografía:</strong> Cardiomegalia global y aumento marcado de la vascularización pulmonar (hiperaflujo).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>El defecto permite un gran flujo de sangre del VI al VD y arteria pulmonar.</p>
<ul>
  <li><strong>Sobrecarga de Volumen VI:</strong> Paradójicamente, el shunt sobrecarga el volumen de la Aurícula Izquierda y el Ventrículo Izquierdo (por el retorno venoso pulmonar aumentado).</li>
  <li><strong>Hipertensión Pulmonar (HTP):</strong> En CIVs grandes no restrictivas, la presión sistémica se transmite directamente al lecho pulmonar. Si no se corrige antes del año, puede desarrollarse enfermedad vascular pulmonar obstructiva (Síndrome de Eisenmenger).</li>
  <li><strong>Endocarditis Infecciosa:</strong> Riesgo presente incluso en defectos pequeños debido al flujo turbulento de alta velocidad (efecto jet).</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Médico Inicial',
      icon: '🚑',
      contenido: `<p>Objetivo: Controlar los síntomas de ICC y asegurar la ganancia ponderal hasta la cirugía.</p>
<ul>
  <li><strong>Diuréticos:</strong> Furosemida (diurético de asa) +/- Espironolactona (ahorrador de K) para descongestionar el pulmón y reducir precarga.</li>
  <li><strong>IECAs:</strong> Captopril o Enalapril para reducir la postcarga sistémica y favorecer el flujo hacia la aorta en lugar de la pulmonar.</li>
  <li><strong>Nutrición:</strong> Fundamental. Aporte hipercalórico (fórmulas concentradas, fortificantes) y, si es necesario, alimentación por sonda nasogástrica (SNG) para evitar fatiga.</li>
</ul>`
    },
    cirugia: {
      titulo: 'Cierre Quirúrgico',
      icon: '🔪',
      contenido: `<p>La cirugía correctora es el tratamiento definitivo.</p>
<ul>
  <li><strong>Indicaciones:</strong> ICC no controlable médicamente, fallo de medro persistente o evidencia de HTP significativa. Se suele realizar entre los 3-6 meses de vida.</li>
  <li><strong>Técnica:</strong> Cierre del defecto con <strong>parche</strong> (Dacron, Gore-Tex o pericardio) bajo circulación extracorpórea. El abordaje suele ser a través de la aurícula derecha (transatrial) para no dañar el ventrículo.</li>
  <li><strong>Cierre Percutáneo:</strong> Reservado para casos seleccionados de CIV muscular o CIV residual post-quirúrgica, debido a la proximidad de las válvulas y el sistema de conducción.</li>
  <li><strong>Cerclaje (Banding) Pulmonar:</strong> Rara vez usado hoy en día, salvo en casos complejos (CIV múltiples "queso suizo") para limitar el flujo pulmonar temporalmente.</li>
</ul>`
    }
  },
  {
    id: 'dap',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Ductus Arterioso Persistente (DAP)',
    nombreCorto: 'DAP',
    descripcion: 'Fallo en el cierre del conducto fetal que comunica la aorta con la arteria pulmonar tras el nacimiento.',
    color: '#10b981',
    icon: '💚',
    imagen: 'assets/images/dap.png',
    tags: ['Prematuros', 'Shunt continuo', 'Sobrecarga VI'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Muy prevalente en recién nacidos pretérmino (RNPT). En a término es menos común.</p>
<ul>
  <li><strong>Auscultación:</strong> Soplo característico <strong>continuo "en maquinaria" (soplo de Gibson)</strong>, más audible en foco infraclavicular izquierdo.</li>
  <li><strong>Signos Periféricos:</strong> Pulsos arteriales "saltones" (amplios) debido al robo diastólico aórtico hacia la pulmonar. Presión del pulso diferencial amplia.</li>
  <li><strong>Ecocardiografía:</strong> Visualiza el flujo turbulento continuo desde la aorta descendente a la arteria pulmonar. Evalúa la repercusión hemodinámica (dilatación de AI/VI).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Repercusión Hemodinámica',
      icon: '⚠️',
      contenido: `<p>El DAP genera un shunt I-D continuo (sístole y diástole).</p>
<ul>
  <li><strong>Sobrecarga de Volumen Izquierda:</strong> Dilatación de AI y VI, pudiendo causar edema pulmonar e insuficiencia cardíaca izquierda.</li>
  <li><strong>Isquemia Sistémica (Robo Diastólico):</strong> En prematuros, el robo de sangre hacia el pulmón puede comprometer la perfusión cerebral, renal y mesentérica (riesgo de Enterocolitis Necrotizante - ECN).</li>
  <li><strong>Hipertensión Pulmonar:</strong> Si el ductus es grande y no se trata.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Tratamiento Médico',
      icon: '🚑',
      contenido: `<p>El enfoque depende de la edad gestacional.</p>
<ul>
  <li><strong>En Prematuros:</strong> El cierre farmacológico es la primera línea.
    <ul>
      <li>Ibuprofeno IV o Indometacina (inhibidores de prostaglandinas).</li>
      <li>Paracetamol IV (alternativa más segura si hay contraindicación para AINEs).</li>
    </ul>
  </li>
  <li><strong>En R.N. a Término / Niños:</strong> El cierre farmacológico no suele ser efectivo. Se maneja la ICC con diuréticos hasta el cierre intervencionista.</li>
</ul>`
    },
    cirugia: {
      titulo: 'Cierre Definitivo',
      icon: '🔪',
      contenido: `<p>Indicado si fracasa el tratamiento médico (prematuros) o existe repercusión hemodinámica.</p>
<ul>
  <li><strong>Cierre Percutáneo:</strong> De elección en lactantes > 5-6 kg y niños. Se utiliza un <strong>Coil</strong> (ductus pequeños) o dispositivo <strong>Amplatzer</strong> (ductus grandes). Acceso venoso femoral.</li>
  <li><strong>Cierre Quirúrgico:</strong>
    <ul>
      <li>En prematuros: Ligadura del ductus mediante toracotomía lateral izquierda (clip o sutura). Se puede realizar en la propia UCI neonatal.</li>
      <li>En niños mayores: Solo si el cierre percutáneo no es factible.</li>
    </ul>
  </li>
</ul>`
    }
  },
  {
    id: 'canal_av',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Canal Atrioventricular (Canal AV)',
    nombreCorto: 'Canal AV',
    descripcion: 'Defecto de los cojines endocárdicos que incluye una CIA amplia (Ostium Primum), una CIV de entrada y una válvula AV común anómala.',
    color: '#f59e0b',
    icon: '🧡',
    imagen: 'assets/images/canal_av.png',
    tags: ['Síndrome de Down', 'ICC Severa', 'Hipertensión Pulmonar precoz'],
    diagnostico: {
      titulo: 'Diagnóstico Clínico',
      icon: '🔍',
      contenido: `<p>Asociación muy fuerte con <strong>Trisomía 21 (Síndrome de Down)</strong> (40-50% de los casos).</p>
<ul>
  <li><strong>Clínica:</strong> Insuficiencia cardíaca congestiva severa y muy precoz (pocas semanas de vida). Fallo de medro importante. Infecciones respiratorias recurrentes.</li>
  <li><strong>Auscultación:</strong> Soplo sistólico de insuficiencia AV + componentes de CIA/CIV. Hiperactividad precordial.</li>
  <li><strong>ECG:</strong> Característica <strong>desviación extrema del eje a la izquierda</strong> ("eje norte-oeste") y bloqueo AV de primer grado.</li>
  <li><strong>Eco:</strong> "Defecto en el centro del corazón". Válvula AV común con 5 valvas.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Es una cardiopatía de alto debito.</p>
<ul>
  <li><strong>Shunt Masivo:</strong> Comunicación a nivel auricular y ventricular, causando gran hiperaflujo pulmonar.</li>
  <li><strong>Insuficiencia Valvular AV:</strong> La válvula común suele ser incompetente, agravando la sobrecarga de volumen.</li>
  <li><strong>Enfermedad Vascular Pulmonar (HTP):</strong> Se desarrolla MUY rápidamente (antes de los 6-12 meses) debido a la combinación de alto flujo y alta presión. Requiere corrección temprana.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Pre-Quirúrgico',
      icon: '🚑',
      contenido: `<p>Control agresivo de la insuficiencia cardíaca.</p>
<ul>
  <li>Furosemida a dosis altas, Espironolactona, IECAs.</li>
  <li>Soporte nutricional intensivo (con sonda si es preciso) para que el niño llegue a la cirugía con el mejor peso posible (objetivo > 5kg idealmente, aunque se opera antes si falla).</li>
</ul>`
    },
    cirugia: {
      titulo: 'Corrección Completa',
      icon: '🔪',
      contenido: `<p>Se realiza de forma electiva entre los <strong>3 y 6 meses de edad</strong> para evitar la HTP irreversible.</p>
<ul>
  <li><strong>Técnica de Doble Parche:</strong>
    <ul>
      <li>Cierre de la CIV con parche (Dacron/Goretex).</li>
      <li>Cierre de la CIA Ostium Primum con parche (pericardio).</li>
      <li><strong>Plastia de la Válvula AV:</strong> División de la válvula común en dos válvulas (mitral y tricúspide) y cierre de la "cleft" mitral para asegurar competencia valvular.</li>
    </ul>
  </li>
  <li><strong>Pronóstico:</strong> Bueno, aunque puede requerir reintervenciones por insuficiencia/estenosis de la válvula mitral izquierda a largo plazo.</li>
</ul>`
    }
  },

  // --- LESIONES OBSTRUCTIVAS ---
  {
    id: 'estenosis_aortica',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Estenosis Aórtica (EAo)',
    nombreCorto: 'Estenosis Ao',
    descripcion: 'Obstrucción al flujo de salida del ventrículo izquierdo, generalmente por una válvula aórtica bicúspide o displásica.',
    color: '#dc2626',
    icon: '❤️',
    imagen: 'assets/images/estenosis_ao.png',
    tags: ['Obstructiva Izquierda', 'Síncope', 'VI Hipertrófico'],
    diagnostico: {
      titulo: 'Presentación Clínica',
      icon: '🔍',
      contenido: `<p>El espectro varía desde la estenosis crítica neonatal hasta formas leves en el adulto.</p>
<ul>
  <li><strong>Neonatos (Crítica):</strong> Shock cardiogénico, pulsos débiles, palidez, acidosis metabólica al cerrarse el ductus. Dependiente de prostaglandinas.</li>
  <li><strong>Niños/Adultos:</strong> Generalmente asintomáticos. Diagnóstico por soplo. En casos severos: dolor torácico (angina), síncope de esfuerzo o disnea.</li>
  <li><strong>Auscultación:</strong> Soplo sistólico eyectivo rudo en foco aórtico (2º EIC derecho), irradiado a cuello (carótidas). Clic de apertura sistólico (si la válvula es flexible).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Obstrucción a la eyección del VI → Aumento de postcarga.</p>
<ul>
  <li><strong>Hipertrofia Ventricular Izquierda (HVI):</strong> Mecanismo compensador. Aumenta el consumo de oxígeno miocárdico.</li>
  <li><strong>Isquemia Subendocárdica:</strong> Por desequilibrio entre oferta (baja presión coronaria diastólica) y demanda (masa muscular aumentada). Riesgo de muerte súbita.</li>
  <li><strong>Disfunción VI:</strong> Fallo sistólico y diastólico en estadios finales.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Inicial',
      icon: '🚑',
      contenido: `<p>Depende de la gravedad:</p>
<ul>
  <li><strong>EAo Crítica Neonatal:</strong> ¡Emergencia! Iniciar infusión de <strong>Prostaglandina E1 (PGE1)</strong> para reabrir el ductus y mantener la perfusión sistémica. Corrección acidosis, inotropos. Traslado a UCI y cateterismo urgente.</li>
  <li><strong>Niños Mayores:</strong> Restricción de ejercicio físico intenso (deportes de competición) si la estenosis es moderada/severa. Seguimiento eco periódico.</li>
</ul>`
    },
    cirugia: {
      titulo: 'Intervención Terapéutica',
      icon: '🔪',
      contenido: `<p>El objetivo es aliviar la obstrucción preservando la función ventricular.</p>
<ul>
  <li><strong>Valvuloplastia Aórtica con Balón (Cateterismo):</strong> Primera línea en neonatos y niños. Es paliativa (reduce el gradiente pero a menudo causa insuficiencia aórtica residual). Permite ganar tiempo hasta que el anillo crezca.</li>
  <li><strong>Valvotomía Quirúrgica:</strong> Resección de tejido valvular engrosado.</li>
  <li><strong>Procedimiento de Ross:</strong> Sustitución de la válvula aórtica enferma por la propia válvula pulmonar del paciente (autoinjerto), y colocación de un homoinjerto en posición pulmonar. Es la técnica de elección en niños si la reparación no es posible, ya que el autoinjerto crece con el niño y no requiere anticoagulación.</li>
  <li><strong>Prótesis Mecánica:</strong> Requiere anticoagulación de por vida (Warfarina), problemático en niños/mujeres jóvenes.</li>
</ul>`
    }
  },
  {
    id: 'coartacion',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Coartación de Aorta',
    nombreCorto: 'CoAo',
    descripcion: 'Estrechamiento de la luz aórtica, típicamente localizado en la zona del istmo (cerca del ductus arterioso).',
    color: '#06b6d4',
    icon: '🩵',
    imagen: 'assets/images/coartacion.png',
    tags: ['HTA', 'Diferencia Pulsos', 'Turner'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Frecuente en Síndrome de Turner.</p>
<ul>
  <li><strong>Neonatal (Coartación Crítica):</strong> Shock, acidosis, anuria al cerrarse el ductus. Diferencia de saturación pre/postductal.</li>
  <li><strong>Infantil/Adulto:</strong> Hipertensión arterial sistémica en brazos. <strong>Pulsos femorales disminuidos o ausentes</strong>. Diferencia de presión arterial >20mmHg entre brazos y piernas.</li>
  <li><strong>Signo del 3:</strong> Imagen radiológica clásica (muesca en aorta descendente). Muescas costales (Signo de Roesler) por circulación colateral en niños mayores.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Riesgos: HTA Severa',
      icon: '⚠️',
      contenido: `<p>Obstrucción al flujo sistémico distal.</p>
<ul>
  <li><strong>Hipertensión Arterial Superior:</strong> Causa HVI, ACV (accidentes cerebrovasculares), hemorragia intracraneal (aneurismas del polígono de Willis asociados) y disección aórtica pre-coartación.</li>
  <li><strong>Hipoperfusión Inferior:</strong> Claudicación, insuficiencia renal (si es severa).</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Agudo',
      icon: '🚑',
      contenido: `<p>En el neonato crítico: <strong>PGE1 (Alprostadil)</strong> iv para reabrir el ductus y "saltar" la obstrucción perfundiendo la aorta descendente. Estabilización hemodinámica, corrección acidosis.</p>`
    },
    cirugia: {
      titulo: 'Corrección',
      icon: '🔪',
      contenido: `<p>Debe tratarse tras el diagnóstico.</p>
<ul>
  <li><strong>Cirugía (Neonatos/Lactantes):</strong> <strong>Resección y anastomosis término-terminal extendida</strong>. Se reseca el segmento estrecho y todo el tejido ductal para evitar recoartación. Toracotomía lateral izquierda.</li>
  <li><strong>Cateterismo (Niños > 25/30kg y Adultos):</strong> Angioplastia con balón y colocación de <strong>Stent</strong> (generalmente Stent recubierto para evitar disección/aneurisma). Es el tratamiento de elección en recoartaciones post-quirúrgicas y nativas en adultos.</li>
</ul>`
    }
  },
  {
    id: 'estenosis_pulmonar',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Estenosis Pulmonar (EP)',
    nombreCorto: 'Estenosis Pulm.',
    descripcion: 'Obstrucción del tracto de salida del ventrículo derecho, comúnmente por fusión de las valvas pulmonares (en cúpula).',
    color: '#0ea5e9',
    icon: '💙',
    imagen: 'assets/images/ep.png',
    tags: ['Obstructiva Derecha', 'Noonan', 'VD Hipertrófico'],
    diagnostico: {
      titulo: 'Clínica y Diagnóstico',
      icon: '🔍',
      contenido: `<p>Suele ser un hallazgo por soplo en niño asintomático. Asociación con Sd. Noonan (EP displásica).</p>
<ul>
  <li><strong>Auscultación:</strong> Soplo sistólico eyectivo en foco pulmonar (2º EIC izq). Clic de apertura (si valvular). S2 desdoblado y disminuido.</li>
  <li><strong>ECG:</strong> Signos de Hipertrofia Ventricular Derecha (HVD) proporcional a la severidad. Eje derecho.</li>
  <li><strong>Eco:</strong> Gradiente pico tricuspídeo elevado.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Sobrecarga de presión en Ventrículo Derecho.</p>
<ul>
  <li><strong>HVD Concéntrica:</strong> El VD se engrosa para vencer la obstrucción.</li>
  <li><strong>Fallo VD:</strong> Claudicación del VD, insuficiencia tricúspide secundaria y, en casos extremos (EP crítica neonatal), cianosis por shunt derecha-izquierda a través del Foramen Oval (Ductus dependiente).</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>En EP Crítica Neonatal (cianosis severa): PGE1 para mantener flujo pulmonar vía ductus hasta la valvuloplastia.</p>`
    },
    cirugia: {
      titulo: 'Valvuloplastia',
      icon: '🎈',
      contenido: `<p>Tratamiento altamente efectivo y definitivo.</p>
<ul>
  <li><strong>Valvuloplastia Percutánea con Balón:</strong> Tratamiento de elección. Se dilata la válvula rompiendo las comisuras fusionadas. Éxito >90%.</li>
  <li><strong>Cirugía (Valvotomía):</strong> Reservada para válvulas displásicas (Sd. Noonan), anillos hipoplásicos o estenosis sub/supravalvulares que no responden al balón.</li>
</ul>`
    }
  },
  {
    id: 'cor_triatriatum',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Cor Triatriatum Sinister',
    nombreCorto: 'Cor Triatriatum',
    descripcion: 'Anomalía rara en la que la aurícula izquierda está dividida en dos cámaras por una membrana fibromuscular perforada.',
    color: '#6366f1',
    icon: '💔',
    imagen: 'assets/images/cor_tri.png',
    tags: ['Rara', 'Obstructiva AI', 'Disfraza de Estenosis Mitral'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Las venas pulmonares drenan en la cámara superior (accesoria), que comunica con la cámara inferior (verdadera AI) por un orificio pequeño.</p>
<ul>
  <li><strong>Clínica:</strong> Similar a estenosis mitral. Disnea, ortopnea, infecciones respiratorias, hemoptisis. Hipertensión venocapilar pulmonar.</li>
  <li><strong>Eco:</strong> Diagnóstico definitivo. Visualiza la membrana intrauricular.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Hemodinamia',
      icon: '⚠️',
      contenido: `<p>Obstrucción al retorno venoso pulmonar.</p>
<ul>
  <li>Edema pulmonar e hipertensión pulmonar (HTP) precapilar.</li>
  <li>Bajo gasto cardiaco si la obstrucción es severa.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Estabilización',
      icon: '🚑',
      contenido: `<p>Tratamiento descongestivo (Diuréticos, O2) para el edema pulmonar mientras se prepara cirugía.</p>`
    },
    cirugia: {
      titulo: 'Resección Quirúrgica',
      icon: '🔪',
      contenido: `<p>Indicada en todos los casos sintomáticos.</p>
<ul>
  <li><strong>Técnica:</strong> Resección completa de la membrana obstructiva bajo CEC. Se inspecciona y cierra también cualquier CIA asociada.</li>
  <li><strong>Resultado:</strong> Curativo. Pronóstico excelente a largo plazo.</li>
</ul>`
    }
  },
  {
    id: 'anillos_vasculares',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Anillos Vasculares',
    nombreCorto: 'Anillos Vasc.',
    descripcion: 'Malformaciones del arco aórtico y sus ramas que rodean y comprimen la tráquea y el esófago.',
    color: '#f43f5e',
    icon: '💍',
    imagen: 'assets/images/anillo.png',
    tags: ['Estridor', 'Disfagia', 'Compresión'],
    diagnostico: {
      titulo: 'Presentación',
      icon: '🔍',
      contenido: `<p>Los síntomas no son cardiacos, sino compresivos.</p>
<ul>
  <li><strong>Respiratorios:</strong> Estridor (inspiratorio/espiratorio), sibilancias que no responden a broncodilatadores, "tos de perro", apneas reflejas. Empeora con la alimentación o llanto.</li>
  <li><strong>Digestivos:</strong> Disfagia para sólidos ("Disfagia Lusoria") en niños mayores, vómitos.</li>
  <li><strong>Pruebas:</strong> Angio-TC o Resonancia Magnética (Gold Standard) para definir anatomía. La broncoscopia muestra compresión pulsátil.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Consecuencias',
      icon: '⚠️',
      contenido: `<p>Compresión crónica de vía aérea.</p>
<ul>
  <li><strong>Traqueomalacia:</strong> El cartílago traqueal se debilita en la zona de compresión, manteniendo síntomas respiratorios (estridor) incluso meses después de la cirugía exitosa.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Manejo de la vía aérea. En casos severos puede requerir intubación o CPAP. Nutrición espesada si disfagia severa.</p>`
    },
    cirugia: {
      titulo: 'Liberación del Anillo',
      icon: '🔪',
      contenido: `<p>El objetivo es romper el anillo vascular.</p>
<ul>
  <li><strong>Doble Arco Aórtico:</strong> Sección del arco dominante menor (generalmente el izquierdo).</li>
  <li><strong>Arco Derecho con Ligamento Arterioso:</strong> Sección del ligamento arterioso.</li>
  <li><strong>Arteria Innominada Anómala:</strong> Pexia aórtica (suspender la aorta al esternón) para liberar presión sobre la tráquea.</li>
</ul>`
    }
  },
  {
    id: 'iaa',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Interrupción del Arco Aórtico (IAA)',
    nombreCorto: 'Interrupción Arco',
    descripcion: 'Discontinuidad luminal completa entre la aorta ascendente y la descendente. Emergencia ductus-dependiente.',
    color: '#b91c1c',
    icon: '⛔',
    imagen: 'assets/images/iaa.png',
    tags: ['Shock', 'DiGeorge', 'Emergencia'],
    diagnostico: {
      titulo: 'Diagnóstico Crítico',
      icon: '🔍',
      contenido: `<p>Se presenta como catástrofe neonatal al cerrar el ductus (días de vida).</p>
<ul>
  <li><strong>Clínica:</strong> Shock, acidosis láctica severa, anuria, palidez grisácea, pulsos femorales ausentes.</li>
  <li><strong>Genética:</strong> Asociación >50% con microdeleción 22q11 (Sd. DiGeorge). Buscar hipocalcemia y timo ausente.</li>
  <li><strong>Anatomía:</strong> Casi siempre asociada a CIV y Ductus. Tipo B (interrupción entre carótida izq y subclavia izq) es la más común.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Flujo sistémico inferior dependiente EXCLUSIVAMENTE del ductus arterioso.</p>
<ul>
  <li>Cierre ductal = Muerte por isquemia multiorgánica.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Resucitación',
      icon: '🚑',
      contenido: `<p>Medida salvavidas inmediata:</p>
<ul>
  <li><strong>Prostaglandina E1 (PGE1) IV</strong> continua para reabrir ductus.</li>
  <li>Intubación y ventilación mecánica. Corrección de acidosis metabólica. Inotrópicos.</li>
  <li>Evitar oxígeno al 100% (el O2 cierra el ductus y baja resistencias pulmonares, robando flujo sistémico).</li>
</ul>`
    },
    cirugia: {
      titulo: 'Reconstrucción del Arco',
      icon: '🔪',
      contenido: `<p>Cirugía neonatal correctora en los primeros días tras estabilización.</p>
<ul>
  <li><strong>Técnica:</strong> Anastomosis término-terminal entre aorta ascendente y descendente (reconstrucción del arco) + Cierre de CIV + Ligadura de Ductus.</li>
  <li>A veces requiere parche de ampliación en aorta.</li>
</ul>`
    }
  },

  // --- CIANÓTICAS Y COMPLEJAS ---
  {
    id: 'fallot',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Tetralogía de Fallot',
    nombreCorto: 'T. Fallot',
    descripcion: 'La cardiopatía cianótica más frecuente. Consta de 4 defectos: CIV amplia, Estenosis Pulmonar (infundibular), Aorta cabalgando sobre el septo y HVD.',
    color: '#ec4899',
    icon: '💗',
    imagen: 'assets/images/fallot.png',
    tags: ['Cianótica', 'Crisis Hipoxémica', 'Corazón en bota'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Cianosis progresiva (generalmente no al nacimiento, sino a los meses).</p>
<ul>
  <li><strong>Auscultación:</strong> Soplo sistólico eyectivo rudo (por la estenosis pulmonar, NO por la CIV). El segundo ruido es único (S2).</li>
  <li><strong>Crisis Hipoxémicas (Spells):</strong> Episodios bruscos de cianosis intensa, hiperpnea e irritabilidad/pérdida de conciencia, desencadenados por llanto, dolor o alimentación. Típico el "encuclillamiento" (squatting) en niños mayores.</li>
  <li><strong>Rx Tórax:</strong> Silueta en "zueco" o "bota" (corazón de tamaño normal con punta levantada y arco pulmonar excavado). Flujo pulmonar disminuido (pulmón claro).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>La severidad depende del grado de obstrucción pulmonar.</p>
<ul>
  <li><strong>Shunt Derecha-Izquierda:</strong> La sangre desoxigenada pasa del VD a la Aorta a través de la CIV debido a la obstrucción pulmonar.</li>
  <li><strong>Hipoxemia Crónica:</strong> Policitemia (aumento de Hto), acropaquias (dedos en palillo de tambor), riesgo de abscesos cerebrales y trombosis.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo de Crisis Hipoxémica',
      icon: '🚑',
      contenido: `<p>Emergencia médica. Objetivo: Aumentar resistencias sistémicas (RVS) y relajar el infundíbulo pulmonar.</p>
<ol>
  <li><strong>Posición Genupectoral:</strong> Rodillas al pecho (aumenta RVS).</li>
  <li><strong>Oxígeno:</strong> Al 100%.</li>
  <li><strong>Morfina:</strong> SC/IV (sedación y reduce espasmo infundibular).</li>
  <li><strong>Volumen:</strong> Bolo de suero fisiológico.</li>
  <li><strong>Fármacos:</strong> Vasoconstrictores (Fenilefrina) para subir RVS o Betabloqueantes (Propranolol) para relajar infundíbulo.</li>
</ol>`
    },
    cirugia: {
      titulo: 'Corrección Total',
      icon: '🔪',
      contenido: `<p>Se realiza electivamente entre los <strong>3 y 6 meses</strong>.</p>
<ul>
  <li><strong>Técnica:</strong> Cierre de la CIV con parche (dirigiendo aorta al VI) + Ampliación del tracto de salida VD (resección muscular infundibular y/o valvuloplastia pulmonar).</li>
  <li><strong>Parche Transanular:</strong> Si el anillo pulmonar es muy pequeño, se corta a través de él y se pone un parche, dejando insuficiencia pulmonar residual (tolerada años, pero requiere reemplazo valvular en edad adulta).</li>
  <li><strong>Fístula de Blalock-Taussig (B-T):</strong> Paliativa (shunt sistémico-pulmonar). Solo si la anatomía es muy desfavorable o el niño muy pequeño para corrección total.</li>
</ul>`
    }
  },
  {
    id: 'tga',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Transposición de Grandes Arterias (TGA)',
    nombreCorto: 'TGA',
    descripcion: 'Inversión de las arterias principales: La Aorta sale del VD y la Pulmonar del VI. Los circuitos están en paralelo en lugar de en serie.',
    color: '#ef4444',
    icon: '❤️',
    imagen: 'assets/images/tga.png',
    tags: ['Cianótica', 'Emergencia Neonatal', 'Huevo en lado'],
    diagnostico: {
      titulo: 'Diagnóstico Neonatal',
      icon: '🔍',
      contenido: `<p>Es la causa más frecuente de cianosis cardíaca en el recién nacido.</p>
<ul>
  <li><strong>Clínica:</strong> Cianosis intensa e inmediata al nacer que <strong>no responde al oxígeno</strong>. El niño puede estar por lo demás confortable ("Happy Cyanosis") al principio.</li>
  <li><strong>Rx Tórax:</strong> "Huevo tumbado sobre su lado". Mediastino superior estrecho. Hiperaflujo pulmonar.</li>
  <li><strong>Eco:</strong> Diagnóstico de certeza. Vasos salen paralelos (no se cruzan). Aorta anterior y a la derecha.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Circuitos separados incompatibles con la vida a menos que exista mezcla (CIA, CIV, Ductus).</p>
<ul>
  <li>Sangre desoxigenada circula sistemáticamente al cuerpo (VD -> Aorta).</li>
  <li>Sangre oxigenada recircula inútilmente a los pulmones (VI -> Pulmonar).</li>
  <li>Si no hay cortocircuito: Hipoxia severa, acidosis y muerte rápida.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Estabilización Urgente',
      icon: '🚑',
      contenido: `<p>Objetivo: Favorecer la mezcla de sangre.</p>
<ul>
  <li><strong>PGE1 (Prostaglandina):</strong> Para mantener el Ductus abierto.</li>
  <li><strong>Atrioseptostomía de Rashkind (Cateterismo):</strong> Procedimiento de urgencia vital. Se rompe el septo interauricular con un balón para crear una CIA amplia y permitir la mezcla de sangre oxigenada hacia la aorta. Salva la vida hasta la cirugía.</li>
</ul>`
    },
    cirugia: {
      titulo: 'Switch Arterial (Jatene)',
      icon: '🔪',
      contenido: `<p>Cirugía anatómica de elección realizada en las <strong>2 primeras semanas</strong> de vida (antes de que el VI pierda fuerza).</p>
<ul>
  <li><strong>Técnica:</strong> Se seccionan la aorta y la pulmonar y se intercambian (se conecta aorta al VI y pulmonar al VD).</li>
  <li><strong>Reimplante de Coronarias:</strong> Paso crítico. Se recortan los botones coronarios de la raíz aórtica antigua y se reinsertan en la "neo-aorta".</li>
  <li><strong>Maniobra de LeCompte:</strong> Se pasan las arterias pulmonares hacia adelante.</li>
  <li><strong>Pronóstico:</strong> Excelente (>95% supervivencia). Función ventricular normal a largo plazo.</li>
</ul>`
    }
  },
  {
    id: 'atresia_tricuspide',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Atresia Tricúspide',
    nombreCorto: 'A. Tricúspide',
    descripcion: 'Ausencia congénita de la válvula tricúspide. No hay comunicación directa entre AD y VD (el VD suele ser hipoplásico).',
    color: '#7c3aed',
    icon: '💜',
    imagen: 'assets/images/atresia_tri.png',
    tags: ['Univentricular', 'Cianótica', 'Eje Izquierdo'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Cardiopatía cianótica con fisiología de ventrículo único.</p>
<ul>
  <li><strong>ECG:</strong> Clave diagnóstica. Cianosis + <strong>Eje Izquierdo</strong> + HVI (el ventrículo funcional es el izquierdo).</li>
  <li><strong>Clínica:</strong> Cianosis desde el nacimiento (la sangre systemic debe pasar por CIA a la AI y mezclarse).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiología Univentricular',
      icon: '⚠️',
      contenido: `<p>Toda la sangre venosa y arterial se mezcla en el la AI/VI.</p>
<ul>
  <li>Sobrecarga de volumen del Ventrículo Izquierdo.</li>
  <li>Cianosis crónica.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo Inicial',
      icon: '🚑',
      contenido: `<p>Si hay estenosis pulmonar severa (flujo pulmonar bajo): PGE1 para mantener ductus. Puede requerir Fístula B-T.</p>`
    },
    cirugia: {
      titulo: 'Paliación Univentricular',
      icon: '🔪',
      contenido: `<p>No es posible tener 2 ventrículos. Se reconduce el flujo venoso sistémico directamente a la arteria pulmonar (bypass del corazón derecho) en 3 etapas.</p>
<ol>
  <li><strong>Neonatal:</strong> Fístula B-T (si falta flujo) o Banding Pulmonar (si sobra).</li>
  <li><strong>Estadio de Glenn (3-6 meses):</strong> Conectar Vena Cava Superior a Arteria Pulmonar.</li>
  <li><strong>Estadio de Fontan (2-4 años):</strong> Conectar Vena Cava Inferior a Arteria Pulmonar (Tubo extracardíaco).</li>
</ol>
<p>Resultado: El niño deja de estar cianótico, pero la sangre fluye al pulmón pasivamente sin bomba ventricular.</p>`
    }
  },
  {
    id: 'tapvc',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Drenaje Venoso Pulmonar Anómalo Total',
    nombreCorto: 'DVPA Total',
    descripcion: 'Las 4 venas pulmonares no conectan con la AI, sino que drenan en la AD o venas sistémicas (VCS, VCI, Seno Coronario).',
    color: '#06b6d4',
    icon: '💙',
    imagen: 'assets/images/tapvc.png',
    tags: ['Emergencia', 'Edema Pulmonar', 'Muñeco de Nieve'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>La presentación depende de si hay obstrucción al flujo venoso.</p>
<ul>
  <li><strong>Obstructivo (habitualmente Infracardíaco):</strong> Emergencia extrema. Neonato con cianosis severa y <strong>edema pulmonar masivo</strong>. Rx con "pulmón blanco" y corazón pequeño. Clínica de distrés respiratorio brutal.</li>
  <li><strong>No Obstructivo (Supracardíaco - más común):</strong> Clínica de ICC y cianosis leve (tipo CIA gigante). Rx con imagen de "Muñeco de Nieve" o "8" (por las venas dilatadas).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Mezcla total en AD. Sobrecarga de cavidades derechas.</p>
<ul>
  <li><strong>Obstrucción:</strong> HTP venocapilar severa y edema. Deterioro rápido.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>DVPA Obstructivo requiere <strong>Cirugía Emergente</strong> (no mejora con medicación). La PGE1 puede empeorar el cuadro al aumentar flujo pulmonar. Posible ECMO pre-quirúrgico.</p>`
    },
    cirugia: {
      titulo: 'Corrección Anatómica',
      icon: '🔪',
      contenido: `<p>Cirugía urgente.</p>
<ul>
  <li><strong>Técnica:</strong> Se anastomosa el colector venoso común (donde confluyen las venas pulmonares) ampliamente a la cara posterior de la aurícula izquierda y se liga la vena vertical anómala. Cierre de la CIA.</li>
  <li>Es una corrección definitiva con buen pronóstico si se supera el postoperatorio inicial (crisis de HTP).</li>
</ul>`
    }
  },
  {
    id: 'truncus',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Tronco Arterioso (Truncus Arteriosus)',
    nombreCorto: 'Truncus',
    descripcion: 'Un solo vaso arterial nace del corazón, cabalga sobre una CIV y da origen a la circulación coronaria, sistémica y pulmonar.',
    color: '#d946ef',
    icon: '💜',
    imagen: 'assets/images/truncus.png',
    tags: ['Cianosis', 'ICC', 'DiGeorge'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Mezcla total y flujo pulmonar torrencial.</p>
<ul>
  <li><strong>Clínica:</strong> ICC severa en primeras semanas + Cianosis leve. Pulsos saltones (robo diastólico).</li>
  <li><strong>Asociación:</strong> Sd. DiGeorge (30%).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Riesgos',
      icon: '⚠️',
      contenido: `<p>Hipertensión pulmonar irreversible rapidísima (meses).</p>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Control intenso de ICC (Diuréticos). Operar antes del mes de vida.</p>`
    },
    cirugia: {
      titulo: 'Cirugía: Rastelli',
      icon: '🔪',
      contenido: `<p>Corrección completa neonatal.</p>
<ul>
  <li>Separa circulación pulmonar de aórtica.</li>
  <li>Cierre de CIV dirigiendo VI al Truncus (que será la Neo-Aorta).</li>
  <li>Colocación de un <strong>tubo valvulado (homoinjerto)</strong> desde el VD a las arterias pulmonares (Rastelli).</li>
</ul>`
    }
  },
  {
    id: 'ebstein',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Anomalía de Ebstein',
    nombreCorto: 'A. Ebstein',
    descripcion: 'Malformación de la válvula tricúspide, desplazada apicalmente hacia el VD, "auriculizando" parte del ventrículo.',
    color: '#14b8a6',
    icon: '💚',
    imagen: 'assets/images/ebstein.png',
    tags: ['Cianosis', 'Arritmias', 'WPW'],
    diagnostico: {
      titulo: 'Diagnóstico y Clínica',
      icon: '🔍',
      contenido: `<p>Gran variabilidad clínica (desde muerte in útero hasta asintomático adulto).</p>
<ul>
  <li><strong>Cianosis:</strong> Por shunt D-I a través de foramen oval (debido a Insuficiencia Tricúspide severa y VD pequeño).</li>
  <li><strong>Arritmias:</strong> Taquicardias supraventriculares, WPW, Flutter.</li>
  <li><strong>Rx Tórax:</strong> Cardiomegalia "caja de enchufe" (extrema).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Problemas',
      icon: '⚠️',
      contenido: `<p>Insuficiencia tricúspide masiva y disfunción VD.</p>`
    },
    tratamientoAgudo: {
      titulo: 'Neonatos',
      icon: '🚑',
      contenido: `<p>Si cianosis crítica ("Muro a Muro"): PGE1 para bajar resistencias pulmonares y mantener flujo. NO (Óxido nítrico).</p>`
    },
    cirugia: {
      titulo: 'Técnica del Cono',
      icon: '🔪',
      contenido: `<p>Técnica de elección actual (Dr. da Silva).</p>
<ul>
  <li><strong>Reconstrucción cónica:</strong> Se crea una válvula tricúspide competente usando el propio tejido valvular del paciente.</li>
  <li>Si el VD es inútil: derivación univentricular (Glenn/Fontan).</li>
</ul>`
    }
  },
  {
    id: 'hlhs',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Síndrome de Corazón Izquierdo Hipoplásico (HLHS)',
    nombreCorto: 'Hipoplasia VI',
    descripcion: 'Poco desarrollo del ventrículo izquierdo, válvula mitral, aorta y válvula aórtica. El corazón izquierdo es incapaz de mantener la circulación sistémica.',
    color: '#be185d',
    icon: '💔',
    imagen: 'assets/images/hlhs.png',
    tags: ['Mortalidad', 'Univentricular', 'Norwood'],
    diagnostico: {
      titulo: 'Presentación',
      icon: '🔍',
      contenido: `<p>Neonato sano que entra en shock brutal a las 24-48h (cierre ductal).</p>
<ul>
  <li>Perfusión sistémica depende 100% del Ductus. Retorno sangíneo pulmonar debe salir por CIA.</li>
  <li><strong>Examen:</strong> Pulsos débiles, acidosis, palidez.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Pronóstico',
      icon: '⚠️',
      contenido: `<p>Mortal 100% en primera semana sin tratamiento. Requiere serie paliativa compleja.</p>`
    },
    tratamientoAgudo: {
      titulo: 'Estabilización',
      icon: '🚑',
      contenido: `<p><strong>PGE1 obligatoria</strong>. Evitar sobrecirculación pulmonar (SatO2 objetivo 75-85%, no 100%).</p>`
    },
    cirugia: {
      titulo: 'Estadio 1: Norwood',
      icon: '🔪',
      contenido: `<p>Cirugía de altísimo riesgo (neonatal).</p>
<ul>
  <li><strong>Norwood-Sano:</strong> Convertir el VD en el ventrículo sistémico. Se conecta la pulmonar a la aorta (Neo-aorta). Se asegura flujo pulmonar con un tubito (Sano o BT).</li>
  <li>Posteriormente Glenn (6m) y Fontan (3a).</li>
  <li><strong>Alternativa:</strong> Trasplante Cardíaco.</li>
</ul>`
    }
  },
  {
    id: 'dorv',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Doble Salida de Ventrículo Derecho (DORV)',
    nombreCorto: 'DORV',
    descripcion: 'Tanto la Aorta como la Pulmonar nacen predominantemente (>50%) del Ventrículo Derecho. Siempre hay una CIV.',
    color: '#ea580c',
    icon: '🔀',
    imagen: 'assets/images/dorv.png',
    tags: ['Compleja', 'Heterogénea'],
    diagnostico: {
      titulo: 'Tipos',
      icon: '🔍',
      contenido: `<p>El cuadro clínico depende de la ubicación de la CIV y si hay estenosis pulmonar.</p>
<ul>
  <li><strong>Tipo Fallot:</strong> CIV subaórtica + Estenosis Pulmonar (Cianosis).</li>
  <li><strong>Tipo TGA (Taussig-Bing):</strong> CIV subpulmonar (Cianosis + ICC).</li>
  <li><strong>Tipo CIV:</strong> CIV subaórtica sin EP (ICC, hiperaflujo).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Mezcla obligada y problemas de flujo (hiperaflujo o hipoflujo).</p>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Según fisiología predominante (ICC o Cianosis).</p>`
    },
    cirugia: {
      titulo: 'Corrección Biventricular',
      icon: '🔪',
      contenido: `<p>Objetivo: Conectar el VI a la Aorta a través del túnel de la CIV.</p>
<ul>
  <li>Parche intracardíaco complejo (túnel VI-Aorta).</li>
  <li>A veces requiere Switch arterial o Rastelli según anatomía.</li>
</ul>`
    }
  },
  {
    id: 'l_tga',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Transposición Corregida de Grandes Arterias (L-TGA)',
    nombreCorto: 'L-TGA',
    descripcion: 'Doble discordancia: Auriculo-ventricular y Ventriculo-arterial. El VD bombea a la aorta (sistémico) y el VI a la pulmonar.',
    color: '#6366f1',
    icon: '🔄',
    imagen: 'assets/images/l_tga.png',
    tags: ['Ventrículo Derecho Sistémico', 'Bloqueo AV'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Fisiológicamente "corregida" (la sangre oxigenada va a la aorta), pero anatómicamente anormal.</p>
<ul>
  <li><strong>Clínica:</strong> Puede ser asintomática si no hay defectos asociados. Si hay CIV o Estenosis Pulmonar (común), clínica de cianosis o ICC.</li>
  <li><strong>ECG:</strong> Ondas Q en derivaciones derechas (V1-V2) y ausentes en izquierdas (inversión septal). Bloqueo AV frecuente.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Complicaciones a Largo Plazo',
      icon: '⚠️',
      contenido: `<p>El Ventrículo Derecho anatómico no está diseñado para soportar la presión sistémica de por vida.</p>
<ul>
  <li><strong>Fallo Ventricular Derecho:</strong> Claudicación progresiva del ventrículo sistémico en la edad adulta.</li>
  <li><strong>Insuficiencia Tricúspide Severa:</strong> La válvula sistémica (tricúspide) falla bajo alta presión.</li>
  <li><strong>Bloqueo AV Completo:</strong> Riesgo de 2% anual de desarrollar bloqueo degenerativo.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Si hay insuficiencia cardíaca aguda: Tratamiento estándar (diuréticos/IECA). Marcapasos si hay bloqueo AV.</p>`
    },
    cirugia: {
      titulo: 'Doble Switch',
      icon: '🔪',
      contenido: `<p>Cirugía compleja reservada para fallo del VD sistémico o defectos asociados severos.</p>
<ul>
  <li><strong>Doble Switch (Senning/Mustard + Jatene):</strong> Redirige flujos auriculares y arteriales para que el VI asuma la circulación sistémica.</li>
  <li><strong>Bandaje Pulmonar:</strong> Para "entrenar" al VI antes del Doble Switch si ha perdido masa muscular.</li>
</ul>`
    }
  },
  {
    id: 'apsi',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Atresia Pulmonar con Septo Íntegro (APSI)',
    nombreCorto: 'APSI',
    descripcion: 'La válvula pulmonar es una placa impermeable. No hay CIV. El VD suele ser hipoplásico.',
    color: '#0ea5e9',
    icon: '⛔',
    imagen: 'assets/images/apsi.png',
    tags: ['Cianosis', 'Ductus Dependiente', 'VD Hipoplásico'],
    diagnostico: {
      titulo: 'Diagnóstico Neonatal',
      icon: '🔍',
      contenido: `<p>Cianosis severa neonatal.</p>
<ul>
  <li><strong>Ductus dependiente pulmonar:</strong> Todo el flujo pulmonar viene del Ductus.</li>
  <li><strong>Sinusoides Coronarios:</strong> Conexiones fistulosas entre el VD hipertensivo y las arterias coronarias. Pueden causar isquemia si se descomprime el VD bruscamente.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Obstrucción total de salida derecha.</p>
<ul>
  <li>Hipoplasia severa del VD y de la válvula tricúspide.</li>
  <li>Mortalidad alta sin tratamiento inmediato.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Estabilización',
      icon: '🚑',
      contenido: `<p><strong>PGE1 obligatoria</strong> para mantener ductus permeable.</p>`
    },
    cirugia: {
      titulo: 'Estrategia',
      icon: '🔪',
      contenido: `<p>Depende del tamaño del VD y presencia de sinusoides.</p>
<ul>
  <li><strong>VD Viable:</strong> Valvuloplastia con Radiofrecuencia (percutánea) o Valvotomía quirúrgica para favorecer crecimiento del VD.</li>
  <li><strong>VD No Viable:</strong> Fístula B-T (shunt) y camino univentricular (Fontan).</li>
  <li>Si hay sinusoides coronarios dependientes del VD: Contraindicado descomprimir el ventrículo (causaría infarto masivo). Se requiere Trasplante.</li>
</ul>`
    }
  },
  {
    id: 'alcapa',
    categoria: 'Otras Patologías',
    nombre: 'Origen Anómalo de Coronaria Izquierda (ALCAPA)',
    nombreCorto: 'ALCAPA',
    descripcion: 'La arteria coronaria izquierda nace de la arteria pulmonar en lugar de la aorta (Síndrome de Bland-White-Garland).',
    color: '#f43f5e',
    icon: '💔',
    imagen: 'assets/images/alcapa.png',
    tags: ['Infarto Infantil', 'Isquemia', 'Muerte Súbita'],
    diagnostico: {
      titulo: 'Clínica de Infarto',
      icon: '🔍',
      contenido: `<p>Síntomas aparecen al caer las resistencias pulmonares (1-2 meses).</p>
<ul>
  <li><strong>Clínica:</strong> Irritabilidad extrema, sudoración con las tomas (angina), palide y shock. "Cólicos" inexplicables.</li>
  <li><strong>ECG:</strong> Ondas Q profundas en I, aVL y laterales. Signos de isquemia anterolateral.</li>
  <li><strong>Eco:</strong> VI dilatado con mala función. Flujo coronario anormal (retrógrado).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Isquemia Miocárdica',
      icon: '⚠️',
      contenido: `<p>El miocardio izquierdo recibe sangre venosa (desoxigenada) y a baja presión (pulmonar).</p>
<ul>
  <li>Infarto de miocardio extenso.</li>
  <li>Disfunción ventricular severa reversible si se opera a tiempo.</li>
  <li>Insuficiencia Mitral isquémica.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Estabilización de fallo cardiaco. Inotrópicos, diuréticos. Cirugía Urgente.</p>`
    },
    cirugia: {
      titulo: 'Reimplante Coronario',
      icon: '🔪',
      contenido: `<p>Debe realizarse al diagnóstico.</p>
<ul>
  <li><strong>Reimplante directo:</strong> Desconexión de la coronaria de la pulmonar y anastomosis a la aorta (botón aórtico).</li>
  <li><strong>Técnica de Takeuchi:</strong> Túnel intrapulmonar (si la anatomía no permite reimplante directo).</li>
  <li><strong>Pronóstico:</strong> La función ventricular suele recuperarse espectacularmente tras la revascularización.</li>
</ul>`
    }
  },
  {
    id: 'ventana',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Ventana Aortopulmonar',
    nombreCorto: 'V. Aortopulmonar',
    descripcion: 'Comunicación grande entre la aorta ascendente y el tronco pulmonar por defecto de tabicación (separación incompleta).',
    color: '#10b981',
    icon: '🪟',
    imagen: 'assets/images/ventana.png',
    tags: ['Shunt Masivo', 'HTP Precoz'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Clínica idéntica a un canal arterial (DAP) gigante o Truncus.</p>
<ul>
  <li><strong>Clínica:</strong> ICC severa precoz, pulsos saltones. Soplo sistólico (no continuo, a diferencia del DAP, porque las presiones se igualan rápido).</li>
  <li><strong>Eco:</strong> Defecto entre grandes vasos por encima de las válvulas semilunares (que están bien formadas, a diferencia del Truncus).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Cortocircuito de alta presión y alto flujo.</p>
<ul>
  <li>Insuficiencia cardíaca congestiva intratable.</li>
  <li>Desarrollo de enfermedad vascular pulmonar (Eisenmenger) extremadamente rápido.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Tratamiento descongestivo intenso pre-quirúrgico.</p>`
    },
    cirugia: {
      titulo: 'Cierre con Parche',
      icon: '🔪',
      contenido: `<p>Cirugía correctora neonatal o en lactante pequeño.</p>
<ul>
  <li><strong>Técnica:</strong> Sección del defecto y cierre del orificio aórtico con parche (o sutura directa si es pequeño) bajo CEC.</li>
</ul>`
    }
  },
  {
    id: 'shone',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Complejo de Shone',
    nombreCorto: 'Sd. Shone',
    descripcion: 'Síndrome caracterizado por múltiples lesiones obstructivas izquierdas en serie (supramitral, mitral, subaórtica, coartación).',
    color: '#be123c',
    icon: '🪜',
    imagen: 'assets/images/shone.png',
    tags: ['Obstructiva Multinivel', 'Estenosis Mitral', 'Compleja'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Requiere evaluación exhaustiva de todo el corazón izquierdo.</p>
<ul>
  <li><strong>4 Componentes Clásicos:</strong>
    1. Anillo supramitral.
    2. Válvula mitral en "paracaídas" (un solo músculo papilar).
    3. Estenosis subaórtica (membrana/rodete).
    4. Coartación de aorta.
  </li>
  <li><strong>Clínica:</strong> Desde asintomática hasta ICC severa e hipertensión pulmonar venosa.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Hemodinamia',
      icon: '⚠️',
      contenido: `<p>Obstrucción al llenado y vaciado del VI + HTP postcapilar.</p>
<ul>
  <li>La estenosis mitral congénita (paracaídas) es el componente más difícil de manejar.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Diuréticos si hay congestión pulmonar. La coartación suele ser la primera en manifestarse y tratarse.</p>`
    },
    cirugia: {
      titulo: 'Reparación Escalonada',
      icon: '🔪',
      contenido: `<p>Abordaje individualizado de cada lesión.</p>
<ul>
  <li><strong>Neonatal:</strong> Reparación de Coartación.</li>
  <li><strong>Lactante:</strong> Resección de anillo supramitral y membrana subaórtica. Plastia mitral (difícil).</li>
  <li>A veces requiere reemplazo valvular mitral (prótesis) si la estenosis es severa e irrepairable (Mecánica o Melody en posición mitral).</li>
</ul>`
    }
  },
  {
    id: 'cimitarra',
    categoria: 'Cortocircuitos (Shunts)',
    nombre: 'Síndrome de la Cimitarra',
    nombreCorto: 'Sd. Cimitarra',
    descripcion: 'Drenaje venoso anómalo parcial del pulmón derecho a la Vena Cava Inferior. Se asocia a hipoplasia del pulmón derecho y dextrocardia.',
    color: '#06b6d4',
    icon: '🗡️',
    imagen: 'assets/images/cimitarra.png',
    tags: ['PAPVR', 'Dextrocardia', 'Hipoplasia Pulmonar'],
    diagnostico: {
      titulo: 'Diagnóstico por Imagen',
      icon: '🔍',
      contenido: `<p>La Rx de tórax es patognomónica.</p>
<ul>
  <li><strong>Signo de la Cimitarra:</strong> Sombra vascular curva a lo largo del borde cardiaco derecho (la vena anómala bajando hacia el diafragma) que recuerda a una espada turca.</li>
  <li><strong>AngioTC:</strong> Confirma el drenaje a VCI y evalúa el secuestro pulmonar (irrigación arterial sistémica) asociado.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Shunt Izquierda-Derecha parcial.</p>
<ul>
  <li>Sobrecarga de volumen de cavidades derechas (similar a CIA).</li>
  <li>Hipertensión pulmonar si el shunt es grande o hay estenosis de la vena.</li>
  <li>Infecciones respiratorias recurrentes en el pulmón hipoplásico.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Generalmente conservador si el Qp/Qs es bajo (<1.5). Tratamiento de infecciones respiratorias.</p>`
    },
    cirugia: {
      titulo: 'Reimplante',
      icon: '🔪',
      contenido: `<p>Indicado si Qp/Qs > 1.5 o HTP.</p>
<ul>
  <li>Desconexión de la vena anómala de la VCI y reimplante en la Aurícula Izquierda (directo o con túnel).</li>
  <li>Embolización de arterias sistémicas colaterales si existe secuestro pulmonar.</li>
</ul>`
    }
  },
  {
    id: 'ventriculo_unico',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Ventrículo Único (DILV)',
    nombreCorto: 'V. Único',
    descripcion: 'Doble Entrada de Ventrículo Izquierdo (DILV) es la forma más común. Ambas aurículas drenan en un ventrículo principal a través de dos válvulas AV.',
    color: '#7c3aed',
    icon: '🖤',
    imagen: 'assets/images/single_ventricle.png',
    tags: ['Univentricular', 'Cianosis', 'Compleja'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Existe una cámara ventricular dominante (80% morfología izquierda) y una rudimentaria.</p>
<ul>
  <li><strong>Clínica:</strong> Similar a atresia tricúspide. Cianosis e ICC (si no hay estenosis pulmonar).</li>
  <li><strong>ECG:</strong> Hipertrofia ventricular única.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiología',
      icon: '⚠️',
      contenido: `<p>Mezcla obligada de sangre.</p>
<ul>
  <li>Hipertensión pulmonar severa si no existe protección (estenosis pulmonar).</li>
  <li>Sobrecarga de volumen crónica del ventrículo único.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Balancear el flujo pulmonar/sistémico. Diuréticos si ICC.</p>`
    },
    cirugia: {
      titulo: 'Paliación Tipo Fontan',
      icon: '🔪',
      contenido: `<p>Camino univentricular estándar.</p>
<ol>
  <li><strong>Neonatal:</strong> Banding pulmonar (si hiperaflujo) o Fístula BT (si cianosis).</li>
  <li><strong>Glenn:</strong> 4-6 meses.</li>
  <li><strong>Fontan:</strong> 3-4 años.</li>
</ol>`
    }
  },
  {
    id: 'isomerismos',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Isomerismos (Heterotaxias)',
    nombreCorto: 'Heterotaxia',
    descripcion: 'Fallo en la lateralización de los órganos (Situs Ambiguus). Afecta corazón, pulmones, hígado y bazo.',
    color: '#a855f7',
    icon: '🎲',
    imagen: 'assets/images/heterotaxy.png',
    tags: ['Asplenia', 'Polisplenia', 'Compleja'],
    diagnostico: {
      titulo: 'Tipos',
      icon: '🔍',
      contenido: `<p>Síndrome complejo multiorgánico.</p>
<ul>
  <li><strong>Isomerismo Derecho (Asplenia):</strong> "Doble lado derecho". Tendencia a cardiopatías cianóticas complejas (canal AV, TGA, EP severa), hígado central, ausencia de bazo (riesgo sepsis).</li>
  <li><strong>Isomerismo Izquierdo (Polisplenia):</strong> "Doble lado izquierdo". Interrupción de VCI, continuación por Ácigos, Bloqueo AV completo, múltiples bazos pequeños.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Riesgos',
      icon: '⚠️',
      contenido: `<p>Mortalidad elevada en Isomerismo Derecho.</p>
<ul>
  <li><strong>Inmunodeficiencia:</strong> Sepsis fulminante por bacterias encapsuladas en Asplenia (requieren profilaxis antibiótica de por vida).</li>
  <li><strong>Arritmias:</strong> Bloqueo cardíaco en Polisplenia.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Profilaxis antibiótica (Penicilina) en Asplenia. Marcapasos en Polisplenia.</p>`
    },
    cirugia: {
      titulo: 'Corrección',
      icon: '🔪',
      contenido: `<p>Suelen requerir fisiología univentricular (Fontan) debido a la complejidad de los defectos (Canal AV desbalanceado, retornos venosos anómalos).</p>`
    }
  },
  {
    id: 'fistulas_coronarias',
    categoria: 'Otras Patologías',
    nombre: 'Fístulas Coronarias',
    nombreCorto: 'Fístulas Cor.',
    descripcion: 'Comunicación anormal entre una arteria coronaria y una cámara cardíaca o vaso (arteria pulmonar, seno coronario, vena cava).',
    color: '#e11d48',
    icon: '➰',
    imagen: 'assets/images/fistula.png',
    tags: ['Robo Coronario', 'Soplo Continuo'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>La mayoría son congénitas. La coronaria derecha es la más afectada.</p>
<ul>
  <li><strong>Auscultación:</strong> Soplo continuo o sistodiastólico en borde esternal bajo (superficial).</li>
  <li><strong>Clínica:</strong> Asintomática (pequeñas) o ICC/Isquemia (grandes).</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Complicaciones',
      icon: '⚠️',
      contenido: `<p>Robo de flujo al miocardio distal.</p>
<ul>
  <li>Isquemia miocárdica.</li>
  <li>Dilatación aneurismática de la coronaria fistulosa (riesgo ruptura).</li>
  <li>Endocarditis infecciosa.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Seguimiento si es pequeña. Profilaxis endocarditis.</p>`
    },
    cirugia: {
      titulo: 'Cierre',
      icon: '🔪',
      contenido: `<p>Indicado si hay síntomas o shunt significativo.</p>
<ul>
  <li><strong>Cateterismo (Elección):</strong> Cierre con Coils o Amplatzer Vascular Plug.</li>
  <li><strong>Cirugía:</strong> Ligadura de la fístula en superficie epicárdica (sin CEC) o cierre interno (con CEC) si es intracocavitaria.</li>
</ul>`
    }
  },
  {
    id: 'estenosis_mitral',
    categoria: 'Lesiones Obstructivas',
    nombre: 'Estenosis Mitral Congénita',
    nombreCorto: 'Estenosis Mitral',
    descripcion: 'Obstrucción al flujo de entrada del ventrículo izquierdo. Rara aislada, común en Shone.',
    color: '#be123c',
    icon: '🥀',
    imagen: 'assets/images/estenosis_mitral.png',
    tags: ['HTP Venosa', 'Rara', 'Paracaídas'],
    diagnostico: {
      titulo: 'Diagnóstico',
      icon: '🔍',
      contenido: `<p>Síntomas de edema pulmonar y fallo izquierdo.</p>
<ul>
  <li><strong>Auscultación:</strong> Retumbo diastólico en ápex (difícil de oír en taquicardia).</li>
  <li><strong>Eco:</strong> Músculos papilares fusionados (Paracaídas), anillo hipoplásico o valvas engrosadas ("Hamaca").</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Fisiopatología',
      icon: '⚠️',
      contenido: `<p>Aumento de presión en Aurícula Izquierda -> HTP venocapilar -> HTP arterial reactiva.</p>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Diuréticos, inotrópicos. Ventilación mecánica si edema agudo.</p>`
    },
    cirugia: {
      titulo: 'Plastia vs Reemplazo',
      icon: '🔪',
      contenido: `<p>El manejo es muy desafiante.</p>
<ul>
  <li><strong>Plastia Mitral:</strong> Se intenta siempre, pero los resultados son subóptimos.</li>
  <li><strong>Reemplazo Valvular:</strong> Prótesis mecánica supraanular (Melody/Mecánica) es a menudo inevitable, con los problemas de anticoagulación y tamaño en niños pequeños.</li>
</ul>`
    }
  },
  {
    id: 'agenesia_pulmonar',
    categoria: 'Cianóticas y Complejas',
    nombre: 'Agenesia de Válvula Pulmonar',
    nombreCorto: 'Agenesia VP',
    descripcion: 'Variante de Tetralogía de Fallot donde la válvula pulmonar está ausente o rudimentaria, provocando insuficiencia pulmonar masiva.',
    color: '#0891b2',
    icon: '🎈',
    imagen: 'assets/images/agenesia_vp.png',
    tags: ['Fallot', 'Broncomalacia', 'Insuficiencia Pulmonar'],
    diagnostico: {
      titulo: 'Diagnóstico Prenatal/Neonatal',
      icon: '🔍',
      contenido: `<p>Diagnosis a menudo fetal.</p>
<ul>
  <li><strong>Características:</strong> CIV + Insuficiencia Pulmonar "libre" + Aneurismas masivos de las ramas pulmonares.</li>
  <li><strong>Clínica:</strong> Distrés respiratorio severo por compresión bronquial (no por fallo cardíaco). Las arterias pulmonares gigantes aplastan la tráquea y bronquios.</li>
</ul>`
    },
    consecuencias: {
      titulo: 'Respiratorias',
      icon: '⚠️',
      contenido: `<p>Traqueobroncomalacia severa.</p>
<ul>
  <li>El niño puede morir de asfixia por colapso de la vía aérea.</li>
  <li>La insuficiencia pulmonar causa dilatación del VD, que comprime aún más.</li>
</ul>`
    },
    tratamientoAgudo: {
      titulo: 'Manejo',
      icon: '🚑',
      contenido: `<p>Intubación difícil. Posición prono para liberar la vía aérea.</p>`
    },
    cirugia: {
      titulo: 'Reducción de Arterias',
      icon: '🔪',
      contenido: `<p>Cirugía temprana sintomática.</p>
<ul>
  <li><strong>Técnica:</strong> Cierre de CIV + Plicatura (reducción de tamaño) de las arterias pulmonares aneurismáticas para liberar los bronquios + Implante de válvula pulmonar (homoinjerto) para frenar la insuficiencia.</li>
  <li>La malacia bronquial puede persistir meses/años.</li>
</ul>`
    }
  }
];

// Función helper para obtener por ID
function getCardiopatiaById(id) {
  return cardiopatias.find(c => c.id === id);
}

// Búsqueda simple
function searchCardiopatias(query) {
  const q = query.toLowerCase();
  return cardiopatias.filter(c =>
    c.nombre.toLowerCase().includes(q) ||
    c.descripcion.toLowerCase().includes(q) ||
    c.tags.some(t => t.toLowerCase().includes(q))
  );
}
