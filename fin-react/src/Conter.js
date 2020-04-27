import React from 'react'
import { connect} from 'dva'
function Conter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={props.onIncrease}>+</button>
            <button onClick={props.onDecrease}>-</button>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        number:state.conter
    }
}
function mapReducerToProps(dispatch) {
    return {
        onIncrease(){
            console.log("出发了")
            dispatch({
                type:"conter/increase"
            });
        },
        onDecrease(){
            dispatch({
                type:"conter/decrease"
            })
        }
    }
}
export default connect(mapStateToProps,mapReducerToProps)(Conter);
