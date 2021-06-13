import React from 'react'
import { connect } from 'react-redux'
import './url.css';
import axios from 'axios';
import { GET_URL } from '../Constant/Constant'
import * as actions from "../actions";
import GetUrlList from './GetUrlList'

class FrontPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            longUrl: '',
            getUrls: []
        }
    }

    onUrlChange(e) {
        this.setState({ longUrl: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const url = {
            longUrl : this.state.longUrl
        }
        axios.post(GET_URL, url).then(res => {
            console.log(res.data)
            this.props.getUrlDetails(res.data)
            this.setState(({
                longUrl:''
            }))
        });
    }
    componentDidMount(){
        this.render()
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <form className='form-group card' id="userForm"><br />
                        <div className='row'>
                            <div className='col-md-3 label'>
                                <label>Enter URL :</label>
                            </div>
                            <div className='col-md-7'>
                                <input type='text' className="form-control" id='longUrl'
                                    onChange={this.onUrlChange.bind(this)} />
                            </div>
                            <div className='col-md-1'>
                                <button type='button' className='btn btn-secondary' id='cancelBtn' onClick={this.onSubmit.bind(this)}>Get URL</button>
                            </div>
                        </div> <br />
                        <div className='row'>
                            <div className='col-md-3 label'>
                                <label>Short URL :</label>
                            </div>
                            <div className='col-md-7'>
                                <GetUrlList/>
                                    
                            </div>
                        </div> <br />

                    </form>
                </div>
            </div>

        )
    }

}


export default connect(null, actions)(FrontPage)