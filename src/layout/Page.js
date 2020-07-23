import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import'../styles/Page.css';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Bio from '../pages/Bio';
import Photos from '../pages/Photos';
import Volunteer from '../pages/Volunteer';
import Escape from '../pages/Escape';

const Page = () => {
    return ( 
        <>
        <Route render={({location})=>(
        <TransitionGroup>
            <CSSTransition 
            key={location.key}
            timeout={750}
            classNames='item'
            >
       <Switch location={location}>
       <Route path='/' exact component={()=>(
           <Home/>
       )}/>
       <Route path='/bio' component={()=>(
           <Bio/>
       )}/>
       <Route path='/volunteer' component={()=>(
           <Volunteer/>
       )}/>
       <Route path='/photos' component={()=>(
           <Photos/>
       )}/>
       <Route path='/escape' component={()=>(
           <Escape/>
       )}/>
       <Route  component={()=>(
           <Error/>
       )}/>
       </Switch>
       </CSSTransition>
       </TransitionGroup>
         )} />
        </>
     );
}
 
export default Page;