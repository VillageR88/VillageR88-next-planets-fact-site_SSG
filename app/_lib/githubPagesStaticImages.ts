// These imports are used to generate static paths only for Github Pages
// For Vercel they are obsolete
import mercuryImage from '@/public/assets/planet-mercury.svg';
import venusImage from '@/public/assets/planet-venus.svg';
import earthImage from '@/public/assets/planet-earth.svg';
import marsImage from '@/public/assets/planet-mars.svg';
import jupiterImage from '@/public/assets/planet-jupiter.svg';
import saturnImage from '@/public/assets/planet-saturn.svg';
import uranusImage from '@/public/assets/planet-uranus.svg';
import neptuneImage from '@/public/assets/planet-neptune.svg';
import mercuryInternalImage from '@/public/assets/planet-mercury-internal.svg';
import venusInternalImage from '@/public/assets/planet-venus-internal.svg';
import earthInternalImage from '@/public/assets/planet-earth-internal.svg';
import marsInternalImage from '@/public/assets/planet-mars-internal.svg';
import jupiterInternalImage from '@/public/assets/planet-jupiter-internal.svg';
import saturnInternalImage from '@/public/assets/planet-saturn-internal.svg';
import uranusInternalImage from '@/public/assets/planet-uranus-internal.svg';
import neptuneInternalImage from '@/public/assets/planet-neptune-internal.svg';
import mercuryGeologyImage from '@/public/assets/geology-mercury.png';
import venusGeologyImage from '@/public/assets/geology-venus.png';
import earthGeologyImage from '@/public/assets/geology-earth.png';
import marsGeologyImage from '@/public/assets/geology-mars.png';
import jupiterGeologyImage from '@/public/assets/geology-jupiter.png';
import saturnGeologyImage from '@/public/assets/geology-saturn.png';
import uranusGeologyImage from '@/public/assets/geology-uranus.png';
import neptuneGeologyImage from '@/public/assets/geology-neptune.png';

//only for Github Pages
export const staticImageImports = {
  mercury: mercuryImage as string,
  venus: venusImage as string,
  earth: earthImage as string,
  mars: marsImage as string,
  jupiter: jupiterImage as string,
  saturn: saturnImage as string,
  uranus: uranusImage as string,
  neptune: neptuneImage as string,
};

//only for Github Pages
export const staticInternalImageImports = {
  mercury: mercuryInternalImage as string,
  venus: venusInternalImage as string,
  earth: earthInternalImage as string,
  mars: marsInternalImage as string,
  jupiter: jupiterInternalImage as string,
  saturn: saturnInternalImage as string,
  uranus: uranusInternalImage as string,
  neptune: neptuneInternalImage as string,
};

//only for Github Pages
export const staticGeologyImageImports = {
  mercury: mercuryGeologyImage,
  venus: venusGeologyImage,
  earth: earthGeologyImage,
  mars: marsGeologyImage,
  jupiter: jupiterGeologyImage,
  saturn: saturnGeologyImage,
  uranus: uranusGeologyImage,
  neptune: neptuneGeologyImage,
};
