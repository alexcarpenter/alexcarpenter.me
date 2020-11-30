import * as React from "react";

export default function Listing({ children }) {
  return (
    <ul className="space-y-4">
      {React.Children.map(children, function(child) {
        return <li>{child}</li>
      })}
    </ul>
  )
}
