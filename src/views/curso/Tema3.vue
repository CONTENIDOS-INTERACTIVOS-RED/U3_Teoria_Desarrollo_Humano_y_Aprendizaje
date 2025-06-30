<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Teoría conductista'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-5.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6.order-1
            p(data-aos="fade-left").mb-4 Para conocer esta temática, lo invitamos a escuchar el siguiente pódcast, Teoría conductista
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principios teóricos del conductismo

    p.mb-5 El conductismo contiene cuatro principios teóricos: la objetividad, el determinismo ambiental, la generalización y el enfoque de aprendizaje:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/2.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="63%" y="48%" numero="+")
                h5 01. La objetividad 
                p Está dada por la necesidad de recopilar y analizar datos observables y medibles, evitando la subjetividad de la investigación o el estudio.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="48%" numero="+")
                h5 02. El determinismo ambiental 
                p Está relacionado con la forma como el entorno contiene estímulos que influyen sobre las personas y sus conductas, por tanto, lo innato o hereditario, resulta siendo secundario en lo observable.
    
              .bg-color-white.box-shadow.p-3(x="63%" y="92%" numero="+")
                h5 03. La generalización
                p Lo que implica que todo ser humano tiene las mismas formas de interactuar con el entorno, asunto que se evidenciaba por la reacción a los estímulos en condiciones observables y experimentales.
    
              .bg-color-white.box-shadow.p-3(x="90%" y="92%" numero="+")
                h5 04. El enfoque de aprendizaje
                p Que significa que lo aprendido a través de estímulos y las respuestas, puede incidir en su condicionamiento con el tiempo y las interacciones con el entorno.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] El clásico experimento de Pavlov - El condicionamiento operante de Skinner  

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Como se mencionó previamente, la corriente conductivista proviene de la Psicología y atendiendo a los propósitos de estudio, la educación ha asumido en parte, estos constructos, para modelar escenarios de contextos escolares, formales o informales. Al respecto, el conductismo ha sido responsable de un sin número de estrategias o metodologías de enseñanza, en las que se centra la educación sobre el modelamiento de comportamientos específicos a través de refuerzos (o acciones tipo castigos), en donde se aplican mecanismos y rutas de medición, objetivas sobre la conducta del estudiante. 
        p(data-aos="fade-left") Uno de los conceptos más importantes del aprendizaje conductista es el condicionamiento, el cual presenta dos variables históricas y prácticas:
    
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Condicionamiento clásico" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Condicionamiento clásico
            p La variable del condicionamiento clásico aportada por Pavlov, quien plantea que el aprendizaje es un resultado asociativo entre el estímulo-respuesta; se trata de una manipulación mental para reprogramar las funciones naturales del cuerpo de un ser vivo; por tanto, es una forma de aprendizaje en la que el estímulo desencadena una respuesta biológica que se asocia a un nuevo estímulo, dando como resultado, la misma reacción.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Condicionamiento operante" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Condicionamiento operante
            p El condicionamiento operante establece que es posible aumentar o disminuir una determinada conducta, agregando una o varias consecuencias. 
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Tipos de conductismo 
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Posterior a los experimentos de Watson y Skinner, la corriente conductista ha tenido otros autores y promotores que han explicado algunas tipologías. A diferencia de lo que muchas personas creen, la corriente conductista no terminó en la década de 1960 con los experimentos y los estudios en la conducta animal. A continuación, se detallan otros autores: 

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Tipos de conductismo
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-8.text-white.text-center Tipo
            th.bg-color-8.text-white.text-center Autor
            th.bg-color-8.text-white.text-center Descripción
        tbody.bg-color-3
          tr
            td Conductismo clásico.
            td Iván Pávlov a finales del siglo XIX.
            td La relación entre el estímulo ambiental y las respuestas del individuo.
          tr
            td Conductismo radical.
            td Burrhus Frederic Skinner (1904-1990) y John B. Watson (1878-1958).
            td Además del condicionamiento simple, también se evidencia que la conducta está determinada por las consecuencias de las acciones.
          tr
            td Interconductismo de Kantor.
            td Jacob Robert Kantor (1888-1984).
            td Explica que la conducta es más que una respuesta a los estímulos del entorno y amplía que la conducta es producto de la interacción entre el sujeto y el entorno.
          tr
            td Conductismo intencional.
            td Edward C. Tolman (1886-1959).
            td Propuso que la conducta es dirigida hacia un objetivo y es propositiva. Aporta que los mapas cognitivos son mecanismos de aprendizaje.
          tr
            td Conductismo deductivo.
            td Clark Leonard Hull (1884-1952).
            td Plantea que la conducta y el aprendizaje son claves para sobrevivir, fomentan hábitos y son más que la respuesta a impulsos.
          tr
            td Conductismo teleológico.
            td Howard Rachlin (1935-2021).
            td Introduce que la conducta está dirigida a un fin y destaca la idea del marco temporal de los sucesos.
          tr
            td Conductismo teórico.
            td John Eric Rayner Staddon (1937- ).
            td Relaciona la conducta con variables ambientales y biológicas, pero no plantea relación o mención sobre los procesos cognitivos.
          tr
            td Conductismo psicológico.
            td Arthur W. Staats (1924-2021).
            td Se introduce el concepto de repertorios básicos de conducta y se señala la importancia de los factores emocionales.
          tr
            td Conductismo biológico.
            td William David Timberlake (1942-2019).
            td Destaca el origen biológico de la conducta, aportando además explicación de origen ecológico.

    h2.mb-5(data-aos="fade-left") John Broadus Watson

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 El conductismo aplicado a la educación en contextos escolares, ha sido y sigue siendo utilizado, cuando los profesores, mentores o familiares hacen refuerzos positivos a modo de elogios o recompensas, cuando se trata de motivar algún buen comportamiento. También se evidencia en temas relacionados con la convivencia, la disciplina y el entorno seguro, en donde el castigo se advierte ante cualquier indicio o evidencia de comportamiento inadecuado. 
        p(data-aos="fade-left") En sus trabajos experimentales conductistas para la década de 1930, Watson tenía como referencia los resultados observables y objetivos. Según Ardila (s.f.), una de sus afirmaciones fue “dadme una docena de niños sanos y bien formados y mi mundo específico para criarlos, y yo me comprometo a tomar cualquiera de ellos al azar y entrenarlo para que llegue a ser cualquier tipo de especialista que quiera escoger: médico, abogado, artista, mercader y si, incluso mendigo y ladrón, sin tener para nada en cuenta sus talentos, capacidades, tendencias, habilidades, vocación o raza de sus antepasados”(Watson citado por Ardila, 1930, p. 104). 
    
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/pdf/rlps/v45n2/v45n2a14.pdf" target="_blank" rel="noopener noreferrer") Ardila, R. (s.f.). El mundo de la psicología. Los orígenes del conductismo, Watson y el manifiesto conductista de 1913. Revista latinoamericana de Psicología.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zsieoMlajME " target="_blank" rel="noopener noreferrer") Sprouts Español. (2021). La Teoría del Conductismo de Watson [video]. YouTube.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yfFjgPiRkWw " target="_blank" rel="noopener noreferrer") Sprouts Español. (2022). Condicionamiento Clásico de Pavlov [video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ymKjTdPx1j0" target="_blank" rel="noopener noreferrer") Sprouts Español. (2021). Condicionamiento Operante de Skinner: Recompensas & Castigos [video]. YouTube. 





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
