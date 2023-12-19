# React Chat App

A simple React app for managing chats with a user interface similar to the provided mock.

## Table of Contents

- Overview
- Features
- Setup
- Usage
- Testing
   - Unit Tests
   - Integration Tests 
- Dependencies
- Contributing

### Features

  - Display a list of chats fetched from the API.
  - Clicking on a chat opens the chat with the list of messages.
  - Filter chats by Chat Title / Order ID.
  - Messages are displayed in a bottom-to-top order.
  - Differentiate between 'text' and 'optionedMessage' message types.
  - Align messages based on the sender ('BOT' or 'USER').
  - Input box for sending messages.
  - Option to request a call.
  - Date labels for message separation.
  - Sort messages based on the timestamp.
  
### Setup

1. Clone the repository:
   ``` 
   git clone https://github.com/your-username/react-chat-app.git

   cd flip-chat 
   ```

2. Install dependencies:
   ```
   npm install
    ```

### Usage
1. Run the development server:
   ```
   npm start

   ``` 
2. Open your browser and navigate to http://localhost:3000.

3. Explore the chat app, filter chats, and interact with messages.
  
### Testing

## Unit Tests
This project uses Jest for unit testing. To run the unit tests, use the following command:

```
npm test

```
## Integration Tests
This project uses Jest and React Testing Library for integration tests with Mock Service Worker (msw). To run the integration tests, use the following command:
```
npm test

```
### Dependencies
- React
- Axios

### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your improvements.