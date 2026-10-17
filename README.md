## Dark Theme Toggle

The website includes a button in the header that toggles between light and dark themes.

### How to use

1. Open the website in your browser.
2. Click **Toggle Dark Theme** in the header.
3. Click the button again to return to the light theme.

### Implementation

- **HTML (`index.html`):** Provides the theme toggle button.
- **JavaScript (`script.js`):** Listens for button clicks and updates the `data-theme` attribute on the `<body>` element.
- **CSS (`styles.css`):** Styles the page according to the selected theme.

The default theme is light. The dark theme is activated by setting `data-theme="dark"` on the body element.

**Note:** The selected theme resets when the page is reloaded; persistence is not implemented.

