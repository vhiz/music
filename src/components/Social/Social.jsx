import React from "react";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((social, i) => (
        <a href={social.path} key={i}>
          <div className={`${iconStyles}`}>{social.icon}</div>
        </a>
      ))}
    </div>
  );
}
