import React, {Component} from 'react';

// ===== Through function

//  const Greetings = ({ firstName, lastName }) => (
//     <div>
//         Hey you! {firstName} {lastName}!
//     </div>
// );

// ===== Through class

class Greetings extends Component {
    render() {
        return(
            <div>
                Hey you! {this.props.firstName} {this.props.lastName}!
            </div>
        )
    }
}

export default Greetings;