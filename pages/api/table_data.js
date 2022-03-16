// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Data retrieved succesfully",
      data: [
        {
          name: "Adam",
          place: "Africa",
          animal: "Antelope",
          food: "Akara",
          thing: "Axe",
        },
        {
          name: "Betty",
          place: "Benin",
          animal: "Bear",
          food: "Beans",
          thing: "Boat",
        },
        {
          name: "Caroline",
          place: "Canada",
          animal: "Crocodile",
          food: "Cabbage",
          thing: "Cane",
        },
        {
          name: "Derek",
          place: "Denmark",
          animal: "Duck",
          food: "Dodo",
          thing: "Desk",
        },
        {
          name: "Eugene",
          place: "Europe",
          animal: "Elephant",
          food: "Eba",
          thing: "Element",
        },
        {
          name: "Frank",
          place: "France",
          animal: "Flamingo",
          food: "Fufu",
          thing: "Fang",
        },
        {
          name: "Grace",
          place: "Greece",
          animal: "Grasshopper",
          food: "Groundnut",
          thing: "Grass",
        },
        {
          name: "Hitler",
          place: "Haiti",
          animal: "Hedgehog",
          food: "Ham",
          thing: "Hacksaw",
        },
        {
          name: "Idris",
          place: "Ireland",
          animal: "Iguana",
          food: "Ice Cream",
          thing: "Input",
        },
        {
          name: "John",
          place: "Jamaica",
          animal: "Jaguar",
          food: "Jam",
          thing: "Javelin",
        },
        {
          name: "Kelechi",
          place: "Kyiv",
          animal: "Kangaroo",
          food: "Ketchup",
          thing: "Kite",
        },
        {
          name: "Liam",
          place: "London",
          animal: "Leopard",
          food: "Lemon",
          thing: "Laptop",
        },
        {
          name: "Mike",
          place: "Mexico",
          animal: "Macaque",
          food: "Mint",
          thing: "Map",
        },
        {
          name: "Noel",
          place: "North America",
          animal: "Newt",
          food: "Natto",
          thing: "Needle",
        },

        {
          name: "Oliver",
          place: "Oslo",
          animal: "Ostrich",
          food: "Okra",
          thing: "Oasis",
        },
        {
          name: "Peter",
          place: "Persia",
          animal: "Pigeon",
          food: "Pineapple",
          thing: "Picture",
        },
        {
          name: "Quinn",
          place: "Quebec",
          animal: "Quail",
          food: "Quinoa",
          thing: "Quicksand",
        },
        {
          name: "Ruth",
          place: "Rome",
          animal: "Rabbit",
          food: "Raspberries",
          thing: "Racket",
        },
        {
          name: "Stephen",
          place: "South Korea",
          animal: "Slug",
          food: "Salmon",
          thing: "Seat",
        },
        {
          name: "Thomas",
          place: "Tacoma",
          animal: "Termite",
          food: "Tangerine",
          thing: "Ticket",
        },
        {
          name: "Uche",
          place: "UAR",
          animal: "Urchin",
          food: "Ukwa",
          thing: "UPS",
        },
        {
          name: "Victor",
          place: "Vancouver",
          animal: "Vulture",
          food: "Veggie Burger",
          thing: "Vector",
        },
        {
          name: "William",
          place: "Waterbury",
          animal: "Weasel",
          food: "Walnuts",
          thing: "Wand",
        },
        {
          name: "Xavier",
          place: "Xingtai",
          animal: "Xanclomys",
          food: "Xoconostle",
          thing: "X-ray",
        },
        {
          name: "Yelena",
          place: "Yorktown",
          animal: "Yak",
          food: "Yogurt",
          thing: "Yeast",
        },

        {
          name: "Zack",
          place: "Zambia",
          animal: "Zebra",
          food: "Zucchini",
          thing: "Zipper",
        },
      ],
    });
  } else {
    res.status(405).json({
      message: "Method not allowed",
    });
  }
}
