import Image from "next/image";

const styles = {
  one: { padding: 20 },
  two: { width: 150, height: 150, padding: 20 },
};

export const Box = () => {
  return (
    <div style={styles.one}>
      <Image width={100} height={100} src={"/favicon.ico"} />
    </div>
  );
};
export const Box2 = () => {
  return (
    <div style={styles.two}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        perferendis quibusdam. Eos nulla mollitia similique nostrum minus
        provident totam, voluptatibus deleniti ipsam minima aspernatur eaque
        atque iste culpa. Voluptate, reprehenderit?
      </p>
    </div>
  );
};
