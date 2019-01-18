import React, {Component} from 'react';
import '../../styles/popupEditor.css'
import axios from 'axios';

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editor: {
                name: this.props.name,
                surname: this.props.surname,
                country: this.props.country,
                _id: this.props._id
            }
        }
    }

    closeEditor = () => {
        this.props.closeEditor()
    }

    querySingleEntry = () => {
        this.props.querySingleEntry(this.state.editor._id)
    }

    updateEditorVals = (event) => {
        const tempEditor = {...this.state.editor}
        tempEditor[event.target.name] = event.target.value
        this.setState({editor: tempEditor})
    }

    persistEditorData = () => {
        const name = this.state.editor.name + ' ' + this.state.editor.surname
        axios.put(`http://localhost:8000/clients/${this.state.editor._id}`,
            {name: name, country: this.state.editor.country})
    }

    updateEditor = () => {
        this.persistEditorData()
        this.querySingleEntry()
        this.closeEditor()
    }

    render() {
        return (
            <div id="editor-window">
                <div id="exit-btn" onClick={this.closeEditor}>X</div>
                <div id="name-div">Name: </div>
                <div id="sname-div">Surname: </div>
                <div id="country-div">Country: </div>
                <input id="name-inpt" type="text" name="name" onChange={this.updateEditorVals} value={this.state.editor.name} />
                <input id="sname-inpt" type="text" name="surname" onChange={this.updateEditorVals} value={this.state.editor.surname} />
                <input id="country-inpt" type="text" name="country" onChange={this.updateEditorVals} value={this.state.editor.country} />
                <div id="update-btn" onClick={this.updateEditor}>Update</div>
            </div>
        )
    }
}

export default Editor