import * as React from "react";
import video from "./../../assets/connect.mp4";
import styled from "styled-components";
import type { PageProps } from "gatsby";

export function LocalVideo() {
  return (
    <LocalVideoWrapper>
      <video controls muted>
        <source src={video} type="video/mp4" />
      </video>
    </LocalVideoWrapper>
  );
}

const LocalVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;
  height: 30vh;
  position: relative;
  margin-bottom: 2rem;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//-------------------------------------------------------

interface IframeRemoteVideoProps extends PageProps {
  src: string;
  title: string;
}

export function IframeRemoteVideo({
  src,
  title,
  ...props
}: IframeRemoteVideoProps) {
  return (
    <IframeRemoteVideoWrapper>
      <div className="video">
        <iframe
          src={src || "https://www.youtube.com/embed/-8ORfgUa8ow"}
          title={title || "the best html css tutorial ever !"}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </IframeRemoteVideoWrapper>
  );
}

const IframeRemoteVideoWrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  .video {
    overflow: hidden;
    /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
    padding-top: 56.25%;
    position: relative;
    border-radius: var(--radius);
  }

  .video iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
