import Button from "../../Button"

const Input = () => {
  return (
    <div className="w-full relative">
      <input type="text" placeholder="Enter your email" id="input" className="w-full appearance-none border-2 border-slate-700 rounded-md py-5 px-6 pr-40 text-white leading-tight focus:outline-none focus:shadow-outline bg-light-dark relative placeholder:text-slate-600 autofill:shadow-[inset_0_0_0_1000px] autofill:shadow-light-dark autofill:[-webkit-text-fill-color:_#fff] autofill:caret-white"/>
      <Button className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-500 py-2 rounded-sm px-6 font-normal" variant="fill" label={"Subscribe"} border={false}></Button>
    </div>
  )
}

export default Input