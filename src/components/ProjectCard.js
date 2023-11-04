/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <a href={href} target="_blank">{title}</a> <br/>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}