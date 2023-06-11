import React from 'react'

import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
  
// components
import TodoPage from './TodoPage';
import PostPage from './PostPage';

function Product() {

  return (
    <div className='product'>
      <Tabs>
        <TabList aria-label="List of tabs" contained>
          <Tab>Todos</Tab>
          <Tab>Post</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TodoPage />
          </TabPanel>
          <TabPanel>
           <PostPage />
          </TabPanel>
        </TabPanels>
      </Tabs>

    </div>
  )
}

export default Product