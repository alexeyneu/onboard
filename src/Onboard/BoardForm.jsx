import React from "react";
import { Button } from "antd";
import { Alert, Form, Input } from "antd";
import { login } from "../actions";
import { LoginOutlined } from "@ant-design/icons";
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import brander from "../assets/abi/brander.json"
// sensible defaults
const DEFAULT_TOKEN = "0x570215116714E113592ac8ef87C6ABfd176d705e";
const DEFAULT_PROADDR = "0xe1CcF78C6E26c45c4e4A5584C19a2e5b2009536E";


function BoardForm() {
  const [form] = Form.useForm();
  const initialValues = {};
  const [conngoes, setConngoes] = useState(false);
  const [bnstate, setBnstate] = useState(false);

function activate()  {
	const {ethereum} = window;
   ethereum.request({ method: 'eth_requestAccounts' })
    .then((result,conngoes)=>{window.accountf = result; setConngoes(!false);})
    .catch((error,bnstate) => {
      setBnstate(false);    
      if (error.code === 4001) {
        // EIP-1193 userRejectedRequest error
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
    });
}

  const onconnect = (bnstate)=>{
    setBnstate(!false);
    activate();
  }
  const onFinish = async ({proaddr,token})=>{
	const {ethereum} = window;  	
    window.web3 = new Web3(ethereum);
    const brandercontr = await new window.web3.eth.Contract(brander, /*rinkeby*/ '0x01b4091244791Ca6b6e82ACC9894d4Af3B93F0eE');
    let trt = await brandercontr.methods.watchtokarray().call({from: window.accountf[0]});
    console.log(JSON.stringify(trt));
    console.log(token);
    let str = await brandercontr.methods.stringtosend(token).call({from: window.accountf[0]});
    let msign = await window.web3.eth.personal.sign(str ,window.accountf[0]);
    console.log(msign);
    let codeshift = await brandercontr.methods.addtokens(token, msign).send({from: window.accountf[0]});
  }

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
        <Button htmlType="button" type="primary" id="turf-button" disabled={bnstate} shape="round" size="small" onClick={onconnect}>
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
        <Button type="primary" disabled={!conngoes} htmlType="submit">
          <LoginOutlined />
          Submit and sign
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BoardForm;
