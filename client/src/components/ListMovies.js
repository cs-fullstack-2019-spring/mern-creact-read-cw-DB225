import React, { Component } from 'react';

class ListMovies extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[],
        };
        this.componentDidMount();
    }

    componentDidMount() {
        fetch('/list')
            .then(data=>data.json())
            .then(returnedData=>this.setState({data:returnedData}))
    }

    render(){
        return this.state.data.map((eachMovie, i)=>{
            return(
                <div key={i}>
                    <p>{eachMovie.name} (<b>cast:</b> <i> {eachMovie.team.mainActor},{eachMovie.team.mainActress},
                        {eachMovie.team.supportingActor} and {eachMovie.team.supportingActress}</i>)</p>
                </div>
            );
        })

    }
}

export default ListMovies;