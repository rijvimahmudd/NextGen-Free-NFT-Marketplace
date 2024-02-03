import { headSkull } from "../../providers/images"
import Button from "../Button"
const Hero = () => {
  return (
    <div className="bg-primary h-[90svh] flex justify-between items-center  text-white px-20">
        <section className="w-11/12 flex flex-col gap-8">
            <h6 className="text-7xl font-extrabold clip-text">Best NFTs Marketplace</h6>
            <section className="flex flex-col gap-5">
                <p className="text-base opacity-70">Ultrices eget pretium sit euismod mi id. In commodo auctor eget congue sit. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.</p>

                <section className="flex gap-4">
                <Button
                variant="fill"
                label={"Get Started"}
                className={'py-2 px-7'}
                />

                <Button
                variant="outlined"
                label={"Create NFTs"}
                className={'py-4 px-7'}
                />
                </section>
            </section>
        </section>

        <section className="w-11/12">
            <img src={headSkull} className="image-mask"/>
        </section>

    </div>
  )
}

export default Hero