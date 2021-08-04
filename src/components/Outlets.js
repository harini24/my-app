import React from 'react'
import classes from './Outlets.module.css'
const Outlets = props => {
    return (
        <React.Fragment>
            {props.outlets.map(outlet => {
                return <div className={classes.outletItem}>
                    <div>{outlet.outletName}</div>
                    <div>{outlet.longDescription}</div>
                    <div className={classes.outletDet}>
                        <div>
                            <div>Time</div>
                            <div>{outlet.time} mns</div>
                        </div>
                        <div>
                            <div>Price</div>
                            <div>{outlet.displayCostForTwo}</div>
                        </div>
                        <div>
                            <div>Rating</div>
                            <div>{outlet.averageReview}</div>
                        </div>
                    </div>

                </div>
            })}
        </React.Fragment>
    )
}
export default Outlets