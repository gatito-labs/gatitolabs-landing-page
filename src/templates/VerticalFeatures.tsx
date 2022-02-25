import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Taller de robótica virtual"
    description="Desde casa. Sin instalaciones. Para principiantes y avanzados."
  >
    <VerticalFeatureRow
      title="Contenido básico y avanzado"
      description="Empieza aprendiendo programación con bloques y luego aprende Python."
      image="/assets/images/feat-python.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Robótica virtual"
      description="Aprende programando un robot virtual. Resuelve desafíos y colabora."
      image="/assets/images/feat-robot.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Todo en la nube"
      description="Sin instalaciones. Ingresa desde cualquier computador."
      image="/assets/images/feat-cloud.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
