import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs, TabPanel} from 'react-tabs';
import InTech from './intech'
import Innews from './innews.jsx'
import Footer from './footer';
import Insports from './insports';
import Inbusiness from './inbusiness';
function News(){
    const [activeTab,setActiveTab]=useState(0)
    
    return <>
    <h1 className='logo'>India-Around</h1>
    <Tabs>
        <div className="new-navbar">
                <TabList className='navbar-list'>
                    <Tab className='navlist-item'>
                        <Link to="/intech">
                            <h2 className={`tab ${activeTab==0 && 'active'}`} onClick={()=>setActiveTab(0)}>India tech news</h2>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/innews">
                            <h2 className={`tab ${activeTab==1 && 'active'}`} onClick={()=>setActiveTab(1)}>India news</h2>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/insports">
                            <h2 className={`tab ${activeTab==2 && 'active'}`} onClick={()=>setActiveTab(2)}>India sports</h2>
                        </Link>
                    </Tab>
                    <Tab className='navlist-item'>
                        <Link to ="/inbusiness">
                            <h2 className={`tab ${activeTab==3 && 'active'}`} onClick={()=>setActiveTab(3)}>India business</h2>
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