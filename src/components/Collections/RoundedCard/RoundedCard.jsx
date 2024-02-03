import Button from "../../Button"

const RoundedCard = () => {
  return (
    <div className="bg-light-dark min-w-[270px] flex flex-col items-center  gap-5 py-5 rounded-full">
      <div className="size-[220px] rounded-full">
        <img src="https://images.unsplash.com/photo-1705711714839-cf327143c4a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full object-cover object-top"/>
      </div>
      <div className="text-center pb-10">
        <h3 className="text-white font-bold text-xl">Broken collection</h3>
        <Button className="font-bold text-gradient-purple mt-2 text-sm" variant="outlined" border={false} label={"View Collection"}/>
      </div>
    </div>
  )
}

export default RoundedCard