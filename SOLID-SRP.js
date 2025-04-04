
/**
 * A class should have only one reason to change, 
 * meaning it should have one job or responsibility. 
 * This encourages better organization and easier maintenance.
 */

// Violating SRP: A class doing too many things.
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    saveUserToDatabase() {
      // Logic to save user to the database
    }
  
    sendWelcomeEmail() {
      // Logic to send welcome email
    }
}
  
// Correct: Single Responsibility
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        // Logic to save user to the database
    }
}

class EmailService {
    sendWelcomeEmail(user) {
        // Logic to send welcome email
    }
}
  