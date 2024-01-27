import Button from '../Button';
import { motion } from 'framer-motion';

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="bg-primary h-[90svh] flex justify-between items-center  text-white px-20">
      <section className="w-11/12 flex flex-col gap-8">
        {/* framer */}
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h6
            variants={introChildren}
            className="text-7xl font-extrabold clip-text"
          >
            Best NFTs Marketplace
          </motion.h6>
          <section className="flex flex-col gap-5">
            <motion.p variants={introChildren} className="text-base opacity-70">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </motion.p>

            <motion.section variants={introChildren} className="flex gap-4">
              <Button
                variant="fill"
                label={'Get Started'}
                className={'w-36 py-3'}
              />

              <Button
                variant="outlined"
                label={'Create NFTs'}
                className={'w-36 py-3'}
              />
            </motion.section>
          </section>
        </motion.div>
        {/* framer */}
      </section>

      <section className="w-11/12">
        <img src="../../../src/assets/headskull.png" className="image-mask" />
      </section>
    </div>
  );
};

export default Hero;
