import Spline from '@splinetool/react-spline';

/**
 * Isolated Spline 3D wrapper — loaded via React.lazy() only on desktop.
 * This keeps the entire Spline runtime (~5MB) out of the mobile bundle.
 */
const SplineScene = ({ onLoad }) => {
  return (
    <Spline 
      scene="https://prod.spline.design/ePI80qDtDhPPhf2g/scene.splinecode" 
      onLoad={onLoad}
      aria-label="ArtNetwork Nucleus - Interativo 3D"
      role="img"
    />
  );
};

export default SplineScene;
