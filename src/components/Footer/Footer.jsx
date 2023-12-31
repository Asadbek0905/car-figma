
import "./style.css"
import logo from '../../assets/image/Group 1.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="foo">
                    <div className="footer-div">
                        <img src={logo} alt="" className="footer-logo" />
                        <p className="footer-p">HKinvision</p>
                    </div>
                    <p className="the">The World's Best Luxury <br /> Car’s Dealing Platform</p>
                </div>
                <div className="ul-div">
                    <ul className="list-footer">
                        <li className="list-item-footer text-fo">Company</li>
                        <li className="list-item-footer">About Us</li>
                        <li className="list-item-footer">Product</li>
                        <li className="list-item-footer">Testimonial</li>
                    </ul>
                    <ul className="list-footer">
                        <li className="list-item-footer text-fo">Support</li>
                        <li className="list-item-footer">FAQ</li>
                        <li className="list-item-footer">Privacy Policy</li>
                        <li className="list-item-footer">Terms of Services</li>
                    </ul>
                    <ul className="list-footer">
                        <li className="list-item-footer text-fo">Category</li>
                        <li className="list-item-footer">Super Cars</li>
                        <li className="list-item-footer">Sport Cars</li>
                        <li className="list-item-footer">More Cars</li>
                    </ul>
                    <ul className="list-footer">
                        <li className="list-item-footer text-fo j">facebook</li>
                        <li className="list-item-footer text-fo fo">Instagram</li>
                        <li className="list-item-footer text-fo fo"> YouTube</li>
                    </ul>
                </div>
            </div>
            <div className="footer2">
                <p className="text-footer-2">©2022 HKInvestor. All right reserved</p>
            </div>
        </footer>
    )
}
