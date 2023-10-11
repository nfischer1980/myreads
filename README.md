# MyReads Project

## To Launch

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Keeping Track (of the Success Criteria)

### Main Page

Criteria |Y/N| Notes
|----|:---:| ---|
Does the main page show three categories (or “bookshelves”) for books (i.e., Currently Reading, Want to Read, and Read)? | [x] | It's using the [ShelfOptions](./src/ShelfOptions.js) to display the shelves information.
Does the main page allow users to move books between shelves? | [x] | Books can be moved between shelves by using the [Changer component](./src/Changer.js) or by drag and drops. Using the component the book can be removed from the page by using the `none` option
Does information persist between page refreshes? | [x] |

### Search Page

Criteria |Y/N| Notes
|----|:---:| ---|
Does the search page have a search input that allows users to search for books? | [x] | It has an input field. Books matching the query are displayed on the page. It doesn't fail for missing thumbnail or authors. It can use multiple word queries.
Do the search results allow a user to categorize a book as “Currently Reading,” “Want to Read”, or “Read”? | [x] | Books not yet on the main page will be added using their selected shelf option.
Do selections made on the search page show up on the main page? | [x] | Yes.

### Routing

Criteria |Y/N| Notes
|----|:---:| ---|
Does the main page link to the search page? | [x] | Yes it's possible to go to the search page using routing.
Does the search page link back to the main page? | [x] | Yes.

### Code Functionality

Criteria |Y/N| Notes
|----|:---:| ---|
Does the project code handle state management appropriately? | [x] | The `useState` hook is used to the components.
Are components built as functional components? | [x] | Yes
Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation (e.g., a key for list items)? Is the code formatted properly? | [x] | To the best of my knowledge.
