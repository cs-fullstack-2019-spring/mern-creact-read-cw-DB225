import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NewMovie extends Component{

    submitMovie = (e) => {
        e.preventDefault();
        fetch('/create',
            {
                method: "POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    name: e.target.name.value,
                    genre: e.target.genre.value,
                    team: {
                        mainActor: e.target.mainActor.value,
                        mainActress: e.target.mainActress.value,
                        supportingActor: e.target.supportingActor.value,
                        supportingActress: e.target.supportingActress.value,
                    }
                }),
            });
        };


    render(){
        return(
            <div>
                <form onSubmit={this.submitMovie}>
                    <label htmlFor="name">Movie Name :</label>
                    <input type="text" id="name" name="name"/>
                    <br/>
                    <br/>
                    <label htmlFor="genre">Genre :</label>
                    <input type="text" id="genre" name="genre"/>
                    <br/>
                    <br/>
                    <label htmlFor="mainActor">Main Actor :</label>
                    <input type="text" id="mainActor" name="mainActor"/>
                    <br/>
                    <br/>
                    <label htmlFor="mainActress">Main Actress:</label>
                    <input type="text" id="mainActress" name="mainActress"/>
                    <br/>
                    <br/>
                    <label htmlFor="supportingActor">Supporting Actor:</label>
                    <input type="text" id="supportingActor" name="supportingActor"/>
                    <br/>
                    <br/>
                    <label htmlFor="supportingActress">Supporting Actress:</label>
                    <input type="text" id="supportingActress" name="supportingActress"/>
                    <br/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewMovie;