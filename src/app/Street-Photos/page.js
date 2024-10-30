import LayoutWrapper from "../Components/LayoutWrapper";
import Navbar from "../Components/Navbar";
import SideDrawer from "../Components/SIdeDrawer";
import ThemeSelector from "../Components/themeSelector";

export default function StreetPhotos() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*o_mUT72NcRTLksQt1Z0Lgg.jpeg"
          className="w-full"
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
        <img
          src="https://lightacademy.co.uk/wp-content/uploads/2018/12/Urban-Desperado-1.jpg"
          className="w-full"
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
        <img
          src="https://cdn.prod.website-files.com/5f58a077d654db1a689fd95b/6059f348d11659b20113555d_picfair-01509097-man-crossing-street-fu-PREVIEW-ONLY%20(1).jpg"
          className="w-full"
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
        <img
          src="https://images.squarespace-cdn.com/content/v1/6098ed11cdf0281647e0ad4f/1661799244426-WF6LC5GP38RTW521ABMW/Street-Photography-London-Notting-Hill-Carnival-Leica-Q2-Monochrom-00007.jpg?format=1500w"
          className="w-full"
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
  );
}
