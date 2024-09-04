
// import React, { useState, useEffect } from 'react';
// import './fl.css'; // Import CSS file

// const FeedbackList = () => {
//   const [feedbackList, setFeedbackList] = useState([]);

//   useEffect(() => {
//     const fetchFeedback = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/feedback');
//         if (!response.ok) {
//           throw new Error('Failed to fetch feedback');
//         }
//         const data = await response.json();
//         setFeedbackList(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchFeedback();
//   }, []);

//   return (
//     <div className="feedback-container">
//       <h2>Reviews</h2>
//       <div className="feedback-cards-container">
//         {feedbackList.map((feedback, index) => (
//           <div className="feedback-card" key={index}>
//             <p>Name: {feedback.name}</p>
//             <p>Email: {feedback.email}</p>
//             <p>Rating: {feedback.rating}</p>
//             <p>Comments: {feedback.comments}</p>
//             <p>Created At: {new Date(feedback.createdAt).toLocaleString()}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeedbackList;


import React, { useState, useEffect } from 'react';
import './fl.css'; // Import CSS file
import star from '../assets/star.png';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('https://techy-software-nexus-backend.onrender.com/feedback');
        if (!response.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await response.json();
        setFeedbackList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedback();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={star} alt="star" key={i} />);
    }
    return stars;
  };

  return (
    <section id="feedback-container">
      <h2>Reviews</h2>
      <div className="feedback-cards-container">
        {feedbackList.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <p className="name">{feedback.name}</p>
            <p>Email: {feedback.email}</p>
            <p>Rating: <span className="stars">{renderStars(feedback.rating)}</span></p>
            <p>Comments: {feedback.comments}</p>
            <p>Created At: {new Date(feedback.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackList;
