import { createRoot } from "react-dom/client"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/cannon"
import { Suspense } from "react"
import { Leva } from "leva"
import Scene from "./Scene"
import Loader from "./Loader"
import "./styles.css"

createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<Loader />}>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, 0, 0]}>
          <Scene />
        </Physics>
      </Canvas>
    </Suspense>
    <Leva collapsed />
  </>
)
