import React from 'react'
import ExpandableSection from '../ExpandableSection'
import TurfCard from '@/components/shop/TurfCard'

const PopularTurfs = () => {
  return (
    <ExpandableSection>
      <div className="grid gap-5 md:grid-cols-2">
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
        <TurfCard />
      </div>
    </ExpandableSection>
  )
}

export default PopularTurfs