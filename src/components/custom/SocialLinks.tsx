import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithRef } from "react";

type SocialLinkProps = {
  link: string;
  className?: string;
} & ComponentPropsWithRef<"a">;

export const FaceBookLink = ({
  link,
  className,
  ...props
}: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={className || "btn btn-primary btn-floating m-1"}
      style={{ backgroundColor: "#3b5998" }}
      href={link}
      role="button"
      target="_blank"
    >
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  );
};

export const WhatsAppLink = ({
  link,
  className,
  ...props
}: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={className || "btn btn-primary btn-floating m-1"}
      style={{ backgroundColor: "#25D366" }}
      href={"whatsapp://send?phone=" + link}
      role="button"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
};

export const TwitterLink = ({ link, className, ...props }: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={className || "btn btn-primary btn-floating m-1"}
      style={{ backgroundColor: "#000" }}
      href={link}
      role="button"
      target="_blank"
    >
      <FontAwesomeIcon icon={faXTwitter} />
    </a>
  );
};

export const InstagramLink = ({
  link,
  className,
  ...props
}: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={className || "btn btn-primary btn-floating m-1"}
      style={{ backgroundColor: "#ac2bac" }}
      href={link}
      role="button"
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  );
};

export const LinkedInLink = ({
    link,
    className,
    ...props
  }: SocialLinkProps) => {
    return (
      <a
        {...props}
        className={className || "btn btn-primary btn-floating m-1"}
        style={{ backgroundColor: "#0082ca" }}
        href={link}
        role="button"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    );
  };

export const MailToLink = ({ link, className, ...props }: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={className || "btn btn-primary btn-floating m-1"}
      style={{ backgroundColor: "#dd4b39" }}
      href={"mailto:" + link}
      role="button"
      target="_blank"
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  );
};

export const ChooseSocialLink = (social: string, value: string) => {
  if (social === "facebook") {
    return <FaceBookLink link={value} />;
  } else if (social === "whatsapp") {
    return <WhatsAppLink link={value} />;
  } else if (social === "twitter") {
    return <TwitterLink link={value} />;
  } else if (social === "instagram") {
    return <InstagramLink link={value} />;
  }
  else if (social === "linkedin") {
    return <LinkedInLink link={value} />;
  }

  return <MailToLink link={value} />;
};
