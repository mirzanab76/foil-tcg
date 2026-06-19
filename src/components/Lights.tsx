export function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 6]} intensity={1.3} color="#fff3d8" />
      <pointLight position={[-4, 2, 4]} intensity={1.1} color="#3aa0ff" distance={20} />
      <pointLight position={[3, -2, 5]} intensity={0.9} color="#ff7a59" distance={20} />
      <spotLight position={[0, 6, 5]} angle={0.5} penumbra={1} intensity={0.8} color="#ffffff" />
    </>
  )
}
