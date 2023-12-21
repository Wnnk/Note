"use client"
import { Input, Badge,Avatar } from 'antd'
import { SearchOutlined, CommentOutlined, UserOutlined  } from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


const Nav = () =>{
  const router = useRouter();
  const pathname = usePathname()
  console.log(pathname);
  
  const [active,setActive] = useState([{is:pathname==='/',path:'/'},{is:pathname==='/note',path:"/note"},{is:pathname==='/article',path:"/article"}])

  const handleNavigator = (index:number)=>{
    
    
    // const updateActive = active.map((item,i)=> (i ===index ? !item : false));
    const updateActive = active.map((item,i)=>{
      if (i === index) {
        item.is = !item.is;
        router.push(item.path);
      }else item.is = false;
      return item;
    })
    setActive(updateActive);
  }
  return(
    <div className="flex h-[65px]  justify-between ">
      <div className='flex items-center '>
        <Input placeholder='想要搜索点什么' size="large" prefix={< SearchOutlined/> } className='h-10 ml-2 ' ></Input>
      </div>
      <div className=' flex  justify-around w-1/2  items-center'>
          <div className={`flex justify-center px-8 ${active[0].is ? 'text-sky-500' : ''}`} onClick={()=>{handleNavigator(0)}}>首页</div>
          <div  className={`flex justify-center px-8 ${active[1].is ? 'text-sky-500' : ''}`} onClick={()=>{handleNavigator(1)}}>草稿</div>
          <div className={`flex justify-center px-8 ${active[2].is ? 'text-sky-500' : ''}`} onClick={()=>{handleNavigator(2)}}>文章</div>
      </div>
      <div className='flex justify-center items-center mr-18 '>
        <div className='px-2'>
          <Badge count={88} overflowCount={99} size='small' >
            <CommentOutlined className='text-3xl' />
          </Badge>
        </div>
        <div className='px-2'>
          <Avatar icon={<UserOutlined/>} ></Avatar>
        </div>  
      </div>
    </div>
  )
}

export default Nav;