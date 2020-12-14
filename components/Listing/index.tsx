import * as React from "react";

function Listing({ children }) {
  return <ul className='space-y-4'>{children}</ul>;
}

function Item({ children }) {
  return <li>{children}</li>;
}

Listing.Item = Item;

export default Listing;
