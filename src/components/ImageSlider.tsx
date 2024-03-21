import Slider from "react-infinite-logo-slider";

const imageData = ["/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png", "/sliderlogos/meta.png",]

export default function ImageSlider() {
    return (
      <section className="py-4 bg-slate-50 border-b-[1px] h-[10vh] flex items-center overflow-hidden">
        <div>
          <Slider
            width="160px"
            duration={20}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {imageData.map((v) => (
              <Slider.Slide key={v}>
                <img className="w-[100px]" alt={v} src={v}></img>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </section>
    );
  }