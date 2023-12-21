"use client"
import MarkdownEditor from '@uiw/react-markdown-editor';
import TopNav from './TopNav';
import DrawerState from './DrawerState';
import { useContext,createContext, useState } from 'react';

interface OpenDrawerData {
  drawer: boolean,
  setDrawer:React.Dispatch<React.SetStateAction<boolean>>
}


export const DrawerContext = createContext<OpenDrawerData>({
  drawer:false,
  setDrawer:()=>{},
})

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
const Note = () => {
  const [drawer, setDrawer] = useState(true)
  
  return(
    <div className=' flex flex-col h-screen'>
      <div className='w-11/12 m-2'>
        <DrawerContext.Provider value={{drawer,setDrawer}}>
          <TopNav></TopNav>
          <DrawerState></DrawerState>
        </DrawerContext.Provider>
        
      </div>
      

      <div className='grow  '>
        <MarkdownEditor
          height='100vh'
          visible={true}
          value={mdStr}
          onChange={(value, viewUpdate) => {
          }}
        />
      </div>
      
    </div>
  )
}



export default Note