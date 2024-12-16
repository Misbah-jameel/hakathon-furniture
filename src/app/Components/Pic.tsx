import Image from "next/image";

const NineImagesLayout = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-100">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/your-background-image.jpg" // 
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-40" // ا
        />
      </div>

      {/* Grid Layout for Images */}
      <div className="relative z-10 grid grid-cols-3 gap-4 w-full h-full p-4">
        {/* Left 3 Images */}
        <div className="relative w-full h-full">
          <Image
            src="/1.png"
            alt="Image 1"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/2.png"
            alt="Image 2"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/3.png"
            alt="Image 3"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Center Image */}
        <div className="relative w-full h-full">
          <Image
            src="/5.png"
            alt="Center Image"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Right 3 Images */}
        <div className="relative w-full h-full">
          <Image
            src="/6.png"
            alt="Image 6"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/7.png"
            alt="Image 7"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/8.png"
            alt="Image 8"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>

        {/* Bottom 3 Images */}
        <div className="relative w-full h-full">
          <Image
            src="/4.png"
            alt="Image 4"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            src="/9.png"
            alt="Image 9"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NineImagesLayout;
