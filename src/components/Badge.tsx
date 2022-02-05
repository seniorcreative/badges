import React from "react";

export type BadgeProps = {
  position: string;
  color: string;
  value?: string | number;
};

function Badge(props: BadgeProps) {
  return (
    <div className={`badge badge-${props.position} badge-${props.color}`}>
      {props.value && <span className="badge-value">{props.value}</span>}
    </div>
  );
}

export default Badge;
