import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>code X CREATIVES.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>WORK WITH US</span>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                width="40px"
                height="40px"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>

          <br /> Addis Ababa, Ethiopia
        </div>
        <div className={style.cardItem}>
          CONTACT@
          <a>abenezerkifle000@gmai.com</a>
          <br /> +251910979060
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          FOLLOW US:
          <Link href="/">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/ln.png"}
              width="40px"
              height="40px"
              alt=""
            />
          </Link>
          <Link href="/">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/git.png"}
              width="40px"
              height="40px"
              alt=""
            />
          </Link>
          <Link href="/">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/fb.png"}
              href="/"
              width="40px"
              height="40px"
              alt="facebook logo"
            />
          </Link>
          <Link href="/">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/tw.png"}
              width="40px"
              height="40px"
              alt="twitter logo"
            />
          </Link>
          <Link href="/">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/img/gplus.png"}
              width="40px"
              height="40px"
              alt="google plus logo"
            />
          </Link>
        </div>
        <div className={style.cardItem}>
          © 2022 code X INTERACTIVE,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
