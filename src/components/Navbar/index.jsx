import Button from '../Button';
import Logo from '../logo';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <motion.div
      className="bg-primary w-full flex justify-between items-center py-5 px-20"
      //  TODO: When animating the bg is remaining white

      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 1, duration: 1 }}
    >
      <section className="max-w-32">
        <Logo />
      </section>

      <section>
        <ul className="flex text-white gap-8 text-base font-normal tracking-wide select-none cursor-pointer">
          <li className="transition-all opacity-80 hover:opacity-100">Home</li>
          <li className="transition-all opacity-80 hover:opacity-100">
            Marketplace
          </li>
          <li className="transition-all opacity-80 hover:opacity-100">
            Artist
          </li>
          <li className="transition-all opacity-80 hover:opacity-100">
            Community
          </li>
        </ul>
      </section>

      <section className="flex gap-3">
        <motion.div
        // initial={{ opacity: 0, scale: 0.1 }}
        // animate={{ opacity: 1, scale: 1 }}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 1 }}
        >
          <Button variant="fill" label={'Log In'} className={'w-24 py-[6px]'} />
        </motion.div>

        <Button
          variant="outlined"
          label={'Sign Up'}
          className={'w-24 py-[6px]'}
        />
      </section>
    </motion.div>
  );
};

export default NavBar;
