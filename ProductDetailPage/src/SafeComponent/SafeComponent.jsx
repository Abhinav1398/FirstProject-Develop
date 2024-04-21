import React, { Component } from 'react';

class SafeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError:false};
    }

    static getDerivedStateFromError(error){
        {hasError:true}
    }
    componentDidCatch(){

    }
    render(){
        if(this.state.hasError){
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children;
    }
}

export default SafeComponent;