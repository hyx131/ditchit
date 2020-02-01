import React, { useState } from 'react'

import Location from './location'
import ItemType from './item-type'
import Condition from './condition'

//mock data:
const itemTypes = [
  { name: 'Clothing', src: '/public/images/test.png' },
  { name: 'Bedding', src: '' },
  { name: 'Accessories', src: '' },
  { name: 'Shoes', src: '' },
]

const Survey = () => {
  const [selectedVals, setSelectedVals] = useState({
    location: null,
    itemType: null,
    conditions: [],
    canDonate: true
  })

  const [finishSurvey, setFinishSurvey] = useState(false)

  console.log(selectedVals)
  return (
    <>
      {!selectedVals.location && <div>
        <Location selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

      {selectedVals.location && selectedVals.location.city && selectedVals.location.address && selectedVals.location.postalCode && selectedVals.location.country && !selectedVals.itemType && <div>
        <ItemType itemTypes={itemTypes} selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

      {selectedVals.location && selectedVals.location.city && selectedVals.location.address && selectedVals.location.postalCode && selectedVals.location.country && selectedVals.itemType && !finishSurvey && <div>
        <Condition setFinishSurvey={setFinishSurvey} selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

    </>
  )
}

export default Survey