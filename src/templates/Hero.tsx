import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo img="assets/images/logo.svg" />}>
        <li>
          <Link href="/#contact">
            <a>Demo</a>
          </Link>
        </li>
        <li>
          <Link href="https://test.gatitolabs.cl">
            <a>Ingresar</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Cursos de programación para\n'}
            <span className="text-primary-500">escolares</span>
          </>
        }
        description="Taller de robótica en un entorno virtual. Accede desde tu casa."
        button={
          <Link href="/#contact">
            <a>
              <Button xl>Demo gratis</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
