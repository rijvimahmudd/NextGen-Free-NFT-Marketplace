import {glowingHead} from "../../providers/images"
import { Input } from "./input"

const Newsletter = () => {
  return (
    <section className="px-20 h-screen w-full bg-primary flex items-center justify-center text-white">
       <section className="w-full h-5/6 flex justify-between items-center px-16 gap-x-20">
            <div className="h-[400px] basis-1/2">
                <img src={glowingHead} alt="" className="w-full h-full object-cover select-none"/>
            </div>
            <div className="basis-1/2 flex flex-col gap-8">
                <h3 className="text-4xl font-extrabold">Subscribe And get Latest news update about NFTs.</h3>
                <p className="text-sm opacity-70">In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.</p>
                <Input/>
            </div>
       </section>
    </section>
  )
}

export default Newsletter