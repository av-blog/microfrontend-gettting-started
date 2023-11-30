import React from "react";

export default function Home(props) {
  return (
    <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          alt="blogimage"
          style={{ width: "100%" }}
          src="https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg"
        />
        <h1 className="cover-heading">Welcome to the TecMec portal!</h1>
        <p className="lead">
          TecMec is the world class supplier of trasportation related
          technologies.
        </p>
      </div>
    </section>
  );
}
