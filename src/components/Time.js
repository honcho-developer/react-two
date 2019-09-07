import React,  {Component} from 'react';
class Times extends Component{
    constructor(props){
        super(props)
        this.state = this.getTime();
    }
    render ( ){
        const currentTime = new Date(),
                 hours = currentTime.getHours(),
                 minutes = currentTime.getMinutes(),
                 seconds = currentTime.getSeconds(),
                 ampm = hours >= 12 ? 'pm' : 'am'

        return(
            <div>
                {
                    hours == 0 ? 12:
                    (hours > 12) ? 
                    hours - 12: hours
                }:{
                    minutes > 9 ? minutes : `0${minutes}`
                }:{
                    seconds > 9 ? seconds : `0${seconds}`
                } {ampm}
            </div>
        )
    }
}
export default Times;