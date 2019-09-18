import React from "react";
import styled from "styled-components"
import { Button, Section } from "../styles"
//import PropTypes from 'prop-types';

const ContactContainer = styled(Section)``;

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title } = frontmatter;
  return (
    <ContactContainer id="contact">
      <h3>{ title }</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Button>Get in Touch</Button>
    </ContactContainer>
  );
}

/*
About.propTypes = {
    data: PropTypes.shape({
        html: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            skills: PropTypes.arrayOf(PropTypes.string).isRequired,
            avatar: PropTypes.array.isRequired
        }),
    }),
};
*/

export default Contact;
