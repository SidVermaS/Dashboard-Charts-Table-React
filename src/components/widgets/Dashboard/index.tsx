import React from 'react'
import styles from './index.module.scss'
import { DashboardI } from '../../../interfaces'

interface Props   {
  dashboard: DashboardI
}

const Dashboard = ({dashboard}: Props) => {
  return (
    <div className={styles.background}>

    </div>
  )
}

export default Dashboard
