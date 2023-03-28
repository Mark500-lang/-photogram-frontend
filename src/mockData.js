const mockData = [
    {
      id: 1,
      caption: 'First post',
      image: 'path/to/image1.jpg',
      user: {
        username: 'user1',
        profile_picture: 'path/to/profile1.jpg',
      },
      likes: [
        {
          id: 1,
          user: {
            username: 'user2',
          },
        },
      ],
      comments: [
        {
          id: 1,
          comment: 'Nice picture!',
          user: {
            username: 'user3',
          },
        },
      ],
    },
    // Add more sample posts as needed
  ];

  export default mockData;
