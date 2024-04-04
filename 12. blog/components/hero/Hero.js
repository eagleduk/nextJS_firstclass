import Image from "next/image";
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/touann-gatouillat-vergos.jpg"
          alt="touann-gatouillat-vergos"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi,</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </div>
  );
}
