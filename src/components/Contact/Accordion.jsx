import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="lg:w-4xl">
      <p className="text-white text-4xl font-medium mb-5">
        Frequently Asked Questions
      </p>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: "auto",
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "block",
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "none",
                },
              },
        ]}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">What's your design process?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
            We follow a structured approach: discovery & research, wireframing,
            design, prototyping, user testing, and refinement. This ensures we
            create solutions that truly meet your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            How long does a typical project take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
            Timeline varies based on scope and complexity. A typical UI/UX
            project ranges from 4-12 weeks. We provide a detailed timeline
            during our initial consultation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">
            Can you work with our existing development team?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
            Absolutely! We collaborate seamlessly with in-house and external
            development teams to ensure smooth handoff and implementation of our
            designs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span">
            What industries do you specialize in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white">
            We've worked across SaaS, fintech, healthcare, e-commerce, and more.
            Our diverse experience allows us to bring fresh perspectives to any
            industry challenge.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
