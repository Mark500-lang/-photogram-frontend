const mockData = [
  {
    id: 1,
    caption: "Catching Flights not feelings",
    image: "assets/img/img2.jpg",
    user: {
      username: "MegtheeStallion",
      profile_picture: "assets/img/img1.jpg",
    },
    likes: {
      count: 5,
      recentLiker: {
        username: "jamess",
      },
    },
    comments: [
      {
        id: 1,
        comment: "Nice picture!",
        user: {
          username: "megg",
        },
      },
      {
        id: 2,
        comment: "Wowwww!",
        user: {
          username: "hurerra",
        },
      },
    ],
  },
  // Add more sample posts as needed
  {
    id: 2,
    caption: "Exploring the great outdoors",
    image: "assets/img/img6.jpg",
    user: {
      username: "NatureLover",
      profile_picture: "assets/img/img4.jpg",
    },
    likes: {
      count: 2,
      recentLiker: {
        username: "meggiddy",
      },
    },

    comments: [
      {
        id: 3,
        comment: "Beautiful view!",
        user: {
          username: "travelbug",
        },
      },
    ],
  },
  {
    id: 3,
    caption: "Delicious homemade pizza",
    image: "assets/img/img9.jpg",
    user: {
      username: "FoodieFan",
      profile_picture: "assets/img/img6.jpg",
    },
    likes: {
      count: 20,
      recentLiker: {
        username: "carol",
      },
    },
    comments: [
      {
        id: 4,
        comment: "Yummy! 🍕",
        user: {
          username: "pizzalover",
        },
      },
    ],
  },
];

export default mockData;
