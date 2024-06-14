import React from "react"
import articleImg from "../../assets/images/article1.png"

export class Article extends React.Company {
    render() {
        return (
            <article id="article">
                <img src={articleImg} alt="" />
                <div className="article-infos">
                    <h2>Designing Dashboards</h2>
                    <h3>NASA</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta harum sequi, voluptatibus at dolorem ea esse nihil libero odit saepe delectus voluptas tenetur consectetur rem incidunt cum reprehenderit architecto. Quasi.</p>
                </div>
            </article>
        )
    }
}
