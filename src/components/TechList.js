import React, {Component} from 'react';

import TechItem from './TechItem';

class ThecList extends Component{

  state = {
    newTech: '',
    techs: []
  }

  componentDidMount(){
    const techs = localStorage.getItem('techs');
    if(techs){
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  componentDidUpdate(_,prevState){
    if(prevState.techs !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }
  componentWillUnmount(){

  }

  hadnleInputChange = e =>{
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e =>{
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech]});

    this.state.newTech = '';
  }

  handleDelete = (tech) =>{
    this.setState({ techs: this.state.techs.filter(t => t !== tech)});
  }
  render(){

    return (
        <form onSubmit={this.handleSubmit}>
          <ul>
              {this.state.techs.map(tech => 
                <TechItem key={tech} tech={tech} onDelete={()=> this.handleDelete(tech)} />
              )}
              <li>{this.state.newTech}</li>
              
          </ul>
          
          <input type="text" onChange={this.hadnleInputChange} value={this.state.newTech}/>
          <button type="submit">Enviar</button>
        </form>
    );
  }

}

export default ThecList;