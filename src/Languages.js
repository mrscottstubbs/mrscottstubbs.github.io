import React, {Component} from 'react';
import Java from './images/java.png';
import Node from './images/nodejs.png';
import Reacts from './images/reactjs.png';
import CPP from './images/cpp.png';
import SQL from './images/postsql.png';
import PHP from './images/php.png';
import Python from './images/python.png';
import Matlab from './images/matlab.png';
import HTML from './images/html.png';

class Languages extends Component {

    render(){
      return(
        <section class="lang">
          <div class="lang--content"> <img alt="python" style={{borderRadius:"5%"}} src={Java} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="java" style={{borderRadius:"5%"}} src={Python} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="cpp" style={{borderRadius:"5%"}} src={CPP} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="node" style={{borderRadius:"5%"}} src={Node} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="react" style={{borderRadius:"5%"}} src={Reacts} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="matlab" style={{borderRadius:"5%"}} src={Matlab} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="html" style={{borderRadius:"5%"}} src={HTML} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="sql" style={{borderRadius:"5%"}} src={SQL} height="100%" width="100%" /> </div>
          <div class="lang--content"> <img alt="php" style={{borderRadius:"5%"}} src={PHP} height="100%" width="100%" /> </div>

        </section>
      )
    }
}
export default Languages;
