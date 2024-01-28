import { useState } from "react";
import { images } from "./data";

const Featured = () => {
  const [imgs, setImgs] = useState(images);

  return (
    <div>
      <section className="px-20 flex flex-row items-center justify-between py-10 bg-primary">
        {imgs.map((img) => (
          <img src={img} key={img} className="w-full h-auto max-w-[130px]" />
        ))}
      </section>
    </div>
  );
};

export default Featured;
