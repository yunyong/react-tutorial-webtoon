import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList";

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            day : 'mon', //디폴트로 월요일
            webtoonList : [] //초기 리스트는 비어있습니다.
        };
    }

    componentDidMount(){
        this._getList();
    }

    _getList(){
        //webtoon_list를 가지고 옵니다.
        const apiUrl = '/dummy/webtoon_list.json';

        axios.get(apiUrl)
            .then(data => {
                //가지고 온 리스트를 state에 저장합니다.
                this.setState({
                    webtoonList : data.data.webtoonList
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <Header />
                <Gnb />

                { this.state.webtoonList.length > 0 ? (
                    <WebtoonList list={
                        this.state.webtoonList.filter(webtoon => (
                            webtoon.day === this.state.day
                        ))
                    } />
                ) : (
                    <span>
                        LOADING...
                    </span>
                )}

                <Footer />
            </div>
        )
    }
}

export default Main;