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
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
type Props = {
  faqs: FaqsType[];
};

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
        {faqs &&
          faqs.map((faq) => (
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
  const url = "https://ctd-esp-fe3-final-swart.vercel.app/api/faqs";
  const response = await fetch(`${url}`);
  const faqs = await response.json();
  // const faqs = JSON.parse(json);
  return {
    props: {
      faqs,
    },
    revalidate: 10,
  };
};

export default FAQSPage;
