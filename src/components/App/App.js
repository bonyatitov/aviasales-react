import { useSelector } from 'react-redux';
import styles from './App.module.css';
import Header from '../Header';
import MainFilter from '../MainFilter';
import AdditionalFilter from '../AdditionalFilter';
import Loader from '../loader';
import TicketList from '../TicketList';

const App = () => {
  const { loading } = useSelector((state) => state.data);

  return (
    <div className={styles['app-container']}>
      <Header />
      <div className={styles['main-container']}>
        <div className={styles['left-container']}>
          <AdditionalFilter />
        </div>
        <div className={styles['right-container']}>
          <div className={styles['top-container']}>
            {loading && <Loader />}
            <MainFilter />
          </div>
          <div className={styles['bottom-container']}>
            <TicketList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
