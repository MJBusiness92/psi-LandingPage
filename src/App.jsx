import "./App.css";
import "./index.css";

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

// Importe todas as imagens que você usa como backgroundImage
import bg1 from "@assets/bg-1.png";
import nutriLogo from "@assets/nutri-logo.png"
import bg2 from "@assets/bg-2.png";
import specialist3 from "@assets/specialist-3.png";
import bioExpert from "@assets/bio-expert.png";
import specialist2 from "@assets/specialist-2.png";
import timeIcon from "@assets/Time-icon.png";
import atendimentoIcon from "@assets/Atendimento-icon.png";
import sigiloIcon from "@assets/Sigilo-icon.png";
import ambienteSeguroIcon from "@assets/Ambiente-Seguro-Icon.png";
import iconCerto from "@assets/icon-certo.png";
import expertImage from '@/assets/expert.png';

import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const icons = [timeIcon, atendimentoIcon, sigiloIcon, ambienteSeguroIcon];

export default function Main() {
  const elementsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    const results = Splitting();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach((el) => observer.observe(el));

  //   return () => observer.disconnect();
  // }, []);

  // const addToRefs = (el) => {
  //   if (el && !elementsRef.current.includes(el)) {
  //     elementsRef.current.push(el);
  //   }
  // };

  // Anime.js animations
  const fadeInScale = (targets, delay = 0) => {
    anime({
      targets: targets,
      opacity: [0, 1],
      scale: [1.5, 1],
      duration: 1000,
      delay: anime.stagger(100, {start: delay}),
      easing: 'easeOutElastic(1, .5)'
    });
  };

  const slideIn = (targets, direction = 'left', delay = 0) => {
    const x = direction === 'left' ? ['-100%', '0%'] : ['100%', '0%'];
    anime({
      targets: imagesRef.current,
      translateX: 250, //x, [-100, 0]
      rotateZ: 360, //Adicionado por último
      opacity: [0, 1],
      duration: 2500,
      delay: anime.stagger(100), // {start: delay}),
      easing: 'easeOutQuad', // Ou podemos utilizar 'easeOutQuad'
    });
  };

  // Apply animations to images
  fadeInScale(imagesRef.current, 300);

  // Clean up function
  return () => {
    observer.disconnect();
    anime.remove(imagesRef.current);
  };
}, []);

const addToRefs = (el) => {
  if (el && !elementsRef.current.includes(el)) {
    elementsRef.current.push(el);
  }
};

