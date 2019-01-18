import React, {Component} from 'react';
import axios from 'axios';
import Client from './clients/client'
import TableHeader from './clients/tableheader'
import Editor from './clients/popupEditor'
import '../styles/clients.css'


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            editor: {
                client: "null",
                show: false
            }
        }
    }

    componentDidMount() {
        this.fetchData()
      }
      
    fetchData = () => {
    axios.get('http://localhost:8000/clients')
        .then((response) => {
            this.setState({
                clients: response.data
            })
        })
    }

    openEditor = (client) => {
        const tempEditor = {...this.state.editor}
        tempEditor.show = true
        tempEditor.client = client
        this.setState({
            editor: tempEditor
        })
    }
    
    closeEditor = () => {
        const tempEditor = {...this.state.editor}
        tempEditor.show = false
        this.setState({editor: tempEditor})
    }

    querySingleEntry = (id) => {
        console.log(id)
        axios.get(`http://localhost:8000/clients/${id}`)
            .then(function(response) {
                console.log(response)
            })
    }

    render() {
        return (
            <div className='table-container'>
                <div><TableHeader /></div>
                {this.state.editor.show ? <Editor _id={this.state.editor.client._id} name={this.state.editor.client.name.split(' ')[0]}
                    surname={this.state.editor.client.name.split(' ')[1]}
                    country={this.state.editor.client.country} querySingleEntry={this.querySingleEntry} closeEditor={this.closeEditor} /> : null}
                <div className="client-table">{this.state.clients.map(c => <Client key={c._id} openEditor={this.openEditor} client={c} />)}</div>
            </div>
        )
    }
}   

export default Clients