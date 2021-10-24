import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const NotFound = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => setShouldRedirect(true), 2000);
  }, []);

  return (
    <div>
      {shouldRedirect ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h2>404 Page Not Found</h2>
        </div>
      )}
    </div>
  );
};
export default NotFound;
