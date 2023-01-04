import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei"
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import Ground from "./Ground"

const Scene = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera maxDefault fov={500} position={[3, 2, 5]} />
      <Ground />
      <Sky
        distance={3000}
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        sunPosition={[0, 0, 1]}
        inclination={0.49}
        azimuth={0.25}
      />
      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.5} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </>
  )
}

export default Scene
