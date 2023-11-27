import "./index.scss"
import RedSpan from "../../components/RedSpan"

function About() {
    return (
        <div id="about">
            <div className="texts">
                <div className="about-title text-3xl">
                    <h2>SOBRE <span className="text-red">MIM</span></h2>
                </div>
                <div className="about-content">
                    <br></br>
                    <p className="text-2xl">Olá, me chamo <RedSpan>Bruno</RedSpan></p>
                    <p className="text-2xl">
                        Atuo como desenvolvedor de sistemas a 2 anos, atualmente estudo sobre
                        desenvolvimento <RedSpan>backend</RedSpan> focando em tecnologias
                        como C#, Docker, PostgreSQL.
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src="https://placehold.co/400x400" />
            </div>
        </div>
    )
}

export default About