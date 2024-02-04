import Button from '../../Button';
import PropTypes from 'proptypes';

const Card = ({ cardImg }) => {

  return (
      <section className={`relative min-w-[350px] text-primary pb-20 pt-4`} id="cardBody">
      <div id="cardImg" className="w-full h-[450px] select-none">
        <img
          src={cardImg}
          className="w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>

      <div id="absoluteCard" className="grid grid-cols-1 grid-flow-row gap-2 bg-white p-4 rounded-xl shadow-lg w-full md:w-4/5 items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between text-base">
          <h3 className="font-bold">Lighting Axe</h3>
          <p className="font-bold">0.36 ETH</p>
        </div>
        <div className="text-sm flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-fuchsia-500">
            <img
              src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1>Loura Chin</h1>
        </div>
        <div className='text-white'>
        <Button
          label={"Buy It Now"}
          className={"w-full py-2 rounded-md font-normal text-white"}
          variant={"fill"}
          border={false}
        />
        </div>
      </div>
      </section>
  );
};

Card.propTypes = {
  cardImg: PropTypes.string,
};

export default Card;
