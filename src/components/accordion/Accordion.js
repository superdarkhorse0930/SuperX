import React, { useRef } from 'react'
import styles from './Accordion.module.css'
import BottomArrow from '../../assets/bottomArrow.png'

const Accordion = ({ title, childContent, expanded, handleAccordion, id }) => {
  const accordion = useRef()

  return (
    <div onClick={() => handleAccordion(id)}>
      <div ref={accordion}>
        <div className={styles.row}>
          <div className={styles.titleContainer}>
            <img src={BottomArrow} className={{ marginRight: 15 }} />
            <div style={{ marginLeft: 12, color: '#85868E' }}>{title}</div>
          </div>
        </div>
      </div>
      <div className={styles.parentHr} />
      {expanded &&
        <div>
          {childContent}
        </div>}
    </div>
  )
}

export default Accordion
