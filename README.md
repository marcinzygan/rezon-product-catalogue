# Commercial Next.js App: Online Product Catalogue for Rezon.eu

👋 Hi, I’m @marcinzygan

## Overview

I've been asked to prepare an online catalogue for my current employer, Rezon.eu. The idea is to showcase about 200 products, including title, image, description, price, and technology used. This project uses Redux for state management. The data for this project was taken from an Excel file and parsed to JSON. In the future, this project will be integrated with another application (PC Business) to update storage levels and manage orders.

## To Do:

- Build API for productData.
- Add ability to swipe the slider images on mobile devices.

## Features Implemented:

- **Design:**
  - Figma design for app layout.

- **State Management:**
  - Redux.

- **Components:**
  - Added `ProductCard` component for each product.
  - Built catalogue main page.
  - Built navigation and filter options component.
  - Built pagination component.
  - Added navbar component styles and logic to display hamburger icon on mobile devices.
  - Added the logic to display products in a product component.
  - Added logic to filter products by category.
  - Added logic for pagination: navigate to last, first page, next, and previous page.
  - Added the logic to display current page number as well as all available pages.
  - Added `productModal` component to display it after a product is clicked.
  - Dynamically rendered all modal data, depending on the selected product id.
  - Added slider component, and mini slider to display 4 images.
  - Added logic for `mainSlider` and `miniSlider`.
  - Added pages: `o_nas`, `polityka_prywatnosci`, `handlowcy`, `kontakt`.
  - Added logic for `searchBar` to get input value.
  
- **Styling:**
  - Added all CSS styling and media queries for mobile, tablet, and desktop devices.
  
- **Functionality:**
  - Added logic to search all products by entered value.
  - Added products to favourites with local storage.
  - Added ability to close opened modal with browser back button on mobile and desktop.
  - Added mobile keyboard hide after search query.
  
- **Contact Section:**
  - Added contact section layout, styles, contact form, and EmailJS service for the contact form.
  
- **About Section:**
  - Added about section.

## 📫 Find me on [marcin-zygan.com](https://marcin-zygan.com)

Have a nice day 🌞

## This project is Live [HERE!](https://rezon-katalog.netlify.app/) Enjoy.

