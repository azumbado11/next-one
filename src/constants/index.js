export const navLinks = [
    {
        title: "New Arrivals",
        url: "/store/?new_arrival=true"
    },
    {
        title: "Men",
        url: "/store/?gender=men"
    },
    {
        title: "Women",
        url: "/store/?gender=women"
    },
    {
        title: "Sale",
        url: "/store/?sale=true"
    }
];

export const infoTxts = {
    leftColumn: {
        title: "Improve your Style with our Clothes",
        par1: "Welcome to our Ecommerce store, where your shopping experience is our top priority. We specialize in offering a curated selection of high-quality clothing and shoes that blend style, comfort, and affordability. Our passion for fashion is evident in our carefully chosen range of trendy apparel, versatile footwear, and chic accessories. From statement-making dresses to classic denim, from sleek sneakers to elegant heels, we have everything you need to elevate your wardrobe. ",
        par2: "Our dedicated team works tirelessly to source the latest trends and timeless pieces, ensuring that you always have access to the best in fashion. Shop with us today and discover a world of possibilities for enhancing your personal style. Thank you for choosing us as your destination for chic and stylish clothing and shoes."
    },
    righColumn: {
        title: "Designed with the Latest Technologies",
        par1: "Our collection features garments and footwear crafted with advanced materials and technologies designed to enhance performance and comfort. From moisture-wicking fabrics that keep you cool and dry during workouts to cushioned soles that provide all-day comfort, our products prioritize both style and practicality. ",
        par2: "Whether you're looking for smart sneakers that track your steps or climate-controlled jackets that adapt to changing weather conditions, we have the latest in tech-infused fashion to elevate your wardrobe. Shop with us today and experience the future of fashion at your fingertips. Thank you for choosing us as your destination for stylish and technologically advanced clothing and shoes."
    }
}

export const footerLinks = [
    {
        title: "Products",
        links: [{ title: "Shoes", url: "/store?category=shoes" }, { title: "Clothing", url: "/store?category=clothing" }, { title: "Accessories", url: "/store?category=accessories" }]
    },
    {
        title: "Sports",
        links: [{ title: "Football", url: "/store?sport=football" }, { title: "Running", url: "/store?sport=running" }, { title: "Basketball", url: "/store?sport=basketball" }, { title: "Soccer", url: "/store?sport=soccer" }, { title: "Skateboarding", url: "/store?sport=skateboarding" }]
    },
    {
        title: "Support",
        links: [{ title: "Help", url: "/placeholder" }, { title: "Shipping", url: "/placeholder" }, { title: "Order Tracker", url: "/placeholder" }, { title: "Store Location", url: "/placeholder" }, { title: "Size Charts", url: "/placeholder" }]
    },
    {
        title: "Company Info",
        links: [{ title: "About Us", url: "/placeholder" }, { title: "News", url: "/placeholder" }, { title: "Purpose", url: "/placeholder" }, { title: "Investors", url: "/placeholder" }]
    }
]

const Twitter = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
const Facebook = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
const Instagram = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
const YouTube = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>

export const footerSocials = [
    {
        icon: Twitter,
        url: "/placeholder",
        id: 1
    },
    {
        icon: Facebook,
        url: "/placeholder",
        id: 2
    },
    {
        icon: Instagram,
        url: "/placeholder",
        id: 3
    },
    {
        icon: YouTube,
        url: "/placeholder",
        id: 4
    }
]

export const BagIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-bag"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" /><path d="M9 11v-5a3 3 0 0 1 6 0v5" /></svg>
export const LogoIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
export const SearchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
export const BinIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
export const MenuIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
export const CloseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>


export const sports = [
    {
        id: "?sport=football",
        img: "https://www.shutterstock.com/image-vector/football-player-abstract-isolated-vector-600nw-2250553759.jpg",
        name: "Football"
    },
    {
        id: "?sport=running",
        img: "https://st4.depositphotos.com/3431221/29815/v/450/depositphotos_298158190-stock-illustration-marathon-runner-ink-drawing-isolated.jpg",
        name: "Running"
    },
    {
        id: "?sport=basketball",
        img: "https://st5.depositphotos.com/78290536/67303/v/450/depositphotos_673031904-stock-illustration-women-professional-basketball-player-silhouette.jpg",
        name: "Basketball"
    },
    {
        id: "?sport=soccer",
        img: "https://media.istockphoto.com/id/998509746/vector/football-player-kicking-ball-abstract-vector-drawing-soccer-athlete-isolated-silhouette-side.jpg?s=612x612&w=0&k=20&c=7mFG1jAeRyBta4sEVqRK-CaMLUIoslW7YiwRKP5TERE=",
        name: "Soccer"
    },
    {
        id: "?sport=skateboarding",
        img: "https://img.freepik.com/premium-vector/vector-black-silhouettes-skateboarders_1060159-939.jpg",
        name: "Skateboarding"
    }
]


export const itemsMock = [
    {
        id: 1,
        img: "",
        name: "Superstar Shoes",
        category: "shoes",
        price: 120,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: true,
    },
    {
        id: 2,
        img: "",
        name: "Samba Shoes",
        category: "shoes",
        price: 110,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: true,
    },
    {
        id: 3,
        img: "",
        name: "Gazelle Indoor",
        category: "shoes",
        price: 100,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: false,
    },
    {
        id: 4,
        img: "",
        name: "Handball Spezial",
        category: "shoes",
        price: 80,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: true,
    },
    {
        id: 5,
        img: "",
        name: "Gazelle Shoes",
        category: "shoes",
        price: 120,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: false,
    },
    {
        id: 6,
        img: "",
        name: "Campus Shoes",
        category: "shoes",
        price: 120,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: false,
    },
    {
        id: 7,
        img: "",
        name: "Busenitz Pro",
        category: "shoes",
        price: 120,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: false,
    },
    {
        id: 8,
        img: "",
        name: "Grand Court Shoes",
        category: "shoes",
        price: 120,
        sport: "lifestyle",
        genre: "men",
        sale: false,
        arrival: false,
    }

]

export const CATEGORY_VALUES = ["shoes", "clothing", "accessories"];
export const SPORT_QUERY_INPUTS = ["lifestyle", "football", "football", "running", "basketball", "soccer", "skateboarding", "all"];
export const GENDER_QUERY_INPUTS = ["men", "women", "unisex", "all"];
export const BOOLEAN__QUERY__INPUTS = ["true", "false"];
/* 
  Item Inferface lowercase
    {
        id: string * crypto.randomUUID()
        img: "string",
        price: number,
        name: "string",
        category: "all" | "shoes" | "clothing" | "accessories" ,
        sport: "all" | "lifestyle" | "football" | "running" | "basketball" | "soccer" | "skateboarding"
        genre: "all" | "men" | "women",
        sale: boolean, /--/
        arrival: boolean, /-if true, item goes to New Arrivals Carousel and /shop -/
    }
*/
