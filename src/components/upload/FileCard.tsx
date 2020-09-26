import React, { FC } from "react";

import "./FileCard.css";

interface Props {
  name: string;
  keywords?: string[];
  articles?: number;
  citations?: number;
  progress?: number;
}

const FileCard: FC<Props> = ({
  name,
  keywords = [],
  articles = 0,
  citations = 0,
  progress = 100,
}: Props) => (
  <div className="fileCard">
    <button className="fileCard__closeButton">x</button>
    <strong className="fileCard__name">{name}</strong>
    <small className="fileCard__keywords">{keywords.join(", ")}</small>
    <span className="fileCard__stats">
      <strong className="fileCard__stats__count">{articles}</strong>
      <small className="fileCard__stats__unit">articles</small>
    </span>
    <span className="fileCard__stats">
      <strong className="fileCard__stats__count">{citations}</strong>
      <small className="fileCard__stats__unit">citations</small>
    </span>
    <div className="fileCard_progressBar">
      <div
        className="fileCard_progressAdjustment"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </div>
  </div>
);

export default FileCard;
