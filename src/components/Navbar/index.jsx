import Button from '../Button';
import Logo from '../logo';

const NavBar = () => {
  return (
    <div className="bg-primary w-full flex justify-between items-center py-5 px-20">
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
        <Button variant="fill" label={'Log In'} className={'w-24 py-[6px]'} />

        <Button
          variant="outlined"
          label={'Sign Up'}
          className={'w-24 py-[6px]'}
        />
      </section>
    </div>
  );
};

export default NavBar;
