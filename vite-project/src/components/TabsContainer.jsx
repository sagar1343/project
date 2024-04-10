import React from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import GridContainer from './GridContainer';

const TabsContainer = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
      >
        <Tab label='Tab 1' />
        <Tab label='Tab 2' />
      </Tabs>
      {selectedTab === 0 && (
        <TabPanel>
          <GridContainer />
        </TabPanel>
      )}
      {selectedTab === 1 && <TabPanel>Hello World</TabPanel>}
    </Box>
  );
};

const TabPanel = (props) => {
  const { children } = props;

  return <Box sx={{ p: 3 }}>{children}</Box>;
};

export default TabsContainer;
