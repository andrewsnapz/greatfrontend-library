import Button from "./components/button";
import { RiStarLine } from "@remixicon/react";
import PageLayout from "./components/page-layout";
import "./App.scss";

export default function App() {
  return (
    <PageLayout>
      <div className="app">
        <div className="variants-container">
          <Button kind="primary" size="md">
            Button CTA
          </Button>
          <Button
            kind="primary"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button
            kind="primary"
            size="xl"
            icon={RiStarLine}
            iconAlignment="right"
          >
            Button CTA
          </Button>
          <Button kind="primary" size="2xl">
            Button CTA
          </Button>
          <Button kind="primary" size="2xl" icon={RiStarLine} />
        </div>
        <div className="variants-container">
          <Button kind="secondary" size="md">
            Button CTA
          </Button>
          <Button
            kind="secondary"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button
            kind="secondary"
            size="xl"
            icon={RiStarLine}
            iconAlignment="right"
          >
            Button CTA
          </Button>
          <Button kind="secondary" size="2xl">
            Button CTA
          </Button>
          <Button kind="secondary" size="2xl" icon={RiStarLine} />
        </div>
        <div className="variants-container">
          <Button kind="tertiary" size="md">
            Button CTA
          </Button>
          <Button
            kind="tertiary"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button
            kind="tertiary"
            size="xl"
            icon={RiStarLine}
            iconAlignment="right"
          >
            Button CTA
          </Button>
          <Button kind="tertiary" size="2xl">
            Button CTA
          </Button>
          <Button kind="tertiary" size="2xl" icon={RiStarLine} />
        </div>
        <div className="variants-container">
          <Button to="#" size="md">
            Button CTA
          </Button>
          <Button
            to="#"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button to="#" size="xl" icon={RiStarLine} iconAlignment="right">
            Button CTA
          </Button>
          <Button to="#" size="2xl">
            Button CTA
          </Button>
          <Button to="#" size="2xl" icon={RiStarLine} />
        </div>
        <div className="variants-container">
          <Button to="#" kind="grey" size="md">
            Button CTA
          </Button>
          <Button
            to="#"
            kind="grey"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button
            to="#"
            kind="grey"
            size="xl"
            icon={RiStarLine}
            iconAlignment="right"
          >
            Button CTA
          </Button>
          <Button to="#" kind="grey" size="2xl">
            Button CTA
          </Button>
          <Button to="#" kind="grey" size="2xl" icon={RiStarLine} />
        </div>
        <div className="variants-container">
          <Button kind="danger" size="md">
            Button CTA
          </Button>
          <Button
            kind="danger"
            size="lg"
            icon={RiStarLine}
            iconDescription="star icon"
          >
            Button CTA
          </Button>
          <Button
            kind="danger"
            size="xl"
            icon={RiStarLine}
            iconAlignment="right"
          >
            Button CTA
          </Button>
          <Button kind="danger" size="2xl">
            Button CTA
          </Button>
          <Button kind="danger" size="2xl" icon={RiStarLine} />
        </div>
      </div>
    </PageLayout>
  );
}
