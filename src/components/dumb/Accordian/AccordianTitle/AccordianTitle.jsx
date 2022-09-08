import React from "react";
import "./AccordianTitle.css";

function AccordianTitle({ children, isOpen, handleClick, ...rest }) {
  return (
    <div className="accordian-title" {...rest} onClick={handleClick}>
      {children}
      {isOpen === true && (
        <img
          className="title-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADp6enn5+fr6+vu7u4JCQn4+Pjx8fEMDAzS0tLd3d37+/t9fX3BwcEGBgaEhIRDQ0MYGBjX19eLi4vLy8tJSUm7u7uqqqoxMTF0dHRQUFAmJiZWVlYoKCh2dnYfHx88PDwYNnwGAAAEzklEQVR4nO2diWLaMBBEcYCAgdxN0iZp0/7/TxbhEBIMWFrNrhd53g+MVqPD1rWjESGEEEIIIYQQQgghhBBCCCGEkKEzfXy+HluJzcaL5dxKrOHnrypw87I0EHt+3Yi93V4YiDXMm/g2vKyUxaZ3O7ErbbGtZl19oZ6oik2+alX3U1WxD6bVHpqN52JfzCDE6eW+aKXn4qSldake4oEA9UJsB6gfYquJajbUVhM1aKgHHdRy8ZCDgVoxxCMO6rh4xEFVF486qKF6ojbVXDylCXfxhINqLp50MIDsi8f64BaNEbVLE+pih4Po+tzQ0USxqhG1CW+oUZqoEE3F0jQxDTWiiTYAXZzV3XKwio2uzaqeAWJruOtW+yTXxWgH19xBoltznSCa23aiRrRPrkERviapZrmY4uCa35gAZ2mqOX0xvg9+gOmJD6myYhcTHVyDWe57TNYVupjsYFUtIBGmeyhzURBg9QCJcC5QFoSY3kTXgNaJ3yTaqQ1V4mD1BxPg6FYinjgIjEUaP0ARitpPmosiB4Ef3y8y/XgXZQ5WV6gAR6uu3/sjxFax0MEauI0hLELkiCrsBdgfRGEzigpRGiB4AVOvGE4C1CuIZutIRFqU071FWnEqO+zS4eZUYXSqTQy+OBqVlgW6QM4cxBfJnYMB5IjqZpr4Dm5wdzWKIgq2H6JTB3FFcxwg5kNZ91M+m/ziufibOIV0uNku+Kct3e8wOwyZ66J7BwM5U7/Lib6N3MWzcDAgLGi9EK752B2fzQ1RSA8B2obYS4CWIfYUoHy4ScV8kNlh46LxNPEd6ddJCj06GNB3sVcHA9p9sWcHA7ou9jaKfkXTRQcOBvRCdBKgXkN10UQbdFx042BAw0VHDgbwU7/JNbUU0C46czCA7Yuu+uAWpIsOHQzgXHTpYAAVotsAUQ3VaRNtQLjo2MFAvouuHQzkuuhuom+T56LzJtqQ4+JZBCjftqlu3PfBLYL7Cxse+y54LMV7WHw/zBtLz8DF4ufD4r9piv8uLf7fovj/w+L/8Ytfpyl+ra349dLi17yL37cofu+p+P3D4veANffxXbhY/FmM4s/TiNdkoun5TJTF6cReXdR3MNCji8WfLy3+jHDx57yLP6svHGTqRfzrdv2GKL8/eCZ3Zvq492TqYt7lLIeX1PfJLaL722v5BXTuIuLCutur6rjCOXq0BRXg2dzH7/9NBeUQkXOZy6nfx9smii4W/z6NnzeGlFws/p0oncI4clFrcHczaRT/5l7x7ybqFsLB1L8Srq0ov1+Keid5zbusAPG/OkIXYZkDDN4RFh50QGUOsHgLWlaLoMwBo78ScZP3vEGZA0QtyOhNdkwOzYVAWTKQS1zEZA7wnBsBkzlgmaxrl98CMyM6zlGCyhzwlCZrmGcGlTnAb64g2PnFfwmilvmecJkDEirWMmfXPSC0LdEhnmvetQHkzhtA/sMB5LAcQB7SAeSS7XARt2byIWbuYIdqGTmdB5CXewC51Y9UrNZ+3iExvT645YCLetvO7RD1AzwQoubRgVZDNbnvNb03cjAw+bahoDvI7Fhd7TSf0PPgPrN3Q7Ed49sm6+Prs4lYsyT9ilrDj2S+XIxxWaM9iRFCCCGEEEIIIYQQQgghhBBCCHHLfz8wQSZ10DqiAAAAAElFTkSuQmCC"
          alt="minus"
        />
      )}
      {isOpen === false && (
        <img
          className="title-img"
          src="https://cdn-icons-png.flaticon.com/512/32/32339.png"
          alt="plus"
        />
      )}
    </div>
  );
}

export default AccordianTitle;
