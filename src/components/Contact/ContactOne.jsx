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
          Quadra 702, loja 46<br />Asa Norte, Brasília-DF <br />CEP:70720-600, BR        
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>
          <span className="location2">Orlando</span> <br /> 
          10690 Petrillo Way, Winter Garden <br/> Florida, USA | 34787          
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
  <div className="container">

    {/* section info */}
    <div className="contact-info-wrap d-flex">
      <div className="col-md-6 contact-item">
        <ContactOneInfoItem item={info_items[0]} />
      </div>
      <div className="col-md-6 contact-item">
        <ContactOneInfoItem item={info_items[1]} />
      </div>
      <div className="col-md-6 contact-item">
        <ContactOneInfoItem item={info_items[2]} />
      </div>
      <div className="col-md-6 contact-item">
        <ContactOneInfoItem item={info_items[3]} />
      </div>
    </div>

    {/* section form */}
    <ContactOneForm />
  </div>
</section>
  );
};

export default ContactOne;
