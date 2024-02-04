import Logo from '../../../logo'
import icons from '../../Provider/icons'
import { Icon as SocialMediaIcon } from '..'


const Description = () => {
  return (
    <div className='flex flex-col gap-6 max-w-[300px] font-light w-full'>
        <div className='max-w-32'>
            <Logo/>
        </div>
        <p className='opacity-80'>
        Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.  Posuere ac in in nisl sed augue.
        </p>
        <div className="flex gap-3">
            {icons.map((Icon, index) => (
                <SocialMediaIcon key={index} element={<Icon/>}/>
            ))}
        </div>
    </div>
  )
}

export default Description