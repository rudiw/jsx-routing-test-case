import React, { Component } from 'react';

class Course extends Component {
    state = {
        id: null,
        title: null,
    }

    componentDidMount() {
        // console.log(this.props);
       this.loadView();
    }

    componentDidUpdate() {
        this.loadView();
    }

    loadView() {
        if ( this.props.match.params.courseId
            && (!this.state.id || (this.state.id !== this.props.match.params.courseId)) ) {
            const query = new URLSearchParams(this.props.location.search);
            let upTitle = null;
            for (let param of query.entries()) {
                // console.log(param); // yields ['start', '5']
                if (param[0] == 'courseTitle') {
                    // console.log(param[1]);
                    upTitle = param[1];
                }
            }
            this.setState({
                id: this.props.match.params.courseId,
                title: upTitle,
            });
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;