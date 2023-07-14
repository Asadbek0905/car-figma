/* eslint-disable no-unused-vars */
import { car1, car2, car3, car4, cars1, cars2, cars3 } from "../assets/";
import TermsConditions from "../components/Terms and Conditions/TermsConditions";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";

export const navbar = [
    {
        path: '/home',
        element: <HomePage />,
        name: "Home",
        id: 1
    },
    {
        path: '/cars',
        element: <CarsPage />,
        name: "Cars",
        id: 2
    },
    {
        path: '/book',
        element: <BookNowPage />,
        name: "Book now",
        id: 3
    },
    {
        path: '/terms',
        element: <TermsConditions />,
        name: "Terms and Conditions",
        id: 4
    },
]

export const sectionCarImage = [
    {
        img: car1,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover"
    },
    {
        img: car2,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover"
    },
    {
        img: car3,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover"
    },
    {
        img: car4,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover"
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