import React,{Component} from 'react'

const Header = ({funcation_send}) => {

    return(
        <div>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a onClick={ event => {funcation_send("page - 1")}}>Page 1</a></li>
                        <li><a onClick={ event => {funcation_send("page - 2")}}>Page 2</a></li>
                        <li><a onClick={ event => {funcation_send("page - 3")}}>Page 3</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;