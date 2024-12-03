import React from 'react';

interface ToastMsgProps {
  msg: string;
}

const ToastMsg: React.FC<ToastMsgProps> = ({ msg }) => {
  return (
    <div className="toast">
      {msg}
    </div>
  );
};

export default ToastMsg;
