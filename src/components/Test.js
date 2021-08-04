import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { restuarantActions } from '../store/Test'
import classes from './Restaurants.module.css'
import Restaurant from "./Restaurant"

const Test = props => {
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restuarants.restaurants)
    useEffect(() => {

        const fetchUsers = async () => {
            const data = await fetch('https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "latitude": 13.0358481, "longitude": 80.244455 })
            })
            if (!data.ok) {
                console.log("error")
            }
            const resp = await data.json()
            console.log(resp)
            dispatch(restuarantActions.getRestaurants(resp.listRestaurants))
        }

        fetchUsers()
    }, [])

    return (
        <div className={classes.list}>
            {restaurants.map(rest => <Restaurant restaurant={rest} />)}
        </div>
    )
}

export default Test