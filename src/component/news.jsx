import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel} from 'react-tabs';
import InTech from './intech'
import Innews from './innews.jsx'
import Footer from './footer';
import Insports from './insports';
import Inbusiness from './inbusiness';
function News(){
    const [activeTab,setActiveTab]=useState('intech')
    
    return <>
    <h1 className='logo'>India-Around</h1>
    <Tabs>
        <div className="new-navbar">
                <TabList className='navbar-list'>
                    <Tab className='navlist-item'>
                        <Link to="/intech">
                            <h2>India tech news</h2>
                            <div className="line"></div>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/innews">
                            <h2>India news</h2>
                            <div className="line"></div>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/insports">
                            <h2>India sports</h2>
                            <div className="line"></div>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/inbusiness">
                            <h2>India business</h2>
                            <div className="line"></div>
                        </Link>
                    </Tab>
                </TabList>
        </div>
        <TabPanel>
             <InTech/> 
        </TabPanel>
        <TabPanel>
             <Innews />
        </TabPanel>
        <TabPanel>
            <Insports />
        </TabPanel>
        <TabPanel>
            <Inbusiness />
        </TabPanel>
    </Tabs>
    <Footer />
    </>
}
export default News;