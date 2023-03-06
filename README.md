details of the project:-
1. The key entity of focus: Cat with its name, age category, pic and nick names.
2. Key Actions: Clicking the cat image, Adding a new cat, Updating an existing cat, Selecting a Cat in the list,
Selecting a Cat in the gallery
3. Data: Leverage pre-loaded data (you can either use a database or use local storage that gets initiated
with pre-loaded information)
4. The app consists of four user interface areas/panels
        a. Left Nav: List of Cats with its name and number of times it was clicked
        b. Center: Cat Card with name, image, nick names and age
        c. Right: Form to Update the Cat with fields Cat Name, Cat Image and Cat Clicks
        d. Bottom across full width: Cat Image Gallery
5. Events
        a. Left Nav: When a Cat is clicked that Cat need to be shown in the center and the selected Cat list
        item background color needs to be changed
        b. Center: When a user clicks a Cat Image in center panel, the number of clicks need to be
        incremented by 1
        c. Bottom: When a user clicks a Cat Image in the bottom panel gallery, the number of clicks need
        to be incremented by 1 and the center panel should show the clicked Cat and the focus to move
        to the center panel
        d. Center & Bottom Click: Whenever the click count increases, update the age based on the
        number of clicks (0 to 5: Infant, 6 to 12: Child, 13 to 25: Young, 26 to 40: Middle-Age, 41 to 60: Old >61: Very Old)
e. Right: Create New Cat or Update Existing Cat
        i. Have a button to open Edit form
        ii. When the form is opened the fields will have default values of the active Cat (the Cat
        that is clicked and shown in the center)
        iii. User can change the Image or the click count for an existing Cat
        iv. User can change the name - is like adding a new Cat with the given image and the click
        count as values
        v. User can save and the saved cat will become active - example, a new cat is added, that
        Cat is selected in the list and also shown in the center panel. When the User updates,
        the values get updated and that Cat becomes active.
        vi. When the user Saves, the above will happen and the form gets closed
        vii. User can also Cancel without any changes and the form gets closed
