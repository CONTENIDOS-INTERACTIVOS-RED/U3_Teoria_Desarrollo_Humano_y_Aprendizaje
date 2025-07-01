export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estudio de los procesos de aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría conductista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios teóricos del conductismo ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'El clásico experimento de Pavlov - El condicionamiento operante de Skinner',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de conductismo ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teoría ecológica del aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El ambiente ecológico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los principios educativos de la teoría de Bronfenbrenner',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Perspectiva del ciclo vital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Características de la perspectiva teórica del ciclo vital en el ser humano',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principales autores de la perspectiva del ciclo vital',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'König, K. (2021). Los tres primeros años del niño: adquisición del andar erguido aprendizaje del habla despertar del pensar. Editorial Antroposófica. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/196980?page=64.',
    },
    {
      referencia:
        'Torres, A. (2025). Aprendizaje observacional: definición, fases y usos. Portal Psicología y Mente.  ',
      link: 'https://psicologiaymente.com/psicologia/aprendizaje-observacional',
    },
    {
      referencia:
        'Holmes, J. (2009). Teoría del apego y psicoterapia: en busca de la base segura. Editorial Desclée de Brouwer.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47885',
    },
    {
      referencia:
        'Serrano, P. (2019). La integración sensorial en el desarrollo y aprendizaje infantil. Narcea Ediciones.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/113159?page=82. ',
    },
    {
      referencia:
        'Pellón Suárez de Puga, R. (2015). Psicología del aprendizaje. UNED - Universidad Nacional de Educación a Distancia.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48751',
    },
    {
      referencia:
        'Comeche Moreno, M. I. & Vallejo Pareja, M. Á. (2015). Manual de terapia de conducta en la infancia (2a ed.). Dykinson. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56777',
    },
    {
      referencia:
        'Ardila, R. (s.f.). El mundo de la psicología. Los orígenes del conductismo, Watson y el manifiesto conductista de 1913. Revista latinoamericana de Psicología.  ',
      link: 'http://www.scielo.org.co/pdf/rlps/v45n2/v45n2a14.pdf',
    },
    {
      referencia:
        'Pérez Rodríguez, P. (2006). Revisión de las teorías del aprendizaje más sobresalientes del siglo XX. Red Tiempo de Educar.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/23728',
    },
    {
      referencia:
        'Lizaso Elgarresta, I., Acha Morcillo, J. & Arruabarrena, L. R. (2018). Desarrollo biológico y cognitivo en el ciclo vital. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123058',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente ecológico',
      significado:
        'Se refiere al entorno natural en el que se desarrollan las interacciones entre los seres vivos y su medio. Este concepto está estrechamente relacionado con la ecología, que es la rama de la biología que estudia las relaciones entre los organismos vivos y su entorno.',
    },
    {
      termino: 'Ciclo vital',
      significado:
        'Es un término ampliamente utilizado en biología y otras disciplinas, para describir el proceso de desarrollo y existencia de un organismo desde su nacimiento, hasta su muerte.',
    },
    {
      termino: 'Condicionamiento operante o instrumental',
      significado:
        'Es un tipo de aprendizaje asociativo que se basa en la relación entre las conductas y sus consecuencias. Fue desarrollado principalmente por Burrhus Frederic Skinner, aunque el término "instrumental" fue introducido por Edward Thorndike. Este proceso de aprendizaje implica que las conductas seguidas por consecuencias positivas (recompensas), tienen más probabilidad de repetirse, mientras que aquellas seguidas por consecuencias negativas (castigos), disminuyen su frecuencia.',
    },
    {
      termino: 'Conductismo',
      significado:
        'También conocido como behaviorismo, es una corriente psicológica que se enfoca en el estudio del comportamiento observable y medible, excluyendo los procesos mentales internos como la conciencia y la introspección.',
    },
    {
      termino: 'Determinismo ambiental',
      significado:
        'Es una teoría que sostiene que el entorno físico, incluyendo factores como el clima, los accidentes geográficos y los recursos naturales, influye significativamente en el desarrollo de las sociedades y culturas humanas. Esta teoría se ha desarrollado en diversas disciplinas, incluyendo la antropología y la geografía.',
    },
    {
      termino: 'Desarrollo humano',
      significado:
        'El desarrollo humano es un concepto que abarca múltiples dimensiones, incluyendo el bienestar, las capacidades y la libertad de las personas. Se centra en mejorar la calidad de vida y las oportunidades de desarrollo personal y social. Este concepto surgió en la década de 1990 como un enfoque integral para evaluar el bienestar humano en todos los aspectos de la vida.',
    },
    {
      termino: 'Desarrollo psicosocial',
      significado:
        'Es un proceso integral que abarca los cambios y adaptaciones psicológicas y sociales que experimentan los individuos a lo largo de su vida. Este proceso está influenciado por factores internos, como la personalidad, y externos, como las relaciones sociales y el entorno cultural.',
    },
    {
      termino: 'Estímulo (ambiental)',
      significado:
        'Cualquier factor, ya sea externo o interno, que puede desencadenar una reacción o cambio en un organismo o sistema.',
    },
    {
      termino: 'Teoría ecología del aprendizaje',
      significado:
        'Se enfoca en comprender cómo el aprendizaje ocurre en una variedad de contextos y entornos, más allá de la educación formal.',
    },
    {
      termino: 'Objetividad',
      significado:
        'Es la cualidad de presentar información o emitir juicios basados en hechos verificables y sin influencia de emociones, prejuicios o interpretaciones personales. Se trata de describir la realidad tal como es, sin adornos ni sesgos subjetivos, lo que la hace fundamental en áreas como la ciencia, el periodismo y la justicia.',
    },
  ],
}
