import { Card } from "./Card"

const CollectNFTs = () => {
  return (
    <section className="min-h-screen py-20 bg-primary text-white px-20">
        <h3 className="text-5xl font-bold text-center mb-8">Collect Some NFTs</h3>
        <div id="cardGroup" className="flex flex-wrap justify-between">
         <Card
          cardImg="https://images.unsplash.com/photo-1705711714839-cf327143c4a0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Card cardImg="https://images.unsplash.com/photo-1657110575461-e48b13299c4a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <Card cardImg="https://images.unsplash.com/photo-1657110575461-e48b13299c4a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </div>
    </section>
  )
}

export default CollectNFTs