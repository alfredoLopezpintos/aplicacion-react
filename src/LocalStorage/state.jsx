// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { reloadPostITs } from '../Redux/postITsSlice';

// export const loadState = () => {
//   function loadPosts() {
//     const { posts } = useSelector((state) => state.postITs);
//     return posts;
//   }
//   function giveDispatch(data) {
//     const dispatch = useDispatch();
//     return dispatch(data);
//   }

//   function useFirstEffect() {
//     useEffect(() => {
//       const savedNotes = JSON.parse(localStorage.getItem('react-postits-app-data'));

//       if (savedNotes) {
//         savedNotes.forEach((element) => {
//           giveDispatch(reloadPostITs(element));
//         });
//       }
//     }, []);
//   }

//   function useSecondEffect() {
//     useEffect(() => {
//       try {
//         localStorage.setItem('react-postits-app-data', JSON.stringify(loadPosts()));
//       } catch (err) {
//         // eslint-disable-next-line no-console
//         console.log(err);
//       }
//     }, [loadPosts()]);
//   }

//   useFirstEffect();
//   useSecondEffect();
// };

// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('react-postits-app-data');
//     if (serializedState === null) {
//       return undefined;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return undefined;
//   }
// };

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('react-postits-app-data', serializedState);
//   } catch (err) {
//     // Manage Error
//   }
// };
