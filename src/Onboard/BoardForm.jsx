import React from "react";
import { Button } from "antd";
import { Alert, Form, Input } from "antd";
import { login } from "../actions";
import { LoginOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react'
import Web3 from 'web3'
// sensible defaults
const DEFAULT_TOKEN = "0x570215116714E113592ac8ef87C6ABfd176d705e";
const DEFAULT_PROADDR = "0xe1CcF78C6E26c45c4e4A5584C19a2e5b2009536E";


function BoardForm() {
  const [form] = Form.useForm();
  const initialValues = {};
  const [account, setAccount] = useState(null);
  let [web3, setWeb3] = useState(null);
  const [conngoes, setConngoes] = useState(false);
  const [bnstate, setBnstate] = useState(false);

  useEffect(() => {
  checkAccount();
  }, []);  
 
/*async function activate() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      checkAccount();
    } catch (err) {
      console.log('user did not add account...', err);
    }
  }
}*/

function activate() {
   // setBnstate(!false);
    window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error,bnstate) => {
      if (error.code === 4001) {
  //      setConngoes(!false);
 //       setBnstate(conngoes);
         setBnstate(false);
 

        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
 //   setConngoes(!false);
  //  setBnstate(conngoes);
}

async function checkAccount() {
  let web3 = new Web3(window.ethereum);
  setWeb3(web3);
  const accounts = await web3.eth.getAccounts();
  setAccount(accounts[0]);
 // if (accounts.length > 0) setConngoes(!false);

//  if (web3.eth.net.isListening()) setConngoes(!false);
}

  const onconnect = (bnstate)=>{
    setBnstate(!false);
    activate();
 //   setBnstate(conngoes);
  }
  const onFinish = (token,proaddr)=>{
  };



  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
      form={form}
      name="onboard"
      initialValues={initialValues}
      onFinish={onFinish}
    >

      {/* token and ref */}
      <Form.Item label=" " colon={false}>
        <Button htmlType="button" disabled={bnstate} size="small" onClick={onconnect}>
          connetct to metamask
        </Button>
      </Form.Item>
      <Form.Item name="token" label="Token" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_TOKEN} />
      </Form.Item>
      <Form.Item name="proaddr" label="Project" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_PROADDR} />
      </Form.Item>
      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" /*disabled={bnstate}*/ htmlType="submit">
          <LoginOutlined />
          Submit and sign
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BoardForm;
