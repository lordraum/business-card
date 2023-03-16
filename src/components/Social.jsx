import React from "react";

const Social = ({ socialData }) => {
  return (
    <div className="social">
      {socialData.map((socialItem, index) => {
        const Icon = socialItem.icon;
        return (
          <a key={index} href={socialItem.href} target="_blank">
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
