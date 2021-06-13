import React from 'react'
import { connect } from 'react-redux'

class GetUrlList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            urlDetails: [this.props.urlDetails],
            shortUrlList: []
        }

    }

    renderUrlLis = (datalist) => {
        if (datalist) {
            return Object.keys(datalist).map((item, index) => {
                return (
                    <div value={datalist[item]} key={index}>
                        {item}
                    </div>
                )
            })
        }
    }


    render() {
        return (
        
            <>
                <div>{this.state.urlDetails[0].shortUrl}</div>
                <p>List of URLs :</p>
                <div>{this.renderUrlLis(this.state.urlDetails[0].shortUrlList)}</div>
            </>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        urlDetails: state.urlDetails.items
    }
}

export default connect(mapStateToProps)(GetUrlList)