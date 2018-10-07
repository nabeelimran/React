import React, { Component } from 'react';
import FBpost from './components/FBpost/FBpost'
import './App.css';

const dummy = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, eligendi? Modi saepe quis magni alias dolorem omnis non quisquam, harum iure aspernatur optio! Consequuntur impedit modi iure iusto voluptatum itaque.';
const dummy2 = 'Lorem ipsum dolor sit amet, Consectetur, eligendi? Modi saepe quis magn, harum iure aspernatur optio! Consequuntur impedit modi iure iusto voluptatum itaque.';
const images =['https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&h=350','https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?size=338&ext=jpg', 'https://us.123rf.com/450wm/smileus/smileus1505/smileus150500016/40147459-colorful-sunset-scenery-in-rural-landscape-with-a-bench-and-a-path-in-the-foreground-gold-fields-and.jpg?ver=6']

class App extends Component {
  render() {
    return (
      <div className="">
        <FBpost
          avatar = {"https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCMiK4t_Dzo3ZciILdmNhcmRfcGhvdG8qKGVlNDM1MGMyOGQxNTE5YmI5NWJmODFlYzkzNzRmNmY0NTE3Mzc3YmQwASo3Ms5Ro6pj54wiRCpk0reG9W7h?sz=128"}
          createdBy={"Nabeel Imran"}
         description={dummy2}
        //  images={images}
          likes={['rafaqat', 'moosa']}
          />
      </div>
    );
  }
}

export default App;
