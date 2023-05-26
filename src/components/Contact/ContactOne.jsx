import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";

const ContactOne = () => {
  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          contato@citechnology.com.br
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
          (61) 98346-3082
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          <span className="location1">Brasília</span> <br /> 
          Quadra 702, loja 46, Asa Norte <br /> DF 70720-600, BR        
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          <span className="location2">Orlando</span> <br /> 
          10690 Petrillo Way, Winter Garden <br/> FL 34787, USA          
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        {/* section title */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Contato</span>
              <h2 className="title">
                <span>Fale</span> conosco
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-6"> {/* Coluna 1 */}
              <ContactOneInfoItem item={info_items[0]} />
            </div>
            <div className="col-lg-6 col-sm-6">
            <ContactOneInfoItem item={info_items[1]} />
            </div>
            <div className="col-lg-6 col-sm-6"> {/* Coluna 2 */}
              <ContactOneInfoItem item={info_items[2]} />              
            </div>
            <div className="col-lg-6 col-sm-6">
              <ContactOneInfoItem item={info_items[3]} />
            </div>
          </div>
        </div>

        {/* section form */}
        <ContactOneForm />
      </div>
    </section>
  );
};

export default ContactOne;
