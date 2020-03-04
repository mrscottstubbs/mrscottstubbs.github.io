import React, { Component } from 'react'
import me from './images/sitProfessional.png'
import google from './images/google.jpg'

class Portrait extends Component {
    render() {
        return (
            <img
                style={{borderRadius:"5%"}}
                src={google}
                width="80%"
                height="80%"
                alt="me"
            />
        )
    }
}

export default Portrait
