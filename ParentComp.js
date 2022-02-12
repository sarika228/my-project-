import React,{Component,PureComponent} from "react"
import RegularComp from "./RegComp"
import PureComp from "./pureComp"
import MemoComp from "./MemoComp"

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Kindson'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Kindson'
            })
        }, 2000)
    }

    render() {
        console.log('== Parent Component Render===')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegularComp name={this.state.name}></RegularComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp