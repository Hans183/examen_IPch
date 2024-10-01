import React from 'react';
import Image from 'next/image';

interface CarouselProps {
}

const Carousel: React.FC<CarouselProps> = () => {

  return (
    <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
  <Image
      src={"/assets/img/1.png"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/2.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/3.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/4.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/7.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/5.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
  <div className="carousel-item">
  <Image
      src={"/assets/img/6.jpg"}
      alt="imagen 1"
      width={400}
      height={400}
      object-fit="fill"
    />
  </div>
</div>
  );
};

export default Carousel;