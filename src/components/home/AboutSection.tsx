/* eslint-disable @next/next/no-img-element */

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { CopyText } from "../custom/CopyText";
import ArtistInfo from "../models/ArtistInfo";
import { ChooseSocialLink } from "../custom/SocialLinks";

export const ArtistInfoView = ({ artistInfo }: { artistInfo: ArtistInfo }) => {
  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center">
        <div className="col-lg-5 about-left d-flex flex-column mb-4 mb-lg-0">
          <img
            className="author-img img-fluid mx-auto"
            src="/images/author.jpg"
            alt=""
          />
          <div className="">
            <h3 className="text-center pt-4">{artistInfo.name}</h3>
            <h5 className="text-center text-secondary">
              {artistInfo.occupation}
            </h5>
          </div>
        </div>
        <div className="bg-transparent col-lg-6 about-right d-lg-flex flex-fill flex-wrap justify-content-center">
          <div className="flex-fill text-center">
            <h2>{artistInfo.quote}</h2>
            <p>{artistInfo.subquote}</p>
            <div className="d-flex justify-content-center flex-column d-lg-block mt-5">
              <div className="mb-4 d-flex justify-content-center">
                {Object.entries(artistInfo.social_links).map(
                  ([social, link]: [string, string], index) => {
                    return (
                      <span key={index}>{ChooseSocialLink(social, link)}</span>
                    );
                  },
                )}
              </div>
              <div className="flex-fill d-flex flex-wrap flex-column mb-4 px-5 mx-auto">
                <CopyText
                  className="border rounded p-2 d-flex text-white mb-2"
                  value={artistInfo.phone}
                >
                  {artistInfo.phone}
                </CopyText>
                <CopyText
                  className="border rounded p-2 d-flex text-white flex-fill"
                  value={artistInfo.email}
                  icon={faEnvelope}
                >
                  {artistInfo.email}
                </CopyText>
              </div>
            </div>
            <div className="flex-flex-shrink-0 d-lg-flex text-lg-start text-center flex-column">
              <div className="mb-0 mb-4 my-auto d-flex">
                <a
                  className="btn btn-secondary text-uppercase text-white text-decoration-none mx-auto call-now-btn rounded-5"
                  href={`tel:${artistInfo.phone}`}
                >
                  <i className="bi bi-telephone-forward-fill"></i> Call Now
                </a>
              </div>
            </div>
          </div>
          <div className="text-center d-flex mx-auto my-auto">
            <div className="flex-fill d-flex">
              <img
                src="/images/qr_code.png"
                alt="QR Code"
                className="img-fluid qr-code mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = ({ artistInfo }: { artistInfo: ArtistInfo }) => {
  return (
    <section className="container my-2">
      <ArtistInfoView artistInfo={artistInfo} />
    </section>
  );
};
export default AboutSection;
