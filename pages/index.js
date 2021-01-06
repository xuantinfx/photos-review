import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import link from '../link';
import React, {useState} from "react";

export default function Home() {
  const [state, setState] = useState(link.map(l => ({
    url: l,
    checked: false,
  })));

  const onClick = (i) => {
    const newState = [...state];
    newState[i].checked = !newState[i].checked;
    setState(newState);
    console.clear();
    console.log(JSON.stringify(newState.filter(l => !l.checked).map(l => l.url)), null, 2);
  };

  return (
    <div style={{
      display: 'flex',
        flexWrap: 'wrap',
    }}>
        Select = Reject, the results will be in console.
        {state.map(({ url, checked }, index) => (
          <div>
            <img
              src={url}
              style={{
              width: 200,
                border: checked ? "10px solid red" : undefined
            }}
              onClick={() => onClick(index)}
            />
        </div>
      ))}
    </div>
  )
}
