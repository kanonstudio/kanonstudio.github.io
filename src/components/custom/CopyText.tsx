import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCopy as faCopySolid } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithRef, useState, useRef } from "react";
import { Tooltip, OverlayTrigger, Overlay } from "react-bootstrap";

type CopyTextProps = {
  value: string;
  icon?: IconDefinition;
} & ComponentPropsWithRef<"div">;

export const CopyText = ({ value, icon, children, ...args }: CopyTextProps) => {
  const [copied, setCopied] = useState(false);
  const target = useRef<HTMLAnchorElement | null>(null);

  const onHandleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    // Automatically hide the "Copied" tooltip after 2 seconds
    setTimeout(() => setCopied(false), 20000);
  };

  return (
    <>
      <div>
        <div {...args}>
          <span>
            <FontAwesomeIcon icon={icon || faPhone} />
          </span>
          <div className="d-block flex-fill mx-2 text-start">{children}</div>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip>Click to copy</Tooltip>}
          >
            <span
              style={{ cursor: "pointer" }}
              ref={target}
              onClick={onHandleCopy}
              className="text-white"
            >
              {copied ? (
                <FontAwesomeIcon icon={faCopySolid} />
              ) : (
                <FontAwesomeIcon icon={faCopy} />
              )}
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <Overlay target={target.current} show={copied} placement="top">
        {(props) => <Tooltip {...props}>Copied To Clipboard!</Tooltip>}
      </Overlay>
    </>
  );
};
