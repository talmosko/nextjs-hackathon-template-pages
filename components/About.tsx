import Image from "next/image";
import { AboutType } from "../template_data/About";

export default function About({
  data,
  AboutImage,
}: {
  data: AboutType;
  AboutImage: string;
}) {
  return (
    <div id="about" className="page component">
      <div className="row">
        <div className="col flex-1 max-md:flex-none items-center justify-center w-[90%]">
          <Image
            src={AboutImage}
            alt="About image"
            width={500}
            height={500}
            className="about_image w-[40vh] h-auto border-[10px] border-gray-400"
          />
        </div>
        <div className="col flex-1 max-md:flex-none max-md:mt-6 items-center justify-center">
          <div className="col w-[90%]">
            <p className="title justify-start mb-20 text-gray-800">
              About <span className="text-[#37c598]">Auth</span>Hacks
            </p>
            <p className="text-lg">{data.firstParagraph}</p>
            <br />
            <p className="text-lg">{data.secondParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