const addToImageRefs = (el) => {
  if (el && !imagesRef.current.includes(el)) {
    imagesRef.current.push(el);
  }
};

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="fixed inset-0 w-full min-h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1})`,
          zIndex: -1,
          height: '100vh',
          minHeight: '100%',
          backgroundAttachment: 'fixed'
        }}
      />

      <header className="w-full min-h-screen relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="w-full md:w-1/2 max-w-2xl relative z-20">
              {/* <div className="bg-[#644c34] rounded-2xl p-6 md:p-8 w-full"> EM ULTIMO CADO EXCLUIR A DIV DE BAIXO*/} 
              <div className="bg-[#644c34] rounded-2xl p-6 md:p-8 w-full shadow-xl backdrop-blur-sm">
                <div
                  className="w-28 h-28 bg-contain bg-no-repeat mt-2"
                  style={{
                    backgroundImage: `url(${nutriLogo})`,
                  }}
                />
                <div className="mt-6 space-y-4">
                  <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight" data-splitting ref={addToRefs}>
                  {/*heroText*/}  
                     NÃO DESPERDICE MAIS O
                    <span className="text-pink-500 "> SEU TEMPO</span>.
                    FAÇA DELE O SEU
                    <span className="text-pink-500 ">
                      {" "}
                      MAIOR ALIADO
                    </span>
                    . 
                  </h1>
                  <div className="space-y-2">
                    <h2 className="text-white font-medium text-base md:text-lg">
                      Recupere o{" "}
                      <span className="text-pink-500 uppercase">
                        controle da sua vida
                      </span>
                      .
                    </h2>
                    <h2 className="text-white font-medium text-base md:text-lg" data-splitting ref={addToRefs}>
                      O seu{" "}
                      <span className="text-yellow-500 uppercase">
                        tempo é precioso
                      </span>
                      !
                    </h2>
                  </div>
                  <button className="px-6 py-3 bg-[#bfac6d] text-[#644c34] font-bold rounded-lg text-base md:text-lg hover:bg-[#a08d5e] transition-colors">
                    Agendar sessão
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-end relative z-40">
              <div
              ref={addToImageRefs}
                className="w-full transform transition-transform duration-300 h-[400px] md:h-[600px] lg:h-[700px] bg-contain bg-bottom bg-no-repeat md:translate-y-20 lg:translate-y-24"
                style={{
                  // position: "relative",
                  backgroundImage: `url(${specialist3})`,
                  // marginBottom: -200,
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="w-screen relative -mt-32 md:-mt-40 lg:-mt-48">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transform"
          style={{
            backgroundImage: `url(${bg2})`,
            marginTop: "-190px",
            width: "100%",
            height: "calc(100% + 210px)", // Added to increase height
          }}
        />
        {/* <div className="relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"> */}
        <div className="relative px-4 sm:px-6 lg:px-8 
    pt-[120px] sm:pt-[150px] md:pt-[180px] lg:pt-[200px] xl:pt-[220px] 
    pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24
    z-20">
          {/* Título Principal */}
          {/* <h2 className="text-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-8 sm:mb-12 md:mb-16" data-splitting ref={addToRefs}> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-white mb-8 sm:mb-12 md:mb-16 relative" 
        data-splitting 
        ref={addToRefs}>
            Agende <span className="text-[#d4bea9]">sua sessão</span>
          </h2>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4  
    gap-12 md:gap-4 
    max-w-[320px] md:max-w-4xl lg:max-w-6xl 
    mx-auto mb-12 md:mb-20">
            {icons.map((icon, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                ref={addToImageRefs}
                  src={icon}
                  alt={icon.split("/").pop().replace("-icon.png", "")}
                  className="w-32 md:w-24 lg:w-32 xl:w-36 
          transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Title with line */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center sm:text-left" data-splitting ref={addToRefs}>
              Não é normal,{" "}
              <span className="text-[#F3C0BD]">conviver com isso:</span>
            </h2>
            <div className="hidden sm:block h-0.5 flex-grow bg-[#F3C0BD]" />
          </div>

          {/* Checklist Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
            {/* Item 1 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Diga adeus à depressão.{" "}
                <span className="text-[#d4bea9]">
                  Encontre significado e propósito na vida.
                </span>
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Ansiedade te controlando?{" "}
                <span className="text-[#d4bea9]">
                  Recupere sua paz anterior.
                </span>
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Carregando o peso do mundo?{" "}
                <span className="text-[#d4bea9]">
                  Libere-se do fardo que carrega.
                </span>
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splittingref={addToRefs}>
                Relacionamentos difíceis?{" "}
                <span className="text-[#d4bea9]">
                  Construa conexões mais saudáveis.
                </span>
              </p>
            </div>

            {/* Item 5 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Prisioneiro do seus próprios pensamentos(a)?{" "}
                <span className="text-[#d4bea9]">
                  Seja livre para explorar sua idéias.
                </span>
              </p>
            </div>

            {/* Item 6 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Não sinta-se mais desmotivado(a).{" "}
                <span className="text-[#d4bea9]">
                  Desenvolva todo seu potencial e ultrapasse todos os
                  obstáculos.
                </span>
              </p>
            </div>

            {/* Item 7 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Sente-se preso num ciclo vicioso?{" "}
                <span className="text-[#d4bea9]">
                  Rompa com o passado e construa um novo futuro promissor.
                </span>
              </p>
            </div>

            {/* Item 8 */}
            <div className="flex items-start gap-2 sm:gap-3">
              <img
                src={iconCerto}
                alt="Ícone certo"
                className="w-5 sm:w-6 mt-1 flex-shrink-0"
              />
              <p className="text-sm sm:text-base md:text-lg text-white font-bold" data-splitting ref={addToRefs}>
                Sente-se sozinho(a)?{" "}
                <span className="text-[#d4bea9]">
                  Conte com o apoio profissional e permita-se a experimentar uma
                  nova realidade.
                </span>
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center space-y-3 sm:space-y-4 max-w-[300px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
            <h3 className="text-base sm:text-lg md:text-xl text-[#BFAC6D]" data-splitting ref={addToRefs}>
              Todos esses sintomas não refletem sobre você, isso é ocasionado
              por um estado na qual você precisa encontrar um{" "}
              <span className="text-[#F3C0BD] underline">
                ponto de equilíbrio
              </span>
              .
            </h3>
            <h3 className="text-base sm:text-lg md:text-xl text-[#BFAC6D]" data-splitting ref={addToRefs}>
              Preserve a sua{" "}
              <span className="text-[#F3C0BD] underline">saúde mental</span>.{" "}
              Tome controle de suas tensões e dificuldades do dia-a-dia.
            </h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#684e33] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white text-base md:text-lg font-semibold text-center md:text-left md:w-2/3" data-splitting ref={addToRefs}>
              Em minha atuação clínica, priorizo um atendimento de escuta
              empática e acolhedora, possibilitando o desenvolvimento de um
              plano terapêutico, objetivo e eficiente para cada caso.
            </p>
            <button className="w-full md:w-auto px-8 py-4 bg-[#bfac6d] rounded-lg text-white text-lg font-bold hover:bg-[#a08d5e] transition-colors">
              AGENDAR SESSÃO
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <article className="w-full bg-gradient-to-r from-[#8B6E01] to-[#251D00] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
              <div
              ref={addToImageRefs}
                className="w-full h-full bg-cover bg-center animate-slide-left"
                style={{
                  backgroundImage: `url(${expertImage})`,
                  paddingBottom: "90%", // Maintains aspect ratio
                }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" data-splitting ref={addToRefs}>
                Atendimento psicológico de{" "}
                <span className="text-[#bfac6d]">onde estiver.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg" data-splitting ref={addToRefs}>
                  Meu objetivo na primeira parte do atendimento, é identificar e
                  te auxiliar nas questões que estão lhe trazendo{" "}
                  <span className="text-[#bfac6d]">desconforto</span>,
                  atrapalhando seu{" "}
                  <span className="text-[#bfac6d]">bem-estar</span>, suas{" "}
                  <span className="text-[#bfac6d]">atividades diárias</span> e{" "}
                  <span className="text-[#bfac6d]">relações</span>. Através da{" "}
                  <span className="text-[#bfac6d]">
                    Terapia Cognitivo-Comportamental
                  </span>
                  , você aprenderá a modificar padrões de pensamento que limitam
                  seu potencial. Juntos, vamos construir um plano de ação
                  personalizado para que você alcance seus{" "}
                  <span className="text-[#bfac6d]">metas</span> e viva uma{" "}
                  <span className="text-[#bfac6d]">vida mais feliz</span> e
                  realizada.
                </p>
                {/* Add other paragraphs */}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Testimonials */}
      <section className="w-full bg-[rgba(104,78,51,0.9)] py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#bfac6d] mb-12 md:mb-16" data-splitting ref={addToRefs}>
            O que estão dizendo{" "}
            <span className="text-[#F3C0BD]">sobre as sessões</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ name: "Silvia" }, { name: "Fátima" }, { name: "Beatriz" }].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#bfac6d] rounded-lg p-6 shadow-lg"
                >
                  <p className="text-black mb-4" data-splitting ref={addToRefs}>
                    A Norma fez um trabalho incrível comigo, conduziu a terapia
                    de forma leve, buscando sempre entender as nossas angústias
                    e aflições. Ela me ajudou num dos momentos mais dificéis e
                    com certeza vou aplicar os conselhos dela nesta minha no
                    empreitada.
                  </p>
                  <p className="font-bold text-black">{testimonial.name}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Última Atualização recente */}
      <main className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-16 md:py-24 px-4 md:px-8 lg:px-12 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bioExpert})` }}
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          <div className="relative w-full md:w-1/2 flex justify-center items-center py-8 md:py-12">
            <div
              className="w-full bg-cover bg-center bg-no-repeat rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${specialist2})`,
                minHeight: "400px",
                height: "calc(100vh - 30vh)",
                maxHeight: "750px",
                backgroundPosition: "center 20%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 bg-white bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left" data-splitting ref={addToRefs}>
              Norma Alvarez
            </h2>

            <p className="text-sm md:text-base font-light" data-splitting ref={addToRefs}>
              <span className="font-bold">Abordagem:</span> Terapia de
              ansiedade, TOC, Síndrome do pânico, Fobia social, Transtornos
              depressivos, procrastinação, questões sexuais, demanda de
              relacionamento. Modificações e desenvolvimento de hábitos
              saudáveis.
            </p>

            <p className="text-sm md:text-base font-bold" data-splitting ref={addToRefs}>
              A partir de 18 anos
            </p>

            <p className="text-sm md:text-base font-light" data-splitting ref={addToRefs}>
              <span className="font-bold">Experiência profissional:</span> A
              psicóloga conta com uma bagagem e experiência de mais de 2.500
              consultas realizadas e um legado a ser mantido.
            </p>

            <p className="text-sm md:text-base font-bold" data-splitting ref={addToRefs}>Neurociência</p>

            <p className="text-sm md:text-base font-light" data-splitting ref={addToRefs}>
              Atualmente dentro da psicologia, o conhecimento sobre neurociência
              dos principais problemas e transtornos torna o atendimento muito
              mais assertivo.
            </p>
          </div>
        </div>
      </main>

      {/* Última Atualização recente */}
      <footer className="w-full bg-gradient-to-r from-[#8B6E01] to-[#684E33] bg-opacity-90 py-6 px-4 sm:px-6 md:px-8">
        {/* <footer className="w-full bg-gradient-to-r from-[#8B6E01] to-[#684E33] bg-opacity-90 flex items-center justify-center py-6 px-4 sm:px-6 md:px-8"> */}
        {/* Última Atualização recente */}
        <div className="container mx-auto flex flex-col items-center">
          {/* <div className="flex flex-col items-center gap-4 text-white text-center max-w-4xl"> */}
          <p className="text-sm sm:text-base text-[#Fff] md:text-lg font-light" data-splitting ref={addToRefs}>
            Estou nas redes sociais, pelo perfil
            <span className="text-[#Fff] font-bold"> @normaalvarez.psi</span>.
            Lá você também consegue me acompanhar mais de perto e conferir meu
            trabalho.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="transition-transform hover:scale-110">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[url('/src/assets/facebook.png')] bg-cover bg-center"></div>
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[url('/src/assets/instagram.png')] bg-cover bg-center"></div>
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[url('/src/assets/Tiktok.png')] bg-cover bg-center"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}