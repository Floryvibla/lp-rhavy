interface ServiceBoxItemProps {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  link: string;
}

const ServiceBoxItem: React.FC<ServiceBoxItemProps> = ({ imgSrc, altText, title, description, link }) => (
  <div className="service-box-item" data-aos="fade-up" data-aos-duration="700">
    <figure>
      <img src={imgSrc} alt={altText} />
    </figure>
    <h4>{title}</h4>
    <p>{description}</p>
    {/* <a href={link}>Read More <i className="fas fa-angle-right"></i></a> */}
  </div>
);

interface ServiceProvideBoxProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  arrowImgSrc: string;
  treatmentImgSrc: string;
  treatmentAltText: string;
}

const ServiceProvideBox: React.FC<ServiceProvideBoxProps> = ({
  title,
  description,
  buttonLabel,
  buttonLink,
  arrowImgSrc,
  treatmentImgSrc,
  treatmentAltText,
}) => (
  <div className="service-provide-box" data-aos="fade-up" data-aos-duration="700">
    <div className="service-provide-title">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="provide-btn d-flex align-items-center">
        <a href={buttonLink}>{buttonLabel}</a>
        <a href={buttonLink} className="provide-arrow">
          <figure className="mb-0 d-flex align-items-center justify-content-center">
            <img src={arrowImgSrc} alt="arrow" />
          </figure>
        </a>
      </div>
    </div>
    <div className="service-provide-img">
      <figure className="mb-0">
        <img src={treatmentImgSrc} alt={treatmentAltText} />
      </figure>
    </div>
  </div>
);

interface ServiceSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription: string;
  services: ServiceBoxItemProps[];
  serviceProvideBox: ServiceProvideBoxProps;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  sectionDescription,
  services,
  serviceProvideBox,
}) => {
  return (
    <section className="w-100 float-left service-con padding-top padding-bottom">
      <div className="container">
        <div className="service-box">
          <div className="service-box-content" data-aos="fade-up" data-aos-duration="700">
            <span className="d-block sub-txt">{sectionSubtitle}</span>
            <h2>{sectionTitle}</h2>
            <p className="mb-0">{sectionDescription}</p>
          </div>

          {services.map((service, index) => (
            <ServiceBoxItem key={index} {...service} />
          ))}

          <ServiceProvideBox {...serviceProvideBox} />
        </div>
      </div>
    </section>
  );
};

