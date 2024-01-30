import Button from "../Button"
import { Card } from "./Components"

const TopCreators = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-primary min-h-screen px-20 text-white gap-20">
        <section className="w-1/2 mx-auto flex flex-col items-center justify-center gap-6">
            <h3 className="text-4xl font-bold text-center">Top Creators</h3>
            <p className="text-center text-sm opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
            variant="fill"
            label="View All Creators" 
            className="py-2 font-normal w-2/5 mx-auto"
            />
        </section>
        <section className="flex justify-between flex-wrap gap-y-8 w-full">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    </section>
  )
}

export default TopCreators