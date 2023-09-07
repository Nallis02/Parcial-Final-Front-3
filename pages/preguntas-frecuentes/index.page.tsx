import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Head from "next/head";
import { FaqsType } from "dh-marvel/components/faqs/faqsData";
import { GetStaticProps, NextPage } from "next";
 type Props = {
  faqs: FaqsType[];
}

const FAQSPage: NextPage<Props> = ({ faqs }) => {
  return (
    <>
      <Head>
        <title>Preguntas Frecuentes</title>
        <meta
          name="description"
          content="Encuentra respuestas a las preguntas frecuentes sobre nuestro sitio."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes, respuestas, ayuda"
        />
      </Head>

      <BodySingle title="Preguntas Frecuentes">
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </BodySingle>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://parcial-final-front-3-i9t45z23j-nallis02.vercel.app/faqs");
  const faqs = await response.json();

  return {
    props: {
      faqs,
    },
  };
};

export default FAQSPage;