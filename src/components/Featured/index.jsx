import { useState } from "react"
import { images } from "./data"
const Featured = () => {
    const [imgs, setImgs] = useState(images);
  return (
    <div>
        {imgs.map(img=>(
            <img src={img} key={img}/>
        ))}
    </div>
  )
}

export default Featured