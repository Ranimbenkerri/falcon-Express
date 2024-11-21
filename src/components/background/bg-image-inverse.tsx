import img from '../../assets/contact-bg.png'

export default function BgImageInverse() {
  return (
    <div
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        maxWidth: '1920px',
        maxHeight: '960px', // Sets the maximum width
        height: '100%',
        margin: '0 auto', // Centers the container horizontally
        position: 'absolute',
        left: '50%', // Centering logic
        transform: 'translateX(-50%)', // Ensures proper centering
        zIndex: -1,
      }}
    ></div>
  )
}
