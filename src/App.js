import React, { Component } from "react";
import HeaderComponent from "./components/HeaderComponents";
import List from "./components/List";
import ListItem from "./components/ListItem";
import FormSubmit from "./components/FormSubmit";
import Axios from"axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: "เล่น Starcraft2", Complete: false },
        { id: 2, name: "ฟังเพลง Bodyslam", Complete: false },
        { id: 3, name: "หาของกินแถวร้านหมูกะทะ", Complete: false }
      ],
      message: ""
    };
    // การส่งค่านี้เข้าไป
    this.onChangmMessage = this.onChangmMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onCheckbox=this.onCheckbox.bind(this);
  }
  componentDidMount = () => {
    Axios.get("htpp://localhost:3001/todos").then(Response=>{

    });
    
  };
  

  onChangmMessage(e) {
    this.setState({ message: e.target.value });
  }
  //กดบันทึก
  onSubmitMessage(e) {
    //ป้องกันการเปลี่ยนหน้า
    e.preventDefault();
    let oldTodos = this.state.todos;
    let todoLength = this.state.todos.length;
    let lastId = this.state.todos[todoLength - 1].id;
    let newMassage = {
      id: lastId + 1,
      name: this.state.message,
      complete: false
    };
    oldTodos.push(newMassage);
    this.setState({ todos: oldTodos });
  }
  onCheckbox(index,id){
    let check =this.state.todos[index].complete;
    Axios.patch(URL+"/todos"+id,{complete: check}).then(require=>{
      let oldState=this.state.todos;
      oldState[index].complete=!check;
      this.setState({todos:oldState});
    });

  }



  render() {
    return (
      <div
        style={{
          borderColor: "#e12c6a",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 4,
          width: 1024,
          margin: "auto",
          marginTop: 20
        }}
      >
        <HeaderComponent />
        <List todos={this.state.todos}onCheckbox={this.onCheckbox}>
          <ListItem />
        </List>
        <FormSubmit
          onChangmMessage={this.onChangmMessage}
          onSubmitMessage={this.onSubmitMessage}
        />
      </div>
    );
  }
}

export default App;
