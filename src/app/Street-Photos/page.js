import Image from "next/image";

export default function StreetPhotos() {
  return (
    <div className="flex justify-center items-centre w-full">
      <div className="carousel w-full max-w-3xl mx-auto">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <Image
            src="https://www.mattbadenoch.com/wp-content/uploads/2017/01/berlin-street-photography-germany-25.webp"
            alt="a woman looking at graffiti in Berlin"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="https://lightacademy.co.uk/wp-content/uploads/2018/12/Urban-Desperado-1.jpg"
            alt="a woman looking at graffiti in Berlin"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="https://cdn.prod.website-files.com/5f58a077d654db1a689fd95b/6059f348d11659b20113555d_picfair-01509097-man-crossing-street-fu-PREVIEW-ONLY%20(1).jpg"
            alt="a woman looking at graffiti in Berlin"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6098ed11cdf0281647e0ad4f/1661799244426-WF6LC5GP38RTW521ABMW/Street-Photography-London-Notting-Hill-Carnival-Leica-Q2-Monochrom-00007.jpg?format=1500w"
            alt="a woman looking at graffiti in Berlin"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
