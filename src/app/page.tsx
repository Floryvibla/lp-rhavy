import { ExpertiseAreas } from "@/components/expertise-areas";
import { HeroSection } from "@/components/hero-section";
import AboutBox from "@/components/medwell/about-section";
import { HeroBanner } from "@/components/medwell/hero-banner";
import { ServiceSection } from "@/components/medwell/service-section";


// const topics = [
//   "Acompanhamento psicológico",
//   "Alterações de humor",
//   "Ansiedade",
//   "Assertividade",
//   "Autoaceitação",
//   "Autocobrança",
//   "Autoconfiança",
//   "Mindfulness",
//   "Negritude",
//   "Angústia"
// ];


export default function Home() {

  // const staticBoxItems = [
  //   {
  //     iconUrl: "/assets/images/thumb-icon.png",
  //     iconAlt: "Positive Reviews Icon",
  //     value: "98%",
  //     title: "Positive Reviews",
  //     subtitle: "From Our Clients",
  //   },
  //   {
  //     iconUrl: "/assets/images/experienced-icon.png",
  //     iconAlt: "Experienced Doctors Icon",
  //     value: "38+",
  //     title: "Experienced Doctors",
  //     subtitle: "Our Treatment Office",
  //   },
  // ];

  // const reviews = [
  //   { imageUrl: "/assets/images/review-img1.jpg", altText: "Review 1" },
  //   { imageUrl: "/assets/images/review-img2.jpg", altText: "Review 2" },
  //   { imageUrl: "/assets/images/review-img3.jpg", altText: "Review 3" },
  // ];

  
  const topics = [
    {
      imgSrc: 'assets/images/cardiologist-icon.png',
      altText: 'acompanhamento-psicologico-icon',
      title: 'Acompanhamento Psicológico',
      description: 'Apoio contínuo para lidar com suas emoções e pensamentos, focado em promover seu bem-estar emocional e mental.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/pulmonary-icon.png',
      altText: 'ansiedade-icon',
      title: 'Ansiedade',
      description: 'Ajudo você a entender e controlar sua ansiedade, permitindo que enfrente os desafios do dia a dia com mais tranquilidade.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/gynecology-icon.png',
      altText: 'autoaceitacao-icon',
      title: 'Autoaceitação',
      description: 'Trabalho com você para aumentar sua autoestima e desenvolver uma relação saudável consigo mesmo.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/ophthalmology-icon.png',
      altText: 'mindfulness-icon',
      title: 'Mindfulness',
      description: 'Técnicas para viver o presente, reduzir o estresse e aumentar a consciência emocional.',
      link: '#',
    },
    {
      imgSrc: 'assets/images/psychiatry-icon.png',
      altText: 'alteracoes-de-humor-icon',
      title: 'Alterações de Humor',
      description: 'Acompanhamento especializado para lidar com variações de humor e promover estabilidade emocional.',
      link: '#',
    }
  ];
  
  
  
  const serviceProvideBox = {
    title: 'O Melhor Cuidado Psicológico.',
    description: 'Apoio especializado para o seu bem-estar emocional.',
    buttonLabel: 'Agendar Consulta',
    buttonLink: 'https://api.whatsapp.com/send?phone=5521994153759&text=Ol%C3%A1!%20Encontrei%20seu%20perfil%20na%20PsyMeet%20social%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
    arrowImgSrc: 'assets/images/samll-arrow.png',
    treatmentImgSrc: 'rhavy-about1.jpg',
    treatmentAltText: 'sessao-terapia-img',
  };

  const images = [
    'rhavy-about.jpeg',
    'assets/images/about-img2.jpg',
    'assets/images/about-img3.jpg',
  ];

  const list1 = [
    'Monthly Checkups',
    'Caring Medical Team',
    'Proactive and Fast Results',
  ];

  const list2 = [
    'Cosmetic Filling',
    'Dental X-Ray',
    'Complete Crown',
  ];
  

  return (
    <main>
      {/* <HeroSection
        title="Atendimento psicológico"
        subtitle="Rhavynne Alcantara"
        description={
          <>
            O <strong className="font-semibold">atendimento psicológico</strong> busca
            promover <strong className="font-semibold">cuidados especializados à
            saúde mental</strong> por meio de <strong className="font-semibold">sessões de
            psicoterapia</strong>, contribuindo para
            melhorar a <strong className="font-semibold">qualidade de vida</strong>.
          </>
        }
        buttonText="Agendar Consulta"
        imageUrl="/rhavy-bg.png"
        imageAlt="Mulher negra sorridente com cabelo crespo, usando blusa branca sem mangas e joias. Descrita como Rhavynne Alcantara de Azevedo Santos, psicóloga."
        classNameContainerHeroImg="hidden xl:block"
        className="xl:h-[70vh] h-[55vh]"
      /> */}
      {/* <ExpertiseAreas
        title="Áreas de atuação"
        description="Nossas sessões visam aprimorar sua compreensão e manejo das emoções, de forma clara e eficaz. Estou aqui para oferecer estratégias práticas, promovendo um crescimento emocional positivo."
        areas={topics}
      /> */}
      {/* <HeroSection
        title="Quem sou eu?"
        subtitle=""
        description={
          <>
            Sou Rhavynne Alcantara de Azevedo Santos, psicóloga especializada em Terapia Cognitivo-Comportamental. Estou aqui para ajudar você a encontrar equilíbrio e bem-estar mental de forma personalizada e acolhedora.
          </>
        }
        buttonText="Agendar Consulta"
        imageUrl="/rhavy-bg.png"
        imageAlt="Mulher negra sorridente com cabelo crespo, usando blusa branca sem mangas e joias. Descrita como Rhavynne Alcantara de Azevedo Santos, psicóloga."
        classNameHeroImg="object-cover xl:object-contain"
        className="xl:h-[50vh] h-[80vh] xl:py-20"
        classNameContainerHeroImg="xl:w-[30%] xl:h-[40vh] xl:flex-none bg-blue-200/10 rounded-[88%_12%_70%_30%_/_49%_97%_3%_51%] overflow-hidden"
        stylesImgHero={{
          objectPosition: '30px 100%'
        }}
      /> */}
      <HeroBanner
        title="Cuidando da Sua Saúde Emocional"
        subtitle="Psicóloga especializada em Terapia Cognitivo Comportamental"
        buttonText="Agende sua Consulta"
        description="Precisa de apoio para lidar com suas emoções, pensamentos ou comportamentos? Estou aqui para ajudar você a alcançar mais autoconfiança e bem-estar emocional por meio de um acompanhamento psicológico personalizado e seguro."
        doctorImage="/rhavy-bg.png"
        stats={[
          {
            value: '95%',
            label1: 'Avaliações Positivas',
            label2: 'De Clientes Satisfeitos',
            icon: '/assets/images/thumb-icon.png',
          },
          {
            value: '30+',
            label1: 'Consultas Realizadas',
            label2: 'No Último Mês',
            icon: '/assets/images/experienced-icon.png',
          },
        ]}
        reviewImages={[
          '/assets/images/review-img1.jpg',
          '/assets/images/review-img2.jpg',
          '/assets/images/review-img3.jpg',
        ]}
        rating={4.8}
        totalReviews={150}
        // cta="Seja você mesmo. Vamos juntos nessa jornada de autoconhecimento e equilíbrio emocional."
      />
      <ServiceSection
        sectionTitle="Nossos Serviços"
        sectionSubtitle="O Que Oferecemos"
        sectionDescription="Especialistas em ajudar você a superar desafios emocionais e mentais com eficácia."
        services={topics}
        serviceProvideBox={serviceProvideBox}
      />
      <AboutBox
        images={images}
        // videoSrc="https://www.youtube.com/embed/kNXMJBQ6oL4"
        title="Rhavynne Alcantara de Azevedo Santos"
        description="Sou psicóloga especializada em Terapia Cognitivo-Comportamental (TCC). Minha missão é ajudar você a compreender e gerenciar suas emoções e pensamentos com eficácia, oferecendo um ambiente acolhedor e profissional. Trabalhamos juntos para promover seu bem-estar emocional e autoconfiança."
        list1={list1}
        list2={list2}
      />
      <div className="copyright-con w-100 float-left text-center">
        <p className="mb-0">Copyright © 2024 Flory All rights reserved.</p>
      </div>
      <a id="button"></a>
    </main>
  );
}
