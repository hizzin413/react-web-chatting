import React from 'react';

class App extends React.Component {
    render(){
        return (
                <div>
                  <form class="room-create-form" action="">
                    <label>nickName: </label><input ref="nickName" type="text" />
                    <label>joinRoom: </label><input id="roomName" type="text" />
                    <button ref="joinRoom" className="btn-primary" type="button">join</button>
                    <button id="createRoom" class="btn-primary" type="button">방생성</button>
                  </form>
                </div>
        );
    }
}
export default App;
