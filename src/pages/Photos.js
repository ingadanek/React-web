import React, {Component} from 'react';
import data from '../data/data.js';
import Card from '../components/Card';
import '../styles/Photos.scss';
const footer = <footer><p>&copy; 2020</p> </footer>

class Photos extends Component{
state={
properties: data.properties,
property: data.properties[0]
}
nextProperty =()=>{
    const newIndex = this.state.property.index+1;
    this.setState({
        property:data.properties[newIndex]
    })
}
prevProperty =()=>{
    const newIndex = this.state.property.index-1;
    this.setState({
        property:data.properties[newIndex]
    })
}
render(){
    const {property, properties}=this.state;
    return(
        <div className='App'>
            <div className='main'>
            <button className='next'
            onClick={()=>this.nextProperty()}
                disabled={property.index===data.properties.length-1}>
            Next</button>

            <button className='prev'
            onClick={()=>this.prevProperty()}
            disabled={property.index===0}
            >
            Prev</button>
           
            <div className='col'>
            <div className={`cards-slider active-slide-${property.index}`}>
            <div className="cards-slider-wrapper" style={{'transform':`translateX(-${property.index*(100)}%)` }}>
            {properties.map(property=><Card key={property.id} property={property}/>)}
            </div>
            </div>
            </div>
        </div>
        {footer}
        </div>
    )
}
}

export default Photos;

