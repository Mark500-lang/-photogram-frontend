const mockData = [
  {
    id: 1,
    caption: "Catching Flights not feelings",
    image: "assets/img/img7.jpg",
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
  {
    id: 2,
    caption: "Exploring the great outdoors",
    image: "assets/img/img1.jpg",
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
  {
    id: 4,
    caption: "Morning workout at the beach",
    image: "assets/img/img3.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
  {
    id: 5,
    caption: "New city, new adventures",
    image: "assets/img/img5.jpg",
    user: {
      username: "UrbanExplorer",
      profile_picture: "assets/img/img8.jpg",
    },
    likes: {
      count: 10,
      recentLiker: {
        username: "cityslicker",
      },
    },
    comments: [
      {
        id: 6,
        comment: "Love exploring new places!",
        user: {
          username: "wanderlust",
        },
      },
    ],
  },
  {
    id: 6,
    caption: "Sunny day at the park",
    image: "assets/img/img4.jpg",
    user: {
      username: "Sunshine",
      profile_picture: "assets/img/img9.jpg",
    },
    likes: {
      count: 8,
      recentLiker: {
        username: "nature",
      },
    },
    comments: [
      {
        id: 7,
        comment: "Perfect day! ☀️",
        user: {
          username: "sunnydays",
        },
      },
    ],
  },
  {
    id: 7,
    caption: "Morning workout at the beach",
    image: "assets/img/img6.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
  {
    id: 8,
    caption: "New city, new adventures",
    image: "assets/img/img8.jpg",
    user: {
      username: "UrbanExplorer",
      profile_picture: "assets/img/img8.jpg",
    },
    likes: {
      count: 10,
      recentLiker: {
        username: "cityslicker",
      },
    },
    comments: [
      {
        id: 6,
        comment: "Love exploring new places!",
        user: {
          username: "wanderlust",
        },
      },
    ],
  },
  {
    id: 9,
    caption: "Sunny day at the park",
    image: "assets/img/img2.jpg",
    user: {
      username: "Sunshine",
      profile_picture: "assets/img/img1.jpg",
    },
    likes: {
      count: 8,
      recentLiker: {
        username: "nature",
      },
    },
    comments: [
      {
        id: 7,
        comment: "Perfect day! ☀️",
        user: {
          username: "sunnydays",
        },
      },
    ],
  },
  {
    id: 10,
    caption: "Exploring the great outdoors",
    image: "assets/img/img10.jpg",
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
    id: 11,
    caption: "Delicious homemade pizza",
    image: "assets/img/img11.jpg",
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
  {
    id: 12,
    caption: "Morning workout at the beach",
    image: "assets/img/img12.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
  {
    id: 13,
    caption: "Exploring the great outdoors",
    image: "assets/img/img12.jpg",
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
    id: 14,
    caption: "Delicious homemade pizza",
    image: "assets/img/img14.jpg",
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
  {
    id: 15,
    caption: "Morning workout at the beach",
    image: "assets/img/img15.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
  {
    id: 16,
    caption: "Exploring the great outdoors",
    image: "assets/img/img16.jpg",
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
    id: 17,
    caption: "Delicious homemade pizza",
    image: "assets/img/img17.jpg",
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
  {
    id: 18,
    caption: "Morning workout at the beach",
    image: "assets/img/img18.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
  {
    id: 19,
    caption: "Morning workout at the beach",
    image: "assets/img/img19.jpg",
    user: {
      username: "FitnessGuru",
      profile_picture: "assets/img/img7.jpg",
    },
    likes: {
      count: 7,
      recentLiker: {
        username: "fitfam",
      },
    },
    comments: [
      {
        id: 5,
        comment: "Inspiring! 💪",
        user: {
          username: "gymrat",
        },
      },
    ],
  },
];

export default mockData;
