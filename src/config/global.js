export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Estudio de la relación con el medio',
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
        titulo: 'Teoría del aprendizaje social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fases del aprendizaje social observacional o vicario',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La teoría del apego de John Bowlby',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Liberadores sociales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La monotropía y la afectación del apego en el desarrollo ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desarrollo del vínculo del apego',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Categorías de apego - Mary Ainsworth',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Alteraciones por apego desorganizado',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Teoría conductista',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios teóricos del conductismo ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'El clásico experimento de Pavlov - El condicionamiento operante de Skinner',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tipos de conductismo ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Teoría ecológica del aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El ambiente ecológico',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Los principios educativos de la teoría de Bronfenbrenner',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Perspectiva del ciclo vital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Características de la perspectiva teórica del ciclo vital en el ser humano',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Principales autores de la perspectiva del ciclo vital',
            hash: 't_5_2',
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
      termino: '',
      significado: '',
    },
    {
      termino: '',
      significado: '',
    },
  ],
}
