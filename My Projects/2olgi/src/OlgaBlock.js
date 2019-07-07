import React, {Component} from 'react';

class OlgaBlock extends Component {
    render () {
        return(
            <div className={this.props.cls}>
                <img alt="Ольга" src={this.props.source}/>
                <span className={this.props.spancls}>
                    {this.props.txt}
                    <a href="#about" className={this.props.acls}>Подробнее</a>
                </span>
            </div>
        )
    }
}
export default OlgaBlock;
