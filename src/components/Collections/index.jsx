import { Card } from './RoundedCard'

const Collections = () => {
  return (
    <section className='bg-primary text-white px-20 flex flex-col gap-20 py-16'>
        <div className='text-center space-y-5'>
            <h1 className='text-5xl font-extrabold'>NFTs Collections</h1>
            <p className='opacity-70'>Discover the most outstanding NFTs in all topics of life</p>
        </div>
        <div className='flex justify-center flex-wrap gap-5 items-center'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </section>
  )
}

export default Collections