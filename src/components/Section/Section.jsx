import { car1 } from "../../assets";
import { sectionIMageBoxes } from "../../utiels/Utiels";
import "./style.css"
export default function Section() {
    return (
        <div>
            <h1 className="section-text">Rent a Luxury Car</h1>


            <section className="section1">
                {sectionIMageBoxes?.map(
                    ({ hover_bottom_name, hover_top_name, image }) => {
                        return (
                            <>
                                <div className="car-box">
                                    <img src={image} alt="" className="car-image-boxes" />
                                    <div className="hover-car-texts">
                                        <h1 className="hover-text-top">{hover_top_name}</h1>
                                        <h1 className="hover-text-bottom">{hover_bottom_name}</h1>
                                    </div>
                                </div>
                            </>
                        );
                    }
                )}
            </section>
        </div>
    )
}
