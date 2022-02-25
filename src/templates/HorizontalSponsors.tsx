import React from 'react';

import { Section } from '../layout/Section';
import { HorizontalLogos } from '../sponsors/HorizontalLogos';

const HorizontalSponsors = () => (
  <div className="bg-gray-200">
    <Section title="Nos apoyan" description="">
      <HorizontalLogos
        title=""
        description=""
        image1="/assets/images/logo-corfo-footer.png"
        image2="/assets/images/logo-openbeauchef.svg"
        image3=""
        imageAlt="First feature alt text"
      />
    </Section>
  </div>
);

export { HorizontalSponsors };
