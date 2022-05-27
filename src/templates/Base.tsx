import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { HorizontalSponsors } from './HorizontalSponsors';
import { Pricing } from './Pricing';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <HorizontalSponsors />
    <VerticalFeatures />
    <Pricing />
    <Contact />
    <Footer />
  </div>
);

export { Base };
