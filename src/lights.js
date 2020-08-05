import React, { useRef } from 'react'
import { useHelper } from 'drei'
import { SpotLightHelper } from 'three'
import { useControl } from 'react-three-gui'

function Lights() {

    const $dirLight = useRef()
    const $backLight = useRef()

    // useHelper($backLight, SpotLightHelper)

    const color = useControl('lights color', { type: "color", value: "#ff0000"})

    return (
      <>
        <spotLight 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          distance={9}
          angle={.4}
          penumbra={.3}
          castShadow 
          ref={$dirLight} color={color} position={[0, 0, -10]} />

        <pointLight 
          color={color} 
          position={[0, 1, -10]} 
          intensity={0.3}
        />

        <spotLight 
          ref={$backLight} 
          position={[0, 1, 3]} 
          intensity={.4} 
          distance={4}
          color="blue"  
        />

        <directionalLight position={[0, 0, 0]} intensity={.1} />
      </>
    )

}

export default Lights
