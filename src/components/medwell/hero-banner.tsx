import React, { FC } from 'react';
import clsx from 'clsx';

interface BannerTitleProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const BannerTitle: FC<BannerTitleProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="banner-title">
      <h1 data-aos="fade-up" data-aos-duration="700">{title}</h1>
      <p data-aos="fade-up" data-aos-duration="700">{subtitle}</p>
      <div className="banner-btn d-flex align-items-center" data-aos="fade-up" data-aos-duration="700">
        <a href="#" onClick={onButtonClick}>{buttonText}</a>
        <a href="#">
          <figure className="mb-0 d-flex align-items-center justify-content-center">
            <img src="/assets/images/top-arrow.png" alt="top-arrow" />
          </figure>
        </a>
      </div>
    </div>
  );
};

interface BannerDetailsProps {
  doctorImage: string;
  description: string;
  children?: React.ReactNode;
  stats: {
    value: string;
    label1: string;
    label2: string;
    icon: string;
  }[];
}

export const BannerDetails: FC<BannerDetailsProps> = ({ doctorImage, description, stats, children }) => {
  return (
    <div className="banner-details d-flex position-relative">
      <figure className="mb-0">
        <img src={doctorImage} alt="doctor-img" />
      </figure>
      <div className="banner-details-txt">
        <p data-aos="fade-up" data-aos-duration="700">{description}</p>
        <div className="banner-static-box">
          <ul className="mb-0 list-unstyled">
            {stats.map((stat, index) => (
              <li key={index} className={clsx("d-flex align-items-center justify-content-center", {
                // 'justify-content-center': !children,
                // 'justify-content-end': children && index === 1,
              })} data-aos="fade-up" data-aos-duration="700">
                <figure className="mb-0 d-flex align-items-center justify-content-center">
                  <img src={stat.icon} alt="stat-icon" />
                </figure>
                <div className="banner-static-txt">
                  <div className="static-value">{stat.value}</div>
                  <span className="d-block">{stat.label1}</span>
                  <span className="d-block">{stat.label2}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children ?? children}
    </div>
  );
};

interface ClientReviewProps {
  reviewImages: string[];
  rating: number;
  totalReviews: number;
}

export const ClientReview: FC<ClientReviewProps> = ({ reviewImages, rating, totalReviews }) => {
  return (
    <div className="client-review d-flex align-items-center">
      <div className="d-flex align-items-center review-img">
        {reviewImages.map((img, index) => (
          <figure key={index} className="mb-0">
            <img src={img} alt={`review-img-${index + 1}`} />
          </figure>
        ))}
      </div>
      <div className="review-txt">
        <span>{rating}</span>
        <figure className="mb-0 d-inline-block">
          <img src="/assets/images/star-img.png" alt="star-img" />
        </figure>
        <span className="d-block">{totalReviews} Total Reviews</span>
      </div>
    </div>
  );
};

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  description: string;
  doctorImage: string;
  stats: {
    value: string;
    label1: string;
    label2: string;
    icon: string;
  }[];
  reviewImages: string[];
  rating: number;
  totalReviews: number;
}

export const HeroBanner: FC<HeroBannerProps> = ({
  title,
  subtitle,
  buttonText,
  description,
  doctorImage,
  stats,
  reviewImages,
  rating,
  totalReviews,
}) => {
  return (
    <section className="w-100 float-left banner-con position-relative">
      <div className="wrapper2">
        <div className="banner-inner-box position-relative">
          <div className="banner-inner-con">
            <BannerTitle title={title} subtitle={subtitle} buttonText={buttonText} />
            <BannerDetails doctorImage={doctorImage} description={description} stats={stats}>
              <ClientReview reviewImages={reviewImages} rating={rating} totalReviews={totalReviews} />
            </BannerDetails>
          </div>
        </div>
      </div>
    </section>
  );
};