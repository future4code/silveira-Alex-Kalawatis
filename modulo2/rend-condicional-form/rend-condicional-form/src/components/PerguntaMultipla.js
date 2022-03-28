import React from "react"

export default class PerguntaMultipla extends React.Component{
    state ={
        valor: '',
    }
    onChangeOutro = (event) => {
        this.setState({valor: event.target.value})
        console.log(event.target.value)
    }

    render(){
        
    
        return(
            <div>
                <p>{this.props.pergunta}</p>
                
                 <select value={this.state.valor} onChange={this.onChangeOutro} >
                    {this.props.options.map((option)=>{return <option>{option}</option>})}
                </select>
        
            </div>
        )
    }

}
