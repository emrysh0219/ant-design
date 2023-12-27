import React from 'react';
import { Button, message, Popconfirm } from 'antd';

const confirm = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.success('Click on Yes');
};

const cancel = (e: React.MouseEvent<HTMLElement>) => {
  console.log(e);
  message.error('Click on No');
};

const App: React.FC = () => (
  <Popconfirm
    title="删除该客户"
    description="您确定要删除该客户吗?"
    onConfirm={确认}
    onCancel={取消}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);

export default App;
