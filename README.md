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
This project is a dual-purpose web application that combines a professional portfolio website with an interactive Random Quote Generator. The portfolio highlights team information, skills, and featured projects, while the quote generator provides motivational quotes fetched from an external API. Together, they showcase both design and technical integration capabilities.

KEY FEATURES:
----------------------
Portfolio (index.html)
- Responsive Navigation: Sticky header with active link highlighting based on scroll position.
- Theme Toggle: Light and dark modes with saved preferences using localStorage.
- Animated Sections: Smooth ScrollReveal animations for an engaging user interface.
- Project Gallery: Filterable project cards powered by Mixitup.js.
- Contact Form: Integrated with Web3Forms API for form submissions.
- Smooth Scrolling: Fluid transitions between page sections.

Random Quote Generator (rqg.html)
- API Integration: Retrieves random quotes via the DummyJSON Quotes API.
- Loading Indicators: Visual feedback while fetching quotes.
- Error Management: Handles connection or API issues gracefully.
- Theme Consistency: Uses the same dark/light mode as the portfolio.
- Instant Quote Refresh: Generates a new quote at the click of a button.

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
     - scrollHeader(): Adds or removes header shadow based on scroll.
     - scrollActive(): Highlights the current section link.
     - scrollReveal: Animates sections on entry.
       
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
