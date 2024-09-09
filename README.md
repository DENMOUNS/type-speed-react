
# Type Speed Program

This repository contains both the **Frontend** and **Backend** of the Type Speed Program, a web application that measures the typing speed of users. The **frontend** is built with **React**, and the **backend** is powered by **Spring Boot**. Below are the individual setups for each part.

---

## Frontend - React

### Features

- Real-time typing speed calculation.
- Fetch random phrases for the typing test.
- Calculate score based on speed and accuracy.
- Interactive and responsive UI.

### Tech Stack

- **React** (JSX, Components, Hooks)
- **CSS** for styling.
- **Axios** for HTTP requests.

### Getting Started

#### Prerequisites

- **Node.js** and **npm** installed.
- **Git** installed.

#### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DENMOUNS/type-speed-react.git
    cd your-repo/frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000`.

### File Structure

```
src/
├── assets/               # Static files and images
├── components/           # React components
├── hooks/                # Custom React hooks
├── services/             # API services (Axios)
└── App.js                # Main app component
```

### Usage

1. **Start typing:** The application fetches a random phrase and you can start typing. The time and score are calculated in real time.
2. **Submit phrase:** Once done typing, the phrase will be submitted to the backend for processing and scoring.
3. **View score:** After submission, the score and time taken will be displayed.

### Sample Axios Request

This is an example of how the frontend sends data to the backend:

```js
const typedPhraseData = {
  textTyped: "This is a typed phrase",
  timeTaken: 15000, // in milliseconds
  incorrectWords: 2,
  score: 80,
};

axios.post("http://localhost:8000/typed-phrases", typedPhraseData)
  .then(response => {
    console.log("Saved typed phrase:", response.data);
  })
  .catch(error => {
    console.error("Error saving typed phrase:", error);
  });
```

---

## Backend - Spring Boot

### Features

- **CRUD Operations** for `TypedPhrase` entities.
- Measure typing speed and accuracy.
- Store and retrieve user scores and typed phrases.
- RESTful API for frontend interaction.

### Tech Stack

- **Java 22**
- **Spring Boot**
- **Maven** for dependency management.
- **MySQL** for database management (you can use another database if preferred).

### Getting Started

#### Prerequisites

- **Java 22**
- **Maven**
- **MySQL** or another supported database
- **Git**

#### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/DENMOUNS/type-speed-spring.git
    cd your-repo/backend
    ```

2. **Configure the database:**

    Update your database connection settings in `src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update
    ```

3. **Build the project:**

    Run the following command to build the project:

    ```bash
    mvn clean install
    ```

4. **Run the application:**

    Run the Spring Boot application:

    ```bash
    mvn spring-boot:run
    ```

    The application will be available at `http://localhost:8000`.

### Endpoints

| HTTP Method | Endpoint               | Description                 |
|-------------|------------------------|-----------------------------|
| `POST`      | `/typed-phrases`        | Save a new typed phrase      |
| `GET`       | `/typed-phrases/{id}`   | Get a typed phrase by ID     |
| `GET`       | `/typed-phrases`        | Retrieve all typed phrases   |
| `DELETE`    | `/typed-phrases/{id}`   | Delete a typed phrase by ID  |

### Sample Request

Here is an example of a POST request to save a typed phrase:

```json
POST /typed-phrases
{
  "phrase": {
    "id": 1
  },
  "textTyped": "This is a typed phrase",
  "timeTaken": 15000,
  "incorrectWords": 2,
  "score": 80
}
```

### Running Tests

To run the tests, use the following Maven command:

```bash
mvn test
```

### Project Structure

```
src/
├── main/
│   ├── java/cm/landry/saisisseur/typeSpeed/
│   │   ├── controller/         # REST controllers
│   │   ├── entity/             # JPA entities
│   │   ├── repository/         # Spring Data repositories
│   │   ├── service/            # Service layer for business logic
│   └── resources/
│       └── application.properties   # Configuration properties
└── test/                           # Unit and integration tests
```

### Contributing

Feel free to contribute to this project by submitting a pull request. For major changes, please open an issue to discuss what you would like to change.

### License

This project is licensed under the MIT License.
