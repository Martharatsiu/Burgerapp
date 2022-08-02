import React, { Component } from 'react';
import './Burgerstyle.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        meat: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            meat
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
           
            default: break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    burgerContent = () => {
        let {
            tomato,
            meat,
            lettuce
        } = this.state;
        let burger = [];

       
       
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
      
        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        } 
        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }

        if(burger.length === 0)
            burger.push(<p key="0">Fill your burger!</p>);
        return burger;
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                 
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>+</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>-</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>+</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>-</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>+</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>-</button>
                    </div>
                </div>
            </>
        );
    }
}

