import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleJoinRoom = this.handleJoinRoom.bind(this);
    }
    handleJoinRoom() {
      console.log('joinRoom');
    }
    render(){
        return (
                <div>
                  <form className="room-create-form" action="">
                    <label>nickName: </label><input id="nickName" type="text" />
                    <label>joinRoom: </label><input id="roomName" type="text" />
                    <button id="joinRoom" className="btn-primary" type="button" onClick={this.handleJoinRoom}>join</button>
                    <button id="createRoom" className="btn-primary" type="button" onClick={this.handleJoinRoom}>방생성</button><br/><br/>
                  </form>
                </div>
        )
    }
}

export default App;
