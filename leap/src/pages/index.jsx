import Props from "@/components/Container";
// export default function Test() {
//   return (
//     <div>
//       <Props name="Bataa"></Props>
//     </div>
//   );
// }
import Work from "@/components/Five";
import Gender from "@/components/Four";
import Age from "@/components/Three";
import FirstName from "@/components/one";
import LastName from "@/components/Two";

export default function Home() {
  const arr = [
    {
      firstName: "Mygaa",
      lastName: "B",
      age: "22",
      gender: "male",
      work: "Pinecone",
    },
  ];
  return (
    <div>
      {arr.map((el) => {
        return (
          <div>
            <FirstName fname={el.firstName}></FirstName>
            <LastName lname={el.lastName}></LastName>
          </div>
        );
      })}
    </div>
  );
}
