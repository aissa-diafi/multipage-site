import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  const job = queryParams.get("job");

  return (
    <div>
      <h1>Hey {name}, contact us here...</h1>
      <p>
        Your job is {job}. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Odit, dolor voluptate. Beatae eius voluptates, veniam ullam
        asperiores hic vero magnam aliquam doloremque libero facilis
        perspiciatis laborum est quod obcaecati sequi.
      </p>
    </div>
  );
}
