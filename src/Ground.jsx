import { Plane } from "@react-three/drei"

const Ground = () => {
  return (
    <>
      <Plane rotation-x={Math.PI / 2} args={[50, 50, 50, 50]}>
        <meshBasicMaterial reflectivity={55} color="#8b63c7" wireframe />
      </Plane>
    </>
  )
}

export default Ground
