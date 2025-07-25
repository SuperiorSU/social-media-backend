// Dummy data for testing user registration

export const validTestUsers = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        userName: "johndoe123"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "securePass456",
        userName: "janesmith456"
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "myPassword789",
        userName: "alicejohnson"
    },
    {
        firstName: "Bob",
        lastName: "Wilson",
        email: "bob.wilson@example.com",
        password: "bobsPassword321",
        userName: "bobwilson321"
    },
    {
        firstName: "Emma",
        lastName: "Brown",
        email: "emma.brown@example.com",
        password: "emmaPass654",
        userName: "emmabrown654"
    }
];

// Test data for invalid scenarios
export const invalidTestUsers = [
    // Missing firstName
    {
        lastName: "Test",
        email: "missing.firstname@example.com",
        password: "password123",
        userName: "testuser1"
    },
    // Missing lastName
    {
        firstName: "Test",
        email: "missing.lastname@example.com",
        password: "password123",
        userName: "testuser2"
    },
    // Missing email
    {
        firstName: "Test",
        lastName: "User",
        password: "password123",
        userName: "testuser3"
    },
    // Missing password
    {
        firstName: "Test",
        lastName: "User",
        email: "missing.password@example.com",
        userName: "testuser4"
    },
    // Missing userName
    {
        firstName: "Test",
        lastName: "User",
        email: "missing.username@example.com",
        password: "password123"
    },
    // Invalid email format
    {
        firstName: "Test",
        lastName: "User",
        email: "invalid-email",
        password: "password123",
        userName: "testuser5"
    },
    // Empty strings
    {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        userName: ""
    }
];

// Test data for duplicate user scenarios
export const duplicateTestUser = {
    firstName: "Duplicate",
    lastName: "User",
    email: "john.doe@example.com", // Same as first valid user
    password: "duplicatePass123",
    userName: "duplicateuser"
};

// Sample test usage examples
export const testScenarios = {
    // Successful registration
    validRegistration: validTestUsers[0],
    
    // Missing required fields
    missingFields: invalidTestUsers[0],
    
    // Duplicate email
    duplicateEmail: duplicateTestUser,
    
    // All fields empty
    emptyFields: invalidTestUsers[6]
};

// For Postman/API testing - JSON format examples
export const postmanTestData = {
    validUser: JSON.stringify(validTestUsers[0], null, 2),
    invalidUser: JSON.stringify(invalidTestUsers[0], null, 2),
    duplicateUser: JSON.stringify(duplicateTestUser, null, 2)
};

export default {
    validTestUsers,
    invalidTestUsers,
    duplicateTestUser,
    testScenarios,
    postmanTestData
};
