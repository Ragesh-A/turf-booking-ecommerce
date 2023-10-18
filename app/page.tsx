import LandingSection from "@/components/layout/home/Landing";
import PopularMerchandises from "@/components/layout/home/PopularMerchandies";
import PopularTurfs from "@/components/layout/home/PopularTurfs";

const page = () => {
  return (
    <main>
      <LandingSection/>
      <PopularTurfs />
      <PopularMerchandises />
    </main>
  )
}

export default page;