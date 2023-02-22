import Link from "next/link";
import React from "react";

const BreadCrumbs = (props) => {
  return (
    <div className="breadcrumbs">
        {props.title1 && <Link href={props.link1}>{props.title1}</Link> }
        {props.title2 && <ion-icon name="chevron-forward-outline"></ion-icon>} 
        {props.title2 && <Link href={props.link2}>{props.title2}</Link> }
        {props.title3 && <ion-icon name="chevron-forward-outline"></ion-icon>} 
        {props.title3 && <Link href={props.link3}>{props.title3}</Link> }
    </div>
  );
};

export default BreadCrumbs;
