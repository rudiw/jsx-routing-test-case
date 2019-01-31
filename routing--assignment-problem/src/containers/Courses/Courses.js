import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    onClickCourse = (upId, upTitle) => {
        console.log("onClickCourse: " + upId);
        this.props.history.push({pathname: '/courses/' + upId,
            search: '?courseTitle=' + upTitle});
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                // <Link key={course.id}
                                //     to={{pathname: '/courses/' + course.id,
                                //         search: '?courseTitle=' + course.title}}>
                                    <article
                                        key={course.id}
                                        className="Course"
                                        onClick={() => this.onClickCourse(course.id, course.title)}>
                                        {course.title}
                                    </article>
                                // </Link>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:courseId'} exact component={Course}/>

            </div>
        );
    }
}

export default Courses;