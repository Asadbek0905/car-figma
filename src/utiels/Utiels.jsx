import { car1, car2, car3, car4, cars1, cars2, cars3 } from "../assets";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsConditionsPage } from "../pages/TermsConditionsPage";



export const navbar = [
    {
        path: `/home`,
        element: <HomePage />,
        name: "HomePage",
        id: 1
    },
    {
        path: `/cars`,
        element: <CarsPage />,
        name: "CarsPage",
        id: 2
    },
    {
        path: `/book`,
        element: <BookNowPage />,
        name: "BookNowPage",
        id: 3
    },
    {
        path: `/terms`,
        element: <TermsConditionsPage />,
        name: "TermsConditionsPage",
        id: 4
    }
]




export const sectionIMageBoxes = [
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car1
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car2
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car3
    },
    {
        hover_top_name: "Supercars",
        hover_bottom_name: "Discover",
        image: car4
    },
]


export const cards = [
    {
        img: cars1,
        text_h3: "Private Charter",
        paragraf: "Pinjam Mobil Rent also offers you discreet and speedy, transfers via helicopter or private planes."
    },
    {
        img: cars2,
        text_h3: "Chauffer Driven Car Rentals",
        paragraf: "Our chauffers are professional drivers who provide a discreet, reliable punctual and professional service."
    },
    {
        img: cars3,
        text_h3: "Wedding Car Rentals",
        paragraf: "If you want to celebrate your wedding in style and elegance, choose one car from our luxury collection."
    }
]