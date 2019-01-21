import React, {Component} from 'react';

class DeclareSale extends Component {

    updateVal = async () => {
        await this.props.updateVal("sold", true, "client")        
        this.props.executeUpdate("sold")
    }

    render() {
        return (
            <div>
                <div id="declare-div">Declare sale!</div>
                <button onClick={this.updateVal} id="declare-btn">DECLARE</button>
            </div>
        )
    }
}

export default DeclareSale;
