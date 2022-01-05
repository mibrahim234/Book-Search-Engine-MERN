// Here we instruct that the ThoughtList component will receive two props: a title and the thoughts array. 
// We destructure the argument data to avoid using props.title and props.thoughts throughout the JSX code.
import React from 'react';

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  // We conditionally render JSX by checking to see if there's even any data in the thoughts array first.
  // If there's no data, then we return a message stating that. 
  //If there is data, then we return a list of thoughts using the .map() method.
  return (
    <div>
      <h3>{title}</h3>
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3">
            <p className="card-header">
              {thought.username} thought on {thought.createdAt}
            </p>
            <div className="card-body">
              <p>{thought.thoughtText}</p>
              <p className="mb-0">
                Reactions: {thought.reactionCount} || Click to{' '}
                {thought.reactionCount ? 'see' : 'start'} the discussion!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

// Notice how we also check to see the value of thought.reactionCount. 
// We're conditionally displaying a message to contextualize what the call to action should be. If there are no reactions, the user will start the discussion by adding the first reaction. 
// If there are reactions, the user will view or add their own reaction to an existing list.

export default ThoughtList;
