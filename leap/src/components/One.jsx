import Gender from "./Four";

export default function FirstName(props) {
  return (
    <div>
      <h1>fName: {props.fname}</h1>
      <Four huis={props.gender}></Four>
    </div>
  );
}
