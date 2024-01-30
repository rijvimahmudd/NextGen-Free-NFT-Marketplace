import Button from "../../../Button"

const Card = () => {
  return (
    <section className="w-fit h-fit pb-5 inline-block">
      <section className="min-w-[270px] h-fit border border-slate-700 bg-light-dark rounded-lg text-white relative">
     <div id="cardBody" className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="size-24 rounded-full">
          <img src="https://images.unsplash.com/photo-1657110575461-e48b13299c4a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full rounded-full"/>
        </div>
        <h1 className="text-lg font-bold">Loura Chin</h1>
     </div>
      <div className="w-1/2  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button
          label={"Buy It Now"}
          className={"w-full py-2 rounded-xl font-normal"}
          variant={"fill"}
          border={false}
        />
      </div>
    </section>
    </section>
  )
}

export default Card