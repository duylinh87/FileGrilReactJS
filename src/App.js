import React, { Component } from 'react';
import './App.css';
import anh from './daidien.jpg';
import Product from './components/Product';
import TaskSearchControl from './components/TaskSearchControl';
import TaskSortControl from './components/TaskSortControl';
import Button from './components/Button';
//https://viblo.asia/p/15-string-methods-duoc-su-dung-pho-bien-nhat-trong-javascript-jvElaWmxKkw
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          address: 'vợ anh linh',
          name: 'Ngọc Trinh',
          price: '4.000.000vnd',
          img: 'https://i.a4vn.com/2018/3/20/bo-suu-tap-gai-xinh-vong-mot-cang-tron-goi-cam-phan-154-f08578.jpg'
        },
        {
          address: 'vợ anh linh',
          name: 'Thanh Thảo ',
          price: '5.000.000vnd',
          img: 'http://vinathis.com/news/uploads/news/2018_09/hinh-anh-gai-xinh-sexy-161.jpg'
        },
        {
          address: 'Thái Bình',
          name: 'Minh Trang',
          price: '7.000.000vnd',
          img: 'http://i.a4vn.com/2018/3/19/bo-suu-tap-gai-xinh-vong-mot-cang-tron-goi-cam-phan-151-4c2696.jpg'
        },
        {
          address: 'Nghệ An',
          name: 'Huyền Ngọc',
          price: '8.000.000vnd',
          img: 'https://i.pinimg.com/originals/33/25/85/3325858c18bb75530c884c405f03621e.jpg '
        },
        {
          address: 'Nghệ An',
          name: 'Kim Anh',
          price: '10.000.000vnd',
          img: 'http://troll.tkwebviet.com/dstores/data8597/images/img4610.jpg'
        },
        {
          address: 'vợ anh',
          name: 'Hoàng Anh',
          price: '4.000.000vnd',
          img: 'https://i.a4vn.com/2018/3/20/bo-suu-tap-gai-xinh-vong-mot-cang-tron-goi-cam-phan-154-f08578.jpg'
        },
        {
          address: 'vợ hoàng',
          name: 'Thị Nở',
          price: '5.000.000vnd',
          img: 'https://previews.123rf.com/images/ufabizphoto/ufabizphoto1712/ufabizphoto171201694/91107547-beautiful-sexy-young-girl-in-short-shorts-stand-with-longboard-in-sunny-weather.jpg'
        },
        {
          address: 'vợ hoàng',
          name: 'Kim Anh',
          price: '7.000.000vnd',
          img: 'https://i0.wp.com/thuvienanh.net/wp-content/uploads/2019/07/Giekao-Klaoruethai-1.jpg?w=696&ssl=1'
        },
        {
          address: 'Nghệ An',
          name: 'sp4',
          price: '8.000.000vnd',
          img: 'https://kenh14cdn.com/2019/2/24/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg '
        },
        {
          address: 'Nam Định',
          name: 'sp5',
          price: '10.000.000vnd',
          img: 'https://ttol.vietnamnetjsc.vn/images/2019/05/20/06/55/Nu-sinh-xinh-dep-noi-tieng-MXH-3.jpg'
        },
        {
          address: 'Nam Định',
          name: 'sp1',
          price: '5.000.000vnd',
          img: 'https://previews.123rf.com/images/ufabizphoto/ufabizphoto1712/ufabizphoto171201694/91107547-beautiful-sexy-young-girl-in-short-shorts-stand-with-longboard-in-sunny-weather.jpg'
        },
        {
          address: 'Thái Bình',
          name: 'sp3',
          price: '7.000.000vnd',
          img: 'https://i0.wp.com/thuvienanh.net/wp-content/uploads/2019/07/Giekao-Klaoruethai-1.jpg?w=696&ssl=1'
        },
        {
          address: 'Nghệ An',
          name: 'ban sp4',
          price: '8.000.000vnd',
          img: 'https://kenh14cdn.com/2019/2/24/3561716420480213454575853861059020806684672n-15510057259571546306615.jpg '
        },
        {
          address: 'Nam Định',
          name: 'ban sp5',
          price: '10.000.000vnd',
          img: 'https://ttol.vietnamnetjsc.vn/images/2019/05/20/06/55/Nu-sinh-xinh-dep-noi-tieng-MXH-3.jpg'
        },
        {
          address: 'vợ minh râu',
          name: 'Xấu vl',
          price: 'Free',
          img: 'https://cdn.pose.com.vn/assets/2018/04/IMG_2807.png'
        },
        {
          address: 'vợ sơn chó',
          name: 'Đéo Có Tên',
          price: '10.000.000vnd',
          img: 'https://sd.keepcalms.com/i-w600/ng-c%E1%BA%A5p-c%E1%BB%A7a-t%E1%BB%B1-do-l.jpg'
        }
      ],

      buttons: [

        {
          btn: 'tat ca san pham'
        },
        {
          btn: 'sp1'
        },
        {
          btn: 'sp4'
        },
        {
          btn: 'sp5'
        },
        {
          btn: 'Ngọc Trinh'
        }

      ],

      keyWord: '',
    }
  }

  onSearch = (keyWord) => {
    console.log(keyWord)
    this.setState({
      keyWord: keyWord.toLowerCase().trim()
    })
  }

  onFilter = (NameProducts) => {
  let NameProduct = ( NameProducts === 'tat ca san pham' ? '' : NameProducts)
    this.setState({
      keyWord: NameProduct.toLowerCase()
    })
  }

  render() {
    let { tasks, keyWord, buttons } = this.state
    if (keyWord) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().trim().indexOf(keyWord) !== -1
          || task.address.toLowerCase().trim().indexOf(keyWord) !== -1
          || task.price.toLowerCase().trim().indexOf(keyWord) !== -1
      })
      // console.log ( task.name.toLowerCase().indexOf(keyWord))
    }
    let elmProduct = tasks.map((el, index) => {
      return <Product
        key={index}
        name={el.name}
        price={el.price}
        img={el.img}
        address={el.address}
      />
    })
    let elmButton = buttons.map((el, index) => {
      return <Button
        key={index}
        Button={el.btn}
        onFilter={this.onFilter}
      />
    })

    return (
      <div>
        <img src={anh} alt='' /> <br />
        <p />
        <div className="row text-center p-2">
          <TaskSearchControl
            onSearch={this.onSearch}
          />
          <TaskSortControl
            onSearch={this.onSearch}
          />
        </div>
        <div className="row text-center p-2">
          <div className="col-lg-2 text-center mt-5">
            {elmButton}
          </div>
          <div className="col-lg-10 text-center">
            <div className="row text-center">
              {elmProduct}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;




























