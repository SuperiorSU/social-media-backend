// Dummy data for testing post creation

export const validTestPosts = [
    {
        title: "Beautiful Sunset at the Beach",
        desc: "Captured this amazing sunset during my evening walk at the beach. The colors were absolutely breathtaking!",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        isPrivate: false
    },
    {
        title: "My Morning Coffee Setup",
        desc: "Starting the day right with my favorite coffee blend and a good book. Perfect way to begin a productive day!",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        isPrivate: false
    },
    {
        title: "Weekend Hiking Adventure",
        desc: "Explored the mountain trails this weekend. The view from the top was worth every step of the challenging climb.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
        isPrivate: false
    },
    {
        title: "Homemade Pizza Night",
        desc: "Tried making pizza from scratch tonight. It turned out better than expected! Nothing beats homemade food.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        isPrivate: true
    },
    {
        title: "City Lights Photography",
        desc: "Experimenting with night photography in the city. Love how the lights create this magical urban atmosphere.",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
        isPrivate: false
    },
    {
        title: "Personal Workout Progress",
        desc: "Sharing my fitness journey progress. It's been 6 months of consistent training and the results are showing!",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        isPrivate: true
    }
];

// Test data for invalid scenarios
export const invalidTestPosts = [
    // Missing title
    {
        desc: "This post is missing a title",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        isPrivate: false
    },
    // Missing description
    {
        title: "Post Without Description",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        isPrivate: false
    },
    // Missing image
    {
        title: "Post Without Image",
        desc: "This post doesn't have an image URL",
        isPrivate: false
    },
    // Empty strings
    {
        title: "",
        desc: "",
        image: "",
        isPrivate: false
    },
    // Only title provided
    {
        title: "Only Title Provided"
    },
    // Null values
    {
        title: null,
        desc: null,
        image: null,
        isPrivate: false
    }
];

// Sample User IDs for testing (you'll need to replace these with actual user IDs from your database)
export const testUserIds = [
    "60d5ecb74f2b8b001f8e4c1a", // Replace with actual MongoDB ObjectId
    "60d5ecb74f2b8b001f8e4c1b", // Replace with actual MongoDB ObjectId
    "60d5ecb74f2b8b001f8e4c1c", // Replace with actual MongoDB ObjectId
    "60d5ecb74f2b8b001f8e4c1d", // Replace with actual MongoDB ObjectId
    "60d5ecb74f2b8b001f8e4c1e"  // Replace with actual MongoDB ObjectId
];

// Test scenarios with different combinations
export const testScenarios = {
    // Valid post creation
    validPost: validTestPosts[0],
    
    // Valid private post
    validPrivatePost: validTestPosts[3],
    
    // Missing required fields
    missingTitle: invalidTestPosts[0],
    missingDesc: invalidTestPosts[1], 
    missingImage: invalidTestPosts[2],
    
    // Empty fields
    emptyFields: invalidTestPosts[3],
    
    // Long content
    longContent: {
        title: "This is a very long title that might test the limits of what should be acceptable for a post title in our application",
        desc: "This is an extremely long description that goes on and on to test how our application handles lengthy content. It includes multiple sentences and should help us understand if there are any character limits or performance issues when dealing with longer text content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        isPrivate: false
    },
    
    // Invalid image URL
    invalidImageUrl: {
        title: "Post with Invalid Image",
        desc: "Testing with an invalid image URL",
        image: "invalid-url-format",
        isPrivate: false
    }
};

// Sample complete requests with user IDs
export const completeTestRequests = [
    {
        userId: testUserIds[0],
        postData: validTestPosts[0]
    },
    {
        userId: testUserIds[1],
        postData: validTestPosts[1]
    },
    {
        userId: testUserIds[2],
        postData: validTestPosts[2]
    }
];

// For Postman/API testing - formatted examples
export const postmanTestData = {
    validPost: JSON.stringify(validTestPosts[0], null, 2),
    invalidPost: JSON.stringify(invalidTestPosts[0], null, 2),
    privatePost: JSON.stringify(validTestPosts[3], null, 2)
};

// Curl command examples (replace USER_ID with actual user ID)
export const curlExamples = {
    createPost: (userId) => `curl -X POST http://localhost:3000/api/posts/${userId} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(validTestPosts[0])}'`,
    
    createPrivatePost: (userId) => `curl -X POST http://localhost:3000/api/posts/${userId} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(validTestPosts[3])}'`,
    
    createInvalidPost: (userId) => `curl -X POST http://localhost:3000/api/posts/${userId} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(invalidTestPosts[0])}'`
};

export default {
    validTestPosts,
    invalidTestPosts,
    testUserIds,
    testScenarios,
    completeTestRequests,
    postmanTestData,
    curlExamples
};
