import './home.scss';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Navbar from '../../components/layout/navbar/Navbar';
import Widget from '../../components/layout/widgets/Widget';
import Featured from '../../components/layout/featured/Featured';
import Chart from '../../components/layout/chart/Chart';
import Table from '../../components/layout/table/Table';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Chart title='Last 6 Months(Revenue)' aspect={2/1}/>
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
