import React, {Component} from 'react';
import ClientChoice from './clientChoice'
import OwnerChoice from './ownerChoice'
import EmailChoice from './emailChoice'
import DeclareSale from './declareSale'
import '../../styles/updateClient.css'

class Update extends Component {

    render() {
        return (
            <div id="update-container">
                <div id="update-div">UPDATE</div>
                <ClientChoice clients={this.props.clients} updateVal={this.props.updateVal} name={this.props.name} />
                <OwnerChoice owners={this.props.owners} updateVal={this.props.updateVal} executeUpdate={this.props.executeUpdate} owner={this.props.owner} />
                <EmailChoice executeUpdate={this.props.executeUpdate} emailType={this.props.emailType} updateVal={this.props.updateVal} />
                <DeclareSale executeUpdate={this.props.executeUpdate} updateVal={this.props.updateVal} />
            </div>
        )
    }
}

export default Update