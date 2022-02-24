const History=(props)=>{
    if(props.allClicks.length===0){
        return(
            <div>The app is used by pressing the buttos</div>
        )
    }

    return(
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

export default History;