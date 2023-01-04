import { useProgress } from "@react-three/drei"

const Loader = () => {
  const { progress } = useProgress()
  console.log("progress", progress)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1> Loading {progress}%</h1>
    </div>
  )
}

export default Loader
