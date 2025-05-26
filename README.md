# 🎬 MoviesBrowser

**MoviesBrowser** is a responsive web application built using **JavaScript** and **React**, which allows users to browse, search, and explore detailed information about movies and actors. The application integrates with the **TMDB API** to fetch real-time data, including posters, genres, ratings, and actor biographies.

## 🚀 Demo

Check out the live demo here: [Movies Browser](https://am97veb.github.io/movies-browser/
)

## 🧠 Project Management & Workflow

The project was developed collaboratively using an organized and agile approach:

- **Scrum methodology** – development was structured in short sprints with regular planning and reviews  
- **Trello** – used for managing tasks and tracking progress  
- **Version control Git:**
  - Remote repository on GitHub
  - Separate branches for each feature  
  - Pull requests used to merge code  
  - Code reviews conducted for quality assurance  
  

## 🔗 Repository

GitHub: [https://github.com/am97veb/movies-browser](https://github.com/am97veb/movies-browser)

## 🔍 Features

- **Movie List** – homepage displays a list of popular movies.
- **Movie Page** – each movie has a dedicated page with its poster, title, release year, genres, rating and vote count.
- **Popular People** – browse or search for actors. Each actor has a name, birth year, biography, and a list of movies they’ve acted in.
- **Search functionality** – search for movies or people using the input field in the navigation bar.
- **Navigation** – intuitive navigation between Movies and People sections.
- **Loader, error, and no-results components** – ensure smooth user experience during data loading or failure.
- **Responsive design** – fully adapted for use on various devices.

## 🛠️ Technologies Used

- JavaScript (ES6+)
- React (Create React App)
- Redux Toolkit – for centralized state management
- Redux-Saga – for handling asynchronous operations and communication with the TMDB API  
  > Each API feature (movies, genres, people) uses its own Redux **slice** and corresponding **saga** for modularity
- React Hooks:
  - `useState` – local state
  - `useEffect` – lifecycle and data fetching
  - `useSelector` – accessing Redux store
  - `useRef` – persistent references
  - `useLocation` – accessing current route
  - `useNavigate` – navigation control
- Styled Components – component-level styling with ThemeProvider and GlobalStyle
- CSS Grid and Flexbox – responsive layout structure
- BEM methodology – for consistent and maintainable class naming
- Figma – project designed based on a shared Figma layout

## 📋 How to Use (Instructions)

1. Open the project in your browser.
2. On the homepage, a list of popular movies will appear.
3. Use the search bar in the top navigation to find a specific movie.
4. Click on any movie to view its full details.
5. To browse actors, click on the **"People"** tab in the navigation or search by name in the search field.
6. Click on any person to see their profile with biography and filmography.

## 📸 Screenshots

![Movie List Page](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Rrd203d3Rva3Y3dTk5cmlpNzM1NWxjaW1xcmdzb2ExZGhldnM1NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0GY895QF7pJH6rp8pc/giphy.gif)

![Movie Page](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenYzZWQ4N3IwMzhvODFmNHE0NDA4MG5maXF2M2ZiNHdrdnptMmtuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4Ac6H0QbmLCLvDSsgj/giphy.gif)

![Popular People](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWNwZXRhaHd4aW13cm9pY2FnZWxza3VleTZ2dTE0MW00N3J4Y2pjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8Ow5Vqd2iWygM7AfYS/giphy.gif)

![People Page](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTBhaWd2YjJrMXRhcGF5cjd5dzNhZTZtejdrenBvaGZkMnlueXRtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8oep7GwQ23CcFLopGr/giphy.gif)

![Search Result](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxamp1NWlscnZzaTA3OXptYXdsOTk3bzNoazMxdXBmZXN3NmV1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mLLwTJ4cTJ778TFMu1/giphy.gif)

![No Results](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ1YnRsNGJoeTBhZGUxdmZjZjc1Zzdienp3cGdwbGpwMnM0NDdydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wLkxxbBtlIGcfHrUsm/giphy.gif)

![Movie List-responsive](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFuM3oyODhhZzFqbzlnaTN2cGR0ZW1zemxzaHI1a3NxOGNmNnF6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rbEhRGQDVdGjMIsVCS/giphy.gif)

![Popular People/People Page-responsive](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGI4NWR1Mzh0Yjdvb2JvdTA0dXNxMWRrcTR0aTBlbHJ1aGh6dng4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3cc3ZJuS6WNyh1Nho/giphy.gif)

![Movie Page-responsive](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjcyN2cxMG45MnZjOGdoNnR4ZGtnZ3R1NWM3dmtodnIyeDBkOWszcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uv5A7H2U8SxEBsL68I/giphy.gif)


![Saerch Result - responsive](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZvd2dnaDB4dHJpMXYxb2Z1cDZ5bDVwa2d1dHRzeGQyMmEzYzY2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y6d3GiJcACEuvc9OyN/giphy.gif)

![No Results-responsive](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN201bjFkYXUzZWUxcnE1MHF1dHRrYmZrYmI5cThqbzZsYjJ3b3JveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kg6OOzgJTW78mugYCE/giphy.gif)

## 💻 Installation & Local Development

To run the project locally, follow these steps:

1. Clone the repository:
   
   git clone https://github.com/am97veb/movies-browser.git

2. Navigate to the project folder
   
   cd movies-browser

3. Install dependencies
   
   npm install

4. Start the development serves

   npm start

5. Open your browser and go to:

   http://localhost:3000

   ## 👥 Team Members

- 👤 [Adrian Markefka](https://github.com/am97veb)
- 👤 [Marcin Osojca](https://github.com/Mikoli09)
- 👤 [Joanna Górniak](https://github.com/Joanna2307)  


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
