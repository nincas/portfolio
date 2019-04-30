import React, { Suspense, Component } from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import LoadingDiv from './Loading'
const App = React.lazy(() => import("./Pages/Index"))
const About = React.lazy(() => import("./Pages/About"))
const Contact = React.lazy(() => import("./Pages/Contact"))
const Projects = React.lazy(() => import("./Pages/Projects"))
const ErrorPage = React.lazy(() => import("./404"))


export default class Routes extends Component {
    onLoad = (Comp) => {
        return (
            <Suspense fallback={<LoadingDiv/>}><Comp/></Suspense>
        )
    }

    render() {
        return (
            <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={this.onLoad.bind(this, App)}/>
                    <Route path="/about" component={this.onLoad.bind(this, About)}/>
                    <Route path="/contact" component={this.onLoad.bind(this, Contact)}/>
                    <Route path="/projects" component={this.onLoad.bind(this, Projects)}/>
                    {/* <Route path="/home" component={this.onLoad.bind(this, Home)}/> */}
                    <Route component={this.onLoad.bind(this, ErrorPage)}/>
                </Switch>
            </BrowserRouter>
            </div>
        );
    }
}