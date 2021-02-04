import React, {Component} from 'react';
import './App.css'

import Input from '../../components/input/input';
import Button from '../../components/button/button'


class App extends Component {

    state = {
      inputValue : ''
    }

    addDigit = (event) => {
      let inputValue = this.state.inputValue
      
      let value = inputValue += event.target.innerHTML

      this.setState({inputValue : value})
    }

    result = () => {
      let result = eval(this.state.inputValue)
      
      this.setState({inputValue : result})
    }

    clear = () => {
      this.setState({inputValue : ''})
    }
  
  render(){
    return(
      <div className = 'App'>
        <Input
          value = {this.state.inputValue}
        />
        <div className = 'keybord'>
            <Button
                whichOne = 'Operator'
                onClick = {( ) => this.clear( )}
                Content = 'C'
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = '('
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = ')'
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = '/'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '1'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '2'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '3'
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = '*'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '4'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '5'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '6'
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = '-'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '7'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '8'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '9'
            />
            <Button
                whichOne = 'Operator'
                onClick = {( e ) => this.addDigit( e )}
                Content = '+'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '0'
            />
            <Button
                whichOne = 'Number'
                onClick = {( e ) => this.addDigit( e )}
                Content = '.'
            />
            
            
            <Button
                whichOne = 'Equal'
                onClick = {( ) => this.result( )}
                Content = '='
            />
            
            
            
        </div>
      </div>
    )
  }
}

export default App;