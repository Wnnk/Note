'use client'
import { Input, Button } from "antd";
import {DrawerContext} from './page'
import { useContext } from "react";
/** 
 * @description Note顶部
 * 
 * 
 */ 




const TopNav = () =>{
  const {drawer,setDrawer} = useContext(DrawerContext);
  /*  */
  const Publish = () =>{
    setDrawer(true);
  }

  return (
    <>
    <div className="flex justify-between p-0.5">
      <div className="flex justify-center items-center">
        <Button onClick={()=>{Publish()}} className="">发布设置</Button>
      </div>
    </div>

   
    </>
  )
}


export default TopNav;