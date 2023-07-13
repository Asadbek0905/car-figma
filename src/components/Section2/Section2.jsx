
import { cards } from "../../utiels/utiels";

import "./style.css"



export default function Section2() {
  return (
    <div>
      <h1 className="s2-text">Our Other Services</h1>
      <section className="s2">
        {cards?.map(
          ({ img,text_h3,paragraf }) => {
            return (
              <>
                <div className="card-box">
                  <img src={img} alt="" className="cars" />
                  <h3 className="cars-text">{text_h3}</h3>
                  <p className="paragraf2">{paragraf}</p>
                </div>
              </>
            );
          }
        )}
      </section>
    </div>
  )
}
