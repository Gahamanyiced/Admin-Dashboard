import './list.scss';

import Sidebar from '../../components/layout/sidebar/Sidebar';
import Navbar from '../../components/layout/navbar/Navbar';
import Datatable from '../../components/layout/datatable/Datatable';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable/>
      </div>
    </div>
  );
};

export default List;
