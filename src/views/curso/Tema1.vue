<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teoría del aprendizaje social'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un niño que imita a su padre a la hora de comer o vestirse; una niña que imita a su madre a la hora de maquillarse o arreglar su pelo; son tan solo dos ejemplos de cómo los niños y las niñas tienen un referente que influencia sus comportamientos en los primeros años de vida.
        p(data-aos="fade-left") El psicólogo Albert Bandura (1925-1921), es el autor de la “Teoría del Aprendizaje Social”, aprendizaje observacional o teoría del aprendizaje vicario, que analiza el comportamiento humano y su relación con el entorno social. Esta teoría tiene como idea principal, que las personas aprenden por observación e imitación de conductas de otros; por lo tanto, el efecto, uno de los efectos de la interacción social, es el aprendizaje conductual. 
        p La teoría del aprendizaje social afirma que cuando una persona interioriza un aprendizaje, también interactúa con lo que sucede en el entorno; por tanto, deja de ser un espectador o un simple receptor, pues el contexto genera una influencia sobre él, sobre su comportamiento y sobre la función de aprendizaje (variables cognitivas).
    
    .bg-full-width.bg-color-3.mb-5
      .p-4.py-lg-0.px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p Las variables cognitivas son las capacidades y procesos mentales que permiten a las personas, lograr el pensamiento, aprender, y realizar acciones cotidianas. Dentro de las capacidades cognitivas se encuentran: 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Memoria.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Atención.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Percepción.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Lenguaje.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Razonamiento.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Motivación.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Orientación.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fases del aprendizaje social observacional o vicario
    
    p.mb-5 En su estudio, Bandura planteó que hay procesos que influyen en el aprendizaje social y a esto lo llamó procesos de mediación, definido como las técnicas para adquirir conocimientos o habilidades mediante la observación a otras personas. Según el autor, existen cuatro procesos de mediación:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Atención")
            p Implica que la persona, sin distinción de edad, tiene la capacidad de poner su sentido visual para observar con detalle, los comportamientos novedosos y diferentes de su entorno. 
            p De acuerdo con lo anterior, si un comportamiento llama la atención, se intenta imitar de la manera más precisa posible y esa es una ruta para adquirir ese conocimiento.
  
          .div(titulo="Retención")
            p Implica usar la memoria para recordar el comportamiento que se aprende con la atención, significa que lo entendido por el sentido visual, tiene ahora un lugar en la memoria.
            p Para König, K. (2021), la adquisición de la memoria es un fundamento indispensable para el despertar del pensar. La gradual formación del recuerdo, que va desde el vago reconocimiento hasta la voluntaria producción de representaciones recordativas, forma parte de ello.

          .div(titulo="Reproducción")
            p Significa la reproducción del comportamiento, es decir, la imitación. Implica que lo observado y retenido, puede ponerse en práctica; también se le denomina aprendizaje adquirido.
    
          .div(titulo="Motivación")
            p Es sinónimo de interés y evidencia; desde el momento en que la observación se pone a disposición, la persona atiende, retiene y reproduce. Se inicia cuando el comportamiento tiene un efecto positivo o negativo que lo lleva a “querer” hacer lo mismo o, incluso, evitar reproducirlo.
    
    .titulo-figura.mb-4
      h5 Figura 1.
      span Elementos que inciden en la interiorización del aprendizaje
    .row.justify-content-center.align-items-center.mb-5.bg-color-info.p-4
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Según Bandura, el aprendizaje social emerge cuando la persona logra la interiorización del aprendizaje; por tanto, deja de ser un espectador de lo que sucede en el contexto y el modelo (persona o entidad que actúa como referente para el comportamiento observado), sino que sobreviene una influencia entre él, el contexto, los comportamientos que imita y las variables cognitivas. 
        p(data-aos="fade-left") La teoría del aprendizaje social plantea, a su vez, tres modelos de aprendizaje, los cuales se detallan a continuación:
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2.4%" y="52.5%" numero="+")
                h5 01. Modelo vivo
                p El niño o la niña reproduce una conducta y actúa de una forma en particular, según el modelo.
    
              .bg-color-white.box-shadow.p-3(x="41.5%" y="8%" numero="+")
                h5 02. Modelo verbal
                p Cuando el niño o la niña tiene un comportamiento a partir de una explicación o descripción de este, por parte de un adulto. 
    
              .bg-color-white.box-shadow.p-3(x="97.5%" y="52.5%" numero="+")
                h5 03. Modelo simbólico
                p Representado por personajes ficticios que promueven ciertos tipos de comportamiento; esto ocurre cuando a los niños se les expone a videos, juegos, o dinámicas con personajes ficticios, que aparentemente tienen “conductas” particulares.
    
        


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uaeh.edu.mx/scige/boletin/atotonilco/n3/m2.html#refe1 " target="_blank" rel="noopener noreferrer") Ocadis Parra, I. (s.f.). Resumen “Aprendizaje y Comunicación Social en Niños de 3 a 5 años” Desde la teoría de Albert Bandura. Universidad Autónoma del Estado de Hidalgo. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://archive.org/details/principlesofbeha00band/page/n3/mode/2up " target="_blank" rel="noopener noreferrer") Bandura, A. (1969). Principles of behavior modification. Holt, Rinehart & Winston.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1405-339X2009000100003" target="_blank" rel="noopener noreferrer") Manzo Chávez, M. del C. & Reyes V. (2009). La violencia en los dibujos animados norteamericanos y japoneses: su impacto en la agresividad infantil. Alternativas en Psicología, 14(20), 26-34. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=CWdIG21czR8" target="_blank" rel="noopener noreferrer") SPROUTS Español. (2023). La teoría del aprendizaje social de Bandura [video]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
