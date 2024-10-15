import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";
import CollaborationImg from "@/public/images/collaboration.png";
import MainImg from "@/public/images/main.png";
import OneImg from "@/public/images/1.png";
import TwoImg from "@/public/images/2.png";
import ThreeImg from "@/public/images/3.png";
import FourImg from "@/public/images/4.png";
import FiveImg from "@/public/images/5.png";
import VisualImg from "@/public/images/visualpartner.png";
import Img1 from "@/public/images/taller1.png";
import Img2 from "@/public/images/taller2.png";
import Img3 from "@/public/images/taller3.png";
import Img4 from "@/public/images/taller4.png";
import Img5 from "@/public/images/taller5.png";
import Img6 from "@/public/images/taller6.png";
import Img7 from "@/public/images/taller7.png";
import Img8 from "@/public/images/taller8.png";
import Img9 from "@/public/images/taller9.png";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-5 md:py-5">
          <div className="space-y-3 text-center">
              <Image
                className="rounded-full"
                alt="Collaboration"
                src={CollaborationImg}
              />
            <p className="text-2xl font-bold text-gray-900">
              Derechos de consumidores financieros:
              <em className="italic text-gray-500">Protección de datos, ciberseguridad y reparación.</em>
            </p>
              <Image
                className="rounded-full"
                alt="TeCheck"
                src={MainImg}
              />
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Registros Gráficos
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <Image
            src={Img1}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img2}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img3}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img4}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img5}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img6}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img7}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img8}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            src={Img9}
            alt="Registro Gráfico"
          />
          <br/>
          <Image
            className="rounded-full"
            alt="Visual Partner"
            src={VisualImg}
          />
            <h3
              className="mb-6 border-y font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              @visual_partner
            </h3>
        </div>
      </div>
    </section>
  );
}
