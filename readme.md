
## Description

W6 D26
### Stores, Actions, and Menus.

 * Due: Tue, April 4th
Path: Frontend - Austin - Spring 2017  Unit: Redux
More Practice with Redux!

## Explorer Mode

Create a website for a fictional restaurant that allows customers to place orders online.
Display the menu by using the provided api (see Notes section)

A customer should be able to add an item to their order by clicking on the item's name in the menu. Alternatively, you can create a button on each menu item that says "add to order"

Display the total for the customer, and include tax at 8%.

When the customer clicks the order now button, you should save their order to a tiny-za-server endpoint.

After submitting their order the customer should be taken to a confirmation screen displaying their order and the total due (no wireframe provided).

### NOTES
Before you begin coding, you must plan out your models, views, and actions.

**Include:**
What models do you need and what data do they hold?
What custom functions does each model need to be presented?
How many views will you need?
what events does each view listen to?
How many Actions will you have in your app?
What data will each Action be dispatched with?

**Wireframe suggestion**
You will be using the webpack starter for this assignment, go re-clone it
Once you get the webpack starter working, I highly recommend using the redux todo app as a reference to make sure you've got your reducer and render function working properly.

**Menu api endpoints:**
* Fancy menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json
* Cafe menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json
* Pub menu: https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json
* The Noun Project has cool icons you can use as logos if you're looking to take a break from coding

### WHAT TO SUBMIT
* A link to a repository for your project
* Include in your repo your data planning (see notes above).
* In the Notes section, include a link to your project live on the internet
* As always, in the Notes section, include your confidence (1-5) and if you are anything below 5, briefly explain why.

### Adventurer Mode

Allow a user to set options for each item (special requests such as vegan, spice level, special text requests).
Allow a user to modify their order (delete an item)

### Epic Mode

Create an interface through which the restaurant owner can view and interact with orders.
Require restaurant owners to login using a username and password you provide.
Allow restaurant owners to mark orders complete, and delete orders.ur application here and what it does
