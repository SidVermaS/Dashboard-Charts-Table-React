import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import { BestsellerI } from '../../../interfaces'
import { fetch } from '../../../store/actions/dashboard.action'
import Dashboards from './widgets/Dashboards'
import BestSellers from './widgets/BestSellers'
import SalesBarChart from './widgets/SalesBarChart'
import styles from './index.module.scss'
const Home = (props: any) => {
  const [bestsellers, setBestsellers] = useState<Array<BestsellerI>>([])
    const [salesOverTimeWeek, setSalesOverTimeWeek] = useState<any>([])
  const [salesOverTimeYear, setSalesOverTimeYear] = useState<any>([])
  useEffect(() => {
    props.fetch()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    setBestsellers(props.dashboard?.dashboard?.bestsellers as Array<BestsellerI>)
    setSalesOverTimeWeek(props.dashboard?.dashboard?.sales_over_time_week)
    setSalesOverTimeYear(props.dashboard?.dashboard?.sales_over_time_year)
  }, [props.dashboard])


  return <div className={`${styles.background}`}>
    <Dashboards />
    <SalesBarChart sales_over_time_week={salesOverTimeWeek} sales_over_time_year={salesOverTimeYear}  />
    <BestSellers bestsellers={bestsellers}  />
  </div>;
};

const mapStateToProps = ({ dashboard }: any) => ({
  dashboard: dashboard?.dashboard,
});
export default connect(mapStateToProps, { fetch })(Home);