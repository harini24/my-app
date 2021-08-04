import React from "react"
import { useState } from "react"
import Outlets from "./Outlets"
import classes from './Restaurant.module.css'

const Restaurant = props => {
    const [showOutlets, setShowOutlets] = useState(false)
    console.log(props.restaurant.outlet.length)
    if (props.restaurant.outlet.length == 1) {
        return (
            <div className={classes.restItem}>
                <div className={classes.inlineBlk}><img className={classes.restImg} src={props.restaurant.restaurantImage} /></div>
                <div className={classes.restDesc}>
                    <div className={classes.restName}>
                        {props.restaurant.restaurantName}
                    </div>
                    <div className={classes.RestDet}>
                        <div>
                            <div>Time</div>
                            <div>{props.restaurant.time} mns</div>
                        </div>
                        <div>
                            <div>Price</div>
                            <div>{props.restaurant.displayCostForTwo}</div>
                        </div>
                        <div>
                            <div>Rating</div>
                            <div>{props.restaurant.averageReview}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className={classes.restItems}>
                <div className={classes.inlineBlk}><img className={classes.restImg} src={props.restaurant.restaurantImage} /></div>
                <div className={classes.restName}>
                    <div> {props.restaurant.restaurantName}</div>
                </div>
                {!showOutlets && <button onClick={() => setShowOutlets(true)}>+</button>}
                {showOutlets && <button onClick={() => setShowOutlets(false)}>-</button>}
            </div>
            {showOutlets && <div className={classes.outletsList}> <Outlets outlets={props.restaurant.outlet} /> </div>}
        </React.Fragment>
    )

}

export default Restaurant