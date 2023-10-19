import React, {Component} from "react";

class Body extends Component {
    render() {
        return <div className="content">
            {this.props.facility.map(facility => (
                <div className="container" key={facility.id}>
                    <div className="card">
                        <img src={facility.img}
                             className="card-img-top"
                             style={{height: "170px"}}
                             alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{facility.title}</h5>
                            <p className="card-text">Room size : {facility.size} m2</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    }
}

export default Body;