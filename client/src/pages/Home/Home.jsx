import React from "react"
import JackedJellyfish from "../../assets/images/jacked-jellyfish.png"
import "./Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="title">JACKED JELLYFISH</h1>
            <img className="image" src={JackedJellyfish} alt="" />
            <button className="button">WORKOUT</button>
        </div>
    )
}

export default Home
