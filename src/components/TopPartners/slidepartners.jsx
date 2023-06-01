import React, { useEffect, useState } from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'José Ricardo',
      title: 'CFO SIG DO BRASIL',
      review: `"Estamos extremamente satisfeitos com os serviços de TI prestados pela Incripit 
      Sua equipe altamente qualificada, dedicada e proativa sempre nos atende de forma eficiente, 
      adaptando-se às nossas necessidades específicas. Recomendamos sem hesitação essa empresa 
      para qualquer cliente que necessite de serviços de TI confiáveis e de alta qualidade"`,
    },
    {
      name: 'Pablo Lima',
      title: 'CEO Infinitoon',
      review: `"Trabalhar com a fábrica de software tem sido uma experiência excepcional. 
      Desde o início, eles demonstraram um profundo comprometimento em entender 
      nossas necessidades e objetivos. A equipe realizou uma análise abrangente dos 
      requisitos, o que resultou em um software personalizado e altamente funcional 
      que atendeu completamente às nossas expectativas."`,
    },
    {
      name: 'Andrei Salomão',
      title: 'Ares Control',
      review: `"Estamos impressionados com o serviço excepcional fornecido pela IOT no 
      desenvolvimento de soluções de Internet das Coisas (IoT). Sua expertise e 
      dedicação foram fundamentais para transformar nossas ideias em dispositivos 
      inteligentes e conectados. O resultado foi um sistema eficiente e seguro, 
      permitindo uma gestão inteligente de dados e processos em tempo real. 
      Recomendamos fortemente a fábrica de software para empresas que desejam 
      explorar o potencial da IoT e alcançar uma transformação digital significativa."`,
    },
    {
      name: 'Gil Campos',
      title: 'CEO FORMA OFFICE',
      review: `"Estamos extremamente satisfeitos com os serviços de alocação de infraestrutura 
      fornecidos pela fábrica de software para a nossa empresa, Forma Office. A equipe 
      demonstrou um profundo conhecimento em infraestrutura de TI, fornecendo soluções 
      personalizadas que atenderam perfeitamente às nossas necessidades. 
      Com a sua expertise, eles foram capazes de dimensionar e configurar nossa infraestrutura 
      de forma eficiente, garantindo alta disponibilidade, segurança e desempenho. 
      Além disso, a equipe de suporte técnico tem sido extremamente responsiva, 
      solucionando rapidamente quaisquer problemas ou dúvidas que surgem."`,
    },
    {
      name: 'Marcus Vinicius',
      title: 'Diretor Comercial Performa Extreme',
      review: `"Contratamos os serviços de alocação de pessoal e consultoria Protheus da Incript 
      e ficamos extremamente satisfeitos com os resultados. A equipe designada para o projeto 
      demonstrou um profundo conhecimento do sistema Protheus, além de terem habilidades técnicas 
      excepcionais. Eles foram capazes de entender completamente nossas necessidades específicas e 
      fornecer soluções personalizadas que melhoraram significativamente nossos processos internos."`,
    },
    {
      name: 'Soraya',
      title: 'Oros Soluçoes Educacionais',
      review: `"Estamos extremamente satisfeitos com o desenvolvimento de site realizado 
      pela Incript para a Oros Soluções Educacionais. O projeto foi concluído de 
      forma eficiente em apenas 10 dias, superando nossas expectativas. 
      A equipe mostrou profissionalismo, criatividade e habilidade técnica excepcionais, 
      resultando em um site moderno, atraente e totalmente funcional. 
      Estamos gratos pela parceria e recomendamos a fábrica de software para empresas que 
      buscam soluções digitais de alta qualidade e prazos de entrega ágeis."`,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(showNextReview, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const showNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  return (
    <div>
      <h2 className="testimonial-title">Depoimentos</h2>

      <div className="review-container">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`review ${index === currentReviewIndex ? 'active' : ''}`}
          >
            
            <h3 className="client-name">{review.name}</h3>
            <p className="client-title">{review.title}</p>
            <p className="client-review">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
