IT 110 - RANDOM QUOTE GENERATOR
===================================

Group Information:
------------------
GROUP NAME: GROUP 12 IT-110

MEMBERS:
- Vivien Hermoso
- Isaac Dumaplin
- Kim Ayesha Anne Mongado

PROJECT DESCRIPTION:
---------------------
This project is a dual-purpose web application combining a professional student portfolio with an interactive Random Quote Generator (RQG). The portfolio showcases team skills and projects, while the RQG fetches motivational quotes from an external API. This design demonstrates proficiency in modern front-end development, responsive design, and robust API integration.

KEY FEATURES:
----------------------
Portfolio (index.html)
- Responsive Navigation: Includes a sticky header with dynamic link highlighting based on the user's scroll position.
- Theme Toggle: Provides Light and Dark modes with user preference saved persistently using the browser's localStorage.
- Animated Sections: : Features an engaging user interface with smooth visual effects.
- Project Gallery: Displays categorized project cards.
- Contact Form: Integrated for reliable message submission using the Web3Forms API.
- Smooth Scrolling: Offers fluid transitions between various page sections.

Random Quote Generator (rqg.html)
- API Integration: Fetches random quotes using the DummyJSON Quotes API.
- Loading Indicators: Displays clear loading indicators while fetching new content.
- Error Management: Manages connection issues and API errors gracefully.
- Theme Consistency: Synchronizes its appearance with the portfolio's stored theme preference.
- Instant Quote Refresh: Generates a new quote dynamically with a single button click.
  
API INFORMATION:
----------------
| Component       | API Used             | Documentation                                                  | Endpoint                                                                   |
| --------------- | -------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Quote Generator | DummyJSON Quotes API | [dummyjson.com/docs/quotes](https://dummyjson.com/docs/quotes) | [https://dummyjson.com/quotes/random](https://dummyjson.com/quotes/random) |
| Contact Form    | Web3Forms            | [web3forms.com](https://web3forms.com/)                        | [https://api.web3forms.com/submit](https://api.web3forms.com/submit)       |


FILE STRUCTURE:
---------------
index.html                    → Portfolio homepage  
rqg.html                      → Random Quote Generator  
assets/
  ├── css/
  │   ├── styles.css          → Portfolio styling  
  │   └── rqg.css             → Quote Generator styling  
  └── js/
      ├── main.js             → Portfolio logic  
      └── rqg.js              → Quote Generator logic  
README.md                     → Project documentation  


USAGE INSTRUCTIONS:
-------------------
- Open index.html to launch the main portfolio.
- In the Projects section, click the Random Quote Generator card to open the feature.
- An internet connection is required for API calls and theme persistence.
- Theme preferences are shared between both pages.
- Use a modern web browser for the best experience.

BROWSER COMPATIBILITY:
----------------------
- Google Chrome 60+
- Mozilla Firefox 55+
- Safari 12+
- Microsoft Edge 79+


FUNCTIONALITY BREAKDOWN:
=========================
1. Portfolio Logic (main.js)
   
   1.1 Initialization
     - Runs when DOMContentLoaded fires.
     - Activates animations, scroll effects, and theme setup.
       
   1.2 Navigation Systems
     - scrollHeader(): Controls the visual state of the header based on scroll depth.
     - scrollActive(): Determines the visible section and updates the corresponding navigation link's active state.
       
   1.3 Theme Management
     - Listens for toggle button clicks to switch between light/dark mode.
     - Saves user preference in localStorage.
     - Updates icons accordingly.
       
   1.4 Project Filtering
     - Initializes Mixitup for project sorting.
     - Allows users to view specific categories dynamically.
       
   1.5 Contact Form Integration
     - Sends messages through Web3Forms API.
     - Includes client-side validation and user feedback for success or errors.

2. Random Quote Generator Logic (rqg.js)
   
   2.1 Initialization
     - On load: applies saved theme, sets event listeners, and prepares UI.
       
   2.2 Quote Generation Flow
     - User Click → getQuote() → Show Loading → Fetch API → Display Quote
       
   2.3 getQuote() Function Steps
     1. Displays a loading state and clears the previous quote.
     2. Sends an API request to DummyJSON.
     3. Processes the JSON response and updates the DOM.
     4. Handles errors (e.g., no connection).
     5. Returns the UI to normal state.
        
   2.4 Theme Synchronization
     - Uses shared localStorage keys (selected-theme, selected-icon).
     - Ensures consistent theme appearance across both applications.


DATA FLOW OVERVIEW:
===================
Quote Data:
API Response → JSON Parse → Extract {quote, author} → Display on Screen

Theme Data:
Button Click → Toggle Class → Save to localStorage → Apply Globally

ERROR HANDLING:
----------------
Network Failure → Catch Error → Display Message → Allow Retry

THEME PERSISTENCE:
-------------------
localStorage Unavailable → Use Default Theme → Continue Without Alert

USER INTERACTION FLOW:
----------------------
1. Portfolio Exploration: Scrolling triggers animations and navigation updates.
2. Quote Generation: Clicking the button fetches and displays a new quote.
3. Theme Toggle: Updates instantly and remembers preference.

SYSTEM INTEGRATION OVERVIEW:
============================
Cross-App Features:
-------------------
- Unified theme across both applications.
- Seamless naviation and responsive design for all devices.
  
Performance Optimization:
-------------------------
- Efficient API calls with built-in error handling.
- Lightweight animiations via ScrollReveal.
- Minimal localStorage usage for performance.
  
Maintainability:
----------------
- Modular file structure for easier updates.
- Independent yet connected components (Portfolio ↔ Quote Generator).
- API endpoints can be updated with minimal code modification.


This documentation provides a clear and detailed guide to the Portfolio and Random Quote Generator system — explaining its architecture, user interactions, and technical implementation. It serves as both a technical reference and a maintenance manual for future development and educational review.
