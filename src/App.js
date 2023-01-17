import React from 'react';
import './App.css';

//Very easy
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: 'Eduardo', number: '704-449-8571', dob: '07/11/2001' },
        { name: 'Zuri', number: '704-444-5555', dob: '08/26/2008' },
        { name: 'Luis', number: '704-555-6666', dob: '05/30/2001' }
      ]
    };
  }

  //Easy
  render() {
    const peopleComponents = this.state.people.map(person => (
      <BasicInfo
        name={person.name}
        number={person.number}
        dob={person.dob}
      />
    ));

    //Medium 
    return (
      <div className="App">
        {peopleComponents}
      </div>
    );
  }
}

//Hard
function BasicInfo(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Number: {props.number}</p>
      <p>Date of Birth: {props.dob}</p>
    </div>
  );
}

export default App;