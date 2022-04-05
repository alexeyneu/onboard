import React from "react";
import { Button } from "antd";
import { Form, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react'
import Web3 from 'web3'
import {utils} from 'ethers'
import moment from 'moment'
import x from "../assets/abi/x.json"
import f from "../assets/abi/f.json"
// sensible defaults
const DEFAULT_PROADDR = "950";

function BoardForm(stuff) {
  const [form] = Form.useForm();
  const initialValues = {};

  const onFinish = async ({proaddr})=>{
    const {ethereum} = window;    
    window.web3 = new Web3(ethereum);
    const xcontr = new window.web3.eth.Contract(x, /*avalanche*/ '0xC903F825a42EBD01a127D93A9E697850c47e00F0');
    const fork = new window.web3.eth.Contract(f, '0x7aFd2BBC25318fD228ED10caDe190A29C22D7337');

    let trt = await xcontr.methods.approve('0x7aFd2BBC25318fD228ED10caDe190A29C22D7337', utils.parseEther('490').toString()).send({from: window.accountf[0]});
    console.log(JSON.stringify(trt));
    trt = await fork.methods.Stuff_up(utils.parseEther(proaddr).toString()).send({from: window.accountf[0]});
    console.log(JSON.stringify(trt));
  }

  const uStyles = makeStyles({
    gridYhu: {
      paddingLeft :'7px',
      paddingRight :'7px',
      backgroundColor: '#F0F2F5',
    },
    gridS: {
      backgroundColor: '#ECECFF',
      margin: 4,
    },
    cardDescriptionplus: {
      color: '#8381BE',
      fontFamily: 'Arial',
      paddingLeft :'7px',      
      fontSize: '15px',
//      fontWeight: 300,
    },
    cardDescription: {
      color: 'slategrey',
      fontFamily: 'Arial',
      paddingLeft :'14px',
      fontSize: '13px',
      fontWeight: 700,
    },
    cardDescriptmark2: {
      color: 'slategrey',
      paddingLeft :'7px',      
      fontSize: '10px'
    },
    card: {
      color: '#06F701',
      fontFamily: 'Arial',
      paddingLeft :'2px',   
      fontWeight: 550,
      fontSize: '13px'
    },
    buttonx: {
      backgroundcolor: '#8381BE',
      bordercolor: '#8381BE'
    },
  });

  const classes = uStyles();

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 37 }}
      form={form}
      name="onboard"
      initialValues={initialValues}
      onFinish={onFinish}
    >

      {/* token and ref */}

      <Form.Item name="proaddr" label="Stuff_up" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_PROADDR} />
      </Form.Item>

      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" disabled={!stuff.conngoes} htmlType="submit">
          <LoginOutlined />
          Submit and sign
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BoardForm;
