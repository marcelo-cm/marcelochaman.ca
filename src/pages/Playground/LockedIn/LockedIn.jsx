import Carousel from "../../../components/Carousel/Carousel";
import * as Images from "./images";

function LockedIn() {
  const images = [
    { image: Images.Cover, alt: "Cover" },
    { image: Images.About, alt: "About" },
    { image: Images.How1, alt: "How it Works" },
    { image: Images.How2, alt: "How it Works" },
  ];

  return (
    <div className="content-body">
      <Carousel items={images} />
    </div>
  );
}

export default LockedIn;
