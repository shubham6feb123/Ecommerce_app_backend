import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router';

function PaymentSuccessfull() {
    const history = useHistory();
    return (
        <Result
        status="success"
        title="Successfully Purchased!"
        subTitle=""
        extra={[
          <Button type="primary" key="console" onClick={()=>{history.push("/")}} >
            Go Home
          </Button>,
          <Button key="buy" onClick={()=>{history.push("/cart")}}>Buy Again</Button>,
        ]}
      />
    )
}

export default PaymentSuccessfull
