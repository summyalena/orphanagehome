"use client";

import { heading } from "@/utils/datas";
import datas from "@/utils/datas";
import React from "react";
import styles from "./dashboard.module.css";
import Container from '@/ui/Container';
import Transactions from './Transactions';
import donations, { donationheading } from '@/utils/donations';

function TransactionTable() {
  return (
    <Container className={`full-width ${styles.transactiontable}`}>
     <Transactions/>
      <div>
      <p>Donation</p>
      <table className="grid full-width">
        <thead className={styles.tableheading}>
          {donationheading.map((el) => (
            <tr key={el.id} className={`${styles.head}`}>
              <th>{el.name}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {donations.length > 0 &&
            donations.map((data) => (
              <tr className={`grid ${styles.tabledata}`} key={data.id}>
                <td className={styles.group}>
                  {
                    data.name.map((el)=> (
                    <span key={el.id}>
                      {el.text}
                    </span>
                    ))
                  }
                  </td>
                <td>{data.phonenumber}</td>
                <td>{data.purpose}</td>
                <td>{data.amount}</td>
                {data.status === true ? <td className='true'>Successful</td> : <td className='false'>Pending</td>}
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </Container>
  );
}

export default TransactionTable;
