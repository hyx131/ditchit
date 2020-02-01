import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Location from './location'
import ItemType from './item-type'
import Condition from './condition'

import clothingPic from '../../Images/fashion.png'
import beddingPic from '../../Images/laundry.png'
import shoePic from '../../Images/shoes.png'
import accessoriesPic from '../../Images/accessories.png'

//mock data:
const itemTypes = [
  { name: 'Clothing', src: clothingPic },
  { name: 'Bedding', src: beddingPic },
  { name: 'Accessories', src: accessoriesPic },
  { name: 'Shoes', src: shoePic },
]

const Survey = ({ setApiResults, history, themeColor }) => {
  const [selectedVals, setSelectedVals] = useState({
    location: null,
    itemType: null,
    conditions: [],
    canDonate: true
  })

  const [finishSurvey, setFinishSurvey] = useState(false)

  useEffect(() => {
    if (finishSurvey === true) {
      axios.post('https://limitless-woodland-38268.herokuapp.com/ditchit/recommendations', selectedVals)
        .then(res => {
          setApiResults(res.data)
        })
        .catch(err => console.log('Error from survey post:', err))
      history.push('/result')
    }
  }, [selectedVals, finishSurvey])

  return (
    <>
      {!selectedVals.location && <div>
        <Location themeColor={themeColor} selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

      {selectedVals.location && selectedVals.location.city && selectedVals.location.address && selectedVals.location.postalCode && selectedVals.location.province && selectedVals.location.radius && !selectedVals.itemType && <div>
        <ItemType themeColor={themeColor} itemTypes={itemTypes} selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

      {selectedVals.location && selectedVals.location.city && selectedVals.location.address && selectedVals.location.postalCode && selectedVals.location.province && selectedVals.location.radius && selectedVals.itemType && !finishSurvey && <div>
        <Condition themeColor={themeColor} setFinishSurvey={setFinishSurvey} selectedVals={selectedVals} setSelectedVals={setSelectedVals} />
      </div>}

    </>
  )
}

export default withRouter(Survey)