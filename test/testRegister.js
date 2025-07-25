// Test script for user registration using dummy data
import { validTestUsers, invalidTestUsers, duplicateTestUser } from './registerTestData.js';

// Function to test registration with dummy data
export const testRegisterWithDummyData = async () => {
    const baseURL = 'http://localhost:3000'; // Adjust port as needed
    const registerEndpoint = '/api/users/register'; // Adjust endpoint as needed
    
    console.log('🧪 Starting User Registration Tests with Dummy Data\n');
    
    // Test 1: Valid registration
    console.log('Test 1: Valid User Registration');
    try {
        const response = await fetch(`${baseURL}${registerEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validTestUsers[0])
        });
        const result = await response.json();
        console.log('✅ Status:', response.status);
        console.log('📄 Response:', result);
    } catch (error) {
        console.log('❌ Error:', error.message);
    }
    console.log('---\n');
    
    // Test 2: Missing required fields
    console.log('Test 2: Missing Required Fields');
    try {
        const response = await fetch(`${baseURL}${registerEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invalidTestUsers[0]) // Missing firstName
        });
        const result = await response.json();
        console.log('✅ Status:', response.status);
        console.log('📄 Response:', result);
    } catch (error) {
        console.log('❌ Error:', error.message);
    }
    console.log('---\n');
    
    // Test 3: Duplicate email (run this after Test 1)
    console.log('Test 3: Duplicate Email');
    try {
        const response = await fetch(`${baseURL}${registerEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(duplicateTestUser)
        });
        const result = await response.json();
        console.log('✅ Status:', response.status);
        console.log('📄 Response:', result);
    } catch (error) {
        console.log('❌ Error:', error.message);
    }
    console.log('---\n');
};

// For manual testing in Node.js console
export const manualTestData = {
    curl_examples: {
        valid: `curl -X POST http://localhost:3000/api/users/register \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(validTestUsers[0])}'`,
        
        invalid: `curl -X POST http://localhost:3000/api/users/register \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(invalidTestUsers[0])}'`,
        
        duplicate: `curl -X POST http://localhost:3000/api/users/register \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(duplicateTestUser)}'`
    }
};

// If running this file directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
    testRegisterWithDummyData();
}
