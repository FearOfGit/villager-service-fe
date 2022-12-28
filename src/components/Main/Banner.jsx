import React from 'react';
import { useQuery } from 'react-query';
import { Carousel } from 'react-responsive-carousel';
import { getEventsAPI } from '../../api/gathering';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BannerContainer, Button, Title } from './Banner.style';

function Banner() {
  const { data, refetch } = useQuery(['getEvents'], () => getEventsAPI(10), {
    suspense: true,
    refetchOnWindowFocus: false,
    retry: false,
  });

  console.log(data);

  return (
    <BannerContainer>
      <Carousel
        className="carousel"
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        autoPlay="true"
        infiniteLoop="true"
      >
        {data.data.banners.map((banner) => (
          <a
            className="item"
            key={banner.culturalId}
            href={banner.orgLink}
            target="_blank"
            rel="noreferrer"
          >
            <Title>{banner.title}</Title>
            <div className="flex">
              <div className="img">
                <img className="img-event" src={banner.mainImage} alt="img" />
              </div>
              <div className="desc">
                <span>{banner.codeName}</span>
                <span>{banner.guName}</span>
                <span>{banner.place}</span>
                <Button>자세히 보기</Button>
              </div>
            </div>
          </a>
        ))}
      </Carousel>
    </BannerContainer>
  );
}

export default Banner;
