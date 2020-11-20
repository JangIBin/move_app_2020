import React from 'react';
import './Detail.css'

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render(props) {
        const { location } = this.props;
        
        if (location.state) {
        return (
            <div className="movie">
                <div className="data">
                    <img src={location.state.poster} className="image" alt={location.state.title} title={location.state.title} />
                    <h3 className="title">{location.state.title}</h3>
                    <h5 className="year">{location.state.year}</h5>
                    <ul className="genres">
                        {location.state.genres.map((genre, index) => {
                            return (
                                <li key={index} className="genre">
                                    {location.state.indexgenre}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="movie__summary">{location.state.summary}</p>
                </div>
            </div>
        )
        } else {
            return null;
        }   
    }
}


export default Detail;