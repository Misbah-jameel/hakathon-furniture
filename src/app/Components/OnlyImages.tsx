import Image from "next/image";

const BackgroundImageComponent = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-100">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/Share.png" 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        //   className="opacity-50"
        />
      </div>

      {/* Content on top of the background image */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold"></h1>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
