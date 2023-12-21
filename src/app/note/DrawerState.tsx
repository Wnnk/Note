'use client'
import {DrawerContext} from './page'
import { useContext } from "react";
import { Drawer, Button,Form, Radio, Switch, Input, Divider,message   } from 'antd';
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons' 

/** 
 * @description 文章发布侧边栏 
 * 
 * 
 **/
const {TextArea} = Input
/* 选择分类 */
const CategoryChoice = () =>{
 

  const onFinish = async ({isPublic, Category, tag, description,title }:any) =>{
    console.log(isPublic, Category, tag, description,title)
    if (!title) {
      message.warning('标题不能为空')
      return
    }

   /* 发布 */

  }

  return(
    <Form onFinish={onFinish}>
      {/* <Form.Item>
        {
          DrawerCategoryChoice.map((item) =>{
            return <Radio.Button key={ item.value } value={ item.value} > { item.choice} </Radio.Button>
          }) 
        }
      </Form.Item> */}

        <Form.Item name='title' initialValue='' rules={[{required:true}]}>
          <Input placeholder='请输入Note标题'></Input>
        </Form.Item>

        <div >
          <div>
            <UserOutlined />
            自定义
          </div>
          <Form.Item name='isPublic' initialValue={false} >
            <Switch checkedChildren="公开" unCheckedChildren="私人" defaultChecked  />
          </Form.Item>
        </div>


      <Form.Item name='sortname' initialValue={''} rules={[{required:false},({getFieldValue})=>({
        validator(_,value){
          let sortname = getFieldValue('sortname');
          if (sortname && !sortname.trim()) {
            return Promise.reject(new Error('分类名不能为空'))
          }
          return Promise.resolve();
        }
      })]}>
        <Input placeholder='请输入文章分类'></Input>
      </Form.Item>
      <Divider />
      <Form.Item name='tag'  rules={[{required: false}, ({getFieldValue})=>({
        validator(_,value){
          let tags = getFieldValue('tag');
          if ( tags.length >= 5) {
            return Promise.reject(new Error('标签不能超过4个字符'));
          }
          return Promise.resolve();
        }
      })]}>
        <Input placeholder='自定义标签' ></Input>
      </Form.Item>
      <Divider />
      <Form.Item name='description'  >
        <TextArea placeholder='文章概述' style={{ height: 200, resize: 'none' }} showCount maxLength={100}/>
      </Form.Item>
      <Button   htmlType="submit">确定发布</Button>
    </Form>
  )
}



const DrawerState = () =>{
  const {drawer,setDrawer} = useContext(DrawerContext);


  const showDrawer = () => {
    setDrawer(true);
  };

  const onClose = () => {
    setDrawer(false);
  };


  
  return(
    <Drawer title="发布笔记" placement="right" onClose={onClose} open={drawer}>
      <div>
        <div className='flex items-center justify-between'>
          <div>
             <UnorderedListOutlined />
           <span className='pl-2'>选择分类</span>
          </div>
        </div>
     
        {/* 分类选择 */}
        <div className='m-4'>
          <CategoryChoice></CategoryChoice>
        </div>
      </div>
    </Drawer>
  )
}


export default DrawerState;