import React, {Component} from 'react';

class Logo extends Component{
    constructor() {
		super();
        this.state = {items: ['2', 'О', 'л', 'ь', 'г', 'и'],
                      clsname: 'logo hidden'};
    }
    componentDidMount(){
        this.timerId = setTimeout(
          ()=> this.removeClass(),500
        );
    }
    componentWillUnmount(){
        clearTimeout(this.timerId);
    }
    
    removeClass(){
        this.setState({
          clsname: 'logo'
        });
    }

	render() {
		const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
        });

		return (
            <ul className={this.state.clsname}>
                {list}
            </ul>
		);
	}
}
export default Logo;