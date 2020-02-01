import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

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

const Survey = ({ history }) => {
  const [selectedVals, setSelectedVals] = useState({
    location: null,
    itemType: null,
    conditions: [],
    canDonate: true
  })

  const [finishSurvey, setFinishSurvey] = useState(false)

  useEffect(() => {
    if (finishSurvey === true) {
      // send to backend
      console.log(selectedVals)
      history.push('/result')
    }
  }, [selectedVals, finishSurvey])

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

export default withRouter(Survey)