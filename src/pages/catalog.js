import React from 'react'


export default () => {
    return(
        <div
        style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <ul>
                <li><a href="/welcome">Main page</a></li>
                <li><a href="/president">President page</a></li>
                <li><a href="/mahol">3rd page</a></li>
                <li><a href="/about">4th page</a></li>
            </ul>
        </div>
    )
}