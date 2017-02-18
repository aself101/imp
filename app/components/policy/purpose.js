/********************************************************
Alexander Self
Gemini Observatory
2/13/2017
purpose.js: purpose of the policy
********************************************************/
import React from 'react';

const Purpose = ({}) => {
  return (
    <div>
      <h3>1. Purpose</h3>
      <p className="flow-text">
        The purpose of this policy is to ensure formal management of information at Gemini using specific locations for storage and retrieval. <br />
        The policy applies to all Gemini staff and information types listed in this document. <br />
      </p>
      <p className="flow-text">
        Included in this policy:
      </p>
      <blockquote>
        <p className="flow-text">
          Information types with descriptions and storage locations
        </p>
      </blockquote>
      <blockquote>
        <p className="flow-text">
          Information management classifications
        </p>
      </blockquote>
      <p className="flow-text">
        Not included in this policy:
      </p>
      <blockquote>
        <p className="flow-text">
          Processes for how to create and store each information type.
        </p>
      </blockquote>
    </div>
  );
};

export default Purpose;
