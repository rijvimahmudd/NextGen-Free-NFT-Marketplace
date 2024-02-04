const Card = () => {
  return (
    <div className="inline-block">
        <div className="w-[270px] min-h-[330px] bg-light-dark rounded-lg p-5 flex flex-col gap-4">
        <div className="w-full h-[200px] ">
            <img src="https://images.unsplash.com/photo-1657110575461-e48b13299c4a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full w-full object-cover object-top"/>
        </div>
        <div className="space-y-2">
            <h5 className="font-medium text-sm text-gradient-purple">Broken collection</h5>
            <p className="text-white text-lg font-bold">Best nft art collections in the world</p>
        </div>
    </div>
    </div>
  )
}

export default Card