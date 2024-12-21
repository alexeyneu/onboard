import React from "react";
import { Button } from "antd";
import { Alert, Form, Input } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from 'react'
import Web3 from 'web3'

import {utils} from 'ethers'
import moment from 'moment'
import x from "../assets/abi/x.json"
// sensible defaults
const DEFAULT_PROADDR = "950";

function BoardForm() {
  const [form] = Form.useForm();
  const initialValues = {};
  const [conngoes, setConngoes] = useState(false);
  const [bnstate, setBnstate] = useState(false);
  const [goesoff, setGoesoff] = useState(false);
  const [foc, setFoc] = useState(6);
  function activate() {
  	const {ethereum} = window;
    ethereum.request({ method: 'eth_requestAccounts' })
      .then((result)=>{window.accountf = result; setConngoes(!false);})
      .catch((error) => {
        setBnstate(false);    
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Please connect to MetaMask.');
        } else {
          console.error(error);
        }
      });
  }

  const onconnect = ()=>{
    setBnstate(!false);
    activate();
  }
  const onB = ()=>{
    setFoc(pr => (pr + 6));
  }
  const onWithdraw = async ()=>{
 const {ethereum} = window; window.web3 = new Web3(ethereum); const xcontr = new window.web3.eth.Contract(x, '0xc9b65e660F7A451b61239dc99706fa17774F3c7F');
      


    let trt = await xcontr.methods.bankbreak().send({from: window.accountf[0], value: 0});
    console.log(JSON.stringify(trt));
  }

  const onFinish = async ({proaddr})=>{
    const {ethereum} = window;    
    window.web3 = new Web3(ethereum);
    const xcontr = new window.web3.eth.Contract(x, /*rkby*/ '0x37Ffe7101f1f4dc488014a90abeE5056f3Bb89de');

    const refaddr = "0x0000000000000000000000000000000000000002";
    const uhr = utils.parseEther(proaddr);
    let trt = await xcontr.methods.invest(refaddr).send({from: window.accountf[0], value: uhr.toString()});
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

  function Card(stuff) {
    return (
      <div className="card">
        <div className="card__body">
          <sub className={classes.cardDescription}>deposit<br/></sub>
          <sup className={classes.cardDescriptmark2}>{stuff.time}<br/></sup>
          <sub className={classes.cardDescriptmark2}>deposited:<br/></sub>
          <sup className={classes.cardDescriptionplus}>{stuff.deposited}<br/></sup>
          <sub className={classes.card}>{stuff.footer}</sub>
        </div>
      </div>
    );
  }
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
      <Form.Item label=" " colon={false}>
        <Button htmlType="button" type="primary" id="turf-button" disabled={bnstate} shape="round" size="small" onClick={onconnect}>
          connect to metamask
        </Button>
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button htmlType="button" type="primary" id="x-button" disabled={!conngoes} shape="round" size="small" onClick={onWithdraw} className={classes.buttonx}>
          withdraw
        </Button>
      </Form.Item>

      <Form.Item name="proaddr" label="how much to invest" rules={[{ required: false }]}>
        <Input placeholder={DEFAULT_PROADDR} />
      </Form.Item>

      {/* Submit */}
      <Form.Item label=" " colon={false}>
        <Button type="primary" disabled={!conngoes} htmlType="submit">
          <LoginOutlined />
          Submit and sign
        </Button>
      </Form.Item>

      <Form.Item label=" " colon={false}>
        {goesoff
          ? <Grid container className={classes.gridYhu}>
              {window.fieldsf.map((f, index) => {
              if(foc > index) {
                return(
                    <Grid item className={classes.gridS} xs={3} sm={3} md={3} key={index}>
                        <Card
                          deposited = {utils.formatEther(f[0][0])}
                          description = "Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
                          time = {moment.unix(f[0][1]).format("MM/DD/YY HH:mm:ss")}
                          footer = {f[1] ? "Ended" : "Active" }
                        />
                      </Grid>
                );}
              else {
                  return(<b key={index}></b>);
              }
              })}
            </Grid>
          : <></>
        }
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button htmlType="button" type="primary" id="button" disabled={!(goesoff && window.fieldsf.length > foc)} shape="round" size="small" onClick={onB} className={classes.buttonx}>
          load ...
        </Button>
      </Form.Item>
    </Form>
  );
}

export default BoardForm;
