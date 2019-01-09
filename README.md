# Thunkable Excercise
### Summary
- CRUD Application for Projects. 
- Created using creat-react-app.
- No backend so no data persistence.
- You can move the projects around by dragging and dropping.
### How to run the app in development mode?
**`npm start`** 
### Library/Framework Choices
- For the drag and drop functionality I used the library react-dnd. This seems to be the most robust solution for react. But for my specific case maybe a libary like react-beatiful-dnd would have been a better choice.
- I wrote all the CSS myself instead of using a UI framework like Ant Design. I explored Ant Design for a short time but it seemed like it wasn't too friendly in integrating with my custom styles or to flexible in changing their styles. I could be wrong though so this would be something I would explore further.
### Why no state management library?
For an app this small I believed it would be overkill to use something like redux. Only a few components are keeping state and we are not passing props more than a couple levels down.
### What would I work on next?
- Making it more mobile friendly. The site is already pretty responsive but there is more I can do. The two big steps I would take would be using media-queries to make the project box smaller after a certain screen size. This would probably require not to show as much information from each project. Secondly I would have to make the drag and drop work on touchscreens.
- Make the drag and drop seem more natural. Even though it works I feel like I can make it seem more intuitive and natural for people to use.
### How would I change the mock-up?
- The only change I would make from the mock up is somehow show that the projects could be dragged and dropped. There is no real way for users to figure this out. I tried adding a rearrange icon at the edge of the project but I did not like how it looked.
