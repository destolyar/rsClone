import { useEffect, useState } from 'react'
import '../../styles/components/trips.scss'
import { Requests } from '../utils/Requests'
import {TripsCardInfo} from '../../types'

export const Trips: React.FunctionComponent = () => {
  let [trips, setTrips] = useState<TripsCardInfo>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await Requests.getTrips()
      setTrips(result)
    }
    fetchData()
  }, [])

  console.log(trips)
  return(
    <div className="trips">
      
    </div>
  )
}