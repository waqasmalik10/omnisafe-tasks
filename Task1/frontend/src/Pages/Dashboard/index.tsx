import ProtectedLayout from 'Common/PrivateLayout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React from 'react';
import ActiveEvents from 'Compoenents/Dashboard/ActiveEvents';
import PastEvents from 'Compoenents/Dashboard/PastEvents';


const Dashboard = () => {

    return (
        <ProtectedLayout>
            <div className="mt-20 pl-16" ></div>
            <Tabs>
                <div className="md:flex px-3">
                    <div className="md:w-full lg:w-full z-0">
                        <div className="lg:flex justify-between">
                            <div className="w-full">
                                <div className="tab-section mt-3 flex space-between">
                                    <TabList>
                                        <nav className="ml-20 flex space-x-4" aria-label="Tabs">
                                            <Tab default={true}>
                                                <div className="cursor-pointer text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm">
                                                    Active
                                                </div>
                                            </Tab>
                                            <Tab>
                                                <div className="cursor-pointer text-gray-500 hover:text-gray-700 px-5 py-2 font-medium text-sm">
                                                    Past
                                                </div>
                                            </Tab>
                                        </nav>
                                    </TabList>
                                </div>
                                <TabPanel>
                                    <ActiveEvents />
                                </TabPanel>
                                <TabPanel>
                                    <PastEvents />
                                </TabPanel>
                            </div>
                        </div>
                    </div>
                </div>
        </Tabs>
        </ProtectedLayout>
    )
}

export default Dashboard;