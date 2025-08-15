# Email Scraper

A modern email scraper web application built with React, Vite, TypeScript, and Tailwind CSS. It allows users to search for data (name, address, email, phone, links) using multiple search engines and download results in CSV, TXT, or Excel formats.

## Features
- Search bar with query input and search engine selection (Google, Bing, DuckDuckGo, WebScrapeAPI)
- Real-time search results with pagination handling
- Data table displaying extracted results
- Download options for CSV, TXT, and Excel
- Modern, responsive UI with smooth animations
- Accessible components with ARIA labels

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand
- **File Downloads**: PapaParse, XLSX
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or Yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd email-scraper
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Configuration
- Create a `.env` file in the root directory and add necessary environment variables (e.g., API keys for WebScrapeAPI if used).
- Update `tailwind.config.js` for custom theme adjustments.

## Usage
1. Enter a search query (e.g., "doctor California @gmail.com") in the search bar.
2. Select a search engine from the dropdown.
3. Click "Search" or press Enter to start scraping.
4. View results in the table and download in your preferred format (CSV, TXT, Excel).

## Project Structure