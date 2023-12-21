import React from 'react';
import { Button } from 'antd';

const App: React.FC = () => {
  return(<>
    <div className='flex  min-w-full min-h-full flex-col'>
      {/* 主体部分 */}
      <div className='bg-gradient-to-r from-pink-100 via-zinc-100 to-blue-200 min-h-screen w-full h-full flex justify-center items-center'>
        <div className='flex flex-col w-11/12 h-10/12 '>
          <div className='flex h-1/2 justify-around flex-col'>
            <span className='text-6xl text-gray-400'>Note</span>
            {/* 标题 */}
            <div className=''>个人使用 简约 方便</div>
            {/* 登录/注册 */}
            <div>
              <Button size='large' >登录/注册</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
  )


};

export default App;

