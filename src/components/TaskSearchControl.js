import React, { Component } from 'react';


class TaskSearchControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value

        this.setState({
            [name]: value
        })

    }
    
    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }

    render() {
        let { keyword } = this.state
        return (
            <div className=" col-lg-6 pr-0">
                <div className="input-group m-auto">
                    <input
                        name="keyword"
                        type="text"
                        className="form-control"
                        placeholder="Nhập từ khóa ..."
                        value={keyword}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button"
                            onClick={this.onSearch}
                        >
                            <span className="fa fa-search mr-5"></span>Tìm
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}


export default TaskSearchControl