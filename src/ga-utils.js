import ReactGA from 'react-ga';

export const initGA = (id) => {
  if (process.env.NODE_ENV === 'productions') {
    ReactGA.initialize(id);
  }
};
