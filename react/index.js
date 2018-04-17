// import React from 'react';

function formatName(user) {
    return user.firstName + ' >> ' + user.lastName;
}

const user = {
    firstName: 'Mical',
    lastName: 'Jhon'
}

function getGreeting(user) {

}

ReactDOM.render(
    <h1>hello, {formatName(user)}!</h1>,
    document.getElementById('example')
)

setInterval(() => {
    ReactDOM.render(
        <p>
            <h3>你好</h3>
            <h1>hello, {new Date().toLocaleTimeString()}</h1>
        </p>
        ,
        document.getElementById("timeshow")
    )
}, 1000)

/**
 * 时间测试
 */
class HelloComp extends React.Componet {
    render () {
        return (
            <h1>系统时间：{this.props.date.toLocaleTimeString()}</h1>
        )
    }
}
let dom = React.createElement(<HelloComp/>)
console.log(dom)