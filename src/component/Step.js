import React, { Component } from 'react'
import styles from "./styles.module.css"
export default class Step extends Component {
    constructor(){
        super()
        this.state={
            progress:"0"
        }
    }
    componentDidMount(){
        this.setState({progress:this.props.steps[this.props.currStep].n*this.props.progressPerStep})
    }
    render() {
        return (
        <div className={styles.main}>
            <div className={styles.bar1}/>
            <div style={{width:`${this.state.progress}%`}} className={styles.bar2}/>
            <div className={styles.steps}>
                {
                    this.props.stepList.map((el,index)=>{
                        if(this.props.steps[el].visible){
                        return  <div className={styles.cont}>
                                    <div className={styles.circle} style={{backgroundColor:`${this.props.steps[el].n<=this.props.steps[this.props.currStep].n ? "#b10d0d" : "grey"} `}}>
                                        {index+1}
                                    </div>
                                    <div className={styles.txt}>{this.props.steps[el].displayText}</div>
                                </div>
                        }
                    })
                }
            </div>
            </div>
        )
    }
}
