/* eslint-disable @next/next/no-img-element */

import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import artistInfo from "@/data/artist.json";
export const FooterContent1 = () => {
  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-between align-items-center p-2 border-top">
        <div className="col-md-4 d-flex align-items-center">
          {/* <Link
          href="/"
          className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1"
        >
          <FontAwesomeIcon icon={faBootstrap} />
        </Link> */}
          <h5 className="align-middle text-white mb-0">Kamran Studio</h5>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-center d-flex flex-column py-2">
        <div style={{ fontSize: "10px" }}>Copyright © 2024</div>
        <div className="small">All rights reserved</div>
      </div>
    </div>
  );
};

export const FooterContent = () => {
  return (
    <div className="d-flex flex-column py-5 border-top">
      <h1 className="text-center">Kanon Studio</h1>
      <p className="text-center">
        A Reliable Place where you can get The Best Quality Artwork for Yourself
        or Loved Ones.
      </p>
      <div>
        <ul className="justify-content-center list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-white" href={artistInfo.social_links.facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href={artistInfo.social_links.twitter}>
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-white" href={artistInfo.social_links.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const FloatingButton = () => {
  return (
    <div
      className="fixed-bottom text-end d-flex"
      style={{ pointerEvents: "none" }}
    >
      <div className="flex-fill"></div>
      <div className="d-flex flex-column">
        <Link
          href="whatsapp://send?phone=+8801733680667"
          style={{ pointerEvents: "all" }}
        >
          <img
            src={"/assets/whatsapp.png"}
            height={48}
            width={48}
            alt="whatsapp"
            className="p-1"
          />
        </Link>
        <Link
          href="mailto:kanonstudio23@gmail.com"
          style={{ pointerEvents: "all" }}
        >
          <img
            src="/assets/gmail.png"
            height={48}
            width={48}
            alt="whatsapp"
            className="p-1"
          />
        </Link>
      </div>
    </div>
  );
};
const Footer = ({ fab }: { fab?: boolean }) => {
  return (
    <footer>
      {fab ? <FloatingButton /> : ""}
      <FooterContent />
    </footer>
  );
};
export default Footer;
