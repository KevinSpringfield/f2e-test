import React from 'react';
import Moment from 'moment';

import { connect} from 'react-redux';
import { addOrder } from '../..//redux/actions';
import { OrderCard } from '../../components/orderCard';
import { OrderCaption } from '../../components/orderCaption';
import './index.scss';

const fakeData = {
  orders: [
    {
      name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
      logo: 'https://static.oopocket.com/store/iconMaji@3x.png',
      status: '已取消',
      date: '107/6/12'
    },
    {
      name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
      logo: 'https://static.oopocket.com/store/iconMaji@3x.png',
      status: '已成立',
      date: '108/7/21'
    },
    {
      name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
      logo: 'https://static.oopocket.com/store/iconMaji@3x.png',
      status: '處理中',
      date: '108/6/2'
     },
     {
      name: 'Apple AirPds 2',
      logo: 'https://static.oopocket.com/store/iconMaji@3x.png',
      status: '已送達',
      date: '108/3/2'
    }
  ]
}

function sortByDate(array) {
  if (!Array.isArray(array)) {
    return array
  }

  array.forEach(function(e){
    console.log(Moment(e.date));

  });

  return array.sort((a,b) => new Moment(b.date)- new Moment(a.date))
}

class OrderPage extends React.Component {
  componentDidMount() {
    // Pretending to fetch data from server
    fakeData.orders.forEach(order => this.props.addOrder(
      order.name, 
      order.logo, 
      order.status, 
      order.date)
    )
  }

  render() {
	let processing = []
    let finished = []

    this.props.orderReducer.orders.forEach((order) => {
      if (order.status === '已成立' || order.status === '處理中') {
        processing.push(order);
      }
      else {
        finished.push(order);
      }
    });
    
    // Group and sort order array
    processing = sortByDate(processing).map((order) => 
      <OrderCard 
        key={ order.name }
        name={ order.name } 
        logo={ order.logo } 
        status={ order.status } 
        date={ order.date }
        state='processing'
      />
    );

    finished = sortByDate(finished).map((order) => 
      <OrderCard 
        key={ order.name }
        name={ order.name } 
        logo={ order.logo } 
        status={ order.status } 
        date={ order.date }
        state='finished'
      />
    );

    return (
      <div className="order-page">
        <div className="main-section">
          <OrderCaption name='進行中' />
          { processing }
          <OrderCaption name='已完成' />
          { finished }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => ({
  addOrder: (name, logo, status, date) => dispatch(addOrder(name, logo, status, date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage)


