import { CopyRight, NavMenu } from "./components"
import Description from "./components/Description"

const Footer = () => {
  return (
    <section className="bg-primary min-h-[60vh] h-full">
      <section className="h-[50vh] bg-primary text-white px-20 flex items-start justify-between pt-12 relative after:[content:''] after:bg-slate-900 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-11/12 ">
       <Description/>
       <NavMenu/>
       <NavMenu/>
       <NavMenu/>
       <NavMenu/>
    </section>
    <CopyRight/>
    </section>
  )
}

export default Footer