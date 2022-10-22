import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ Noam Milner {year}</p>
    </footer>
  );
}

export default Footer;
